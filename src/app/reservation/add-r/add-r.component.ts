import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-r',
  templateUrl: './add-r.component.html',
  imports: [RouterModule, CommonModule, RouterLink, ReactiveFormsModule],
  styleUrls: ['./add-r.component.css'],
})
export class AddRComponent implements OnInit {
  form: FormGroup;
  users: any[] = [];
  livres: any[] = [];
  

  constructor(private fb: FormBuilder, private http: HttpClient,private router:Router) {
    // Initialize the form
    this.form = this.fb.group({
      utilisateurId: ['', Validators.required], // Dropdown for User ID
      livreId: ['', Validators.required], // Livre ID
      dateReservation: ['', Validators.required],
      dateRetour: ['', Validators.required],
      dateAnnulation: [''],
    });
  }

  ngOnInit(): void {
    this.loadLivres(); // Load livres when the component initializes
    this.loadUsers();  // Load users when the component initializes
  }

  /**
   * Load livres from the backend
   */
  loadLivres(): void {
    const baseUrl = 'http://localhost:9090/projetnourouma/api/livres/getAll';
    this.http.get<any[]>(baseUrl).subscribe(
      (data) => {
        this.livres = data;
        console.log('Livres loaded:', data);
      },
      (error) => {
        console.error('Error fetching livres:', error);
      }
    );
  }

  /**
   * Load users from the backend
   */
  loadUsers(): void {
    const baseUrl = 'http://localhost:9090/projetnourouma/api/user/getAll';
    this.http.get<any[]>(baseUrl).subscribe(
      (data) => {
        this.users = data;
        console.log('Users loaded:', data);
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  /**
   * Handle form submission
   */
  submit(): void {
    if (this.form.valid) {
      const reservationData = {
        utilisateur: { id: this.form.value.utilisateurId },
        dateReservation: this.form.value.dateReservation,
        dateRetour: this.form.value.dateRetour,
        dateAnnulation: this.form.value.dateAnnulation || null,
        livre: { id: this.form.value.livreId },
      };

      console.log('Submitting reservation data:', reservationData);

      const reservationbaseUrl = 'http://localhost:9090/projetnourouma/api/reservation/add';
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });

      this.http.post(reservationbaseUrl, reservationData, { headers }).subscribe(
        (response) => {
          console.log('Reservation created successfully:', response);
          this.router.navigateByUrl('/dashboard/reservation/index-r');
        },
        (error) => {
          console.error('Error creating reservation:', error);
          alert('An error occurred while creating the reservation.');
        }
      );
    } else {
      console.log('Form is invalid:', this.form.value);
      alert('Please fill in all required fields.');
    }
  }

  /**
   * Getter for easy access to form controls
   */
  get f() {
    return this.form.controls;
  }
}
