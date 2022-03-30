import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPost } from './interfaces';

const apiURL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  addPost$(body: { playerName: string, postText: string }): Observable<IPost> {
    return this.http.post<IPost>(`${apiURL}/create`, body, { withCredentials: true });
  }

  loadPostList(): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${apiURL}/posts`);
  }
}