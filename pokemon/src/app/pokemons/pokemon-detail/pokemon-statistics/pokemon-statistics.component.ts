import { PokemonService } from './../../../services/pokemon.service';
import { PokemonDetails } from './../../../models/pokemon/pokemon-details';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-statistics',
  templateUrl: './pokemon-statistics.component.html',
  styleUrls: ['./pokemon-statistics.component.css']
})
export class PokemonStatisticsComponent implements OnInit {

  @Input() pokemonDetails : PokemonDetails;
  public pokemonColor: string;
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemonColorById(this.pokemonDetails?.id).then(
      (color) => this.pokemonColor = color
    );
  }
}
