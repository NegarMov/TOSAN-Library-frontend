import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../_service/http.service';
import { Author } from '../_model/author';
import { Book } from '../_model/book';
import { Publisher } from '../_model/publisher';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  newRequests: number;
  access: string;
  username: string; //TODO!
  isLogedin: boolean;

  searchedBooks: Book[] = [];
  searchedAuthors: Author[] = [];
  searchedPublishers: Publisher[] = [];
  searchedToken: string = "";

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit(): void {
    this.isLogedin = (localStorage.getItem('userID')) && (Number.parseInt(localStorage.getItem('userID')) >=0);
    
    if (this.isLogedin)
      this.httpService.isAdmin().subscribe(data => {
        this.access = (data)? "admin" : "user";
        if (this.access == "user") {
          this.httpService.getAllRequests().subscribe(data => {
            this.newRequests = data.length;
          });
        }
        else {
          this.username = "admin";
          this.httpService.getAllRequests_admin().subscribe(data => {
            this.newRequests = data.length;
          });
        }
      });
  }

  onsearch() {
    this.httpService.searchBook(this.searchedToken).subscribe(data => {
      this.searchedBooks = data;
    });
    this.httpService.searchAuthor(this.searchedToken).subscribe(data => {
      this.searchedAuthors = data;
    });
    this.httpService.searchPublisher(this.searchedToken).subscribe(data => {
      this.searchedPublishers = data;
    });
  }

  onlogout() {
    localStorage.clear();
    this.isLogedin = false;
  }

}
