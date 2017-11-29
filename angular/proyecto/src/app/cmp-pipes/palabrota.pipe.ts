import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'palabrota'
})
export class PalabrotaPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    let resultado = value;
    for (let palabra of args){
      let regexp = new RegExp(palabra, 'gi');
      resultado = resultado.replace(regexp,'*****')
    }

    return resultado;
  }

}
