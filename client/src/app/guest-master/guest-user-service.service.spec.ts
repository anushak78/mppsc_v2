import { TestBed } from '@angular/core/testing';

import { GuestUserServiceService } from './guest-user-service.service';

describe('GuestUserServiceService', () => {
  let service: GuestUserServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuestUserServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
