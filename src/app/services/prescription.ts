import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PrescriptionModel } from '../models/prescription.model';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  private prescriptions = new BehaviorSubject<PrescriptionModel[]>([
    {
      id: 1,
      appointmentId: 1,
      medicineId: 1,
      dosage: '1 tableta',
      duration: '5 días',
      instructions: 'Después de comer',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);

  prescriptions$ = this.prescriptions.asObservable();

  getAll() {
    return this.prescriptions.value;
  }

  add(pres: PrescriptionModel) {
    const current = this.prescriptions.value;
    pres.id = current.length ? Math.max(...current.map(p => p.id)) + 1 : 1;
    pres.createdAt = new Date();
    pres.updatedAt = new Date();
    this.prescriptions.next([...current, pres]);
  }

  update(updated: PrescriptionModel) {
    const list = this.prescriptions.value.map(p =>
      p.id === updated.id ? { ...updated, updatedAt: new Date() } : p
    );
    this.prescriptions.next(list);
  }

  getById(id: number) {
    return this.prescriptions.value.find(p => p.id === id);
  }
}
