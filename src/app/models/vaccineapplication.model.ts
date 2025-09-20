export interface VaccineApplicationModel {
  id: number;
  petId: number;
  vaccineId: number;
  date: Date;
  dose: string;
  status: 'aplicada' | 'pendiente';
  createdAt: Date;
  updatedAt: Date;
}
