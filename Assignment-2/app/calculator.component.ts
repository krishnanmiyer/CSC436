import { Component } from '@angular/core';

@Component({
  selector: 'calculator',
  templateUrl: 'app/calculator.component.html',
  styleUrls: ['app/calculator.component.css']
})

export class CalculatorComponent {
  calculator: Calculator;
  display: string;

  clicked(event) {
    if (event.target.type == 'button') {

      if (this.calculator == undefined) {
        this.calculator = new Calculator();
      }

      let v = event.target.innerText;

      if (this.isNumber(v)) {
        this.calculator.setValue(v);
      }
      else if (this.isOperator(v)) {
        this.calculator.setOperator(v);
      }
      else if (v == '=') {
        this.display = String(this.calculator.calculate());
        return;
      }
      else {
        this.calculator.clear();
      }
      this.display = this.calculator.toString();
    }
  }

  onKey(event:KeyboardEvent) {
    console.log("---->" + (<HTMLInputElement>event.target).value);
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
        return true;
      default:
        return false;
    }
  }
}

export class Calculator {
  private _oldValue: number = undefined;
  private _newValue: number = undefined;
  private _operator: string = "";

  toString() {
    if (this._operator.length == 0) {
      return String(this._oldValue);
    }
    else if (this._operator.length > 0 && this._newValue == undefined) {
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

  setValue(v) {
    if (this._operator.length == 0 ) {
        this._oldValue = (this._oldValue == undefined || this._oldValue == 0) ? v : this._oldValue + v;
    }
    else  {
        this._newValue = (this._newValue == undefined || this._newValue == 0) ? v : this._newValue + v;
    }
  }

  setOperator(v) {
    this._operator = v;
  }

  calculate() {
    if (this._oldValue == undefined || this._newValue == undefined || this._operator.length == 0) {
        return 0;
    }    
    
    switch (this._operator) {
      case '+':
        this._oldValue = Number(this._oldValue) +  Number(this._newValue);
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
}