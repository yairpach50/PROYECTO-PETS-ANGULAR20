import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Createveterinarian } from './createveterinarian';

describe('Createveterinarian', () => {
  let component: Createveterinarian;
  let fixture: ComponentFixture<Createveterinarian>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Createveterinarian]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Createveterinarian);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
