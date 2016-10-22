import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    //console.log(args)
    var limit = (args ) ? parseInt(args): 50
     if(value)
      return value.substring(0,limit)+ "...";
  }

}
