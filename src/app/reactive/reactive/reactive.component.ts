import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
})
export class ReactiveComponent implements OnInit {
  form: FormGroup | any;

  constructor(private fb: FormBuilder) {
    this.createForm();
    this.toChargeFormData();
  }

  ngOnInit(): void {}

  get hobby(){
    return this.form.get('hobby');
  }

  get invalidName(){
    return this.form.get('name').invalid && this.form.get('name').touched
  }

  get invalidLastName(){
    return this.form.get('lastName').invalid && this.form.get('lastName').touched
  }

  get invalidEmail(){
    return this.form.get('email').invalid && this.form.get('email').touched
  }

  get invalidState(){
    return this.form.get('adress.state').invalid && this.form.get('adress.state').touched
  }

  get invalidCity(){
    return this.form.get('adress.city').invalid && this.form.get('adress.city').touched
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)] ],
      lastName: ['', Validators.required],
      email: ['',[ Validators.required, Validators.email]],
      adress: this.fb.group({
              state:['',Validators.required],
              city:['', Validators.required]
            }),
      hobby:this.fb.array([])
    });
  }

  toChargeFormData(){
    // this.form.setValue({
    this.form.reset({
      name: '',
      lastName: '',
      email: '',
      adress: {
        state: '',
        city:''
      }
    });

    this.form.reset();
  }

  addHobby(){
   this.hobby.push( this.fb.control('')); 
  }
  deleteHobby(i: number){
    this.hobby.removeAt(i);

  }
  toHold(){
    console.log(this.form);

    if(this.form.invalid){
      Object.values(this.form.controls).forEach( (control: any) =>{
       
        if(control instanceof FormGroup){

          Object.values(control.controls).forEach( (control: any) =>{
           control.markAsTouched()})
          }
           else {
            control.markAsTouched()
          }
        
        
      });
    };
    return console.log(this.form.controls);
    
    ;
  }
  
}
