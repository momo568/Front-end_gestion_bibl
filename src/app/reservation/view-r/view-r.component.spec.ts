import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRComponent } from './view-r.component';

describe('ViewRComponent', () => {
  let component: ViewRComponent;
  let fixture: ComponentFixture<ViewRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewRComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
