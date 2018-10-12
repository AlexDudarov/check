import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {SearchFilter} from '../../filters/search-filter';
import {CompactProfile} from '../../entity/compact-profile';
import {Country} from '../../entity/country';
import {Category} from '../../entity/category';
import {CountryService} from '../../services/country.service';
import {CategoryService} from '../../services/category.service';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {

  countries: Country[];
  categories: Category[];
  @Output()
  valueChange = new EventEmitter();
  filter: SearchFilter;

  constructor(private countryService: CountryService, private categoryService: CategoryService) { }

  ngOnInit() {
    this.countryService.getAll().subscribe(countries => this.countries = countries);
    this.categoryService.getAll().subscribe(categories => this.categories = categories);
    this.filter = new SearchFilter();
  }

  isEmptyName(): boolean {
    const name = this.filter.name;
    return (!name || name.length === 0 || !name.trim());
  }

  find() {
    console.log(this.filter);
    this.valueChange.emit(this.filter);
  }


}
