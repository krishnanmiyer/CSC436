//ng modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';

//app modules
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { QuoteModule } from './quote/quote.module';
import { MarketsModule } from './markets/markets.module';

//app components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StockQuoteComponent } from './quote/quote.component';
import { MarketsComponent } from './markets/markets.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HomeModule,
    QuoteModule,
    MarketsModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
