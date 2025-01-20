import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-r',
  templateUrl: './edit-r.component.html',
  imports: [CommonModule, ReactiveFormsModule],
  styleUrls: ['./edit-r.component.css'],
})
export class EditRComponent implements OnInit {
  form: FormGroup;
  users: any[] = [];
  livres: any[] = [];
  reservationId: string | null = null;
  reservation: any = null;  // To hold the reservation data to be edited

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute  // Used to fetch the reservation ID from the route
  ) {
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
    this.route.paramMap.subscribe(params => {
      this.reservationId = params.get('id');
    });
    
    if (this.reservationId) {
      this.loadReservationData();  // Load reservation data if editing
    }
    
    this.loadLivres();  // Load livres
    this.loadUsers();   // Load users
  }

  /**
   * Load reservation data from the backend
   */
  loadReservationData(): void {
    const baseUrl = `http://localhost:9090/projetnourouma/api/reservation/get/${this.reservationId}`;
    this.http.get<any>(baseUrl).subscribe(
      (data) => {
        this.reservation = data;
        console.log('Reservation loaded:', data);
        
        // Populate the form with existing reservation data
        this.form.patchValue({
          utilisateurId: this.reservation.utilisateur.id,
          livreId: this.reservation.livre.id,
          dateReservation: this.reservation.dateReservation,
          dateRetour: this.reservation.dateRetour,
          dateAnnulation: this.reservation.dateAnnulation,
        });
      },
      (error) => {
        console.error('Error fetching reservation:', error);
      }
    );
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
   * Handle form submission for editing
   */
  submit(): void {
    if (this.form.valid && this.reservationId) {
      const updatedReservationData = {
        utilisateur: { id: this.form.value.utilisateurId },
        dateReservation: this.form.value.dateReservation,
        dateRetour: this.form.value.dateRetour,
        dateAnnulation: this.form.value.dateAnnulation || null,
        livre: { id: this.form.value.livreId },
      };

      console.log('Updating reservation data:', updatedReservationData);

      const reservationbaseUrl = `http://localhost:9090/projetnourouma/api/reservation/edit/${this.reservationId}`;
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });

      this.http.put(reservationbaseUrl, updatedReservationData, { headers }).subscribe(
        (response) => {
          console.log('Reservation updated successfully:', response);
          this.router.navigateByUrl('/dashboard/reservation/index-r');
        },
        (error) => {
          console.error('Error updating reservation:', error);
          alert('An error occurred while updating the reservation.');
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
