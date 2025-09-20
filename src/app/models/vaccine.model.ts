export interface VaccineModel {
  id: number;
  name: string;
  description: string;
  manufacturer: string;
  status: 'activo' | 'inactivo';
  createdAt: Date;
  updatedAt: Date;
}
