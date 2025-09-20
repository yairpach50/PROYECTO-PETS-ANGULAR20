import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updatepayment } from './updatepayment';

describe('Updatepayment', () => {
  let component: Updatepayment;
  let fixture: ComponentFixture<Updatepayment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Updatepayment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updatepayment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
