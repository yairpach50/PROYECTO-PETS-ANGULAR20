import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updatevaccine } from './updatevaccine';

describe('Updatevaccine', () => {
  let component: Updatevaccine;
  let fixture: ComponentFixture<Updatevaccine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Updatevaccine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updatevaccine);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
