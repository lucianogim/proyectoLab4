import { Component } from '@angular/core';
import { AddMovesComponent } from "../../component/add-moves/add-moves.component";

@Component({
  selector: 'app-page-add-moves',
  standalone: true,
  imports: [AddMovesComponent],
  templateUrl: './page-add-moves.component.html',
  styleUrl: './page-add-moves.component.css'
})
export class PageAddMovesComponent {

}
