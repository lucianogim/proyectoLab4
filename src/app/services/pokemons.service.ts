import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../components/interfaces/pokemon.insterface';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http:HttpClient) { }

  urlbase= "http://localhost:4000/pokemons"

  getPokemons(): Observable <Pokemon[]>{
    return this.http.get<Pokemon[]>(this.urlbase);
  }



}
