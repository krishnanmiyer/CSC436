import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule }  from '@angular/http';

import { HomeComponent } from './home.component';


@NgModule({
  imports: [
    BrowserModule,RouterModule,
    HttpModule
  ],
  declarations: [
    HomeComponent
  ],
  exports: [ HomeComponent ],
  bootstrap: [ HomeComponent ]
})
export class HomeModule { }
