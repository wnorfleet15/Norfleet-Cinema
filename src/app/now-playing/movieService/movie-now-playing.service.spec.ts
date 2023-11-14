import { TestBed } from '@angular/core/testing';

import { MovieNowPlayingService } from './movie-now-playing.service';

describe('MovieNowPlayingService', () => {
  let service: MovieNowPlayingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieNowPlayingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
