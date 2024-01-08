import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Character } from '../../models/Character';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = "https://rickandmortyapi.com/api/character";

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Character[]> {
    return this.http.get<any>(this.urlApi)
      .pipe(
        map(response => response.results)
      );
  }

  public getCharacterById(id: number): Observable<Character> {
    const url = `${this.urlApi}/${id}`;
    return this.http.get<Character>(url);
  }
}
