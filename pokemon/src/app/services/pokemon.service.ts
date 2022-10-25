import { PokemonDetails } from './../models/pokemon/pokemon-details';
import { catchError, filter, map, Observable, tap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonList } from '../models/pokemon/pokemon-list';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private pokemonDetailsUrl = 'https://pokeapi.co/api/v2/pokemon/';
  constructor(private http: HttpClient) {}

  getPokemonList(pokemonApiUrl: string): Observable<PokemonList> {
    return this.http.get<PokemonList>(pokemonApiUrl).pipe(
      // tap((data) => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getPokemonDetails(pokemonDetailsUrl: string): Observable<PokemonDetails> {
    return this.http.get<PokemonDetails>(pokemonDetailsUrl).pipe(
      // tap((data) => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getPokemonDetailsByName(pokemonName: string): Observable<PokemonDetails> {
    return this.http.get<PokemonDetails>(`${this.pokemonDetailsUrl}${pokemonName}/`).pipe(
      // tap((data) => console.log('All: ', JSON.stringify(data.name))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
