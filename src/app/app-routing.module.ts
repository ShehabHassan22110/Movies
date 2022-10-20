import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { NetworkComponent } from './network/network.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [
  {path:'' , redirectTo:'login' , pathMatch:'full'},
  {path:'home'  ,component:HomeComponent},
  {path:'movies'  , component:MoviesComponent},
  {path:'tv'  , component:TvComponent},
  {path:'network'  , component:NetworkComponent},
  {path:'people'  , component:PeopleComponent},
  {path:'login'  , component:LoginComponent},
  {path:'register'  , component:RegisterComponent},
  {path:'moviedetailes/:id'  , component:MovieDetailsComponent},
  {path:'**' , component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
