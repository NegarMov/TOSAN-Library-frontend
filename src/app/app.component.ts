import { Component, OnInit } from '@angular/core';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';
import { HttpService } from './http.service';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { Test2 } from './tets2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{

  title = 'Library';
  showNavbar: boolean = true;

  onRouterOutletActivate(event: any) {
    if (event instanceof LoginFormComponent || event instanceof SignupFormComponent || event instanceof ChangePasswordFormComponent)
      this.showNavbar = false;
    else
      this.showNavbar = true;
  }

}
