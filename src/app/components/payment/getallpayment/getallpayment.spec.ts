import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Getallpayment } from './getallpayment';

describe('Getallpayment', () => {
  let component: Getallpayment;
  let fixture: ComponentFixture<Getallpayment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Getallpayment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Getallpayment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
