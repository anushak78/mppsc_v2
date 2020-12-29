import { TestBed } from '@angular/core/testing';

import { BoardMasterService } from './board-master.service';

describe('BoardMasterService', () => {
  let service: BoardMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
