import { Component, NgModule } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import {AuthService, IAuthResData} from './auth.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl:'./auth.component.html' ,
  styleUrls: ['./auth.component.css'],
})

export class AuthComponent {

//Properties
isLoginMode = true;
errorMsg: string | null = null;
authObsv: Observable<IAuthResData>

//constructor
constructor(private authService: AuthService, private router: Router) {}

//Methods
onSwitchAuthMode () {
  this.isLoginMode = !this.isLoginMode;}

onAuthFormSubmit(formObj: NgForm) {
  console.log('Form Values:', formObj.value);
  formObj.reset();

  const { email, password } = formObj.value;

  if (!formObj.valid || !email || !password) return;

  if (this.isLoginMode) {

    this.authObsv = this.authService.signInWithEmailPassword({
      email,
      password,
    });
  } else {
    // Logic to Sign Up
    this.authObsv = this.authService.signUpWithEmailPassword({
      email,
      password,
    });
  }

  this.authObsv.subscribe({
    next: (data) => {
      console.log(data);

      this.router.navigate(['homePage']);
    },
    error: (res: HttpErrorResponse) => {
      console.log(res);
      this.errorMsg = res?.error?.error?.message || 'Something went wrong!';
    },
    complete: () => {
      console.log('Complete!');

      // Reset the Form
      formObj.reset();
    },
  });
}

toggleAuthMode() {
  this.isLoginMode = !this.isLoginMode;
}
}
