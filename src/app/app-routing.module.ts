import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { SignupComponent } from './signup/signup.component'

export const routes: Routes = [
   { path: '', redirectTo: '', pathMatch: 'full' },
   { path: 'login', component: LoginComponent},
   { path: 'sign-up', component: SignupComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
