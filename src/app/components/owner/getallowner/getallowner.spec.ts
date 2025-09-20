import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Getall} from './getallowner';

describe('Getall', () => {
  let component: Getall;
  let fixture: ComponentFixture<Getall>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Getall]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Getall);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
