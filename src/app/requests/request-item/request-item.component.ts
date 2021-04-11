import { Component, Input, OnInit } from '@angular/core';
import { RequestItem } from '../../_model/request-item';

@Component({
  selector: 'app-request-item',
  templateUrl: './request-item.component.html',
  styleUrls: ['../requests.component.css', './request-item.component.css']
})
export class RequestItemComponent implements OnInit {

  @Input() item: RequestItem;

  bookTitle: string;
  bookAuthor: string;
  bookPublisher: string;
  startDate: Date;
  bookSummary: string;
  status: string;

  constructor() { }

  ngOnInit(): void {
    this.bookTitle = this.item.book.title;
    this.bookAuthor = this.item.book.author;
    this.bookPublisher = this.item.book.publisher;
    this.bookSummary = this.item.book.summary;
    this.startDate = this.item.startDate;
    this.status = this.item.status;
  }

}