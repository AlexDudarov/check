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
  MatMenuModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatNavList,
  MatListModule,
  MatCardModule,
  MatSelectModule,
  MatSliderModule,
  MatCheckboxModule, MatButtonModule,
  MatExpansionModule

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
  MatProgressSpinnerModule,
  MatDialogModule, MatNativeDateModule,
  MatListModule,
  MatCardModule,
  MatSelectModule,
  MatSliderModule,
  MatCheckboxModule,
  MatButtonModule,
  MatExpansionModule

];

@NgModule({
  imports: [modules],
  exports: [modules],
})
export class MaterialModule { }
