import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivreService } from '../livre.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Livre } from '../livre';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { SidebarComponent } from "../../sidebar/sidebar.component";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, SidebarComponent],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'] // Corrected to `styleUrls`
})
export class EditComponent implements OnInit {

  id!: number;
  livre!: Livre;
  form!: FormGroup;
  categories = [
    'ACTION',
    'ROMANCE',
    'HISTORIQUE',
    'THRILLER',
    'HORROR',
    'ART_ET_CULTURE',
    'TECHNOLOGIE',
    'SCIENCE',
    'SCIENCE_FICTION'
  ];

  constructor(
    public livreService: LivreService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      titre: new FormControl('', [Validators.required]),
      isbn: new FormControl('', [Validators.required]),
      dateEdition: new FormControl('', [Validators.required]),
      categorie: new FormControl('', [Validators.required])
    });
  
    this.id = this.route.snapshot.params['livreId'];
  
    this.livreService.find(this.id).subscribe((data: Livre) => {
      this.livre = data;
  
      // Populate the form only after initialization
      if (this.form) {
        this.form.patchValue({
          titre: this.livre.titre,
          isbn: this.livre.isbn,
          dateEdition: this.livre.dateEdition,
          categorie: this.livre.categorie
        });
      }
    });
  }
  

  get f() {
    return this.form.controls;
  }

  submit(): void {
    if (this.form.invalid) {
      console.error('Form is invalid');
      return;
    }
  
    console.log('Form data:', this.form.value);
  
    // Update the Livre
    this.livreService.update(this.id, this.form.value).subscribe(
      (res: Livre) => {
        console.log('Livre updated successfully!', res);
        this.router.navigateByUrl('/dashboard/livre/index');
      },
      (error) => {
        console.error('Error updating livre:', error);
      }
    );
  }
  
  
}
