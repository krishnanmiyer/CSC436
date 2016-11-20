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
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(todayUrl, input, options).map(function (r) { return r; });
    };
    StockmarketService.prototype.getMarketIndices = function () {
        var indicesUrl = 'http://research.investors.com/Services/JSONPService.asmx/GetMarketIndices';
        var params = new http_1.URLSearchParams();
        params.set('callback', 'JSONP_CALLBACK');
        return this.jsonp.get(indicesUrl, { search: params }).map(function (r) { return r.json(); });
    };
    StockmarketService.prototype.getBullionMarketData = function () {
        var params = [
            "sym=XAU!XAG!XPT!XPD",
            "fld=B!A!CH",
            "zz=319897461801",
            ("ts=" + this.getFormattedDate())
        ].join('&');
        var queryUrl = "https://www.bulliondesk.com/fmdatacache/?" + params;
        var headers = new http_1.Headers();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Credentials', 'false');
        headers.append('Access-Control-Allow-Methods', 'GET');
        var options = new http_1.RequestOptions({
            method: http_1.RequestMethod.Get,
            headers: headers
        });
        return this.http.request(queryUrl, options).map(function (r) { return r.text(); });
    };
    StockmarketService.prototype.getMonth = function (dateIn) {
        var monthNames = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var input = new Date(dateIn);
        return monthNames[input.getMonth()];
    };
    StockmarketService.prototype.getFormattedDate = function () {
        var d = new Date();
        var formatted = d.getDate() - 1 + '-' + this.getMonth(d.getMonth()) + '-' + d.getFullYear() + ' 06:30:00';
        return formatted;
    };
    StockmarketService.prototype.getStocksOnMove = function () {
        var queryUrl = 'http://research.investors.com/services/JSONPService.asmx/GetNumOfStocksOnTheMoveData';
        var params = new http_1.URLSearchParams();
        params.set('callback', 'JSONP_CALLBACK');
        params.set('maxNumOfStocksPerList', '20');
        return this.jsonp.get(queryUrl, { search: params }).map(function (r) { return r.json(); });
    };
    StockmarketService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Jsonp, http_1.Http])
    ], StockmarketService);
    return StockmarketService;
}());
exports.StockmarketService = StockmarketService;
//# sourceMappingURL=stockmarket.service.js.map