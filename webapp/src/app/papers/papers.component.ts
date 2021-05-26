import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-papers',
  templateUrl: './papers.component.html',
  styleUrls: ['./papers.component.css']
})
export class PapersComponent implements OnInit {
  paperColumns = ['title', 'abstract', 'authors'];

  papersExample = [{title: 'title1', abstract: 'abstract1', authors: [{fullName: 'author1'}, {fullName: 'author2'}, {fullName: 'author3'}]}];

  constructor() { }

  ngOnInit(): void {
  }

  downloadAbstract(id: string): void {
    console.log('Method to start the download of a paper');
  }
}
