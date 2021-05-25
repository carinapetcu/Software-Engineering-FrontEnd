import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.css']
})
export class ReviewPageComponent implements OnInit {

  paperForm = this.formbuilder.group({
    result: new FormControl(''),
    feedback: new FormControl(''),
  });

  results = ['strong accept', 'accept', 'weak accept', 'borderline paper', 'weak reject', 'reject', 'strong reject'];
  paper = {title: 'title', abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas velit vel imperdiet luctus. Nam eget suscipit ex, in consequat neque. Nunc sit amet fermentum quam. Nulla sapien eros, vulputate id quam dignissim, euismod pulvinar dolor. Suspendisse quis mi posuere, malesuada sem ut, vulputate neque. Ut nec varius tortor, a tempus purus. Fusce at feugiat enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae'};

  constructor(
    private formbuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  seeChanges(): void {
    console.log(this.paperForm.controls.result.value);
  }
}
