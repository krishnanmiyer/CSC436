import { Component } from '@angular/core';
import { StockmarketService } from '../shared/stockmarket.service';
import { StockMarket, D, Record, MarketDataInput, Req, GetDataResult, Series, MarketDataOutput, MarketIndice } from '../shared/stockmarket.model';
import { ChartDataOutput, Close, DataSeries, Element, ChartProperties } from '../shared/stockmarket.model';

@Component({
  selector: 'stock-home',
  templateUrl: 'app/home/home.component.html',
})

export class HomeComponent {
  marketUpdates: Record[];
  marketTodayChartattributes: ChartProperties;
  marketTodayChartData: MarketDataOutput;
  marketIndices: MarketIndice[];
  nasdaqIndex = MarketIndice;

  constructor(private service: StockmarketService) {
    this.getStockMarketUpdates();
    this.getMarketIndices();
  }

  getStockMarketUpdates() {
    this.service.getStockMarketUpdates().subscribe(r => this.populateMarketUpdates(r), err => console.log("getstockmarketupdates: ", err));
  }

  populateMarketUpdates(data: any) {
    this.marketUpdates = data.d.Records;
  }

  getMarketIndices() {
    this.service.getMarketIndices().subscribe(r => this.populateMarketIndices(r), err => console.log("getMarketIndices", err));
  }

  populateMarketIndices(data: StockMarket) {
    this.marketIndices = data.d.marketIndices;

    for (let i = 0; i < this.marketIndices.length; i++) {
      if (this.marketIndices[i].Symbol == '0NDQC') {
        this.nasdaqIndex.prototype = this.marketIndices[i];
        return;
      }
    }
  }
}