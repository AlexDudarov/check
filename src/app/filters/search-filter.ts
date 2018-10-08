import {Country} from '../entity/country';
import {Category} from '../entity/category';

export class SearchFilter {
  name: string;
  countries: Country[];
  categories: Category[];
  birthDay: string;
  fuzzy: boolean;
  maxResults = 100;
}
