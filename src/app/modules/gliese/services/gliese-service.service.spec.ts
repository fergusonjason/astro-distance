import { TestBed } from '@angular/core/testing';

import { GlieseService } from './gliese-service.service';

describe('GlieseService', () => {
  let service: GlieseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlieseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
