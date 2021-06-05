import { Pipe, PipeTransform } from '@angular/core';
import { Student } from './student';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(Students: any, searchValue: string): any {
    if (!Students || !searchValue) {
      return Students;
    }
    const asArray = Object.entries(Students);

    const res= asArray.filter(value =>{
      let temp: any= value[1];
     console.log(temp)

     temp.Name.toLowerCase().includes(searchValue.toLowerCase()) ||
     temp.City.toLowerCase().includes(searchValue.toLowerCase()) ||
     temp.State.toLowerCase().includes(searchValue.toLowerCase()) ||
     temp.Pincode.toString().toLowerCase().includes(searchValue.toLowerCase()) ||
     temp.MobileNo.toString().toLowerCase().includes(searchValue.toLowerCase())
    }

    );

   // return Object.fromEntries(res);
    console.log(Object.fromEntries);
    const a: Student =   {
      "Name":"Nnenna",
      "City": "Bauchi",
      "State": "Bauchi",
      "Pincode": 365798,
      "MobileNo": 2348056715
    }
    return a;
  ;

  }

}
