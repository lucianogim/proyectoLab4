import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../components/auth/service/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit{
  ngOnInit(): void {
    if(localStorage.getItem("tokenAdmin")){

    }
  } 
  authservice = inject(AuthService) 
  router = inject(Router)

  cerrarSession(){
    localStorage.clear()
    this.authservice.logOut()
    this.router.navigateByUrl("")
  }
}
