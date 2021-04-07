import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookInfoComponent } from './book-info/book-info.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RequestsComponent } from './requests/requests.component';

const routes: Routes = [
  { path: 'log-in', component: LoginFormComponent },
  { path: 'sign-up', component: LoginFormComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'requests', component: RequestsComponent },
  { path: 'book/:bookTitle', component: BookInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
