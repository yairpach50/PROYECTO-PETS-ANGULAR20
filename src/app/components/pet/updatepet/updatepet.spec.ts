import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updatepet } from './updatepet';

describe('Updatepet', () => {
  let component: Updatepet;
  let fixture: ComponentFixture<Updatepet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Updatepet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updatepet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
