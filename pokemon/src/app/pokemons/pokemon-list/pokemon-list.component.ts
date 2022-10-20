import { IPokemon } from './../../models/pokemon';
import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit{
  private sub!: Subscription;
  pokemons: IPokemon[] = [];
  private errorMessage = '';
  private url?: string = 'https://pokeapi.co/api/v2/pokemon';
  nextButtonIsDisabled: boolean = true;
  previousButtonIsDisabled: boolean = true;
  isNextPokemons: boolean = true;
  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    if(this.url!=null){
      fetch("https://pokeapi.co/api/v2/pokemon/30/").then(response => response.json()).then(function(data)
      {
        console.log(data.sprites);
      });
      this.sub = this.pokemonService.getPokemonApi(this.url).subscribe({
        next: (pokemons) => {
          this.pokemons = pokemons.results;

          if(this.isNextPokemons && pokemons.next!=null){
            this.url = pokemons.next;
            this.nextButtonIsDisabled = false;
          }
          if(!this.isNextPokemons && pokemons.previous!=null){
            this.url = pokemons.previous;
            this.previousButtonIsDisabled = false;
          }
        },
        error: (err) => (this.errorMessage = err),
      });
    }
  }

  toggleNextPokemons(): void{
    this.isNextPokemons = true;
    this.ngOnInit();
  }

  togglePreviousPokemons(): void{
    this.isNextPokemons = false;
    this.ngOnInit();
  }

}
