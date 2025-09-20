import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Getallveterinarian } from './getallveterinarian';

describe('Getallveterinarian', () => {
  let component: Getallveterinarian;
  let fixture: ComponentFixture<Getallveterinarian>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Getallveterinarian]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Getallveterinarian);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
