import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PatientBillingData } from '../interfaces/patients';
import { fetchPatientBillingData } from '../api/patient';

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
});

export default patientBillingSlice.reducer;
