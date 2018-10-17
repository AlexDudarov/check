import {Component, OnInit} from '@angular/core';
import {Category} from '../../../entity/category';
import {SearchByTextFilter} from '../../../filters/search-by-text-filter';
import {CategoryService} from '../../../services/category.service';
import {DataService} from '../../../services/data-service';

@Component({
  selector: 'app-full-search',
  templateUrl: './search-by-text-filter.component.html',
  styleUrls: ['./search-by-text-filter.component.css']
})
export class SearchByTextFilterComponent implements OnInit {

  categories: Category[];
  filter: SearchByTextFilter;

  constructor(private categoryService: CategoryService, private dataService: DataService) {
  }

  ngOnInit() {
    this.categoryService.getAll().subscribe(categories => this.categories = categories);
    this.filter = new SearchByTextFilter();
  }

  isEmptyText(): boolean {
    const text = this.filter.text;
    return (!text || text.length === 0 || !text.trim());
  }

  find() {
    this.dataService.findByText(this.filter);
  }

}
