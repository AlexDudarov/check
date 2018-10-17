import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {ProfilesService} from './profiles.service';
import {CompactProfile} from '../entity/compact-profile';

@Injectable()
export class DataService {
 private subject = new Subject<CompactProfile[]>();

  constructor(private profileService: ProfilesService) {

  }

  getData(): Subject<CompactProfile[]> {
    return this.subject;
  }

  find(filter) {
    this.profileService.getProfiles(filter).subscribe(profiles => this.subject.next(profiles));
  }

  findByText(filter) {
    this.profileService.getProfilesByText(filter).subscribe(profiles => this.subject.next(profiles));
  }

  findByPassport(filter) {
    this.profileService.getProfilesByPassport(filter).subscribe(profiles => this.subject.next(profiles));
  }
}
