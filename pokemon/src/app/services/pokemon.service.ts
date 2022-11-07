import { environment } from './../../environments/environment';
import { PokemonDetails } from './../models/pokemon/pokemon-details';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonList } from '../models/pokemon/pokemon-list';
import { Species } from '../models/pokemon/pokemon-details-dto/pokemon-profile/species/species';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  private pokemonDetailsUrl = environment.pokemonBaseUrl;

  async getPokemonList(pokemonApiUrl: string): Promise<PokemonList> {
    return await firstValueFrom(this.http.get<PokemonList>(pokemonApiUrl));
  }

  async getPokemonDetails(pokemonDetailsUrl: string): Promise<PokemonDetails> {
    return await firstValueFrom(
      this.http.get<PokemonDetails>(pokemonDetailsUrl)
    );
  }

  async getPokemonSpecies(url: string): Promise<Species> {
    return await firstValueFrom(this.http.get<Species>(url));
  }

  async getPokemonDetailsByName(pokemonName: string): Promise<PokemonDetails> {
    return await firstValueFrom(
      this.http.get<PokemonDetails>(`${this.pokemonDetailsUrl}${pokemonName}/`)
    );
  }
}
