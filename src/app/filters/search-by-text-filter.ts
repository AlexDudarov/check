import {Category} from '../entity/category';

export class SearchByTextFilter {
  text: string;
  categories: Category[];
  maxResults = 100;

}
