import { Component, OnInit } from '@angular/core';
import {Conference} from '../domain/conference.model';
import {ConferenceService} from '../service/conference.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  conferencesExample = [{name: 'Conference1', edition: 'Edition1' , startDate: '01-01-2000' , endDate: '02-01-2000' , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend leo lorem, vitae maximus elit volutpat quis. Quisque tempor nulla sit amet ipsum viverra pulvinar. Aenean lobortis tortor turpis, sit amet ornare diam euismod ut. Quisque pharetra felis vel porttitor tincidunt. Proin id erat molestie, commodo quam sed, scelerisque augue. Etiam vulputate tellus mi, quis fringilla felis interdum et. Nunc felis sapien, tincidunt nec lacus vel, gravida vulputate odio. Aliquam maximus risus eu dolor volutpat, nec vehicula nunc blandit. Morbi diam lacus, placerat sed felis id, posuere pretium velit.'},
    {name: 'Conference1', edition: 'Edition1' , startDate: '01-01-2000' , endDate: '02-01-2000' , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend leo lorem, vitae maximus elit volutpat quis. Quisque tempor nulla sit amet ipsum viverra pulvinar. Aenean lobortis tortor turpis, sit amet ornare diam euismod ut. Quisque pharetra felis vel porttitor tincidunt. Proin id erat molestie, commodo quam sed, scelerisque augue. Etiam vulputate tellus mi, quis fringilla felis interdum et. Nunc felis sapien, tincidunt nec lacus vel, gravida vulputate odio. Aliquam maximus risus eu dolor volutpat, nec vehicula nunc blandit. Morbi diam lacus, placerat sed felis id, posuere pretium velit.' },
    {name: 'Conference1', edition: 'Edition1' , startDate: '01-01-2000' , endDate: '02-01-2000' , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend leo lorem, vitae maximus elit volutpat quis. Quisque tempor nulla sit amet ipsum viverra pulvinar. Aenean lobortis tortor turpis, sit amet ornare diam euismod ut. Quisque pharetra felis vel porttitor tincidunt. Proin id erat molestie, commodo quam sed, scelerisque augue. Etiam vulputate tellus mi, quis fringilla felis interdum et. Nunc felis sapien, tincidunt nec lacus vel, gravida vulputate odio. Aliquam maximus risus eu dolor volutpat, nec vehicula nunc blandit. Morbi diam lacus, placerat sed felis id, posuere pretium velit.' },
    {name: 'Conference1', edition: 'Edition1' , startDate: '01-01-2000' , endDate: '02-01-2000' , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend leo lorem, vitae maximus elit volutpat quis. Quisque tempor nulla sit amet ipsum viverra pulvinar. Aenean lobortis tortor turpis, sit amet ornare diam euismod ut. Quisque pharetra felis vel porttitor tincidunt. Proin id erat molestie, commodo quam sed, scelerisque augue. Etiam vulputate tellus mi, quis fringilla felis interdum et. Nunc felis sapien, tincidunt nec lacus vel, gravida vulputate odio. Aliquam maximus risus eu dolor volutpat, nec vehicula nunc blandit. Morbi diam lacus, placerat sed felis id, posuere pretium velit.' },
  ];
  errorMessage: string;
  conferences: Array<Conference>;


  constructor(
    private conferenceService: ConferenceService) {
    this.errorMessage = '';
    this.conferences = new Array<Conference>();
  }

  ngOnInit(): void {
    this.getConferences();
  }

  getConferences(): void{
    this.conferenceService.getConferences()
      .subscribe(
        conferences => this.conferences = conferences.body,
        error => this.errorMessage = (error as any)
      );
  }

  printHere(): void {
    console.log('here');
  }
}
