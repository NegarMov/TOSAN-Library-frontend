import { Component, Input, OnInit } from '@angular/core';
import { RequestItem } from '../../_model/request-item';

@Component({
  selector: 'app-request-item',
  templateUrl: './request-item.component.html',
  styleUrls: ['../requests.component.css', './request-item.component.css']
})
export class RequestItemComponent implements OnInit {

  @Input() item: RequestItem;

  constructor() { }

  ngOnInit(): void {
  }

}