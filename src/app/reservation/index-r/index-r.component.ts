import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; // Ajout de RouterModule
import { Reservation, ReservationService } from '../../services/reservation.service';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from "../../sidebar/sidebar.component";
import { AddRComponent } from '../add-r/add-r.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-index-r',
  templateUrl: './index-r.component.html',
  styleUrls: ['./index-r.component.css'], // Fixed typo
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, AddRComponent, SidebarComponent], // Ajout de RouterModule
})
export class IndexRComponent implements OnInit {
  reservations: Reservation[] = [];

  constructor(
    public reservationService: ReservationService,
    private router: Router // Inject Router for navigation
  ) {}

  ngOnInit(): void {
    // Load all reservations on component initialization
    this.reservationService.getAll().subscribe({
      next: (data: Reservation[]) => {
        this.reservations = data;
        console.log('Reservations loaded:', this.reservations);
      },
      error: (err) => {
        console.error('Error loading reservations:', err);
      },
    });
  }

  // Navigate to the 'add reservation' page
  navigateToCreate(): void {
    this.router.navigate(['/dashboard/reservation/add']);
  }

  delete(id: number): void {
    if (confirm('Are you sure you want to delete this reservation?')) {
      this.reservationService.delete(id).subscribe({
        next: () => {
          // Suppression réussie, update la liste des réservations
          this.reservations = this.reservations.filter((item) => item.id !== id);
          console.log('Reservation deleted successfully!');
        },
        error: (err) => {
          console.error('Error deleting reservation:', err);
          alert('An error occurred while deleting the reservation. Please try again.');
        },
      });
    }
  }
}