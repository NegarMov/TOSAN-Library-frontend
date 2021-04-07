import { Component, OnInit } from '@angular/core';
import { HistoryItem } from './history-item';
import { HistoryItemComponent } from './history-item/history-item.component';
import { RecommendedItem } from './recommended-item';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  selected: string = "all";

  historyItems: HistoryItem[] = [
    { bookTitle: "A neko in garden", bookAuthor: "Neko Chan", startDate: new Date(2021, 2, 4, 9, 7, 47), endDate: "today" },
    { bookTitle: "Two nekoes in garden", bookAuthor: "Neko San", startDate: new Date(2021, 2, 4, 9, 7, 47), endDate: "today" },
    { bookTitle: "Three nekoes in garden", bookAuthor: "Neko Sama", startDate: new Date(2021, 2, 4, 9, 7, 47), endDate: "today" }
  ];

  recommendedItems: RecommendedItem[] = [
    { bookTitle: "Tonai no kyu chan", bookAuthor: "Kyu Chan", status: "Read Later", editDate: new Date(2021, 6, 28, 17, 24, 59) },
    { bookTitle: "Tonai no neko chan", bookAuthor: "Neko San", status: "Rejected", editDate: new Date(2020, 6, 28, 17, 24, 59) },
    { bookTitle: "Tonai no nekoes chan", bookAuthor: "Neko Sama", status: "Read Later", editDate: new Date(2019, 6, 28, 17, 24, 59) }
  ];

  onclickAll() {
    this.selected = "all";
  }
  
  onclickSaved() {
    this.selected = "saved";
  }
  
  onclickRejected() {
    this.selected = "rejected";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
