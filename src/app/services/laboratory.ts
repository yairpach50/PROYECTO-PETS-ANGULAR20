import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LaboratoryModel } from '../models/laboratory.model';

@Injectable({
  providedIn: 'root'
})
export class LaboratoryService {

  private laboratories = new BehaviorSubject<LaboratoryModel[]>([
    {
      id: 1,
      petId: 1,
      testName: 'Examen de sangre',
      result: 'Normal',
      date: new Date(),
      status: 'activo',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);

  laboratories$ = this.laboratories.asObservable();

  getAll() {
    return this.laboratories.value;
  }

  add(lab: LaboratoryModel) {
    const current = this.laboratories.value;
    lab.id = current.length ? Math.max(...current.map(l => l.id)) + 1 : 1;
    lab.createdAt = new Date();
    lab.updatedAt = new Date();
    this.laboratories.next([...current, lab]);
  }

  update(updated: LaboratoryModel) {
    const list = this.laboratories.value.map(l =>
      l.id === updated.id ? { ...updated, updatedAt: new Date() } : l
    );
    this.laboratories.next(list);
  }

  getById(id: number) {
    return this.laboratories.value.find(l => l.id === id);
  }
}
