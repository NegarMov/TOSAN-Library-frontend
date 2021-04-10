import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  onaddBook() {
    this.validBookTitle = (this.newBook.title)? true: false;
    this.validBookAuthor = (this.newBook.author)? true: false;
    this.validBookPublisher = (this.newBook.publisher)? true: false;
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

}