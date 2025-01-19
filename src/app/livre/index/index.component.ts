import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { LivreService } from '../livre.service';
import { Livre } from '../livre';
import { SidebarComponent } from "../../sidebar/sidebar.component";
import { ViewLivreComponent } from '../view/view.component';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterModule, 
    SidebarComponent,ViewLivreComponent,EditComponent],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'] // Corrected to `styleUrls`
})
export class IndexComponent {

  livres: Livre[] = [];
 
  constructor(public livreService: LivreService,
    private  router: Router
  ) { }
  navigateToCreate(): void {
    this.router.navigate(['/dashboard/livre/create']);
  }
  /**
   * Fetch all Livres on component initialization
   */
  ngOnInit(): void {
    this.livreService.getAll().subscribe(
      (data: Livre[]) => {
        console.log('Fetched livres:', data);
        this.livres = data;
      },
      (error) => {
        console.error('Error fetching livres:', error);
      }
    );
  }
  
  
      
  /**
   * Delete a Livre by ID
   * 
   * @param id number
   */
  deleteLivre(id: number): void {
    this.livreService.delete(id).subscribe(res => {
      this.livres = this.livres.filter(item => item.id !== id);
      console.log('Livre deleted successfully!');
    });
  }
}
