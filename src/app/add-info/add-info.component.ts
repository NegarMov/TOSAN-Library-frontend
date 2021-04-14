import { Component, OnInit, ViewChild } from '@angular/core';
import { Author } from '../_model/author';
import { Book } from '../_model/book';
import { InputTagComponent } from './input-tag/input-tag.component';
import { Publisher } from '../_model/publisher';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-add-info',
  templateUrl: './add-info.component.html',
  styleUrls: ['./add-info.component.css']
})
export class AddInfoComponent implements OnInit {

  @ViewChild(InputTagComponent) tagInput: InputTagComponent;

  newBook = new Book();
  validBookTitle: boolean = true;
  validBookAuthor: boolean = true;
  validBookPublisher: boolean = true;
  bookSearchRes = new Array();
  bookSearchedToken: string = "";

  newAuthor = new Author();
  validAuthorName: boolean = true;
  authorSearchRes = new Array();
  authorSearchedToken: string = "";

  newPublisher = new Publisher();
  validPublisherName: boolean = true;
  validPublisherDate: boolean = true;
  searchedPublishers: Publisher[];
  publisherSearchedToken: string = "";

  books: Book[] = new Array();
  // [
  //   { title: "A neko in garden", author: "Neko Chan", publisher: "TOW", rating: 4, tags: ["comdey"], summary: "M",  coverUrl: "" },
  //   { title: "Two nekoes in garden", author: "Neko San", publisher: "TOW", rating: 3, tags: ["comdey"], summary: "M M",  coverUrl: "" },
  //   { title: "Three nekoes in garden", author: "Neko Sama", publisher: "TOW", rating: 5, tags: ["comdey" , "psychology"], summary: "M M M",  coverUrl: "" }
  // ];

  authors: Author[] = [
    { name: "Maxeu Ben", bornDate: "1998-03-12", dieDate: null },
    { name: "Kyu Chan", bornDate: "1873-03-12", dieDate: "2005-12-10" }
  ]

  publishers: Publisher[] = [];

  constructor(private httpService: HttpService) {
    // get the actual array of books, authors and publishers from backend and initiate them here.
    this.httpService.getPublishers().subscribe(data => {
      this.publishers = data;
      this.searchedPublishers = data;
    })

    for (var i=0; i<this.books.length; i++)
      this.bookSearchRes[i] = true;
    for (var i=0; i<this.authors.length; i++)
      this.authorSearchRes[i] = true;
  }

  ngOnInit(): void {
  }

  onaddBook() {
    this.validBookTitle = (this.newBook.title)? true: false;
    this.validBookAuthor = (this.newBook.author)? true: false;
    this.validBookPublisher = (this.newBook.publisher)? true: false;
    if (this.validBookTitle && this.validBookAuthor && this.validBookPublisher) {
      this.books.push(this.newBook);
      this.bookSearchRes.push(this.newBook.title.toLowerCase().includes(this.bookSearchedToken.toLowerCase()));
      this.newBook = new Book();
      this.tagInput.tags = [];
    }
  }

  onFileChange(event: any) {
    this.newBook.coverUrl = "../../assets/" + event.target.files[0].name;
  }

  onaddAuthor() {
    this.validAuthorName = (this.newAuthor.name)? true: false;
    if (this.validAuthorName) {
      this.authors.push({
        name: this.newAuthor.name,
        bornDate: this.newAuthor.bornDate,
        dieDate: this.newAuthor.dieDate
      });
      this.authorSearchRes.push(this.newAuthor.name.toLowerCase().includes(this.authorSearchedToken.toLowerCase()));
      this.newAuthor = new Author();
    }
  }

  onaddPublisher() {
    this.validPublisherName = (this.newPublisher.name)? true: false;
    this.validPublisherDate = (this.newPublisher.establishedDate)? true: false;
    if (this.validPublisherName && this.validPublisherDate) {
      this.httpService.addPublisher(this.newPublisher).subscribe(data => {
        this.publishers = data;
        if (!this.publisherSearchedToken)
          this.searchedPublishers = this.publishers;
      }, error => {
        if (error.status === 500)
          alert("ERROR: Publisher name must be unique");
      });
      
      this.newPublisher = new Publisher();  
    }
  }

  deleteBook(event: Book) {
    for (var i=0; i<this.books.length; i++)                         
      if (this.books[i] === event) { 
        this.books.splice(i, 1);
        this.bookSearchRes.splice(i, 1);
        break;
      }
  }

  deleteAuthor(event: Author) {
    for (var i=0; i<this.authors.length; i++)                         
      if (this.authors[i] === event) { 
        this.authors.splice(i, 1);
        this.authorSearchRes.splice(i, 1);
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

  onsearchBook() {
    for (var i=0; i<this.books.length; i++)
      this.bookSearchRes[i] = (this.books[i].title.toLowerCase().includes(this.bookSearchedToken.toLowerCase()));
  }

  onsearchAuthor() {
    for (var i=0; i<this.authors.length; i++)
      this.authorSearchRes[i] = 
        (this.authors[i].name.toLowerCase().includes(this.authorSearchedToken.toLowerCase()));
  }

  onsearchPublisher() {
    this.httpService.searchPublisher(this.publisherSearchedToken).subscribe(data => {
      if (data)
        this.searchedPublishers = data;
      else
        this.searchedPublishers = this.publishers;
    });
  }

  getAuthors() {
    return this.authors.sort((a, b) => a.name.localeCompare(b.name));
  }

  getPublishers() {
    return this.publishers.sort((a, b) => a.name.localeCompare(b.name));
  }
}