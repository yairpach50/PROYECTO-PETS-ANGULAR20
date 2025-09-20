import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from '../../../services/pet';
import { PetModel } from '../../../models/pet.model';
import { Owner } from '../../../services/owner';
import { OwnerI } from '../../../models/owner';

@Component({
  selector: 'app-update-pet',
  standalone: true,
  imports: [CommonModule, FormsModule, InputTextModule, ButtonModule, DatePickerModule],
  templateUrl: './updatepet.html',
})
export class UpdatePet {
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
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Traer propietarios
    this.owners = this.ownerService.getOwners();

    // Obtener el id de la mascota desde la ruta
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const petFound = this.petService.getPetById(id);
    if (petFound) {
      this.pet = { ...petFound };
    } else {
      alert('Mascota no encontrada');
      this.router.navigate(['/pets']);
    }
  }

  actualizar(form: NgForm) {
    if (form.invalid) return;

    this.petService.update(this.pet);
    alert('Mascota actualizada ✅');
    this.router.navigate(['/pets']);
  }
}
