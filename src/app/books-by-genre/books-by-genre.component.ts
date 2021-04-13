import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-by-genre',
  templateUrl: './books-by-genre.component.html',
  styleUrls: ['./books-by-genre.component.css']
})
export class BooksByGenreComponent implements OnInit {

  poetryBooksNum: number = 123;
  childrenBooksNum: number = 78;
  romanceBooksNum: number = 253;
  scifiBooksNum: number = 169;
  crimeBooksNum: number = 98;
  fantasyBooksNum: number = 156;

  constructor() { }

  ngOnInit(): void {
  }

}
