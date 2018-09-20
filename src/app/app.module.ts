import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { SearchProfilesComponent } from './components/search-profiles/search-profiles.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule} from './material/material.module';
import { StatisticComponent } from './components/statistic/statistic.component';
import { AdministrationComponent } from './components/administration/administration.component';
import { CheckFooterComponent } from './components/check-footer/check-footer.component';
import { CheckHeaderComponent } from './components/check-header/check-header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { PrefixIfValueNotEmptyPipe } from './pipes/prefix-if-value-not-empty.pipe';
import { AddDelimiterPipe } from './pipes/add-delimiter.pipe';


export const routeConfig: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: SearchProfilesComponent
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
    AddDelimiterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routeConfig),
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {






}
