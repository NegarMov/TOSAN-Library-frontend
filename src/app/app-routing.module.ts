import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInfoComponent } from './add-info/add-info.component';
import { BookInfoComponent } from './book-info/book-info.component';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RequestsComponent } from './requests/requests.component';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'signup', component: LoginFormComponent },
  { path: 'change-password', component: ChangePasswordFormComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'requests', component: RequestsComponent },
  { path: 'book/:title', component: BookInfoComponent },
  { path: 'edit-info', component: AddInfoComponent },
  { path: '', component: HomeComponent }
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
