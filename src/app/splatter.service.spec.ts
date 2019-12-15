import { TestBed } from '@angular/core/testing';

import { SplatterService } from './splatter.service';

describe('SplatterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SplatterService = TestBed.get(SplatterService);
    expect(service).toBeTruthy();
  });
});
