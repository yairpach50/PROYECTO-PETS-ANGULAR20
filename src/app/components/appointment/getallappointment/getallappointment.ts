import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { AppointmentService } from '../../../services/appointment';
import { Appointment } from '../../../models/appointment.model';

@Component({
  selector: 'app-getall-appointment',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, RouterModule],
  templateUrl: './getallappointment.html',
})
export class GetallAppointment {
  appointments: Appointment[] = [];

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit() {
    this.appointments = this.appointmentService.getAll();
  }
}
