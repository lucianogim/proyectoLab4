import { Component } from '@angular/core';
import { AddPokemonComponent } from "../../component/add-pokemon/add-pokemon.component";

@Component({
  selector: 'app-page-add-pokemon',
  standalone: true,
  imports: [AddPokemonComponent],
  templateUrl: './page-add-pokemon.component.html',
  styleUrl: './page-add-pokemon.component.css'
})
export class PageAddPokemonComponent {

}
