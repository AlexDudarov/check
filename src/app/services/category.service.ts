import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Category} from '../entity/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {



  private categoriesUrl = '/rest/resources/category';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Category[]> {
    return this.http.get<string[]>(this.categoriesUrl + '/all').pipe(
      map(value => value.map(function (el) {
        return new Category(el);
      }))
    );
  }
}
