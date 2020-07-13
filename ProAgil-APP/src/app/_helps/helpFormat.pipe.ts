import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Constants } from '../util/Constants';

@Pipe({
  name: 'DateTimeFormatBr'
})
export class HelpFormatPipe extends DatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return super.transform(value, Constants.DATETIME_FMT_BR);
  }

}

@Pipe({
  name: 'DateFormatBr'
})
export class DateTimeFormatPipe extends DatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return super.transform(value, Constants.DATE_FMT_BR);
  }
}
