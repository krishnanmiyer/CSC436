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
var platform_browser_1 = require('@angular/platform-browser');
var ng2_charts_1 = require('ng2-charts/ng2-charts');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var stockmarket_service_1 = require('../shared/stockmarket.service');
var quote_component_1 = require('./quote.component');
var QuoteModule = (function () {
    function QuoteModule() {
    }
    QuoteModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, http_1.JsonpModule, ng2_charts_1.ChartsModule],
            providers: [stockmarket_service_1.StockmarketService],
            declarations: [quote_component_1.StockQuoteComponent],
            bootstrap: [quote_component_1.StockQuoteComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], QuoteModule);
    return QuoteModule;
}());
exports.QuoteModule = QuoteModule;
//# sourceMappingURL=quote.module.js.map