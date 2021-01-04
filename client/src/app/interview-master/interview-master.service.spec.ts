import { TestBed } from '@angular/core/testing';

import { InterviewMasterService } from './interview-master.service';

describe('InterviewMasterService', () => {
  let service: InterviewMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterviewMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
