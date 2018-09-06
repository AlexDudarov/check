import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addDelimiter'
})
export class AddDelimiterPipe implements PipeTransform {

  transform(array: string[], delimiter: string): string {
    let result = '';
    for (let i = 0; i < array.length; i++) {
      if (array[i] && !(/^\s*$/.test(array[i]))) {
        if (result) {
          result += delimiter;
        }
        result += array[i];
      }
    }
    return result;
  }

}
