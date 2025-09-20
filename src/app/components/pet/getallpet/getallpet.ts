import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { RouterModule, Router } from '@angular/router';
import { PetService } from '../../../services/pet';
import { PetModel } from '../../../models/pet.model';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-getallpet',
  standalone: true,
  imports: [CommonModule, TableModule, RouterModule, ButtonModule],
  templateUrl: './getallpet.html'
})
export class GetallPet implements OnInit {
  pets: PetModel[] = [];

  constructor(private PetService: PetService, private router: Router) {}

  ngOnInit(): void {
    this.PetService.pets$.subscribe((data: PetModel[]) => {
      this.pets = data;
    });
  }

  editarPet(id: number) {
    this.router.navigate(['/pets/editar', id]);
  }

}
