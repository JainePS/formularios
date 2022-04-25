import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

interface ErroValidate {
  [s:string]: boolean | null;
}

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() {}

  userExists(control: FormControl): Promise<ErroValidate | null> | Observable<ErroValidate>{

    if(!control.value){
      return Promise.resolve(null);
    }

    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        if(control.value === 'stride'){
          resolve ({exists: true})
        } else{
          resolve( null );
        }
      }, 2500)


    });

  }

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


