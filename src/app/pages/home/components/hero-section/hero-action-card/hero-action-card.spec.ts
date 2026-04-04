import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroActionCardComponent } from './hero-action-card';

describe('HeroActionCardComponent', () => {
  let component: HeroActionCardComponent;
  let fixture: ComponentFixture<HeroActionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroActionCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroActionCardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
