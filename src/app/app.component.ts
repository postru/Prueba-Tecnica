import { Component, OnInit } from '@angular/core';
import {SuperService } from 'src/assets/http/super.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Prueba-Tecnica';
  ArregloSupers: any;
  voto = false;
  registro = true;
  guardar = 0;



 

  constructor(private Heroes: SuperService){
    this.Heroes.getHeroes().subscribe((supers: any) => {
      this.ArregloSupers = supers;
    });
  };
  ngOnInit(){

  }

  like(Super: number){
    this.ArregloSupers[Super-1].like = this.ArregloSupers[Super-1].like + 1;
    this.voto = true;
    this.registro = true;
  }

  dislike(Super: number){
    this.ArregloSupers[Super-1].dislike = this.ArregloSupers[Super-1].dislike + 1;
    this.voto = true;
    this.registro = false;
  }

  votarDenuevo(){
    this.voto = false;
  }



  Supers = [
    {id: 1,
    name: 'SuperMan',
    image: './../../../assets/images/superman.jpeg',
    detalle: 'texto texto texto',
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
