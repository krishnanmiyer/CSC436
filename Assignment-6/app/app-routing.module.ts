import { NgModule }     from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StockQuoteComponent } from './quote/quote.component';
import { MarketsComponent } from './markets/markets.component';

const appRoutes: Routes =  [{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
{ path: 'quote/:sym', component: StockQuoteComponent },
{ path: 'markets', component: MarketsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
