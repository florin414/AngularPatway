import { Types } from './pokemon-details-models/types';
import { Sprite } from './pokemon-details-models/sprite';
import { Specy } from './pokemon-details-models/specy';
import { PastType } from './pokemon-details-models/past_type';
import { HeldItem } from './pokemon-details-models/held_item';
import { Form } from "@angular/forms";
import { GameIndex } from "./pokemon-details-models/game-index";
import { Moves } from './pokemon-details-models/moves';
import { Abilities } from './pokemon-details-models/abilities';
import { Stats } from './pokemon-details-models/stats';

export class PokemonDetails{
  abilities: Abilities[] = [];
  base_experience: number = 0;
  forms: Form[] = [];
  game_indices: GameIndex[] = [];
  height: number = 0;
  held_items: HeldItem[] = [];
  id: number = 0;
  isDefault: boolean = false;
  location_area_encounters: string = '';
  moves: Moves[] = [];
  name: string = '';
  order: number = 0;
  past_types: PastType[] = [];
  species!: Specy;
  sprites!: Sprite;
  stats: Stats[] = [];
  types: Types[] = [];
  weight: number = 0;
}
