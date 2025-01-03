import { Component, NgModule } from '@angular/core';
 
import { RouterModule,  } from '@angular/router';
 import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  standalone:true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'apa_front';
}
