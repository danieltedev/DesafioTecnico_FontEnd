import { TestBed } from '@angular/core/testing';

import { RequestForHourService } from './request-for-hour.service';

describe('RequestForHourService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestForHourService = TestBed.get(RequestForHourService);
    expect(service).toBeTruthy();
  });
});
