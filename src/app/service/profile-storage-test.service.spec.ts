import { TestBed } from '@angular/core/testing';

import { ProfileStorageTestService } from './profile-storage-test.service';

describe('ProfileStorageTestService', () => {
  let service: ProfileStorageTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileStorageTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
