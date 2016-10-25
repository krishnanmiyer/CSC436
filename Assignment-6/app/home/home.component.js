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
var HomeComponent = (function () {
    function HomeComponent(service) {
        this.service = service;
        this.nasdaqIndex = stockmarket_model_1.MarketIndice;
        this.getStockMarketUpdates();
        this.getMarketIndices();
    }
    HomeComponent.prototype.getStockMarketUpdates = function () {
        var _this = this;
        this.service.getStockMarketUpdates().subscribe(function (r) { return _this.populateMarketUpdates(r); }, function (err) { return console.log("getstockmarketupdates: ", err); });
    };
    HomeComponent.prototype.populateMarketUpdates = function (data) {
        this.marketUpdates = data.d.Records;
    };
    HomeComponent.prototype.getMarketIndices = function () {
        var _this = this;
        this.service.getMarketIndices().subscribe(function (r) { return _this.populateMarketIndices(r); }, function (err) { return console.log("getMarketIndices", err); });
    };
    HomeComponent.prototype.populateMarketIndices = function (data) {
        this.marketIndices = data.d.marketIndices;
        for (var i = 0; i < this.marketIndices.length; i++) {
            if (this.marketIndices[i].Symbol == '0NDQC') {
                this.nasdaqIndex.prototype = this.marketIndices[i];
                return;
            }
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