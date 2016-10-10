import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit{
  title = 'My app works!';

  ngOnInit() : void {

  }

  makeRequest() : void {

  }
}

export class StockQuote {
  Name: string;
  Symbol: string;
  LastPrice: number;
  Change: number;
  ChangePercent: number;
  Timestamp: Date;
  MSDate: number;
  MarketCap: number;
  Volume: number;
  ChangeYTD: number;
  ChangePercentYTD: number;
  High: number;
  Low: number;
  Open: number
}

export class SymbolSearchResult {
  Name: string;
  Symbol: string;
  Exchange: string
}

