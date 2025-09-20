import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { MedicalhistoryService } from '../../../services/medicalhistory';
import { MedicalhistoryModel } from '../../../models/medicalhistory.model';

@Component({
  selector: 'app-getall-medicalhistory',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, RouterModule],
  templateUrl: './getallmedicalhistory.html',
})
export class GetallMedicalHistory {
  histories: MedicalhistoryModel[] = [];

  constructor(private historyService: MedicalhistoryService) {}

  ngOnInit() {
    this.histories = this.historyService.getHistories();
  }
}
