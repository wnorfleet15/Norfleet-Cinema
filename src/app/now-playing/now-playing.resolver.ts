import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Movie } from '../shared/movie/movie.model';
import { NowPlayingService } from './now-playing.component';
import { DatabaseService } from '../shared/db/database.service';

export const movieResolver: ResolveFn<Movie[]> = () => {
  const books = inject(NowPlayingService).getSavedMovies();

  if (movies?.length === 0) {
    return inject(DatabaseService).getMoviesFromDatabase() || [];
  } else {
    return movies;
  }
};
