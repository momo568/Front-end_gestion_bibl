import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { MenuItem, MessageService, ConfirmationService } from 'primeng/api';
import { LivreModule } from '../livre/livre.module';
import { ReservationModule } from '../reservation/reservation.module';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
