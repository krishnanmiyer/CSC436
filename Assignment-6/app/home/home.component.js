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
var stockmarket_model_1 = require('../shared/stockmarket.model');
var stockmarket_model_2 = require('../shared/stockmarket.model');
var HomeComponent = (function () {
    function HomeComponent(service) {
        this.service = service;
        this.initializeChart();
        this.getStockMarketUpdates();
    }
    HomeComponent.prototype.getStockMarketUpdates = function () {
        var _this = this;
        this.service.getStockMarketUpdates().subscribe(function (r) { return _this.populateMarketUpdates(r); }, function (err) { return console.log("getstockmarketupdates: ", err); });
    };
    HomeComponent.prototype.populateMarketUpdates = function (data) {
        this.marketUpdates = data.d.Records;
    };
    HomeComponent.prototype.getMarketData = function () {
        var _this = this;
        this.service.getMarketToday(JSON.stringify(this.getInputData('0NDQC'))).subscribe(function (r) { return _this.populateChart(r); }, function (err) { return console.log("getstockmarketupdates: ", err); });
    };
    HomeComponent.prototype.getInputData = function (symbol) {
        var input = new stockmarket_model_1.MarketDataInput();
        var req = new stockmarket_model_1.Req();
        req.Symbol = symbol;
        req.StartDate = new Date().toLocaleString();
        req.EndDate = new Date().setMonth(new Date().getMonth() - 6).toLocaleString();
        req.EnableBats = true;
        req.Type = 1;
        input.req = req;
        return input;
    };
    HomeComponent.prototype.initializeChart = function () {
        var output = new stockmarket_model_2.ChartProperties();
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
        this.marketTodayChartattributes = output;
    };
    HomeComponent.prototype.populateChart = function (data) {
        this.marketTodayChartData = data;
        console.log(this.marketTodayChartData);
        //initialize chart for redraw
        this.initializeChart();
        //populate labels
        if (this.marketTodayChartData.Dates.length > 0) {
            for (var i = 0; i < this.marketTodayChartData.Dates.length; i++) {
                this.marketTodayChartattributes.labels.push(this.getMonth(this.marketTodayChartData.Dates[i]));
            }
        }
        //populate dataset
        var element = this.marketTodayChartData.Elements[0];
        if (element.DataSeries.close.values.length > 0) {
            var datasets = [
                {
                    label: element.Symbol,
                    data: element.DataSeries.close.values
                }
            ];
            this.marketTodayChartattributes.datasets = datasets;
        }
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'stock-home',
            templateUrl: 'app/home/home.component.html',
        }), 
        __metadata('design:paramtypes', [stockmarket_service_1.StockmarketService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map