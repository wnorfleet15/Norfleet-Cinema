import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './shared/auth/interceptor.service';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HeaderComponent } from './shared/header/header.component';
import { WatchLibraryComponent } from './watch-library/watch-library.component';
import { MovieComponent } from './shared/movie/movie.component';
import { SavedMovieListComponent } from './now-playing/saved-movie-list/saved-movie-list/saved-movie-list.component';
import { TemplateDrivenApproachComponent } from './now-playing/single-movie-form/single-movie-form/template-driven-approach/template-driven-approach.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent, NavbarComponent, HeaderComponent, WatchLibraryComponent, MovieComponent, SavedMovieListComponent, TemplateDrivenApproachComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,FormsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
