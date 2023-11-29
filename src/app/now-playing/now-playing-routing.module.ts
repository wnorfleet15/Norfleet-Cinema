import { RouterModule, Routes } from '@angular/router';
import { NowPlayingComponent } from './bookshelf-page.component';
import { nowPlayingResolver } from './now-playing.resolver';
import { SingleMovieFormComponent } from './single-book-form/single-book-form.component';
import { SingleMovieDetailsComponent } from './single-Movie-details/single-Movie-details.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: NowPlayingComponent,
    resolve: [nowPlayingResolver],
    children: [
      { path: 'new', component: SingleMovieFormComponent },
      {
        path: ':id',
        component: SingleMovieDetailsComponent,
        resolve: [nowPlayingResolver],
      },
      {
        path: ':id/edit',
        component: SingleMovieFormComponent,
        resolve: [nowPlayingResolver],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NowPlayingRoutingModule {}
