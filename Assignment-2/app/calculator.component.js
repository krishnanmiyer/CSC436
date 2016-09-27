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
var CalculatorComponent = (function () {
    function CalculatorComponent() {
    }
    CalculatorComponent.prototype.doWork = function (v) {
        if (this.calculator == undefined) {
            this.calculator = new Calculator();
        }
        if (this.isNumber(v)) {
            this.calculator.setValue(v);
        }
        else if (this.isOperator(v)) {
            this.calculator.setOperator(v);
            if (v == '=') {
                this.display = String(this.calculator.calculate());
            }
        }
        else {
            this.calculator.clear();
        }
        this.display = this.calculator.toString();
    };
    CalculatorComponent.prototype.clicked = function (event) {
        if (event.target.type == 'button') {
            this.doWork(event.target.innerText);
        }
    };
    CalculatorComponent.prototype.keyUp = function (event) {
        if ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 111) || event.keyCode == 27 || event.keyCode == 13) {
            this.doWork(String.fromCharCode(event.which));
        }
    };
    CalculatorComponent.prototype.isNumber = function (n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };
    CalculatorComponent.prototype.isOperator = function (o) {
        switch (o) {
            case '+':
            case '-':
            case '/':
            case 'x':
            case "=":
                return true;
            default:
                return false;
        }
    };
    CalculatorComponent = __decorate([
        core_1.Component({
            selector: 'calculator',
            templateUrl: 'app/calculator.component.html',
            styleUrls: ['app/calculator.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], CalculatorComponent);
    return CalculatorComponent;
}());
exports.CalculatorComponent = CalculatorComponent;
var Calculator = (function () {
    function Calculator() {
        this._oldValue = undefined;
        this._newValue = undefined;
        this._operator = "";
    }
    Calculator.prototype.setValue = function (v) {
        if (this._operator.length == 0) {
            this._oldValue = (this._oldValue == undefined || this._oldValue == 0) ? v : this._oldValue + v;
        }
        else if (this._operator == "=") {
            this._oldValue = v;
            this._operator = "";
        }
        else {
            this._newValue = (this._newValue == undefined || this._newValue == 0) ? v : this._newValue + v;
        }
    };
    Calculator.prototype.setOperator = function (v) {
        if (this._oldValue != undefined && this._newValue != undefined && (this._operator != "=" || this._operator != "")) {
            this.calculate();
        }
        this._operator = v;
    };
    Calculator.prototype.calculate = function () {
        if (this._oldValue == undefined || this._newValue == undefined || this._operator.length == 0) {
            return 0;
        }
        switch (this._operator) {
            case '+':
                this._oldValue = Number(this._oldValue) + Number(this._newValue);
                break;
            case '-':
                this._oldValue -= this._newValue;
                break;
            case '/':
                this._oldValue /= this._newValue;
                break;
            case 'x':
                this._oldValue *= this._newValue;
                break;
        }
        this._newValue = undefined;
        this._operator = "";
        return this._oldValue;
    };
    Calculator.prototype.toString = function () {
        if (this._operator.length == 0 || this._operator == "=") {
            return String(this._oldValue);
        }
        else if (this._operator.length > 0 && this._newValue == undefined) {
            if (this._oldValue == undefined)
                this._oldValue = 0;
            return this._oldValue + ' ' + this._operator;
        }
        else {
            return this._oldValue + ' ' + this._operator + ' ' + this._newValue;
        }
    };
    Calculator.prototype.clear = function () {
        this._oldValue = undefined;
        this._newValue = undefined;
        this._operator = "";
        this.setValue(0);
    };
    return Calculator;
}());
exports.Calculator = Calculator;
//# sourceMappingURL=calculator.component.js.map