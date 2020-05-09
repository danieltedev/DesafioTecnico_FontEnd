import { TestBed } from '@angular/core/testing';

import { RequestForIpService } from './request-for-ip.service';

describe('RequestForIpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestForIpService = TestBed.get(RequestForIpService);
    expect(service).toBeTruthy();
  });
});
