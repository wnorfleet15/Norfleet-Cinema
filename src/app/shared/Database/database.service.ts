import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from 'src/app/shared/movie/movie.model';
import { tap } from 'rxjs';
import { MovieComponent } from '../movie/movie.component';


@Injectable({
  providedIn: 'root',
})

export class DatabaseService {
  // * Properties
  readonly firebaseRootURL =
  'https://console.firebase.google.com/u/0/project/norfleet-cinema/database/norfleet-cinema-default-rtdb/data/~2F'

  // * Constructor
  constructor(
    private http: HttpClient,
    private movieService: MovieComponent  ) {}

  // * Methods
  saveMoviesToDatabase() {
    const myMovies = this.movieService.getSavedMovies();

    this.http.put(this.firebaseRootURL, myMovies).subscribe();
  }

  getMoviesFromDatabase() {
    const myDBMovies = this.http.get<Movie[]>(this.firebaseRootURL).pipe(
      tap((movies: Movie[]) => {
        this.movieService.setMovies(Movie);
      })
    );

    return myDBMovies;
  }
}
