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
var forms_1 = require('@angular/forms');
var platform_browser_1 = require('@angular/platform-browser');
var markets_component_1 = require('./markets.component');
var trending_component_1 = require('./trending/trending.component');
var stocksonmove_component_1 = require('./stocksonmove/stocksonmove.component');
var markets_routing_module_1 = require('./markets-routing.module');
var MarketsModule = (function () {
    function MarketsModule() {
    }
    MarketsModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.FormsModule,
                platform_browser_1.BrowserModule,
                markets_routing_module_1.MarketsRoutingModule
            ],
            declarations: [
                markets_component_1.MarketsComponent, trending_component_1.TrendingComponent, stocksonmove_component_1.StocksOnMoveComponent
            ],
            bootstrap: [markets_component_1.MarketsComponent, trending_component_1.TrendingComponent, stocksonmove_component_1.StocksOnMoveComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], MarketsModule);
    return MarketsModule;
}());
exports.MarketsModule = MarketsModule;
//# sourceMappingURL=markets.module.js.map