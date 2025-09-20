import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { VaccineApplicationModel } from '../models/vaccineapplication.model';

@Injectable({
  providedIn: 'root'
})
export class VaccineApplicationService {

  private applications = new BehaviorSubject<VaccineApplicationModel[]>([
    {
      id: 1,
      petId: 1,
      vaccineId: 1,
      date: new Date(),
      dose: '1ml',
      status: 'aplicada',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);

  applications$ = this.applications.asObservable();

  getAll() {
    return this.applications.value;
  }

  add(app: VaccineApplicationModel) {
    const current = this.applications.value;
    app.id = current.length ? Math.max(...current.map(a => a.id)) + 1 : 1;
    app.createdAt = new Date();
    app.updatedAt = new Date();
    this.applications.next([...current, app]);
  }

  update(updated: VaccineApplicationModel) {
    const list = this.applications.value.map(a =>
      a.id === updated.id ? { ...updated, updatedAt: new Date() } : a
    );
    this.applications.next(list);
  }

  getById(id: number) {
    return this.applications.value.find(a => a.id === id);
  }
}
