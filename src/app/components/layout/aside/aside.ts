import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenu } from 'primeng/panelmenu';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [PanelMenu],
  templateUrl: './aside.html',
  styleUrl: './aside.css'
})
export class Aside implements OnInit {
  items: MenuItem[] | undefined;
      ngOnInit() {
        this.items = [
    {
      label: 'Propietario',
      icon: 'pi pi-fw pi-user',
    },
    {
      label: 'Mascota',
      icon: 'pi pi-fw pi-users',
   },
   {
     label: 'Historia Clínica',
     icon: 'pi pi-fw pi-book',
    },
    {
      label: 'Cita',
      icon: 'pi pi-fw pi-calendar',
   },
    {
      label: 'Veterinario',
      icon: 'pi pi-fw pi-user',
    },
    {
      label: 'Vacuna',
      icon: 'pi pi-fw pi-sitemap',
    },
    {
      label: 'Aplicación Vacuna',
      icon: 'pi pi-fw pi-check-square',
    },
    {
      label: 'Procedimiento',
      icon: 'pi pi-fw pi-cog',
    },
    {
     label: 'Medicamento',
     icon: 'pi pi-fw pi-plus',
    },
    {
      label: 'Receta',
      icon: 'pi pi-fw pi-file',
    },
    {
      label: 'Pago',
      icon: 'pi pi-fw pi-credit-card',
    },
    {
      label: 'Laboratorio',
      icon: 'pi pi-fw pi-search',
    }
  ];
  }
}