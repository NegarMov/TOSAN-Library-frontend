import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../_service/http.service';

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

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit(): void {
  }

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

    if (this.validUsername && this.validPassword && this.passwordMatch) {
      this.httpService.addUser(this.credentials.username, this.credentials.password).subscribe(data => {
        if (data)
          this.router.navigate(['/', 'login']);
        else
          alert("Username is already taken. Please choose another one.");
      }, error => {
        if (error.status == 500)
          alert("Username is already taken. Please choose another one.");
      });
    }
  }

}
