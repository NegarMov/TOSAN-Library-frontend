import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/_model/book';

@Component({
  selector: 'app-genre-book-item',
  templateUrl: './genre-book-item.component.html',
  styleUrls: ['./genre-book-item.component.css', '../books-by-genre.component.css']
})
export class GenreBookItemComponent implements OnInit {
 
  @Input() item: Book;

  constructor() { }

  ngOnInit(): void {
  }

}
