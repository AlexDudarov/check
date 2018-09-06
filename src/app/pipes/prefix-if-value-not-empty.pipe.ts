import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'prefixIfValueNotEmpty'
})
export class PrefixIfValueNotEmptyPipe implements PipeTransform {

  transform(value, prefix: string): string {
    if (!value || /^\s*$/.test(value)) {
      return value;
    } else {
      return prefix + value;
    }

  }

}
