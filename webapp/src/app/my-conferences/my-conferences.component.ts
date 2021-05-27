import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {ConferenceService} from '../service/conference.service';


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




  // Design code ===========================================================
  showComponent = 'grid';
  hideComponent = 'none';

  hide = true;

  viewArray = [ this.hideComponent, this.hideComponent, this.hideComponent, this.showComponent ];
  shownView = 3;
  addArray = [ this.hideComponent, this.hideComponent, this.hideComponent, this.showComponent];
  shownAdd = 3;

  coChairColumns = ['fullName', 'email', 'affiliation', 'webpage'];
  reviewerColumns = ['fullName', 'email', 'papersReviewed'];
  pcMemberColumns = ['fullName', 'email', 'hasPapers'];

  // END design code ====================================================================

  exampleCoChair = [{fullName: 'John Doe', email: 'john_doe@email.com', affiliation: 'reddit', webPage: 'www.reddit.com'}];
  examplePcMember = [{fullName: 'John Doe', email: 'john_doe@email.com', hasPaper: 'done'}
    , {fullName: 'John Doe', email: 'john_doe@email.com', hasPaper: 'close'}];
  exampleReviewer = [{fullName: 'John Doe', email: 'john_doe', papersReviewed: 3}];


  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private conferenceService: ConferenceService
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

  addCoChair(): void{
      const id = localStorage.getItem('conferenceId');
      const email = this.coChairForm.controls.email.value;
      const affiliation = this.coChairForm.controls.affiliation.value;
      const website = this.coChairForm.controls.website.value;
      this.conferenceService.addCoChairToConference(+id, {email, affiliation, website}).subscribe();

  }

  addPcMember(): void{
    const id = localStorage.getItem('conferenceId');
    const email = this.pcMemberForm.controls.email.value;
    const affiliation = this.pcMemberForm.controls.affiliation.value;
    const website = this.pcMemberForm.controls.website.value;
    this.conferenceService.addPcMemberToConference(+id, {email, affiliation, website}).subscribe();
  }

}
