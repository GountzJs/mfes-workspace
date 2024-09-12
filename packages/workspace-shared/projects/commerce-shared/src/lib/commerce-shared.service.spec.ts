import { TestBed } from '@angular/core/testing';

import { CommerceSharedService } from './commerce-shared.service';

describe('CommerceSharedService', () => {
  let service: CommerceSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommerceSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
