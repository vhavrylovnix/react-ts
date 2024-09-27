// patientBillingSlice.ts
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PatientBillingData} from "../interfaces/patients.ts";

import billingData from '../helpers/data.json';

// Async thunk for fetching data
export const fetchPatientBillingData = createAsyncThunk<
    PatientBillingData[],
    void,
    { rejectValue: string }
>(
    'patientBilling/fetchData',
    async (_, { rejectWithValue }) => {
        try {
            // Simulated API call with sample data
            return await new Promise<PatientBillingData[]>((resolve) =>
                setTimeout(() => {
                    resolve(billingData);
                }, 1000) // Simulated delay of 1 second
            );
        } catch (error) {
            // Return a custom error message
            return rejectWithValue('Failed to fetch patient billing data');
        }
    }
);

interface PatientBillingState {
    data: PatientBillingData[];
    loading: boolean;
    error: string | null;
}

const initialState: PatientBillingState = {
    data: [],
    loading: false,
    error: null,
};

const patientBillingSlice = createSlice({
    name: 'patientBilling',
    initialState: initialState,
    reducers: {
        resetData: (state) => {
            state.data = [];
            state.loading = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPatientBillingData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPatientBillingData.fulfilled, (state, action: PayloadAction<PatientBillingData[]>) => {
                state.data = action.payload;
                state.loading = false;
            })
            .addCase(fetchPatientBillingData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch data';
            });
    },
})

export default patientBillingSlice.reducer;
