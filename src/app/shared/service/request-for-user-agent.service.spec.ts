import { TestBed } from '@angular/core/testing';

import { RequestForUserAgentService } from './request-for-user-agent.service';

describe('RequestForUserAgentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestForUserAgentService = TestBed.get(RequestForUserAgentService);
    expect(service).toBeTruthy();
  });
});
