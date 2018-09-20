import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatIconModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule,
  MatMenuModule, MatProgressSpinnerModule

} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';


const modules = [
  MatToolbarModule,
  MatIconModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatSidenavModule,
  FlexLayoutModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule,
  MatMenuModule,
  MatProgressSpinnerModule
];

@NgModule({
  imports: [modules],
  exports: [modules],
})
export class MaterialModule { }
