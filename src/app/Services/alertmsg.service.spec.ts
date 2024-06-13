import { TestBed } from '@angular/core/testing';

import { AlertmsgService } from './alertmsg.service';

describe('AlertmsgService', () => {
  let service: AlertmsgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertmsgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
