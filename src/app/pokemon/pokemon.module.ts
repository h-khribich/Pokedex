import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PokemonDetailComponent } from "./pokemon-detail/pokemon-detail.component";
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";
import { BorderCardDirective } from "./border-card.directive";
import { PokemonTypeColorPipe } from "./pokemon-type-color.pipe";
import { RouterModule, Routes } from "@angular/router";
import { PokemonService } from "./pokemon.service";
import { FormsModule } from "@angular/forms";
import { PokemonFormComponent } from "./pokemon-form/pokemon-form.component";
import { EditPokemonComponent } from "./edit-pokemon/edit-pokemon.component";
import { AddPokemonComponent } from "./add-pokemon/add-pokemon.component";
import { SearchPokemonComponent } from "./search-pokemon/search-pokemon.component";
import { PkmnLoaderComponent } from "./pkmn-loader/pkmn-loader.component";
import { AuthGuard } from "../auth.guard";

const pokemonRoutes: Routes = [
  {
    path: "pokemon/edit-pokemon/:id",
    component: EditPokemonComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "pokemon/add-pokemon",
    component: AddPokemonComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "pokemon-list",
    component: PokemonListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "pokemon/:id",
    component: PokemonDetailComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [
    PokemonDetailComponent,
    PokemonListComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonFormComponent,
    EditPokemonComponent,
    AddPokemonComponent,
    SearchPokemonComponent,
    PkmnLoaderComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(pokemonRoutes)],
  providers: [PokemonService],
})
export class PokemonModule {}
