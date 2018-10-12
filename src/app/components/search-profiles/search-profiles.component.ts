import {Component, OnInit} from '@angular/core';
import {CompactProfile} from '../../entity/compact-profile';
import {ProfilesService} from '../../services/profiles.service';


@Component({
  selector: 'app-search-profiles',
  templateUrl: './search-profiles.component.html',
  styleUrls: ['./search-profiles.component.css']
})
export class SearchProfilesComponent implements OnInit {

  profiles: CompactProfile[];

  constructor(private profileService: ProfilesService) {
  }
  ngOnInit() {
  }

  displayCounter(filter) {
    this.profileService.getProfiles(filter).subscribe((profiles) => {
      this.profiles = profiles;
    });
  }

}
