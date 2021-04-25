import { Component, OnInit } from '@angular/core';
import { HttpService } from '../_service/http.service';
import { RequestItem } from '../_model/request-item';

@Component({
  selector: 'app-admin-requests',
  templateUrl: './admin-requests.component.html',
  styleUrls: ['./admin-requests.component.css']
})
export class AdminRequestsComponent implements OnInit {

  requestItems: RequestItem[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getAllRequests_admin().subscribe(data => {
      this.requestItems = data;
    });
  }

  onclickAll(): void {
    this.httpService.getAllRequests_admin().subscribe(data => {
      this.requestItems = data;
    });
  }

  onclickAccepted(): void {
    this.httpService.getAcceptedRequests_admin().subscribe(data => {
      this.requestItems = data;
    });
  }

  onclickRejected(): void {
    this.httpService.getRejectedRequests_admin().subscribe(data => {
      this.requestItems = data;
    });
  }

  onclickPending(): void {
    this.httpService.getPendingRequests_admin().subscribe(data => {
      this.requestItems = data;
    });
  }
}
