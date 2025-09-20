import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updatelaboratory } from './updatelaboratory';

describe('Updatelaboratory', () => {
  let component: Updatelaboratory;
  let fixture: ComponentFixture<Updatelaboratory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Updatelaboratory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updatelaboratory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
