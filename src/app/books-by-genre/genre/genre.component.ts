import { Component, Input, OnInit } from '@angular/core';
import { Genre } from 'src/app/_model/genre';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css', '../books-by-genre.component.css']
})
export class GenreComponent implements OnInit {

  @Input() genre: Genre;

  bookSearchedToken: string = "";
  bookSearchRes = new Array();

  constructor() { }

  ngOnInit(): void {
    for (var i=0; i<this.genre.books.length; i++)
      this.bookSearchRes[i] = true;
  }

  getTopBooks() {
    return this.genre.books.filter((b) => b.rating == 5);
  }

  onsearchBook() {
    for (var i=0; i<this.genre.books.length; i++)
      this.bookSearchRes[i] = (this.genre.books[i].title.toLowerCase().includes(this.bookSearchedToken.toLowerCase()));
  }

}
