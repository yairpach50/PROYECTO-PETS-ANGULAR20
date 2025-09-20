import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { VaccineModel } from '../models/vaccine.model';

@Injectable({
  providedIn: 'root'
})
export class VaccineService {

  private vaccines = new BehaviorSubject<VaccineModel[]>([
    {
      id: 1,
      name: 'Rabia',
      description: 'Vacuna contra la rabia',
      manufacturer: 'VetLabs',
      status: 'activo',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);

  vaccines$ = this.vaccines.asObservable();

  getAll() {
    return this.vaccines.value;
  }

  add(vac: VaccineModel) {
    const current = this.vaccines.value;
    vac.id = current.length ? Math.max(...current.map(v => v.id)) + 1 : 1;
    vac.createdAt = new Date();
    vac.updatedAt = new Date();
    this.vaccines.next([...current, vac]);
  }

  update(updated: VaccineModel) {
    const list = this.vaccines.value.map(v =>
      v.id === updated.id ? { ...updated, updatedAt: new Date() } : v
    );
    this.vaccines.next(list);
  }

  getById(id: number) {
    return this.vaccines.value.find(v => v.id === id);
  }
}
