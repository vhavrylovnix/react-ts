import { createAsyncThunk } from '@reduxjs/toolkit';
import { PatientBillingData } from '../interfaces/patients';
import billingData from '../helpers/data.json';

export const fetchPatientBillingData = createAsyncThunk<PatientBillingData[], void, { rejectValue: string }>(
  'patientBilling/fetchData',
  async (_, { rejectWithValue }) => {
    try {
      // Simulated API call with sample data
      return await new Promise<PatientBillingData[]>(
        (resolve) =>
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
