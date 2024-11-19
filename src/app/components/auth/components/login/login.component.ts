import { Component, inject } from '@angular/core';
import { FormBuilder,ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuariosService } from '../../../../services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  fb = inject(FormBuilder)
  usuarioService = inject(UsuariosService)
  router = inject(Router)

  formulario_login = this.fb.nonNullable.group({
    usuario: ['',[Validators.required]],
    password: ['',[Validators.required]]
  })

  loginUsuario(){

    if(this.formulario_login.invalid) return;

    const usuario = this.formulario_login.getRawValue()

    this.usuarioService.loginUsuario(usuario.usuario , usuario.password).subscribe({
      next: (response) =>{
        alert("logeando Usuario...")
        if(response.usuario == "admin" )
          localStorage.setItem(  )
        this.router.navigateByUrl("admin")
      }
    })


    console.log(usuario)
  }

  getUsuario(){
    
  }

}
