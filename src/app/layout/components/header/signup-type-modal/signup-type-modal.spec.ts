import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupTypeModalComponent } from './signup-type-modal';

describe('SignupTypeModalComponent', () => {
  let component: SignupTypeModalComponent;
  let fixture: ComponentFixture<SignupTypeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupTypeModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupTypeModalComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
