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

  createForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)] ],
      lastName: ['', Validators.required],
      email: ['',[ Validators.required, Validators.email]]
    });
  }

  toHold(){
    console.log(this.form);
  }
}
