import { Component } from '@angular/core';
import { StockmarketService } from '../shared/stockmarket.service';
import { StockMarket, D, Record, MarketDataInput, Req, GetDataResult, Series, MarketDataOutput } from '../shared/stockmarket.model';
import { ChartDataOutput, Close, DataSeries, Element, ChartProperties } from '../shared/stockmarket.model';

@Component({
  selector: 'stock-home',
  templateUrl: 'app/home/home.component.html',
})

export class HomeComponent {
  marketUpdates: Record[];
  marketTodayChartattributes: ChartProperties;
  marketTodayChartData: MarketDataOutput;

  constructor(private service: StockmarketService) {
    this.initializeChart();
    this.getStockMarketUpdates();

  }

  getStockMarketUpdates() {
    this.service.getStockMarketUpdates().subscribe(r => this.populateMarketUpdates(r), err => console.log("getstockmarketupdates: ", err));
  }

  populateMarketUpdates(data: any) {
    this.marketUpdates = data.d.Records;
  }

  getMarketData() {
    this.service.getMarketToday(JSON.stringify(this.getInputData('0NDQC'))).subscribe(r => this.populateChart(r), err => console.log("getstockmarketupdates: ", err));
  }

  getInputData(symbol: string): MarketDataInput {
    let input = new MarketDataInput();
    let req = new Req();
    req.Symbol = symbol;
    req.StartDate = new Date().toLocaleString();
    req.EndDate = new Date().setMonth(new Date().getMonth() - 6).toLocaleString();
    req.EnableBats = true;
    req.Type = 1;
    input.req = req;
    return input;
  }

  initializeChart() {
    let output = new ChartProperties();
    output.options = { animation: false, responsive: true };
    output.colors = [{ // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }];
    output.chartType = 'line';
    output.legend = true;
    output.labels = new Array<string>();
    output.datasets = undefined;
    this.marketTodayChartattributes = output;
  }

  populateChart(data: MarketDataOutput) {
    this.marketTodayChartData = data;
    console.log(this.marketTodayChartData);

    //initialize chart for redraw
    this.initializeChart();

    //populate labels
    if (this.marketTodayChartData.Dates.length > 0) {
      for (let i = 0; i < this.marketTodayChartData.Dates.length; i++) {
        this.marketTodayChartattributes.labels.push(this.getMonth(this.marketTodayChartData.Dates[i]));
      }
    }

    //populate dataset
    let element = this.marketTodayChartData.Elements[0];
    if (element.DataSeries.close.values.length > 0) {
      let datasets = [
        {
          label: element.Symbol,
          data: element.DataSeries.close.values
        }
      ];
      this.marketTodayChartattributes.datasets = datasets;
    }
  }  
}