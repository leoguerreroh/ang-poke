import { Component, OnInit } from '@angular/core';
import { PokemonService } from './service/pokemon.service';
import { Specie } from './dto/specie'
import { Pokemon } from './dto/pokemon';
import { MatDialog } from '@angular/material/dialog';
import { DetalleDialogComponent } from './dialog/detalle-dialog/detalle-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  title = 'pokemon';

  pokemons:Specie[];
  pokemon:Pokemon;

  displayedColumns = ['name','ver'];

  expandedElement: any | null;

  constructor(private pokemonservice: PokemonService,
              private dialog:MatDialog){
    this.pokemon = new Pokemon();
  }

  ngOnInit(): void {
    this.pokemonservice.getAllPokemons().subscribe(response => {
      this.pokemons = response;
    });
  }

  getPokemon(name:string){
    this.pokemonservice.getInfoPokemon(name).subscribe(response =>{
        this.dialog.open(DetalleDialogComponent,{
          data:response
        })
    });
  }

}

