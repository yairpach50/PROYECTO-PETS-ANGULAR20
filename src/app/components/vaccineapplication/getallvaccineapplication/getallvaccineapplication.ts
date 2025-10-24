import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { VaccineApplicationModel } from '../../../models/vaccineapplication.model';
import { VaccineApplicationService } from '../../../services/vaccineapplication';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-getallvaccineapplication',
  templateUrl: './getallvaccineapplication.html',
  styleUrls: ['./getallvaccineapplication.css'],
  standalone: true, 
  imports: [
    TableModule,
    ButtonModule,
    TagModule,
    RouterModule,
    CommonModule 
  ]
})
export class GetallVaccineApplication implements OnInit {
  applications: VaccineApplicationModel[] = [];

  constructor(
    private vaccineApplication: VaccineApplicationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.vaccineApplication.applications$.subscribe(apps => {
      this.applications = apps;
    });
  }

  addVaccineApplication() {
    this.router.navigate(['/vaccineapplications/create']);
  }
}