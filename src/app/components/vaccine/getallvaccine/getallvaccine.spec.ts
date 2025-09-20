import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Getallvaccine } from './getallvaccine';

describe('Getallvaccine', () => {
  let component: Getallvaccine;
  let fixture: ComponentFixture<Getallvaccine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Getallvaccine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Getallvaccine);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
