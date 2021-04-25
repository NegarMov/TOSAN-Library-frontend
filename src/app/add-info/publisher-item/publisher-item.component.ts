import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpService } from 'src/app/_service/http.service';
import { Publisher } from '../../_model/publisher';

@Component({
  selector: 'app-publisher-item',
  templateUrl: './publisher-item.component.html',
  styleUrls: ['./publisher-item.component.css', '../add-info.component.css']
})
export class PublisherItemComponent implements OnInit {

  @Input() item: Publisher;
  @Output() deleted = new EventEmitter<Publisher>();
  @Output() edited = new EventEmitter();

  editedInfo = new Publisher();

  constructor(private httpService: HttpService) { }

  ngOnInit(): void { }

  oneditPublisher() {
    if (!this.editedInfo.name)
      this.editedInfo.name = this.item.name;
    if (!this.editedInfo.establishedDate)
      this.editedInfo.establishedDate = this.item.establishedDate;
    this.httpService.updatePublisher(this.item.name, this.editedInfo).subscribe(data => {
      this.item = data;
      this.edited.emit();
      this.editedInfo = new Publisher();
    }, error => {
      if (error.status === 500)
        alert("ERROR: Publisher name must be unique");
    });
  }

  ondeletePublisher() {
    if (confirm("Are you sure you want to delete this publisher (" + this.item.name + ")?")) {
      this.deleted.emit(this.item);
    }
  }

}
