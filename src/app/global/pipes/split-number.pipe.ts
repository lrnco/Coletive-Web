import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitNumber'
})
export class SplitNumberPipe implements PipeTransform {

  transform(value: any, args?: string[]): any {
    let res = [];
    for (let i = 0; i < value; i++) {
        res.push(i);
      }
      return res;
  }

}
