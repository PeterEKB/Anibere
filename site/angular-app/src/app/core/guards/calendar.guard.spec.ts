import { TestBed } from '@angular/core/testing';

import { CalendarGuardGuard } from './calendar.guard';

describe('CalendarGuardGuard', () => {
  let guard: CalendarGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CalendarGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
