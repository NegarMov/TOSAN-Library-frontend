import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isLogedin() {
    return (localStorage.getItem('userID')) && (Number.parseInt(localStorage.getItem('userID')) >=0);
  }

}
