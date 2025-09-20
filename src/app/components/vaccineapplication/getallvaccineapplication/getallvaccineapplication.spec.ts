import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Getallvaccineapplication } from './getallvaccineapplication';

describe('Getallvaccineapplication', () => {
  let component: Getallvaccineapplication;
  let fixture: ComponentFixture<Getallvaccineapplication>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Getallvaccineapplication]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Getallvaccineapplication);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
