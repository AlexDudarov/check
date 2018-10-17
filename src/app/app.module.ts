import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {SearchProfilesComponent} from './components/search/search-profiles/search-profiles.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import {StatisticComponent} from './components/statistic/statistic.component';
import {AdministrationComponent} from './components/administration/administration.component';
import {CheckFooterComponent} from './components/check-footer/check-footer.component';
import {CheckHeaderComponent} from './components/check-header/check-header.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PrefixIfValueNotEmptyPipe} from './pipes/prefix-if-value-not-empty.pipe';
import {AddDelimiterPipe} from './pipes/add-delimiter.pipe';
import { ProfilesDialogComponent } from './components/profiles-dialog/profiles-dialog.component';
import {MAT_DATE_LOCALE} from '@angular/material';
import { ProfileDialogComponent } from './components/profile-dialog/profile-dialog.component';
import { SearchByTextFilterComponent } from './components/search/search-by-text-filter/search-by-text-filter.component';
import { ProfileTableComponent } from './components/profile-table/profile-table.component';
import { SearchFilterComponent } from './components/search/search-filter/search-filter.component';
import {DataService} from './services/data-service';


export const routeConfig: Routes = [
  { path: '', redirectTo: '/search/by/param', pathMatch: 'full' },
  {
    path: 'search/by/param',
    component: SearchFilterComponent,
  },
  {
    path: 'search/by/text',
    component: SearchByTextFilterComponent,
  },
  {
    path: 'statistic',
    component: StatisticComponent
  },
  {
    path: 'administration',
    component: AdministrationComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    SearchProfilesComponent,
    StatisticComponent,
    AdministrationComponent,
    CheckFooterComponent,
    CheckHeaderComponent,
    NavigationComponent,
    PrefixIfValueNotEmptyPipe,
    AddDelimiterPipe,
    ProfilesDialogComponent,
    ProfileDialogComponent,
    SearchByTextFilterComponent,
    ProfileTableComponent,
    SearchFilterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routeConfig),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'ru-Ru'}, DataService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ProfilesDialogComponent, ProfileDialogComponent]

})
export class AppModule {






}
