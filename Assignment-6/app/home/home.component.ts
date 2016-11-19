import { Component } from '@angular/core';
import { StockmarketService } from '../shared/stockmarket.service';
import { StockMarket, D, Record, MarketDataInput, Req, GetDataResult, Series, MarketDataOutput, MarketIndice, Bullion } from '../shared/stockmarket.model';
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
  nasdaqIndex: MarketIndice;
  bullionData: Array<Bullion>;

  constructor(private service: StockmarketService) {
    this.getStockMarketUpdates();
    this.getMarketIndices();
    this.getBullionMarketData()
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
    this.nasdaqIndex = this.marketIndices.find(i => i.Symbol === '0NDQC');
  }

  getBullionMarketData() {
    this.service.getBullionMarketData().subscribe(r => this.populateBullionData(r), err => console.log("getBullionMarketData", err));
  }

  populateBullionData(data: any) {
    if (data == null || data == undefined) return;

    let values = data.replace('\n').split(' ');
    let bullions = new Array<Bullion>();

    for (let i = 0; i <= values.length - 1; i++) {
      if (i == 0 || i == 3 || i == 6 || i == 9) {
        bullions.push(new Bullion(this.resolveSymbol(values[i].trim().substr(0, 3))));
        bullions[bullions.length - 1].prices.push(values[i].trim().substr(4));
      }
      else {
        bullions[bullions.length - 1].prices.push(values[i].trim().substr(1));
      }
      if (i >= 11) { this.bullionData = bullions; return };
    }
  }

  resolveSymbol(symbol: string):string {
    switch(symbol) {
      case "XAU":
        return "GOLD"
      case "XAG":
        return "SILVER"
      case "XPT":
        return "PLATINUM"
      default:
        return "PALLADIUM"
    }
  }
}