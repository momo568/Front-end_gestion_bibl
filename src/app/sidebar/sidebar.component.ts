import { Component } from '@angular/core';
 import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { IndexRComponent } from '../reservation/index-r/index-r.component';
import { CommonModule } from '@angular/common';
import { IndexComponent } from '../livre/index/index.component';
import { ReservationModule } from '../reservation/reservation.module';
 @Component({
  selector: 'app-sidebar',
  imports: [RouterModule, ReservationModule, RouterLink, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isCollapsed = false;

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
  }

}
