import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';
import {Router} from "@angular/router";
import {CMSUserService} from "../service/cmsuser.service";
import {PaperService} from "../service/paper.service";
import {PaperToReview} from "../domain/paperToReview.model";

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

  papersExample = [{title: 'title1', abstract: 'abstract1', authors: [{fullName: 'author1'}, {fullName: 'author2'},
      {fullName: 'author3'}]}];
  papersReviews = new Array<PaperToReview>();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private paperService: PaperService
    ) {
  }

  ngOnInit(): void {
    this.getPapersToReview();
  }

  downloadAbstract(id: string): void {
    console.log('Start download abstract');
  }

  redirectToReview(paperId: string): void {
    this.router.navigate(['review', {id: paperId}]);
  }

  sendResponse(): void{
    console.log('am intrat');
    const noOfMaxReviews = this.papersForm.controls.nrPapers.value;
    console.log(noOfMaxReviews);
    const userId = localStorage.getItem('userId');
    console.log(userId);
    if (userId != null) {
      this.paperService.sendResponse(+userId, +noOfMaxReviews).subscribe();
    }
  }

  getPapersToReview(): void{
    const userId = localStorage.getItem('userId');
    this.paperService.getPapersForReviewer(+userId).subscribe(
      resposnse => this.papersReviews = resposnse.dtos
    )
  }
}
