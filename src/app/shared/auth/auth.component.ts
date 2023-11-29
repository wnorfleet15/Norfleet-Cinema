import { Component, NgModule } from '@angular/core';
import { NgForm} from '@angular/forms';
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


isLoginMode = true;
errorMsg: string | null = null;
authObsv: Observable<IAuthResData>

constructor(private authService: AuthService, private router: Router) {}

onAuthFormSubmit(form: NgForm) {

  const { email, password } = form.value;

  if (!form.valid || !email || !password) return;

  if (this.isLoginMode) {

    this.authObsv = this.authService.signInWithEmailPassword({
      email,
      password,
    });
  } else {

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

      form.reset();
    },
  });
}

toggleAuthMode() {
  this.isLoginMode = !this.isLoginMode;
  }
}
