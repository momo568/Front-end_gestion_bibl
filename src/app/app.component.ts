import { Component, NgModule } from '@angular/core';
 
import { RouterModule, RouterOutlet,  } from '@angular/router';
 import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { Footer } from 'primeng/api';
import { FooterComponent } from './layout/footer/footer.component';
import { AboutComponent } from "./pages/about/about.component";
import { HomeComponent } from "./pages/home/home.component";
import { LivreComponent } from './livre/livre.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule, RouterOutlet,HeaderComponent,LivreComponent, FooterComponent, LoginComponent, AboutComponent, HomeComponent],
  standalone:true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'apa_front';
}
