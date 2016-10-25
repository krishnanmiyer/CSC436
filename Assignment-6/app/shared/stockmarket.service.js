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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var stockmarket_model_1 = require('./stockmarket.model');
var StockmarketService = (function () {
    function StockmarketService(jsonp, http) {
        this.jsonp = jsonp;
        this.http = http;
    }
    StockmarketService.prototype.getStockSymbol = function (term) {
        var stockSymbolUrl = 'http://dev.markitondemand.com/Api/v2/Lookup/jsonp';
        var params = new http_1.URLSearchParams();
        params.set('input', term);
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');
        return this.jsonp
            .get(stockSymbolUrl, { search: params })
            .map(function (r) { return r.json(); });
    };
    StockmarketService.prototype.getStockQuote = function (symbol) {
        var stockQuoteUrl = 'http://dev.markitondemand.com/MODApis/Api/v2/Quote/jsonp';
        var params = new http_1.URLSearchParams();
        params.set('symbol', symbol);
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');
        return this.jsonp
            .get(stockQuoteUrl, { search: params })
            .map(function (r) { return r.json(); });
    };
    StockmarketService.prototype.getInteractiveChart = function (symbol) {
        var chartUrl = 'http://dev.markitondemand.com/Api/v2/InteractiveChart/jsonp';
        var input = new stockmarket_model_1.ChartDataInput();
        input.Normalized = false;
        input.NumberOfDays = 365;
        input.DataPeriod = "Month";
        input.Elements = [new stockmarket_model_1.Element(symbol, "price", ["c"])];
        var params = new http_1.URLSearchParams();
        params.set('callback', 'JSONP_CALLBACK');
        params.set('parameters', JSON.stringify(input));
        return this.jsonp
            .get(chartUrl, { search: params })
            .map(function (r) { return r.json(); });
    };
    StockmarketService.prototype.getCompanyNews = function (symbol) {
        var companyNewsUrl = 'http://myallies.com/api/news';
        return this.jsonp
            .get(companyNewsUrl + '/' + symbol)
            .map(function (r) { return r.json(); });
    };
    StockmarketService.prototype.getStockMarketUpdates = function () {
        var newsUrl = 'http://research.investors.com/Services/JSONPService.asmx/GetInTheNews';
        var params = new http_1.URLSearchParams();
        params.set('callback', 'JSONP_CALLBACK');
        return this.jsonp.get(newsUrl, { search: params }).map(function (r) { return r.json(); });
    };
    StockmarketService.prototype.getMarketToday = function (input) {
        var todayUrl = 'http://research.investors.com/services/ChartService.svc/GetData';
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Credentials', 'true');
        headers.append('Access-Control-Allow-Origin', '*');
        return this.http.post(todayUrl, input, { headers: headers }).map(function (r) { return r.json(); });
    };
    StockmarketService.prototype.getMarketIndices = function () {
        var indicesUrl = 'http://research.investors.com/Services/JSONPService.asmx/GetMarketIndices';
        var params = new http_1.URLSearchParams();
        params.set('callback', 'JSONP_CALLBACK');
        return this.jsonp.get(indicesUrl, { search: params }).map(function (r) { return r.json(); });
    };
    StockmarketService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Jsonp, http_1.Http])
    ], StockmarketService);
    return StockmarketService;
}());
exports.StockmarketService = StockmarketService;
//# sourceMappingURL=stockmarket.service.js.map