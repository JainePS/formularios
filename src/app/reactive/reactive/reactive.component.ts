import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/services/validators.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
})
export class ReactiveComponent implements OnInit {
  form: FormGroup | any;

  constructor(private fb: FormBuilder,
              private validators: ValidatorsService) {
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

  get invalidPass1(){
    return this.form.get('pass1').invalid && this.form.get('pass1').touched
  }

  get invalidPass2(){
    const pass1 = this.form.get('pass1').value;
    const pass2 = this.form.get('pass2').value;

    return (pass1 === pass2) ? false: true;
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)] ],
      lastName: ['', [Validators.required, this.validators.noSantos ]],
      email: ['',[ Validators.required, Validators.email]],
      pass1: ['', Validators.required],
      pass2: ['', Validators.required],
      adress: this.fb.group({
              state:['',Validators.required],
              city:['', Validators.required]
            }),
      hobby:this.fb.array([])
    },{
      validators: this.validators.equalPassords('pass1','pass2')
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
