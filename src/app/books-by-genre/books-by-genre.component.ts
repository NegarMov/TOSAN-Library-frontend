import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { HttpService } from '../http.service';
import { Genre } from '../_model/genre';

@Component({
  selector: 'app-books-by-genre',
  templateUrl: './books-by-genre.component.html',
  styleUrls: ['./books-by-genre.component.css']
})
export class BooksByGenreComponent implements OnInit {

  genres: Genre[] = [];
  
  constructor(private httpService: HttpService, private bookService: BookService) { }

  ngOnInit(): void {
    this.genres = this.bookService.getGenres();
    for (var i=0; i<this.genres.length; i++) {
      console.log(this.genres[i].serverID)
      this.httpService.getBooksByGenre(this.genres[i].serverID).subscribe(data => {
        this.genres[i].books = data;
        console.log(data);
      });
    }
  }

}