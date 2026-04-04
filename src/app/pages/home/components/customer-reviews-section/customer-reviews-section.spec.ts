import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerReviewsSectionComponent } from './customer-reviews-section';

describe('CustomerReviewsSectionComponent', () => {
  let component: CustomerReviewsSectionComponent;
  let fixture: ComponentFixture<CustomerReviewsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerReviewsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerReviewsSectionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
