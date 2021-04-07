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
    RequestItemComponent
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
