import { TestBed } from '@angular/core/testing';

import { AccessFilterResolveService } from './access-filter-resolve.service';

describe('AccessFilterResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccessFilterResolveService = TestBed.get(AccessFilterResolveService);
    expect(service).toBeTruthy();
  });
});
