import { Component, OnInit } from '@angular/core';
import {Conference} from '../domain/conference.model';
import {ConferenceService} from '../service/conference.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  descriptionExample = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend leo lorem, vitae maximus elit volutpat quis. Quisque tempor nulla sit amet ipsum viverra pulvinar. Aenean lobortis tortor turpis, sit amet ornare diam euismod ut. Quisque pharetra felis vel porttitor tincidunt. Proin id erat molestie, commodo quam sed, scelerisque augue. Etiam vulputate tellus mi, quis fringilla felis interdum et. Nunc felis sapien, tincidunt nec lacus vel, gravida vulputate odio. Aliquam maximus risus eu dolor volutpat, nec vehicula nunc blandit. Morbi diam lacus, placerat sed felis id, posuere pretium velit.';
  conferencesMock = [new Conference('1', 'Conference1', this.descriptionExample, 'Edition1', new Date('01-01-2000'), new Date('02-01-2000')),
    new Conference('2', 'Conference2', this.descriptionExample, 'Edition2', new Date('01-01-2000'), new Date('02-01-2000')),
    new Conference('3', 'Conference3', this.descriptionExample, 'Edition3', new Date('01-01-2000'), new Date('02-01-2000')),
    new Conference('4', 'Conference4', this.descriptionExample, 'Edition4', new Date('01-01-2000'), new Date('02-01-2000'))
  ];
  errorMessage: string;
  conferences: Array<Conference>;


  constructor(
    private conferenceService: ConferenceService,
    private router: Router
  ) {
    this.errorMessage = '';
    this.conferences = new Array<Conference>();
  }

  ngOnInit(): void {
    // this.getConferences();
    this.conferencesMock.forEach(conference => {this.conferences.push(conference); });
  }

  getConferences(): void{
    this.conferenceService.getConferences()
      .subscribe(
        conferences => this.conferences = conferences.body,
        error => this.errorMessage = (error as any)
      );
  }

  redirectDetails(conferenceId: string): void {
    this.router.navigate(['/details', {id: conferenceId}]);
  }
}
