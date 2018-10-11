import {Component, Inject, OnInit} from '@angular/core';
import {Profile} from '../../entity/profile';
import {ProfilesDialogComponent} from '../profiles-dialog/profiles-dialog.component';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ProfilesService} from '../../services/profiles.service';



@Component({
  selector: 'app-profile-dialog',
  templateUrl: './profile-dialog.component.html',
  styleUrls: ['./profile-dialog.component.css']
})
export class ProfileDialogComponent implements OnInit {

  id: number;
  profile: Profile;

  constructor(private dialogRef: MatDialogRef<ProfilesDialogComponent>,
              @Inject(MAT_DIALOG_DATA) data,
              private service: ProfilesService) {
    this.id = data.id;
  }

  ngOnInit() {
    this.service.getProfileById(this.id).subscribe(profile =>
      this.profile = profile);
  }

  close() {
    console.log(this.profile);
    this.dialogRef.close();
  }

}
