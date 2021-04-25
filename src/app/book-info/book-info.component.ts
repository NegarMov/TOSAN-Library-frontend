import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { HttpService } from '../_service/http.service';
import { Book } from '../_model/book';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css']
})
export class BookInfoComponent implements OnInit {

  access: string = "";

  book = new Book();

  saveMessage: string = "";
  requestSent: boolean = false;
  userRating: number = 0; //for user

  constructor(private httpService: HttpService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const title = this.route.snapshot.paramMap.get('title');
    this.httpService.getBookByName(title).subscribe(data => {
      this.book = data;
      this.httpService.isRequested(this.book.title).subscribe(data => {
        this.requestSent = data;
      });
      this.httpService.isInFavourite(this.book.title).subscribe(data => {
        this.saveMessage = (data)? "Remove from read later" : "Add to read later";
      });
    });

    var isLogedin = (localStorage.getItem('userID')) && (Number.parseInt(localStorage.getItem('userID')) >=0);
    if (isLogedin)
      this.httpService.isAdmin().subscribe(data => {
        this.access = (data)? "admin" : "user";
      });
  }

  onclickSave() {
    if (this.saveMessage == "Add to read later") {
      this.httpService.addBookToFavourite(this.book.title).subscribe();
      this.saveMessage = "Remove from read later";
    }
    else {
      this.httpService.removeBookfromFavourite(this.book.title).subscribe();
      this.saveMessage = "Add to read later";
    }
  }

  onclickRequest() {
    this.requestSent = true;
    this.httpService.addRequest(this.book.title).subscribe();
  }

  saved() {
    return this.saveMessage.startsWith("Remove");
  }

  onrating5() {this.userRating = 5;}

  onrating4() {this.userRating = 4;}

  onrating3() {this.userRating = 3;}

  onrating2() {this.userRating = 2;}

  onrating1() {this.userRating = 1;}  

}
