import { Component, OnInit } from '@angular/core';
import { HistoryItem } from '../_model/history-item';
import { RecommendedItem } from '../_model/recommended-item';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  selected: string = "all";

  historyItems: HistoryItem[] = [
    { book: { title: "A neko in garden", author: "Neko Chan", publisher: "TOW", tags: [], summary: "", coverUrl: "" }, startDate: new Date(2021, 2, 4, 9, 7, 47), endDate: "today" },
    { book: { title: "Two nekoes in garden", author: "Neko San", publisher: "TOW", tags: [], summary: "", coverUrl: "" }, startDate: new Date(2021, 2, 4, 9, 7, 47), endDate: "today" },
    { book: { title: "Three nekoes in garden", author: "Neko Sama", publisher: "TOW", tags: [], summary: "", coverUrl: "" }, startDate: new Date(2021, 2, 4, 9, 7, 47), endDate: "today" }
  ];

  recommendedItems: RecommendedItem[] = [
    { book: { title: "Tonai no kyu chan", author: "Kyu Chan", publisher: "TOW", tags: [], summary: "", coverUrl: "" }, status: "Read Later", editDate: new Date(2021, 6, 28, 17, 24, 59) },
    { book: { title: "Tonai no neko chan", author: "Neko San", publisher: "TOW", tags: [], summary: "", coverUrl: "" }, status: "Rejected", editDate: new Date(2020, 6, 28, 17, 24, 59) },
    { book: { title: "Tonai no nekoes chan", author: "Neko Sama", publisher: "TOW", tags: [], summary: "", coverUrl: "" }, status: "Read Later", editDate: new Date(2019, 6, 28, 17, 24, 59) }
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
