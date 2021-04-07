import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  credentials = {username: "", password: "", confirmPassword: ""};

  rememberMe: boolean = false;
  validUsername: boolean = true;
  validPassword: boolean = true;
  passwordMatch: boolean = true;

  onsubmit() {
    if (this.credentials.username)
      this.validUsername = true;
    else
      this.validUsername = false;
    if (this.credentials.password)
      this.validPassword = true;
    else
      this.validPassword = false;
    if (this.credentials.password == this.credentials.confirmPassword)
      this.passwordMatch = true;
    else
      this.passwordMatch = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
