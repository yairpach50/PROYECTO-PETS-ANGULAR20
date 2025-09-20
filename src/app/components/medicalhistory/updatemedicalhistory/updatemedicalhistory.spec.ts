import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updatemedicalhistory } from './updatemedicalhistory';

describe('Updatemedicalhistory', () => {
  let component: Updatemedicalhistory;
  let fixture: ComponentFixture<Updatemedicalhistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Updatemedicalhistory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updatemedicalhistory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
