import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {CompactProfile} from '../entity/compact-profile';
import {SearchFilter} from '../filters/search-filter';
import {Profile} from '../entity/profile';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  private profileUrl = '/rest/resources/profiles';

  constructor(private http: HttpClient) {
  }

  getProfiles(filter: SearchFilter): Observable<CompactProfile[]> {
    console.log(filter);
    return this.http.post<CompactProfile[]>(this.profileUrl, filter, httpOptions);
  }

  getProfileById(id: number): Observable<Profile> {
    return this.http.get<Profile>(this.profileUrl + '/' + id);
  }




}
