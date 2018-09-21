import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {RequestInfoFilter} from '../filters/request-info-filter';
import {catchError, tap} from 'rxjs/operators';
import {RequestInfo} from '../entity/request-info';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class StatisticService {


  private statisticUrl = '/rest/resources/statistic';

  constructor(
    private http: HttpClient,
  ) {
  }

  getRequestInfos(filter: RequestInfoFilter): Observable<RequestInfo[]> {
    return this.http.post<RequestInfo[]>(this.statisticUrl, filter, httpOptions)
      .pipe(
        tap(requests => this.log('fetched heroes')),
        catchError(this.handleError('getHeroes', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
      // this.messageService.add(`HeroService: ${message}`);
    }

}
