import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { glieseInitializedGuard } from './gliese-initialized.guard';

describe('glieseInitializedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => glieseInitializedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
