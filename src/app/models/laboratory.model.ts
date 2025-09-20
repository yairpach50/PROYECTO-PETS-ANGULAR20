export interface LaboratoryModel {
  id: number;
  petId: number;
  testName: string;
  result: string;
  date: Date;
  status: 'activo' | 'inactivo';
  createdAt: Date;
  updatedAt: Date;
}
