import { Component, OnInit } from '@angular/core';
import { RequestItem } from './request-item';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  requestItems: RequestItem[] = [
    { bookTitle: "A neko in garden", bookAuthor: "Neko Chan", startDate: new Date(2021, 2, 4, 9, 7, 47), bookSummary: "blah blah", status: "Accepted" },
    { bookTitle: "Two nekoes in garden", bookAuthor: "Neko San", startDate: new Date(2021, 2, 4, 9, 7, 47), bookSummary: "blah", status: "Rejected" },
    { bookTitle: "Three nekoes in garden", bookAuthor: "Neko Sama", startDate: new Date(2021, 2, 4, 9, 7, 47), bookSummary: "blah blah blah", status: "Pending" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
