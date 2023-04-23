import { TestBed } from '@angular/core/testing';

import { PostssService } from './postss.service';

describe('PostssService', () => {
  let service: PostssService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostssService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
