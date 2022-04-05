import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../interfaces';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private isLoggingOut: boolean = false;

  get isLogged(): boolean {
    return this.userService.isLogged;
  }


  get currentUser(): IUser {
    return this.userService.currentUser;
  }

  constructor(public userService: UserService, private router: Router) {

  }
  ngOnInit(): void {
  }



  logoutHandler(): void {
    if (this.isLoggingOut) {
      return;
    }

    this.isLoggingOut = true;
    console.log('logout called');

    this.userService.logout$().subscribe({
      next: args => {
        //console.log(args);
      },
      complete: () => {
        this.isLoggingOut = false;
        this.router.navigate(['/home']);
      },
      error: () => {
        this.isLoggingOut = false;
      }
    });
  }

}
