webpackJsonp([7,18],{

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__not_found_component__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__not_found_routing_module__ = __webpack_require__(538);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundModule", function() { return NotFoundModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NotFoundModule = (function () {
    function NotFoundModule() {
    }
    return NotFoundModule;
}());
NotFoundModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__not_found_routing_module__["a" /* NotFoundRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__not_found_component__["a" /* NotFoundComponent */]]
    })
], NotFoundModule);

//# sourceMappingURL=not-found.module.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-not-found',
        template: __webpack_require__(596),
        styles: [__webpack_require__(566)]
    })
], NotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__not_found_component__ = __webpack_require__(505);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__not_found_component__["a" /* NotFoundComponent */] }
];
var NotFoundRoutingModule = (function () {
    function NotFoundRoutingModule() {
    }
    return NotFoundRoutingModule;
}());
NotFoundRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], NotFoundRoutingModule);

//# sourceMappingURL=not-found-routing.module.js.map

/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n\n.welcome-page {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  background: #222;\n  text-align: center;\n  color: #fff;\n  padding: 10em; }\n  .welcome-page .col-lg-8 {\n    padding: 0; }\n  .welcome-page .rounded-btn {\n    border-radius: 50px;\n    color: rgba(255, 255, 255, 0.8);\n    background: #222;\n    border: 2px solid rgba(255, 255, 255, 0.8);\n    font-size: 18px;\n    line-height: 40px;\n    padding: 0 25px; }\n  .welcome-page .rounded-btn:hover, .welcome-page .rounded-btn:focus, .welcome-page .rounded-btn:active, .welcome-page .rounded-btn:visited {\n    color: white;\n    border: 2px solid white;\n    outline: none; }\n  .welcome-page h1 {\n    font-weight: 300;\n    margin-top: 20px;\n    margin-bottom: 10px;\n    font-size: 36px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 596:
/***/ (function(module, exports) {

module.exports = "<div class=\"welcome-page\">\n    <div class=\"row\">\n        <div class=\"col-md-10 push-md-1\">\n            <h1>404 - Page Not Found</h1>\n            <p class=\"lead\">This page does not exist</p>\n            <p class=\"lead\">\n                <a class=\"btn rounded-btn\" [routerLink]=\"['/']\">Restart</a>\n            </p>\n        </div>\n    </div>\n</div>"

/***/ })

});
//# sourceMappingURL=7.chunk.js.map