import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IPlayer} from './interfaces';
import { Observable } from 'rxjs';


const apiURL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  loadPlayersList(): Observable<IPlayer[]> {
    return this.http.get<IPlayer[]>(`${apiURL}/players`);
  }
}
