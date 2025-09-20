import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Getallpet } from './getallpet';

describe('Getallpet', () => {
  let component: Getallpet;
  let fixture: ComponentFixture<Getallpet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Getallpet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Getallpet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
