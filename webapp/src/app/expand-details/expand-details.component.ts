import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ConferenceService} from '../service/conference.service';

@Component({
  selector: 'app-expand-details',
  templateUrl: './expand-details.component.html',
  styleUrls: ['./expand-details.component.css']
})
export class ExpandDetailsComponent implements OnInit {

  conference = {name: 'FirstConference', edition: 'Edition I' , startDate: '01-06-2021' , endDate: '03-06-2021' ,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac viverra erat. Proin sit amet maximus nunc, in tempus urna. Fusce at accumsan orci. Mauris viverra bibendum enim, quis pulvinar orci molestie quis. Aliquam fringilla mauris libero, non porta quam maximus nec. Nullam facilisis justo a leo faucibus egestas. Phasellus non justo ut justo sollicitudin porta at nec tellus. In suscipit massa ut tristique congue. Cras eu orci imperdiet, congue arcu id, aliquet metus. Integer scelerisque mattis arcu et pretium.' +
      'Mauris mauris augue, bibendum a hendrerit in, gravida pharetra diam. Duis sit amet sapien tristique elit tincidunt convallis. Nulla blandit quam tellus, gravida fringilla est rutrum et. Nunc at justo efficitur, hendrerit diam in, vestibulum diam. Vivamus lobortis tortor massa, in laoreet justo ultrices ac. Morbi at orci a lorem convallis placerat tincidunt vitae sem. In hendrerit orci nisl, id congue leo iaculis ut. Curabitur non placerat nisl. Integer ac lectus neque. Donec convallis lectus eu nulla ultricies, sit amet pharetra erat ultrices. Pellentesque quis neque volutpat, aliquam orci eget, scelerisque odio. Phasellus lectus mi, tincidunt lacinia erat non, laoreet gravida dolor. Nulla facilisi.' +
      'Nulla facilisi. Ut aliquam, ante vitae hendrerit lacinia, mauris odio iaculis augue, vel dignissim quam felis eget nunc. Suspendisse suscipit lacus vitae lectus interdum fermentum. Donec aliquet libero a tellus cursus, auctor euismod elit semper. Morbi sed velit lorem. Integer malesuada mauris a neque tincidunt rutrum. Donec urna neque, malesuada aliquam sodales volutpat, tincidunt ut elit. Ut commodo leo non congue accumsan. Mauris eget fermentum magna. Nullam et metus tincidunt est condimentum lobortis. Proin vitae urna lacinia, mollis dui quis, feugiat turpis. Duis vitae sem laoreet, tincidunt orci in, auctor dolor. Vestibulum non lorem venenatis, euismod quam dapibus, maximus ligula. Praesent molestie sem id pulvinar ullamcorper.'
  };

  presentations = [{paperTitle: 'Paper Uno', paperDescription: 'Presentation for Paper Uno.'}];
  authors = [{name: 'Author X'}, {name: 'Author Y'}];

  // parametru pentru call-ul de backend
  conferenceId = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ConferenceService,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.conferenceId = id == null ? '0' : id;

    this.service.getConference(+this.conferenceId).subscribe(
      response => this.conference = response
    );
  }


  redirectToAddPaper(): void {
    this.router.navigate(['/addPaper', {id: this.conferenceId}]);
  }
}
