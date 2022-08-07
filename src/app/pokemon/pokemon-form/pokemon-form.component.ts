import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {

  @Input() pokemon: Pokemon;
  types: string[];

  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit() {
    this.types = this.pokemonService.getPokemonTypeList();
  }

  hasType(type: string): Boolean {
    return this.pokemon.types.includes(type);
  }

  selectType($event: Event, type: string): void {
    const el = $event.target as HTMLInputElement

    if (el.checked) {
      this.pokemon.types.push(type)
    } else {
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1);
    }
  }

  isTypesValid(type: string): boolean {
    // this.pokemon.types.length == 0 || this.pokemon.types.length > 3 ? true : false;

    if (this.pokemon.types.length == 1 && this.hasType(type)) {
      return false;
    } 

    if (this.pokemon.types.length > 2 && !this.hasType(type)) {
      return false;
    } 

    return true
  }

  onSubmit() {
    console.log('Form submitted!');
    this.router.navigate(['/pokemon', this.pokemon.id]);
  }

}
