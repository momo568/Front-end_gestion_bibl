import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-r',
  templateUrl: './add-r.component.html',
  imports: [RouterModule, RouterLink, ReactiveFormsModule ,CommonModule],

  styleUrls: ['./add-r.component.css'],
})
export class AddRComponent implements OnInit {
  form: FormGroup;
  users: any[] = []; // Array to store users fetched from the backend

  constructor(private fb: FormBuilder, private http: HttpClient) {
    // Initialize the form
    this.form = this.fb.group({
      userId: ['', Validators.required], // Dropdown for User ID
      livreId: ['', Validators.required], // Livre ID
      dateReservation: ['', Validators.required],
      dateRetour: ['', Validators.required],
      dateAnnulation: [''],
    });
  }

  ngOnInit(): void {
    this.loadUsers(); // Load users when the component initializes
  }

  /**
   * Fetch users from the backend
   */
  loadUsers(): void {
    const apiUrl = 'http://localhost:9090/projetnourouma/api/users/getAll'; // Adjust this URL
    this.http.get<any[]>(apiUrl).subscribe(
      (data) => {
        this.users = data;
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
      console.log('Form Data:', this.form.value);
      // Submit the form data to your backend API
      const reservationApiUrl =
        'http://localhost:9090/projetnourouma/api/reservations/create'; // Adjust the URL
      this.http.post(reservationApiUrl, this.form.value).subscribe(
        (response) => {
          console.log('Reservation created successfully:', response);
        },
        (error) => {
          console.error('Error creating reservation:', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }

  /**
   * Getter for easy access to form controls
   */
  get f() {
    return this.form.controls;
  }
}
