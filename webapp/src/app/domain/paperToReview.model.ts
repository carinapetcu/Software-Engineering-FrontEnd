import {Author} from './author.domain';

export class PaperToReview{
  paperId: number;
  title: string;
  paperAbstract: string;
  authors: Array<Author>;

  constructor(paperId: number, title: string, paperAbstract: string, authors: Array<Author>) {
    this.paperId = paperId;
    this.title = title;
    this.paperAbstract = paperAbstract;
    this.authors = authors;
  }
}
