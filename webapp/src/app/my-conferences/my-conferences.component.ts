import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";
import {Router} from "@angular/router";


@Component({
  selector: 'app-my-conferences',
  templateUrl: './my-conferences.component.html',
  styleUrls: ['./my-conferences.component.css']
})
export class MyConferencesComponent implements OnInit {

  coChairForm = this.formBuilder.group({
    fullName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    username: new FormControl(''),
    affiliation: new FormControl(''),
    website: new FormControl(''),
  });
  pcMemberForm = this.formBuilder.group({
    fullName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    username: new FormControl(''),
    affiliation: new FormControl(''),
    website: new FormControl(''),
  });
  reviewerForm = this.formBuilder.group({
    fullName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    username: new FormControl(''),
  });



  // Design code ===========================================================
  showComponent = 'grid';
  hideComponent = 'none';

  hide = true;

  viewArray = [ this.hideComponent, this.hideComponent, this.hideComponent, this.showComponent ];
  shownView = 3;
  addArray = [ this.hideComponent, this.hideComponent, this.hideComponent, this.showComponent];
  shownAdd = 3;

  exampleCoChair = [{fullName: 'John Doe', email: 'john_doe@email.com', affiliation: 'reddit', webPage: 'www.reddit.com'}];
  examplePcMember = [{fullName: 'John Doe', email: 'john_doe@email.com', hasPaper: 'done'}
    , {fullName: 'John Doe', email: 'john_doe@email.com', hasPaper: 'close'}];
  exampleReviewer = [{fullName: 'John Doe', email: 'john_doe', papersReviewed: 3}];

  // END design code ====================================================================

  coChairColumns = ['fullName', 'email', 'affiliation', 'webpage'];
  reviewerColumns = ['fullName', 'email', 'papersReviewed'];
  pcMemberColumns = ['fullName', 'email', 'hasPapers'];


  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  changeView(current: number, type: string): void{
    const array = type === 'view' ? this.viewArray : this.addArray;
    const shown = type === 'view' ? this.shownView : this.shownAdd;

    switch (array[current]){
      case this.hideComponent:
        array[current] = this.showComponent;
        array[shown] = this.hideComponent;
        if (type === 'view') {
          this.shownView = current;
        }
        else {
          this.shownAdd = current;
        }
        break;
      case this.showComponent:
        array[current] = this.hideComponent;
        array[array.length] = this.showComponent;
        if (type === 'view') {
          this.shownView = array.length;
        }
        else {
          this.shownAdd = array.length;
        }
        break;
    }
  }

  redirectToPapers(): void{
    this.router.navigate(['papers']);
  }

}
