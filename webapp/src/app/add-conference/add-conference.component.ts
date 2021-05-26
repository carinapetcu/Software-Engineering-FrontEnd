import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'app-add-conference',
  templateUrl: './add-conference.component.html',
  styleUrls: ['./add-conference.component.css']
})
export class AddConferenceComponent implements OnInit {

  conferenceForm = this.formBuilder.group({
    name: new FormControl(''),
    edition: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl('')
  });

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  addConference(): void {
    const name = this.conferenceForm.controls.name.value;
    const edition = this.conferenceForm.controls.edition.value;
    const startDate = this.conferenceForm.controls.startDate.value;
    const endDate = this.conferenceForm.controls.endDate.value;
    console.log(name);
    console.log(edition);
    console.log(startDate);
    console.log(endDate);
  }
}
