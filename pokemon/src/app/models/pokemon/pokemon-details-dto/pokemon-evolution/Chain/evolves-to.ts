import { EvolutionState } from './evolution-state';
import { Species } from "./species";

export class EvolvesTo{
  is_baby: boolean;
  species: Species;
  evolution_details: EvolutionState[];
  evolves_to: EvolvesTo[];
}
