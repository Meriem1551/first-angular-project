import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(movies: any[], term: string): any {

    //check if search term is undefined
    if (term === undefined) return movies;
   
    return movies.filter(function(movie){
      return movie.name.toLowerCase().includes(term.toLowerCase())
    });
  }

}
