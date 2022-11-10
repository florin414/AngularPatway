import { PokemonService } from './../../../services/pokemon.service';
import { PokemonDetails } from './../../../models/pokemon/pokemon-details';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemonDetailUrl = '';
  public pokemonDetails: PokemonDetails;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService
      .getPokemonDetails(this.pokemonDetailUrl)
      .then((p) => (this.pokemonDetails = p));
  }
}
