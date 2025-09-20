import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PetModel } from '../models/pet.model';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private pets = new BehaviorSubject<PetModel[]>([
    {
      id: 1,
      name: 'Firulais',
      birthDate: new Date('2021-01-01'),
      type: 'Perro',
      color: 'Marrón',
      ownerId: 1,
      status: 'activo',
      updatedAt: new Date()
    }
  ]);

  pets$ = this.pets.asObservable();

  getPets() {
    return this.pets.value;
  }

  addPet(pet: PetModel) {
    const current = this.pets.value;
    pet.id = current.length ? Math.max(...current.map(p => p.id)) + 1 : 1;
    pet.updatedAt = new Date();
    this.pets.next([...current, pet]);
  }

  update(petUpdated: PetModel) {
    const updatedList = this.pets.value.map(p =>
      p.id === petUpdated.id ? { ...petUpdated, updatedAt: new Date() } : p
    );
    this.pets.next(updatedList);
  }

  getPetById(id: number): PetModel | undefined {
    return this.pets.value.find(p => p.id === id);
  }
}



