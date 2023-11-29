import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MovieNowPlayingService } from '../../now-playing.service';


@Component({
  selector: 'app-single-movie-form',
  templateUrl: './single-movie-form.component.html',
  styleUrls: ['./single-movie-form.component.css'],
})
export class SingleMovieFormComponent {
  // * Properties
  isEditingMovie: boolean = false;
  isFormSubmitted: boolean = false;
  movieId: number | null = null;
  movieDetails: Partial<movie> = {
    title: '',
    producer: '',
    coverImg: '',
  };

  // * Constructor
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private nowPlayingService: MovieNowPlayingService
  ) {}

  // * Lifecycle
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.movieId = +params['id']; // The + converts the string to a number

      this.isEditingMovie = !!this.movieId; // If there is a movieId, then we are editing a movie

      // If we are editing a movie, get the movie and update local variable
      if (this.isEditingMovie) {
        const editingmovie = this.nowPlayingService.getMovieById(this.movieId);

        if (this.isEditingMovie) {
          this.movieDetails = {
            title: editingMovie.title,
            producer: editingMovie.producer,
            coverImg: editingMovie.coverImg,
          };
        }
      }
    });
  }

  // * Methods
  // Form Submit Handler
  onFormSubmit(formObject: NgForm) {
    // If the form is invalid, don't submit it
    if (formObject.invalid) return;

    this.isFormSubmitted = true; // Show the results

    // Set the movie details
    this.movieDetails = {
      title: formObject.value.title,
      producer: formObject.value.producer,
      coverImg: formObject.value.coverImg,
    };

    // Perform different actions depending on "edit" or "create"
    if (this.isEditingMovie) {
      // Update the movie
      this.nowPlayingService.updateMovie(this.movieId, this.movieDetails);
    } else {
      // Create the movie
      const newMovie: Movie = {
        id: +(Math.random() * 1000000).toFixed(0),
        title: this.movieDetails.title,
        producer: this.movieDetails.producer,
        coverImg: this.movieDetails.coverImg,
      };

      this.nowPlayingService.addMovie(newMovie);
    }

    this.onResetForm(formObject);
  }

  // Reset Form Handler
  onResetForm(formObject?: NgForm) {
    formObject && formObject.reset(); // Reset the form

    this.isFormSubmitted = false; // Hide the results

    this.router.navigate(['../'], { relativeTo: this.route }); // Navigate back one level
  }
}
