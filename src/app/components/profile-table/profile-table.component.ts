import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {CompactProfile} from '../../entity/compact-profile';
import {ProfileDialogComponent} from '../profile-dialog/profile-dialog.component';
import {DataService} from '../../services/data-service';

@Component({
  selector: 'app-profile-table',
  templateUrl: './profile-table.component.html',
  styleUrls: ['./profile-table.component.css']
})
export class ProfileTableComponent implements OnInit {

//  @Input()
 // subject;
  displayedColumns: string[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<CompactProfile>;

  constructor(private dialog: MatDialog, private dataService: DataService) {
  }
  static getDisplayedColumns(): string[] {
    return ['name', 'categories'];
  }

ngOnInit() {
  this.displayedColumns = ProfileTableComponent.getDisplayedColumns();
  this.dataSource = new MatTableDataSource<CompactProfile>([]);
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
  this.dataService.getData().subscribe(data => {
      this.dataSource.data = data;
    }
  );
}


  onRowClicked(id: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = '800px';
    dialogConfig.data = {
      id: id,
    };
   this.dialog.open(ProfileDialogComponent, dialogConfig);

  }

}
