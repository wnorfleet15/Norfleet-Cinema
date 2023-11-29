import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Movie } from 'src/app/shared/movie/movie.model';

@Component({
  selector: 'app-template-driven-approach',
  templateUrl: './template-driven-approach.component.html',
  styleUrls: ['./template-driven-approach.component.css'],
})


export class TemplateDrivenApproachComponent {
  // * Properties
  isFormSubmitted: boolean = false;
  movieDetails: Partial<Movie> = {
    title: '',
    producer: '',
    coverImg: '',
  };

  // * Methods
  onFormSubmit(formObject: NgForm) {
    // If the form is invalid, don't submit it
    if (formObject.invalid) return;

    this.isFormSubmitted = true; // Show the results

    // Set the book details
    this.movieDetails = {
      title: formObject.value.title,
      producer: formObject.value.producer,
      coverImg: formObject.value.coverImg,
    };

    formObject.reset(); // Reset the form

    // TODO: Remove this timeout
    setTimeout(() => {
      this.isFormSubmitted = false; // Hide the results
    }, 3000);
  }
}
