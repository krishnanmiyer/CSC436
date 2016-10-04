import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl  } from '@angular/forms';

@Component({
  selector: 'user-detail',
  templateUrl: 'app/userdetail.component.html'
})

export class UserDetailComponent {
  userDetailForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.userDetailForm = fb.group({
      'name': ['', Validators.compose([Validators.required, nameValidator])] ,
      'age': ['', Validators.compose([Validators.required])],
      'email': ['', Validators.compose([Validators.required])],
      'dob': ['', Validators.compose([Validators.required])],
      'gender': 'Male'
    });
  }  

  onSubmit(value: any): void {
    console.log('form values: ', value);
    
  }
}

function nameValidator(control: FormControl): { [s: string]: boolean } {
  return control.touched && control.value.trim() == ""  ? {"trailingSpace": true} : null; 
}