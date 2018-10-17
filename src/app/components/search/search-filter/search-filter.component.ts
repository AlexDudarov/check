import {Component, OnInit} from '@angular/core';
import {SearchFilter} from '../../../filters/search-filter';

import {Country} from '../../../entity/country';
import {Category} from '../../../entity/category';
import {CountryService} from '../../../services/country.service';
import {CategoryService} from '../../../services/category.service';
import {DataService} from '../../../services/data-service';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {

  countries: Country[];
  categories: Category[];

  filter: SearchFilter;

  constructor(private countryService: CountryService, private categoryService: CategoryService, private dataService: DataService) {
  }

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
    this.dataService.find(this.filter);
  }


}
