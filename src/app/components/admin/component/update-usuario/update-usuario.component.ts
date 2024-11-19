import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuariosService } from '../../../../services/usuarios.service';
import { Usuarios } from '../../../interfaces/usuario.intenface';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-update-usuario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update-usuario.component.html',
  styleUrl: './update-usuario.component.css'
})
export class UpdateUsuarioComponent implements OnInit{

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      {
        next: (param) =>{
          this.id = param.get('id')
          this.getUsuarioById(this.id)
        },
        error: (e :Error) => {
          console.log(e.message)
        }
      })
  }
  id: string | null = null;


  fb = inject(FormBuilder)
  us = inject(UsuariosService)
  activatedRoute = inject(ActivatedRoute)
  router = inject(Router)



  formulario_update = this.fb.nonNullable.group(
    {
      id: ['',[Validators.required]],
      usuario: ['', [Validators.required]],
      password: ['',[Validators.required]]
    }

  )

  getUsuarioById(id: string | null ){
    this.us.getUsuariosById(id).subscribe(
      {
        next: (usuario: Usuarios) => {
          this.formulario_update.controls['id'].setValue(usuario.id)
          this.formulario_update.controls['usuario'].setValue(usuario.usuario)
          this.formulario_update.controls['password'].setValue(usuario.password)
          
        },
        error: (e : Error)=>{
          console.log(e.message)
        }
      })
  }

  update(){

    if(this.formulario_update.invalid) return;

    const usuario = this.formulario_update.getRawValue()
    
    this.us.putUsuario( usuario , this.id ).subscribe(
      {
        next: () =>{
          alert("Actualizando Usuario...")
          this.router.navigateByUrl("admin")
        }
        ,
      error: (e: Error)=>{
        console.log(e.message)
      }
    }
    )
  }

}
