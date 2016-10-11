import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import { StockQuote } from './stockquote';
import { LookupResult } from './symbolsearchresult';
import 'rxjs/add/operator/map';

@Injectable()
export class StockmarketService {
  constructor(private jsonp: Jsonp) { }

  getStockSymbol(term: string) {
    let stockSymbolUrl = 'http://dev.markitondemand.com/Api/v2/Lookup/jsonp';

    let params = new URLSearchParams();
    params.set('input', term);
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');

    return this.jsonp
      .get(stockSymbolUrl, { search: params })
      .map(r => r.json());
  }

  getStockQuote(symbol: string) {
    let stockQuoteUrl = 'http://dev.markitondemand.com/MODApis/Api/v2/Quote/jsonp';

    let params = new URLSearchParams();
    params.set('symbol', symbol);
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');

    return this.jsonp
      .get(stockQuoteUrl, { search: params })
      .map(r => r.json());
  }
}