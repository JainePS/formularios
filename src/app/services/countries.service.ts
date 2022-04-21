import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  answ: any[] = [];

  languagesREST = {
    esp: 'es',
    us: 'en',
    br: 'pt',
  };

  constructor(private http: HttpClient) {}

  getCountries() {
    return this.http
      .get(`https://restcountries.com/v2/lang/${this.languagesREST.br}`)
      .pipe(
        map((response: any) => {
          return response.map((country: { name: any; alpha3Code: any }) => ({
            name: country.name,
            code: country.alpha3Code,
          }));
        })
      );
  }
}
