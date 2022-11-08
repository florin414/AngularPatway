import { PokemonEvolution } from './../models/pokemon/pokemon-details-dto/pokemon-evolution/pokemon-evolution';
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
  private pokemonDetailsUrl = environment.pokemonBaseUrl;
  private evolutionChainUrl = environment.evolutionChainUrl;

  constructor(private http: HttpClient) {}

  public async getPokemonList(pokemonApiUrl: string): Promise<PokemonList> {
    return await firstValueFrom(this.http.get<PokemonList>(pokemonApiUrl));
  }

  public async getPokemonDetails(pokemonDetailsUrl: string): Promise<PokemonDetails> {
    return await firstValueFrom(
      this.http.get<PokemonDetails>(pokemonDetailsUrl)
    );
  }

  public async getPokemonSpecies(url: string): Promise<Species> {
    return await firstValueFrom(this.http.get<Species>(url));
  }

  public async getPokemonDetailsByName(pokemonName: string): Promise<PokemonDetails> {
    return await firstValueFrom(
      this.http.get<PokemonDetails>(`${this.pokemonDetailsUrl}${pokemonName}/`)
    );
  }

  public async getPokemonEvolutionById(id: number): Promise<PokemonEvolution>{
    return await firstValueFrom(
      this.http.get<PokemonEvolution>(`${this.evolutionChainUrl}${id}/`)
    );
  }
}
