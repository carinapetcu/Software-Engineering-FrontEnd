import {Author} from './author.domain';

export class Paper{
  paperId: number;
  title: string;
  abstract: string;
  authors: Array<string>;

  constructor(paperId: number, title: string, abstract: string, authors: Array<string>){
    this.paperId = paperId;
    this.title = title;
    this.abstract = abstract;
    this.authors = authors;
  }

}
