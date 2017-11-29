import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doble'
})
export class DoblePipe implements PipeTransform {

  transform(value: any, args?: any): number {  //Args no es un array
    return value*2 + args;
  }

}
