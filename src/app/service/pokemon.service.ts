import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../dto/pokemon';
import { Specie } from '../dto/specie';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor( private httpClient: HttpClient) {

   }

   public getAllPokemons(){
    return this.httpClient.get<Specie[]>(`${environment.urlserver}/get-pokemons`);
   }

   public getInfoPokemon(name: string ){
    return this.httpClient.get<Pokemon>(`${environment.urlserver}/info-pokemon/${name}`);
   }
}
