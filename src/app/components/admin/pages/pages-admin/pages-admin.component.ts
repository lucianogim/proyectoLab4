import { Component } from '@angular/core';
import { ListarUsuariosComponent } from "../../component/listar-usuarios/listar-usuarios.component";

@Component({
  selector: 'app-pages-admin',
  standalone: true,
  imports: [ListarUsuariosComponent],
  templateUrl: './pages-admin.component.html',
  styleUrl: './pages-admin.component.css'
})
export class PagesAdminComponent {

}
