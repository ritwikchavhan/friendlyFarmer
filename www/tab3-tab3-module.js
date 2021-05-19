(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "IqiF":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab3.page.html */ "h1hx");
/* harmony import */ var _tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3.page.scss */ "nRCe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _api_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/alert/alert.service */ "V1Sa");






const { Camera } = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"];
let Tab3Page = class Tab3Page {
    constructor(_alert) {
        this._alert = _alert;
        this.photo = '';
    }
    takePicture() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const image = yield Camera.getPhoto({
                quality: 90,
                allowEditing: true,
                source: _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["CameraSource"].Prompt,
                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["CameraResultType"].Uri
            });
            // image.webPath will contain a path that can be set as an image src.
            // You can access the original file using image.path, which can be
            // passed to the Filesystem API to read the raw data of the image,
            // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
            var imageUrl = image.webPath;
            // Can be set to the src of an image now
            this.photo = imageUrl;
        });
    }
    submit() {
        this._alert.presentAlert();
    }
};
Tab3Page.ctorParameters = () => [
    { type: _api_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
];
Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab3',
        template: _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab3Page);



/***/ }),

/***/ "OcaV":
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab3PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function() { return Tab3PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab3.page */ "IqiF");




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["Tab3Page"],
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ "h1hx":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Upload\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n\n    <div class=\"container\">\n      <div class=\"form ion-text-center\">\n        <form #form=\"ngForm\" (ngSubmit)=\"login(form)\">\n        <h2>Fill Details</h2>\n\n        \n          <ion-button color=\"dark\" (click)=\"takePicture()\">\n            <ion-icon slot=\"icon-only\" name=\"camera-outline\"></ion-icon>\n          </ion-button>\n        \n          <ion-img *ngIf=\"photo\" [src]=\"photo\"></ion-img>\n        \n        <ion-item lines='none'>\n          <ion-textarea placeholder=\"Describe Here\">\n          </ion-textarea>\n        </ion-item>\n    \n        <ion-button expand=\"block\" fill=\"solid\" mode=\"ios\" class=\"login-btn\" (click)=\"submit()\">Submit</ion-button>\n\n          \n        \n      </form>\n      </div>\n    </div>\n\n  \n</ion-content>\n");

/***/ }),

/***/ "k+ul":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "IqiF");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tab3-routing.module */ "OcaV");









let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab3PageRoutingModule"],
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })
], Tab3PageModule);



/***/ }),

/***/ "nRCe":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@keyframes slide-in-bottom {\n  0% {\n    transform: translateY(1000px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.container {\n  animation: slide-in-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n  min-height: 300px;\n  width: 100%;\n  background-color: white;\n  top: 0;\n  position: absolute;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n}\n.img1 {\n  margin-top: 100px;\n  height: 180px;\n}\n.login-btn {\n  margin-top: 20px;\n}\n.form {\n  padding: 10px;\n}\n.form ion-item {\n  border-style: solid;\n  border-radius: 10px;\n  border-width: 1px;\n  border-color: grey;\n  margin-top: 20px;\n}\n.form .signup-footer p {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  float: left;\n  color: var(--ion-color-primary);\n}\n.form .signup-footer .signup-login-btn {\n  float: right;\n}\n.form .signup-footer .signup-login-btn ion-icon {\n  font-size: 20px;\n}\n.my-custom-class {\n  --background: #e5e5e5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUEwTDtFQUEyQjtJQUF3Qyw2QkFBQTtJQUE2QixVQUFBO0VBaUJ4UjtFQWpCa1M7SUFBcUMsd0JBQUE7SUFBd0IsVUFBQTtFQXNCL1Y7QUFDRjtBQXRCQTtFQUMyRSx5RUFBQTtFQUN6RSxpQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLE1BQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUF5QkY7QUF0QkE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7QUF5QkY7QUF2QkE7RUFFRSxnQkFBQTtBQXlCRjtBQXRCQTtFQUNFLGFBQUE7QUF5QkY7QUF4QkU7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBMEJKO0FBdEJNO0VBQ0ksMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0FBd0JWO0FBdEJNO0VBQ0ksWUFBQTtBQXdCVjtBQXZCVTtFQUNJLGVBQUE7QUF5QmQ7QUFsQkE7RUFDRSxxQkFBQTtBQXFCRiIsImZpbGUiOiJ0YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZS1pbi1ib3R0b217MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgxMDAwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDEwMDBweCk7b3BhY2l0eTowfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgc2xpZGUtaW4tYm90dG9tezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMTAwMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgxMDAwcHgpO29wYWNpdHk6MH0xMDAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7b3BhY2l0eToxfX1cbi5jb250YWluZXJ7XG4gIC13ZWJraXQtYW5pbWF0aW9uOnNsaWRlLWluLWJvdHRvbSAuNXMgY3ViaWMtYmV6aWVyKC4yNSwuNDYsLjQ1LC45NCkgYm90aDthbmltYXRpb246c2xpZGUtaW4tYm90dG9tIC41cyBjdWJpYy1iZXppZXIoLjI1LC40NiwuNDUsLjk0KSBib3RoO1xuICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB0b3A6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG5cbn1cbi5pbWcxe1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgaGVpZ2h0OiAxODBweDtcbn1cbi5sb2dpbi1idG57XG4gIC8vIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCAxMzVkZWcsICM1MkU1RTcgMTAlLCAjMTMwQ0I3IDEwMCUpO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uZm9ybXtcbiAgcGFkZGluZzogMTBweDtcbiAgaW9uLWl0ZW17XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgIGJvcmRlci1jb2xvcjogZ3JleTtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG4gIFxuICAuc2lnbnVwLWZvb3RlcntcbiAgICAgIHB7XG4gICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICB9XG4gICAgICAuc2lnbnVwLWxvZ2luLWJ0bntcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH1cbn1cblxuXG4ubXktY3VzdG9tLWNsYXNzIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZTVlNWU1O1xufSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module.js.map