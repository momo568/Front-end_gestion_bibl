import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionBibliothequeComponent } from './gestion-bibliotheque.component';
import { FormsModule } from '@angular/forms'; // Importer FormsModule pour ngModel

describe('GestionBibliothequeComponent', () => {
  let component: GestionBibliothequeComponent;
  let fixture: ComponentFixture<GestionBibliothequeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestionBibliothequeComponent],
      imports: [FormsModule] // Assurez-vous d'importer FormsModule ici aussi
    }).compileComponents();

    fixture = TestBed.createComponent(GestionBibliothequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
