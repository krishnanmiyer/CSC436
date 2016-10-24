import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { ChartDataInput, ChartDataOutput, Close, DataSeries, Element } from './stockChart.component';

@Injectable()
export class StockmarketService {
  constructor(private jsonp: Jsonp) { }

  getStockSymbol(term: string) {
    const stockSymbolUrl = 'http://dev.markitondemand.com/Api/v2/Lookup/jsonp';

    let params = new URLSearchParams();
    params.set('input', term);
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');

    return this.jsonp
      .get(stockSymbolUrl, { search: params })
      .map(r => r.json());
  }

  getStockQuote(symbol: string) {
    const stockQuoteUrl = 'http://dev.markitondemand.com/MODApis/Api/v2/Quote/jsonp';

    let params = new URLSearchParams();
    params.set('symbol', symbol);
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');

    return this.jsonp
      .get(stockQuoteUrl, { search: params })
      .map(r => r.json());
  }

  getInteractiveChart(symbol: string) {
    const chartUrl = 'http://dev.markitondemand.com/Api/v2/InteractiveChart/jsonp';

    let input = new ChartDataInput();
    input.Normalized = false;
    input.NumberOfDays = 365;
    input.DataPeriod = "Month";
    input.Elements = [new Element(symbol, "price", ["c"])];

    let params = new URLSearchParams();
    params.set('callback', 'JSONP_CALLBACK');
    params.set('parameters', JSON.stringify(input));

    return this.jsonp
      .get(chartUrl, { search: params })
      .map(r => r.json());
  }
}


