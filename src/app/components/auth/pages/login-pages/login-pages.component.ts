import { Component } from '@angular/core';
import { LoginComponent } from "../../components/login/login.component";


@Component({
  selector: 'app-login-pages',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './login-pages.component.html',
  styleUrl: './login-pages.component.css'
})
export class LoginPagesComponent {

}
