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
var stockmarket_service_1 = require('../shared/stockmarket.service');
var Subject_1 = require('rxjs/Subject');
var stockmarket_model_1 = require('../shared/stockmarket.model');
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
        this.initializeChart();
    }
    StockQuoteComponent.prototype.search = function (term) {
        var _this = this;
        if (term.length < 1) {
            this.items.length = 0;
            return;
        }
        this.service.getStockSymbol(term).subscribe(function (result) { return _this.items = result; }, function (err) { return console.log("search Symbol: ", err); });
    };
    StockQuoteComponent.prototype.quote = function (symbol) {
        var _this = this;
        this.symbol = symbol;
        this.items.length = 0;
        this.service.getStockQuote(symbol).distinctUntilChanged().debounceTime(500).subscribe(function (r) { return _this.stockQuote = r; }, function (err) { return console.log("quote: ", err); });
    };
    StockQuoteComponent.prototype.getCompanyNews = function (symbol) {
        var _this = this;
        this.news = undefined;
        this.service.getCompanyNews(symbol).subscribe(function (r) { return _this.news = r; }, function (err) { return console.log("getCompanyNews: ", err); });
        console.log(this.news);
    };
    StockQuoteComponent.prototype.getChartData = function (symbol) {
        var _this = this;
        this.chartattributes.datasets = undefined;
        this.service.getInteractiveChart(symbol).subscribe(function (r) { return _this.populateChart(r); }, function (err) { return console.log("getChartData: ", err); });
    };
    StockQuoteComponent.prototype.populateChart = function (data) {
        this.chartData = data;
        console.log(this.chartData);
        //initialize chart for redraw
        this.initializeChart();
        //populate labels
        if (this.chartData.Dates.length > 0) {
            for (var i = 0; i < this.chartData.Dates.length; i++) {
                this.chartattributes.labels.push(this.getMonth(this.chartData.Dates[i]));
            }
        }
        //populate dataset
        var element = this.chartData.Elements[0];
        if (element.DataSeries.close.values.length > 0) {
            var datasets = [
                {
                    label: element.Symbol,
                    data: element.DataSeries.close.values
                }
            ];
            this.chartattributes.datasets = datasets;
        }
    };
    StockQuoteComponent.prototype.initializeChart = function () {
        var output = new stockmarket_model_1.ChartProperties();
        output.options = { animation: false, responsive: true };
        output.colors = [{
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }];
        output.chartType = 'line';
        output.legend = true;
        output.labels = new Array();
        output.datasets = undefined;
        this.chartattributes = output;
    };
    StockQuoteComponent.prototype.getMonth = function (dateIn) {
        var monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        var input = new Date(dateIn);
        return monthNames[input.getMonth()];
    };
    StockQuoteComponent.prototype.getDate = function (dateIn) {
        return dateIn.slice(0, 10);
    };
    StockQuoteComponent.prototype.chartHovered = function (e) {
    };
    StockQuoteComponent.prototype.chartClicked = function (e) {
    };
    StockQuoteComponent = __decorate([
        core_1.Component({
            selector: 'stock-quote',
            templateUrl: 'app/quote/quote.component.html',
            styleUrls: ['app/quote/quote.component.css'],
        }), 
        __metadata('design:paramtypes', [stockmarket_service_1.StockmarketService])
    ], StockQuoteComponent);
    return StockQuoteComponent;
}());
exports.StockQuoteComponent = StockQuoteComponent;
//# sourceMappingURL=quote.component.js.map