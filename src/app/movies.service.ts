import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(public http: HttpClient) { }
  
  movieURL = 'https://api.themoviedb.org/3/'
  
  searchURLandKey = 'search/movie?api_key=f4a5f3872a7ad331ab75764c29730485'
  
  query = '&query='
  
  getMovies(name){
   return this.http.get(this.movieURL + this.searchURLandKey + this.query + name )
  }
  
  postInfo(user){
    return this.http.post('http://meanstack-2018-5-young-phortonssf.c9users.io:8080/api/AppUsers',
    user
    )

  }
  
  
  postLoginInfo(loginInfo){
    return this.http.post('http://meanstack-2018-5-young-phortonssf.c9users.io:8080/api/AppUsers/login',
      loginInfo
    )
  }
}
