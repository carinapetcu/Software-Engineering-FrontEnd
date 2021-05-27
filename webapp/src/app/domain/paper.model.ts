import {Author} from './author.domain';

export class Paper{
  title: string;
  paperAbstract: string;
  authorEmails: Array<string>;

  constructor(title: string, authorEmails: Array<string>, paperAbstract: string){
    this.title = title;
    this.paperAbstract = paperAbstract;
    this.authorEmails = authorEmails;
  }

}
