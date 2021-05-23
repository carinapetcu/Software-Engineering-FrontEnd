import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-my-conferences',
  templateUrl: './my-conferences.component.html',
  styleUrls: ['./my-conferences.component.css']
})
export class MyConferencesComponent implements OnInit {
  constructor() { }
  showComponent = 'grid';
  hideComponent = 'none';
  viewArray = [ this.hideComponent, this.hideComponent, this.hideComponent, this.showComponent ];
  shownView = 3;
  addArray = [ this.hideComponent, this.hideComponent, this.hideComponent, this.showComponent];
  shownAdd = 3;

  exampleCoChair = [{fullName: 'John Doe', email: 'john_doe@email.com', affiliation: 'reddit', webPage: 'www.reddit.com'}];
  examplePcMember = [{fullName: 'John Doe', email: 'john_doe@email.com', hasPaper: 'done'}
    , {fullName: 'John Doe', email: 'john_doe@email.com', hasPaper: 'close'}];
  exampleReviewer = [{fullName: 'John Doe', email: 'john_doe', papersReviewed: 3}];


  coChairColumns = ['fullName', 'email', 'affiliation', 'webpage'];
  reviewerColumns = ['fullName', 'email', 'papersReviewed'];
  pcMemberColumns = ['fullName', 'email', 'hasPapers'];

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

}
