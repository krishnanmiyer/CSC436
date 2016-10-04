import { Component } from '@angular/core';
import { FormBuilder, FormGroup  } from '@angular/forms';

@Component({
  selector: 'user-detail',
  templateUrl: 'app/userdetail.component.html'
})
export class UserDetailComponent { 
  model: UserDetail;

  constructor() {
    this.model = new UserDetail();
  }

  onSubmit(event:any) {
    console.log(JSON.stringify(this.model));
  }
}

export class UserDetail {
  name: string;
  email: string;
  age: number;
  dob: string;

  constructor() {
    this.dob = new Date().toISOString().slice(0,16);
  }
}