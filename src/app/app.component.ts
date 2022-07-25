import { Component, OnInit } from '@angular/core';
import {SuperService } from 'src/assets/http/super.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Prueba-Tecnica';
  ArregloHeroes: any;
  Votado = false;
  Gusto = true;


 

  constructor(private Heroes: SuperService){
    this.Heroes.getHeroes().subscribe((heroes: any) => {
      this.ArregloHeroes = heroes;
      console.log(heroes)
    });
  };

  ngOnInit(){

  }

  like(Hero: number){
    console.log(Hero)
    this.ArregloHeroes[Hero-1].like = this.ArregloHeroes[Hero-1].like + 1;
    this.Votado = true;
    this.Gusto = true;
  }

  dislike(Hero: number){
    console.log(Hero)
    this.ArregloHeroes[Hero-1].dislike = this.ArregloHeroes[Hero-1].dislike + 1;
    this.Votado = true;
    this.Gusto = false;
  }

  votarDenuevo(){
    this.Votado = false;
  }



  Supers = [
    {id: 1,
    name: 'SuperMan',
    image: './../../../assets/images/superman.jpeg',
    detalle: ' El hombre que fue mordido por una araña',
    like: 64,
    dislike: 36},

    {id: 2,
    name: 'Thor',
    image: './../../../assets/images/thor.jpg',
    detalle: 'texto texto texto',
    like: 36,
    dislike: 64},

    {id: 3,
    name: 'Batman',
    image: './../../../assets/images/batma.jpg',
    detalle: 'texto texto texto',
    like: 36,
    dislike: 64},

    {id: 4,
    name: 'Spiderman',
    image: './../../../assets/images/spiderman.jpg',
    detalle: 'texto texto texto',
    like: 64,
    dislike: 36},

    {id: 5,
    name: 'IronMan',
    image: './../../../assets/images/iro.jpg',
    detalle: 'texto texto texto',
    like: 88,
    dislike: 12}
  ];

}
