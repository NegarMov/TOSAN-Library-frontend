import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  newRequests: number;
  access: string;

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit(): void {
    this.httpService.isAdmin().subscribe(data => {
      this.access = (data)? "admin" : "user";
    });
    if (this.isLogedin() && this.access == "user")
      this.httpService.getAllRequests().subscribe(data => {
        this.newRequests = data.length;
      });
  }

  isLogedin() {
    return (localStorage.getItem('userID')) && (Number.parseInt(localStorage.getItem('userID')) >=0);
  }

  onlogout() {
    localStorage.clear();
  }

}
