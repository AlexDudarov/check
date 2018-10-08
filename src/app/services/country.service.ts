import {Injectable} from '@angular/core';
import {Country} from '../entity/country';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private countiesUrl = '/rest/resources/country';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Country[]> {
    return this.http.get<string[]>(this.countiesUrl + '/all').pipe(
      map(value => value.map(function (el) {
        return new Country(el);
      }))
    );
  }
}
