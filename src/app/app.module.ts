import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { BookInfoComponent } from './book-info/book-info.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RequestsComponent } from './requests/requests.component';
import { RequestItemComponent } from './_item/request-item/request-item.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';
import { AddInfoComponent } from './add-info/add-info.component';
import { AuthorItemComponent } from './_item/author-item/author-item.component';
import { PublisherItemComponent } from './_item/publisher-item/publisher-item.component';
import { InputTagComponent } from './add-info/input-tag/input-tag.component';
import { BooksByGenreComponent } from './books-by-genre/books-by-genre.component';
import { BookCarouselComponent } from './book-carousel/book-carousel.component';
import { BookCardComponent } from './book-carousel/book-card/book-card.component';
import { GenreComponent } from './books-by-genre/genre/genre.component';
import { BookItemComponent } from './_item/book-item/book-item.component';
import { HomeComponent } from './home/home.component';
import { AuthorInfoComponent } from './author-info/author-info.component';
import { AdminRequestsComponent } from './admin-requests/admin-requests.component';
import { AdminRequestItemComponent } from './_item/admin-request-item/admin-request-item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditableBookItemComponent } from './_item/editable-book-item/editable-book-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    BookInfoComponent,
    FooterComponent,
    DashboardComponent,
    RequestsComponent,
    RequestItemComponent,
    LoginFormComponent,
    SignupFormComponent,
    ChangePasswordFormComponent,
    AddInfoComponent,
    EditableBookItemComponent,
    AuthorItemComponent,
    PublisherItemComponent,
    InputTagComponent,
    BooksByGenreComponent,
    BookCarouselComponent,
    BookCardComponent,
    GenreComponent,
    BookItemComponent,
    HomeComponent,
    AuthorInfoComponent,
    AdminRequestsComponent,
    AdminRequestItemComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
