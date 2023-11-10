import { TestBed } from '@angular/core/testing';

import { AnimesService } from './animes.service';

describe('AnimesService', () => {
  let service: AnimesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
