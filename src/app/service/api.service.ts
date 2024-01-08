import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../../models/Character';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = "https://rickandmortyapi.com/api/character";

  constructor(private http: HttpClient) { }

  public getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.urlApi);
  }

  public getCharacterById(id: number): Observable<Character> {
    const url = `${this.urlApi}/${id}`;
    return this.http.get<Character>(url);
  }
}
