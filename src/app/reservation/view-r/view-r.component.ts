import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Reservation, ReservationService } from '../../services/reservation.service';

@Component({
  selector: 'app-view-r',
  templateUrl: './view-r.component.html',
  imports: [RouterLink],

   styleUrls: ['./view-r.component.css'],
})
export class ViewRComponent implements OnInit {
  id!: number;
  reservation!: Reservation;
  loading: boolean = true;

  constructor(
    private reservationService: ReservationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Fetch ID from route params
    this.id = this.route.snapshot.params['id'];
    if (!this.id) {
      console.error('Invalid reservation ID');
      this.router.navigate(['/reservations']);
      return;
    }

    // Fetch reservation details
    this.reservationService.find(this.id).subscribe(
      (data: Reservation) => {
        this.reservation = data;
        this.loading = false;
      },
      (error: any) => {
        console.error('Error fetching reservation:', error);
        this.loading = false;
        this.router.navigate(['/error']);
      }
    );
  }

  // Navigate back to reservations list
  goBack(): void {
    this.router.navigate(['/reservations']);
  }

  // Delete the reservation
  deleteReservation(): void {
    if (confirm('Are you sure you want to delete this reservation?')) {
      this.reservationService.delete(this.id).subscribe(
        () => {
          alert('Reservation deleted successfully');
          this.router.navigate(['/reservations']);
        },
        (error) => {
          console.error('Error deleting reservation:', error);
        }
      );
    }
  }
}
