export class Reviewer{
  fullname: string;
  email: string;
  noOfPapersToReview: number;

  constructor(fullname: string, email: string, noOfPapersToReview: number) {
    this.fullname = fullname;
    this.email = email;
    this.noOfPapersToReview = noOfPapersToReview;
  }
}
