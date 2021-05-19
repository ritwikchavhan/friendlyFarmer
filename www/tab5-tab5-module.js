(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab5-tab5-module"],{

/***/ "FFfc":
/*!*************************************!*\
  !*** ./src/app/tab5/tab5.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile-header {\n  padding: 8px;\n}\n\n.profile-stats {\n  text-align: center;\n}\n\n.profile-stats .stats-number {\n  font-size: 17px;\n  font-weight: 700;\n}\n\n.profile-stats .stats-label {\n  font-size: 13px;\n}\n\n.hash-tag {\n  text-decoration: none;\n  margin-right: 4px;\n}\n\n.profile-info {\n  line-height: 1.5;\n  padding-bottom: 0;\n}\n\n.post-grid ion-row {\n  --ion-grid-column-padding: 1px;\n}\n\n.post-grid .post-item {\n  width: 100%;\n  height: 0;\n  padding-top: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RhYjUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7QUFDSjs7QUFDSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUNOOztBQUVJO0VBQ0UsZUFBQTtBQUFOOztBQUlFO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtBQURKOztBQUlFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQURKOztBQUtJO0VBQ0UsOEJBQUE7QUFGTjs7QUFLSTtFQUNFLFdBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUFITiIsImZpbGUiOiJ0YWI1LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWhlYWRlciB7XG4gICAgcGFkZGluZzogOHB4O1xuICB9XG4gIFxuICAucHJvZmlsZS1zdGF0cyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBcbiAgICAuc3RhdHMtbnVtYmVyIHtcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgfVxuICBcbiAgICAuc3RhdHMtbGFiZWwge1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgIH1cbiAgfVxuICBcbiAgLmhhc2gtdGFnIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIH1cbiAgXG4gIC5wcm9maWxlLWluZm8ge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gIH1cbiAgXG4gIC5wb3N0LWdyaWQge1xuICAgIGlvbi1yb3cge1xuICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMXB4O1xuICAgIH1cbiAgXG4gICAgLnBvc3QtaXRlbSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMDtcbiAgICAgIHBhZGRpbmctdG9wOiAxMDAlO1xuICAgIH1cbiAgfVxuICAiXX0= */");

/***/ }),

/***/ "Ki12":
/*!*********************************************!*\
  !*** ./src/app/tab5/tab5-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab5PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab5PageRoutingModule", function() { return Tab5PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab5_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab5.page */ "Tlso");




const routes = [
    {
        path: '',
        component: _tab5_page__WEBPACK_IMPORTED_MODULE_3__["Tab5Page"]
    }
];
let Tab5PageRoutingModule = class Tab5PageRoutingModule {
};
Tab5PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Tab5PageRoutingModule);



/***/ }),

/***/ "Sa0/":
/*!*************************************!*\
  !*** ./src/app/tab5/tab5.module.ts ***!
  \*************************************/
/*! exports provided: Tab5PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab5PageModule", function() { return Tab5PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _tab5_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab5-routing.module */ "Ki12");
/* harmony import */ var _tab5_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab5.page */ "Tlso");







let Tab5PageModule = class Tab5PageModule {
};
Tab5PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tab5_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tab5PageRoutingModule"]
        ],
        declarations: [_tab5_page__WEBPACK_IMPORTED_MODULE_6__["Tab5Page"]]
    })
], Tab5PageModule);



/***/ }),

/***/ "Tlso":
/*!***********************************!*\
  !*** ./src/app/tab5/tab5.page.ts ***!
  \***********************************/
/*! exports provided: Tab5Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab5Page", function() { return Tab5Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab5_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab5.page.html */ "pXFx");
/* harmony import */ var _tab5_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab5.page.scss */ "FFfc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let Tab5Page = class Tab5Page {
    constructor() { }
    ngOnInit() {
    }
};
Tab5Page.ctorParameters = () => [];
Tab5Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab5',
        template: _raw_loader_tab5_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab5_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab5Page);



/***/ }),

/***/ "pXFx":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab5/tab5.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"light\">\n    <ion-title>mrhieu</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"dark\">\n        <ion-icon slot=\"icon-only\" name=\"menu-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"light\">\n  <ion-row class=\"profile-header ion-align-items-center\">\n    <ion-col size=\"auto\">\n      <ion-avatar class=\"avatar-lg has-update has-status\">\n        <img src=\"assets/img/avatars/7.jpg\" alt=\"\">\n      </ion-avatar>\n    </ion-col>\n    <ion-col>\n      <ion-row class=\"profile-stats\">\n        <ion-col>\n          <div class=\"stats-number\">1,329</div>\n          <div class=\"stats-label\">Posts</div>\n        </ion-col>\n        <ion-col>\n          <div class=\"stats-number\">9,329</div>\n          <div class=\"stats-label\">Followers</div>\n        </ion-col>\n        <ion-col>\n          <div class=\"stats-number\">5,329</div>\n          <div class=\"stats-label\">Following</div>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <div class=\"ion-padding profile-info\">\n    <strong>Hieu Pham</strong>\n    <div>\n      Working on Project <a href=\"https://www.takethatdesign.com/100ions/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"hash-tag\"><strong>#100ions</strong></a>\n    </div>\n    <div>\n      Homepage: <a href=\"https://www.takethatdesign.com\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"hash-tag\"><strong>www.takethatdesign.com</strong></a>\n    </div>\n  </div>\n\n  <div class=\"ion-padding\">\n    <ion-button expand=\"block\" fill=\"outline\" color=\"dark\" size=\"small\">\n      Edit Profile\n    </ion-button>\n  </div>\n\n  <ion-segment value=\"active\">\n    <ion-segment-button value=\"active\">\n      <ion-icon name=\"grid-outline\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button>\n      <ion-icon name=\"earth-outline\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button>\n      <ion-icon name=\"people-circle-outline\"></ion-icon>\n    </ion-segment-button>\n  </ion-segment>\n\n  <div class=\"post-grid\">\n    <ion-row>\n      <ion-col size=\"4\" *ngFor=\"let i of [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]\">\n        <div class=\"post-item bg-image\" [style.backgroundImage]=\"'url(assets/img/img_' + (i % 4 + 1) + '.png)'\"></div>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=tab5-tab5-module.js.map