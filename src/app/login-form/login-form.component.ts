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
    this.validUsername = (this.credentials.username)? true : false;
    this.validPassword = (this.credentials.password)? true : false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
