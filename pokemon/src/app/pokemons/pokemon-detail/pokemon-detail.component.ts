import { Subscription } from 'rxjs';
import { PokemonService } from './../../services/pokemon.service';
import { PokemonDetails } from 'src/app/models/pokemon/pokemon-details';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css'],
})
export class PokemonDetailComponent implements OnInit {

  pokemonDetails: PokemonDetails | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
      const name = String(this.route.snapshot.paramMap.get('name'));
      if(name){
        this.getPokemonDetail(name);
      }
  }

  getPokemonDetail(name: string):void{
    // this.pokemonService.getPokemonDetailsByName(name).subscribe({
    //   next: pokemon => this.pokemonDetails = pokemon,
    // });
  }

  onBack(): void{
    this.router.navigate(['/pokemons']);
  }

}
