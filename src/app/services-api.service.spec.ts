import { TestBed } from '@angular/core/testing';

import { ServicesApiService } from './services-api.service';

describe('ServicesApiService', () => {
  let service: ServicesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesApiService);
  });

  it('Should be created', () => {
    expect(service).toBeTruthy();
  });
});
