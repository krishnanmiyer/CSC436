"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var UserDetailComponent = (function () {
    function UserDetailComponent(fb) {
        this.userDetailForm = fb.group({
            'name': ['', forms_1.Validators.compose([forms_1.Validators.required, CustomValidators.stringValidator])],
            'email': ['', forms_1.Validators.compose([forms_1.Validators.required, CustomValidators.emailValidator])],
            'age': ['', forms_1.Validators.compose([forms_1.Validators.required, CustomValidators.numberValidator])],
            'dob': ['', forms_1.Validators.compose([forms_1.Validators.required])],
            'gender': 'Male'
        }, { validator: CustomValidators.matchingAgeValidator('age', 'dob') });
    }
    UserDetailComponent.prototype.onBlur = function (event) {
        if (event.target.value != '') {
            this.userDetailForm.patchValue({ name: event.target.value.trim() });
            event.target.value = event.target.value.trim();
        }
    };
    UserDetailComponent.prototype.onSubmit = function (value) {
        this.submittedValues = value;
        //reset form    
        this.userDetailForm.reset({ 'gender': 'Male' });
    };
    UserDetailComponent = __decorate([
        core_1.Component({
            selector: 'user-detail',
            templateUrl: 'app/userdetail.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], UserDetailComponent);
    return UserDetailComponent;
}());
exports.UserDetailComponent = UserDetailComponent;
var CustomValidators = (function () {
    function CustomValidators() {
    }
    CustomValidators.stringValidator = function (control) {
        return control.dirty && control.value != "" && control.value.trim() == "" ? { "invalid": true } : null;
    };
    CustomValidators.emailValidator = function (control) {
        var emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return control.dirty && control.value != "" && !control.value.match(emailRegex) ? { "invalid": true } : null;
    };
    CustomValidators.numberValidator = function (control) {
        return control.dirty && isNaN(control.value) || (Number(control.value) > 150 || Number(control.value) <= 0) ? { "invalid": true } : null;
    };
    CustomValidators.matchingAgeValidator = function (age, dob) {
        return function (group) {
            var ageVal = group.controls[age].value;
            var dobVal = group.controls[dob].value;
            if (ageVal == '' && dobVal == '')
                return null;
            var ageDifMs = Date.now() - new Date(dobVal).getTime();
            var ageDate = new Date(ageDifMs);
            if (Math.abs(ageDate.getUTCFullYear() - 1970) != ageVal) {
                return {
                    invalid: true
                };
            }
        };
    };
    return CustomValidators;
}());
exports.CustomValidators = CustomValidators;
//# sourceMappingURL=userdetail.component.js.map