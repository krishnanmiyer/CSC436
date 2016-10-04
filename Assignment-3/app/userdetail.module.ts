import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserDetailComponent }   from './userdetail.component';
import { ReactiveFormsModule  }   from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule ],
  declarations: [ UserDetailComponent ],
  bootstrap:    [ UserDetailComponent ]
})
export class UserDetailModule { }