import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksByGenreComponent } from './books-by-genre.component';

describe('BooksByGenreComponent', () => {
  let component: BooksByGenreComponent;
  let fixture: ComponentFixture<BooksByGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksByGenreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksByGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
