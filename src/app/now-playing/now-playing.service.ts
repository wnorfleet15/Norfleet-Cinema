import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Movie} from '../shared/movie/movie.model';

@Injectable({
  providedIn: 'root',
})
export class NowPlayingService {
  // * Properties
  private mySavedMovies: Movie[] = [];

  // * Events
  movieListChanged = new Subject<Movie[]>();
  mySavedMovie: any;

  // * Constructor
  constructor() {}

  // * Methods
  // READ ALL - get all movies
  getSavedMovies() {
    return this.mySavedMovies.slice();
  }

  // READ ONE - get one movie
  getMovieById(id: number) {
    const foundMovie = this.mySavedMovies.find((movie) => movie.id === id);

    return foundMovie;
  }

  // CREATE - add a new movie
  addMovie(newMovie: Movie) {
    this.mySavedMovies.push(newMovie); // push() adds one or more elements to the end of an array and returns the new length of the array
    this.movieListChanged.next(this.mySavedMovies.slice()); // next the updated list of Movies
  }

  // UPDATE - update an existing movie
  updatemovie(movieId: number, updatedMovieVals: Partial<Movie>) {
    const movieIndex = this.mySavedMovies.findIndex((movie) => movie.id === movieId); // Get index of movie to update

    if (movieIndex !== -1) {
      // We found the movie, now we update it with new values
      this.mySavedMovies[movieIndex] = {
        ...this.mySavedMovies[movieIndex], // Spread operator to get all the existing values
        ...updatedMovieVals, // Spread operator to get all the updated values
        id: movieId, // Ensure the movie ID stays the same
      };

      this.movieListChanged.next(this.mySavedMovies.slice());
    } else {
      // Movie wasn't found
      console.error('Movie not found!');
    }
  }

  // UPDATE - update all Movies
  setMovies(movies: Movie[]) {
    this.mySavedMovies = movies;
    this.movieListChanged.next(this.mySavedMovies.slice());
  }

  // DELETE - delete an existing movie
  deleteMovieById(id: number) {
    const newMovie = this.mySavedMovies.filter((movie) => movie.id !== id);

    console.log('newMovies:', newMovie);
    this.mySavedMovies = newMovie;
    this.movieListChanged.next(this.mySavedMovies.slice());
  }
}
