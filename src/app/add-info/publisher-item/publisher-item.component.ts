import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Publisher } from '../../_model/publisher';

@Component({
  selector: 'app-publisher-item',
  templateUrl: './publisher-item.component.html',
  styleUrls: ['./publisher-item.component.css', '../add-info.component.css']
})
export class PublisherItemComponent implements OnInit {

  @Input() item: Publisher;
  @Output() deleted = new EventEmitter<Publisher>();

  editedInfo = { name: ""};

  constructor() { }

  ngOnInit(): void { }

  oneditPublisher() {
    if (this.editedInfo.name)
      this.item.name = this.editedInfo.name;
    this.editedInfo = { name: ""};
  }

  ondeletePublisher() {
    if (confirm("Are you sure you want to delete this publisher (" + this.item.name + ")?")) {
      this.deleted.emit(this.item);
    }
  }

}
