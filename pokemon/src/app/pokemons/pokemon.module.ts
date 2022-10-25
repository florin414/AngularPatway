import { MaterialModule } from './../shared/material.module';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PokemonRoutingModule } from "./pokemon-routing.module";
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PokemonService } from '../services/pokemon.service';
import { PokemonCardComponent } from './pokemon-list/pokemon-card/pokemon-card.component';

@NgModule({
  declarations: [
    PokemonDetailComponent,
    PokemonListComponent,
    PokemonCardComponent
  ],
  imports: [
    PokemonRoutingModule,
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [
    PokemonService
  ],
  exports: [RouterModule]
})
export class PokemonModule { }
