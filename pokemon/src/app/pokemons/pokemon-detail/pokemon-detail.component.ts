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
  public pokemonDetails: PokemonDetails;
  public pokemonColor: string;
  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    const name = String(this.route.snapshot.paramMap.get('name'));
    if (name) {
      this.loadingPokeomDetail(name);
    }
  }

  private async loadingPokeomDetail(name: string) {
    [this.pokemonDetails, this.pokemonColor] = await Promise.all([
      this.pokemonService.getPokemonDetailsByName(name),
      this.pokemonService.getPokemonColorByName(name)
    ]);
  }
}
