import { PokemonSpecies } from './pokemon-species';
import { Descriptions } from "./descriptions";
import { Level } from './level';

export class GrowthRates{
  id: number;
  name: string;
  formula: string;
  descriptions: Descriptions[];
  levels: Level[];
  pokemon_species: PokemonSpecies[];
}
