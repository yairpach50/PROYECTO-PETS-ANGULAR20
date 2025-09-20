import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DatePicker } from 'primeng/datepicker';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { PetService } from '../../../services/pet';
import { PetModel } from '../../../models/pet.model';
import { Owner } from '../../../services/owner';
import { OwnerI } from '../../../models/owner';

@Component({
  selector: 'app-create-pet',
  standalone: true,
  imports: [CommonModule, FormsModule, InputTextModule, ButtonModule,DatePicker],
  templateUrl: './createpet.html',
})
export class CreatePet {
  pet: PetModel = {
    id: 0,
    name: '',
    birthDate: new Date(),
    type: '',
    color: '',
    ownerId: 0,
    status: 'activo',
    updatedAt: new Date(),
  };

  owners: OwnerI[] = [];

  constructor(
    private petService: PetService,
    private ownerService: Owner,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Traer propietarios desde el servicio
    this.owners = this.ownerService.getOwners();
  }

  guardar(form: NgForm) {
    if (form.invalid) return;

    this.petService.addPet(this.pet);

    alert('Mascota registrada ✅');
    this.router.navigate(['/pets']); // volver a la lista de mascotas
  }
}
