import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Moves } from '../components/interfaces/moves.interface';

@Injectable({
  providedIn: 'root'
})
export class MovesService {

  constructor(private http:HttpClient) { }

  urlbase="http://localhost:4001/moves"

  getMoves(): Observable <Moves[]>{
    return this.http.get<Moves[]>(this.urlbase);
  }

  getMoveById(id:string|null):Observable<Moves>{
    return this.http.get<Moves>(`${this.urlbase}/${id}`);
  }

  postMove(move : Moves ) :Observable <Moves>{
    return this.http.post<Moves>(this.urlbase, move);
  }

  putMove(move: Moves , id : string | null):Observable <Moves>{
    return this.http.put<Moves>(`${this.urlbase}/${id}`,move);
  }

  deleteMove(id: string): Observable<void>{
    return this.http.delete<void>(`${this.urlbase}/${id}`);
  }

}
