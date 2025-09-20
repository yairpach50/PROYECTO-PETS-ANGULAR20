import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updateveterinarian } from './updateveterinarian';

describe('Updateveterinarian', () => {
  let component: Updateveterinarian;
  let fixture: ComponentFixture<Updateveterinarian>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Updateveterinarian]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updateveterinarian);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
