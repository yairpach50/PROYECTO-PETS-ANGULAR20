import { TestBed } from '@angular/core/testing';

import { VaccineService } from './vaccine';

describe('Vaccine', () => {
  let service: VaccineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VaccineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
