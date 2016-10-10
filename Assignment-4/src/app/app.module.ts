import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { StockmarketService } from './stockmarket.service';
import { StockQuote } from './stockquote';
import { SymbolSearchResult } from './symbolsearchresult';

@NgModule({
  declarations: [
    AppComponent, StockQuote, SymbolSearchResult
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [StockmarketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
