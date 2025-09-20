import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Createpayment } from './createpayment';

describe('Createpayment', () => {
  let component: Createpayment;
  let fixture: ComponentFixture<Createpayment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Createpayment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Createpayment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
