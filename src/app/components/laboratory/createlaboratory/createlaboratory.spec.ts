import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Createlaboratory } from './createlaboratory';

describe('Createlaboratory', () => {
  let component: Createlaboratory;
  let fixture: ComponentFixture<Createlaboratory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Createlaboratory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Createlaboratory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
