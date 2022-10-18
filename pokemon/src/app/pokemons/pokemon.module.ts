import { DamageWhenAttackedService } from './../services/damage-when-attacked.service';
import { MaterialModule } from './../shared/material.module';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonStatisticsComponent } from './pokemon-detail/pokemon-statistics/pokemon-statistics.component';
import { PokemonProfileComponent } from './pokemon-detail/pokemon-profile/pokemon-profile.component';
import { PokemonEvolutionComponent } from './pokemon-detail/pokemon-evolution/pokemon-evolution.component';
import { PokemonDamageComponent } from './pokemon-detail/pokemon-demage/pokemon-damage.component';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PokemonRoutingModule } from "./pokemon-routing.module";
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EvolutionService } from '../services/evolution.service';
import { ProfileService } from '../services/profile.service';
import { PokemonService } from '../services/pokemon.service';

@NgModule({
  declarations: [
    PokemonDamageComponent,
    PokemonEvolutionComponent,
    PokemonProfileComponent,
    PokemonStatisticsComponent,
    PokemonDetailComponent,
    PokemonListComponent
  ],
  imports: [
    PokemonRoutingModule,
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [
    EvolutionService,
    PokemonService,
    ProfileService,
    DamageWhenAttackedService
  ],
  exports: [RouterModule]
})
export class PokemonModule { }
