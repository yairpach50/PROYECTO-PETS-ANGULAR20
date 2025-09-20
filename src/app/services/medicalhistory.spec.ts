import { TestBed } from '@angular/core/testing';

import { MedicalhistoryService } from './medicalhistory';

describe('Medicalhistory', () => {
  let service: MedicalhistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalhistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
