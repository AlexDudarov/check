import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {StatisticService} from '../../services/statistic.service';
import {RequestInfoDataSource} from '../../entity/request-info-data-source';
import {MatDialog, MatDialogConfig, MatPaginator, MatSort} from '@angular/material';
import {tap} from 'rxjs/operators';
import {merge} from 'rxjs';
import {RequestInfoFilter} from '../../filters/request-info-filter';
import {ProfilesDialogComponent} from '../profiles-dialog/profiles-dialog.component';
import {RequestInfo} from '../../entity/request-info';

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
  totalCount: number;


  constructor(private statisticService: StatisticService, private dialog: MatDialog) {
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
    this.filter.first = this.paginator.pageIndex;
    this.filter.pageSize = this.paginator.pageSize;
    this.filter.sortOrder = this.sort.direction;
    this.filter.sortField = this.sort.active;
    this.dataSource.loadRequests(this.filter);
    this.statisticService.getTotalCount(this.filter).subscribe( count => this.totalCount = count);
  }

  ngOnInit() {
    this.dataSource = new RequestInfoDataSource(this.statisticService);
    this.filter = new RequestInfoFilter();
    this.filter.first = 0;
    this.filter.pageSize = 10;
    this.dataSource.loadRequests(this.filter);
    this.statisticService.getTotalCount(this.filter).subscribe( count => this.totalCount = count);
  }

  openDialog(request: RequestInfo) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.data = {
      profiles: request.profiles,
    };
    this.dialog.open(ProfilesDialogComponent, dialogConfig);
  }

  onRowClicked(row) {
    console.log('Row clicked: ', row);
  }


}
