import { Component, OnInit } from '@angular/core';
 import { Livre, LivreService } from '../services/livre.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SidebarComponent } from "../sidebar/sidebar.component";
@Component({
  selector: 'app-livre',
  standalone:true,
  imports: [
    SidebarComponent
],
  templateUrl: './livre.component.html',
  styleUrl: './livre.component.css'
})
export class LivreComponent implements OnInit {
  livres: Livre[] = [];
  livreForm: FormGroup;
  isEditing = false;

  constructor(private livreService: LivreService, private fb: FormBuilder) {
    this.livreForm = this.fb.group({
      id: [0],
      titre: ['', [Validators.required, Validators.maxLength(255)]],
      isbn: ['', [Validators.required, Validators.pattern('^[0-9-]+$')]],
      dateEdition: ['', Validators.required],
      categorie: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getLivres();
  }

  getLivres(): void {
    this.livreService.getAllLivres().subscribe((data) => {
      this.livres = data;
    });
  }

  submitForm(): void {
    if (this.livreForm.invalid) {
      return;
    }

    const livre: Livre = this.livreForm.value;
    if (this.isEditing) {
      this.livreService.updateLivre(livre).subscribe(() => {
        this.getLivres();
        this.resetForm();
      });
    } else {
      this.livreService.addLivre(livre).subscribe(() => {
        this.getLivres();
        this.resetForm();
      });
    }
  }

  editLivre(livre: Livre): void {
    this.livreForm.patchValue(livre);
    this.isEditing = true;
  }

  deleteLivre(id: number): void {
    this.livreService.deleteLivre(id).subscribe(() => {
      this.getLivres();
    });
  }

  resetForm(): void {
    this.livreForm.reset({
      id: 0,
      titre: '',
      isbn: '',
      dateEdition: '',
      categorie: '',
    });
    this.isEditing = false;
  }
}
