import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VeterinarianModel } from '../../../models/veterinarian.model';
import { VeterinarianService } from '../../../services/veterinarian';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { TagModule } from 'primeng/tag'; 

@Component({
  selector: 'app-getallveterinarian',
  standalone: true,
  templateUrl: './getallveterinarian.html',
  imports: [TableModule,CommonModule,ButtonModule,RouterModule, TagModule]
 
})
export class GetallVeterinarian implements OnInit {

  veterinarians: VeterinarianModel[] = [];

  constructor(
    private veterinarian: VeterinarianService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Suscribirse al BehaviorSubject para obtener la lista de veterinarios en tiempo real
    this.veterinarian.veterinarians$.subscribe(vets => {
      this.veterinarians = vets;
    });
  }

  // Método para redirigir al formulario de creación de un nuevo veterinario
  addVeterinarian() {
    this.router.navigate(['/veterinarians/create']);
  }
}