import { NgModule } from '@angular/core';
import { FoodAndDrinksComponent} from './food-and-drinks/food-and-drinks.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';
import { HomePageComponent } from './home-page/home-page.component';
import  {RouterModule, Routes } from "@angular/router";
import { ChildRouteComponent } from './child-route/child-route.component';
import { AuthComponent } from './shared/auth/auth.component';

const appRoutes: Routes = [
  {path: "", redirectTo: "/homePage", pathMatch: "full" },
  {path: "foodAndDrinks", component: FoodAndDrinksComponent, children: [{path:"", component: FoodAndDrinksComponent}]},
  {path: "nowPlaying", component: NowPlayingComponent,  children: [{path:"", component: NowPlayingComponent}]},
  {path: "homePage", component: HomePageComponent,  children: [{path:"", component: HomePageComponent}]},
  {path: "childRoute", component: ChildRouteComponent},
  {path: "auth", component: AuthComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
