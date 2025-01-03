import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gestion-bibliotheque',
  standalone: true,
  templateUrl: './gestion-bibliotheque.component.html',
  styleUrls: ['./gestion-bibliotheque.component.css'],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class GestionBibliothequeComponent {
  livre = {
    titre: '',
    isbn: '',
    categorie: ''
  };

  utilisateur = {
    nom: '',
    prenom: '',
    cin: '',
    login: '',
    password: '',
    role: ''
  };

  reservation = {
    livre: '',
    utilisateur: '',
    date: ''
  };
credentiels: any;

  onSubmit() {
    console.log('Livre ajouté :', this.livre);
    console.log('Utilisateur ajouté :', this.utilisateur);
    console.log('Réservation ajoutée :', this.reservation);

    this.livre = { titre: '', isbn: '', categorie: '' };
    this.utilisateur = { nom: '', prenom: '', cin: '', login: '', password: '', role: '' };
    this.reservation = { livre: '', utilisateur: '', date: '' };
  }
}
