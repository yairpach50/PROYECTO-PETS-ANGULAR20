import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LaboratoryModel } from '../../../models/laboratory.model';
import { LaboratoryService } from '../../../services/laboratory';

// PrimeNG Modules
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-getalllaboratory',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    TableModule,
    ButtonModule,
    TagModule
  ],
  templateUrl: './getalllaboratory.html',
  styleUrls: ['./getalllaboratory.css']
})
export class GetallLaboratory implements OnInit {

  laboratories: LaboratoryModel[] = [];

  constructor(
    private laboratory: LaboratoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.laboratory.laboratories$.subscribe(data => {
      this.laboratories = data;
    });
  }

  getSeverity(status: string) {
    switch (status) {
      case 'activo':
        return 'success';
      case 'inactivo':
        return 'danger';
      default:
        return 'info';
    }
  }

  addLaboratory(): void {
    this.router.navigate(['/laboratories/create']);
  }

  editLaboratory(id: number): void {
    this.router.navigate(['/laboratories/update', id]);
  }

  deleteLaboratory(id: number): void {
    // Aquí puedes añadir una lógica de confirmación antes de eliminar
    console.log('Eliminar laboratorio con ID:', id);
  }
}
