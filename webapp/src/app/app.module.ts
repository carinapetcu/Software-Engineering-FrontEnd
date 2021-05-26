import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { RegisterComponent } from './register/register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {CMSUserService} from './service/cmsuser.service';
import {ConferenceService} from './service/conference.service';
import { ExpandDetailsComponent } from './expand-details/expand-details.component';
import { LoginComponent } from './login/login.component';
import { MyConferencesComponent } from './my-conferences/my-conferences.component';
import {MatTableModule} from '@angular/material/table';
import { PapersComponent } from './papers/papers.component';
import { PapersReviewsComponent } from './papers-reviews/papers-reviews.component';
import { ReviewPageComponent } from './review-page/review-page.component';
import {MatSelectModule} from '@angular/material/select';
import { AddConferenceComponent } from './add-conference/add-conference.component';
import {AddPaperComponent } from './add-paper/add-paper.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationBarComponent,
    RegisterComponent,
    ExpandDetailsComponent,
    LoginComponent,
    MyConferencesComponent,
    PapersComponent,
    PapersReviewsComponent,
    ReviewPageComponent,
    AddConferenceComponent,
    AddPaperComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatExpansionModule,
        MatGridListModule,
        MatDividerModule,
        MatCardModule,
        MatFormFieldModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatTableModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
    ],
  providers: [CMSUserService, ConferenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
