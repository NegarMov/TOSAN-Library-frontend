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
  validBookPublishingYear: boolean = true;
  searchedBooks: Book[];
  bookSearchedToken: string = "";

  newAuthor = new Author();
  validAuthorName: boolean = true;
  validAuthorBirthDate: boolean = true;
  searchedAuthors: Author[];
  authorSearchedToken: string = "";

  newPublisher = new Publisher();
  validPublisherName: boolean = true;
  validPublisherDate: boolean = true;
  searchedPublishers: Publisher[];
  publisherSearchedToken: string = "";

  books: Book[] = []
  authors: Author[] = [];
  publishers: Publisher[] = [];

  constructor(private httpService: HttpService) {
    this.httpService.getPublishers().subscribe(data => {
      this.publishers = data;
      this.searchedPublishers = data;
    });

    this.httpService.getAuthors().subscribe(data => {
      this.authors = data;
      this.searchedAuthors = data;
    });

    this.httpService.getBooks().subscribe(data => {
      this.books = data;
      this.searchedBooks = data;
    });
  }

  ngOnInit(): void {
  }

  //####### UPDATE METHODS #######/
  updateBooks() {
    this.httpService.getBooks().subscribe(data => {
      this.books = data;
      this.bookSearchedToken = "";
      this.searchedBooks = data;
    });
  }


  //####### ADD METHODS #######/
  onaddBook() {
    this.validBookTitle = (this.newBook.title)? true: false;
    this.validBookAuthor = (this.newBook.author)? true: false;
    this.validBookPublisher = (this.newBook.publisher)? true: false;
    this.validBookPublishingYear = (this.newBook.publicationDate)? true : false;
    if (this.validBookTitle && this.validBookAuthor && this.validBookPublisher && this.validBookPublishingYear) {
      this.httpService.addBook(this.newBook).subscribe(data => {
        this.books = data;
        if (!this.bookSearchedToken)
          this.searchedBooks = this.books;
      }, error => {
        if (error.status === 500)
          alert("ERROR: Book name must be unique");
      });

      this.newBook = new Book();
      this.tagInput.tags = [];
    }
  }

  onFileChange(event: any) {
    this.newBook.coverUrl = "../../assets/" + event.target.files[0].name;
  }

  onaddAuthor() {
    this.validAuthorName = (this.newAuthor.name)? true: false;
    this.validAuthorBirthDate = (this.newAuthor.bornDate)? true: false;
    if (this.validAuthorName && this.validAuthorBirthDate) {
      this.httpService.addAuthor(this.newAuthor).subscribe(data => {
        this.authors = data;
        if (!this.authorSearchedToken)
          this.searchedAuthors = this.authors;
      }, error => {
        if (error.status === 500)
          alert("ERROR: Author name must be unique");
      });

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

  //####### DELETE METHODS #######/
  deleteBook(event: Book) {
    this.httpService.deleteBook(event.title).subscribe(data => {
      this.books = data;
      if (!this.bookSearchedToken)
        this.searchedBooks = this.books;
    });
  }

  deleteAuthor(event: Author) {
    this.httpService.deleteAuthor(event.name).subscribe(data => {
      this.authors = data;
      if (!this.authorSearchedToken)
        this.searchedAuthors = this.authors;
      this.updateBooks();
    });
  }

  deletePublisher(event: Publisher) {
    this.httpService.deletePublisher(event.name).subscribe(data => {
      this.publishers = data;
      if (!this.publisherSearchedToken)
        this.searchedPublishers = this.publishers;
      this.updateBooks();
    });
  }

  //####### SEARCH METHODS #######/
  onsearchBook() {
    this.httpService.searchBook(this.bookSearchedToken).subscribe(data => {
      if (data)
        this.searchedBooks = data;
      else
        this.searchedBooks = this.books;
    });
  }

  onsearchAuthor() {
    this.httpService.searchAuthor(this.authorSearchedToken).subscribe(data => {
      if (data)
        this.searchedAuthors = data;
      else
        this.searchedAuthors = this.authors;
    });
  }

  onsearchPublisher() {
    this.httpService.searchPublisher(this.publisherSearchedToken).subscribe(data => {
      if (data)
        this.searchedPublishers = data;
      else
        this.searchedPublishers = this.publishers;
    });
  }

  //####### EDIT METHODS #######/
  editPublisher() {
    this.updateBooks();
  }

  editAuthor() {
    this.updateBooks();
  }

  //####### GET METHODS #######/
  getAuthors() {
    return this.authors.sort((a, b) => a.name.localeCompare(b.name));
  }

  getPublishers() {
    return this.publishers.sort((a, b) => a.name.localeCompare(b.name));
  }
}