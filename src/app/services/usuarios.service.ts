import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarios } from '../components/interfaces/usuario.intenface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  urlbase = "http://localhost:4000/usuarios"

  getUsuarios(): Observable<Usuarios[]>{
    return this.http.get<Usuarios[]>(this.urlbase)
  }

  getUsuariosById(id: string | null): Observable<Usuarios>{
    return this.http.get<Usuarios>( `${this.urlbase}/${id}`  );
  }

  postUsuario(usuario:Usuarios): Observable<Usuarios>{
    return this.http.post<Usuarios>(this.urlbase,usuario);
  }

  putUsuario(usuario: Usuarios , id: string | null): Observable<Usuarios>{
    return this.http.put<Usuarios>( `${this.urlbase}/${id}`,usuario);
  }
  
  deleteUsuarioById(id: string | null): Observable<void>{
    return this.http.delete<void>(`${this.urlbase}/${id}`);
  }

  loginUsuario(usuario:string , password:string ): Observable<any>{
    return this.http.get<any>(`${this.urlbase}?usuario=${usuario}&password=${password}`)
  }
}