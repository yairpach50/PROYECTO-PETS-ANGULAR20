import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Createvaccine } from './createvaccine';

describe('Createvaccine', () => {
  let component: Createvaccine;
  let fixture: ComponentFixture<Createvaccine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Createvaccine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Createvaccine);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
