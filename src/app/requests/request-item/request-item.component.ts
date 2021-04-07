import { Component, Input, OnInit } from '@angular/core';
import { RequestItem } from '../request-item';

@Component({
  selector: 'app-request-item',
  templateUrl: './request-item.component.html',
  styleUrls: ['../requests.component.css', './request-item.component.css']
})
export class RequestItemComponent implements OnInit {

  @Input() item: RequestItem;

  bookTitle: string;
  bookAuthor: string;
  startDate: Date;
  bookSummary: string;
  status: string;

  constructor() { }

  ngOnInit(): void {
    this.bookTitle = this.item.bookTitle;
    this.bookAuthor = this.item.bookAuthor;
    this.startDate = this.item.startDate;
    this.bookSummary = this.item.bookSummary;
    this.status = this.item.status;
  }

}