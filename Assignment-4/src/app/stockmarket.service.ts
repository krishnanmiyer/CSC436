import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { StockQuote } from './stockquote';
import { SymbolSearchResult } from './symbolsearchresult';

@Injectable()
export class StockmarketService {
  constructor(private http: Http) { }

  getStockQuote(symbol: string): Observable<StockQuote> {
    return this.http
    .get('http://dev.markitondemand.com/MODApis/Api/v2/Quote/jsonp?symbol=${symbol}')
    .map((r: Response) => r.json().data as StockQuote);
   }

  
  
  getStockSymbol(term: string): Observable<SymbolSearchResult[]> {
    return this.http
      .get('http://dev.markitondemand.com/Api/v2/Lookup/jsonp?input=${term}')
      .map((r: Response) => r.json().data as SymbolSearchResult[]);
   }
}

