import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './movie/movie.model';

export type sortMovieFieldT = 'title' | 'producer';

@Pipe({
  name: 'sortMovies',
})
export class SortMoviePipe implements PipeTransform {
  transform(arrayOfMovies: Movie[], fieldToSortOn: sortMovieFieldT): Movie[] {
    const sortedArrOfMovies = arrayOfMovies.sort((movieA: Movie, movieB: Movie) => {
      if (movieA[fieldToSortOn] < movieB[fieldToSortOn]) {
        return -1; // movie A comes before movie B
      } else if (movieA[fieldToSortOn] > movieB[fieldToSortOn]) {
        return 1; // movie A comes after movie B
      } else {
        return 0; // Keep the same order
      }
    });

    return sortedArrOfMovies;
  }
}
