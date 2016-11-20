import { Component } from '@angular/core';
import { StockmarketService } from '../../shared/stockmarket.service';

@Component({
  selector: 'stocksonmove',
  templateUrl: 'app/markets/stocksonmove/stocksonmove.component.html'
})

export class StocksOnMoveComponent { 
  upstocks: Array<any>;
  downstocks: Array<any>;

  constructor(private service: StockmarketService) {
    this.getStocksOnMove();
  }

  getStocksOnMove() {
    this.service.getStocksOnMove().subscribe(r => this.populatestocks(r), err => console.log("getStocksOnMove: ", err));
  }

  populatestocks(data: any) {
    console.log("data -->", data)
    this.upstocks = data.d.sotm.UpStocks;
    this.downstocks = data.d.sotm.DownStocks
    console.log("up -->", this.upstocks)
    console.log("down -->", this.downstocks)

  }
}