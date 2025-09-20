import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Getalllaboratory } from './getalllaboratory';

describe('Getalllaboratory', () => {
  let component: Getalllaboratory;
  let fixture: ComponentFixture<Getalllaboratory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Getalllaboratory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Getalllaboratory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
