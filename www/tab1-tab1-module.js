(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "8MT7":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"light\">\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\">\n        <ion-icon slot=\"icon-only\" name=\"camera-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>Feed</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"dark\">\n        <ion-icon slot=\"icon-only\" name=\"send-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <div class=\"story-list\">\n    <div class=\"scroll-horizontal\">\n      <div class=\"scroll-item\">\n        <ion-avatar class=\"avatar-md\">\n          <img src=\"assets/img/avatars/7.jpg\" alt=\"\">\n        </ion-avatar>\n        <div class=\"item-label text-muted\">\n          Your story\n        </div>\n      </div>\n\n      <div class=\"scroll-item\" *ngFor=\"let i of [1,2,3,4,5,6,7,8,9]\">\n        <div class=\"item-avatar\">\n          <ion-avatar class=\"avatar-md has-update has-status\">\n            <img src=\"assets/img/avatars/{{i}}.jpg\" alt=\"\">\n          </ion-avatar>\n        </div>\n        <div class=\"item-label\">\n          Tony\n        </div>\n      </div>\n    </div>\n  </div> -->\n\n  <!-- <div class=\"post-list\">\n    <div class=\"post-item\" *ngFor=\"let i of [1,2,3,4,5]\" routerLink=\"/comments\">\n      <div class=\"post-header\">\n        <ion-row class=\"ion-justify-content-center ion-align-items-center\">\n          <ion-col size=\"auto\">\n            <ion-avatar class=\"avatar-sm\">\n              <img src=\"assets/img/avatars/{{i}}.jpg\" alt=\"\">\n            </ion-avatar>\n          </ion-col>\n          <ion-col>\n            <strong>Spiderman</strong>\n          </ion-col>\n          <ion-col size=\"auto\">\n            <ion-icon name=\"ellipsis-horizontal\"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div class=\"post-media\">\n        <img src=\"assets/img/img_{{i % 4 + 1}}.png\" alt=\"\">\n      </div>\n      <div class=\"post-actions\">\n        <ion-row>\n          <ion-col>\n            <ion-button size=\"small\" fill=\"clear\" color=\"dark\">\n              <ion-icon slot=\"icon-only\" name=\"heart-outline\"></ion-icon>\n            </ion-button>\n            <ion-button size=\"small\" fill=\"clear\" color=\"dark\">\n              <ion-icon slot=\"icon-only\" name=\"chatbubble-outline\"></ion-icon>\n            </ion-button>\n            <ion-button size=\"small\" fill=\"clear\" color=\"dark\">\n              <ion-icon slot=\"icon-only\" name=\"send-outline\"></ion-icon>\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"auto\">\n            <ion-button size=\"small\" fill=\"clear\" color=\"dark\">\n              <ion-icon slot=\"icon-only\" name=\"bookmark-outline\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <div class=\"post-stats\">\n        <strong>20 likes</strong>\n      </div>\n\n      <div class=\"post-comments\">\n        <div class=\"comment-item\">\n          <span class=\"username\">spiderman</span>\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut <a href=\"\" class=\"hash-tag\">#labore</a> <a href=\"\" class=\"hash-tag\">#dolore</a> <a href=\"\" class=\"hash-tag\">#magna</a> <a href=\"\" class=\"hash-tag\">#aliqua</a>\n        </div>\n\n        <div class=\"comment-expander text-muted\">View all 35 comments</div>\n\n        <div class=\"comment-item\">\n          <span class=\"username\">steveroger</span>\n          Ipsum dolor sit amet, consectetur?\n\n          <div class=\"comment-item reply\">\n            <span class=\"username\">spiderman</span>\n            Lorem ipsum hehe\n          </div>\n        </div>\n\n        <ion-row class=\"ion-justify-content-center ion-align-items-center\">\n          <ion-col size=\"auto\">\n            <ion-avatar class=\"avatar-xs\">\n              <img src=\"assets/img/avatars/7.jpg\" alt=\"\">\n            </ion-avatar>\n          </ion-col>\n          <ion-col>\n            <div class=\"text-muted text-sm\">Add a comment...</div>\n          </ion-col>\n          <ion-col size=\"auto\">\n            😁😂\n            <ion-icon name=\"add-circle-outline\"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n  </div> -->\n\n</ion-content>\n");

