import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
  title = "Liste de Pokémon";
  pokemonList: Pokemon[] = POKEMONS;
  selectedPokemon: Pokemon|undefined;

  ngOnInit(): void {
    console.log(this.pokemonList);
  }

  selectPokemon(pokemonId: string): void {
    const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);

    if (pokemon) {
      console.log(`Vous avez demandé ${pokemon?.name}.`)
      this.selectedPokemon = pokemon;
    } else {
      console.log(`Vous avez demandé un pokémon qui n'existe pas.`);
    }
  }
}
