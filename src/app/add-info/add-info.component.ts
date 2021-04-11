import { Component, OnInit, ViewChild } from '@angular/core';
import { Author } from '../_model/author';
import { Book } from '../_model/book';
import { InputTagComponent } from './input-tag/input-tag.component';
import { Publisher } from '../_model/publisher';

@Component({
  selector: 'app-add-info',
  templateUrl: './add-info.component.html',
  styleUrls: ['./add-info.component.css']
})
export class AddInfoComponent implements OnInit {

  @ViewChild(InputTagComponent) tagInput: InputTagComponent;

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
    { title: "A neko in garden", author: "Neko Chan", publisher: "TOW", tags: ["comdey"], summary: "M",  coverUrl: "" },
    { title: "Two nekoes in garden", author: "Neko San", publisher: "TOW", tags: ["comdey"], summary: "M M",  coverUrl: "" },
    { title: "Three nekoes in garden", author: "Neko Sama", publisher: "TOW", tags: ["comdey" , "psychology"], summary: "M M M",  coverUrl: "" }
  ];

  authors: Author[] = [
    { name: "Maxeu", surname: "Ben"},
    { name: "Kyu", surname: "Chan"}
  ]

  publishers: Publisher[] = [
    { name: "TOW" },
    { name: "ALSH" }
  ]

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
        tags: this.tagInput.tags,
        summary: this.newBook.summary, 
        coverUrl: this.newBook.summary});
      this.newBook = { title: "", author: "", publisher: "", summary: "", coverUrl: "" };
      this.tagInput.tags = [];
    }
  }

  onFileChange(event: any) {
    this.newBook.coverUrl = "../../assets/" + event.target.files[0].name;
  }

  onaddAuthor() {
    this.validAuthorName = (this.newAuthor.name)? true: false;
    this.validAuthorSurname = (this.newAuthor.surname)? true: false;
    if (this.validAuthorName && this.validAuthorSurname) {
      this.authors.push({
        name: this.newAuthor.name,
        surname: this.newAuthor.surname
      });
      this.newAuthor = { name: "", surname: "" };
    }
  }

  onaddPublisher() {
    this.validPublisherName = (this.newPublisher.name)? true: false;
    if (this.validPublisherName) {
      this.publishers.push({
        name: this.newPublisher.name
      })
    }
    this.newPublisher = { name: "" };
  }

  deleteBook(event: Book) {
    for (var i=0; i<this.books.length; i++)                         
      if (this.books[i] === event) { 
        this.books.splice(i, 1); 
        break;
      }
  }

  deleteAuthor(event: Author) {
    for (var i=0; i<this.authors.length; i++)                         
      if (this.authors[i] === event) { 
        this.authors.splice(i, 1); 
        break;
      }
  }

  deletePublisher(event: Publisher) {
    for (var i=0; i<this.publishers.length; i++)                         
      if (this.publishers[i] === event) { 
        this.publishers.splice(i, 1); 
        break;
      }
  }

}