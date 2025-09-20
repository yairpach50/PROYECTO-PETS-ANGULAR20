import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Createappointment } from './createappointment';

describe('Createappointment', () => {
  let component: Createappointment;
  let fixture: ComponentFixture<Createappointment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Createappointment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Createappointment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
