import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/_model/book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css', '../book-carousel.component.css']
})
export class BookCardComponent implements OnInit {

  @Input() book: Book;

  constructor() { }

  ngOnInit(): void {
  }

  getSummary() {
    var newtxt = "";
    var txt = this.book.summary;
    if (txt.length > 105) {
      txt = txt.substr(0, 106);
      var i = 105;
      while (txt.charAt(i) != ' ') {
        newtxt += txt.charAt(i);
        i--;
      }
      i--;
      while (txt.charAt(i) == '.') {
          newtxt += txt.charAt(i);
          i--;
      }
      return txt.substr(0, i+1) + "...";
    }
    return this.book.summary;
  }

}
