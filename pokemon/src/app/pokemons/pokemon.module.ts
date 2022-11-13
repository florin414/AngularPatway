import { ProgressBarColorDirective } from './../shared/progress-bar-color.directive';
import { ProgressBarComponent } from './../shared/progress-bar/progress-bar.component';
import { BarComponent } from './../shared/bar/bar.component';
import { PageNotFoundComponent } from './../shared/page-not-found/page-not-found.component';
import { LoaderComponent } from './../shared/loader-component/loader.component';
import { MaterialModule } from './../shared/material.module';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PokemonService } from '../services/pokemon.service';
import { PokemonCardComponent } from './pokemon-list/pokemon-card/pokemon-card.component';
import { PokemonStatisticsComponent } from './pokemon-detail/pokemon-statistics/pokemon-statistics.component';
import { PokemonProfileComponent } from './pokemon-detail/pokemon-profile/pokemon-profile.component';
import { PokemonEvolutionComponent } from './pokemon-detail/pokemon-evolution/pokemon-evolution.component';
import { PokemonDamageComponent } from './pokemon-detail/pokemon-damage/pokemon-damage.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from '../shared/interceptor/loader.interceptor';
@NgModule({
  declarations: [
    PokemonDetailComponent,
    PokemonListComponent,
    PokemonCardComponent,
    PokemonStatisticsComponent,
    PokemonProfileComponent,
    PokemonEvolutionComponent,
    PokemonDamageComponent,
    LoaderComponent,
    PageNotFoundComponent,
    BarComponent,
    ProgressBarComponent,
    ProgressBarColorDirective
  ],
  imports: [
    PokemonRoutingModule,
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  providers: [
    PokemonService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
  ],
  exports: [RouterModule],
})
export class PokemonModule {}
