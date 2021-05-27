export class Reviewer{
  fullName: string;
  email: string;
  noOfPapersToReview: number;

  constructor(fullName: string, email: string, noOfPapersToReview: number) {
    this.fullName = fullName;
    this.email = email;
    this.noOfPapersToReview = noOfPapersToReview;
  }
}
