import { TestBed } from '@angular/core/testing';

import { VeterinarianService } from './veterinarian';

describe('Veterinarian', () => {
  let service: VeterinarianService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VeterinarianService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
