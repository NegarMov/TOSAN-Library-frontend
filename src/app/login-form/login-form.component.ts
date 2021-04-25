import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../_service/http.service';

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

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit(): void {
  }

  onsubmit() {
    this.validUsername = (this.credentials.username)? true : false;
    this.validPassword = (this.credentials.password)? true : false;
    if (this.validPassword && this.validUsername) {
      this.httpService.authenticateUser(this.credentials.username, this.credentials.password).subscribe(data => {
        if (data != -1) {
          localStorage.setItem('userID', data + "");
          this.router.navigate(['/']);
        }
        else
          alert("ERROR: No username with the given credentials was found.");
      }, error => {
        alert("ERROR: An unexpected error occured, please try again.");
      })
    }
  }

}
