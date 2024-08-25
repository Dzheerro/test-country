import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { CountryModel } from '../models/country.model';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {
  constructor(private http: HttpClient) {}

  api: string = environment.APIURL;

  getCountryByCode(countryCode: string): Observable<CountryModel> {
    return this.http.get<CountryModel>(`${this.api}api/v3/CountryInfo/${countryCode}`);
  }
}
