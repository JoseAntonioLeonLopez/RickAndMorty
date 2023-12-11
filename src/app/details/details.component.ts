import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  character: any;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {
    this.character = {
      id: null,
      name: '',
      status: '',
      species: '',
      gender: '',
      origin: { name: '' },
      location: { name: '' },
      image: '',
      url: ''
    };
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const characterId = +params['id'];
      this.loadCharacterDetails(characterId);
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }

  loadCharacterDetails(id: number) {
    this.apiService.getCharacterById(id).subscribe(
      (character) => {
        this.character = character;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
