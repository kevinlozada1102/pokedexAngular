import {Component, EventEmitter, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pokemon} from "../model/pokemon";

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class PokemonSearchComponent {
  @Output() sendPokemonEvent = new EventEmitter<any>();
  numeroPokedex: number = 1;
  pokemonEncontrado?: Pokemon;

  constructor(private http: HttpClient) {
  }

  buscarPorNumeroPokedex(buscarPorNumeroForm: any) {
    this.http.get(`https://pokeapi.co/api/v2/pokemon/${this.numeroPokedex}`)
      .subscribe(
      (data:any) => {
        console.log(data);
        this.pokemonEncontrado = new Pokemon(data.id, data.name, data.types, data.sprites.front_default, data.sprites.other.home.front_default);
        console.log(this.pokemonEncontrado);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  elegirPokemon(elegirPokemonForm: any) {
    this.sendPokemonEvent.emit(this.pokemonEncontrado);
  }

}

/* Rosaura Cotos Sullon - 20/04/2023 */
