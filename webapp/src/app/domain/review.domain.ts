export class Review{
    paperTitle: string;
    result: number;
    feedback: string;

    constructor(paperTitle: string, result: number, feedback: string){
      this.paperTitle = paperTitle;
      this.result = result;
      this.feedback = feedback;
    }
}
