webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__who_who_component__ = __webpack_require__("../../../../../src/app/who/who.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__skills_skills_component__ = __webpack_require__("../../../../../src/app/skills/skills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__projects_projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contact_me_contact_me_component__ = __webpack_require__("../../../../../src/app/contact-me/contact-me.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__error_error_component__ = __webpack_require__("../../../../../src/app/error/error.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'who', component: __WEBPACK_IMPORTED_MODULE_3__who_who_component__["a" /* WhoComponent */] },
    { path: 'skills', component: __WEBPACK_IMPORTED_MODULE_4__skills_skills_component__["a" /* SkillsComponent */] },
    { path: 'projects', component: __WEBPACK_IMPORTED_MODULE_5__projects_projects_component__["a" /* ProjectsComponent */] },
    { path: 'contact-me', component: __WEBPACK_IMPORTED_MODULE_6__contact_me_contact_me_component__["a" /* ContactMeComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_7__error_error_component__["a" /* ErrorComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* navigation bar starts*/\r\n.active {\r\n    color: white!important;\r\n}\r\n\r\n.active:before,\r\n.active:after {\r\n    opacity: 1!important;\r\n    height: 1px!important;\r\n    width: 100%!important;\r\n}\r\n\r\n.active:before {\r\n    top: 0px;\r\n}\r\n\r\n.active:after {\r\n    bottom: 0px;\r\n}\r\n\r\n.nav_block {\r\n    height: 100%;\r\n    width: 55px;\r\n    background-color: black;\r\n    position: fixed;\r\n    top: 0px;\r\n    left: 0px;\r\n    color: grey;\r\n    display: -ms-inline-grid;\r\n    display: inline-grid;\r\n    padding-top: 60px;\r\n    letter-spacing: 1.5px;\r\n    z-index: 1;\r\n}\r\n\r\n.nav_block span {\r\n    /* Rotate div */\r\n    /* IE 9 */\r\n    -webkit-transform: rotate(-90deg);\r\n    /* Chrome, Safari, Opera */\r\n    transform: rotate(-90deg);\r\n    /*transform-origin: left top 0;*/\r\n    height: 12px;\r\n    width: 110px;\r\n    font-size: 12px;\r\n    font-weight: bold;\r\n    margin-left: -38px;\r\n}\r\n\r\n.nav_block span:focus {\r\n    outline: none;\r\n}\r\n\r\n/* navigation code*/\r\n\r\ndiv.container span {\r\n    color: gray;\r\n    text-decoration: none;\r\n    padding: 8px 4px;\r\n    position: relative;\r\n    z-index: 0;\r\n    cursor: pointer;\r\n    text-align: center;\r\n}\r\n\r\n\r\n/* Border from Y to X  */\r\ndiv.borderYtoX span:before,\r\ndiv.borderYtoX span:after {\r\n    position: absolute;\r\n    opacity: 0.5;\r\n    height: 50%;\r\n    width: 1px;\r\n    content: '';\r\n    background: #FFF;\r\n    transition: all 0.3s;\r\n}\r\n\r\ndiv.borderYtoX span:before {\r\n    left: 0px;\r\n}\r\n\r\ndiv.borderYtoX span:hover:before {\r\n    top: 0px;\r\n}\r\n\r\ndiv.borderYtoX span:after {\r\n    right: 0px;\r\n}\r\n\r\ndiv.borderYtoX span:hover:after {\r\n    bottom: 0px;\r\n}\r\n\r\ndiv.borderYtoX span:hover:before,\r\ndiv.borderYtoX span:hover:after {\r\n    opacity: 1;\r\n    height: 1px;\r\n    width: 100%;\r\n}/* navigation bar ends*/\r\n\r\n/*social icons container starts*/\r\n.social_container {\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 35%;\r\n    width:39px;\r\n    z-index: 3;  \r\n    \r\n}\r\n.social_container a {\r\n  width: 25px;\r\n  height: 25px;\r\n  margin: 0 6px;\r\n  text-align: center;\r\n  display: inline-block;\r\n  color: gray;\r\n  border: 1px solid dimgray;\r\n  border-radius: 2px;\r\n  -webkit-transform: rotate(45deg);\r\n          transform: rotate(45deg);\r\n  line-height: 25px;\r\n  margin-bottom:15px;\r\n  transition: all 500ms ease;\r\n}\r\n.social_container a i {\r\n    -webkit-transform: rotate(-45deg);\r\n    transform: rotate(-45deg);\r\n}\r\n/* hover */\r\n.social_container a:hover{\r\n    color: #fff;\r\n}\r\n.social_container a:hover{\r\n    background: gray;\r\n}\r\n/*social icons container ends*/\r\n\r\n.main_content{\r\n    width: calc(100% - ( 55px + 60px ));\r\n    height: calc(100% - 42px);\r\n    overflow: auto;\r\n    position: absolute;\r\n    top:14px;\r\n    right:60px;\r\n    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--navigation bar starts-->\n<div class=\"nav_block container borderYtoX\">\n    <span routerLink=\"/home\" routerLinkActive=\"active\">HOME</span><br/>\n    <span routerLink=\"/who\" routerLinkActive=\"active\">WHO AM I?</span><br/>\n    <span routerLink=\"/skills\" routerLinkActive=\"active\">SKILLS</span><br/>\n    <span routerLink=\"/projects\" routerLinkActive=\"active\">PROJECTS</span><br/>\n    <span routerLink=\"/contact-me\" routerLinkActive=\"active\">CONTACT ME</span><br/>\n</div>\n<!--navigation bar ends-->\n\n<!--social icons container starts-->\n<div class=\"social_container\">\n        <a href=\"mailto:aashi2193@gmail.com\" title=\"Email\" target=\"_blank\"><i class=\"fa fa-envelope\"></i></a>\n        <a href=\"https://www.linkedin.com/in/aashita29/\" title=\"LinkedIn+\" target=\"_blank\"><i class=\"fa fa-linkedin\"></i></a>\n        <a href=\"https://twitter.com/aashitadesai\" title=\"Twitter\" target=\"_blank\"><i class=\"fa fa-twitter\"></i></a>\n        <a href=\"https://www.facebook.com/aashita.desai\" title=\"Facebook\" target=\"_blank\"><i class=\"fa fa-facebook\"></i></a>\n        <a href=\"https://github.com/aashitadsai\" title=\"Github\" target=\"_blank\"><i class=\"fa fa-github\"></i></a>\n</div>\n<!--social icons container ends-->\n\n<div class=\"main_content\">\n    <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>\n "

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Aashita Desai!';
        this.skill = 'Angular 4';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__contact_me_contact_me_component__ = __webpack_require__("../../../../../src/app/contact-me/contact-me.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__error_error_component__ = __webpack_require__("../../../../../src/app/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__projects_projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__skills_skills_component__ = __webpack_require__("../../../../../src/app/skills/skills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__who_who_component__ = __webpack_require__("../../../../../src/app/who/who.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//maps


//flex












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__contact_me_contact_me_component__["a" /* ContactMeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__error_error_component__["a" /* ErrorComponent */],
            __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_13__projects_projects_component__["a" /* ProjectsComponent */],
            __WEBPACK_IMPORTED_MODULE_14__skills_skills_component__["a" /* SkillsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__who_who_component__["a" /* WhoComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/contact-me/contact-me.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".back-black {\r\n    background-color: black;\r\n    background-size: cover;\r\n    position: absolute;\r\n    display: inline-block;\r\n    top: 0px;\r\n    left: 0px;\r\n    bottom: 0px;\r\n    right: 0px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.background_map {\r\n    position: absolute;\r\n    display: inline-block;\r\n    top: 5px;\r\n    right: 5px;\r\n    left: 5px;\r\n    bottom: 5px;\r\n    height: auto!important;\r\n    box-shadow: 0 0 1em #4c4c4c;\r\n    z-index: 2;\r\n}\r\n\r\n.contact_label {\r\n    color: floralwhite;\r\n    text-align: center;\r\n    font-size: 39px;\r\n    letter-spacing: 4px;\r\n    text-transform: uppercase;\r\n    z-index: 3;\r\n    position: relative;\r\n/*    text-shadow: 1px 1px 0 #000, 2px 2px 0 #999; */\r\n    /*background-color: rgba(68, 68, 68, 0.55);*/\r\n    padding: 0.25em 0.6875em;\r\n    width:300px;\r\n    background-image: radial-gradient(#303030 33%, transparent 10%);\r\n    background-size: 3px 3px;\r\n    box-shadow: 0 0 1em #030303;\r\n}\r\n\r\n.h3-box{\r\n    margin-top: 35px;\r\n}\r\n\r\n/* angular material form*/\r\n\r\n.contact_form {\r\n    padding: 40px;\r\n    letter-spacing: 1px;\r\n    text-transform: uppercase;\r\n    font-size: 14px;\r\n    color: gray;\r\n}\r\n\r\n/*angular material end*/\r\n\r\n.outer_container {\r\n    width: 300px;\r\n    /*box-shadow: inset 0 0 1em #383838;*/\r\n    /*box-shadow: 0 0 1em #383838;*/\r\n    position: absolute;\r\n    z-index: 3;\r\n    top: 30%;\r\n    box-shadow: 0 0 1em #030303;\r\n    /*background-color: rgba(15, 15, 15, 0.59);*/\r\n    padding: 2.25em 1.6875em;\r\n    background-image: radial-gradient(#303030 33%, transparent 10%);\r\n    background-size: 3px 3px;\r\n}\r\n.outer_container .mat-input-container{\r\n    width:100%;\r\n}\r\n\r\n/*dotted*/\r\n.dotted {\r\npadding: 2.25em 1.6875em;\r\nbackground-image: -webkit-repeating-radial-gradient(center center, rgba(0, 0, 0, .2), rgba(0, 0, 0, .2) 1px, transparent 1px, transparent 100%);\r\nbackground-image: repeating-radial-gradient(center center, rgba(0, 0, 0, .2), rgba(0, 0, 0, .2) 1px, transparent 1px, transparent 100%);\r\nbackground-size: 3px 3px;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact-me/contact-me.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"back-black\">\n    <div id=\"map\" class=\"background_map\"></div>\n    \n        <div class=\"h3-box\">\n            <span class=\"contact_label\">Get In Touch</span>\n        </div>\n        <div class=\"outer_container\">\n\n                <!-- Angular Material Form-->\n                <form #contact_me_form=\"ngForm\" (ngSubmit)=\"submit(contact_me_form)\">\n                    <md-input-container>\n                        <input name=\"full_name\" mdInput placeholder=\"Enter Full Name\" required [(ngModel)]=\"full_name\">\n                        <md-error>Please, Enter full Name!</md-error>\n                    </md-input-container>\n                    <br/>\n                    <md-input-container>\n                        <input name=\"email\" mdInput placeholder=\"Enter Email ID\" required [(ngModel)]=\"email\" type=\"email\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" minlength=\"10\" maxlength=\"50\">\n                        <md-error>Please, Enter Email ID!</md-error>\n                    </md-input-container>\n                    <br/>\n                    <md-input-container>\n                        <input name=\"subject\" mdInput placeholder=\"Enter Subject Line\" required [(ngModel)]=\"subject\">\n                        <md-error>Please, Enter the subject line!</md-error>\n                    </md-input-container>\n                    <br/>\n                    <md-input-container>\n                        <input mdAutosizeMinRows=\"10\" name=\"message\" mdInput placeholder=\"Enter a message...\" required [(ngModel)]=\"message\">\n                        <md-error>Please, Enter a message!</md-error>\n                    </md-input-container>\n                    <br/>\n                    <br/>\n                    <button class=\"drop\" md-raised-button type=\"Submit\">Drop</button>\n                </form>\n        </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/contact-me/contact-me.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactMeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactMeComponent = (function () {
    function ContactMeComponent(http) {
        this.http = http;
    }
    ContactMeComponent.prototype.submit = function (form) {
        if (form.valid) {
            console.log(this.full_name + " " + this.email + " " + this.subject);
            this.http.get('http://aashitadesai.me/email.php?full_name=' + this.full_name + '&Email=' + this.email + '&message=' + this.subject)
                .toPromise()
                .then(function (res) { return console.log('email sent'); })
                .catch(function (error) { return console.log('error'); });
        }
    };
    ContactMeComponent.prototype.initMap = function () {
        var styles = {
            default: null,
            theme2: [
                {
                    "featureType": "all",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#ffffff"
                        },
                        {
                            "weight": 0.5
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#000000"
                        }
                    ]
                }
            ],
            theme3: [
                {
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#212121"
                        }
                    ]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#212121"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "administrative.country",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative.locality",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#bdbdbd"
                        }
                    ]
                },
                {
                    "featureType": "administrative.neighborhood",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "poi.attraction",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "poi.attraction",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "lightness": -75
                        },
                        {
                            "visibility": "on"
                        },
                        {
                            "weight": 1.5
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#181818"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#616161"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#1b1b1b"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#2c2c2c"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#8a8a8a"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#373737"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#3c3c3c"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.highway.controlled_access",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#4e4e4e"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#616161"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#3d3d3d"
                        }
                    ]
                }
            ],
            theme4: [
                //blue and black starts
                { "stylers": [
                        /*{
                            "hue": "#ffffff"
                        },*/
                        {
                            "invert_lightness": true
                        },
                        {
                            "saturation": -100
                        },
                        {
                            "lightness": 25
                        },
                        {
                            "gamma": 0.5
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
                            /*"color": "#2D333C"*/
                        }
                    ]
                }
            ] //blue and black ends
        };
        // Create the map with no initial style specified.
        // It therefore has default styling.
        this.map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: 40.6512141, lng: -73.9115755 },
            zoom: 12,
            mapTypeControl: false
        });
        // Add a style-selector control to the map.
        var styleControl = document.getElementById('style-selector-control');
        // styleControl.style.display = "hidden";
        this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(styleControl);
        // Set the map's style to the initial value of the selector.
        //var styleSelector = document.getElementById('style-selector');
        this.map.setOptions({ styles: styles["theme4"] });
        document.getElementById('map').style.height = "93%";
        //map marker
        /*this.beachMarker = new this.svgMarker({
          position: {lat: 40.737415, lng: -74.0510147},
          map: this.map,
          url: '../../assets/images/map_marker_1.svg'
        });*/
        this.marker = new google.maps.Marker({
            position: { lat: 40.717360, lng: -74.068313 },
            map: this.map,
            title: 'I LIVE HERE!',
            icon: {
                url: "../../assets/images/map_marker_7.svg",
                scaledSize: new google.maps.Size(30, 30),
                draggable: false
            }
        });
        this.marker.setMap(this.map);
    };
    ContactMeComponent.prototype.ngOnInit = function () {
        this.initMap();
    };
    return ContactMeComponent;
}());
ContactMeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-contact-me',
        template: __webpack_require__("../../../../../src/app/contact-me/contact-me.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact-me/contact-me.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ContactMeComponent);

var _a;
//# sourceMappingURL=contact-me.component.js.map

/***/ }),

