import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCmpDirectives]'
})
export class CmpDirectivesDirective {

  @Input('appCmpDirectives') colorFondo = 'green';
  colorInicial = 'white';
  colorMarcado: string;

  constructor() { }

  @HostListener('mouseenter') onMouseEnter(){
    this.colorMarcado = this.colorFondo;
  }  
  @HostListener('mouseout') onMouseOut(){
    this.colorMarcado = this.colorInicial;
  }  
  @HostBinding('style.backgroundColor') get getColor(){
    return this.colorMarcado;
  }  

}
