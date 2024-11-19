import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuariosService } from '../../../../services/usuarios.service';
import { Usuarios } from '../../../interfaces/usuario.intenface';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-usuarios',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './add-usuarios.component.html',
  styleUrl: './add-usuarios.component.css'
})
export class AddUsuariosComponent {

  fb = inject(FormBuilder)
  usuarioService = inject(UsuariosService)
  router = inject(Router)

  formulario_add = this.fb.nonNullable.group({
    usuario: ['',[Validators.required]],
    password: ['',[Validators.required]],
    id: ['',[Validators.required]]
  }
  )


  addUsuarios(){
    if(this.formulario_add.invalid) return;

    const usuarioNew = this.formulario_add.getRawValue()

    this.usuarioService.postUsuario(usuarioNew).subscribe(
      {
        next: (usuarioNew : Usuarios) => {
          alert("guardando Usuario...")
          this.router.navigateByUrl("/admin")
        },
        error: (e : Error)=> {
          console.log(e.message);
        }
      }
    )

  }

}
