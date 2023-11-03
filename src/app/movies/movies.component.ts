import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit{
  movies : any = [];
  term : string = '';
constructor(private moviesService: MoviesService){}

ngOnInit(){
  this.moviesService.fetchData().subscribe((data) => {
   this.movies = data;
  });
}
}
