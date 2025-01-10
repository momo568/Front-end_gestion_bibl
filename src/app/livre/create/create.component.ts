import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivreService } from '../livre.service';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { SidebarComponent } from "../../sidebar/sidebar.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule,RouterLink, ReactiveFormsModule, SidebarComponent],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'] // Corrected to `styleUrls`
})
export class CreateComponent {
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
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public livreService: LivreService,
    private router: Router
  ) { }
      
  /**
   * Initialize the form
   */
  ngOnInit(): void {
    this.form = new FormGroup({
      titre: new FormControl('', [Validators.required]),
      isbn: new FormControl('', Validators.required),
      dateEdition: new FormControl('', Validators.required),
      categorie: new FormControl('', Validators.required),
    });
  }
  
      
  /**
   * Getter for form controls
   */
  get f() {
    return this.form.controls;
  }
      
  /**
   * Submit the form
   */
  submit() {
    console.log(this.form.value);
    this.livreService.create(this.form.value).subscribe((res: any) => {
      console.log('Livre created successfully!');
      this.router.navigateByUrl('livre/index'); // Redirect to the index page
    });
  }
}
