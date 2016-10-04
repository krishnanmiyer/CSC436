import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserDetailComponent }   from './userdetail.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ UserDetailComponent ],
  bootstrap:    [ UserDetailComponent ]
})
export class UserDetailModule { }