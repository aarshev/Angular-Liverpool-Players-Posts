import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IUser } from './interfaces';


export interface CreateUserDto { email: string, password: string}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser!: IUser;

  get isLogged() {
    return !!this.currentUser;
  }

  login$(userData: { email: string, password: string }){
    return this.httpClient
      .post<IUser>(`${environment.apiUrl}/login`, userData, { withCredentials: true})
      .pipe( 
        tap((user) => this.currentUser = user)
      )
  }

  constructor(private httpClient: HttpClient) { }

  register$(userData: CreateUserDto): Observable<IUser> {
    return this.httpClient.post<IUser>(`${environment.apiUrl}/register`, userData, { withCredentials: true })
  }
}
