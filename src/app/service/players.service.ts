import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Players} from '../model/players';
import {Observable} from 'rxjs';
const API_URL = 'http://localhost:3001/players';
@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private httpClient: HttpClient) { }
  getPlayers(players: Players): Observable<Players> {
    return this.httpClient.post<Players>(API_URL, players);
  }

  getAll(): Observable<Players[]> {
    return this.httpClient.get<Players[]>(API_URL);
  }

  getById(id: string | null): Observable<Players>{
    return this.httpClient.get<Players>(API_URL + `/${id}`);
  }
  updateBook(id: string, book: Players): Observable<Players> {
    return this.httpClient.put<Players>(API_URL + `/${id}`, book);
  }
  deletePlayers(id: string): Observable<Players> {
    return this.httpClient.delete<Players>(API_URL + `/${id}`);
  }
}
