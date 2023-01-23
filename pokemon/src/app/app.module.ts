import { PreloadingStrategyApp } from './shared/preloading-strategy-app';
import { FormsModule } from '@angular/forms';
import { SerachComponent } from './shared/serach/serach.component';
import { HeaderComponent } from './shared/header-component/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './shared/material.module';
import { PokemonModule } from './pokemons/pokemon.module';
import { ProductModule } from './products/product.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, HeaderComponent, SerachComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ProductModule,
    PokemonModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
  ],
  bootstrap: [AppComponent],
  providers: [PreloadingStrategyApp],
})
export class AppModule {}
