import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Avatar } from 'primeng/avatar';
import { Menu } from 'primeng/menu';

@Component({
  selector: 'app-header',
  imports: [Avatar, Menu],
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  userMenuItems: MenuItem[] = [
    { label: 'Configuración', icon: 'pi pi-cog', command: () => this.onConfig() },
    { label: 'Cerrar sesión', icon: 'pi pi-sign-out', command: () => this.onLogout() }
  ];

  onConfig() {
    // Acción de configuración
  }

  onLogout() {
    // Acción de cerrar sesión
  }
}
