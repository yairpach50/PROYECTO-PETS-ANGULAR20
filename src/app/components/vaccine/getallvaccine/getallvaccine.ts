import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VaccineModel } from '../../../models/vaccine.model';
import { VaccineService } from '../../../services/vaccine';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-getallvaccine',
  templateUrl: './getallvaccine.html',
  styleUrls: ['./getallvaccine.css'],
  standalone: true,
  imports: [
    TableModule,
    ButtonModule,
    TagModule,
    RouterModule
  ]
})
export class GetallVaccine implements OnInit {
  vaccines: VaccineModel[] = [];

  constructor(
    private vaccineService: VaccineService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Suscribirse al BehaviorSubject para obtener la lista de vacunas en tiempo real
    this.vaccineService.vaccines$.subscribe(vaxs => {
      this.vaccines = vaxs;
    });
  }

  // Método para redirigir al formulario de creación de una nueva vacuna
  addVaccine() {
    this.router.navigate(['/vaccines/create']);
  }
}