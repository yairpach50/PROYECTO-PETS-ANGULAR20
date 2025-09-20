import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ActivatedRoute, Router } from '@angular/router';
import { Owner } from '../../../services/owner';
import { OwnerI } from '../../../models/owner';

@Component({
  selector: 'app-update-owner',
  standalone: true,
  imports: [CommonModule, FormsModule, InputTextModule, ButtonModule],
  templateUrl: './updateowner.html',
})
export class UpdateOwner implements OnInit {
  owner!: OwnerI;

  constructor(
    private route: ActivatedRoute,
    private ownerService: Owner,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const data = this.ownerService.getOwnerById(id);

    if (data) {
      this.owner = { ...data };
    } else {
      alert('Propietario no encontrado');
      this.router.navigate(['/']);
    }
  }

  actualizar(form: NgForm) {
    if (form.invalid) return;

    this.ownerService.update(this.owner);

    alert('Propietario actualizado ✅');
    this.router.navigate(['/']);
  }
}
