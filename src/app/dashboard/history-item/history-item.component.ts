import { Component, Input, OnInit } from '@angular/core';
import { HistoryItem } from '../history-item';

@Component({
  selector: 'app-history-item',
  templateUrl: './history-item.component.html',
  styleUrls: ['../dashboard.component.css', './history-item.component.css']
})
export class HistoryItemComponent implements OnInit {

  @Input() item: HistoryItem;

  bookTitle: string;
  bookAuthor: string;
  startDate: any;
  endDate: any;

  constructor() {
    
  }

  ngOnInit(): void {
    this.bookTitle = this.item.bookTitle;
    this.bookAuthor = this.item.bookAuthor;
    this.startDate = this.item.startDate;
    this.endDate = this.item.endDate;
  }

}
