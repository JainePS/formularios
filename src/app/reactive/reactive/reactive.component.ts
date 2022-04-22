import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
      name: [''],
      lastName: [''],
      email: [''],
    });

    return this.form;
  }

  toHold(){
    console.log(this.form);
  }
}
