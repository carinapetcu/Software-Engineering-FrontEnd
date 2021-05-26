export class PcMember{
  fullname: string;
  email: string;
  affiliation: string;
  webpage: string;
  hasPaper: boolean;

  constructor(fullname: string, email: string, affiliation: string, webpage: string, hasPaper: boolean) {
    this.fullname = fullname;
    this.email = email;
    this.affiliation = affiliation;
    this.webpage = webpage;
    this.hasPaper = hasPaper;
  }
}
