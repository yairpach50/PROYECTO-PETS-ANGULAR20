import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Createmedicalhistory } from './createmedicalhistory';

describe('Createmedicalhistory', () => {
  let component: Createmedicalhistory;
  let fixture: ComponentFixture<Createmedicalhistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Createmedicalhistory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Createmedicalhistory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
