import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOwner } from './updateowner';

describe('UpdateOwner', () => {
  let component: UpdateOwner;
  let fixture: ComponentFixture<UpdateOwner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateOwner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateOwner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
