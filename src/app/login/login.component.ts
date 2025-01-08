import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoginService } from '../services/login.service';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';  // Import ToastModule
import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
 import { AuthenticationRequest } from '../Modules/AuthenticationRequest';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone:true,
  imports: [
    RouterModule,

    InputTextModule,
    // BrowserAnimationsModule,
    ToastModule,
    
    // BrowserModule,
    FormsModule
    
  ]
   
 
})
export class LoginComponent {
  request = new AuthenticationRequest();
  submitted = false;

  constructor(
    private loginService: LoginService,
    private messageService: MessageService,
    private router: Router
  ) {}

  authenticate() {
    this.loginService.authenticate(this.request).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: error.error || 'Échec de la connexion. Veuillez réessayer.',
        });
      },
    });
  }

  submit() {
    this.submitted = true;
    console.log('Formulaire soumis:', this.submitted);

    if (this.request.login
       && this.request.password) {
      console.log('Requête d\'authentification:', this.request);
      this.authenticate();
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'Champs requis',
        detail: 'Veuillez remplir tous les champs.',
      });
    }
  }
}
