import { Component } from '@angular/core';
import { ListarPokemonsComponent } from "../../component/listar-pokemons/listar-pokemons.component";

@Component({
  selector: 'app-page-listar-pokemons',
  standalone: true,
  imports: [ListarPokemonsComponent],
  templateUrl: './page-listar-pokemons.component.html',
  styleUrl: './page-listar-pokemons.component.css'
})
export class PageListarPokemonsComponent {

}
