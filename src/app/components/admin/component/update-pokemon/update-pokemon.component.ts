import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { error } from 'console';
import { forEach, update } from 'lodash';
import { nextTick } from 'process';
import { PokemonsService } from '../../../../services/pokemons.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../../../interfaces/pokemon.insterface';


@Component({
  selector: 'app-update-pokemon',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update-pokemon.component.html',
  styleUrl: './update-pokemon.component.css'
})
export class UpdatePokemonComponent implements OnInit{

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe({
      next: (param) =>{
      this.id = param.get('id')
      this.getPokemonById(this.id)
      },
      error: (e: Error)=>{
      console.log( e.message )
      }
    })
  }

  id: string | null = null;

  fb = inject(FormBuilder)
  ps = inject(PokemonsService)
  activateRoute = inject(ActivatedRoute)
  router = inject(Router)


  formulario_update = this.fb.nonNullable.group(
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
  
  getPokemonById(id: string | null){
    this.ps.getPokemonById(id).subscribe(
      {
        next: (pokemon: Pokemon ) => {
          this.formulario_update.controls['id'].setValue(pokemon.id)
          this.formulario_update.controls['name'].setValue(pokemon.name)
          this.formulario_update.controls['type'].setValue(pokemon.type)
          this.formulario_update.controls['HP'].setValue(pokemon.base.HP)
          this.formulario_update.controls['Attack'].setValue(pokemon.base.Attack)
          this.formulario_update.controls['Defense'].setValue(pokemon.base.Defense)
          this.formulario_update.controls['SpAttack'].setValue(pokemon.base.SpAttack)
          this.formulario_update.controls['SpDefense'].setValue(pokemon.base.SpDefense)
          this.formulario_update.controls['Speed'].setValue(pokemon.base.Speed)

        },
        error: ( e : Error)=>{
          console.log(e.message)
        }
      })
  }


  update(){

    if(this.formulario_update.invalid) return

    const prepokemon = this.formulario_update.getRawValue()
    
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

    this.ps.putPokemon(pokemon , this.id ).subscribe(
      {
        next: () =>{
          alert("Actualizando Pokemon...")
          this.router.navigateByUrl("listPokemons")
        },
        error: (e: Error)=>{
          console.log(e.message)
        }
      }
    )

  }
}
