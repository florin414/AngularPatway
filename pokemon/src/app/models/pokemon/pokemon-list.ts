import { Pokemon } from './pokemon';
export class PokemonList{
  count: number = 0;
  next?: string = '';
  previous?: string = '';
  results: Pokemon[] = [];
}
