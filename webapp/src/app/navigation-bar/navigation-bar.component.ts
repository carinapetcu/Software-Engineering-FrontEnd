import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  private logged = true;


  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }


  // valoare pe care se bazeaza afisarea obiectelor
  // logged = true => afisam meniul din fata titlului
  // logged = false => afisam login si register
  // ar trebui sa se verifice ceva user de pe session-ul curent sau din localstorage si sa nu se
  // foloseasca o variabila
  navDisplay(): boolean{
    return this.logged;
  }

  redirectToLogin(): void {
    this.router.navigate(['/login']);
  }

  redirectToRegister(): void {
    this.router.navigate(['/register']);
  }

  redirectToHome(): void {
    this.router.navigate(['/home']);
  }

  signOut(): void {
    this.logged = !this.logged;
  }

  redirectToMyConference(): void {
    this.router.navigate(['/myConference']);
  }

  redirectToPapersReview(): void {
    this.router.navigate(['/papersReviews']);
  }

  redirectToAddConference(): void{
    this.router.navigate(['/addConference']);
  }
}
