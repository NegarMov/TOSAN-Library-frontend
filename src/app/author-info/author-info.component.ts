import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { Book } from '../_model/book';

@Component({
  selector: 'app-author-info',
  templateUrl: './author-info.component.html',
  styleUrls: ['./author-info.component.css']
})
export class AuthorInfoComponent implements OnInit {

  books: Book[] = [];
  type = "";
  item: any;

  constructor(private httpService: HttpService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    var name = this.route.snapshot.paramMap.get('name');
    this.type = this.route.snapshot.url[0].path;
    if (this.type == "author") {
      this.httpService.getAuthorByName(name).subscribe( data => {
        this.item = data;  
      });
      this.httpService.getAuthorBooks(name).subscribe(data => {
        this.books = data;
      });
    }
    else {
      this.httpService.getPublisherByName(name).subscribe( data => {
        this.item = data;  
      });
      this.httpService.getPublisherBooks(name).subscribe(data => {
        this.books = data;
      });
    }
  }

}
