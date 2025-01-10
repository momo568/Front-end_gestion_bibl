import { Component } from '@angular/core';
import { LivreService } from '../livre.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Livre } from '../livre';
import { IndexComponent } from '../index/index.component';

@Component({
  selector: 'app-view-livre',
  templateUrl: './view.component.html',
    imports: [ RouterModule,IndexComponent],
  
  styleUrls: ['./view.component.css']
})
export class ViewLivreComponent {

  id!: number;
  livre!: Livre;
  loading: boolean = true;

  constructor(
    public livreService: LivreService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['livreId'];
    if (!this.id) {
      console.error('Invalid livreId');
      this.router.navigate(['/livres']);
      return;
    }

    this.livreService.find(this.id).subscribe(
      (data: Livre) => {
        this.livre = data;
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching livre:', error);
        this.loading = false;
        this.router.navigate(['/error']);
      }
    );
  }

  goBack(): void {
    this.router.navigate(['/livres']);
  }
}
