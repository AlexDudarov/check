import {IImage} from 'ng-simple-slideshow';
import {Document} from './document';
import {SanctionReference} from './sanction-reference';

export class Profile {
  fullName: string;
  id: number;
  imageUrls: (string | IImage)[];
  lastName: string;
  firstName: string;
  middleName: string;
  title: string;
  sex: string;
  ssn: string;
  activeStatus: string;
  nationality: string;
  age: number;
  dateOfBirth: string;
  asOfDate: string;
  isDeceased: boolean;
  dateOfDeath: string;
  placeOfBirth: string;
  categories: string;
  subCategory: string;
  entered: string;
  updated: string;
  positions: string[];
  editor: string;
  furtherInformation: string;
  aliases: string[];
  companyNames: string[];
  keywords: string[];
  externalSources: string[];
  documents: Document[];
  sanctions: SanctionReference[];

}
