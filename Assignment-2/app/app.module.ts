import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CalculatorComponent }   from './app.component';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ CalculatorComponent ],
  bootstrap:    [ CalculatorComponent ]
})
export class AppModule { }