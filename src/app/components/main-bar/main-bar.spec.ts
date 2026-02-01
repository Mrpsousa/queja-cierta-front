import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBarComponent } from './main-bar';

describe('MainBarComponent', () => {
  let component: MainBarComponent;
  let fixture: ComponentFixture<MainBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainBarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
