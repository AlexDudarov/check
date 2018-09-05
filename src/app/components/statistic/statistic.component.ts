import { Component, OnInit } from '@angular/core';
import {StatisticService} from '../../services/statistic.service';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {

  displayedColumns = ['userName', 'login', 'ip', 'searchType', 'parameters', 'searchResultsNumber', 'searchDuration',
    'searchDate', 'profiles' ];
  dataSource;
  constructor(private statisticService: StatisticService) { }


  ngOnInit() {
    this.getRequestInfos();
  }

  getRequestInfos(): void {
    this.dataSource = this.statisticService.getRequestInfos().subscribe(requestInfos => this.dataSource = requestInfos);
  }

}
