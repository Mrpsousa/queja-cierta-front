import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessSolutionsSectionComponent } from './business-solutions-section';

describe('BusinessSolutionsSectionComponent', () => {
  let component: BusinessSolutionsSectionComponent;
  let fixture: ComponentFixture<BusinessSolutionsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessSolutionsSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BusinessSolutionsSectionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
