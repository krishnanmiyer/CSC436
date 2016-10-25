import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { StockmarketService } from '../shared/stockmarket.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { ChartDataOutput, Close, DataSeries, Element } from '../shared/stockmarket.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctuntilchanged';

@Component({
  selector: 'stock-quote',
  templateUrl: 'app/quote/quote.component.html',
  styleUrls: ['app/quote/quote.component.css'],
})

export class StockQuoteComponent {
  items: any;
  stockQuote: any;
  symbol: string;
  term$ = new Subject<string>();
  chartattributes: ChartProperties;
  chartData: ChartDataOutput;
  news: any;

  constructor(private service: StockmarketService) {
    this.term$
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe(term => this.search(term));

    this.initializeChart();
  }

  search(term: string) {
    if (term.length < 1) {
      this.items.length = 0;
      return;
    }
    this.service.getStockSymbol(term).subscribe(result => this.items = result, err => console.log("search Symbol: ", err));
  }

  quote(symbol: string) {
    this.symbol = symbol;
    this.items.length = 0;

    this.service.getStockQuote(symbol).distinctUntilChanged().debounceTime(500).subscribe(r => this.stockQuote = r, err => console.log("quote: ", err));
  }

  getCompanyNews(symbol: string) {
    this.news = undefined;
    this.service.getCompanyNews(symbol).subscribe(r => this.news = r, err => console.log("getCompanyNews: ", err));
    console.log(this.news);
  }

  getChartData(symbol: string) {
    this.chartattributes.datasets = undefined;
    this.service.getInteractiveChart(symbol).subscribe(r => this.populateChart(r), err => console.log("getChartData: ", err));
  }

  populateChart(data: ChartDataOutput) {
    this.chartData = data;
    console.log(this.chartData);

    //initialize chart for redraw
    this.initializeChart();

    //populate labels

    if (this.chartData.Dates.length > 0) {
      for (let i = 0; i < this.chartData.Dates.length; i++) {
        this.chartattributes.labels.push(this.getMonth(this.chartData.Dates[i]));
      }
    }

    //populate dataset
    let element = this.chartData.Elements[0];
    if (element.DataSeries.close.values.length > 0) {
      let datasets = [
        {
          label: element.Symbol,
          data: element.DataSeries.close.values
        }
      ];
      this.chartattributes.datasets = datasets;
    }
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
    this.chartattributes = output;
  }

  getMonth(dateIn): string {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    let input = new Date(dateIn);
    return monthNames[input.getMonth()];
  }

  getDate(dateIn): string {
    return dateIn.slice(0, 10);
  }

  chartHovered(e: any) {

  }

  chartClicked(e: any) {

  }
}



export class ChartProperties {
  chartType: string;
  datasets: any; //{ data: number[]; label: string }[];
  labels: string[];
  options: any;
  colors: any[];
  legend: boolean;
}
