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

  lentToThisUser: boolean = false;

  userRating: number;

  constructor(private httpService: HttpService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const title = this.route.snapshot.paramMap.get('title');
    this.httpService.getBookByName(title).subscribe(data => {
      if (data)
        this.book = data;  
      else {
        this.router.navigate(['page-not-found']);
        return;
      }
      this.httpService.isRequested(this.book.title).subscribe(data => {
        this.requestSent = data;
      });
      this.httpService.isInFavourite(this.book.title).subscribe(data => {
        this.saveMessage = (data)? "Remove from read later" : "Add to read later";
      });
    });

    var isLogedin = (localStorage.getItem('userID')) && (Number.parseInt(localStorage.getItem('userID')) >=0);
    if (isLogedin) {
      this.httpService.isAdmin().subscribe(data => {
        this.access = (data)? "admin" : "user";
      });
      this.httpService.getUsername().subscribe(data => {
        if (data.username == this.book.user.username)
          this.lentToThisUser = true;
      });
      this.httpService.getUserRating(this.book.title).subscribe(data => {
        this.userRating = Math.round(data);
      });
    }
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

  setRating(rating: number) {
    this.userRating = rating;
    this.httpService.addOrUpdateRating(rating, this.book.title).subscribe();
  }

  onrating5() {this.setRating(5);}

  onrating4() {this.setRating(4);}

  onrating3() {this.setRating(3);}

  onrating2() {this.setRating(2);}

  onrating1() {this.setRating(1);}  

}
