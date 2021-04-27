import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/_model/book';
import { HttpService } from 'src/app/_service/http.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css', '../../books-by-genre/books-by-genre.component.css']
})
export class BookItemComponent implements OnInit {
 
  @Input() item: Book;

  lentToThisUser: boolean = false;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    if (localStorage.getItem('userID'))
      this.httpService.getUsername().subscribe(data => {
        if (data.username == this.item.user.username)
          this.lentToThisUser = true;
      });
  }

}
