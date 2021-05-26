export class Conference{
  id: number;
  name: string;
  description: string;
  edition: string;
  startDate: Date;
  endDate: Date;

  constructor(id: number, name: string, description: string, edition: string, startDate: Date, endDate: Date) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.edition = edition;
    this.startDate = startDate;
    this.endDate = endDate;
  }

}
