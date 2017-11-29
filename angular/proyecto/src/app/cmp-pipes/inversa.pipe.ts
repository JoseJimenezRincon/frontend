import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inversa'
})
export class InversaPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    var x = value.length;
    var cadenaInvertida = "";
     
    while (x>=0) {
      cadenaInvertida = cadenaInvertida + value.charAt(x);
      x--;
    }
    return cadenaInvertida;
  }

}
