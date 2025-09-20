import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Getallappointment } from './getallappointment';

describe('Getallappointment', () => {
  let component: Getallappointment;
  let fixture: ComponentFixture<Getallappointment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Getallappointment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Getallappointment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
