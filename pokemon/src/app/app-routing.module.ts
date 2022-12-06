import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadingStrategyApp } from './shared/preloading-strategy-app';

const routes: Routes = [
  {
    path: 'pokemons',
    loadChildren: () =>
      import('../app/pokemons/pokemon.module').then((m) => m.PokemonModule),
    data: { applyPreload: true },
  },
  { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
  {
    path: 'products',
    loadChildren: () =>
      import('.././app/products/product.module').then((m) => m.ProductModule),
    data: { applyPreload: true },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadingStrategyApp,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
