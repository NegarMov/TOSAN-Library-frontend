import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../_model/book';

@Component({
  selector: 'app-book-carousel',
  templateUrl: './book-carousel.component.html',
  styleUrls: ['./book-carousel.component.css']
})
export class BookCarouselComponent implements OnInit {

  @Input() books: Book[];
  @Input() id: string;

  constructor() { }

  ngOnInit(): void {
  }

}
