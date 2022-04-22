import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',

})
export class TemplateComponent implements OnInit {

  user = {
    name:'',
    lastName:'',
    email:'',
    country:'',
    gender:''
  };
  
  countries: any[] = [];

  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.countriesService.getCountries().
         subscribe(countries => {
           this.countries = countries;

           this.countries.unshift({
                          name:'[Select the country]',
                          code: ''})
           return 
                      
         });
  }

  toHold(form: NgForm){
    console.log(form);

    if(form.invalid){
      Object.values(form.controls).forEach( control =>{
        control.markAsTouched()
      });
    };
    console.log(form.controls);
    
    return;
        
  }

}
