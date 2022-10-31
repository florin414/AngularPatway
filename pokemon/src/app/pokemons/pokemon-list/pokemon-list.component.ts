import { Pokemon } from '../../models/pokemon/pokemon';
import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { PokemonDetails } from 'src/app/models/pokemon/pokemon-details';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] | undefined;
  private url?: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlNext: string | undefined;
  isPreviousButtonDisabled: boolean = true;
  pokemonDetails!: PokemonDetails;
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    if (this.url != null) {
      this.pokemonService.getPokemonList(this.url).then((pokemons) => {
        this.pokemons = pokemons?.results;
        this.urlNext = pokemons?.next;
      });
    }
  }

  toggleNextPokemons(): void {
    let url = this.urlNext;
    if (url != null) {
      this.pokemonService.getPokemonList(url).then((pokemons) => {
        this.pokemons = pokemons?.results;
        if (pokemons?.previous != null) {
          this.url = pokemons.previous;
        }
        if (pokemons?.next != null) {
          this.urlNext = pokemons.next;
        }
      });
    }
  }

  togglePreviousPokemons(): void {
    let url = this.url;
    if (url != null) {
      this.pokemonService.getPokemonList(url).then((pokemons) => {
        this.pokemons = pokemons?.results;
        if (pokemons?.previous != null) {
          this.url = pokemons.previous;
        }
        if (pokemons?.next != null) {
          this.urlNext = pokemons.next;
        }
      });
    }
  }
}
