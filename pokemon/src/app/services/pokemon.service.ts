import { environment } from './../../environments/environment';
import { PokemonDetails } from './../models/pokemon/pokemon-details';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonList } from '../models/pokemon/pokemon-list';
import { Species } from '../models/pokemon/pokemon-details-dto/pokemon-profile/species/species';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  private pokemonDetailsUrl = environment.pokemonBaseUrl;

  async getPokemonList(pokemonApiUrl: string): Promise<PokemonList> {
    return await this.http.get<PokemonList>(pokemonApiUrl).toPromise();
  }

  async getPokemonDetails(pokemonDetailsUrl: string): Promise<PokemonDetails> {
    return await this.http.get<PokemonDetails>(pokemonDetailsUrl).toPromise();
  }

  async getPokemonSpecies(url: string): Promise<Species> {
    return await this.http.get<Species>(url).toPromise();
  }

  async getPokemonDetailsByName(pokemonName: string): Promise<PokemonDetails> {
    return await this.http
      .get<PokemonDetails>(`${this.pokemonDetailsUrl}${pokemonName}/`)
      .toPromise();
  }
}
