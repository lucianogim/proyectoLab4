import { Component, inject} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MovesService } from '../../../../services/moves.service';

@Component({
  selector: 'app-add-moves',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-moves.component.html',
  styleUrl: './add-moves.component.css'
})
export class AddMovesComponent{
  
fb = inject(FormBuilder)
movesService = inject(MovesService)
router = inject(Router)

formulario_add = this.fb.nonNullable.group(
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


addMove(){
  if(this.formulario_add.invalid) return;

  const move = this.formulario_add.getRawValue()

  this.movesService.postMove(move).subscribe(
    {
      next: () => {
        alert("Agregando Movimiento...")
        this.router.navigateByUrl("listMoves")
      },
      error: (e : Error) => {
        console.log(e.message)
      }
    }
  )
}


}
