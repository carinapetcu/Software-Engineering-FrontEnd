import {Author} from './author.domain';

export class Paper{
  title: string;
  authorEmails: Array<string>;
  paperAbstract: string;

  constructor( title: string, authorEmails: Array<string>, paperAbstract: string){
    this.title = title;
    this.authorEmails = authorEmails;
    this.paperAbstract = paperAbstract;
  }

}
