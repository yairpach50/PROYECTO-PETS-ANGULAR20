import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Createprocedure } from './createprocedure';

describe('Createprocedure', () => {
  let component: Createprocedure;
  let fixture: ComponentFixture<Createprocedure>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Createprocedure]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Createprocedure);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
