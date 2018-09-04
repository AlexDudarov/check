import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatIconModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatSidenavModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';


const modules = [
  MatToolbarModule,
  MatIconModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatSidenavModule,
  FlexLayoutModule
];

@NgModule({
  imports: [modules],
  exports: [modules],
})
export class MaterialModule { }
