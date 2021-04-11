import { Component, Input, OnInit } from '@angular/core';
import { RecommendedItem } from '../../_model/recommended-item';

@Component({
  selector: 'app-recommended-item',
  templateUrl: './recommended-item.component.html',
  styleUrls: ['../dashboard.component.css', './recommended-item.component.css']
})
export class RecommendedItemComponent implements OnInit {
  
  @Input() selected: string;
  @Input() item: RecommendedItem;

  bookTitle: string;
  bookAuthor: string;
  bookPublisher: string;
  status: string;
  editDate: Date;

  getDate() {
    return ((this.status == "Read Later")? "saved on: " : "rejected on: ") + this.editDate.toDateString();
  }

  show() {
    return (this.selected=="saved" && this.status=="Read Later") ||
    (this.selected=="rejected" && this.status=="Rejected") ||
    (this.selected=="all");
  }

  constructor() { }

  ngOnInit(): void {
    this.bookTitle = this.item.book.title;
    this.bookAuthor = this.item.book.author;
    this.bookPublisher = this.item.book.publisher;
    this.status = this.item.status;
    this.editDate = this.item.editDate;
  }

}
