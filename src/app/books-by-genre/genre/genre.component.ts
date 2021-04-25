import { Component, Input, OnInit } from '@angular/core';
import { BookService } from 'src/app/_service/book.service';
import { HttpService } from 'src/app/_service/http.service';
import { Book } from 'src/app/_model/book';
import { Genre } from 'src/app/_model/genre';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css', '../books-by-genre.component.css']
})
export class GenreComponent implements OnInit {

  @Input() id: number;

  bookSearchedToken: string = "";
  genre: Genre;
  searchedBooks: Book[];

  constructor(private httpService: HttpService, private bookService: BookService) { }

  ngOnInit(): void {
    this.genre = this.bookService.genres[this.id];
    this.httpService.getBooksByGenre(this.genre.serverID).subscribe(data => {
      this.genre.books = data;
      this.searchedBooks = data;
      this.genre.quantity = data.length;
    });
  }

  getTopBooks() {
    return this.genre.books.filter((b) => b.rating == 5);
  }

  onsearchBook() {
    if (!this.bookSearchedToken)
      this.searchedBooks = this.genre.books;
    else
      this.httpService.searchBooksByGenre(this.genre.serverID, this.bookSearchedToken).subscribe(data => {
        this.searchedBooks = data;
      })
  }

}
