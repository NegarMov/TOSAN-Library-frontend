import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from 'src/app/_service/http.service';
import { RequestItem } from '../../_model/request-item';

@Component({
  selector: 'app-request-item',
  templateUrl: './request-item.component.html',
  styleUrls: ['../requests.component.css', './request-item.component.css']
})
export class RequestItemComponent implements OnInit {

  @Input() item: RequestItem;
  @Output() deleted = new EventEmitter<RequestItem[]>();

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

  ondeleteRequest() {
    this.httpService.deleteRequest(this.item.id).subscribe(data => {
      this.deleted.emit(data);
    });
  }

}