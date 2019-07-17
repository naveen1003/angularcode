import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient } from  "@angular/common/http";
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { ApplistComponent } from './body/applist/applist.component';
import { AppdetailComponent } from './body/appdetail/appdetail.component';
import {SprintDataComponent} from './body/appdetail/sprintdata/sprintdata.component'
import { ContinuousdeploymentComponent } from './body/appdetail/continuousdeployment/continuousdeployment.component';
import { EnvironmentComponent } from './body/appdetail/environment/environment.component';
import { ContinuousintegrationComponent } from './body/appdetail/continuousintegration/continuousintegration.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    ApplistComponent,
    AppdetailComponent,
    SprintDataComponent,
    EnvironmentComponent,
    ContinuousintegrationComponent,
    ContinuousdeploymentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
