import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { StockmarketService } from './stockmarket.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { ChartDataInput, ChartDataOutput, Close, DataSeries, Element } from './stockChart.component';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctuntilchanged';

@Component({
  selector: 'stock-quote',
  templateUrl: 'app/stockquote.component.html',
  styleUrls: ['app/stockquote.component.css'],
})

export class StockQuoteComponent {
  items: any;
  stockQuote: any;
  symbol: string;
  term$ = new Subject<string>();
  chartData: ChartDataOutput;

  constructor(private service: StockmarketService) {
    this.term$
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe(term => this.search(term));

    this.initializeChartData();
  }

  search(term: string) {
    if (term.length < 1) {
      this.items.length = 0;
      return;
    }
    this.service.getStockSymbol(term).subscribe(result => this.items = result);
  }

  quote(symbol: string) {
    this.symbol = symbol;
    this.items.length = 0;

    this.service.getStockQuote(symbol).distinctUntilChanged().debounceTime(500).subscribe(r => this.stockQuote = r);
    this.getChartData(symbol);
  }

  getChartData(symbol: string) {
    this.service.getInteractiveChart(symbol).subscribe(r => this.populateChart(r, symbol), err => console.log(err));
  }

  populateChart(data: any, symbol:string) {
    this.chartData = null;

    this.initializeChartData();
    
    //populate labels    
    if (data.Dates.length > 0) {
      for (let i = 0; i < data.Dates.length; i++) {
        this.chartData.labels.push(this.getMonth(data.Dates[i]));
      }
    }

    //populate dataset
    if (data.Positions.length > 0) {
      let datasets = [
        {
          label: symbol,
          data: data.Positions
        }
      ];
      this.chartData.datasets = datasets;
    }

    console.log("labels --> ", this.chartData.labels);
    console.log("datasets --> ", this.chartData.datasets);

  }

  initializeChartData() {
    let output = new ChartDataOutput();
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

    this.chartData = output;
  }

  getMonth(dateIn): string {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    let input = new Date(dateIn);
    return monthNames[input.getMonth()];
  }
}