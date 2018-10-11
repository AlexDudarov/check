import {Component, OnInit, ViewChild} from '@angular/core';
import {CompactProfile} from '../../entity/compact-profile';
import {MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Country} from '../../entity/country';
import {Category} from '../../entity/category';
import {SearchFilter} from '../../filters/search-filter';

import {CountryService} from '../../services/country.service';
import {CategoryService} from '../../services/category.service';
import {ProfilesService} from '../../services/profiles.service';

import {ProfileDialogComponent} from '../profile-dialog/profile-dialog.component';





@Component({
  selector: 'app-search-profiles',
  templateUrl: './search-profiles.component.html',
  styleUrls: ['./search-profiles.component.css']
})
export class SearchProfilesComponent implements OnInit {


  countries: Country[];
  categories: Category[];
  filter: SearchFilter;
  displayedColumns: string[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource:  MatTableDataSource<CompactProfile>;

  constructor(private countryService: CountryService, private categoryService: CategoryService, private profileService: ProfilesService,
              private dialog: MatDialog) {
  }

  ngOnInit() {

    this.displayedColumns = this.getDisplayedColumns();
    this.dataSource = new MatTableDataSource<CompactProfile>([]);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.countryService.getAll().subscribe(countries => this.countries = countries);
    this.categoryService.getAll().subscribe(categories => this.categories = categories);
    this.filter = new SearchFilter();

  }



  getDisplayedColumns(): string[] {
    return ['name', 'categories'];
  }

  onRowClicked(id: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = '800px';
    dialogConfig.data = {
      id:  id,
    };
    this.dialog.open(ProfileDialogComponent, dialogConfig);
  }

  find() {
    this.profileService.getProfiles(this.filter).subscribe((profiles) => {
      this.dataSource.data = profiles;
    });
  }

  isEmptyName(): boolean {
    const name = this.filter.name;
    return (!name || name.length === 0 || !name.trim());
  }



}
