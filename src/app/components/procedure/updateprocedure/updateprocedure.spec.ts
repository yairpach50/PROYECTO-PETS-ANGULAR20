import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updateprocedure } from './updateprocedure';

describe('Updateprocedure', () => {
  let component: Updateprocedure;
  let fixture: ComponentFixture<Updateprocedure>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Updateprocedure]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updateprocedure);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
