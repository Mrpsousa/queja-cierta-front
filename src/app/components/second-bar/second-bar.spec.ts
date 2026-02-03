import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondBar } from './second-bar';

describe('SecondBar', () => {
  let component: SecondBar;
  let fixture: ComponentFixture<SecondBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
