import { Component, Input, OnInit } from '@angular/core';
import { HistoryItem } from '../../_model/history-item';

@Component({
  selector: 'app-history-item',
  templateUrl: './history-item.component.html',
  styleUrls: ['../dashboard.component.css', './history-item.component.css']
})
export class HistoryItemComponent implements OnInit {

  @Input() item: HistoryItem;

  bookTitle: string;
  bookAuthor: string;
  bookPublisher: string;
  startDate: any;
  endDate: any;

  constructor() {
    
  }

  ngOnInit(): void {
    this.bookTitle = this.item.book.title;
    this.bookAuthor = this.item.book.author;
    this.bookPublisher = this.item.book.publisher;
    this.startDate = this.item.startDate;
    this.endDate = this.item.endDate;
  }

}
