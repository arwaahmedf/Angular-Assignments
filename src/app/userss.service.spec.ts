import { TestBed } from '@angular/core/testing';

import { UserssService } from './userss.service';

describe('UserssService', () => {
  let service: UserssService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserssService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
