import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-cmp-a',
  templateUrl: './cmp-a.component.html',
  styleUrls: ['./cmp-a.component.css']
})
export class CmpAComponent implements OnInit {

  datos= [];

  constructor(private datoService : DatosService) { }

  ngOnInit() {
    this.datos = this.datoService.getDatos();
  }

  guardar(dato){
    this.datoService.guardarDatos(dato);
  }

  enviar(dato){
    this.datoService.emiteDato(dato);
  }

}
