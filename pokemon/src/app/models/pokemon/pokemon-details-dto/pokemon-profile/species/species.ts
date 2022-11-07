import { Varieties } from './varieties';
import { Shape } from './shape';
import { PokedexNumbers } from './pokedex-numbers';
import { PalParkEncounters } from './pal-park-encounters';
import { Names } from './names';
import { Habitat } from './habitat';
import { GrowthRate } from './growth-rate';
import { Generation } from './generation';
import { FormDescriptions } from './form-descriptions';
import { FlavorTextEntries } from './flavor-text-entries';
import { EvolutionChain } from './evolution-chain';
import { EggGroup } from './egg-group';
import { Color } from "./color";
import { Genera } from './genera';

export class Species{
  base_happiness: number;
  capture_rate: number;
  color: Color;
  egg_groups: EggGroup[];
  evolution_chain: EvolutionChain;
  evolves_from_species: string;
  flavor_text_entries: FlavorTextEntries[];
  form_descriptions: FormDescriptions[];
  forms_switchable: boolean;
  gender_rate: number;
  genera: Genera[];
  generation: Generation;
  growth_rate: GrowthRate;
  habitat: Habitat;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: Names[];
  order: number;
  pal_park_encounters: PalParkEncounters[];
  pokedex_numbers: PokedexNumbers[];
  shape: Shape;
  varieties: Varieties[];
}
