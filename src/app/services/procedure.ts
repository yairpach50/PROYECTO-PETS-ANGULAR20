import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProcedureModel } from '../models/procedure.model';

@Injectable({
  providedIn: 'root'
})
export class ProcedureService {

  private procedures = new BehaviorSubject<ProcedureModel[]>([
    {
      id: 1,
      petId: 1,
      name: 'Limpieza dental',
      description: 'Procedimiento de limpieza',
      date: new Date(),
      status: 'activo',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);

  procedures$ = this.procedures.asObservable();

  getAll() {
    return this.procedures.value;
  }

  add(proc: ProcedureModel) {
    const current = this.procedures.value;
    proc.id = current.length ? Math.max(...current.map(p => p.id)) + 1 : 1;
    proc.createdAt = new Date();
    proc.updatedAt = new Date();
    this.procedures.next([...current, proc]);
  }

  update(updated: ProcedureModel) {
    const list = this.procedures.value.map(p =>
      p.id === updated.id ? { ...updated, updatedAt: new Date() } : p
    );
    this.procedures.next(list);
  }

  getById(id: number) {
    return this.procedures.value.find(p => p.id === id);
  }
}
