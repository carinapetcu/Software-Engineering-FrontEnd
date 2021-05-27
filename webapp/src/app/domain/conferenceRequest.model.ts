export class ConferenceRequest{
  userId: number;
  name: string;
  description: string;
  edition: string;
  startDate: Date;
  endDate: Date;

  constructor(userId: number, name: string, edition: string, description: string, startDate: Date, endDate: Date) {
    this.userId = userId;
    this.name = name;
    this.description = description;
    this.edition = edition;
    this.startDate = startDate;
    this.endDate = endDate;
  }

}
