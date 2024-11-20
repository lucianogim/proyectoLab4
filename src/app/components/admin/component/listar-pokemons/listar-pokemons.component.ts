import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Pokemon } from '../../../interfaces/pokemon.insterface';
import { PokemonsService } from '../../../../services/pokemons.service';

@Component({
  selector: 'app-listar-pokemons',
  standalone: true,
  imports: [RouterModule ],
  templateUrl: './listar-pokemons.component.html',
  styleUrl: './listar-pokemons.component.css'
})
export class ListarPokemonsComponent implements OnInit{

  ngOnInit(): void {
    this.listarPokemons();
  }

  listaPokemons: Pokemon [] = []

  pokemonsService = inject(PokemonsService)
  router = inject(Router)


  listarPokemons(){
    this.pokemonsService.getPokemons().subscribe(
      {
        next: (pokemons: Pokemon[])=>{
          this.listaPokemons 


        }  
      }
    )

  }

  delete(id:string){

  }


}
