export interface PetModel
{
    id: number;
    name: string;
    birthDate: Date;
    type: string;
    color: string;
    ownerId: number;
    status: 'activo' | 'inactivo';
    updatedAt: Date;

}
