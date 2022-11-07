import { PokemonService } from './../../services/pokemon.service';
import { PokemonDetails } from 'src/app/models/pokemon/pokemon-details';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css'],
})
export class PokemonDetailComponent implements OnInit {
  protected pokemonDetails: PokemonDetails;
  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    const name = String(this.route.snapshot.paramMap.get('name'));
    if (name) {
      this.getPokemonDetail(name);
    }
  }

  async getPokemonDetail(name: string){
    this.pokemonDetails = await this.pokemonService.getPokemonDetailsByName(
      name
    );
  }
}
