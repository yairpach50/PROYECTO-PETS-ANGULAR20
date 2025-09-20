import { TestBed } from '@angular/core/testing';

import { ProcedureService } from './procedure';

describe('Procedure', () => {
  let service: ProcedureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcedureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
