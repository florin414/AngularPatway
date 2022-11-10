import { PokemonService } from './../../../services/pokemon.service';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { PokemonDetails } from 'src/app/models/pokemon/pokemon-details';
import { Species } from 'src/app/models/pokemon/pokemon-details-dto/pokemon-profile/species/species';
@Component({
  selector: 'app-pokemon-profile',
  templateUrl: './pokemon-profile.component.html',
  styleUrls: ['./pokemon-profile.component.css'],
})
export class PokemonProfileComponent implements OnChanges, OnInit {
  @Input() pokemonDetails: PokemonDetails;
  public species: Species;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {}

  ngOnChanges() {
    this.pokemonService
      .getPokemonSpecies(this.pokemonDetails.species.url)
      .then((species) => {
        this.species = species;
      });
  }
}
