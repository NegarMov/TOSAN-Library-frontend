import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInfoComponent } from './add-info/add-info.component';
import { AdminRequestsComponent } from './admin-requests/admin-requests.component';
import { AuthGuard } from './_auth/auth.guard';
import { AuthorInfoComponent } from './author-info/author-info.component';
import { BookInfoComponent } from './book-info/book-info.component';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RequestsComponent } from './requests/requests.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'signup', component: SignupFormComponent },
  { path: 'change-password', component: ChangePasswordFormComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'requests', component: RequestsComponent },
  { path: 'admin/requests', component: AdminRequestsComponent, canActivate: [AuthGuard] },
  { path: 'book/:title', component: BookInfoComponent },
  { path: 'admin/edit-info', component: AddInfoComponent, canActivate: [AuthGuard] },
  { path: 'author/:name', component: AuthorInfoComponent },
  { path: 'publisher/:name', component: AuthorInfoComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: ''}
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
