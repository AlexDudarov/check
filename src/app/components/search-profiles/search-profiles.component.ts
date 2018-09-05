import {Component, OnInit, ViewChild} from '@angular/core';
import {CompactProfile} from '../../entity/compact-profile';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';



const profiles: CompactProfile[] = [
  new CompactProfile('AAA', 'VIP'),
  new CompactProfile('BBB', 'PEP'),
  new CompactProfile('BBB', 'PEP'),
  new CompactProfile('BBB', 'PEP'),
  new CompactProfile('AAA', 'VIP'),
  new CompactProfile('BBB', 'PEP'),
  new CompactProfile('BBB', 'PEP'),
  new CompactProfile('BBB', 'PEP'),
  new CompactProfile('AAA', 'VIP'),
  new CompactProfile('BBB', 'PEP'),
  new CompactProfile('BBB', 'PEP'),
  new CompactProfile('BBB', 'PEP'),
  new CompactProfile('AAA', 'VIP'),
  new CompactProfile('BBB', 'PEP'),
  new CompactProfile('BBB', 'PEP'),
  new CompactProfile('BBB', 'PEP'),
];

@Component({
  selector: 'app-search-profiles',
  templateUrl: './search-profiles.component.html',
  styleUrls: ['./search-profiles.component.css']
})
export class SearchProfilesComponent implements OnInit {

  profiles: CompactProfile[];
  displayedColumns: string[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource:  MatTableDataSource<CompactProfile>;

  constructor() {
  }

  ngOnInit() {
    this.profiles = this.getProfiles();
    this.displayedColumns = this.getDisplayedColumns();
    this.dataSource = new MatTableDataSource<CompactProfile>(this.getProfiles());
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getProfiles(): CompactProfile[] {
    console.log(profiles);
    return profiles;

  }

  getDisplayedColumns(): string[] {
    return ['name', 'categories'];
  }

  onRowClicked(row) {
    console.log('Row clicked: ', row);
  }



}
