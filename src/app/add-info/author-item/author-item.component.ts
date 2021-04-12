import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Author } from '../../_model/author';

@Component({
  selector: 'app-author-item',
  templateUrl: './author-item.component.html',
  styleUrls: ['./author-item.component.css', '../add-info.component.css']
})
export class AuthorItemComponent implements OnInit {

  @Input() item: Author;
  @Output() deleted = new EventEmitter<Author>();

  editedInfo = { name: "", surname: ""};

  constructor() { }

  ngOnInit(): void { }

  oneditAuthor() {
    if (this.editedInfo.name)
      this.item.name = this.editedInfo.name;
    if (this.editedInfo.surname)
      this.item.surname = this.editedInfo.surname;
    this.editedInfo = { name: "", surname: ""};
  }

  ondeleteAuthor() {
    if (confirm("Are you sure you want to delete this author (" + this.item.name + " " + this.item.surname + ")?")) {
      this.deleted.emit(this.item);
    }
  }

}