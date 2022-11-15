import { EvolutionState } from "./evolution-state";
import { EvolvesTo } from "./evolves-to";
import { Species } from "./species";

export class Chain{
  evolution_details: EvolutionState[];
  is_baby: boolean;
  species: Species;
  evolves_to: EvolvesTo[];
}
