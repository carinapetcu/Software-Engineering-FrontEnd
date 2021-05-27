import {Component, OnInit} from '@angular/core';
import {CMSUserService} from '../service/cmsuser.service';
import {FormBuilder, FormControl} from '@angular/forms';

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
  authorColumns = ['email', 'delete'];
  paperForm = this.formBuilder.group({
    title: new FormControl(''),
    abstract: new FormControl(''),
    author: new FormControl(''),
  });

  constructor(
    private userService: CMSUserService,
    private formBuilder: FormBuilder,
  ) {
      this.file = null;
  }

  ngOnInit(): void{
    const userId = localStorage.getItem('userId');
    if (userId != null) {
      this.userService.getUser(+userId).subscribe(
        response => {
          this.authors.push(response.dto.email);
        }
      );
    }
  }


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

  addAuthorField(): void{
      this.newAuthorAdded = true;
      const author = this.paperForm.controls.author.value;
      this.authors.push(author);
  }

  addPaper(): void{

  }

}
