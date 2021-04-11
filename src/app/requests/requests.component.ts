import { Component, OnInit } from '@angular/core';
import { RequestItem } from '../_model/request-item';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  requestItems: RequestItem[] = [
    { book: { title: "A neko in garden", author: "Neko Chan", publisher: "TOW", tags: [], summary: "blah blah", coverUrl: ""}, startDate: new Date(2021, 2, 4, 9, 7, 47), status: "Accepted" },
    { book: { title: "Two nekoes in garden", author: "Neko San", publisher: "TOW", tags: [], summary: "blah", coverUrl: "" }, startDate: new Date(2021, 2, 4, 9, 7, 47), status: "Rejected" },
    { book: { title: "Three nekoes in garden", author: "Neko Sama", publisher: "TOW", tags: [], summary: "blah blah blah", coverUrl: "" }, startDate: new Date(2021, 2, 4, 9, 7, 47), status: "Pending" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
