import { environment } from './../../environments/environment';
import { PokemonDetails } from './../models/pokemon/pokemon-details';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonList } from '../models/pokemon/pokemon-list';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {

  constructor(private http: HttpClient) {}

  private pokemonDetailsUrl = environment.pokemonBaseUrl;

  async getPokemonList(pokemonApiUrl: string): Promise<PokemonList>{
    return await this.http.get<PokemonList>(pokemonApiUrl)
    .toPromise();
  }

  async getPokemonDetails(pokemonDetailsUrl: string): Promise<PokemonDetails> {
    return await this.http.get<PokemonDetails>(pokemonDetailsUrl)
    .toPromise();
  }

  async getPokemonDetailsByName(pokemonName: string): Promise<PokemonDetails> {
    return await this.http.get<PokemonDetails>(`${this.pokemonDetailsUrl}${pokemonName}/`)
    .toPromise();
  }
}
