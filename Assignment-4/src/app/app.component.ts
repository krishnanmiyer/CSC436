import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { StockmarketService } from './stockmarket.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctuntilchanged';

@Component({
  selector: 'stock-quote',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  items: any;
  stockQuote: any;
  symbol: string;
  term$ = new Subject<string>();

  constructor(private service: StockmarketService) {
    this.term$
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe(term => this.search(term));
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
  }
}