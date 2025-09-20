import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Createvaccineapplication } from './createvaccineapplication';

describe('Createvaccineapplication', () => {
  let component: Createvaccineapplication;
  let fixture: ComponentFixture<Createvaccineapplication>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Createvaccineapplication]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Createvaccineapplication);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
