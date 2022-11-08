import { EvolutionDetails } from './evolution-details';
import { Species } from "./species";

export class EvolvesTo{
  is_baby: boolean;
  species: Species;
  evolution_details: EvolutionDetails[];
  evolves_to: EvolvesTo[];
}
