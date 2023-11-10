import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnimesService {

  constructor(private http: HttpClient) { }
  fetchData(){
    return this.http.get('../../assets/data/animes.json')
  }
}
