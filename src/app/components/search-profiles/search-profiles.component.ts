import {Component, OnInit, ViewChild} from '@angular/core';
import {CompactProfile} from '../../entity/compact-profile';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Country} from '../../entity/country';
import {Category} from '../../entity/category';
import {SearchFilter} from '../../filters/search-filter';
import {FormControl} from '@angular/forms';
import {CountryService} from '../../services/country.service';
import {CategoryService} from '../../services/category.service';
import {ProfilesService} from '../../services/profiles.service';



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
  countries: Country[];
  categories: Category[];
  filter: SearchFilter;
  displayedColumns: string[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource:  MatTableDataSource<CompactProfile>;

  constructor(private countryService: CountryService, private categoryService: CategoryService, private profileService: ProfilesService) {
  }

  ngOnInit() {
    this.profiles = this.getProfiles();
    this.displayedColumns = this.getDisplayedColumns();
    this.dataSource = new MatTableDataSource<CompactProfile>([]);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.countryService.getAll().subscribe(countries => this.countries = countries);
    this.categoryService.getAll().subscribe(categories => this.categories = categories);
    this.filter = new SearchFilter();

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
