import { Component } from '@angular/core';

@Component({
  selector: 'calculator',
  templateUrl: 'app/calculator.component.html',
  styleUrls: ['app/calculator.component.css']
})

export class CalculatorComponent {
  calculator: Calculator;
  display: string;

  private doWork(v: string) {
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
  }

  clicked(event) {
    if (event.target.type == 'button') {
      this.doWork(event.target.innerText);
    }
  }

  keyUp(event: KeyboardEvent) {
    if ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 111) || event.keyCode == 27 || event.keyCode == 13) {
      this.doWork(String.fromCharCode(event.which));
    }
  }

  isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  isOperator(o) {
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
  }
}

interface ICalculator {
  setValue(v: number);
  setOperator(v: string);
  calculate(): number;
  toString();
  clear();
}

export class Calculator implements ICalculator {
  private _oldValue: number = undefined;
  private _newValue: number = undefined;
  private _operator: string = "";

  setValue(v) {
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
  }

  setOperator(v) {
    if (this._oldValue != undefined && this._newValue != undefined && (this._operator != "=" || this._operator != "")) {
      this.calculate();
    }
    this._operator = v;
  }

  calculate() {
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
  }

  toString() {
    if (this._operator.length == 0 || this._operator == "=") {
      return String(this._oldValue);
    }
    else if (this._operator.length > 0 && this._newValue == undefined) {
      if (this._oldValue == undefined) this._oldValue = 0;

      return this._oldValue + ' ' + this._operator;
    }
    else {
      return this._oldValue + ' ' + this._operator + ' ' + this._newValue;
    }
  }

  clear() {
    this._oldValue = undefined;
    this._newValue = undefined;
    this._operator = "";
    this.setValue(0);
  }
}