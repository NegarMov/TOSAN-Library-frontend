import { Component, OnInit } from '@angular/core';
import { Book } from '../_model/book';
import { HistoryItem } from '../_model/history-item';
import { HttpService } from '../_service/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  selected: string = "all";

  historyItems: HistoryItem[];

  favouriteBooks: Book[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getFavoriteBooks().subscribe(data => {
      this.favouriteBooks = data;
    });
  }

}
