import { Component } from '@angular/core';

export class MathValue {
  oldValue: number;
  newValue: number;
  operatorValue: string;
}

@Component({
  selector: 'calculator',
  templateUrl: 'app/calculator.component.html',
  styleUrls: ['app/calculator.component.css']
})

export class CalculatorComponent {
   clicked(event) {
    console.log(event.srcElement.attributes.type == 'button');
    if (event.srcElement.attributes.type == 'button') {
      console.log("button clicked");
    }
  }
}