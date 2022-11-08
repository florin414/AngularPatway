import { EvolutionDetails } from "./evolution-details";
import { EvolvesTo } from "./evolves-to";
import { Species } from "./species";

export class Chain{
  evolution_details: EvolutionDetails[];
  is_baby: boolean;
  species: Species;
  evolves_to: EvolvesTo[];
}
