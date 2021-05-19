(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "6h0i":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content >\n  <div class=\"ion-text-center\">\n    <img class=\"img1\" src=\"../../assets/img/login.png\">\n    <h1>Friendly Farmer</h1>\n  </div>\n  \n    <div class=\"container\">\n      <div class=\"form ion-text-center\">\n        <form #form=\"ngForm\" (ngSubmit)=\"register(form.value)\">\n        <h2>Create Account </h2>\n\n        <ion-item lines='none'>\n          <ion-input name=\"full_name\" ngModel type=\"text\" placeholder='Full Name'></ion-input>\n        </ion-item>\n        \n        <ion-item lines='none'>\n          <ion-input name=\"mobile_no\" ngModel type=\"number\" placeholder='Mobile No.'></ion-input>\n        </ion-item>\n    \n        <ion-item lines='none'>\n          <ion-input placeholder='Password' [type]=\"passwordType\" clearOnEdit=\"false\" name=\"password\" ngModel></ion-input>\n          <ion-icon item-end [name]=\"passwordIcon\" class=\"passwordIcon\" (click)='hideShowPassword()'></ion-icon>\n        </ion-item>\n\n        <ion-item lines='none'>\n          <ion-input placeholder='Confirm Password'  clearOnEdit=\"false\" name=\"c_password\" ngModel></ion-input>\n        </ion-item>\n        <ion-button type=\"submit\" expand=\"block\" fill=\"solid\" mode=\"ios\" class=\"login-btn\">Sign Up</ion-button>\n        <br>\n        <div class=\"signup-footer\">\n          <p>\n            Already have an account?\n          </p>\n\n          <ion-button fill=\"clear\" class=\"signup-login-btn\" routerLink=\"/login\">\n            Login<ion-icon name=\"arrow-forward-sharp\"></ion-icon>\n          </ion-button>\n        </div>\n          \n        \n      </form>\n      </div>\n    </div>\n  </ion-content>");

/***/ }),

/***/ "RPFs":
/*!*************************************************!*\
  !*** ./src/app/signup/signup-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SignupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function() { return SignupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.page */ "yL7A");




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ "T9iC":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup-routing.module */ "RPFs");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "yL7A");







let SignupPageModule = class SignupPageModule {
};
SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"]
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
    })
], SignupPageModule);



/***/ }),

