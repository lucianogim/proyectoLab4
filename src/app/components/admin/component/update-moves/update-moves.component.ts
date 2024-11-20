import { Component, effect, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MovesService } from '../../../../services/moves.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Moves } from '../../../interfaces/moves.interface';

@Component({
  selector: 'app-update-moves',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update-moves.component.html',
  styleUrl: './update-moves.component.css'
})
export class UpdateMovesComponent implements OnInit{

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(
      {
        next:(param)=>{
          this.id = param.get('id')
          this.getMovesById(this.id)
        }
      }
    )
  }

  id: string | null = null;

  fb = inject(FormBuilder)
  movesService = inject(MovesService)
  activateRoute = inject(ActivatedRoute)
  router = inject(Router)


  formulario_update = this.fb.nonNullable.group(
    {
      id: ['',[Validators.required]],
      name: ['',[Validators.required]],
      type: ['',[Validators.required]],
      category: ['',[Validators.required]],
      power: [ 0 ,[Validators.required]],
      accuracy: [ 0 ,[Validators.required]],
      pp: [0 ,[Validators.required]],
      effect: [0, [Validators.required]]

    }
  )


  getMovesById(id: string | null){
    this.movesService.getMoveById(id).subscribe(
      {
        next: (moves : Moves )  =>  {

          this.formulario_update.controls['id'].setValue(moves.id)
          this.formulario_update.controls['name'].setValue(moves.name)
          this.formulario_update.controls['type'].setValue(moves.type)
          this.formulario_update.controls['category'].setValue(moves.category)
          this.formulario_update.controls['accuracy'].setValue(moves.accuracy)
          this.formulario_update.controls['power'].setValue(moves.power)
          this.formulario_update.controls['effect'].setValue(moves.effect)
        
        },
        error: (e : Error) => {
          console.log(e.message)
        }
      }
    )
  }

  update(){

    if(this.formulario_update.invalid) return

    const move = this.formulario_update.getRawValue()

    this.movesService.putMove(move, this.id ).subscribe(
      {
        next: () =>{
          alert("movimiento actualizado...")
          this.router.navigateByUrl("listMoves")
        },
        error: (e: Error) => {
          console.log(e.message)
        }
      }
    )
  }

}
