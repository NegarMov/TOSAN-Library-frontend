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

  historyItems: HistoryItem[];

  recommendedItems: RecommendedItem[];

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
