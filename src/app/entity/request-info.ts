import {CompactProfile} from './compact-profile';


export class RequestInfo {


  constructor(id: number, userName: string, login: string, ip: string, searchDuration: number, searchDate: string,
              searchResultsNumber: number, searchType: string, searchMaxResultsNumber: number, searchMatchRatingNumber: number,
              categories: string, firstName: string, lastName: string, birthDay: string, countries: string, passportNumber: string,
              passportCountry: string, text: string, profiles: CompactProfile[]) {
    this.id = id;
    this.userName = userName;
    this.login = login;
    this.ip = ip;
    this.searchDuration = searchDuration;
    this.searchDate = searchDate;
    this.searchResultsNumber = searchResultsNumber;
    this.searchType = searchType;
    this.searchMaxResultsNumber = searchMaxResultsNumber;
    this.searchMatchRatingNumber = searchMatchRatingNumber;
    this.categories = categories;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDay = birthDay;
    this.countries = countries;
    this.passportNumber = passportNumber;
    this.passportCountry = passportCountry;
    this.text = text;
    this.profiles = profiles;
  }
  id: number;
  userName: string;
  login: string;
  ip: string;

  searchDuration: number;
  searchDate: string;
  searchResultsNumber: number;
  searchType: string;
  searchMaxResultsNumber: number;
  searchMatchRatingNumber: number;


  categories: string;
  firstName: string;
  lastName: string;
  birthDay: string;
  countries: string;
  passportNumber: string;
  passportCountry: string;
  text: string;


  profiles: CompactProfile[];





}
