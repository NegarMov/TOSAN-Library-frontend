import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { User } from '../_model/user';

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
      var newUser = new User(this.credentials.username, this.credentials.password);
      this.httpService.addUser(newUser).subscribe(data => {
        this.router.navigate(['/', 'login']);
      }, error => {
        if (error.status == 500)
          alert("Username is already taken. Please choose another one.")
      });
    }
  }

}
