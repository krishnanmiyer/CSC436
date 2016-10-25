import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { StockmarketService } from '../shared/stockmarket.service';
import { StockQuoteComponent } from './quote.component';
import { ChartDataInput, ChartDataOutput, Close, DataSeries, Element } from '../shared/stockmarket.model';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, JsonpModule, ChartsModule],
  providers: [StockmarketService],
  declarations: [StockQuoteComponent],
  bootstrap: [StockQuoteComponent]
})

export class QuoteModule { }

