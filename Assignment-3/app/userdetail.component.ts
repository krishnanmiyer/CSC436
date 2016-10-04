import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl  } from '@angular/forms';

@Component({
  selector: 'user-detail',
  templateUrl: 'app/userdetail.component.html'
})

export class UserDetailComponent {
  userDetailForm: FormGroup;
  submittedValues: string;

  constructor(fb: FormBuilder) {
    this.userDetailForm = fb.group({
      'name': ['', Validators.compose([Validators.required, CustomValidators.stringValidator])],
      'email': ['', Validators.compose([Validators.required, CustomValidators.emailValidator])],
      'age': ['', Validators.compose([Validators.required, CustomValidators.numberValidator])],
      'dob': ['', Validators.compose([Validators.required])],
      'gender': 'Male'
    }, { validator: CustomValidators.matchingAgeValidator('age', 'dob') });
  }

  onBlur(event: any): void {
    if (event.target.value != '') {
      this.userDetailForm.patchValue({ name: event.target.value.trim() });
      event.target.value = event.target.value.trim();
    }
  }

  onSubmit(value: any): void {
    this.submittedValues = value;

    //reset form    
    this.userDetailForm.reset({ 'gender': 'Male' });
  }
}

export class CustomValidators {
  static stringValidator(control: FormControl): { [s: string]: boolean } {

    return control.dirty && control.value != "" && control.value.trim() == "" ? { "invalid": true } : null;
  }

  static emailValidator(control: FormControl): { [s: string]: boolean } {
    var emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return control.dirty && control.value != "" && !control.value.match(emailRegex) ? { "invalid": true } : null;
  }

  static numberValidator(control: FormControl): { [s: string]: boolean } {
    return control.dirty && isNaN(control.value) || (Number(control.value) > 150 || Number(control.value) <= 0) ? { "invalid": true } : null;
  }

  static matchingAgeValidator(age: string, dob: string) {
    return (group: FormGroup): { [key: string]: any } => {
      let ageVal = group.controls[age].value;
      let dobVal = group.controls[dob].value;

      if (ageVal == '' && dobVal == '') return null;

      let ageDifMs = Date.now() - new Date(dobVal).getTime();
      let ageDate = new Date(ageDifMs);

      if (Math.abs(ageDate.getUTCFullYear() - 1970) != ageVal) {
        return {
          invalid: true
        };
      }
    }
  }
}

