export interface PatientBillingData {
  id: string;
  dob: string; // Date of Birth, format: DD/MM/YYYY
  gender: 'F' | 'M'; // Gender, assuming only 'F' or 'M' are possible values
  billing_class: string; // e.g., 'professional', 'institutional'
  patient_id: number; // Unique identifier for the patient
  line: number; // Line item number
  dos_from: string; // Date of Service, format: DD/MM/YYYY
  revcode: string | null; // Revenue code, can be null
  code: string; // Service code
  units: number; // Number of units billed
  charges: number; // Total charges
  rend_provider_id: number; // Rendering provider ID
  dx1: string; // Primary diagnosis code
  dx2: string; // Secondary diagnosis code, can be empty
  allowed: number; // Allowed amount
  benefit: number; // Benefit amount
  copay: number; // Copay amount
}
