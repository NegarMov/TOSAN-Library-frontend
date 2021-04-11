import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css']
})
export class BookInfoComponent implements OnInit {

  access: string = "admin"; //change later

  bookTitle: string = "First Book";
  bookAuthor: string = "Maxeu";
  bookPublisher: string = "The Other";
  bookSummary: string = "This is a book about books? This author writes about books, in fact writes everything except the book itself! You know, it gets a little bit recursive if she did the thing. Wanna be on this journey with her? Read this book!";
  rating: number = 3;
  tags = ["comedy", "social", "sci-fi"];
  saveMessage: string = "Add to read later";
  requestSent: boolean = false;
  userRating: number = 0; //for user
  lentTo: string = "@username"; //for admin (in case it's empty, the book is available)
  startDate: Date = new Date(2020, 7, 12, 13, 54, 7); //for admin
  dueDate: Date = new Date(2020, 7, 19, 13, 54, 7); //for admin

  onclickSave() {
    if (this.saveMessage == "Add to read later") {
      this.saveMessage = "Remove from read later";
      //TODO: remove book from user's read later list
    }
    else {
      this.saveMessage = "Add to read later";
      //TODO: add book to user's read later list
    }
  }

  onclickRequest() {
    this.requestSent = true;
    //TODO: add book to user's request list
  }

  saved() {
    return this.saveMessage.startsWith("Remove");
  }

  onrating5() {this.userRating = 5;}

  onrating4() {this.userRating = 4;}

  onrating3() {this.userRating = 3;}

  onrating2() {this.userRating = 2;}

  onrating1() {this.userRating = 1;}  

  constructor() { }

  ngOnInit(): void {
  }

}
