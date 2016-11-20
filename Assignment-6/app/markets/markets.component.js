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
var MarketsComponent = (function () {
    function MarketsComponent(service) {
        this.service = service;
        this.getMarketData("0DJIA");
    }
    MarketsComponent.prototype.getMarketData = function (symbol) {
        var _this = this;
        var input = new stockmarket_model_1.MarketDataInput();
        var request = new stockmarket_model_1.Req();
        request.Symbol = symbol;
        request.Type = 1;
        request.EnableBats = true;
        request.StartDate = "2016-6-28";
        request.EndDate = "2016-10-23";
        input.req = request;
        this.service.getMarketToday(JSON.stringify(input)).subscribe(function (r) { return _this.populatestocks(r); }, function (err) { return console.log("getMarketData: ", err); });
    };
    MarketsComponent.prototype.populatestocks = function (data) {
        console.log("data -->", data);
    };
    MarketsComponent = __decorate([
        core_1.Component({
            selector: 'markets',
            templateUrl: 'app/markets/markets.component.html',
        }), 
        __metadata('design:paramtypes', [stockmarket_service_1.StockmarketService])
    ], MarketsComponent);
    return MarketsComponent;
}());
exports.MarketsComponent = MarketsComponent;
//# sourceMappingURL=markets.component.js.map