// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent {

//   constructor() { }

// }

import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  successMessage = '';

  constructor(private _myservice: LoginService, private _router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.email),
      password: new FormControl(null, Validators.required),
    });
  }
  isValid(controlName: any) {
    return (
      this.loginForm.controls[controlName].invalid &&
      this.loginForm.controls[controlName].touched
    );
  }
  login() {
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      this._myservice.login(this.loginForm.value).subscribe({
        next: (data) => {
          console.log(data);
          // localStorage.setItem('token', data.toString());
           localStorage.setItem('auth-token', JSON.stringify(data))

          this.successMessage = 'Login Success';
          this._router.navigate(['/dashboard']);
        },
        error: (error) => (this.successMessage = 'Some error'),
      });
    }
  }
}