import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Aside } from './components/layout/aside/aside';
import { Footer } from './components/layout/footer/footer';
import { Header } from './components/layout/header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Aside, Footer, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
    title = 'pets-angular20';
}