/***/ }),

/***/ "Mzl2":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab1.page.html */ "8MT7");
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1.page.scss */ "rWyk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let Tab1Page = class Tab1Page {
    constructor() { }
};
Tab1Page.ctorParameters = () => [];
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab1Page);



/***/ }),

/***/ "XOzS":
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "rWyk":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".story-list {\n  padding: 16px 0 8px;\n  border-bottom: 1px solid var(--ion-color-light);\n}\n.story-list .scroll-horizontal {\n  padding-left: 16px;\n}\n.story-list .scroll-item {\n  text-align: center;\n  margin-right: 16px;\n}\n.story-list .item-label {\n  font-size: 13px;\n  margin-top: 8px;\n}\n.post-item {\n  margin-bottom: 16px;\n}\n.post-item .post-header {\n  padding: 8px;\n}\n.post-item .post-media {\n  font-size: 0;\n}\n.post-item .post-media img, .post-item .post-media video {\n  width: 100%;\n}\n.post-item .post-stats, .post-item .post-comments {\n  padding: 0 12px 8px;\n}\n.post-item .hash-tag {\n  text-decoration: none;\n  margin-right: 4px;\n}\n.post-item .post-comments {\n  line-height: 1.4;\n}\n.post-item .post-comments .username {\n  font-weight: 700;\n  margin-right: 4px;\n}\n.post-item .post-comments .comment-item.reply {\n  margin: 4px 0 4px 16px;\n  padding-left: 8px;\n  border-left: 3px solid var(--ion-color-light);\n}\n.post-item .post-comments ion-icon {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSwrQ0FBQTtBQUNGO0FBQ0U7RUFDRSxrQkFBQTtBQUNKO0FBRUU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFHRTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBREo7QUFLQTtFQUNFLG1CQUFBO0FBRkY7QUFJRTtFQUNFLFlBQUE7QUFGSjtBQUtFO0VBQ0UsWUFBQTtBQUhKO0FBS0k7RUFDRSxXQUFBO0FBSE47QUFPRTtFQUNFLG1CQUFBO0FBTEo7QUFRRTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7QUFOSjtBQVNFO0VBQ0UsZ0JBQUE7QUFQSjtBQVNJO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQVBOO0FBV007RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkNBQUE7QUFUUjtBQWFJO0VBQ0Usc0JBQUE7QUFYTiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdG9yeS1saXN0IHtcbiAgcGFkZGluZzogMTZweCAwIDhweDs7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuXG4gIC5zY3JvbGwtaG9yaXpvbnRhbCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICB9XG5cbiAgLnNjcm9sbC1pdGVtIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICB9XG5cbiAgLml0ZW0tbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gIH1cbn1cblxuLnBvc3QtaXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG5cbiAgLnBvc3QtaGVhZGVyIHtcbiAgICBwYWRkaW5nOiA4cHg7XG4gIH1cblxuICAucG9zdC1tZWRpYSB7XG4gICAgZm9udC1zaXplOiAwO1xuXG4gICAgaW1nLCB2aWRlbyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cblxuICAucG9zdC1zdGF0cywgLnBvc3QtY29tbWVudHMge1xuICAgIHBhZGRpbmc6IDAgMTJweCA4cHg7XG4gIH1cblxuICAuaGFzaC10YWcge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgfVxuXG4gIC5wb3N0LWNvbW1lbnRzIHtcbiAgICBsaW5lLWhlaWdodDogMS40O1xuXG4gICAgLnVzZXJuYW1lIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICB9XG5cbiAgICAuY29tbWVudC1pdGVtIHtcbiAgICAgICYucmVwbHkge1xuICAgICAgICBtYXJnaW46IDRweCAwIDRweCAxNnB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlvbi1pY29uIHtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "tmrb":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab1-routing.module */ "XOzS");








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map