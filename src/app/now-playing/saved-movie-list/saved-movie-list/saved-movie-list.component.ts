import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NowPlayingService } from '../../now-playing.service';
import {Movie} from 'src/app/shared/movie/movie.model';
import {sortMovieFieldT} from 'src/app/shared/pipes/sortMovies.pipe';


@Component({
  selector: 'app-saved-movie-list',
  templateUrl: './saved-movie-list.component.html',
  styleUrls: ['./saved-movie-list.component.css'],
})

export class SavedMovieListComponent implements OnInit, OnDestroy {
  // * Properties
  @Output() movieSelected = new EventEmitter<Movie>();
  sortByField: sortMovieFieldT = 'title';
  mySavedMovies: Movie[] = [];
  mySavedMoviesSub: Subscription;

  // * Constructor
  constructor(
    public movieNowPlayingService: NowPlayingService,
    private router: Router
  ) {}

  // * Lifecycle
  ngOnInit() {
    // Set the initial list of movies
    this.mySavedMovies = this.movieNowPlayingService.getSavedMovies();

    // Subscribe to the movieListChanged event
    this.mySavedMoviesSub = this.movieNowPlayingService.movieListChanged.subscribe(
      (updatedMovieList: Movie[]) => {
        this.mySavedMovies = [...updatedMovieList];
      }
    );
  }

  ngOnDestroy() {
    // Unsubscribe from the movieListChanged event
    this.mySavedMoviesSub.unsubscribe();
  }

  // * Methods
  onRemoveMovie(movieId: number) {
    this.movieNowPlayingService.deleteMovieById(movieId);
    this.router.navigate(['Movies']);
  }

  navigateToNewMovieRoute() {
    this.router.navigate(['Movies', 'new']);
  }

  alternateSortingField() {
    this.sortByField = this.sortByField === 'title' ? 'producer' : 'title';
  }
}
