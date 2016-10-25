import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams, Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ChartDataInput, ChartDataOutput, Close, DataSeries, Element } from './stockmarket.model';

@Injectable()
export class StockmarketService {
  constructor(private jsonp: Jsonp, private http: Http) { }

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

  getCompanyNews(symbol: string) {
    const companyNewsUrl = 'http://myallies.com/api/news';

    return this.jsonp
      .get(companyNewsUrl + '/' + symbol)
      .map(r => r.json());
  }

  getStockMarketUpdates() {
    const newsUrl = 'http://research.investors.com/Services/JSONPService.asmx/GetInTheNews'

    let params = new URLSearchParams();
    params.set('callback', 'JSONP_CALLBACK');
    return this.jsonp.get(newsUrl, { search: params }).map(r => r.json());
  }

  getMarketToday(input: string) {
    const todayUrl = 'http://research.investors.com/services/ChartService.svc/GetData'

    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Access-Control-Allow-Credentials','true');
    headers.append('Access-Control-Allow-Origin','*');

    return this.http.post(todayUrl, input , { headers: headers}).map(r => r.json());
  }

  getMarketIndices() {
    const indicesUrl = 'http://research.investors.com/Services/JSONPService.asmx/GetMarketIndices'

    let params = new URLSearchParams();
    params.set('callback', 'JSONP_CALLBACK');
    return this.jsonp.get(indicesUrl, { search: params }).map(r => r.json());
  }
}


