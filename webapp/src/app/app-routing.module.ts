import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {ExpandDetailsComponent} from './expand-details/expand-details.component';
import {MyConferencesComponent} from './my-conferences/my-conferences.component';
import {PapersComponent} from './papers/papers.component';
import {PapersReviewsComponent} from './papers-reviews/papers-reviews.component';
import {ReviewPageComponent} from './review-page/review-page.component';

const routes: Routes = [
  {path: 'register' , component: RegisterComponent},
  {path: 'home' , component: HomeComponent},
  {path: '' , component: HomeComponent},
  {path: 'testRegister' , component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'details', component: ExpandDetailsComponent},
  {path: 'myConference', component: MyConferencesComponent},
  {path: 'papers', component: PapersComponent},
  {path: 'papersReviews', component: PapersReviewsComponent},
  {path: 'review' , component: ReviewPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
