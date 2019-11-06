import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(authForm: NgForm) {
    console.log(authForm.value);

    if (authForm.invalid) {
      return;
    }

    const email = authForm.value.email;
    const password = authForm.value.password;

    this.isLoading = true;

    if(this.isLoginMode){
      return
    }

    else {
      this.authService.signup(email, password).subscribe(responseData => {
          console.log(responseData);
          this.isLoading = false;
        },
        errorMessage => {
        // error handling is in auth.service.ts
          console.error(errorMessage);
          this.error = errorMessage;
          this.isLoading = false;
        });
      authForm.reset();
    }
  }
}
