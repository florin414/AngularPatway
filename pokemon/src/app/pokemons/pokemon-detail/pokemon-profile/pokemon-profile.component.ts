import { PokemonService } from './../../../services/pokemon.service';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { PokemonDetails } from 'src/app/models/pokemon/pokemon-details';
import { Profile } from 'src/app/models/pokemon/pokemon-details-dto/pokemon-profile/profile/profile';
@Component({
  selector: 'app-pokemon-profile',
  templateUrl: './pokemon-profile.component.html',
  styleUrls: ['./pokemon-profile.component.css'],
})
export class PokemonProfileComponent implements OnChanges, OnInit {
  @Input() pokemonDetails: PokemonDetails;
  public profile: Profile;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {}

  ngOnChanges() {
    this.pokemonService
      .getPokemonProfile(this.pokemonDetails?.species.url)
      .then((profile) => {
        this.profile = profile;
      });
  }
}
