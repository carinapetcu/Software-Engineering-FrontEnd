import { Component, OnInit } from '@angular/core';
import {Paper} from '../domain/paper.model';
import {PaperService} from '../service/paper.service';

@Component({
  selector: 'app-papers',
  templateUrl: './papers.component.html',
  styleUrls: ['./papers.component.css']
})
export class PapersComponent implements OnInit {
  paperColumns = ['title', 'abstract', 'authors'];

  papersExample = [{title: 'title1', abstract: 'abstract1', authors: [{fullName: 'author1'}, {fullName: 'author2'}, {fullName: 'author3'}]}];
  papers = new Array<Paper>();

  constructor(
    private paperService: PaperService
  ) { }

  ngOnInit(): void {
    this.getPapers();
  }

  downloadAbstract(id: string): void {
    console.log('Method to start the download of a paper');
  }

  getPapers(): void{
    const conferenceId = localStorage.getItem('conferenceId');
    this.paperService.getPapersFromConference(+conferenceId).subscribe(
      response => this.papers = response.dtos
    );

  }
}
