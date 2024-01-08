import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../service/api.service';
import { response } from 'express';
import { Character } from '../../models/Character';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
// ...

export class HomeComponent implements OnInit {

  characters: Character[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.llenarData();
  }
  
  llenarData() {
    this.apiService.getCharacters().subscribe((response: Character[]) => {
      this.characters = response;
      console.log('characters:', this.characters);
    });
  }
  
}

