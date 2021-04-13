import { Component, OnInit } from '@angular/core';
import { Book } from '../_model/book';

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

  poetryBooks: Book[] = [
    { title: "Tonai no kyu chan", author: "Kyu Chan", publisher: "TOW", rating: 4, tags: [], summary: "So! Kyu Chan was walking in the garden and she saw another Kyu Chan. Can you believe it? but wait! That's just where the story begins. Read this interesting book and discover more!", coverUrl: "../../../assets/images/Book.png" },
    { title: "Tonai no kyu chan.2", author: "Kyu Chan", publisher: "TOW", rating: 5, tags: [], summary: "So here's the volume 2! Kyu Chan was walking in the garden and she saw another Kyu Chan. Can you believe it? but wait! That's just where the story begins. Read this interesting book and discover more!", coverUrl: "../../../assets/images/Neko Book.png" },
    { title: "Tonai no kyu chan.3", author: "Kyu Chan", publisher: "TOW", rating: 3, tags: [], summary: "And volume 3! Kyu Chan was walking in the garden and she saw another Kyu Chan. Can you believe it? but wait! That's just where the story begins. Read this interesting book and discover more!", coverUrl: "../../../assets/images/Book.png" },
    { title: "Tonai no kyu chan.4", author: "Kyu Chan", publisher: "TOW", rating: 4, tags: [], summary: "And volume 4! Kyu Chan was walking in the garden and she saw another Kyu Chan. Can you believe it? but wait! That's just where the story begins. Read this interesting book and discover more!", coverUrl: "../../../assets/images/Book.png" },
    { title: "Tonai no kyu chan.5", author: "Kyu Chan", publisher: "TOW", rating: 2, tags: [], summary: "It's 5 already! Kyu Chan was walking in the garden and she saw another Kyu Chan. Can you believe it? but wait! That's just where the story begins. Read this interesting book and discover more!", coverUrl: "../../../assets/images/Neko Book.png" },
    { title: "Tonai no kyu chan.6", author: "Kyu Chan", publisher: "TOW", rating: 5, tags: [], summary: "Woa, you made to to volume 7! Kyu Chan was walking in the garden and she saw another Kyu Chan. Can you believe it? but wait! That's just where the story begins. Read this interesting book and discover more!", coverUrl: "../../../assets/images/Neko Book.png" },
    { title: "Tonai no kyu chan.7", author: "Kyu Chan", publisher: "TOW", rating: 5, tags: [], summary: "And finally the 7th volume! Kyu Chan was walking in the garden and she saw another Kyu Chan. Can you believe it? but wait! That's just where the story begins. Read this interesting book and discover more!", coverUrl: "../../../assets/images/Book.png" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getTopPoetryBooks() {
    return this.poetryBooks.filter((b) => b.rating == 5);
  }

}