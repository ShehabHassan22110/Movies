import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  trendingMovies:any[] =[] ;
  trendingTv:any[] =[] ;
  trendingPeople:any[] =[] ;
  imgPrefix:string='https://image.tmdb.org/t/p/w500/';
  constructor(private _MoviesService:MoviesService) {

    _MoviesService.getTrendingMovies('movie').subscribe((response)=>{
      this.trendingMovies = response.results.splice(0,10) ;

    })
    _MoviesService.getTrendingMovies('tv').subscribe((response)=>{
      this.trendingTv = response.results.splice(0,10) ;

    })
    _MoviesService.getTrendingMovies('person').subscribe((response)=>{
      this.trendingPeople = response.results.splice(0,10) ;

    })
   }


  ngOnInit(): void {
  }

}
