import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpService } from 'src/app/_service/http.service';
import { RequestItem } from 'src/app/_model/request-item';

@Component({
  selector: 'app-admin-request-item',
  templateUrl: './admin-request-item.component.html',
  styleUrls: ['../admin-requests.component.css', './admin-request-item.component.css']
})
export class AdminRequestItemComponent implements OnInit {

  @Input() item: RequestItem;
  @Output() deleted = new EventEmitter<RequestItem[]>();

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

  onchangeStatus(event: string) {
    this.httpService.setReuqestStatus(this.item.id, event).subscribe();
  }

}
