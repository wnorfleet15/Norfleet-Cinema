import { NgModule } from '@angular/core';
import { NowPlayingComponent } from './now-playing/now-playing.component';
import { HomePageComponent } from './home-page/home-page.component';
import  {RouterModule, Routes } from "@angular/router";
import { ChildRouteComponent } from './child-route/child-route.component';
import { AuthComponent } from './auth/auth.component';
import { WatchLibraryComponent } from './watch-library/watch-library.component';

const appRoutes: Routes = [
  {path: "", redirectTo: "/homePage", pathMatch: "full" },
  {path: "nowPlaying", component: NowPlayingComponent,  children: [{path:"", component: NowPlayingComponent}]},
  {path: "homePage", component: HomePageComponent,  children: [{path:"", component: HomePageComponent}]},
  {path: "childRoute", component: ChildRouteComponent},
  {path: "auth", component: AuthComponent},
  {path: "watchLibrary", component: WatchLibraryComponent,  children: [{path:"", component: WatchLibraryComponent}]},

]


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
