import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subsegments } from './subsegments';

describe('Subsegments', () => {
  let component: Subsegments;
  let fixture: ComponentFixture<Subsegments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subsegments]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subsegments);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
