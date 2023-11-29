import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { movies} from '../shared/movie/movie.model';

@Injectable({
  providedIn: 'root',
})
export class NowPlayingService {
  // * Properties
  private mySavedBooks: Movie[] = [];

  // * Events
  movieListChanged = new Subject<Movie[]>();

  // * Constructor
  constructor() {}

  // * Methods
  // READ ALL - get all books
  getSavedMovies() {
    return this.mySavedMovies.slice();
  }

  // READ ONE - get one book
  getBookById(id: number) {
    const foundBook = this.mySavedMovies.find((book) => book.id === id);

    return foundBook;
  }

  // CREATE - add a new book
  addBook(newBook: Book) {
    this.mySavedMovies.push(newBook); // push() adds one or more elements to the end of an array and returns the new length of the array
    this.bookListChanged.next(this.mySavedMovies.slice()); // next the updated list of Movies
  }

  // UPDATE - update an existing book
  updateBook(bookId: number, updatedBookVals: Partial<Book>) {
    const bookIndex = this.mySavedMovies.findIndex((book) => book.id === bookId); // Get index of book to update

    if (bookIndex !== -1) {
      // We found the book, now we update it with new values
      this.mySavedMovies[bookIndex] = {
        ...this.mySavedMovies[bookIndex], // Spread operator to get all the existing values
        ...updatedBookVals, // Spread operator to get all the updated values
        id: bookId, // Ensure the book ID stays the same
      };

      this.bookListChanged.next(this.mySavedMovies.slice());
    } else {
      // Book wasn't found
      console.error('Book not found!');
    }
  }

  // UPDATE - update all Movies
  setMovies(books: Movie[]) {
    this.mySavedMovies = books;
    this.movieListChanged.next(this.mySavedMovies.slice());
  }

  // DELETE - delete an existing movie
  deleteMovieById(id: number) {
    const newMovie = this.mySavedMovies.filter((movie) => movie.id !== id);

    console.log('newMovies:', newMovies);
    this.mySavedMovies = newMovies;
    this.movieListChanged.next(this.mySavedMovies.slice());
  }
}
