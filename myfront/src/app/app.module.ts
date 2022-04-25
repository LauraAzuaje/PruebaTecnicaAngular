import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InstitutesComponent } from './institutes/institutes.component';
import { AppRoutingModule } from './app-routing.module';
import { MunicipiesComponent } from './municipies/municipies.component';
import { CampusComponent } from './campus/campus.component';
import { GroupsComponent } from './groups/groups.component';


@NgModule({
  declarations: [
    AppComponent,
    InstitutesComponent,
    MunicipiesComponent,
    CampusComponent,
    GroupsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
