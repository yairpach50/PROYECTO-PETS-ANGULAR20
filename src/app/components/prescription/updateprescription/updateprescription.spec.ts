import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updateprescription } from './updateprescription';

describe('Updateprescription', () => {
  let component: Updateprescription;
  let fixture: ComponentFixture<Updateprescription>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Updateprescription]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updateprescription);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
