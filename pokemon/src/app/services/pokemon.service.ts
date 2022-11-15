import { PokemonEvolution } from './../models/pokemon/pokemon-details-dto/pokemon-evolution/pokemon-evolution';
import { environment } from './../../environments/environment';
import { PokemonDetails } from './../models/pokemon/pokemon-details';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonList } from '../models/pokemon/pokemon-list';
import { firstValueFrom } from 'rxjs';
import { Profile } from '../models/pokemon/pokemon-details-dto/pokemon-profile/profile/profile';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private pokemonDetailsUrl = environment.pokemonBaseUrl;
  private evolutionChainUrl = environment.evolutionChainUrl;
  private pokemonSpeciesUrl = environment.pokemonSpecies;

  constructor(private http: HttpClient) {}

  public async getPokemonList(pokemonApiUrl: string): Promise<PokemonList> {
    return await firstValueFrom(this.http.get<PokemonList>(pokemonApiUrl));
  }

  public async getPokemonDetails(pokemonDetailsUrl: string): Promise<PokemonDetails> {
    return await firstValueFrom(
      this.http.get<PokemonDetails>(pokemonDetailsUrl)
    );
  }

  public async getPokemonProfile(url: string): Promise<Profile> {
    return await firstValueFrom(this.http.get<Profile>(url));
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

  public async getPokemonColorByName(name: string): Promise<string>{
    let pokemon = await firstValueFrom(
      this.http.get<Profile>(`${this.pokemonSpeciesUrl}${name}/`)
    );
    return pokemon.color.name;
  }

  public async getPokemonColorById(name: number): Promise<string>{
    let pokemon = await firstValueFrom(
      this.http.get<Profile>(`${this.pokemonSpeciesUrl}${name}/`)
    );
    return pokemon.color.name;
  }

  public async getPokemonImgByName(name: string): Promise<string> {
    let pokemon = await firstValueFrom(
      this.http.get<PokemonDetails>(`${this.pokemonDetailsUrl}${name}/`)
    );
    return pokemon.sprites.front_default;
  }
}
