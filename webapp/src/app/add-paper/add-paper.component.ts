import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CMSUserService} from '../service/cmsuser.service';
import {FormBuilder, FormControl} from '@angular/forms';
import {Paper} from '../domain/paper.model';
import {PaperService} from '../service/paper.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-add-paper',
  templateUrl: './add-paper.component.html',
  styleUrls: ['./add-paper.component.css']
})
export class AddPaperComponent implements OnInit {

  newAuthorAdded = false;
  authors = new Array<object>();
  shortLink = '';
  paperId: string;
  loading = false; // Flag variable
  file: File | null; // Variable to store file
  authorColumns = ['email', 'delete'];
  paperForm = this.formBuilder.group({
    title: new FormControl(''),
    abstract: new FormControl(''),
    author: new FormControl(''),
  });
  authorDataSource = new MatTableDataSource<object>();

  constructor(
    private userService: CMSUserService,
    private paperService: PaperService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.file = null;
  }

  ngOnInit(): void {
    this.paperId = this.route.snapshot.params.id;
    const userId = localStorage.getItem('userId');
    if (userId != null) {
      this.userService.getUser(+userId).subscribe(
        response => {
          this.authors.push({email: response});
        }
      );
    }
    this.authorDataSource.data = this.authors;
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

  addAuthorField(): void {
    if (this.authors.length === 3) {
      alert('to many authors');
      return;
    }
    this.newAuthorAdded = true;
    const author = this.paperForm.controls.author.value;
    this.authors.push({email: author});
    this.authorDataSource.data = this.authors;
  }

  addPaper(): void {
    const title = this.paperForm.controls.title.value;
    const paperAbstract = this.paperForm.controls.abstract.value;
    const authorsConverted = new Array<string>();
    this.authors.forEach(author => authorsConverted.push(author.toString()));
    const paper = new Paper(title, authorsConverted, paperAbstract);
    const conferenceId = localStorage.getItem('conferenceId');
    if (conferenceId !== 'null') {
      this.paperService.addPaper(+conferenceId, paper).subscribe(
        response => {
          const id = this.route.snapshot.paramMap.get('id');
          this.router.navigate(['/addPaper', {id}]);
        }
      );
    }
  }

  removeAuthor(author: string): void {
    this.authors.filter(authorItem => authorItem.toString() !== author && authorItem !== this.authors[0]);
  }
}
