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
}
