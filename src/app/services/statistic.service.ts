import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class StatisticService {

  private statisticUrl = 'api/statistic';
  constructor(
    private http: HttpClient,
  ) { }

  getRequestInfos(): Observable<RequestInfo[]> {
    return this.http.get<RequestInfo[]>(this.statisticUrl);
  }







}
