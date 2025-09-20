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
      routerLink: '/owners'
    },
    {
      label: 'Mascota',
      icon: 'pi pi-fw pi-users',
      routerLink: '/pets'
   },
   {
     label: 'Historia Clínica',
     icon: 'pi pi-fw pi-book',
     routerLink: '/medicalhistories'
    },
    {
      label: 'Cita',
      icon: 'pi pi-fw pi-calendar',
      routerLink: '/appointments'
   },
    {
      label: 'Veterinario',
      icon: 'pi pi-fw pi-user',
      routerLink: '/veterinarians'
    },
    {
      label: 'Vacuna',
      icon: 'pi pi-fw pi-sitemap',
      routerLink: '/vaccines'
    },
    {
      label: 'Aplicación Vacuna',
      icon: 'pi pi-fw pi-check-square',
      routerLink: '/vaccineapplications'
    },
    {
      label: 'Procedimiento',
      icon: 'pi pi-fw pi-cog',
      routerLink: '/procedures'
    },
    {
     label: 'Medicamento',
     icon: 'pi pi-fw pi-plus',
     routerLink: '/medicines'
    },
    {
      label: 'Receta',
      icon: 'pi pi-fw pi-file',
      routerLink: '/prescriptions'
    },
    {
      label: 'Pago',
      icon: 'pi pi-fw pi-credit-card',
      routerLink: '/payments'
    },
    {
      label: 'Laboratorio',
      icon: 'pi pi-fw pi-search',
      routerLink: '/laboratories'
    }
  ];
  }
}