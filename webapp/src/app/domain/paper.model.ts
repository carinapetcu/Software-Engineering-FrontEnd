import {Author} from './author.domain';

export class Paper{
  paperId: number;
  title: string;
  abstract: string;
  authors: Array<Author>;

  constructor(paperId: number, title: string, abstract: string, authors: Array<Author>){
    this.paperId = paperId;
    this.title = title;
    this.abstract = abstract;
    this.authors = authors;
  }

}
