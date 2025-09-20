import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Getallmedicine } from './getallmedicine';

describe('Getallmedicine', () => {
  let component: Getallmedicine;
  let fixture: ComponentFixture<Getallmedicine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Getallmedicine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Getallmedicine);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
