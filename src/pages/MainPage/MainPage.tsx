import {Box, CircularProgress, Tab, Tabs, Typography} from "@mui/material";
import * as React from "react";
import { useEffect, useState } from "react";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import { GridColDef } from "@mui/x-data-grid-premium";
import CloseIcon from '@mui/icons-material/Close';
import {cellLabelSX} from "./style";
import {cellLabelColor} from "./utils/cellLabelColor";

import { PatientBillingData } from "../../interfaces/patients";
import {fetchPatientBillingData} from "../../store/patientsSlice";
import {useAppDispatch, useAppSelector} from "../../hooks/patients";

import { Grid } from "../../components/GridComponent";
import { CellLabelComponent } from "../../components/GridComponent/CellLabelComponent";
import { SearchComponent } from "../../components/SearchComponent";
import { SimpleTextComponent } from "../../components/SimpleTextComonent";
import { CustomTabPanelComponent } from "../../components/TabComponent/CustopmTabPanelComponent";
import {a11yProps} from "./utils/a11yProps";

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
            <Box sx={cellLabelSX}> <CellLabelComponent color={cellLabelColor(params.value)} value={params.value} /> </Box>),
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

    const [value, setValue] = useState(0);


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

    const handleSearch = (query: string) => {
        // Filter rows based on the search query
        const filtered = data.filter(
            (row : PatientBillingData) =>
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

    const handleRowClick = (rowData: PatientBillingData) => {
        setSelectedRowData(rowData);
    };

    // @ts-ignore
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{width: '100%'}}>
            <SearchComponent onSearch={handleSearch} />
            <Grid onRowClick={handleRowClick} rows={filteredRows} columns={columns}  paginationOption={[5,10,15]} />
            {selectedRowData && (
                <Box sx={{marginTop: '20px', width: '100%', border: '1px solid rgba(224, 224, 224, 1)', padding: '15px', borderRadius: '8px'}}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 20}}>
                        <Box sx={{ width: '100%' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                    <Tab label="General" {...a11yProps(0)} />
                                    <Tab label="Additional" {...a11yProps(1)} />
                                </Tabs>
                            </Box>
                            <CustomTabPanelComponent value={value} index={0}>
                                <Box sx={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
                                    {/* TODO:  better for UI using name / surname of patient instead ID is same thing for table, it help for user interface */}
                                    <SimpleTextComponent label={'Patient'} value={selectedRowData?.id} />

                                    <SimpleTextComponent label={'Gender'} >
                                        <Box>
                                            {selectedRowData?.gender === 'F' ? (
                                                <FemaleIcon style={{ color: 'pink' }} />
                                            ) : (
                                                <MaleIcon style={{ color: 'blue' }} />
                                            )}
                                        </Box>
                                    </SimpleTextComponent>

                                    <SimpleTextComponent label={'Billing Class'} >
                                        <Box sx={{width: 'fit-content'}}>
                                            <CellLabelComponent color={cellLabelColor(selectedRowData?.billing_class)} value={selectedRowData?.billing_class} />
                                        </Box>
                                    </SimpleTextComponent>

                                    <SimpleTextComponent label={'Last Visit'} value={selectedRowData?.dos_from} />

                                    <SimpleTextComponent label={'Code'} value={selectedRowData?.code} />

                                    {/* TODO:  As I know most unit has a name, and on table it some think like ID, better to use API call, maybe for transform ID to unit name */}
                                    <SimpleTextComponent label={'Unit'} value={selectedRowData?.units.toString()} />

                                </Box>
                            </CustomTabPanelComponent>
                            <CustomTabPanelComponent value={value} index={1}>
                                <Box sx={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
                                    <SimpleTextComponent label={'Provider'} value={selectedRowData?.rend_provider_id.toString()} />

                                    <SimpleTextComponent label={'DX1'} value={selectedRowData?.dx1} />

                                    <SimpleTextComponent label={'DX2'} value={selectedRowData?.dx2} />

                                    <SimpleTextComponent label={'Allowed'} value={selectedRowData?.allowed.toString()} />

                                    <SimpleTextComponent label={'Benifit'} value={selectedRowData?.benefit.toString()} />

                                </Box>
                            </CustomTabPanelComponent>
                        </Box>
                    </Box>
                </Box>
            )}
        </Box>
    )
}

export default MainPage
