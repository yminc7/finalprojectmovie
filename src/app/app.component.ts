import { Component } from '@angular/core';
import { MoviesService } from './movies.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end-project';
  name;
  searchResults;
  token;
  userInfo;
  boxFavorites;

  
  
  
  constructor(public _movies: MoviesService){}
  
  
    searchMovies(){
      this._movies.getMovies(this.name)
      .subscribe(
        (data:any) => {
          this.searchResults = data.results
          console.log(this.searchResults)
        }
        )
    }
    
    
    logout(){
      this._movies.postLogout(window.sessionStorage.token)
      .subscribe(
        (data:any) => {
          console.log('hi')
          window.sessionStorage.clear()
          this._movies.userInfo = ''
          this.boxFavorites = ''
  
          
        }
        )
      
    }
    
    postFavorites(fav){
      console.log(fav)
      this._movies.saveFavorites(window.sessionStorage.userId, window.sessionStorage.token, {"name" : fav})
      .subscribe(
        (data:any) => {
          console.log(data)
          console.log('Favorites posted')
        this.grabFavorites()
        })
    }
    
    
    grabFavorites(){
      this._movies.getFavorites(window.sessionStorage.userId, window.sessionStorage.token)
      .subscribe(
        (data:any) => {
          this.boxFavorites = data
          console.log(data)
        })
    }
    
  
    
}
