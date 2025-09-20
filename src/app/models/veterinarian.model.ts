export interface VeterinarianModel {
  id: number;
  name: string;
  specialty: string;
  phone: string;
  email: string;
  status: 'activo' | 'inactivo';
  createdAt: Date;
  updatedAt: Date;
}
