import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'pokemons',
    loadChildren: () =>
      import('../app/pokemons/pokemon.module').then((m) => m.PokemonModule),
  },
  { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
  {
    path: 'products',
    loadChildren: () =>
      import('.././app/products/product.module').then((m) => m.ProductModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
