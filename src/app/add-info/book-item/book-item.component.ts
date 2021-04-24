import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { BookService } from 'src/app/book.service';
import { HttpService } from 'src/app/http.service';
import { Author } from 'src/app/_model/author';
import { Genre } from 'src/app/_model/genre';
import { Publisher } from 'src/app/_model/publisher';
import { Book } from '../../_model/book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css', '../add-info.component.css']
})
export class BookItemComponent implements OnInit {

  @Input() item: Book;
  @Input() authors: Author[];
  @Input() publishers: Publisher[];
  @Output() deleted = new EventEmitter<Book>();

  editedInfo = new Book();

  genres: Genre[] = [];

  constructor(private httpService: HttpService, private bookService: BookService) {
    this.genres = bookService.getGenres();
  }

  ngOnInit(): void { }

  oneditBook() {
    if (!this.editedInfo.title)
      this.editedInfo.title = this.item.title;
    if (!this.editedInfo.author)
      this.editedInfo.author = this.item.author;
    if (!this.editedInfo.publisher)
      this.editedInfo.publisher = this.item.publisher;
    if (!this.editedInfo.publicationDate)
      this.editedInfo.publicationDate = this.item.publicationDate;
    if (!this.editedInfo.genre)
      this.editedInfo.genre = this.item.genre;
    if (!this.editedInfo.summary)
      this.editedInfo.summary= this.item.summary;
    if (!this.editedInfo.coverUrl)
      this.editedInfo.coverUrl = this.item.coverUrl;
    this.httpService.updateBook(this.item.title, this.editedInfo).subscribe(data => {
      this.item = data;
      this.editedInfo = new Book();
    }, error => {
      if (error.status === 500)
        alert("ERROR: Book name must be unique");
    });
  }

  onFileChange(event: any) {
    this.editedInfo.coverUrl = "../../assets/" + event.target.files[0].name;
  }

  ondeleteBook() {
    if (confirm("Are you sure you want to delete this book (" + this.item.title + " by " + this.item.author.name + ")?")) {
      this.deleted.emit(this.item);
    }
  }

}
