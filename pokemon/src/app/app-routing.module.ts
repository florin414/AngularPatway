import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadingStrategyApp } from './shared/preloading-strategy-app';

const routes: Routes = [
  { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
  {
    path: 'products',
    loadChildren: () =>
      import('.././app/products/product.module').then((m) => m.ProductModule),
    data: { preload: true, delay: 400000 },
  },
  {
    path: 'pokemons',
    loadChildren: () =>
      import('../app/pokemons/pokemon.module').then((m) => m.PokemonModule),
    data: { preload: true, delay: 400000 },
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
