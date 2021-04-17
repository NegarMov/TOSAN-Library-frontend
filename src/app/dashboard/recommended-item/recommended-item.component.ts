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

  getDate() {
    return ((this.item.status == "Read Later")? "saved on: " : "rejected on: ") + this.item.editDate.toDateString();
  }

  show() {
    return (this.selected=="saved" && this.item.status=="Read Later") ||
    (this.selected=="rejected" && this.item.status=="Rejected") ||
    (this.selected=="all");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
