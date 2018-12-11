import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Router } from '@angular/router'
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


  constructor(public _movies: MoviesService, public router: Router) { }
  
  postSignUp(){
    this._movies.postInfo(this.user).subscribe(
      (data:any)=> {
        
        console.log(data)
        window.sessionStorage.setItem('token', data.token);
        window.sessionStorage.setItem('userId', data.userId)
        this.getInfo()
        this.router.navigate(['/'])
      
        
      }
      
      )
  }
  
   getInfo(){
      this._movies.getUserInfo(window.sessionStorage.userId, window.sessionStorage.token)
      .subscribe(
        (data:any) => {
          this._movies.userInfo = data.firstName
          console.log(this._movies.userInfo)
        })
    }

  ngOnInit() {
  }

}
