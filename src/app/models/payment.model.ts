export interface PaymentModel {
  id: number;
  appointmentId: number;
  amount: number;
  method: 'efectivo' | 'tarjeta' | 'tranferencia';
  date: Date;
  status: 'pagado' | 'pendiente' | 'canceledo';
  createdAt: Date;
  updatedAt: Date;
}
