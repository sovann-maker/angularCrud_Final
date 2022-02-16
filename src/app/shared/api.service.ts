import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map} from 'rxjs';
import { Observable } from 'rxjs';
import { MovieModel } from '../movie-dashboard/movie.model';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

  constructor(private _http: HttpClient) { }

  postMovie(data:any):Observable<MovieModel> {
    return this._http.post<MovieModel>("https://moviesapiusingnodejs.herokuapp.com/api/movie",data);
  }

  getMovie(){
    return this._http.get<any>("http://moviesapiusingnodejs.herokuapp.com/api/movies" ).pipe(
      map(
        res => {
          return res;
        }
      )
    )
  }
  putMovie(data:any,mid:string){
    return this._http.put<any>(" https://moviesapiusingnodejs.herokuapp.com/api/movie/" +mid , data).pipe(
      map(
        res => {
          return res;
        }
      )
    )
  }
  //https://moviesapiusingnodejs.herokuapp.com/api/movie
  deleteMovie(mid:string){
    return this._http.delete<any>(" https://moviesapiusingnodejs.herokuapp.com/api/movie/"+mid).pipe(
      map(
        res => {
          return res;
        }
      )
    )
  }

}