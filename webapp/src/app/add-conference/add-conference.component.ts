import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';
import {ConferenceService} from '../service/conference.service';
import {Conference} from '../domain/conference.model';
import {ConferenceRequest} from "../domain/conferenceRequest.model";

@Component({
  selector: 'app-add-conference',
  templateUrl: './add-conference.component.html',
  styleUrls: ['./add-conference.component.css']
})
export class AddConferenceComponent implements OnInit {

  conferenceForm = this.formBuilder.group({
    name: new FormControl(''),
    edition: new FormControl(''),
    description: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl('')
  });

  constructor(
    private formBuilder: FormBuilder,
    private service: ConferenceService,
  ) { }

  ngOnInit(): void {
  }

  addConference(): void {
    const name = this.conferenceForm.controls.name.value;
    const edition = this.conferenceForm.controls.edition.value;
    const description = this.conferenceForm.controls.description.value;
    const startDate = this.conferenceForm.controls.startDate.value;
    const endDate = this.conferenceForm.controls.endDate.value;
    const userId = +localStorage.getItem('userId');
    console.log(name);
    console.log(edition);
    console.log(description);
    console.log(userId);
    console.log(startDate);
    console.log(endDate);
    const conference = new ConferenceRequest(userId, name, description, edition, startDate, endDate);
    this.service.addConference(conference);
  }
}
