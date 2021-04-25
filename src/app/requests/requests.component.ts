import { Component, OnInit } from '@angular/core';
import { HttpService } from '../_service/http.service';
import { RequestItem } from '../_model/request-item';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  requestItems: RequestItem[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getAllRequests().subscribe(data => {
      this.requestItems = data;
    });
  }

  ondeleteRequest(event: RequestItem[]) {
    this.requestItems = event;
  }

}
