import {Component, OnInit} from '@angular/core';
import {ProfilesService} from '../../../services/profiles.service';
import {Subject} from 'rxjs';


@Component({
  selector: 'app-search-profiles',
  templateUrl: './search-profiles.component.html',
  styleUrls: ['./search-profiles.component.css']
})
export class SearchProfilesComponent implements OnInit {
  subject;

  constructor(private profileService: ProfilesService) {
    this.subject = new Subject();

  }

  ngOnInit() {
  }

  find(filter) {
    this.profileService.getProfiles(filter).subscribe(profiles => this.subject.next(profiles));
  }

}
