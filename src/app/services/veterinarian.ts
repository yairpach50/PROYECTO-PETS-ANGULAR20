import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { VeterinarianModel } from '../models/veterinarian.model';

@Injectable({
  providedIn: 'root'
})
export class VeterinarianService {

  private veterinarians = new BehaviorSubject<VeterinarianModel[]>([
    {
      id: 1,
      name: 'Dra. Pérez',
      specialty: 'Cirugía',
      phone: '3001234567',
      email: 'dra.perez@vet.com',
      status: 'activo',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);

  veterinarians$ = this.veterinarians.asObservable();

  getAll() {
    return this.veterinarians.value;
  }

  add(vet: VeterinarianModel) {
    const current = this.veterinarians.value;
    vet.id = current.length ? Math.max(...current.map(v => v.id)) + 1 : 1;
    vet.createdAt = new Date();
    vet.updatedAt = new Date();
    this.veterinarians.next([...current, vet]);
  }

  update(updated: VeterinarianModel) {
    const list = this.veterinarians.value.map(v =>
      v.id === updated.id ? { ...updated, updatedAt: new Date() } : v
    );
    this.veterinarians.next(list);
  }

  getById(id: number) {
    return this.veterinarians.value.find(v => v.id === id);
  }
}
