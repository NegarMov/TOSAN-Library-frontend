import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  newRequests: number = 5;
  access: string = "admin"; //change later

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  isLogedin() {
    return (localStorage.getItem('userID')) && (Number.parseInt(localStorage.getItem('userID')) >=0);
  }

  onlogout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

}
