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
  }

  ngOnInit(): void {}

  get invalidName(){
    return this.form.get('name').invalid && this.form.get('name').touched
  }

  get invalidLastName(){
    return this.form.get('lastName').invalid && this.form.get('lastName').touched
  }

  get invalidEmail(){
    return this.form.get('email').invalid && this.form.get('email').touched
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)] ],
      lastName: ['', Validators.required],
      email: ['',[ Validators.required, Validators.email]],
      adress: this.fb.group({
              state:['',Validators.required],
              city:['', Validators.required]
            })
    });
  }

  toHold(){
    console.log(this.form);

    if(this.form.invalid){
      Object.values(this.form.controls).forEach( (control: any) =>{
        control.markAsTouched()
      });
    };
    return console.log(this.form.controls);
    
    ;
  }
}
