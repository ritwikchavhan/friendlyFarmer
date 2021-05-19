(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "34Y5":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "V6Ie");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "r67e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _api_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/alert/alert.service */ "V1Sa");
/* harmony import */ var _api_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/auth/auth.service */ "skkq");
/* harmony import */ var _api_loading_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/loading/loading.service */ "FXsH");
/* harmony import */ var _api_toast_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api/toast/toast.service */ "Mdsl");









let LoginPage = class LoginPage {
    constructor(_loading, _auth, _router, _toast, _alert) {
        this._loading = _loading;
        this._auth = _auth;
        this._router = _router;
        this._toast = _toast;
        this._alert = _alert;
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
    // login(data){
    //   this._loading.presentLoading();
    //   console.log(data)
    //   let response;
    //   // console.log(data);
    //   this._auth.login(data).then( data => {
    //     data.subscribe(
    //       result => {
    //         this._loading.dismissLoading();
    //         console.log(result);
    //         response = result;
    //         if(response.status){
    //           this._alert.successAlert();
    //           this._toast.show('Login Succesfull!');
    //           this._router.navigateByUrl('/tabs/tab3');
    //         }
    //         else{
    //           this._alert.failedAlert();
    //           this._toast.show(response.message);
    //         }
    //       },
    //       error => {console.log(error)}
    //     )
    //   })
    // }
    login(data) {
        this._router.navigateByUrl('/tabs/tab3');
    }
};
LoginPage.ctorParameters = () => [
    { type: _api_loading_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"] },
    { type: _api_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _api_toast_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"] },
    { type: _api_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginPage);



/***/ }),

/***/ "V6Ie":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content >\n  <div class=\"ion-text-center\">\n    <img class=\"img1\" src=\"../../assets/img/login.png\">\n    <h1>Friendly Farmer</h1>\n  </div>\n  \n    <div class=\"container\">\n      <div class=\"form ion-text-center\">\n        <form #form=\"ngForm\" (ngSubmit)=\"login(form.value)\">\n        <h2>Login </h2>\n        \n        <ion-item lines='none'>\n          <ion-input name=\"mobile_no\" ngModel type=\"number\" placeholder='Mobile'></ion-input>\n        </ion-item>\n    \n        <ion-item lines='none'>\n          <ion-input placeholder='Password' [type]=\"passwordType\" clearOnEdit=\"false\" name=\"password\" ngModel></ion-input>\n          <ion-icon item-end [name]=\"passwordIcon\" class=\"passwordIcon\" (click)='hideShowPassword()'></ion-icon>\n        </ion-item>\n        <ion-button type=\"submit\" expand=\"block\" fill=\"solid\" mode=\"ios\" class=\"login-btn\">Login</ion-button>\n        <br>\n        <ion-button fill=\"clear\" class=\"signup-btn\" routerLink=\"/signup\">\n          Sign Up<ion-icon name=\"arrow-forward-sharp\"></ion-icon>\n        </ion-button>\n          \n        \n      </form>\n      </div>\n    </div>\n  </ion-content>");

/***/ }),

/***/ "X3zk":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "euwS");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "34Y5");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "euwS":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "34Y5");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "r67e":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: linear-gradient( 135deg, #81FBB8 10%, #28C76F 100%);\n}\n\n@keyframes slide-in-bottom {\n  0% {\n    transform: translateY(1000px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n.container {\n  animation: slide-in-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n  min-height: 300px;\n  width: 100%;\n  background-color: white;\n  bottom: 0;\n  position: absolute;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n}\n\n.img1 {\n  margin-top: 100px;\n  height: 180px;\n}\n\n.login-btn {\n  margin-top: 20px;\n}\n\n.form {\n  padding: 10px;\n}\n\n.form ion-item {\n  border-style: solid;\n  border-radius: 10px;\n  border-width: 1px;\n  border-color: grey;\n  margin-top: 20px;\n}\n\n.form .signup-btn {\n  float: right;\n}\n\n.form .signup-btn ion-icon {\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQkE7RUFDSSxpRUFBQTtBQWhCSjs7QUFtQjRMO0VBQTJCO0lBQXdDLDZCQUFBO0lBQTZCLFVBQUE7RUFBMVI7RUFBb1M7SUFBcUMsd0JBQUE7SUFBd0IsVUFBQTtFQUtqVztBQUNGOztBQUxFO0VBQzJFLHlFQUFBO0VBQ3pFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQVFKOztBQUxFO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0FBUUo7O0FBTkU7RUFFRSxnQkFBQTtBQVFKOztBQUxFO0VBQ0UsYUFBQTtBQVFKOztBQVBJO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQVNOOztBQU5JO0VBQ0ksWUFBQTtBQVFSOztBQVBRO0VBQ0ksZUFBQTtBQVNaIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vICNjb250YWluZXIge1xuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgbGVmdDogMDtcbi8vICAgICByaWdodDogMDtcbi8vICAgICB0b3A6IDUwJTtcbi8vICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4vLyAgIH1cblxuLy8gICAucGFzc3dvcmRJY29ue1xuLy8gICAgIGZvbnQtc2l6ZTogMnJlbSAhaW1wb3J0YW50O1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICB0b3A6IDIycHg7XG4vLyAgICAgcmlnaHQ6IDA7XG4vLyAgICAgbWFyZ2luOiAwIGF1dG87XG4vLyAgfVxuXG5pb24tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCggMTM1ZGVnLCAjODFGQkI4IDEwJSwgIzI4Qzc2RiAxMDAlKTtcbiAgICAvLyAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCggMTM1ZGVnLCAjNTJFNUU3IDEwJSwgIzEzMENCNyAxMDAlKTtcbiAgfVxuICBALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtaW4tYm90dG9tezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMTAwMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgxMDAwcHgpO29wYWNpdHk6MH0xMDAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIHNsaWRlLWluLWJvdHRvbXswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDEwMDBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMTAwMHB4KTtvcGFjaXR5OjB9MTAwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApO29wYWNpdHk6MX19XG4gIC5jb250YWluZXJ7XG4gICAgLXdlYmtpdC1hbmltYXRpb246c2xpZGUtaW4tYm90dG9tIC41cyBjdWJpYy1iZXppZXIoLjI1LC40NiwuNDUsLjk0KSBib3RoO2FuaW1hdGlvbjpzbGlkZS1pbi1ib3R0b20gLjVzIGN1YmljLWJlemllciguMjUsLjQ2LC40NSwuOTQpIGJvdGg7XG4gICAgbWluLWhlaWdodDogMzAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xuICBcbiAgfVxuICAuaW1nMXtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICBoZWlnaHQ6IDE4MHB4O1xuICB9XG4gIC5sb2dpbi1idG57XG4gICAgLy8gLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIDEzNWRlZywgIzUyRTVFNyAxMCUsICMxMzBDQjcgMTAwJSk7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuICBcbiAgLmZvcm17XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBpb24taXRlbXtcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICBib3JkZXItY29sb3I6IGdyZXk7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cbiAgICBcbiAgICAuc2lnbnVwLWJ0bntcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBpb24tYnV0dG9uLm90aGVyLXBhZ2V7XG4gIC8vICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIDEzNWRlZywgI0FCRENGRiAxMCUsICMwMzk2RkYgMTAwJSk7XG4gIC8vIH0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map