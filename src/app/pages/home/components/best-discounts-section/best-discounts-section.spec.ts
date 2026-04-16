import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestDiscountsSectionComponent } from './best-discounts-section';

describe('BestDiscountsSectionComponent', () => {
  let component: BestDiscountsSectionComponent;
  let fixture: ComponentFixture<BestDiscountsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestDiscountsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestDiscountsSectionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
