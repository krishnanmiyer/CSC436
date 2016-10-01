import { Component } from '@angular/core';

@Component({
  host: { '(window:keypress)': 'keyUp($event)' },
  selector: 'calculator',
  templateUrl: 'app/calculator.component.html',
  styleUrls: ['app/calculator.component.css']
})

export class CalculatorComponent {
  calculator: Calculator;
  display: string;
  
  private doWork(v: string): void {
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
      if (v == '=') { // display only if the operator is equals (=)
        this.display = String(this.calculator.calculate());
      }
    }
    else if (v == 'C') { //reset everything
      this.calculator.clear();
    }
    this.display = this.calculator.toString();
  }

  clicked(event) : void {
    if (event.target.type == 'button') {
      this.doWork(event.target.innerText);
    }
  }

  keyUp(event): void {
    this.doWork(event.key);
  }

  evalNumber(n): boolean {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  evalOperator(o) : boolean {
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
  private oldValue: number = undefined;
  private newValue: number = undefined;
  private operator: string = "";

  setValue(v) : void {
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
  }

  setOperator(v): void {
    if (this.oldValue != undefined && this.newValue != undefined && (this.operator != "=" || this.operator != "")) {
      this.calculate();
    }
    this.operator = v;
  }

  calculate(): number {
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
  }

  toString(): string {
    if (this.operator.length == 0 || this.operator == "=") {
      return String(this.oldValue);
    }
    else if (this.operator.length > 0 && this.newValue == undefined) {
      if (this.oldValue == undefined) this.oldValue = 0;

      return this.oldValue + ' ' + this.operator;
    }
    else {
      return this.oldValue + ' ' + this.operator + ' ' + this.newValue;
    }
  }

  clear(): void {
    this.oldValue = undefined;
    this.newValue = undefined;
    this.operator = "";
    this.setValue(0);
  }
}