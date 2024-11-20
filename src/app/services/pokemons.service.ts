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

  getPokemonById(id: String | null ): Observable <Pokemon>{
    return this.http.get<Pokemon>(`${this.urlbase}/${id}` );
  } 

  postPokemon(pokemon: Pokemon): Observable<Pokemon>{
    return this.http.post<Pokemon>(this.urlbase , pokemon);
  }

  putPokemon(pokemon: Pokemon , id: string | null): Observable <Pokemon>{
    return this.http.put<Pokemon>(`${this.urlbase}/${id}`,pokemon);
  }

  deletePokemonById( id: string | null): Observable <void>{
    return this.http.delete<void>(`${this.urlbase}/${id}`);
  }


}
