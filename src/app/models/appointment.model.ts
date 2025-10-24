export interface Appointment {
  id: number;
  petId: number;
  veterinarianId: number;
  date: Date;
  reason: string;
  status: 'programado' | 'completado' | 'cancelado';
  createdAt: Date;
  updatedAt: Date;
}
