(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab4-tab4-module"],{

/***/ "1GDv":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.module.ts ***!
  \*************************************/
/*! exports provided: Tab4PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4PageModule", function() { return Tab4PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _tab4_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab4-routing.module */ "dkQB");
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab4.page */ "Wxre");







let Tab4PageModule = class Tab4PageModule {
};
Tab4PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tab4_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tab4PageRoutingModule"]
        ],
        declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"]]
    })
], Tab4PageModule);



/***/ }),

/***/ "Wxre":
/*!***********************************!*\
  !*** ./src/app/tab4/tab4.page.ts ***!
  \***********************************/
/*! exports provided: Tab4Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4Page", function() { return Tab4Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab4_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab4.page.html */ "kfDu");
/* harmony import */ var _tab4_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab4.page.scss */ "vacZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let Tab4Page = class Tab4Page {
    constructor() { }
    ngOnInit() {
    }
};
Tab4Page.ctorParameters = () => [];
Tab4Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab4',
        template: _raw_loader_tab4_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab4_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab4Page);



/***/ }),

/***/ "dkQB":
/*!*********************************************!*\
  !*** ./src/app/tab4/tab4-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab4PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4PageRoutingModule", function() { return Tab4PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab4.page */ "Wxre");




const routes = [
    {
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_3__["Tab4Page"]
    }
];
let Tab4PageRoutingModule = class Tab4PageRoutingModule {
};
Tab4PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Tab4PageRoutingModule);



/***/ }),

/***/ "kfDu":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"light\">\n    <ion-title>Activity</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"activity-group\">\n    <ion-list-header class=\"list-header-custom\">\n      Today\n    </ion-list-header>\n    <ion-row class=\"activity-item\">\n      <ion-col size=\"auto\">\n        <ion-avatar class=\"avatar-md\">\n          <img src=\"assets/img/avatars/2.jpg\" alt=\"\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col>\n        <strong>ironman</strong> started following you.\n        <span class=\"text-muted\"> 6h</span>\n      </ion-col>\n      <ion-col size=\"auto\">\n        <ion-button size=\"small\" color=\"secondary\">\n        \tFollow\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div class=\"activity-group\">\n    <ion-list-header class=\"list-header-custom\">\n      Yesterday\n    </ion-list-header>\n    <ion-row class=\"activity-item\">\n      <ion-col size=\"auto\">\n        <ion-avatar class=\"avatar-md\">\n          <img src=\"assets/img/avatars/9.jpg\" alt=\"\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col>\n        <strong>ironman</strong> started following you.\n        <span class=\"text-muted\"> 1d</span>\n      </ion-col>\n      <ion-col size=\"auto\">\n        <ion-button size=\"small\" color=\"secondary\">\n        \tFollow\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div class=\"activity-group\">\n    <ion-list-header class=\"list-header-custom\">\n      This Week\n    </ion-list-header>\n    <ion-row class=\"activity-item\" *ngFor=\"let i of [6,7,8,9]\">\n      <ion-col size=\"auto\">\n        <ion-avatar class=\"avatar-md\">\n          <img src=\"assets/img/avatars/{{i}}.jpg\" alt=\"\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col>\n        <div>\n          <strong>scarwitch</strong> liked your photo.\n          <span class=\"text-muted\"> 2d</span>\n        </div>\n        <div class=\"activity-actions text-muted text-sm\">\n          <ion-icon name=\"heart-outline\"></ion-icon>\n          <strong>Reply</strong>\n        </div>\n      </ion-col>\n      <ion-col size=\"auto\">\n        <ion-thumbnail class=\"avatar-md\">\n          <img src=\"assets/img/img_{{i % 4 + 1}}.png\" alt=\"\">\n        </ion-thumbnail>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "vacZ":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".list-header-custom {\n  font-size: 17px;\n}\n\n.activity-group {\n  border-bottom: 1px solid var(--ion-color-light);\n}\n\n.activity-group .activity-item {\n  padding: 8px;\n}\n\n.activity-group .activity-actions {\n  margin-top: 8px;\n}\n\n.activity-group .activity-actions ion-icon {\n  vertical-align: middle;\n  margin-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RhYjQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQUNKOztBQUVFO0VBQ0UsK0NBQUE7QUFDSjs7QUFDSTtFQUNFLFlBQUE7QUFDTjs7QUFFSTtFQUNFLGVBQUE7QUFBTjs7QUFFTTtFQUNFLHNCQUFBO0VBQ0EsaUJBQUE7QUFBUiIsImZpbGUiOiJ0YWI0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LWhlYWRlci1jdXN0b20ge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgfVxuICBcbiAgLmFjdGl2aXR5LWdyb3VwIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgXG4gICAgLmFjdGl2aXR5LWl0ZW0ge1xuICAgICAgcGFkZGluZzogOHB4O1xuICAgIH1cbiAgXG4gICAgLmFjdGl2aXR5LWFjdGlvbnMge1xuICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICBcbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gICJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=tab4-tab4-module.js.map