import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { StockmarketService } from './stockmarket.service';
import { StockQuoteComponent } from './stockquote.component';
import { ChartDataInput, ChartDataOutput, Close, DataSeries, Element } from './stockChart.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, JsonpModule, ChartsModule],
  providers: [StockmarketService],
  declarations: [StockQuoteComponent],
  bootstrap: [StockQuoteComponent]
})

export class AppModule { }

