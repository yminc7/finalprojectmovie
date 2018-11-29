import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

user = {
  firstName: '',
  lastName: '',
  email: '',
  password: ''
}


  constructor(public _movies: MoviesService) { }
  
  postSignUp(){
    this._movies.postInfo(this.user).subscribe(
      (data:any)=> {
        
        console.log(data)
        window.sessionStorage.setItem('token', data.token);
        window.sessionStorage.setItem('userId', data.userId)
      
        
      }
      
      )
  }

  ngOnInit() {
  }

}
