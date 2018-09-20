import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {RequestInfoFilter} from '../filters/request-info-filter';
import {RequestFilter} from '../entity/request-filter';




const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class StatisticService {



  private statisticUrl = '/rest/resources/statistic';
  constructor(
    private http: HttpClient,
  ) { }

  getRequestInfos(filter: any): Observable<RequestInfo[]> {
    return this.http.post<RequestInfo[]>(this.statisticUrl, new RequestFilter('aaa', 'vvv', 'dddd'), httpOptions);
  }


  createParamsFomFilter( filter: RequestInfoFilter): HttpParams {


  const params = new HttpParams();
  return params;
  }






}
