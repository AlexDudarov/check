import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {StatisticService} from '../../services/statistic.service';
import {RequestInfoDataSource} from '../../entity/request-info-data-source';
import {MatPaginator, MatSort} from '@angular/material';
import {tap} from 'rxjs/operators';
import {merge} from 'rxjs';
import {RequestInfoFilter} from '../../filters/request-info-filter';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit, AfterViewInit {

  displayedColumns = ['userName', 'login', 'ip', 'searchType', 'parameters', 'searchResultsNumber', 'searchDuration',
    'searchDate', 'profiles'];
  dataSource: RequestInfoDataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  filter: RequestInfoFilter;


  constructor(private statisticService: StatisticService) {
  }

  ngAfterViewInit() {

    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(() => this.loadRequestInfosPage())
      )
      .subscribe();
  }

  loadRequestInfosPage() {
    console.log(this.sort.active);
    this.dataSource.loadRequests(this.filter);
  }

  ngOnInit() {
    this.dataSource = new RequestInfoDataSource(this.statisticService);
    this.filter = new RequestInfoFilter();
    this.dataSource.loadRequests(this.filter);
  }

  onRowClicked(row) {
    console.log('Row clicked: ', row);
  }


}
