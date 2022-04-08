import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IUser } from '../interfaces';
import { MessageBusService, MessageType } from '../message-bus.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private isLoggingOut: boolean = false;

  subscription!: Subscription;

  message!: string;
  isMessageError!: boolean;

  get isLogged(): boolean {
    return this.userService.isLogged;
  }


  get currentUser(): IUser {
    
    return this.userService.currentUser;
  }

  constructor(public userService: UserService, private router: Router, private messageBus: MessageBusService) {

  }
  ngOnInit(): void {
    this.subscription = this.messageBus.onNewMessage$.subscribe(newMessage => {
      console.log('onNewMessage$.subscribe', newMessage);
      console.log(this.userService.currentUser)
      this.message = newMessage?.text || '';
      this.isMessageError = newMessage?.type === MessageType.Error;

      if (this.message) {
        setTimeout(() => {
          this.messageBus.clear();
        }, 2000);
      }
    });
  }


  logoutHandler(): void {
    if (this.isLoggingOut) {
      return;
    }

    this.isLoggingOut = true;
    //console.log('logout called');

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
