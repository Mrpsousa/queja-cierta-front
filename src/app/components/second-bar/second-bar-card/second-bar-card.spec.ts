import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondBarCard } from './second-bar-card';

describe('SecondBarCard', () => {
  let component: SecondBarCard;
  let fixture: ComponentFixture<SecondBarCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondBarCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondBarCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
