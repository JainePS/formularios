import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() {}

  noSantos( control: FormControl ): any{
    if( control.value?.toLowerCase().trim() === 'santos'){
      return{
        noSantos: true
      }
      
    }
      return null;
  }
}
