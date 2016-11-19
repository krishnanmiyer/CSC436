"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var stocksonmove_component_1 = require('./stocksonmove/stocksonmove.component');
var trending_component_1 = require('./trending/trending.component');
var marketsRoutes = [
    { path: 'trending', component: trending_component_1.TrendingComponent },
    { path: 'stocksonmove', component: stocksonmove_component_1.StocksOnMoveComponent }
];
var MarketsRoutingModule = (function () {
    function MarketsRoutingModule() {
    }
    MarketsRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(marketsRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], MarketsRoutingModule);
    return MarketsRoutingModule;
}());
exports.MarketsRoutingModule = MarketsRoutingModule;
//# sourceMappingURL=markets-routing.module.js.map