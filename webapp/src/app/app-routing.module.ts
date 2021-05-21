import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {ExpandDetailsComponent} from './expand-details/expand-details.component';

const routes: Routes = [
  {path: 'register' , component: RegisterComponent},
  {path: 'home' , component: HomeComponent},
  {path: '' , component: HomeComponent},
  {path: 'testRegister' , component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'details', component: ExpandDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
