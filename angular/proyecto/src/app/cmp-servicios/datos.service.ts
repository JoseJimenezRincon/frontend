import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from './log.service';

@Injectable()
export class DatosService {

  datos: Array<string> = ['dato1'];
  emisor = new EventEmitter<string>();

  constructor(private logService: LogService) { }

  getDatos(){
    return this.datos;
  }

  emiteDato(dato){
    this.emisor.emit(dato);
  }

  guardarDatos(dato){
    this.logService.escribirEnConsola(dato);
    this.datos.push(dato);
  }

}
