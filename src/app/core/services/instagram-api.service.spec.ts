import { TestBed, inject } from '@angular/core/testing';

import { InstagramApiService } from './instagram-api.service';

describe('InstagramApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstagramApiService]
    });
  });

  it('should be created', inject([InstagramApiService], (service: InstagramApiService) => {
    expect(service).toBeTruthy();
  }));
});
