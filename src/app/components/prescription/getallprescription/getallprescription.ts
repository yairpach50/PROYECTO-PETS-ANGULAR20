import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { PrescriptionModel } from '../../../models/prescription.model';
import { PrescriptionService } from '../../../services/prescription';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-getallprescription',
  templateUrl: './getallprescription.html',
  styleUrls: ['./getallprescription.css'],
  standalone: true,
  imports: [
    TableModule,
    ButtonModule,
    RouterModule,
    CommonModule
  ]
})
export class GetallPrescription implements OnInit {
  prescriptions: PrescriptionModel[] = [];

  constructor(
    private prescription: PrescriptionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.prescription.prescriptions$.subscribe(pres => {
      this.prescriptions = pres;
    });
  }

  addPrescription() {
    this.router.navigate(['/prescriptions/create']);
  }
}