import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRComponent } from './edit-r.component';

describe('EditRComponent', () => {
  let component: EditRComponent;
  let fixture: ComponentFixture<EditRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditRComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
