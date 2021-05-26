import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-papers-reviews',
  templateUrl: './papers-reviews.component.html',
  styleUrls: ['./papers-reviews.component.css']
})
export class PapersReviewsComponent implements OnInit {

  paperColumns = ['title', 'abstract', 'authors', 'refuse-button', 'review-button'];

  papersAssigned = 1;
  availablePapersToReview = 3;

  papersForm = this.formBuilder.group({
      nrPapers: new FormControl('')
  }
  );

  papersExample = [{title: 'title1', abstract: 'abstract1', authors: [{fullName: 'author1'}, {fullName: 'author2'}, {fullName: 'author3'}]}];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }

  downloadAbstract(id: string): void {
    console.log('Start download abstract');
  }

  redirectToReview(paperId: string): void {
    this.router.navigate(['review', {id: paperId}]);
  }
}
