import { HttpClient, HttpParams } from '@angular/common/http';
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

  loadPostByPlayerId(id: string): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${apiURL}/posts/${id}`);
  }

  loadPostForUser(id: string): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${apiURL}/profile/${id}`);
  }

  likePost(id:string, userID : string): Observable<IPost>{
    return this.http.post<IPost>(`${apiURL}/like/${id}`,{params: {'userID': userID}} ,{ withCredentials: true });
  }

  loadPostById(id: string): Observable<IPost> {
    return this.http.get<IPost>(`${apiURL}/edit/${id}`);
  }

  updatePost(id:string, body: { playerName: string, postText: string }): Observable<IPost> {
    return this.http.post<IPost>(`${apiURL}/edit/${id}`, body, { withCredentials: true });
  }

  deletePostById(id: string): Observable<void>{
    return this.http.delete<void>(`${apiURL}/delete/${id}`);
  }
}
