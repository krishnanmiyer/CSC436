import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { MarketsComponent } from './markets.component';
import { TrendingComponent } from './trending/trending.component';
import { StocksOnMoveComponent } from './stocksonmove/stocksonmove.component';
import { MarketsRoutingModule } from './markets-routing.module';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    MarketsRoutingModule
  ],

  declarations: [
    MarketsComponent, TrendingComponent, StocksOnMoveComponent
  ],
  bootstrap: [ MarketsComponent, TrendingComponent, StocksOnMoveComponent ]
})
export class MarketsModule { }
