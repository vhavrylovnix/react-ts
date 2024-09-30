import { configureStore } from '@reduxjs/toolkit';
import patientBillingReducer from './patientsSlice.tsx';

export const store = configureStore({
  reducer: {
    patientBilling: patientBillingReducer,
  },
});
