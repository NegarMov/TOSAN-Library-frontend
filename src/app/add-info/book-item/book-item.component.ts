import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css', '../add-info.component.css']
})
export class BookItemComponent implements OnInit {

  @Input() item: Book;
  @Output() deleted = new EventEmitter<Book>();

  editedInfo = { title: "", author: "", publisher: "", summary: "", coverUrl: "" };

  title: string;
  author: string;
  publisher: string;
  summary: string;
  coverUrl: string;

  constructor() {
    
  }

  ngOnInit(): void {
    this.title = this.item.title;
    this.author = this.item.author;
    this.publisher = this.item.publisher;
    this.summary = this.item.summary;
    this.coverUrl = this.item.coverUrl;
  }

  oneditBook() {
    if (this.editedInfo.title)
      this.title = this.editedInfo.title;
    if (this.editedInfo.author)
      this.author = this.editedInfo.author;
    if (this.editedInfo.publisher)
      this.publisher = this.editedInfo.publisher;
    if (this.editedInfo.summary)
      this.summary = this.editedInfo.summary;
    if (this.editedInfo.coverUrl)
      this.coverUrl = this.editedInfo.coverUrl;
  }

  onFileChange(event: any) {
    this.editedInfo.coverUrl = "../../assets/" + event.target.files[0].name;
  }

  ondeleteBook() {
    if (confirm("Are you sure you want to delete this book (" + this.title + " by " + this.author + ")?")) {
      this.deleted.emit(this.item);
    }
  }

}
