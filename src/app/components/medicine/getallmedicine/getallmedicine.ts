import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MedicineModel } from '../../../models/medicine.model';
import { MedicineService } from '../../../services/medicine';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-getallmedicine',
  templateUrl: './getallmedicine.html',
  styleUrls: ['./getallmedicine.css'],
  standalone: true,
  imports: [
    TableModule,
    ButtonModule,
    TagModule,
    RouterModule,
    CommonModule
  ]
})
export class GetallMedicine implements OnInit {
  medicines: MedicineModel[] = [];

  constructor(
    private medicine: MedicineService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.medicine.medicines$.subscribe(meds => {
      this.medicines = meds;
    });
  }

  addMedicine() {
    this.router.navigate(['/medicines/create']);
  }
}