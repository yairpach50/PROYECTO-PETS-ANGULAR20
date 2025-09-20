export interface OwnerI{
  id: number;
  name: string;
  phone: string;
  email: string;
  status: 'activo' | 'inactivo';
  updatedAt: Date;
}