import { Component } from '@angular/core';
import { ListMovesComponent } from "../../component/list-moves/list-moves.component";

@Component({
  selector: 'app-page-list-moves',
  standalone: true,
  imports: [ListMovesComponent],
  templateUrl: './page-list-moves.component.html',
  styleUrl: './page-list-moves.component.css'
})
export class PageListMovesComponent {

}
