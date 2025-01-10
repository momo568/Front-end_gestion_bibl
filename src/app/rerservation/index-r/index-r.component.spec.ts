import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexRComponent } from './index-r.component';

describe('IndexRComponent', () => {
  let component: IndexRComponent;
  let fixture: ComponentFixture<IndexRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexRComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
