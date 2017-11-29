import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';


@Component({
  selector: 'app-cmp-observables',
  templateUrl: './cmp-observables.component.html',
  styleUrls: ['./cmp-observables.component.css']
})
export class CmpObservablesComponent implements OnInit {

  usuario1Activo= false;
  usuario2Activo= false;

  constructor(private servicioUsuario: UsuarioService) { }

  ngOnInit() {
    this.servicioUsuario.usuarioActivado.subscribe(
      (id) => {
        if (id==1){
          this.usuario1Activo = !this.usuario1Activo;
        } else if (id==2){
          this.usuario2Activo = !this.usuario2Activo;
        }
      }
    );
  }

}
