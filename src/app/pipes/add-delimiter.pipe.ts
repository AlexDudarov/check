import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addDelimiter'
})
export class AddDelimiterPipe implements PipeTransform {

  transform(value: string[], delimiter: string): string {
   let result = '';
    value.forEach(function (part, index, array) {
      if (!(!value || /^\s*$/.test(part))) {
        result = result + part + delimiter;
      }
    });
    return result;
  }

}
