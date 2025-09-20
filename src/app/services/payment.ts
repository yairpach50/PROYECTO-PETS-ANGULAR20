import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PaymentModel } from '../models/payment.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private payments = new BehaviorSubject<PaymentModel[]>([
    {
      id: 1,
      appointmentId: 1,
      amount: 50000,
      method: 'efectivo',
      date: new Date(),
      status: 'pagado',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);

  payments$ = this.payments.asObservable();

  getAll() {
    return this.payments.value;
  }

  add(payment: PaymentModel) {
    const current = this.payments.value;
    payment.id = current.length ? Math.max(...current.map(p => p.id)) + 1 : 1;
    payment.createdAt = new Date();
    payment.updatedAt = new Date();
    this.payments.next([...current, payment]);
  }

  update(updated: PaymentModel) {
    const list = this.payments.value.map(p =>
      p.id === updated.id ? { ...updated, updatedAt: new Date() } : p
    );
    this.payments.next(list);
  }

  getById(id: number) {
    return this.payments.value.find(p => p.id === id);
  }
}
