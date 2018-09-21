import {DataSource, CollectionViewer} from '@angular/cdk/collections';
import {RequestInfo} from './request-info';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {StatisticService} from '../services/statistic.service';
import {catchError, finalize} from 'rxjs/operators';
import {RequestInfoFilter} from '../filters/request-info-filter';

export class RequestInfoDataSource implements DataSource<RequestInfo> {

  private requestsSubject = new BehaviorSubject<RequestInfo[]>([]);
  private loadingRequests = new BehaviorSubject<boolean>(false);

  constructor(private statisticService: StatisticService) {

  }

  connect(collectionViewer: CollectionViewer): Observable<RequestInfo[]> {
    return this.requestsSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.requestsSubject.complete();
    this.loadingRequests.complete();
  }

  loadRequests(filter: RequestInfoFilter) {
    this.loadingRequests.next(true);
    this.statisticService.getRequestInfos(filter)
      .pipe(
        // catchError(() => of<RequestInfo[]>()),
        finalize(() => this.loadingRequests.next(false))
      )
      .subscribe(requests => this.requestsSubject.next(requests));
  }

}
