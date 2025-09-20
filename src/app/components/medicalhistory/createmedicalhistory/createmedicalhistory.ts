import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { Router } from '@angular/router';
import { MedicalhistoryModel } from '../../../models/medicalhistory.model';
import { MedicalhistoryService } from '../../../services/medicalhistory';

@Component({
  selector: 'app-create-medicalhistory',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    DatePickerModule
  ],
  templateUrl: './createmedicalhistory.html',
})
export class CreateMedicalHistory {
  history: MedicalhistoryModel = {
    id: 0,
    petId: 0,
    description: '',
    date: new Date(),
    status: 'activo',
    createdAt: new Date(),
    updatedAt: new Date()
  };

  constructor(
    private historyService: MedicalhistoryService,
    private router: Router
  ) {}

  guardar(form: NgForm) {
    if (form.invalid) return;

    this.historyService.addHistory(this.history);
    alert('Historial médico registrado ✅');
    this.router.navigate(['/medicalhistory']); // volver a la tabla
  }
}
