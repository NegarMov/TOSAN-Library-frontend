import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent implements OnInit {

  credentials = {oldPassword: "", newPassword: "", confirmPassword: ""};

  rememberMe: boolean = false;
  validUsername: boolean = true;
  validPassword: boolean = true;
  passwordMatch: boolean = true;

  onsubmit() {
    if (this.credentials.oldPassword)
      this.validUsername = true;
    else
      this.validUsername = false;
    if (this.credentials.newPassword)
      this.validPassword = true;
    else
      this.validPassword = false;
    if (this.credentials.newPassword == this.credentials.confirmPassword)
      this.passwordMatch = true;
    else
      this.passwordMatch = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
