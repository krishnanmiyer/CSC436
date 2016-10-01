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
        //substitue uncommon keys 
        switch (v) {
            case 'Escape':
            case 'Esc':
            case 'c':
                v = 'C';
                break;
            case 'Enter':
                v = '=';
                break;
        }
        //instantiate Calculator class ONLY if not done before
        if (this.calculator == undefined) {
            this.calculator = new Calculator();
        }
        //evalulate input and perform operations
        if (this.evalNumber(v)) {
            this.calculator.setValue(v);
        }
        else if (this.evalOperator(v)) {
            this.calculator.setOperator(v);
            if (v == '=') {
                this.display = String(this.calculator.calculate());
            }
        }
        else if (v == 'C') {
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
        this.doWork(event.key);
    };
    CalculatorComponent.prototype.evalNumber = function (n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };
    CalculatorComponent.prototype.evalOperator = function (o) {
        switch (o) {
            case '+':
            case '-':
            case '/':
            case '*':
            case "=":
                return true;
            default:
                return false;
        }
    };
    CalculatorComponent = __decorate([
        core_1.Component({
            host: { '(window:keypress)': 'keyUp($event)' },
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
        this.oldValue = undefined;
        this.newValue = undefined;
        this.operator = "";
    }
    Calculator.prototype.setValue = function (v) {
        if (this.operator.length == 0) {
            this.oldValue = (this.oldValue == undefined || this.oldValue == 0) ? v : this.oldValue + v;
        }
        else if (this.operator == "=") {
            this.oldValue = v;
            this.operator = "";
        }
        else {
            this.newValue = (this.newValue == undefined || this.newValue == 0) ? v : this.newValue + v;
        }
    };
    Calculator.prototype.setOperator = function (v) {
        if (this.oldValue != undefined && this.newValue != undefined && (this.operator != "=" || this.operator != "")) {
            this.calculate();
        }
        this.operator = v;
    };
    Calculator.prototype.calculate = function () {
        if (this.oldValue == undefined || this.newValue == undefined || this.operator.length == 0) {
            return 0;
        }
        switch (this.operator) {
            case '+':
                this.oldValue = Number(this.oldValue) + Number(this.newValue);
                break;
            case '-':
                this.oldValue -= this.newValue;
                break;
            case '/':
                this.oldValue /= this.newValue;
                break;
            case '*':
                this.oldValue *= this.newValue;
                break;
        }
        this.newValue = undefined;
        this.operator = "";
        return this.oldValue;
    };
    Calculator.prototype.toString = function () {
        if (this.operator.length == 0 || this.operator == "=") {
            return String(this.oldValue);
        }
        else if (this.operator.length > 0 && this.newValue == undefined) {
            if (this.oldValue == undefined)
                this.oldValue = 0;
            return this.oldValue + ' ' + this.operator;
        }
        else {
            return this.oldValue + ' ' + this.operator + ' ' + this.newValue;
        }
    };
    Calculator.prototype.clear = function () {
        this.oldValue = undefined;
        this.newValue = undefined;
        this.operator = "";
        this.setValue(0);
    };
    return Calculator;
}());
exports.Calculator = Calculator;
//# sourceMappingURL=calculator.component.js.map