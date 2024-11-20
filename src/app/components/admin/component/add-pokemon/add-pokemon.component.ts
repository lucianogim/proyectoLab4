import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PokemonsService } from '../../../../services/pokemons.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-pokemon',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-pokemon.component.html',
  styleUrl: './add-pokemon.component.css'
})
export class AddPokemonComponent {

  fb = inject(FormBuilder)
  pokemonService = inject(PokemonsService)
  router = inject(Router)


  formulario_add = this.fb.nonNullable.group(
    {
     id: ['',[Validators.required]],
     name: ['',[Validators.required]],
     type: [<string[]>[],[Validators.required]],
     HP: [ 0 , [Validators.required]],
     Attack: [ 0 , [Validators.required]],
     Defense: [ 0 , [Validators.required]],
     SpAttack: [ 0 , [Validators.required]],
     SpDefense: [ 0 , [Validators.required]],
     Speed: [ 0 , [Validators.required]]
     
    }
  )


  addPokemon(){
    if(this.formulario_add.invalid) return;

    const prepokemon = this.formulario_add.getRawValue()

    const baseStats = {
      HP: prepokemon.HP ,
      Attack: prepokemon.Attack,
      Defense: prepokemon.Defense,
      SpAttack: prepokemon.SpAttack,
      SpDefense: prepokemon.SpDefense,
      Speed: prepokemon.Speed
    }

    const pokemon = {
      id: prepokemon.id,
      name: prepokemon.name,
      type: prepokemon.type,
      base: baseStats
    }

    this.pokemonService.postPokemon(pokemon).subscribe(
      {
        next: () => {
          alert("Agregando nuevo pokemon...")
          this.router.navigateByUrl("listPokemons")
        },
        error: (e :Error)=>{
          console.log(e.message)
        }
    })


  }
}
