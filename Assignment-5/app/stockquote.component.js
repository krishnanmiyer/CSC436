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
var stockmarket_service_1 = require('./stockmarket.service');
var Subject_1 = require('rxjs/Subject');
require('rxjs/add/operator/map');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctuntilchanged');
var StockQuoteComponent = (function () {
    function StockQuoteComponent(service) {
        var _this = this;
        this.service = service;
        this.term$ = new Subject_1.Subject();
        this.term$
            .debounceTime(500)
            .distinctUntilChanged()
            .subscribe(function (term) { return _this.search(term); });
    }
    StockQuoteComponent.prototype.search = function (term) {
        var _this = this;
        if (term.length < 1) {
            this.items.length = 0;
            return;
        }
        this.service.getStockSymbol(term).subscribe(function (result) { return _this.items = result; });
    };
    StockQuoteComponent.prototype.quote = function (symbol) {
        var _this = this;
        this.symbol = symbol;
        this.items.length = 0;
        this.service.getStockQuote(symbol).distinctUntilChanged().debounceTime(500).subscribe(function (r) { return _this.stockQuote = r; });
        this.getChartData(symbol);
    };
    StockQuoteComponent.prototype.getChartData = function (symbol) {
        var _this = this;
        this.service.getInteractiveChart(symbol).subscribe(function (r) { return _this.chartData = r; });
        console.log(this.chartData);
    };
    StockQuoteComponent = __decorate([
        core_1.Component({
            selector: 'stock-quote',
            templateUrl: 'app/stockquote.component.html',
            styleUrls: ['app/stockquote.component.css'],
        }), 
        __metadata('design:paramtypes', [stockmarket_service_1.StockmarketService])
    ], StockQuoteComponent);
    return StockQuoteComponent;
}());
exports.StockQuoteComponent = StockQuoteComponent;
//# sourceMappingURL=stockquote.component.js.map