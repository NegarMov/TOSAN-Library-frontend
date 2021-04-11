import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Publisher } from '../publisher';

@Component({
  selector: 'app-publisher-item',
  templateUrl: './publisher-item.component.html',
  styleUrls: ['./publisher-item.component.css', '../add-info.component.css']
})
export class PublisherItemComponent implements OnInit {

  @Input() item: Publisher;
  @Output() deleted = new EventEmitter<Publisher>();

  editedInfo = { name: ""};

  name: string;

  constructor() {
    
  }

  ngOnInit(): void {
    this.name = this.item.name;
  }

  oneditPublisher() {
    if (this.editedInfo.name)
      this.name = this.editedInfo.name;
    this.editedInfo = { name: ""};
  }

  ondeletePublisher() {
    if (confirm("Are you sure you want to delete this publisher (" + this.name + ")?")) {
      this.deleted.emit(this.item);
    }
  }

}
