import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PapersReviewsComponent } from './papers-reviews.component';

describe('PapersReviewsComponent', () => {
  let component: PapersReviewsComponent;
  let fixture: ComponentFixture<PapersReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PapersReviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PapersReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
