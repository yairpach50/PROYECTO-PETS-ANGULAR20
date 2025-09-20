import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Createpet } from './createpet';

describe('Createpet', () => {
  let component: Createpet;
  let fixture: ComponentFixture<Createpet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Createpet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Createpet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
