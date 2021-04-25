import { Component, OnInit } from '@angular/core';
import { BookService } from '../_service/book.service';
import { Genre } from '../_model/genre';

@Component({
  selector: 'app-books-by-genre',
  templateUrl: './books-by-genre.component.html',
  styleUrls: ['./books-by-genre.component.css']
})
export class BooksByGenreComponent implements OnInit {

  genres: Genre[] = [];
  
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.genres = this.bookService.getGenres();
  }

}