/***/ "fJgH":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: linear-gradient( 135deg, #81FBB8 10%, #28C76F 100%);\n}\n\n@keyframes slide-in-bottom {\n  0% {\n    transform: translateY(1000px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n.container {\n  animation: slide-in-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n  min-height: 300px;\n  width: 100%;\n  background-color: white;\n  bottom: 0;\n  position: absolute;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n}\n\n.img1 {\n  margin-top: 100px;\n  height: 180px;\n}\n\n.login-btn {\n  margin-top: 20px;\n}\n\n.form {\n  padding: 10px;\n}\n\n.form ion-item {\n  border-style: solid;\n  border-radius: 10px;\n  border-width: 1px;\n  border-color: grey;\n  margin-top: 20px;\n}\n\n.form .signup-footer p {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  float: left;\n  color: var(--ion-color-primary);\n}\n\n.form .signup-footer .signup-login-btn {\n  float: right;\n}\n\n.form .signup-footer .signup-login-btn ion-icon {\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJBO0VBQ0ksaUVBQUE7QUFoQko7O0FBbUI0TDtFQUEyQjtJQUF3Qyw2QkFBQTtJQUE2QixVQUFBO0VBQTFSO0VBQW9TO0lBQXFDLHdCQUFBO0lBQXdCLFVBQUE7RUFLalc7QUFDRjs7QUFMRTtFQUMyRSx5RUFBQTtFQUN6RSxpQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUFRSjs7QUFMRTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtBQVFKOztBQU5FO0VBRUUsZ0JBQUE7QUFRSjs7QUFMRTtFQUNFLGFBQUE7QUFRSjs7QUFQSTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFTTjs7QUFMUTtFQUNJLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtBQU9aOztBQUxRO0VBQ0ksWUFBQTtBQU9aOztBQU5ZO0VBQ0ksZUFBQTtBQVFoQiIsImZpbGUiOiJzaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gI2NvbnRhaW5lciB7XG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICBsZWZ0OiAwO1xuLy8gICAgIHJpZ2h0OiAwO1xuLy8gICAgIHRvcDogNTAlO1xuLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbi8vICAgfVxuXG4vLyAgIC5wYXNzd29yZEljb257XG4vLyAgICAgZm9udC1zaXplOiAycmVtICFpbXBvcnRhbnQ7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIHRvcDogMjJweDtcbi8vICAgICByaWdodDogMDtcbi8vICAgICBtYXJnaW46IDAgYXV0bztcbi8vICB9XG5cbmlvbi1jb250ZW50e1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCAxMzVkZWcsICM4MUZCQjggMTAlLCAjMjhDNzZGIDEwMCUpO1xuICAgIC8vIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCAxMzVkZWcsICM1MkU1RTcgMTAlLCAjMTMwQ0I3IDEwMCUpO1xuICB9XG4gIEAtd2Via2l0LWtleWZyYW1lcyBzbGlkZS1pbi1ib3R0b217MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgxMDAwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDEwMDBweCk7b3BhY2l0eTowfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgc2xpZGUtaW4tYm90dG9tezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMTAwMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgxMDAwcHgpO29wYWNpdHk6MH0xMDAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7b3BhY2l0eToxfX1cbiAgLmNvbnRhaW5lcntcbiAgICAtd2Via2l0LWFuaW1hdGlvbjpzbGlkZS1pbi1ib3R0b20gLjVzIGN1YmljLWJlemllciguMjUsLjQ2LC40NSwuOTQpIGJvdGg7YW5pbWF0aW9uOnNsaWRlLWluLWJvdHRvbSAuNXMgY3ViaWMtYmV6aWVyKC4yNSwuNDYsLjQ1LC45NCkgYm90aDtcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3R0b206IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIFxuICB9XG4gIC5pbWcxe1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgIGhlaWdodDogMTgwcHg7XG4gIH1cbiAgLmxvZ2luLWJ0bntcbiAgICAvLyAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCggMTM1ZGVnLCAjNTJFNUU3IDEwJSwgIzEzMENCNyAxMDAlKTtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG4gIFxuICAuZm9ybXtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGlvbi1pdGVte1xuICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICAgIGJvcmRlci1jb2xvcjogZ3JleTtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfVxuICAgIFxuICAgIC5zaWdudXAtZm9vdGVye1xuICAgICAgICBwe1xuICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICB9XG4gICAgICAgIC5zaWdudXAtbG9naW4tYnRue1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICB9XG4gIC8vIGlvbi1idXR0b24ub3RoZXItcGFnZXtcbiAgLy8gICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCggMTM1ZGVnLCAjQUJEQ0ZGIDEwJSwgIzAzOTZGRiAxMDAlKTtcbiAgLy8gfSJdfQ== */");

/***/ }),

/***/ "yL7A":
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./signup.page.html */ "6h0i");
/* harmony import */ var _signup_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup.page.scss */ "fJgH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _api_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/auth/auth.service */ "skkq");
/* harmony import */ var _api_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/loading/loading.service */ "FXsH");
/* harmony import */ var _api_toast_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/toast/toast.service */ "Mdsl");








let SignupPage = class SignupPage {
    constructor(_loading, _auth, _router, _toast) {
        this._loading = _loading;
        this._auth = _auth;
        this._router = _router;
        this._toast = _toast;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
    }
    ngOnInit() {
    }
    hideShowPassword() {
        console.log(this.passwordType);
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    }
    register(data) {
        this._loading.presentLoading();
        console.log(data);
        let response;
        // console.log(data);
        this._auth.register(data).then(data => {
            data.subscribe(result => {
                this._loading.dismissLoading();
                console.log(result);
                response = result;
                if (response.status) {
                    this._toast.show('Employee Added');
                    this._router.navigateByUrl('/login');
                }
                else {
                    this._toast.show(response.message);
                }
            }, error => { console.log(error); });
        });
    }
};
SignupPage.ctorParameters = () => [
    { type: _api_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] },
    { type: _api_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _api_toast_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] }
];
SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-signup',
        template: _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_signup_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SignupPage);



/***/ })

}]);
//# sourceMappingURL=signup-signup-module.js.map