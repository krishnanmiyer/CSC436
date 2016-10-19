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
var stockChart_component_1 = require('./stockChart.component');
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
        this.initializeChartData();
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
        this.service.getInteractiveChart(symbol).subscribe(function (r) { return _this.populateChart(r, symbol); }, function (err) { return console.log(err); });
    };
    StockQuoteComponent.prototype.populateChart = function (data, symbol) {
        this.chartData = null;
        this.initializeChartData();
        //populate labels    
        if (data.Dates.length > 0) {
            for (var i = 0; i < data.Dates.length; i++) {
                this.chartData.labels.push(this.getMonth(data.Dates[i]));
            }
        }
        //populate dataset
        if (data.Positions.length > 0) {
            var datasets = [
                {
                    label: symbol,
                    data: data.Positions
                }
            ];
            this.chartData.datasets = datasets;
        }
        console.log("labels --> ", this.chartData.labels);
        console.log("datasets --> ", this.chartData.datasets);
    };
    StockQuoteComponent.prototype.initializeChartData = function () {
        var output = new stockChart_component_1.ChartDataOutput();
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
        this.chartData = output;
    };
    StockQuoteComponent.prototype.getMonth = function (dateIn) {
        var monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        var input = new Date(dateIn);
        return monthNames[input.getMonth()];
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