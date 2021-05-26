import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {CMSUserService} from '../service/cmsuser.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;

  loginError = '';

  loginForm = this.formBuilder.group({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  constructor( private cmsUserService: CMSUserService,
               private formBuilder: FormBuilder,
               private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    this.cmsUserService.login(this.loginForm.controls.username.value,
      this.loginForm.controls.password.value)
      .subscribe(
        response => {
          localStorage.setItem('userId', response.userID);
          localStorage.setItem('conferenceId', response.conferenceID);
          localStorage.setItem('authority', response.authority);
          this.router.navigateByUrl('/home');
        },
        response => {
          alert(response.error);
        }
      );
  }
}
