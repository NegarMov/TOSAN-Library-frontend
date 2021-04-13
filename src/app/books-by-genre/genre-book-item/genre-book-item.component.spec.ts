import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreBookItemComponent } from './genre-book-item.component';

describe('GenreBookItemComponent', () => {
  let component: GenreBookItemComponent;
  let fixture: ComponentFixture<GenreBookItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenreBookItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreBookItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