/***/ "../../../../../src/app/error/error.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#tridiv {\r\n  -webkit-perspective: 800px;\r\n  perspective: 800px;\r\n  position: absolute;\r\n  overflow: hidden;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: transparent;\r\n  font-size: 75%;\r\n}\r\n.face {\r\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.4);\r\n}\r\n.scene, .shape, .face, .face-wrapper, .cr {\r\n  position: absolute;\r\n  -webkit-transform-style: preserve-3d;\r\n  transform-style: preserve-3d;\r\n}\r\n.scene {\r\n  width: 80em;\r\n  height: 80em;\r\n  top: 50%;\r\n  left: 50%;\r\n  margin: -40em 0 0 -40em;\r\n  -webkit-animation-duration: 15s;\r\n  -webkit-animation-name: moveAround;\r\n  -webkit-animation-iteration-count: infinite;\r\n  -webkit-animation-direction: alternate;\r\n  -webkit-animation-timing-function: ease-in-out;\r\n}\r\n/* animation */\r\n  @-webkit-keyframes moveAround {\r\n  0% {\r\n    -webkit-transform: rotateX(266deg) rotateY(0deg) translate(-150px, -110px);\r\n  }\r\n  25% {\r\n    -webkit-transform: rotateX(300deg) rotateY(16deg) translate(-110px, -140px);\r\n  }\r\n  50% {\r\n    -webkit-transform: rotateX(334deg) rotateY(-17deg) translate(120px, -110px);\r\n  }\r\n  75% {\r\n    -webkit-transform: rotateX(318deg) rotateY(-4deg) translate(-150px, -170px);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotateX(373deg) rotateY(15deg) translate(-140px, -110px);\r\n  }\r\n}\r\n\r\n.shape {\r\n  top: 50%;\r\n  left: 50%;\r\n  width: 0;\r\n  height: 0;\r\n  -webkit-transform-origin: 50%;\r\n  transform-origin: 50%;\r\n}\r\n.face, .face-wrapper {\r\n  overflow: hidden;\r\n  -webkit-transform-origin: 0 0;\r\n  transform-origin: 0 0;\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  /* hidden by default, prevent blinking and other weird rendering glitchs */\r\n}\r\n.face {\r\n  background-size: 100% 100%!important;\r\n  background-position: center;\r\n}\r\n.face-wrapper .face {\r\n  left: 100%;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.photon-shader {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%\r\n}\r\n.side {\r\n  left: 50%;\r\n}\r\n.cr, .cr .side {\r\n  height: 100%;\r\n}\r\n[class*=\"cuboid\"] .ft, [class*=\"cuboid\"] .bk {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n[class*=\"cuboid\"] .bk {\r\n  left: 100%;\r\n}\r\n[class*=\"cuboid\"] .rt {\r\n  -webkit-transform: rotateY(-90deg) translateX(-50%);\r\n  transform: rotateY(-90deg) translateX(-50%);\r\n}\r\n[class*=\"cuboid\"] .lt {\r\n  -webkit-transform: rotateY(90deg) translateX(-50%);\r\n}\r\n[class*=\"cuboid\"] .tp {\r\n  -webkit-transform: rotateX(90deg) translateY(-50%);\r\n}\r\n[class*=\"cuboid\"] .bm {\r\n  -webkit-transform: rotateX(-90deg) translateY(-50%);\r\n}\r\n[class*=\"cuboid\"] .lt {\r\n  left: 100%;\r\n}\r\n[class*=\"cuboid\"] .bm {\r\n  top: 100%;\r\n}\r\n/* .cub-1 styles */\r\n.cub-1 {\r\n  -webkit-transform:translate3D(2em, 1em, 2em) rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n  opacity:1;\r\n  width:4em;\r\n  height:4em;\r\n  margin:-2em 0 0 -2em;\r\n}\r\n.cub-1 .ft {\r\n  -webkit-transform:translateZ(10em);\r\n}\r\n.cub-1 .bk {\r\n  -webkit-transform:translateZ(-10em) rotateY(180deg);\r\n}\r\n.cub-1 .rt, .cub-1 .lt {\r\n  width:20em;\r\n  height:4em;\r\n}\r\n.cub-1 .tp, .cub-1 .bm {\r\n  width:4em;\r\n  height:20em;\r\n}\r\n.cub-1 .face {\r\n  background-color:#FFFFFF;\r\n}\r\n/* .cub-2 styles */\r\n.cub-2 {\r\n  -webkit-transform:translate3D(9em, 1em, -6em) rotateX(0deg) rotateY(-90deg) rotateZ(0deg);\r\n  opacity:1;\r\n  width:4em;\r\n  height:4em;\r\n  margin:-2em 0 0 -2em;\r\n}\r\n.cub-2 .ft {\r\n  -webkit-transform:translateZ(5em);\r\n}\r\n.cub-2 .bk {\r\n  -webkit-transform:translateZ(-5em) rotateY(180deg);\r\n}\r\n.cub-2 .rt, .cub-2 .lt {\r\n  width:10em;\r\n  height:4em;\r\n}\r\n.cub-2 .tp, .cub-2 .bm {\r\n  width:4em;\r\n  height:10em;\r\n}\r\n.cub-2 .face {\r\n  background-color:#FFFFFF;\r\n}\r\n/* .cub-3 styles */\r\n.cub-3 {\r\n  -webkit-transform:translate3D(9em, 1em, 10em) rotateX(0deg) rotateY(-90deg) rotateZ(0deg);\r\n  opacity:1;\r\n  width:4em;\r\n  height:4em;\r\n  margin:-2em 0 0 -2em;\r\n}\r\n.cub-3 .ft {\r\n  -webkit-transform:translateZ(5em);\r\n}\r\n.cub-3 .bk {\r\n  -webkit-transform:translateZ(-5em) rotateY(180deg);\r\n}\r\n.cub-3 .rt, .cub-3 .lt {\r\n  width:10em;\r\n  height:4em;\r\n}\r\n.cub-3 .tp, .cub-3 .bm {\r\n  width:4em;\r\n  height:10em;\r\n}\r\n.cub-3 .face {\r\n  background-color:#FFFFFF;\r\n}\r\n/* .cub-4 styles */\r\n.cub-4 {\r\n  -webkit-transform:translate3D(16em, 1em, 2em) rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n  opacity:1;\r\n  width:4em;\r\n  height:4em;\r\n  margin:-2em 0 0 -2em;\r\n}\r\n.cub-4 .ft {\r\n  -webkit-transform:translateZ(10em);\r\n}\r\n.cub-4 .bk {\r\n  -webkit-transform:translateZ(-10em) rotateY(180deg);\r\n}\r\n.cub-4 .rt, .cub-4 .lt {\r\n  width:20em;\r\n  height:4em;\r\n}\r\n.cub-4 .tp, .cub-4 .bm {\r\n  width:4em;\r\n  height:20em;\r\n}\r\n.cub-4 .face {\r\n  background-color:#FFFFFF;\r\n}\r\n/* .cub-5 styles */\r\n.cub-5 {\r\n  -webkit-transform:translate3D(-16em, -1em, 2em) rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n  opacity:1;\r\n  width:4em;\r\n  height:4em;\r\n  margin:-2em 0 0 -2em;\r\n}\r\n.cub-5 .ft {\r\n  -webkit-transform:translateZ(10em);\r\n}\r\n.cub-5 .bk {\r\n  -webkit-transform:translateZ(-10em) rotateY(180deg);\r\n}\r\n.cub-5 .rt, .cub-5 .lt {\r\n  width:20em;\r\n  height:4em;\r\n}\r\n.cub-5 .tp, .cub-5 .bm {\r\n  width:4em;\r\n  height:20em;\r\n}\r\n.cub-5 .face {\r\n  background-color:#ffffff;\r\n}\r\n/* .cub-6 styles */\r\n.cub-6 {\r\n  -webkit-transform:translate3D(-9em, -1em, 10em) rotateX(0deg) rotateY(-90deg) rotateZ(0deg);\r\n  opacity:1;\r\n  width:4em;\r\n  height:4em;\r\n  margin:-2em 0 0 -2em;\r\n}\r\n.cub-6 .ft {\r\n  -webkit-transform:translateZ(5em);\r\n}\r\n.cub-6 .bk {\r\n  -webkit-transform:translateZ(-5em) rotateY(180deg);\r\n}\r\n.cub-6 .rt, .cub-6 .lt {\r\n  width:10em;\r\n  height:4em;\r\n}\r\n.cub-6 .tp, .cub-6 .bm {\r\n  width:4em;\r\n  height:10em;\r\n}\r\n.cub-6 .face {\r\n  background-color:#ffffff;\r\n}\r\n/* .cub-7 styles */\r\n.cub-7 {\r\n  -webkit-transform:translate3D(-8em, -1em, 10em) rotateX(0deg) rotateY(-180deg) rotateZ(0deg);\r\n  opacity:1;\r\n  width:4em;\r\n  height:4em;\r\n  margin:-2em 0 0 -2em;\r\n}\r\n.cub-7 .ft {\r\n  -webkit-transform:translateZ(5em);\r\n}\r\n.cub-7 .bk {\r\n  -webkit-transform:translateZ(-5em) rotateY(180deg);\r\n}\r\n.cub-7 .rt, .cub-7 .lt {\r\n  width:10em;\r\n  height:4em;\r\n}\r\n.cub-7 .tp, .cub-7 .bm {\r\n  width:4em;\r\n  height:10em;\r\n}\r\n.cub-7 .face {\r\n  background-color:#ffffff;\r\n}\r\n/* .cub-8 styles */\r\n.cub-8 {\r\n  -webkit-transform:translate3D(24.5em, 3em, 2em) rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n  opacity:1;\r\n  width:4em;\r\n  height:4em;\r\n  margin:-2em 0 0 -2em;\r\n}\r\n.cub-8 .ft {\r\n  -webkit-transform:translateZ(10em);\r\n}\r\n.cub-8 .bk {\r\n  -webkit-transform:translateZ(-10em) rotateY(180deg);\r\n}\r\n.cub-8 .rt, .cub-8 .lt {\r\n  width:20em;\r\n  height:4em;\r\n}\r\n.cub-8 .tp, .cub-8 .bm {\r\n  width:4em;\r\n  height:20em;\r\n}\r\n.cub-8 .face {\r\n  background-color:#FFFFFF;\r\n}\r\n/* .cub-9 styles */\r\n.cub-9 {\r\n  -webkit-transform:translate3D(31.5em, 3em, 10em) rotateX(0deg) rotateY(-90deg) rotateZ(0deg);\r\n  opacity:1;\r\n  width:4em;\r\n  height:4em;\r\n  margin:-2em 0 0 -2em;\r\n}\r\n.cub-9 .ft {\r\n  -webkit-transform:translateZ(5em);\r\n}\r\n.cub-9 .bk {\r\n  -webkit-transform:translateZ(-5em) rotateY(180deg);\r\n}\r\n.cub-9 .rt, .cub-9 .lt {\r\n  width:10em;\r\n  height:4em;\r\n}\r\n.cub-9 .tp, .cub-9 .bm {\r\n  width:4em;\r\n  height:10em;\r\n}\r\n.cub-9 .face {\r\n  background-color:#FFFFFF;\r\n}\r\n/* .cub-10 styles */\r\n.cub-10 {\r\n  -webkit-transform:translate3D(32.5em, 3em, 10em) rotateX(0deg) rotateY(-180deg) rotateZ(0deg);\r\n  opacity:1;\r\n  width:4em;\r\n  height:4em;\r\n  margin:-2em 0 0 -2em;\r\n}\r\n.cub-10 .ft {\r\n  -webkit-transform:translateZ(5em);\r\n}\r\n.cub-10 .bk {\r\n  -webkit-transform:translateZ(-5em) rotateY(180deg);\r\n}\r\n.cub-10 .rt, .cub-10 .lt {\r\n  width:10em;\r\n  height:4em;\r\n}\r\n.cub-10 .tp, .cub-10 .bm {\r\n  width:4em;\r\n  height:10em;\r\n}\r\n.cub-10 .face {\r\n  background-color:#FFFFFF;\r\n}\r\n/* .cub-11 styles */\r\n.cub-11 {\r\n  -webkit-transform:translate3D(-11.5em, -1.5em, -5em) rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n  opacity:1;\r\n  width:2em;\r\n  height:2em;\r\n  margin:-1em 0 0 -1em;\r\n}\r\n.cub-11 .ft {\r\n  -webkit-transform:translateZ(1em);\r\n}\r\n.cub-11 .bk {\r\n  -webkit-transform:translateZ(-1em) rotateY(180deg);\r\n}\r\n.cub-11 .rt, .cub-11 .lt {\r\n  width:2em;\r\n  height:2em;\r\n}\r\n.cub-11 .tp, .cub-11 .bm {\r\n  width:2em;\r\n  height:2em;\r\n}\r\n.cub-11 .face {\r\n  background-color:#FFFFFF;\r\n}\r\n/* .cub-12 styles */\r\n.cub-12 {\r\n  -webkit-transform:translate3D(-20em, -1em, -2.5em) rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n  opacity:1;\r\n  width:2em;\r\n  height:2em;\r\n  margin:-1em 0 0 -1em;\r\n}\r\n.cub-12 .ft {\r\n  -webkit-transform:translateZ(1em);\r\n}\r\n.cub-12 .bk {\r\n  -webkit-transform:translateZ(-1em) rotateY(180deg);\r\n}\r\n.cub-12 .rt, .cub-12 .lt {\r\n  width:2em;\r\n  height:2em;\r\n}\r\n.cub-12 .tp, .cub-12 .bm {\r\n  width:2em;\r\n  height:2em;\r\n}\r\n.cub-12 .face {\r\n  background-color:#FFFFFF;\r\n}\r\n/* .cub-13 styles */\r\n.cub-13 {\r\n  -webkit-transform:translate3D(-11.5em, -2.5em, 3.5em) rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n  opacity:1;\r\n  width:2em;\r\n  height:2em;\r\n  margin:-1em 0 0 -1em;\r\n}\r\n.cub-13 .ft {\r\n  -webkit-transform:translateZ(1em);\r\n}\r\n.cub-13 .bk {\r\n  -webkit-transform:translateZ(-1em) rotateY(180deg);\r\n}\r\n.cub-13 .rt, .cub-13 .lt {\r\n  width:2em;\r\n  height:2em;\r\n}\r\n.cub-13 .tp, .cub-13 .bm {\r\n  width:2em;\r\n  height:2em;\r\n}\r\n.cub-13 .face {\r\n  background-color:#FFFFFF;\r\n}\r\n/* .cub-14 styles */\r\n.cub-14 {\r\n  -webkit-transform:translate3D(-15em, -1.5em, 14em) rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n  opacity:1;\r\n  width:2em;\r\n  height:2em;\r\n  margin:-1em 0 0 -1em;\r\n}\r\n.cub-14 .ft {\r\n  -webkit-transform:translateZ(1em);\r\n}\r\n.cub-14 .bk {\r\n  -webkit-transform:translateZ(-1em) rotateY(180deg);\r\n}\r\n.cub-14 .rt, .cub-14 .lt {\r\n  width:2em;\r\n  height:2em;\r\n}\r\n.cub-14 .tp, .cub-14 .bm {\r\n  width:2em;\r\n  height:2em;\r\n}\r\n.cub-14 .face {\r\n  background-color:#FFFFFF;\r\n}\r\n/* .cub-15 styles */\r\n.cub-15 {\r\n  -webkit-transform:translate3D(3em, 0.5em, -10em) rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n  opacity:1;\r\n  width:2em;\r\n  height:2em;\r\n  margin:-1em 0 0 -1em;\r\n}\r\n.cub-15 .ft {\r\n  -webkit-transform:translateZ(1em);\r\n}\r\n.cub-15 .bk {\r\n  -webkit-transform:translateZ(-1em) rotateY(180deg);\r\n}\r\n.cub-15 .rt, .cub-15 .lt {\r\n  width:2em;\r\n  height:2em;\r\n}\r\n.cub-15 .tp, .cub-15 .bm {\r\n  width:2em;\r\n  height:2em;\r\n}\r\n.cub-15 .face {\r\n  background-color:#FFFFFF;\r\n}\r\n/* .cub-16 styles */\r\n.cub-16 {\r\n  -webkit-transform:translate3D(12em, 2.5em, 14em) rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n  opacity:1;\r\n  width:2em;\r\n  height:2em;\r\n  margin:-1em 0 0 -1em;\r\n}\r\n.cub-16 .ft {\r\n  -webkit-transform:translateZ(1em);\r\n}\r\n.cub-16 .bk {\r\n  -webkit-transform:translateZ(-1em) rotateY(180deg);\r\n}\r\n.cub-16 .rt, .cub-16 .lt {\r\n  width:2em;\r\n  height:2em;\r\n}\r\n.cub-16 .tp, .cub-16 .bm {\r\n  width:2em;\r\n  height:2em;\r\n}\r\n.cub-16 .face {\r\n  background-color:#FFFFFF;\r\n}\r\n/* .cub-17 styles */\r\n.cub-17 {\r\n  -webkit-transform:translate3D(28.5em, 3.5em, -6.5em) rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n  opacity:1;\r\n  width:2em;\r\n  height:2em;\r\n  margin:-1em 0 0 -1em;\r\n}\r\n.cub-17 .ft {\r\n  -webkit-transform:translateZ(1em);\r\n}\r\n.cub-17 .bk {\r\n  -webkit-transform:translateZ(-1em) rotateY(180deg);\r\n}\r\n.cub-17 .rt, .cub-17 .lt {\r\n  width:2em;\r\n  height:2em;\r\n}\r\n.cub-17 .tp, .cub-17 .bm {\r\n  width:2em;\r\n  height:2em;\r\n}\r\n.cub-17 .face {\r\n  background-color:#FFFFFF;\r\n}\r\n/* .cub-18 styles */\r\n.cub-18 {\r\n  -webkit-transform:translate3D(35.5em, 4.5em, 1.5em) rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n  opacity:1;\r\n  width:2em;\r\n  height:2em;\r\n  margin:-1em 0 0 -1em;\r\n}\r\n.cub-18 .ft {\r\n  -webkit-transform:translateZ(1em);\r\n}\r\n.cub-18 .bk {\r\n  -webkit-transform:translateZ(-1em) rotateY(180deg);\r\n}\r\n.cub-18 .rt, .cub-18 .lt {\r\n  width:2em;\r\n  height:2em;\r\n}\r\n.cub-18 .tp, .cub-18 .bm {\r\n  width:2em;\r\n  height:2em;\r\n}\r\n.cub-18 .face {\r\n  background-color:#FFFFFF;\r\n}\r\n/* .cub-19 styles */\r\n.cub-19 {\r\n  -webkit-transform:translate3D(20em, 3.5em, 3em) rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n  opacity:1;\r\n  width:2em;\r\n  height:2em;\r\n  margin:-1em 0 0 -1em;\r\n}\r\n.cub-19 .ft {\r\n  -webkit-transform:translateZ(1em);\r\n}\r\n.cub-19 .bk {\r\n  -webkit-transform:translateZ(-1em) rotateY(180deg);\r\n}\r\n.cub-19 .rt, .cub-19 .lt {\r\n  width:2em;\r\n  height:2em;\r\n}\r\n.cub-19 .tp, .cub-19 .bm {\r\n  width:2em;\r\n  height:2em;\r\n}\r\n.cub-19 .face {\r\n  background-color:#FFFFFF;\r\n}\r\n/* .cub-20 styles */\r\n.cub-20 {\r\n  -webkit-transform:translate3D(7em, -0.5em, 3.5em) rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n  opacity:1;\r\n  width:2em;\r\n  height:2em;\r\n  margin:-1em 0 0 -1em;\r\n}\r\n.cub-20 .ft {\r\n  -webkit-transform:translateZ(1em);\r\n}\r\n.cub-20 .bk {\r\n  -webkit-transform:translateZ(-1em) rotateY(180deg);\r\n}\r\n.cub-20 .rt, .cub-20 .lt {\r\n  width:2em;\r\n  height:2em;\r\n}\r\n.cub-20 .tp, .cub-20 .bm {\r\n  width:2em;\r\n  height:2em;\r\n}\r\n.cub-20 .face {\r\n  background-color:#FFFFFF;\r\n}\r\n/* .cub-21 styles */\r\n.cub-21 {\r\n  -webkit-transform:translate3D(23em, 3.5em, 14em) rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n  opacity:1;\r\n  width:2em;\r\n  height:2em;\r\n  margin:-1em 0 0 -1em;\r\n}\r\n.cub-21 .ft {\r\n  -webkit-transform:translateZ(1em);\r\n}\r\n.cub-21 .bk {\r\n  -webkit-transform:translateZ(-1em) rotateY(180deg);\r\n}\r\n.cub-21 .rt, .cub-21 .lt {\r\n  width:2em;\r\n  height:2em;\r\n}\r\n.cub-21 .tp, .cub-21 .bm {\r\n  width:2em;\r\n  height:2em;\r\n}\r\n.cub-21 .face {\r\n  background-color:#FFFFFF;\r\n}\r\n/* .cub-22 styles */\r\n.cub-22 {\r\n  -webkit-transform:translate3D(-20em, -3em, -11em) rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n  opacity:1;\r\n  width:1em;\r\n  height:1em;\r\n  margin:-0.5em 0 0 -0.5em;\r\n}\r\n.cub-22 .ft {\r\n  -webkit-transform:translateZ(0.5em);\r\n}\r\n.cub-22 .bk {\r\n  -webkit-transform:translateZ(-0.5em) rotateY(180deg);\r\n}\r\n.cub-22 .rt, .cub-22 .lt {\r\n  width:1em;\r\n  height:1em;\r\n}\r\n.cub-22 .tp, .cub-22 .bm {\r\n  width:1em;\r\n  height:1em;\r\n}\r\n.cub-22 .face {\r\n  background-color:#FFFFFF;\r\n}\r\n/* .cub-23 styles */\r\n.cub-23 {\r\n  -webkit-transform:translate3D(-2.5em, -1.5em, 7em) rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n  opacity:1;\r\n  width:1em;\r\n  height:1em;\r\n  margin:-0.5em 0 0 -0.5em;\r\n}\r\n.cub-23 .ft {\r\n  -webkit-transform:translateZ(0.5em);\r\n}\r\n.cub-23 .bk {\r\n  -webkit-transform:translateZ(-0.5em) rotateY(180deg);\r\n}\r\n.cub-23 .rt, .cub-23 .lt {\r\n  width:1em;\r\n  height:1em;\r\n}\r\n.cub-23 .tp, .cub-23 .bm {\r\n  width:1em;\r\n  height:1em;\r\n}\r\n.cub-23 .face {\r\n  background-color:#FFFFFF;\r\n}\r\n/* .cub-24 styles */\r\n.cub-24 {\r\n  -webkit-transform:translate3D(-22em, -0.5em, 11em) rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n  opacity:1;\r\n  width:1em;\r\n  height:1em;\r\n  margin:-0.5em 0 0 -0.5em;\r\n}\r\n.cub-24 .ft {\r\n  -webkit-transform:translateZ(0.5em);\r\n}\r\n.cub-24 .bk {\r\n  -webkit-transform:translateZ(-0.5em) rotateY(180deg);\r\n}\r\n.cub-24 .rt, .cub-24 .lt {\r\n  width:1em;\r\n  height:1em;\r\n}\r\n.cub-24 .tp, .cub-24 .bm {\r\n  width:1em;\r\n  height:1em;\r\n}\r\n.cub-24 .face {\r\n  background-color:#FFFFFF;\r\n}\r\n/* .cub-25 styles */\r\n.cub-25 {\r\n  -webkit-transform:translate3D(4em, 3em, 17em) rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n  opacity:1;\r\n  width:1em;\r\n  height:1em;\r\n  margin:-0.5em 0 0 -0.5em;\r\n}\r\n.cub-25 .ft {\r\n  -webkit-transform:translateZ(0.5em);\r\n}\r\n.cub-25 .bk {\r\n  -webkit-transform:translateZ(-0.5em) rotateY(180deg);\r\n}\r\n.cub-25 .rt, .cub-25 .lt {\r\n  width:1em;\r\n  height:1em;\r\n}\r\n.cub-25 .tp, .cub-25 .bm {\r\n  width:1em;\r\n  height:1em;\r\n}\r\n.cub-25 .face {\r\n  background-color:#FFFFFF;\r\n}\r\n/* .cub-26 styles */\r\n.cub-26 {\r\n  -webkit-transform:translate3D(13em, 0em, -12.5em) rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n  opacity:1;\r\n  width:1em;\r\n  height:1em;\r\n  margin:-0.5em 0 0 -0.5em;\r\n}\r\n.cub-26 .ft {\r\n  -webkit-transform:translateZ(0.5em);\r\n}\r\n.cub-26 .bk {\r\n  -webkit-transform:translateZ(-0.5em) rotateY(180deg);\r\n}\r\n.cub-26 .rt, .cub-26 .lt {\r\n  width:1em;\r\n  height:1em;\r\n}\r\n.cub-26 .tp, .cub-26 .bm {\r\n  width:1em;\r\n  height:1em;\r\n}\r\n.cub-26 .face {\r\n  background-color:#FFFFFF;\r\n}\r\n/* .cub-27 styles */\r\n.cub-27 {\r\n  -webkit-transform:translate3D(19em, 0.5em, 16em) rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n  opacity:1;\r\n  width:1em;\r\n  height:1em;\r\n  margin:-0.5em 0 0 -0.5em;\r\n}\r\n.cub-27 .ft {\r\n  -webkit-transform:translateZ(0.5em);\r\n}\r\n.cub-27 .bk {\r\n  -webkit-transform:translateZ(-0.5em) rotateY(180deg);\r\n}\r\n.cub-27 .rt, .cub-27 .lt {\r\n  width:1em;\r\n  height:1em;\r\n}\r\n.cub-27 .tp, .cub-27 .bm {\r\n  width:1em;\r\n  height:1em;\r\n}\r\n.cub-27 .face {\r\n  background-color:#FFFFFF;\r\n}\r\n/* .cub-28 styles */\r\n.cub-28 {\r\n  -webkit-transform:translate3D(31em, 1em, -1.5em) rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n  opacity:1;\r\n  width:1em;\r\n  height:1em;\r\n  margin:-0.5em 0 0 -0.5em;\r\n}\r\n.cub-28 .ft {\r\n  -webkit-transform:translateZ(0.5em);\r\n}\r\n.cub-28 .bk {\r\n  -webkit-transform:translateZ(-0.5em) rotateY(180deg);\r\n}\r\n.cub-28 .rt, .cub-28 .lt {\r\n  width:1em;\r\n  height:1em;\r\n}\r\n.cub-28 .tp, .cub-28 .bm {\r\n  width:1em;\r\n  height:1em;\r\n}\r\n.cub-28 .face {\r\n  background-color:#FFFFFF;\r\n}\r\n/* .cub-29 styles */\r\n.cub-29 {\r\n  -webkit-transform:translate3D(37em, 5em, 18em) rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n  opacity:1;\r\n  width:1em;\r\n  height:1em;\r\n  margin:-0.5em 0 0 -0.5em;\r\n}\r\n.cub-29 .ft {\r\n  -webkit-transform:translateZ(0.5em);\r\n}\r\n.cub-29 .bk {\r\n  -webkit-transform:translateZ(-0.5em) rotateY(180deg);\r\n}\r\n.cub-29 .rt, .cub-29 .lt {\r\n  width:1em;\r\n  height:1em;\r\n}\r\n.cub-29 .tp, .cub-29 .bm {\r\n  width:1em;\r\n  height:1em;\r\n}\r\n.cub-29 .face {\r\n  background-color:#FFFFFF;\r\n}\r\n/* .cub-30 styles */\r\n.cub-30 {\r\n  -webkit-transform:translate3D(-6.5em, -1em, 0em) rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n  opacity:1;\r\n  width:1em;\r\n  height:1em;\r\n  margin:-0.5em 0 0 -0.5em;\r\n}\r\n.cub-30 .ft {\r\n  -webkit-transform:translateZ(0.5em);\r\n}\r\n.cub-30 .bk {\r\n  -webkit-transform:translateZ(-0.5em) rotateY(180deg);\r\n}\r\n.cub-30 .rt, .cub-30 .lt {\r\n  width:1em;\r\n  height:1em;\r\n}\r\n.cub-30 .tp, .cub-30 .bm {\r\n  width:1em;\r\n  height:1em;\r\n}\r\n.cub-30 .face {\r\n  background-color:#FFFFFF;\r\n}\r\n/* .cub-31 styles */\r\n.cub-31 {\r\n  -webkit-transform:translate3D(31.5em, 4em, -13.5em) rotateX(0deg) rotateY(0deg) rotateZ(0deg);\r\n  opacity:1;\r\n  width:1em;\r\n  height:1em;\r\n  margin:-0.5em 0 0 -0.5em;\r\n}\r\n.cub-31 .ft {\r\n  -webkit-transform:translateZ(0.5em);\r\n}\r\n.cub-31 .bk {\r\n  -webkit-transform:translateZ(-0.5em) rotateY(180deg);\r\n}\r\n.cub-31 .rt, .cub-31 .lt {\r\n  width:1em;\r\n  height:1em;\r\n}\r\n.cub-31 .tp, .cub-31 .bm {\r\n  width:1em;\r\n  height:1em;\r\n}\r\n.cub-31 .face {\r\n  background-color:#FFFFFF;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/error/error.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"tridiv\">\n  <div class=\"scene\" style=\"-webkit-transform:rotateX(264deg) rotateY(-4deg); -moz-transform:rotateX(264deg) rotateY(-4deg); -ms-transform:rotateX(264deg) rotateY(-4deg); transform:rotateX(264deg) rotateY(-4deg); \">\n    <div class=\"shape cuboid-1 cub-1\">\n      <div class=\"face ft\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.223529);\"></div>\n      </div>\n      <div class=\"face bk\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.372549);\"></div>\n      </div>\n      <div class=\"face rt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.301961);\"></div>\n      </div>\n      <div class=\"face lt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.298039);\"></div>\n      </div>\n      <div class=\"face bm\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.67451);\"></div>\n      </div>\n      <div class=\"face tp\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(255, 255, 255, 0.0745098);\"></div>\n      </div>\n    </div>\n    <div class=\"shape cuboid-2 cub-2\">\n      <div class=\"face ft\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.301961);\"></div>\n      </div>\n      <div class=\"face bk\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.298039);\"></div>\n      </div>\n      <div class=\"face rt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.372549);\"></div>\n      </div>\n      <div class=\"face lt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.223529);\"></div>\n      </div>\n      <div class=\"face bm\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.67451);\"></div>\n      </div>\n      <div class=\"face tp\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(255, 255, 255, 0.0745098);\"></div>\n      </div>\n    </div>\n    <div class=\"shape cuboid-3 cub-3\">\n      <div class=\"face ft\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.301961);\"></div>\n      </div>\n      <div class=\"face bk\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.298039);\"></div>\n      </div>\n      <div class=\"face rt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.372549);\"></div>\n      </div>\n      <div class=\"face lt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.223529);\"></div>\n      </div>\n      <div class=\"face bm\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.67451);\"></div>\n      </div>\n      <div class=\"face tp\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(255, 255, 255, 0.0745098);\"></div>\n      </div>\n    </div>\n    <div class=\"shape cuboid-4 cub-4\">\n      <div class=\"face ft\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.223529);\"></div>\n      </div>\n      <div class=\"face bk\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.372549);\"></div>\n      </div>\n      <div class=\"face rt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.301961);\"></div>\n      </div>\n      <div class=\"face lt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.298039);\"></div>\n      </div>\n      <div class=\"face bm\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.67451);\"></div>\n      </div>\n      <div class=\"face tp\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(255, 255, 255, 0.0745098);\"></div>\n      </div>\n    </div>\n    <div class=\"shape cuboid-5 cub-5\">\n      <div class=\"face ft\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.223529);\"></div>\n      </div>\n      <div class=\"face bk\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.372549);\"></div>\n      </div>\n      <div class=\"face rt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.301961);\"></div>\n      </div>\n      <div class=\"face lt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.298039);\"></div>\n      </div>\n      <div class=\"face bm\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.67451);\"></div>\n      </div>\n      <div class=\"face tp\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(255, 255, 255, 0.0745098);\"></div>\n      </div>\n    </div>\n    <div class=\"shape cuboid-6 cub-6\">\n      <div class=\"face ft\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.301961);\"></div>\n      </div>\n      <div class=\"face bk\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.298039);\"></div>\n      </div>\n      <div class=\"face rt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.372549);\"></div>\n      </div>\n      <div class=\"face lt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.223529);\"></div>\n      </div>\n      <div class=\"face bm\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.67451);\"></div>\n      </div>\n      <div class=\"face tp\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(255, 255, 255, 0.0745098);\"></div>\n      </div>\n    </div>\n    <div class=\"shape cuboid-7 cub-7\">\n      <div class=\"face ft\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.372549);\"></div>\n      </div>\n      <div class=\"face bk\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.223529);\"></div>\n      </div>\n      <div class=\"face rt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.298039);\"></div>\n      </div>\n      <div class=\"face lt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.301961);\"></div>\n      </div>\n      <div class=\"face bm\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.67451);\"></div>\n      </div>\n      <div class=\"face tp\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(255, 255, 255, 0.0745098);\"></div>\n      </div>\n    </div>\n    <div class=\"shape cuboid-8 cub-8\">\n      <div class=\"face ft\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.223529);\"></div>\n      </div>\n      <div class=\"face bk\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.372549);\"></div>\n      </div>\n      <div class=\"face rt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.301961);\"></div>\n      </div>\n      <div class=\"face lt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.298039);\"></div>\n      </div>\n      <div class=\"face bm\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.67451);\"></div>\n      </div>\n      <div class=\"face tp\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(255, 255, 255, 0.0745098);\"></div>\n      </div>\n    </div>\n    <div class=\"shape cuboid-9 cub-9\">\n      <div class=\"face ft\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.301961);\"></div>\n      </div>\n      <div class=\"face bk\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.298039);\"></div>\n      </div>\n      <div class=\"face rt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.372549);\"></div>\n      </div>\n      <div class=\"face lt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.223529);\"></div>\n      </div>\n      <div class=\"face bm\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.67451);\"></div>\n      </div>\n      <div class=\"face tp\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(255, 255, 255, 0.0745098);\"></div>\n      </div>\n    </div>\n    <div class=\"shape cuboid-10 cub-10\">\n      <div class=\"face ft\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.372549);\"></div>\n      </div>\n      <div class=\"face bk\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.223529);\"></div>\n      </div>\n      <div class=\"face rt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.298039);\"></div>\n      </div>\n      <div class=\"face lt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.301961);\"></div>\n      </div>\n      <div class=\"face bm\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.67451);\"></div>\n      </div>\n      <div class=\"face tp\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(255, 255, 255, 0.0745098);\"></div>\n      </div>\n    </div>\n    <div class=\"shape cuboid-11 cub-11\">\n      <div class=\"face ft\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.223529);\"></div>\n      </div>\n      <div class=\"face bk\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.372549);\"></div>\n      </div>\n      <div class=\"face rt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.301961);\"></div>\n      </div>\n      <div class=\"face lt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.298039);\"></div>\n      </div>\n      <div class=\"face bm\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.67451);\"></div>\n      </div>\n      <div class=\"face tp\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(255, 255, 255, 0.0745098);\"></div>\n      </div>\n    </div>\n    <div class=\"shape cuboid-12 cub-12\">\n      <div class=\"face ft\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.223529);\"></div>\n      </div>\n      <div class=\"face bk\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.372549);\"></div>\n      </div>\n      <div class=\"face rt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.301961);\"></div>\n      </div>\n      <div class=\"face lt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.298039);\"></div>\n      </div>\n      <div class=\"face bm\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.67451);\"></div>\n      </div>\n      <div class=\"face tp\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(255, 255, 255, 0.0745098);\"></div>\n      </div>\n    </div>\n    <div class=\"shape cuboid-13 cub-13\">\n      <div class=\"face ft\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.223529);\"></div>\n      </div>\n      <div class=\"face bk\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.372549);\"></div>\n      </div>\n      <div class=\"face rt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.301961);\"></div>\n      </div>\n      <div class=\"face lt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.298039);\"></div>\n      </div>\n      <div class=\"face bm\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.67451);\"></div>\n      </div>\n      <div class=\"face tp\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(255, 255, 255, 0.0745098);\"></div>\n      </div>\n    </div>\n    <div class=\"shape cuboid-14 cub-14\">\n      <div class=\"face ft\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.223529);\"></div>\n      </div>\n      <div class=\"face bk\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.372549);\"></div>\n      </div>\n      <div class=\"face rt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.301961);\"></div>\n      </div>\n      <div class=\"face lt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.298039);\"></div>\n      </div>\n      <div class=\"face bm\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.67451);\"></div>\n      </div>\n      <div class=\"face tp\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(255, 255, 255, 0.0745098);\"></div>\n      </div>\n    </div>\n    <div class=\"shape cuboid-15 cub-15\">\n      <div class=\"face ft\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.223529);\"></div>\n      </div>\n      <div class=\"face bk\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.372549);\"></div>\n      </div>\n      <div class=\"face rt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.301961);\"></div>\n      </div>\n      <div class=\"face lt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.298039);\"></div>\n      </div>\n      <div class=\"face bm\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.67451);\"></div>\n      </div>\n      <div class=\"face tp\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(255, 255, 255, 0.0745098);\"></div>\n      </div>\n    </div>\n    <div class=\"shape cuboid-16 cub-16\">\n      <div class=\"face ft\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.223529);\"></div>\n      </div>\n      <div class=\"face bk\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.372549);\"></div>\n      </div>\n      <div class=\"face rt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.301961);\"></div>\n      </div>\n      <div class=\"face lt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.298039);\"></div>\n      </div>\n      <div class=\"face bm\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.67451);\"></div>\n      </div>\n      <div class=\"face tp\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(255, 255, 255, 0.0745098);\"></div>\n      </div>\n    </div>\n    <div class=\"shape cuboid-17 cub-17\">\n      <div class=\"face ft\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.223529);\"></div>\n      </div>\n      <div class=\"face bk\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.372549);\"></div>\n      </div>\n      <div class=\"face rt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.301961);\"></div>\n      </div>\n      <div class=\"face lt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.298039);\"></div>\n      </div>\n      <div class=\"face bm\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.67451);\"></div>\n      </div>\n      <div class=\"face tp\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(255, 255, 255, 0.0745098);\"></div>\n      </div>\n    </div>\n    <div class=\"shape cuboid-18 cub-18\">\n      <div class=\"face ft\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.223529);\"></div>\n      </div>\n      <div class=\"face bk\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.372549);\"></div>\n      </div>\n      <div class=\"face rt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.301961);\"></div>\n      </div>\n      <div class=\"face lt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.298039);\"></div>\n      </div>\n      <div class=\"face bm\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.67451);\"></div>\n      </div>\n      <div class=\"face tp\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(255, 255, 255, 0.0745098);\"></div>\n      </div>\n    </div>\n    <div class=\"shape cuboid-19 cub-19\">\n      <div class=\"face ft\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.223529);\"></div>\n      </div>\n      <div class=\"face bk\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.372549);\"></div>\n      </div>\n      <div class=\"face rt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.301961);\"></div>\n      </div>\n      <div class=\"face lt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.298039);\"></div>\n      </div>\n      <div class=\"face bm\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.67451);\"></div>\n      </div>\n      <div class=\"face tp\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(255, 255, 255, 0.0745098);\"></div>\n      </div>\n    </div>\n    <div class=\"shape cuboid-20 cub-20\">\n      <div class=\"face ft\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.223529);\"></div>\n      </div>\n      <div class=\"face bk\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.372549);\"></div>\n      </div>\n      <div class=\"face rt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.301961);\"></div>\n      </div>\n      <div class=\"face lt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.298039);\"></div>\n      </div>\n      <div class=\"face bm\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.67451);\"></div>\n      </div>\n      <div class=\"face tp\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(255, 255, 255, 0.0745098);\"></div>\n      </div>\n    </div>\n    <div class=\"shape cuboid-21 cub-21\">\n      <div class=\"face ft\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.223529);\"></div>\n      </div>\n      <div class=\"face bk\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.372549);\"></div>\n      </div>\n      <div class=\"face rt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.301961);\"></div>\n      </div>\n      <div class=\"face lt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.298039);\"></div>\n      </div>\n      <div class=\"face bm\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.67451);\"></div>\n      </div>\n      <div class=\"face tp\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(255, 255, 255, 0.0745098);\"></div>\n      </div>\n    </div>\n    <div class=\"shape cuboid-22 cub-22\">\n      <div class=\"face ft\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.223529);\"></div>\n      </div>\n      <div class=\"face bk\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.372549);\"></div>\n      </div>\n      <div class=\"face rt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.301961);\"></div>\n      </div>\n      <div class=\"face lt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.298039);\"></div>\n      </div>\n      <div class=\"face bm\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.67451);\"></div>\n      </div>\n      <div class=\"face tp\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(255, 255, 255, 0.0745098);\"></div>\n      </div>\n    </div>\n    <div class=\"shape cuboid-23 cub-23\">\n      <div class=\"face ft\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.223529);\"></div>\n      </div>\n      <div class=\"face bk\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.372549);\"></div>\n      </div>\n      <div class=\"face rt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.301961);\"></div>\n      </div>\n      <div class=\"face lt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.298039);\"></div>\n      </div>\n      <div class=\"face bm\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.67451);\"></div>\n      </div>\n      <div class=\"face tp\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(255, 255, 255, 0.0745098);\"></div>\n      </div>\n    </div>\n    <div class=\"shape cuboid-24 cub-24\">\n      <div class=\"face ft\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.223529);\"></div>\n      </div>\n      <div class=\"face bk\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.372549);\"></div>\n      </div>\n      <div class=\"face rt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.301961);\"></div>\n      </div>\n      <div class=\"face lt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.298039);\"></div>\n      </div>\n      <div class=\"face bm\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.67451);\"></div>\n      </div>\n      <div class=\"face tp\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(255, 255, 255, 0.0745098);\"></div>\n      </div>\n    </div>\n    <div class=\"shape cuboid-25 cub-25\">\n      <div class=\"face ft\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.223529);\"></div>\n      </div>\n      <div class=\"face bk\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.372549);\"></div>\n      </div>\n      <div class=\"face rt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.301961);\"></div>\n      </div>\n      <div class=\"face lt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.298039);\"></div>\n      </div>\n      <div class=\"face bm\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.67451);\"></div>\n      </div>\n      <div class=\"face tp\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(255, 255, 255, 0.0745098);\"></div>\n      </div>\n    </div>\n    <div class=\"shape cuboid-26 cub-26\">\n      <div class=\"face ft\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.223529);\"></div>\n      </div>\n      <div class=\"face bk\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.372549);\"></div>\n      </div>\n      <div class=\"face rt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.301961);\"></div>\n      </div>\n      <div class=\"face lt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.298039);\"></div>\n      </div>\n      <div class=\"face bm\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.67451);\"></div>\n      </div>\n      <div class=\"face tp\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(255, 255, 255, 0.0745098);\"></div>\n      </div>\n    </div>\n    <div class=\"shape cuboid-27 cub-27\">\n      <div class=\"face ft\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.223529);\"></div>\n      </div>\n      <div class=\"face bk\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.372549);\"></div>\n      </div>\n      <div class=\"face rt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.301961);\"></div>\n      </div>\n      <div class=\"face lt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.298039);\"></div>\n      </div>\n      <div class=\"face bm\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.67451);\"></div>\n      </div>\n      <div class=\"face tp\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(255, 255, 255, 0.0745098);\"></div>\n      </div>\n    </div>\n    <div class=\"shape cuboid-28 cub-28\">\n      <div class=\"face ft\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.223529);\"></div>\n      </div>\n      <div class=\"face bk\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.372549);\"></div>\n      </div>\n      <div class=\"face rt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.301961);\"></div>\n      </div>\n      <div class=\"face lt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.298039);\"></div>\n      </div>\n      <div class=\"face bm\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.67451);\"></div>\n      </div>\n      <div class=\"face tp\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(255, 255, 255, 0.0745098);\"></div>\n      </div>\n    </div>\n    <div class=\"shape cuboid-29 cub-29\">\n      <div class=\"face ft\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.223529);\"></div>\n      </div>\n      <div class=\"face bk\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.372549);\"></div>\n      </div>\n      <div class=\"face rt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.301961);\"></div>\n      </div>\n      <div class=\"face lt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.298039);\"></div>\n      </div>\n      <div class=\"face bm\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.67451);\"></div>\n      </div>\n      <div class=\"face tp\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(255, 255, 255, 0.0745098);\"></div>\n      </div>\n    </div>\n    <div class=\"shape cuboid-30 cub-30\">\n      <div class=\"face ft\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.223529);\"></div>\n      </div>\n      <div class=\"face bk\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.372549);\"></div>\n      </div>\n      <div class=\"face rt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.301961);\"></div>\n      </div>\n      <div class=\"face lt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.298039);\"></div>\n      </div>\n      <div class=\"face bm\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.67451);\"></div>\n      </div>\n      <div class=\"face tp\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(255, 255, 255, 0.0745098);\"></div>\n      </div>\n    </div>\n    <div class=\"shape cuboid-31 cub-31\">\n      <div class=\"face ft\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.223529);\"></div>\n      </div>\n      <div class=\"face bk\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.372549);\"></div>\n      </div>\n      <div class=\"face rt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.301961);\"></div>\n      </div>\n      <div class=\"face lt\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.298039);\"></div>\n      </div>\n      <div class=\"face bm\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(0, 0, 0, 0.67451);\"></div>\n      </div>\n      <div class=\"face tp\">\n        <div class=\"photon-shader\" style=\"background-color: rgba(255, 255, 255, 0.0745098);\"></div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/error/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorComponent = (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    return ErrorComponent;
}());
ErrorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-error',
        template: __webpack_require__("../../../../../src/app/error/error.component.html"),
        styles: [__webpack_require__("../../../../../src/app/error/error.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ErrorComponent);

//# sourceMappingURL=error.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\r\n    position: absolute;\r\n    bottom: 5px;\r\n    width: 99%;\r\n    text-align: center;\r\n    color: grey;\r\n    font-size: 8px;\r\n    letter-spacing: 5px;\r\n    text-transform: uppercase;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <span>All Rights Reserved - Aashita Desai</span>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".background-image {\r\n    background-image: url(" + __webpack_require__("../../../../../src/assets/images/wall_14.jpg") + ")!important;\r\n    background-size: cover;\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: inline-block;\r\n    top: 0px;\r\n    left:0px;\r\n}\r\n\r\n.display_picture {\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 5px;\r\n    bottom: 5px;\r\n    left: 5px;\r\n    width:99%;\r\n    height: auto;\r\n    box-shadow: 0 0 1em #d4d1d1;\r\n}\r\n\r\n.heading_div {\r\n    position: relative;\r\n    padding: 5px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    z-index: 3;\r\n    width: 250px;\r\n    margin: 10px;\r\n    background-color: rgba(0, 0, 0, 0.56);\r\n}\r\n\r\n.heading_title {\r\n    color: white;\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    letter-spacing: 2px;\r\n    font-size: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"heading_div\">\n    <span class=\"heading_title\">\n        aashita desai \n    </span>\n</div>\n\n<div class=\"background-image\"></div>\n    <div class=\"segmenter display_picture\" style=\"background-image: url('../../assets/profile/profile_3.jpg');\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.seg_animation();
    };
    HomeComponent.prototype.seg_animation = function () {
        var segmenter = new Segmenter(document.querySelector('.segmenter'), {
            pieces: 5,
            animation: {
                duration: 4500,
                easing: 'easeOutQuad',
                delay: 10,
                translateZ: { min: 10, max: 65 }
            },
            parallax: true,
            parallaxMovement: { min: 7, max: 10 },
            positions: [
                /*{top:80, left: 50, width:30, height:10},
                {top:65, left: 50, width:30, height:10},
                {top:50, left: 50, width:30, height:10},
                {top:35, left: 50, width:30, height:10},
                {top:20, left: 50, width:30, height:10},
                {top:5, left: 50, width:30, height:10}
                */
                { top: 30, left: 20, width: 20, height: 30 },
                { top: 28, left: 35, width: 30, height: 20 },
                { top: 45, left: 18, width: 14, height: 25 },
                { top: 43, left: 50, width: 20, height: 10 },
                { top: 50, left: 65, width: 10, height: 30 },
                { top: 68, left: 20, width: 10, height: 13 },
                { top: 70, left: 67, width: 10, height: 20 }
            ],
            onReady: function () {
                segmenter.animate();
            }
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\n.container_position {\r\n    left: 80px;\r\n    top: 140px;\r\n}\r\n.container_border {\r\n    transform-style: preserve-3d;\r\n    transition: all 1.0s linear;\r\n    box-decoration-break: 0 0 1em #131313;\r\n    opacity: 0.8;\r\n    color: whitesmoke;\r\n    letter-spacing: 1.5px;\r\n}\r\n\r\n.container_border:hover {\r\n    transform: rotateY( 180deg );\r\n    -webkit-transform: rotateY(180deg);\r\n}\r\n// material ends*/\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n        <!--<md-grid-list class=\"container_position\" cols=\"4\" rowHeight=\"100px\">\r\n            <md-grid-tile *ngFor=\"let tile of tiles\" class=\"container_border\"\r\n                          id={{tile.id}}\r\n                          [colspan]=\"tile.cols\"\r\n                          [rowspan]=\"tile.rows\"\r\n                          [style.background]=\"tile.color\">\r\n                {{tile.text}}\r\n            </md-grid-tile>\r\n\r\n        </md-grid-list>-->\r\n"

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = (function () {
    function ProjectsComponent() {
    }
    /*tiles = [
    {id:'collectors_hub' , text: 'Collectors Hub', cols: 1, rows: 3, color: '#232323'},
    {id:'aashitadesai_portfolio', text: 'aashitadesai.me', cols: 1, rows: 3, color: '#232323'},
    {id:'opiod_addiction_analysis', text: 'Opiod Addiction analysis', cols: 1, rows: 3, color: '#232323'},
    {id:'angular_offline', text: 'Angular Offline', cols: 1, rows: 3, color: '#232323'},
    {id:'hardware_store_management', text: 'Hardware Management System', cols: 1, rows: 3, color: '#232323'},
    {id:'automatic_job_post_notifier', text: 'Automatic Job Post Notifier', cols: 1, rows: 3, color: '#232323'},
    {id:'geo_coord_finder', text: 'Geo-Coordinates Finder', cols: 1, rows: 3, color: '#232323'},
    {id:'petrocard_system', text: 'RFID based PetroCard System', cols: 1, rows: 3, color: '#232323'},
];    */
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    return ProjectsComponent;
}());
ProjectsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-projects',
        template: __webpack_require__("../../../../../src/app/projects/projects.component.html"),
        styles: [__webpack_require__("../../../../../src/app/projects/projects.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProjectsComponent);

//# sourceMappingURL=projects.component.js.map

/***/ }),

/***/ "../../../../../src/app/skills/skills.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".background-image_skills {\r\n    background-color: black;\r\n    background-size: cover;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: inline-block;\r\n    top: 0px;\r\n    left: 0px;\r\n}\r\n\r\n\r\n\r\n/*rotating globe*/\r\n/*\r\n.skills-charts {\r\n    position: absolute;\r\n    left: 25%;\r\n    width: 50%;\r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%);\r\n    -ms-transform: translateY(-50%);\r\n    transform: translateY(-50%);\r\n    z-index: 2;\r\n    max-width: 700px;\r\n}\r\n\r\n#myCanvasContainer {\r\n    position: relative;\r\n    height: 500px\r\n}\r\n\r\n#myCanvas {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    margin: auto;\r\n    height: auto\r\n}\r\n\r\n#myCanvasContainer li a {\r\n    font-family: font-file-82132;\r\n}\r\n\r\n.clear {\r\n    clear: both\r\n}\r\n\r\n.logo {\r\n    height: 5%;\r\n    width:50%;\r\n}\r\n*/\r\n\r\n/*zoomable circles*/\r\n.node {\r\n  cursor: pointer;\r\n}\r\n\r\n.node:hover {\r\n  stroke: #fff;\r\n  stroke-width: 1.5px;\r\n}\r\n\r\n.node--leaf {\r\n  fill: white;\r\n}\r\n\r\n.label {\r\n  /*font: 11px \"Helvetica Neue\", Helvetica, Arial, sans-serif;*/\r\n  text-anchor: middle;\r\n  text-shadow: 0 1px 0 #fff, 1px 0 0 #fff, -1px 0 0 #fff, 0 -1px 0 #fff;\r\n}\r\n\r\n.label,\r\n.node--root,\r\n.node--leaf {\r\n  pointer-events: none;\r\n}\r\n\r\n.most_outer_square {\r\n    margin-top: 50px;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    height:90%;\r\n    width: 70%;\r\n    margin:auto;\r\n}\r\n\r\n.svg-container {\r\n    display: inline-block;\r\n    position: relative;\r\n    width: 100%;\r\n    padding-bottom: 100%; /* aspect ratio */\r\n    vertical-align: top;\r\n    overflow: hidden;\r\n}\r\n.svg-content-responsive {\r\n    display: inline-block;\r\n    position: absolute;\r\n    top: 10px;\r\n    left: 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/skills/skills.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background-image_skills\">\r\n    <svg class=\"most_outer_square\"></svg>\r\n</div>\r\n\r\n<div class=\"buttons\"></div>\r\n"

/***/ }),

/***/ "../../../../../src/app/skills/skills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("../../../../d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';*/

/*declare var TagCanvas:any;*/
var SkillsComponent = (function () {
    function SkillsComponent() {
        this.innerHeight = (window.screen.height - 50) + "px";
        this.innerWidth = (window.screen.height - 50) + "px";
    }
    SkillsComponent.prototype.ngOnInit = function () {
        /*this.readjson('assets/skills.json')
        .then(res=> {
            this.skills = res;
            console.log(this.skills[0].skill);
            TagCanvas.Start('myCanvas','tags',{
                textColour: 'white',
                outlineColour: '#000',
                reverse: true,
                depth: 0.8,
                maxSpeed: 0.08
              });
  
        });
        */
        this.Init();
    };
    SkillsComponent.prototype.ngOnChanges = function () {
    };
    // read skills from json       
    /*readjson(filepath:string):Promise<any>{
       return this.http.get(filepath).toPromise()
           .then(res=>res.json().skills as any);
    }*/
    //d3.js implementation
    SkillsComponent.prototype.Init = function () {
        var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"]("svg"), margin = 20, 
        //diameter = +svg.attr("width"),
        diameter = (window.screen.height - 200), g = svg.append("g").attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");
        var scale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]()
            .domain([-1, 5])
            .range(["hsl(0, 3%, 0%)", "hsl(0, 5%, 70%)"]);
        var color = scale.interpolate(__WEBPACK_IMPORTED_MODULE_1_d3__["interpolateHcl"]);
        var pack = __WEBPACK_IMPORTED_MODULE_1_d3__["pack"]()
            .size([diameter - margin, diameter - margin])
            .padding(2);
        __WEBPACK_IMPORTED_MODULE_1_d3__["json"]("assets/flare.json", function (error, root) {
            if (error)
                throw error;
            root = __WEBPACK_IMPORTED_MODULE_1_d3__["hierarchy"](root)
                .sum(function (d) { return d.size; })
                .sort(function (a, b) { return b.value - a.value; });
            var focus = root, nodes = pack(root).descendants(), view;
            var circle = g.selectAll("circle")
                .data(nodes)
                .enter().append("circle")
                .attr("class", function (d) { return d.parent ? d.children ? "node" : "node node--leaf" : "node node--root"; })
                .style("fill", function (d) { return d.children ? color(d.depth) : null; })
                .on("click", function (d) { if (focus !== d)
                zoom(d), __WEBPACK_IMPORTED_MODULE_1_d3__["event"].stopPropagation(); });
            var text = g.selectAll("text")
                .data(nodes)
                .enter().append("text")
                .attr("class", "label")
                .style('fill', 'white')
                .style('text-anchor', 'middle')
                .style("fill-opacity", function (d) { return d.parent === root ? 1 : 0; })
                .style("display", function (d) { return d.parent === root ? "inline" : "none"; })
                .text(function (d) { return d.data.name; });
            var node = g.selectAll("circle,text");
            svg
                .style("background", color(-1))
                .on("click", function () { zoom(root); });
            zoomTo([root.x, root.y, root.r * 2 + margin]);
            function zoom(d) {
                var focus0 = focus;
                focus = d;
                var transition = __WEBPACK_IMPORTED_MODULE_1_d3__["transition"](transition)
                    .duration(__WEBPACK_IMPORTED_MODULE_1_d3__["event"].altKey ? 7500 : 750)
                    .tween("zoom", function (d) {
                    var i = __WEBPACK_IMPORTED_MODULE_1_d3__["interpolateZoom"](view, [focus.x, focus.y, focus.r * 2 + margin]);
                    return function (t) { zoomTo(i(t)); };
                });
                transition.selectAll("text")
                    .filter(function (d) { return d.parent === focus || this.style.display === "inline"; })
                    .style("fill-opacity", function (d) { return d.parent === focus ? 1 : 0; })
                    .on("start", function (d) { if (d.parent === focus)
                    this.style.display = "inline"; })
                    .on("end", function (d) { if (d.parent !== focus)
                    this.style.display = "none"; });
            }
            function zoomTo(v) {
                var k = diameter / v[2];
                view = v;
                node.attr("transform", function (d) { return "translate(" + (d.x - v[0]) * k + "," + (d.y - v[1]) * k + ")"; });
                circle.attr("r", function (d) { return d.r * k; });
            }
        });
    };
    return SkillsComponent;
}());
SkillsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-skills',
        template: __webpack_require__("../../../../../src/app/skills/skills.component.html"),
        styles: [__webpack_require__("../../../../../src/app/skills/skills.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SkillsComponent);

//# sourceMappingURL=skills.component.js.map

/***/ }),

/***/ "../../../../../src/app/who/who.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".who_container {\r\n    height: 100%;\r\n   /* border: 1px solid white;*/\r\n    padding: 5px;\r\n    \r\n}\r\n\r\n.who_about {\r\n    box-shadow: 0 0 1em #4c4c4c;\r\n    background-color: #080808;\r\n    z-index: 2;\r\n}\r\n\r\n.imagecontainer{\r\n margin:auto;\r\n    margin-top: 50px;\r\n display:block;\r\n width:175px;\r\n height:175px;\r\n overflow:hidden;\r\n transform: rotate(45deg);\r\n -ms-transform: rotate(45deg); /* IE 9 */\r\n -webkit-transform: rotate(45deg); /* Safari and Chrome */\r\n position:relative;\r\n \r\n /* non-essential styling */\r\n box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, .05);\r\n \r\n}\r\n.imagecontainer img{\r\n    transform: rotate(-45deg);\r\n    -ms-transform: rotate(-45deg); /* IE 9 */\r\n    -webkit-transform: rotate(-45deg); /* Safari and Chrome */\r\n    position:absolute;\r\n    left: -20px;\r\n    top:-60px;\r\n    width:250px;\r\n    height: auto;\r\n}\r\n\r\n.who_text {\r\n    padding-left: 50px;\r\n    padding-right: 50px;\r\n    text-align: center;\r\n    color: gray;\r\n    margin: auto;\r\n    letter-spacing: 1px;\r\n    margin-top: 100px;\r\n    font-size: 16px;\r\n}\r\n\r\n.who_text:hover {\r\n    color: white;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/who/who.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"who_container\" fxLayout=\"row\" fxLayout.xs=\"column\">\n    <div class=\"who_about\" fxFlex=\"47.5\" fxFlex.xs=\"100\">\n       <div class=\"imagecontainer\">\n        <img src=\"../../assets/who_am_i.jpg\" alt=\"\" width=\"255\" height=\"320\" />\n      </div>\n        <div class=\"who_text\"><p>A self-starter, highly motivated and passionate about learning new technologies. Working with people who are varied in skills and background. Enthusiastic about finding a unique solution and present it in the best way possible.\n (:</p></div>\n</div>\n    \n    <div fxFlex=\"5\" fxFlex.xs=\"100\"></div>\n    \n    <div class=\"who_about\" fxFlex=\"47.5\" fxFlex.xs=\"100\">\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/who/who.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WhoComponent = (function () {
    function WhoComponent() {
    }
    WhoComponent.prototype.ngOnInit = function () {
    };
    return WhoComponent;
}());
WhoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-who',
        template: __webpack_require__("../../../../../src/app/who/who.component.html"),
        styles: [__webpack_require__("../../../../../src/app/who/who.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WhoComponent);

//# sourceMappingURL=who.component.js.map

/***/ }),

/***/ "../../../../../src/assets/images/wall_14.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "wall_14.e11f6d19aea608a7fc85.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map