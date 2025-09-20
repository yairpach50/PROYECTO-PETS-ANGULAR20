import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MedicineModel } from '../models/medicine.model';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  private medicines = new BehaviorSubject<MedicineModel[]>([
    {
      id: 1,
      name: 'Antibiótico X',
      description: 'Para infecciones leves',
      stock: 20,
      price: 15000,
      status: 'activo',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);

  medicines$ = this.medicines.asObservable();

  getAll() {
    return this.medicines.value;
  }

  add(med: MedicineModel) {
    const current = this.medicines.value;
    med.id = current.length ? Math.max(...current.map(m => m.id)) + 1 : 1;
    med.createdAt = new Date();
    med.updatedAt = new Date();
    this.medicines.next([...current, med]);
  }

  update(updated: MedicineModel) {
    const list = this.medicines.value.map(m =>
      m.id === updated.id ? { ...updated, updatedAt: new Date() } : m
    );
    this.medicines.next(list);
  }

  getById(id: number) {
    return this.medicines.value.find(m => m.id === id);
  }
}
