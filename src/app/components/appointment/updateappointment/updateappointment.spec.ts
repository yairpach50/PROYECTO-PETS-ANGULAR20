import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updateappointment } from './updateappointment';

describe('Updateappointment', () => {
  let component: Updateappointment;
  let fixture: ComponentFixture<Updateappointment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Updateappointment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updateappointment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
