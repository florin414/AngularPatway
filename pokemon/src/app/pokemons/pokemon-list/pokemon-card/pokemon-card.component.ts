import { PokemonService } from './../../../services/pokemon.service';
import { PokemonDetails } from './../../../models/pokemon/pokemon-details';
import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit{

  @Input() pokemonDetailUrl = '';
  pokemonDetails!: PokemonDetails;

  constructor(private pokemonService: PokemonService){}

  ngOnInit(): void {
    this.pokemonService.getPokemonDetails(this.pokemonDetailUrl).subscribe({
      next: (pokemonDetails) => {
        this.pokemonDetails = pokemonDetails;
      }
    });
  }
}
