import { Component, Input } from '@angular/core';
import { Movie } from './movie.model';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})

export class MovieComponent {
@Input () movie: Movie;
  getSavedMovies: any;
  setMovies: any;

}

