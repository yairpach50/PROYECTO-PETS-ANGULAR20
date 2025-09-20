import { Injectable } from '@angular/core';
import { OwnerI } from '../models/owner';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Owner {
  private owner = new BehaviorSubject<OwnerI[]>([
    {
      id: 1,
      name: 'Jaider Quintero',
      phone: '727-727-727',
      email: 'jaider.quintero@hotmail.com',
      status: 'activo',
      updatedAt: new Date()
    }
  ]);

  owner$ = this.owner.asObservable();

  getOwners() {
    return this.owner.value;
  }

  addOwner(owner: OwnerI) {
    const owners = this.owner.value;
    owner.id = owners.length ? Math.max(...owners.map((o) => o.id)) + 1 : 1;
    this.owner.next([...owners, owner]);
  }

  update(updated: OwnerI) {
    const owners = this.owner.value.map(o => 
      o.id === updated.id ? updated : o
    );
    this.owner.next(owners);
  }

  getOwnerById(id: number): OwnerI | undefined {
    return this.owner.value.find(o => o.id === id);
  }
}
