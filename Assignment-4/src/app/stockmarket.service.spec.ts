/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StockmarketService } from './stockmarket.service';

describe('Service: Stockmarket', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StockmarketService]
    });
  });

  it('should ...', inject([StockmarketService], (service: StockmarketService) => {
    expect(service).toBeTruthy();
  }));
});
