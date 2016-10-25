import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MarketsComponent } from './markets.component';

@NgModule({
  imports: [
    BrowserModule, RouterModule
  ],
  declarations: [
    MarketsComponent
  ],
  exports: [ MarketsComponent ],
  bootstrap: [ MarketsComponent ]
})
export class MarketsModule { }
