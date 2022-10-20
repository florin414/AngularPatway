import { IPokemon } from './pokemon';
export interface IPokemonApi{
  count: number;
  next?: string;
  previous?: string;
  results: IPokemon[];
}
