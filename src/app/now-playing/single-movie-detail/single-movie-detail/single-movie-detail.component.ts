import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Movie } from 'src/app/shared/movie/movie.model';
import { NowPlayingService } from '../nowPlaying.service';

@Component({
  selector: 'app-single-movie-details',
  templateUrl: './single-movie-details.component.html',
  styleUrls: ['./single-movie-details.component.css'],
})
export class SinglemovieDetailsComponent {
  // * Properties
  movieDetails: movie;

  // * Constructor
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private nowPlayingService: NowPlayingService
  ) {}

  // * Lifecycle
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const bookIdFromParams = +params['id'];
      this.movieDetails = this.nowPlayingService.getmovieById(bookIdFromParams);
    });
  }

  // * Methods
  navigateToEditMovieRoute() {
    this.router.navigate(['../', this.movieDetails.id, 'edit'], {
      relativeTo: this.route,
    });
  }

  onRemoveMovie() {
    this.nowPlayingService.deleteMovieById(this.movieDetails.id);
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
