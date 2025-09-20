export interface PrescriptionModel {
  id: number;
  appointmentId: number;
  medicineId: number;
  dosage: string;
  duration: string;
  instructions: string;
  createdAt: Date;
  updatedAt: Date;
}
