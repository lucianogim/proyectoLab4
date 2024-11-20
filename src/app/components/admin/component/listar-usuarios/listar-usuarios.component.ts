import { Component, inject, OnInit } from '@angular/core';
import { Usuarios } from '../../../interfaces/usuario.intenface';
import { UsuariosService } from '../../../../services/usuarios.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-listar-usuarios',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './listar-usuarios.component.html',
  styleUrl: './listar-usuarios.component.css'
})
export class ListarUsuariosComponent implements OnInit{

  ngOnInit(): void {
    this.listarUsuarios();
    
  }

  listaUsuarios : Usuarios[] = []

  usuariosService = inject(UsuariosService)
  router = inject(Router)

  listarUsuarios(){
    this.usuariosService.getUsuarios().subscribe(
      {
        next: (usuarios : Usuarios[] ) => {
          this.listaUsuarios = usuarios
        }
      }
    )
  }

  delete(id: string){
    this.usuariosService.deleteUsuarioById(id).subscribe(
      {
        next:() =>{

          alert("usuario eliminado...")
          window.location.reload()
        },
        error: (e: Error)=>{
          console.log(e.message);
        }
    }
  )
  }
}
