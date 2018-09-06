import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {RequestInfoFilter} from '../filters/request-info-filter';




const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
    'Accept': 'q=0.8;application/json;q=0.9'})
};
@Injectable({
  providedIn: 'root'
})
export class StatisticService {



  private statisticUrl = 'api/statistic';
  constructor(
    private http: HttpClient,
  ) { }

  getRequestInfos(filter: any): Observable<RequestInfo[]> {

  // const headers: HttpHeaders = new HttpHeaders();
  //   let params: HttpParams = new HttpParams();
  //   for (const key in RequestInfoFilter) {
  //     if (filter.hasOwnProperty(key)) {
  //       const val = filter[key];
  //       params = params.append(key, val);
  //     }
  //   }

    // console.log(params);
    const options = '3' ?
      { params: new HttpParams().set('name', '3') } : {};
    return this.http.get<RequestInfo[]>(this.statisticUrl, options);
  }







}
