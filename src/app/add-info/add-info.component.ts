import { Component, OnInit } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-add-info',
  templateUrl: './add-info.component.html',
  styleUrls: ['./add-info.component.css']
})
export class AddInfoComponent implements OnInit {

  newBook = {title: "", author: "", publisher: "", summary: "", coverUrl: ""};
  validBookTitle: boolean = true;
  validBookAuthor: boolean = true;
  validBookPublisher: boolean = true;

  newAuthor = {name: "", surname: ""};
  validAuthorName: boolean = true;
  validAuthorSurname: boolean = true;

  newPublisher = {name: ""};
  validPublisherName: boolean = true;

  books: Book[] = [
    { title: "A neko in garden", author: "Neko Chan", publisher: "TOW", summary: "Mew",  coverUrl: "" },
    { title: "Two nekoes in garden", author: "Neko San", publisher: "TOW", summary: "Mew Mew",  coverUrl: "" },
    { title: "Three nekoes in garden", author: "Neko Sama", publisher: "TOW", summary: "Mew Mew Mew",  coverUrl: "" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onaddBook() {
    this.validBookTitle = (this.newBook.title)? true: false;
    this.validBookAuthor = (this.newBook.author)? true: false;
    this.validBookPublisher = (this.newBook.publisher)? true: false;
    if (this.validBookTitle && this.validBookAuthor && this.validBookPublisher) {
      this.books.push({
        title : this.newBook.title, 
        author: this.newBook.author, 
        publisher: this.newBook.publisher, 
        summary: this.newBook.summary, 
        coverUrl: this.newBook.summary});
      this.newBook = {title: "", author: "", publisher: "", summary: "", coverUrl: ""};
    }
  }

  onFileChange(event: any) {
    this.newBook.coverUrl = "../../assets/" + event.target.files[0].name;
  }

  onaddAuthor() {
    this.validAuthorName = (this.newAuthor.name)? true: false;
    this.validAuthorSurname = (this.newAuthor.surname)? true: false;
  }

  onaddPublisher() {
    this.validPublisherName = (this.newPublisher.name)? true: false;
  }

  deleteBook(event: Book) {
    for (var i=0; i<this.books.length; i++)                         
      if (this.books[i] === event) { 
        this.books.splice(i, 1); 
        break;
      }
  }

}