import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updatevaccineapplication } from './updatevaccineapplication';

describe('Updatevaccineapplication', () => {
  let component: Updatevaccineapplication;
  let fixture: ComponentFixture<Updatevaccineapplication>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Updatevaccineapplication]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updatevaccineapplication);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
