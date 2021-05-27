import {Author} from './author.domain';

export class Paper{
  title: string;
  abstract: string;
  authorEmails: Array<string>;

  constructor(title: string, authorEmails: Array<string>, abstract: string){
    this.title = title;
    this.abstract = abstract;
    this.authorEmails = authorEmails;
  }

}
