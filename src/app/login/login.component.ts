import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
loginInfo = {
  email: '',
  password: ''
}

  constructor(public _movies: MoviesService) { }
  
  postLogin(){
    this._movies.postLoginInfo(this.loginInfo).subscribe(
      (data:any)=>
      
      {console.log(data)
      window.sessionStorage.setItem('token', data.token);
      window.sessionStorage.setItem('userId', data.userId)
      
      })
  }


  ngOnInit() {
  }

}
