import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Getallprescription } from './getallprescription';

describe('Getallprescription', () => {
  let component: Getallprescription;
  let fixture: ComponentFixture<Getallprescription>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Getallprescription]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Getallprescription);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
