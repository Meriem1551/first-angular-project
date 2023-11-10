import { Component, OnInit } from '@angular/core';
import { AnimesService } from '../animes.service';

@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.css']
})
export class AnimesComponent {
  movies : any = [];
  term : string = '';

  constructor(private animeService: AnimesService){}
  
  ngOnInit(){
    this.animeService.fetchData().subscribe((data) => {
     this.movies = data;
    });
  }
}
