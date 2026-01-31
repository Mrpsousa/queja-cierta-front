import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccCreate } from './acc-create';

describe('AccCreate', () => {
  let component: AccCreate;
  let fixture: ComponentFixture<AccCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
