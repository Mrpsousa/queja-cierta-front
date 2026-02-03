import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccCreateComponent } from './acc-create';

describe('AccCreateComponent', () => {
  let component: AccCreateComponent;
  let fixture: ComponentFixture<AccCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccCreateComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
