import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-pipes',
  templateUrl: './cmp-pipes.component.html',
  styleUrls: ['./cmp-pipes.component.css']
})
export class CmpPipesComponent implements OnInit {

  texto = 'Winter is coming...';
  num = 10;
  fecha = new Date(1994,6,22);
  mascotas = ['Akan','perro','canario'];
  
  addMascota(mascota){
    this.mascotas.push(mascota);
  }

  constructor() { }

  ngOnInit() {
  }

}
