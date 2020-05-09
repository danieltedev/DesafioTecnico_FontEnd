import { TestBed } from '@angular/core/testing';

import { DasboardResolveService } from './dasboard-resolve.service';

describe('DasboardResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DasboardResolveService = TestBed.get(DasboardResolveService);
    expect(service).toBeTruthy();
  });
});
