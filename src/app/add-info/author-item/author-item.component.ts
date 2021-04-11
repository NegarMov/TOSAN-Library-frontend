import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Author } from '../author';

@Component({
  selector: 'app-author-item',
  templateUrl: './author-item.component.html',
  styleUrls: ['./author-item.component.css', '../add-info.component.css']
})
export class AuthorItemComponent implements OnInit {

  @Input() item: Author;
  @Output() deleted = new EventEmitter<Author>();

  editedInfo = { name: "", surname: ""};

  name: string;
  surname: string;

  constructor() {
    
  }

  ngOnInit(): void {
    this.name = this.item.name;
    this.surname = this.item.surname;
  }

  oneditAuthor() {
    if (this.editedInfo.name)
      this.name = this.editedInfo.name;
    if (this.editedInfo.surname)
      this.surname = this.editedInfo.surname;
    this.editedInfo = { name: "", surname: ""};
  }

  ondeleteAuthor() {
    if (confirm("Are you sure you want to delete this author (" + this.name + " " + this.surname + ")?")) {
      this.deleted.emit(this.item);
    }
  }

}