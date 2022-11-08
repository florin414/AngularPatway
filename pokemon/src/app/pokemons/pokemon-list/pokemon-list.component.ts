import { environment } from 'src/environments/environment';
import { Pokemon } from '../../models/pokemon/pokemon';
import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { PokemonDetails } from 'src/app/models/pokemon/pokemon-details';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  protected pokemons: Pokemon[];
  private url?: string = environment.pokemonBaseUrl;
  private urlNext?: string;
  protected isPreviousButtonDisabled: boolean = true;
  protected pokemonDetails: PokemonDetails;
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    if (this.url != null) {
      this.pokemonService.getPokemonList(this.url).then((pokemons) => {
        this.pokemons = pokemons.results;
        this.urlNext = pokemons.next;
      });
    }
  }

  protected toggleNextPokemons(): void {
    let url = this.urlNext;
    if (url != null) {
      this.pokemonService.getPokemonList(url).then((pokemons) => {
        this.pokemons = pokemons.results;
        if (pokemons.previous != null) {
          this.url = pokemons.previous;
        }
        if (pokemons?.next != null) {
          this.urlNext = pokemons.next;
        }
      });
    }
  }

  protected togglePreviousPokemons(): void {
    let url = this.url;
    if (url != null) {
      this.pokemonService.getPokemonList(url).then((pokemons) => {
        this.pokemons = pokemons.results;
        if (pokemons.previous != null) {
          this.url = pokemons.previous;
        }
        if (pokemons.next != null) {
          this.urlNext = pokemons.next;
        }
      });
    }
  }
}
