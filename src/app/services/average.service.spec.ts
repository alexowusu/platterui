import { TestBed } from '@angular/core/testing';

import { AverageService } from './average.service';

describe('AverageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AverageService = TestBed.get(AverageService);
    expect(service).toBeTruthy();
  });
});
