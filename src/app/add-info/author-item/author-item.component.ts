import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { Author } from '../../_model/author';

@Component({
  selector: 'app-author-item',
  templateUrl: './author-item.component.html',
  styleUrls: ['./author-item.component.css', '../add-info.component.css']
})
export class AuthorItemComponent implements OnInit {

  @Input() item: Author;
  @Output() deleted = new EventEmitter<Author>();
  @Output() edited = new EventEmitter();

  editedInfo = new Author();

  constructor(private httpService: HttpService) { }

  ngOnInit(): void { }

  oneditAuthor() {
    if (!this.editedInfo.name)
      this.editedInfo.name = this.item.name;
    if (!this.editedInfo.bornDate)
      this.editedInfo.bornDate = this.item.bornDate;
    if (!this.editedInfo.dieDate)
      this.editedInfo.dieDate = this.item.dieDate;
    this.httpService.updateAuthor(this.item.name, this.editedInfo).subscribe(data => {
      this.item = data;
      this.edited.emit();
      this.editedInfo = new Author();
    }, error => {
      if (error.status === 500)
        alert("ERROR: Author name must be unique");
    });
  }

  ondeleteAuthor() {
    if (confirm("Are you sure you want to delete this author (" + this.item.name + ")?")) {
      this.deleted.emit(this.item);
    }
  }

}