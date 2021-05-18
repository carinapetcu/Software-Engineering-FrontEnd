import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CMSUserService} from '../service/cmsuser.service';
import {CMSUser} from '../domain/cmsuser.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide = true;
  successfullyAdd: boolean;

  constructor(private cmsuserService: CMSUserService) {
    this.successfullyAdd = true;
  }

  ngOnInit(): void {
  }

  addUser(fullName: string, email: string, username: string, password: string): void{
    const user: CMSUser = {id: 0, fullName, email, username, password} as CMSUser;
    this.cmsuserService.addUser(user).subscribe(
      response => {
        this.successfullyAdd = response.status === 200;
      }
    );
  }

}
