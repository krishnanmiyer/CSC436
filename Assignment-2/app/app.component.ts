import { Component } from '@angular/core';
@Component({
  selector: 'calculator',
  template: '<h1>{{title}}</h1><h2>{{hero}} details!</h2>'
})

export class CalculatorComponent {
  title = 'Tour of Heroes';
  hero = 'Windstorm';  
 }

export class Hero {
  id: number;
  name: string;
}
