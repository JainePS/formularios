import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


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

  equalPassords(password1: string, password2: string, ){
    return (formGroup: FormGroup) => {

      
      const pass1Control = formGroup.controls[password1];
      const pass2Control = formGroup.controls[password2];

      if(pass1Control.value === pass2Control.value){
        pass2Control.setErrors(null)
        } else{
        pass2Control.setErrors((isntEqual: any)=> true)

      }

    }
  }

}


