import { Component } from '@angular/core';
import { AddUsuariosComponent } from "../../component/add-usuarios/add-usuarios.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pages-admin-add-usuario',
  standalone: true,
  imports: [AddUsuariosComponent,RouterModule],
  templateUrl: './pages-admin-add-usuario.component.html',
  styleUrl: './pages-admin-add-usuario.component.css'
})
export class PagesAdminAddUsuarioComponent {

}
