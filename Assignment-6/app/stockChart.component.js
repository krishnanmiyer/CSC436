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
var core_1 = require("@angular/core");
var ChartDataInput = (function () {
    function ChartDataInput() {
    }
    ChartDataInput = __decorate([
        core_1.NgModule({}), 
        __metadata('design:paramtypes', [])
    ], ChartDataInput);
    return ChartDataInput;
}());
exports.ChartDataInput = ChartDataInput;
var ChartDataOutput = (function () {
    function ChartDataOutput() {
    }
    return ChartDataOutput;
}());
exports.ChartDataOutput = ChartDataOutput;
var Close = (function () {
    function Close() {
    }
    return Close;
}());
exports.Close = Close;
var DataSeries = (function () {
    function DataSeries() {
    }
    return DataSeries;
}());
exports.DataSeries = DataSeries;
var Element = (function () {
    function Element(symbol, type, params) {
        this.Symbol = symbol;
        this.Type = type;
        this.Params = params;
    }
    return Element;
}());
exports.Element = Element;
//# sourceMappingURL=stockChart.component.js.map