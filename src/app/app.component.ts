import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./shared/nav/nav.component";
import { CommonModule } from '@angular/common';
import { UpdatePokemonComponent } from "./components/admin/component/update-pokemon/update-pokemon.component";
import { PagesUpdatePokemonComponent } from "./components/admin/pages/pages-update-pokemon/pages-update-pokemon.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyectoLab4';
}
