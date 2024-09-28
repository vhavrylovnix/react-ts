import { useEffect, useState } from 'react';
import { Box, Typography, Link, Button, CircularProgress } from '@mui/material';
import { useAppDispatch, useAppSelector } from "../../hooks/patients";
import { fetchPatientBillingData } from "../../store/patientsSlice";
import { TimelineContainer } from "../../components/TimeLine/TimeLineContainer";
import { TimelineItem } from "../../components/TimeLine/TimeLineItem";
import { getLabel } from "../../helpers/getLabelCode";
import { TagComponent } from "../../components/TagComponent";
import { TimelineDot } from "../../components/TimeLine/TimeLineDots";
import { groupByDate } from "../../helpers/groupDateForTimeLine";
import { timeLineContainerSX } from "./style";
import { PatientBillingData } from "../../interfaces/patients";


const TimeLinePage = () => {
    const [isHorizontal, setisHorizontal] = useState<boolean>(false);
    const [loading, setLoading] = useState(true);
    const [mappedData, setMappedData] = useState<Record<string, any>>({});
    const dispatch = useAppDispatch();
    const { data} = useAppSelector((state) => state.patientBilling);


    useEffect(() => {
        dispatch(fetchPatientBillingData());
    }, [dispatch]);


    useEffect(() => {
        const grouped = groupByDate(data);
        setMappedData(grouped);
        setLoading(false);
    }, [data]);

    const handleToggleOrientation = () => {
        setisHorizontal((prev) => !prev);
    };

    if (loading) {
        return (
            <Box sx={{
                display: 'flex',
                width: '100%',
                height: '80vh',
                justifyContent: 'center',
                alignItems: 'center'
            }}> <CircularProgress size={100} /> </Box>
        );
    }

    return (
        <>
            <Button onClick={handleToggleOrientation} variant="contained" sx={{ mb: 2 }}>
                Toggle {isHorizontal ? 'Vertical' : 'Horizontal'}
            </Button>
            <TimelineContainer isHorizontal={isHorizontal}>
                {mappedData && Object.entries(mappedData).map(([date, events], index) => {
                    const totalAllowed = events.reduce((sum: number, item: PatientBillingData) => sum + Number(item.allowed), 0);
                    // TODO: 5k it so small for current grid so we increase to 10k
                    const isHighExpense = totalAllowed > 10000;
                    return (
                        <Box key={index} sx={timeLineContainerSX(isHorizontal)}>
                            <TimelineDot isHorizontal={isHorizontal} />
                            <TimelineItem>
                                {isHighExpense && (
                                    <TagComponent isHorizontal={isHorizontal} text={'HIGH EXPENSE'}></TagComponent>
                                )}
                                <Typography variant="caption" color="textSecondary">
                                    {date}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ color: isHighExpense ? 'red' : 'text.primary', fontWeight: isHighExpense ? 'bold' : 'normal' }}
                                >
                                    Total Allowed: ${totalAllowed.toFixed(2)}
                                </Typography>
                                <Box component="ul" sx={{ padding: 0, margin: 0, listStyle: 'none', marginTop: '10px', marginBottom: '10px' }}>
                                    {events.map((event: PatientBillingData, idx: number) => (
                                        <Box component="li" key={idx}>
                                            <Link
                                                href={`https://www.aapc.com/codes/cpt-codes/${event.code}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                sx={{ color: 'primary.main', textDecoration: 'none' }}
                                            >
                                                {event.code}
                                            </Link>
                                            {' - '}
                                            {getLabel(event.code)}
                                        </Box>
                                    ))}
                                </Box>
                            </TimelineItem>
                        </Box>
                    );
                })}
            </TimelineContainer>
        </>
    );
};

export default TimeLinePage;
