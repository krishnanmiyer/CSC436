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
            'name': ['', forms_1.Validators.compose([forms_1.Validators.required, nameValidator])],
            'age': ['', forms_1.Validators.compose([forms_1.Validators.required])],
            'email': ['', forms_1.Validators.compose([forms_1.Validators.required])],
            'dob': ['', forms_1.Validators.compose([forms_1.Validators.required])],
            'gender': 'Male'
        });
    }
    UserDetailComponent.prototype.onSubmit = function (value) {
        console.log('form values: ', value);
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
function nameValidator(control) {
    return control.touched && control.value.trim() == "" ? { "trailingSpace": true } : null;
}
//# sourceMappingURL=userdetail.component.js.map