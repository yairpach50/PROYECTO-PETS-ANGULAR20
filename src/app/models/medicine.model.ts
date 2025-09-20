export interface MedicineModel {
  id: number;
  name: string;
  description: string;
  stock: number;
  price: number;
  status: 'activo' | 'inactivo';
  createdAt: Date;
  updatedAt: Date;
}
