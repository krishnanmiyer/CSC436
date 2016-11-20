import { Component} from '@angular/core';
import { StockmarketService } from '../shared/stockmarket.service';
import { MarketDataInput, Req } from '../shared/stockmarket.model';

@Component({
  selector: 'markets',
  templateUrl: 'app/markets/markets.component.html',
})

export class MarketsComponent { 
  marketsToday: any;
  
  constructor(private service: StockmarketService ) {
    this.getMarketData("0DJIA");    
  }

  getMarketData(symbol: string) {
    let input = new MarketDataInput();
    let request = new Req();
    request.Symbol = symbol;
    request.Type = 1;
    request.EnableBats = true;
    request.StartDate = "2016-6-28";
    request.EndDate = "2016-10-23";
    input.req = request;

    this.service.getMarketToday(JSON.stringify(input)).subscribe(r => this.populatestocks(r), err => console.log("getMarketData: ", err));
  }

  populatestocks(data: any) {
    console.log("data -->", data)
  }
}