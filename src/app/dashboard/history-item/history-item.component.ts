import { Component, Input, OnInit } from '@angular/core';
import { HistoryItem } from '../../_model/history-item';

@Component({
  selector: 'app-history-item',
  templateUrl: './history-item.component.html',
  styleUrls: ['../dashboard.component.css', './history-item.component.css']
})
export class HistoryItemComponent implements OnInit {

  @Input() item: HistoryItem;

  constructor() {
    
  }

  ngOnInit(): void {
  }

}
