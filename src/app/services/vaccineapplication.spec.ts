import { TestBed } from '@angular/core/testing';

import { VaccineApplicationService } from './vaccineapplication';

describe('Vaccineapplication', () => {
  let service: VaccineApplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VaccineApplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
