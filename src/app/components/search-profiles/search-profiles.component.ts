import {Component, OnInit, ViewChild} from '@angular/core';
import {Profile} from '../../entity/profile';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';



const profiles: Profile[] = [
  new Profile('AAA', 'VIP'),
  new Profile('BBB', 'PEP'),
  new Profile('BBB', 'PEP'),
  new Profile('BBB', 'PEP'),
  new Profile('AAA', 'VIP'),
  new Profile('BBB', 'PEP'),
  new Profile('BBB', 'PEP'),
  new Profile('BBB', 'PEP'),
  new Profile('AAA', 'VIP'),
  new Profile('BBB', 'PEP'),
  new Profile('BBB', 'PEP'),
  new Profile('BBB', 'PEP'),
  new Profile('AAA', 'VIP'),
  new Profile('BBB', 'PEP'),
  new Profile('BBB', 'PEP'),
  new Profile('BBB', 'PEP'),
];

@Component({
  selector: 'app-search-profiles',
  templateUrl: './search-profiles.component.html',
  styleUrls: ['./search-profiles.component.css']
})
export class SearchProfilesComponent implements OnInit {

  profiles: Profile[];
  displayedColumns: string[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource:  MatTableDataSource<Profile>;

  constructor() {
  }

  ngOnInit() {
    this.profiles = this.getProfiles();
    this.displayedColumns = this.getDisplayedColumns();
    this.dataSource = new MatTableDataSource<Profile>(this.getProfiles());
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getProfiles(): Profile[] {
    console.log(profiles);
    return profiles;

  }

  getDisplayedColumns(): string[] {
    return ['name', 'categories'];
  }


}
