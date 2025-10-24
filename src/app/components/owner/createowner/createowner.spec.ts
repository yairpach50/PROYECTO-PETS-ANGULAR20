import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOwner} from './createowner';

describe('Create', () => {
  let component: CreateOwner;
  let fixture: ComponentFixture<CreateOwner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateOwner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateOwner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
