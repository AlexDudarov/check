import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CompactProfile} from '../../entity/compact-profile';

@Component({
  selector: 'app-profiles-dialog',
  templateUrl: './profiles-dialog.component.html',
  styleUrls: ['./profiles-dialog.component.css']
})
export class ProfilesDialogComponent implements OnInit {

  displayedColumns: string[] = ['name', 'categories'];
  profiles: CompactProfile[];

  constructor(private dialogRef: MatDialogRef<ProfilesDialogComponent>,
               @Inject(MAT_DIALOG_DATA) data) {
    this.profiles = data.profiles;
  }

  ngOnInit() {

  }

  close() {
    this.dialogRef.close();
  }

}
