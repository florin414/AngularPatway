import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PokemonDetailGuard } from "./pokemon-detail/pokemon-detail.guard";
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";

const routes: Routes = [
  { path: '', component: PokemonListComponent },
  { path: 'pokemon/:name',
    canActivate: [ PokemonDetailGuard ],
    component: PokemonDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class PokemonRoutingModule { }
