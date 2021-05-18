import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
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
  registerForm = this.formBuilder.group({
    name: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });

  constructor(
    private cmsuserService: CMSUserService,
    private formBuilder: FormBuilder) {
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

  registerUser(): void {
    console.log(this.registerForm.controls.name.value);
    console.log(this.registerForm.controls.username.value);
    console.log(this.registerForm.controls.password.value);
    console.log(this.registerForm.controls.email.value);
  }
}
