import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Appointment } from '../models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private appointments = new BehaviorSubject<Appointment[]>([
    {
      id: 1,
      petId: 1,
      veterinarianId: 1,
      date: new Date(),
      reason: 'Chequeo general',
      status: 'programado',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);

  appointments$ = this.appointments.asObservable();

  getAll() {
    return this.appointments.value;
  }

  add(appointment: Appointment) {
    const current = this.appointments.value;
    appointment.id = current.length ? Math.max(...current.map(a => a.id)) + 1 : 1;
    appointment.createdAt = new Date();
    appointment.updatedAt = new Date();
    this.appointments.next([...current, appointment]);
  }

  update(updated: Appointment) {
    const list = this.appointments.value.map(a =>
      a.id === updated.id ? { ...updated, updatedAt: new Date() } : a
    );
    this.appointments.next(list);
  }

  getById(id: number) {
    return this.appointments.value.find(a => a.id === id);
  }
}

