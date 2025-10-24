import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAppointment } from './createappointment';

describe('Createappointment', () => {
  let component: CreateAppointment;
  let fixture: ComponentFixture<CreateAppointment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAppointment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAppointment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
