export interface MedicalhistoryModel {
    id: number;
    petId: number;
    description: string;
    date: Date;
    status: 'activo' | 'inactivo';
    createdAt: Date;
    updatedAt: Date;
}
