import {Country} from '../entity/country';

export class SearchByPassportFilter {

  number: string;
  countries: Country[];
  maxResults = 100;
}
