import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Getallprocedure } from './getallprocedure';

describe('Getallprocedure', () => {
  let component: Getallprocedure;
  let fixture: ComponentFixture<Getallprocedure>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Getallprocedure]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Getallprocedure);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
