export interface PatientBillingData {
  id: string;
  dob: string;
  gender: 'F' | 'M'; // Gender, assuming only 'F' or 'M' are possible values
  billing_class: string; // e.g., 'professional', 'institutional'
  patient_id: number;
  line: number;
  dos_from: string;
  revcode: string | null;
  code: string;
  units: number;
  charges: number;
  rend_provider_id: number;
  dx1: string;
  dx2: string;
  allowed: number;
  benefit: number;
  copay: number;
}
