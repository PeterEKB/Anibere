import { TestBed } from '@angular/core/testing';

import { StyleGuard } from './style.guard';

describe('StyleGuardGuard', () => {
  let guard: StyleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StyleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
