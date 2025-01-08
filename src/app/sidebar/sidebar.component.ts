import { Component } from '@angular/core';
import { ReservationsComponent } from '../reservations/reservations.component';
import { LivreComponent } from '../livre/livre.component';
import { RouterModule, RouterOutlet } from '@angular/router';
 @Component({
  selector: 'app-sidebar',
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isCollapsed = false;

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
  }

}
