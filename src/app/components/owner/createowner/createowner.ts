import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { Owner } from '../../../services/owner';
import { OwnerI } from '../../../models/owner';

@Component({
  selector: 'app-create-owner',
  standalone: true,
  imports: [CommonModule, FormsModule, InputTextModule, ButtonModule],
  templateUrl: './createowner.html',
})
export class CreateOwner {
  owner: OwnerI = {
    id: 0,
    name: '',
    phone: '',
    email: '',
    status: 'activo',
    updatedAt: new Date()
  };

  constructor(
    private ownerService: Owner,
    private router: Router
  ) {}

  guardar(form: NgForm) {
    if (form.invalid) return;

    this.ownerService.addOwner(this.owner);

    alert('Propietario registrado ✅');
    this.router.navigate(['/']); // volver a la tabla
  }
}
