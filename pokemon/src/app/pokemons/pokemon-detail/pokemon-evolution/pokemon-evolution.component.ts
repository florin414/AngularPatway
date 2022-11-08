import { PokemonEvolution } from './../../../models/pokemon/pokemon-details-dto/pokemon-evolution/pokemon-evolution';
import { PokemonService } from './../../../services/pokemon.service';
import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { PokemonDetails } from 'src/app/models/pokemon/pokemon-details';

@Component({
  selector: 'app-pokemon-evolution',
  templateUrl: './pokemon-evolution.component.html',
  styleUrls: ['./pokemon-evolution.component.css']
})
export class PokemonEvolutionComponent implements OnInit, OnChanges {
  @Input() pokemonDetails: PokemonDetails;
  protected evolutionChainPokemon: PokemonEvolution;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {}

  ngOnChanges() {
    this.pokemonService.getPokemonEvolutionById(Math.ceil(this.pokemonDetails.id / 3)).then(
      (evolution) => this.evolutionChainPokemon = evolution
    )
  }
}
