import React, {useEffect, useState} from 'react';
import {Box, Typography, Link, Button, CircularProgress} from '@mui/material';
import {useAppDispatch, useAppSelector} from "../../hooks/patients.tsx";
import {fetchPatientBillingData} from "../../store/patientsSlice.tsx";
import TimelineContainer from "../../components/TimeLine/TimeLineContainer/TimeLineContainer.tsx";
import TimelineItem from "../../components/TimeLine/TimeLineItem/TimeLineItem.tsx";
import {getLabel} from "../../helpers/getLabelCode.ts";
import TagComponent from "../../components/Tag/Tag.tsx";
import TimelineDot from "../../components/TimeLine/TimeLineDots/TimeLineDots.tsx";
import { groupByDate } from "../../helpers/groupDateForTimeLine.ts";
import {PatientBillingData} from "../../interfaces/patients.ts";
import {timeLineContainerSX} from "./style.ts";


const TimeLinePage = () => {
    const [isHorizontal, setisHorizontal] = useState<boolean>(false);
    const [loading, setLoading] = useState(true);
    const [mappedData, setMappedData] = useState<Record<string, [PatientBillingData[]]>>({});
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
                    const totalAllowed = events.reduce((sum, item) => sum + Number(item.allowed), 0);
                    // TODO: 5k it so small for current grid so we increase to 10k
                    const isHighExpense = totalAllowed > 10000;
                    return (
                        <Box key={index} sx={timeLineContainerSX}>
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
                                    {events.map((event, idx) => (
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
