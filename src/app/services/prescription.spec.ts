import { TestBed } from '@angular/core/testing';

import { PrescriptionService } from './prescription';

describe('Prescription', () => {
  let service: PrescriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrescriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
