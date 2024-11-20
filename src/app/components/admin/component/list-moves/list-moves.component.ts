import { Component, inject, OnInit } from '@angular/core';
import { Moves } from '../../../interfaces/moves.interface';
import { Router } from '@angular/router';
import { MovesService } from '../../../../services/moves.service';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-list-moves',
  standalone: true,
  imports: [],
  templateUrl: './list-moves.component.html',
  styleUrl: './list-moves.component.css'
})
export class ListMovesComponent implements OnInit{
  ngOnInit(): void {
    this.listarMoves();
  }

  listaMoves: Moves [] = []

  movesService = inject(MovesService)
  router = inject(Router)



  listarMoves(){
    this.movesService.getMoves().subscribe(
      {
        next: (moves: Moves[]) =>{
          this.listaMoves = moves  ;
        },
        error: (e : Error)=>{
          console.log(e.message)
        }
      }
    )
  }

  delete(id: string){

  }
}
