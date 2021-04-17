import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Book } from '../../_model/book';
import { InputTagComponent } from '../input-tag/input-tag.component';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css', '../add-info.component.css']
})
export class BookItemComponent implements OnInit {

  @Input() item: Book;
  @Output() deleted = new EventEmitter<Book>();
  
  @ViewChild(InputTagComponent) tagInput: InputTagComponent;

  editedInfo = new Book();

  constructor() { }

  ngOnInit(): void { }

  onstartEdit() {
    this.tagInput.tags = this.item.tags;
  }

  oneditBook() {
    if (this.editedInfo.title)
      this.item.title = this.editedInfo.title;
    if (this.editedInfo.author)
      this.item.author = this.editedInfo.author;
    if (this.editedInfo.publisher)
      this.item.publisher = this.editedInfo.publisher;
    if (this.editedInfo.summary)
      this.item.summary = this.editedInfo.summary;
    if (this.editedInfo.coverUrl)
      this.item.coverUrl = this.editedInfo.coverUrl;
  }

  onFileChange(event: any) {
    this.editedInfo.coverUrl = "../../assets/" + event.target.files[0].name;
  }

  ondeleteBook() {
    if (confirm("Are you sure you want to delete this book (" + this.item.title + " by " + this.item.author + ")?")) {
      this.deleted.emit(this.item);
    }
  }

}
