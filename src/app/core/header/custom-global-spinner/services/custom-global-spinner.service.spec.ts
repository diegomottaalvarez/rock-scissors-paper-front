import { TestBed } from '@angular/core/testing';

import { CustomGlobalSpinnerService } from './custom-global-spinner.service';

describe('CustomGlobalSpinnerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomGlobalSpinnerService = TestBed.get(CustomGlobalSpinnerService);
    expect(service).toBeTruthy();
  });
});
