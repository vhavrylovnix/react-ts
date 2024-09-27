import {Box, CircularProgress, Typography} from "@mui/material";
import Grid from "../../components/Grid/Grid.tsx";
import * as React from "react";
import {useEffect, useState} from "react";
import {PatientBillingData} from "../../interfaces/patients.ts";
import {fetchPatientBillingData} from "../../store/patientsSlice.tsx";
import {useAppDispatch, useAppSelector} from "../../hooks/patients.tsx";
import SearchComponent from "../../components/Search/Search.tsx";
import SimpleText from "../../components/SimpleText/SimpleText.tsx";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import {GridColDef} from "@mui/x-data-grid-premium";
import BillingClassBadge from "../../components/Grid/CellLabel/CellLabel.tsx";
import {cellLabelSX} from "./style.ts";
import {cellLabelColor} from "./utils/cellLabelColor.ts";
import CloseIcon from '@mui/icons-material/Close';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'dob', headerName: 'DOB', width: 120 },
    {
        field: 'gender',
        headerName: 'Gender',
        width: 100,
        renderCell: (params) => (
            <Box sx={cellLabelSX}>
                {params.value === 'F' ? (
                    <FemaleIcon style={{ color: 'pink' }} />
                ) : (
                    <MaleIcon style={{ color: 'blue' }} />
                )}
            </Box>
        ),
    },
    {
        field: 'billing_class',
        headerName: 'Billing Class',
        width: 150,
        renderCell: (params) => (
            <Box sx={cellLabelSX}> <BillingClassBadge color={cellLabelColor(params.value)} value={params.value} /> </Box>),
    },
    { field: 'patient_id', headerName: 'Patient ID', width: 130 },
    { field: 'line', headerName: 'Line', width: 90 },
    { field: 'dos_from', headerName: 'Date of Service', width: 150 },
    { field: 'revcode', headerName: 'Rev Code', width: 120, renderCell: (params) => (
            <Box sx={cellLabelSX}> {params.value ? (<Typography>
                {params.value}
            </Typography>) : (<CloseIcon />)} </Box>),
    },
    { field: 'code', headerName: 'Code', width: 100 },
    { field: 'units', headerName: 'Units', width: 100 },
    { field: 'charges', headerName: 'Charges', width: 130 },
    { field: 'rend_provider_id', headerName: 'Provider ID', width: 130 },
    { field: 'dx1', headerName: 'DX1', width: 100 },
    { field: 'dx2', headerName: 'DX2', width: 100 },
    { field: 'allowed', headerName: 'Allowed', width: 120 },
    { field: 'benefit', headerName: 'Benefit', width: 120 },
    { field: 'copay', headerName: 'Copay', width: 100 },
];

const MainPage: React.FC = () =>  {
    const [selectedRowData, setSelectedRowData] = useState<PatientBillingData | null>(null);
    const dispatch = useAppDispatch();
    const { data, loading, error } = useAppSelector((state) => state.patientBilling);
    const [filteredRows, setFilteredRows] = useState(data);


    useEffect(() => {
        dispatch(fetchPatientBillingData());
    }, [dispatch]);


    useEffect(() => {
        setFilteredRows(data);
    }, [data]);

   if (loading) return <Box sx={{
        display: 'flex',
        width: '100%',
        height: '80vh',
        justifyContent: 'center',
        alignItems: 'center'
    }}> <CircularProgress size={100} /> </Box>;

    if (error) return <div>Error: {error}</div>;

    // Handle the search query received from the SearchComponent
    const handleSearch = (query: string) => {
        // Filter rows based on the search query
        const filtered = data.filter(
            (row) =>
                row.id.toLowerCase().includes(query) ||
                row.dob.toLowerCase().includes(query) ||
                row.gender.toLowerCase().includes(query) ||
                row.billing_class.toLowerCase().includes(query) ||
                row.code.toLowerCase().includes(query) ||
                String(row.patient_id).includes(query)
        );
        setSelectedRowData(null);
        setFilteredRows(filtered);
    };
    // Callback function to handle row click from the child component
    const handleRowClick = (rowData: PatientBillingData) => {
        setSelectedRowData(rowData);
    };

    return (
        <Box sx={{width: '100%'}}>
            <SearchComponent onSearch={handleSearch} />
            <Grid onRowClick={handleRowClick} rows={filteredRows} columns={columns}  paginationOption={[5,10,15]} />
            {selectedRowData && (
                <Box sx={{marginTop: '20px', width: '100%', border: '1px solid rgba(224, 224, 224, 1)', padding: '15px', borderRadius: '8px'}}>
                    <Box
                        component='h3'
                        sx={{color: '#1976d2'}}
                    >
                        Row Details
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 20}}>
                        <Box>
                            {/* TODO:  better for UI using name / surname of patient instead ID is same thing for table, it help for user interface */}
                            <SimpleText label={'Patient'} value={selectedRowData?.id} />

                            <SimpleText label={'Gender'} value={
                                <Box>
                                    {selectedRowData?.gender === 'F' ? (
                                        <FemaleIcon style={{ color: 'pink' }} />
                                    ) : (
                                        <MaleIcon style={{ color: 'blue' }} />
                                    )}
                                </Box>}
                            />

                            <SimpleText label={'Billing Class'} value={
                                <BillingClassBadge color={cellLabelColor(selectedRowData?.billing_class)} value={selectedRowData?.billing_class} />
                            } />

                            <SimpleText label={'Last Visit'} value={selectedRowData?.dos_from} />

                            <SimpleText label={'Code'} value={selectedRowData?.code} />

                            {/* TODO:  As I know most unit has a name, and on table it some think like ID, better to use API call, maybe for transform ID to unit name */}
                            <SimpleText label={'Unit'} value={selectedRowData?.units} />

                        </Box>
                        <Box>
                            <Box component='h4' sx={{color: '#1976d2', margin: '0'}}>
                                Additional Info
                            </Box>

                            <SimpleText label={'Provider'} value={selectedRowData?.rend_provider_id} />

                            <SimpleText label={'DX1'} value={selectedRowData?.dx1} />

                            <SimpleText label={'DX2'} value={selectedRowData?.dx2} />

                            <SimpleText label={'Allowed'} value={selectedRowData?.allowed} />

                            <SimpleText label={'Benifit'} value={selectedRowData?.benefit} />

                        </Box>
                    </Box>

                </Box>
            )}
        </Box>
    )
}

export default MainPage
