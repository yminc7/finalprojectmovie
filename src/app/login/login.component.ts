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

userInfo;

  constructor(public _movies: MoviesService) { }
  
  postLogin(){
    this._movies.postLoginInfo(this.loginInfo).subscribe(
      (data:any)=>
      
      {console.log(data)
      window.sessionStorage.setItem('token', data.token);
      window.sessionStorage.setItem('userId', data.userId)
      this.getInfo()
      })
  }
  
  getInfo(){
      this._movies.getUserInfo(window.sessionStorage.userId, window.sessionStorage.token)
      .subscribe(
        (data:any) => {
          this._movies.userInfo = data.firstName
          console.log(this.userInfo)
        })
    }


  ngOnInit() {
  }

}
