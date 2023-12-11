import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../service/api.service';
import { response } from 'express';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
// ...

export class HomeComponent implements OnInit {

  data: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData() {
    this.apiService.getCharacter().subscribe(response => {
      // Asegúrate de que response.results es un array
      this.data = response.results;
      console.log(this.data);
    })
  }
}

