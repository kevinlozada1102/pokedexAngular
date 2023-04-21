import {Component, Input} from '@angular/core';
import {Pokemon} from "../model/pokemon";

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent {
  @Input() pokemon?:any;
  equipoPokemon:Pokemon[]= [];

  ngOnChanges() {
    if (this.pokemon) {
      if (this.equipoPokemon.length < 6) {
        this.equipoPokemon.push(this.pokemon);
      }
    }
  }

}

/* Rosaura Cotos Sullon - 20/04/2023 */
