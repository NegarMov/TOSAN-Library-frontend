import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/_model/book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css', '../../books-by-genre/books-by-genre.component.css']
})
export class BookItemComponent implements OnInit {
 
  @Input() item: Book;

  constructor() { }

  ngOnInit(): void {
  }

}
