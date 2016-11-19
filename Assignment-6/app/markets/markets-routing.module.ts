import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StocksOnMoveComponent }  from './stocksonmove/stocksonmove.component';
import { TrendingComponent }  from './trending/trending.component';

const marketsRoutes: Routes = [
  { path: 'trending', component: TrendingComponent },
  { path: 'stocksonmove', component: StocksOnMoveComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(marketsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MarketsRoutingModule { }
