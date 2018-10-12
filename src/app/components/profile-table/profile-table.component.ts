import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {CompactProfile} from '../../entity/compact-profile';

@Component({
  selector: 'app-profile-table',
  templateUrl: './profile-table.component.html',
  styleUrls: ['./profile-table.component.css']
})
export class ProfileTableComponent implements OnInit {

  @Input()
  profiles: CompactProfile[];
  displayedColumns: string[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<CompactProfile>;

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
    this.displayedColumns = this.getDisplayedColumns();
    this.dataSource = new MatTableDataSource<CompactProfile>([]);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  getDisplayedColumns(): string[] {
    return ['name', 'categories'];
  }

  onRowClicked(id: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = '800px';
    dialogConfig.data = {
      id: id,
    };
    this.dialog.open(ProfileTableComponent, dialogConfig);
  }

}
