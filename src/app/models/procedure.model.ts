export interface ProcedureModel {
  id: number;
  petId: number;
  name: string;
  description: string;
  date: Date;
  status: 'activo' | 'inactivo';
  createdAt: Date;
  updatedAt: Date;
}
