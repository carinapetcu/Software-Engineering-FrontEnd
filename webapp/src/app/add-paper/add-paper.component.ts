import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-paper',
  templateUrl: './add-paper.component.html',
  styleUrls: ['./add-paper.component.css']
})
export class AddPaperComponent implements OnInit {

  newAuthorAdded = false;
  authors  = new Array<string> ();
  shortLink = '';
  loading = false; // Flag variable
  file: File|null; // Variable to store file

  constructor() {
      this.file = null;
  }

  ngOnInit(): void{}


  // On file Select
    onChange(event: any): void {
        this.file = event.target.files[0];
    }

    // OnClick of button Upload
    onUpload(): void {
        this.loading = !this.loading;
        console.log(this.file);
//         this.fileUploadService.upload(this.file).subscribe(
//             (event: any) => {
//                 if (typeof (event) === 'object') {
//
//                     // Short link via api response
//                     this.shortLink = event.link;
//
//                     this.loading = false; // Flag variable
//                 }
//             }
//         );
    }

  addAuthorField(author: string): void{
      this.newAuthorAdded = true;
      this.authors.push(author);
  }

}
