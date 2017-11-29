import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-cmp-b',
  templateUrl: './cmp-b.component.html',
  styleUrls: ['./cmp-b.component.css']
})
export class CmpBComponent implements OnInit {

  datos= [];
  datoRecibido: string;

  constructor(private datoService : DatosService) { }

  ngOnInit() {
    this.datos = this.datoService.getDatos();
    this.datoService.emisor.subscribe(
      (dato) => this.datoRecibido = dato 
    );
  }

  guardar(dato){
    this.datoService.guardarDatos(dato);
  }

}
