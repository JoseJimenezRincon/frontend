import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject'

@Injectable()
export class UsuarioService {
  usuarioActivado = new Subject();
}
