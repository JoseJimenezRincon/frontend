import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cmp-databinding',
  templateUrl: './cmp-databinding.component.html',
  styleUrls: ['./cmp-databinding.component.css']
})
export class CmpDatabindingComponent implements OnInit {

  nombre = "Jose";
  activo = false;
  @Input() num = 3;
  @Output('clicado') miEvento = new EventEmitter<string>();

  usuario = {
    nombre: 'AkanThor',
    apellidos: 'Hunter'
  };

  constructor() { }

  ngOnInit() {
  }

  cambiaActivo(){
    this.usuario.nombre += '-';
    this.activo = !this.activo;
    this.miEvento.emit(this.activo?'activo':'inactivo');
  }

}
