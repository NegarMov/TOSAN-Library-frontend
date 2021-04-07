import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  credentials = {username: "", password: ""};

  rememberMe: boolean = false;
  validUsername: boolean = true;
  validPassword: boolean = true;

  onsubmit() {
    alert(this.credentials.username + " | " + this.credentials.password + ", " + this.rememberMe);
    if (this.credentials.username)
      this.validUsername = true;
    else
      this.validUsername = false;
    if (this.credentials.password)
      this.validPassword = true;
    else
      this.validPassword = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
