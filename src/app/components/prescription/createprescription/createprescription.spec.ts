import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Createprescription } from './createprescription';

describe('Createprescription', () => {
  let component: Createprescription;
  let fixture: ComponentFixture<Createprescription>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Createprescription]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Createprescription);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
