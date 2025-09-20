import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Getallmedicalhistory } from './getallmedicalhistory';

describe('Getallmedicalhistory', () => {
  let component: Getallmedicalhistory;
  let fixture: ComponentFixture<Getallmedicalhistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Getallmedicalhistory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Getallmedicalhistory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
