import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { BookInfoComponent } from './book-info/book-info.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HistoryItemComponent } from './dashboard/history-item/history-item.component';
import { RecommendedItemComponent } from './dashboard/recommended-item/recommended-item.component';
import { RequestsComponent } from './requests/requests.component';
import { RequestItemComponent } from './requests/request-item/request-item.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';
import { AddInfoComponent } from './add-info/add-info.component';
import { BookItemComponent } from './add-info/book-item/book-item.component';
import { AuthorItemComponent } from './add-info/author-item/author-item.component';
import { PublisherItemComponent } from './add-info/publisher-item/publisher-item.component';
import { InputTagComponent } from './add-info/input-tag/input-tag.component';
import { BooksByGenreComponent } from './books-by-genre/books-by-genre.component';
import { BookCarouselComponent } from './book-carousel/book-carousel.component';
import { BookCardComponent } from './book-carousel/book-card/book-card.component';
import { GenreComponent } from './books-by-genre/genre/genre.component';
import { GenreBookItemComponent } from './books-by-genre/genre-book-item/genre-book-item.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    BookInfoComponent,
    FooterComponent,
    DashboardComponent,
    HistoryItemComponent,
    RecommendedItemComponent,
    RequestsComponent,
    RequestItemComponent,
    LoginFormComponent,
    SignupFormComponent,
    ChangePasswordFormComponent,
    AddInfoComponent,
    BookItemComponent,
    AuthorItemComponent,
    PublisherItemComponent,
    InputTagComponent,
    BooksByGenreComponent,
    BookCarouselComponent,
    BookCardComponent,
    GenreComponent,
    GenreBookItemComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
