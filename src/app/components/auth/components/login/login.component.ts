import { Component, inject } from '@angular/core';
import { FormBuilder,ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuariosService } from '../../../../services/usuarios.service';
import { Router } from '@angular/router';
import { response } from 'express';

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
        if( response.length > 0 ){
          if( response[0].usuario === 'admin' ){
            localStorage.setItem("tokenAdmin","eyJhbGciOiJIUzI1NiI2")
            alert("logeando Usuario...")
            this.router.navigateByUrl("admin")
          }else{
             localStorage.setItem("token","eyJhbGciOiJIUzI1NiIsInR")
              this.router.navigateByUrl("homeUser")
          }
        }  
      },
      error: (e: Error) =>{
        console.log(e.message)
      }
    })
  }

  getUsuario(){
    
  }
}
