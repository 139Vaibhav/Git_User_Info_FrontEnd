(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");





var routes = [
    { path: '', pathMatch: 'full', redirectTo: '/' },
    { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
    { path: 'user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Github Search App';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _github_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./github-service.service */ "./src/app/github-service.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _repository_repository_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./repository/repository.component */ "./src/app/repository/repository.component.ts");
/* harmony import */ var _truncate_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./truncate.pipe */ "./src/app/truncate.pipe.ts");
/* harmony import */ var _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-info/user-info.component */ "./src/app/user-info/user-info.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_7__["UserComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_11__["UserInfoComponent"],
                _repository_repository_component__WEBPACK_IMPORTED_MODULE_9__["RepositoryComponent"],
                _truncate_pipe__WEBPACK_IMPORTED_MODULE_10__["TruncatePipe"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"]
            ],
            providers: [_github_service_service__WEBPACK_IMPORTED_MODULE_4__["GithubServiceService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" routerLink=\"/\">\n    <img src=\"https://www.teenvio.com/es/wp-content/plugins/g1-social-icons/images/github/github-256.png\" width=\"50\" height=\"50\" alt=\"logo\">\n    {{ title }}\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/user\">Search User</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-md-12\">\n      <div class=\"card text-center\" style=\"margin-top: 20px\">\n        <div class=\"card-body\">\n          <a routerLink=\"user\" class=\"btn btn-primary\">Search User</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.title = 'Github Search';
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/github-service.service.ts":
/*!*******************************************!*\
  !*** ./src/app/github-service.service.ts ***!
  \*******************************************/
/*! exports provided: GithubServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubServiceService", function() { return GithubServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var GithubServiceService = /** @class */ (function () {
    function GithubServiceService(http) {
        this.http = http;
        this.configUrl = 'https://api.github.com';
    }
    GithubServiceService.prototype.getUser = function (userName) {
        var url = this.configUrl + "/users/" + userName;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('fetch users', [])));
    };
    GithubServiceService.prototype.getRepos = function (userName, pageNum) {
        var url = this.configUrl + "/users/" + userName + "/repos?per_page=9&page=" + pageNum;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('fetch users', [])));
    };
    GithubServiceService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + ". Reason: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    GithubServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GithubServiceService);
    return GithubServiceService;
}());



/***/ }),

/***/ "./src/app/repository/repository.component.css":
/*!*****************************************************!*\
  !*** ./src/app/repository/repository.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n    background-color: beige;\r\n}\r\n\r\n.chip {\r\n    display: inline-block;\r\n    padding: 2px 5px;\r\n    font-size: 16px;\r\n    border-radius: 25px;\r\n    background-color: #e8f5ff;\r\n}\r\n\r\n.center {\r\n    text-align: center;\r\n    margin-bottom: 10vh;\r\n}\r\n\r\n.pagination a {\r\n    color: black;\r\n    float: left;\r\n    padding: 8px 16px;\r\n    text-decoration: none;\r\n    transition: background-color .3s;\r\n    border: 1px solid #ddd;\r\n    margin: 0 4px;\r\n}\r\n\r\n.pagination a.active {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    border: 1px solid #4CAF50;\r\n}\r\n\r\n.pagination a:hover:not(.active) {\r\n    background-color: #ddd;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3NpdG9yeS9yZXBvc2l0b3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixnQ0FBZ0M7SUFDaEMsc0JBQXNCO0lBQ3RCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL3JlcG9zaXRvcnkvcmVwb3NpdG9yeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XHJcbn1cclxuXHJcbi5jaGlwIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDJweCA1cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZjVmZjtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHZoO1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbiBhIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBtYXJnaW46IDAgNHB4O1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbiBhLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzRDQUY1MDtcclxufVxyXG5cclxuLnBhZ2luYXRpb24gYTpob3Zlcjpub3QoLmFjdGl2ZSkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/repository/repository.component.html":
/*!******************************************************!*\
  !*** ./src/app/repository/repository.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-md-4\" *ngFor=\"let item of arrayData\" style=\"margin-bottom: 20px\">\n      <div class=\"card\" [ngClass]=\"bg-white\" style=\"margin-bottom: 10px; min-height: 200px\">\n      <div class=\"card-body\">\n        <a href=\"{{item.html_url}}\" target=\"_blank\" style=\"text-decoration: none; color: #000\"><h5 class=\"card-title\">{{item.name | truncate:[25] }}</h5></a>\n        <h6 class=\"card-subtitle mb-2 text-muted\">Language: \n          <div class=\"chip\">\n            {{item.language}}\n          </div>\n        </h6>\n        <p class=\"card-text\">{{item.description | truncate:[50] }}</p>\n        <ul class=\"list-inline Left\">\n        <li class=\"list-inline-item\" style=\"margin-right: 30px\"><i class=\"fa fa-star\"> {{item.stargazers_count}}</i></li>\n        <li class=\"list-inline-item\" style=\"margin-right: 30px\"><i class=\"fa fa-eye\"> {{item.watchers_count}}</i></li>\n        <li class=\"list-inline-item\"><i class=\"fa fa-code-fork\"> {{item.forks_count}}</i></li>\n      </ul>\n      </div>\n    </div>\n    </div>\n  </div>\n  <div class=\"center\">\n    <div class=\"pagination\">\n      <div *ngFor=\"let item of pagination\">\n        <button class=\"btn btn-success\" type=\"button\" id=\"button-addon2\"(click)=\"changePage(item)\">{{item}}</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/repository/repository.component.ts":
/*!****************************************************!*\
  !*** ./src/app/repository/repository.component.ts ***!
  \****************************************************/
/*! exports provided: RepositoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepositoryComponent", function() { return RepositoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var RepositoryComponent = /** @class */ (function () {
    function RepositoryComponent(http) {
        this.http = http;
        this.pagenum = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pagination = [];
    }
    RepositoryComponent.prototype.ngOnInit = function () {
        var cnt = Math.ceil(this.repoCount / 10);
        for (var i = 1; i <= cnt; i++) {
            this.pagination.push(i);
        }
        console.log("pagination value is ", this.pagination);
    };
    RepositoryComponent.prototype.ngOnChanges = function (changes) {
        if (changes['passData']) {
            this.arrayData = this.passData;
        }
    };
    RepositoryComponent.prototype.changePage = function (value) {
        this.pagenum.emit(value);
        console.log("pagenum in child component is ", this.pagenum);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RepositoryComponent.prototype, "passData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RepositoryComponent.prototype, "repoCount", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RepositoryComponent.prototype, "pagenum", void 0);
    RepositoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-repository',
            template: __webpack_require__(/*! ./repository.component.html */ "./src/app/repository/repository.component.html"),
            styles: [__webpack_require__(/*! ./repository.component.css */ "./src/app/repository/repository.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RepositoryComponent);
    return RepositoryComponent;
}());



/***/ }),

/***/ "./src/app/truncate.pipe.ts":
/*!**********************************!*\
  !*** ./src/app/truncate.pipe.ts ***!
  \**********************************/
/*! exports provided: TruncatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncatePipe", function() { return TruncatePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TruncatePipe = /** @class */ (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (value, args) {
        var limit = args.length > 0 ? parseInt(args[0], 10) : 50;
        var trail = args.length > 1 ? args[1] : '...';
        return (value && value.length) > limit ? value.substring(0, limit) + trail : value;
    };
    TruncatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'truncate'
        })
    ], TruncatePipe);
    return TruncatePipe;
}());



/***/ }),

/***/ "./src/app/user-info/user-info.component.css":
/*!***************************************************!*\
  !*** ./src/app/user-info/user-info.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Sidenav */\r\n.sidenav {\r\n    color: #333;\r\n    border-bottom-right-radius: 25px;\r\n    overflow-x: hidden;\r\n    padding-top: 20px;\r\n}\r\n.profile {\r\n    margin-bottom: 20px;\r\n    margin-top: -12px;\r\n    text-align: center;\r\n}\r\n.profile img {\r\n    border-radius: 50%;\r\n    box-shadow: 0px 0px 5px 1px grey;\r\n}\r\n.name {\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    padding-top: 20px;\r\n}\r\n.job {\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    padding-top: 10px;\r\n}\r\n.url,\r\nhr {\r\n    text-align: center;\r\n}\r\n.url hr {\r\n    margin-left: 20%;\r\n    width: 60%;\r\n}\r\n.url a {\r\n    color: #818181;\r\n    display: block;\r\n    font-size: 20px;\r\n    margin: 10px 0;\r\n    padding: 6px 8px;\r\n    text-decoration: none;\r\n}\r\n.url a:hover,\r\n.url .active {\r\n    background-color: #e8f5ff;\r\n    border-radius: 28px;\r\n    color: #000;\r\n    margin-left: 14%;\r\n    width: 65%;\r\n}\r\n/* End */\r\n/* Main */\r\n.main {\r\n    margin-top: 2%;\r\n    margin-left: 12.5%;\r\n    font-size: 28px;\r\n    width: 75%;\r\n}\r\n.main h2 {\r\n    color: #333;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-size: 24px;\r\n    margin-bottom: 10px;\r\n}\r\n.main .card {\r\n    background-color: #fff;\r\n    border-radius: 18px;\r\n    box-shadow: 1px 1px 8px 0 grey;\r\n    height: auto;\r\n    margin-bottom: 20px;\r\n    padding: 20px 0 20px 50px;\r\n}\r\n.main .card table {\r\n    border: none;\r\n    font-size: 16px;\r\n    height: 270px;\r\n}\r\n.edit {\r\n    position: absolute;\r\n    color: #e7e7e8;\r\n    right: 14%;\r\n}\r\n.chip {\r\n    display: inline-block;\r\n    padding: 2px 55px;\r\n    font-size: 16px;\r\n    border-radius: 25px;\r\n    background-color: #f1f1f1;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1pbmZvL3VzZXItaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVk7QUFDWjtJQUNJLFdBQVc7SUFDWCxnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQ0FBZ0M7QUFDcEM7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjtBQUVBOztJQUVJLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDtBQUVBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekI7QUFFQTs7SUFFSSx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkO0FBRUEsUUFBUTtBQUVSLFNBQVM7QUFDVDtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFVBQVU7QUFDZDtBQUVBO0lBQ0ksV0FBVztJQUNYLDREQUE0RDtJQUM1RCxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixhQUFhO0FBQ2pCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFVBQVU7QUFDZDtBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL3VzZXItaW5mby91c2VyLWluZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFNpZGVuYXYgKi9cclxuLnNpZGVuYXYge1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjVweDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG4ucHJvZmlsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wcm9maWxlIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAxcHggZ3JleTtcclxufVxyXG5cclxuLm5hbWUge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuLmpvYiB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG4udXJsLFxyXG5ociB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi51cmwgaHIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgIHdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbi51cmwgYSB7XHJcbiAgICBjb2xvcjogIzgxODE4MTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICBwYWRkaW5nOiA2cHggOHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4udXJsIGE6aG92ZXIsXHJcbi51cmwgLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThmNWZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjhweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE0JTtcclxuICAgIHdpZHRoOiA2NSU7XHJcbn1cclxuXHJcbi8qIEVuZCAqL1xyXG5cclxuLyogTWFpbiAqL1xyXG4ubWFpbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMi41JTtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIHdpZHRoOiA3NSU7XHJcbn1cclxuXHJcbi5tYWluIGgyIHtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLm1haW4gLmNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDhweCAwIGdyZXk7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMjBweCAwIDIwcHggNTBweDtcclxufVxyXG5cclxuLm1haW4gLmNhcmQgdGFibGUge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiAyNzBweDtcclxufVxyXG5cclxuLmVkaXQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29sb3I6ICNlN2U3ZTg7XHJcbiAgICByaWdodDogMTQlO1xyXG59XHJcblxyXG4uY2hpcCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAycHggNTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/user-info/user-info.component.html":
/*!****************************************************!*\
  !*** ./src/app/user-info/user-info.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"card\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-md-4\">\n          <div class=\"sidenav\">\n            <div class=\"profile\">\n                <img src=\"{{arrayData['avatar_url']}}\" alt=\"\" width=\"100\" height=\"100\">\n          \n                <div class=\"name\">\n                    {{arrayData['name']}}\n                </div>\n                <div class=\"job\">\n                    {{arrayData['company']}}\n                </div>\n            </div>\n          \n            <div class=\"sidenav-url\">\n                <div class=\"url\">\n                    <a href=\"{{arrayData['html_url']}}\" class=\"active\">Profile</a>\n                </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xs-12 col-md-8\">\n          <div class=\"card-body\">\n            <i class=\"fa fa-pen fa-xs edit\"></i>\n            <table>\n                <tbody>\n                    <tr>\n                        <td>Name</td>\n                        <td>:</td>\n                        <td>{{arrayData['name']}}</td>\n                    </tr>\n                    <tr>\n                        <td>Email</td>\n                        <td>:</td>\n                        <td>{{arrayData['email']}}</td>\n                    </tr>\n                    <tr>\n                        <td>Location</td>\n                        <td>:</td>\n                        <td>{{arrayData['location']}}</td>\n                    </tr>\n                    <tr>\n                        <td>Bio</td>\n                        <td>:</td>\n                        <td>{{arrayData['bio']}}</td>\n                    </tr>\n                    <tr>\n                      <td>\n                        <div class=\"chip\">\n                          <td>Followers</td>\n                          <td>:</td>\n                          <td>{{arrayData['followers']}}</td>\n                        </div>\n                      </td>\n                      <td>\n                        <div class=\"chip\">\n                          <td>Following</td>\n                          <td>:</td>\n                          <td>{{arrayData['following']}}</td>\n                        </div>\n                      </td>\n                  </tr>\n                </tbody>\n            </table>\n        </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user-info/user-info.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-info/user-info.component.ts ***!
  \**************************************************/
/*! exports provided: UserInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function() { return UserInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserInfoComponent = /** @class */ (function () {
    function UserInfoComponent() {
    }
    UserInfoComponent.prototype.ngOnInit = function () {
    };
    UserInfoComponent.prototype.ngOnChanges = function (changes) {
        if (changes['passData']) {
            this.arrayData = this.passData;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserInfoComponent.prototype, "passData", void 0);
    UserInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-info',
            template: __webpack_require__(/*! ./user-info.component.html */ "./src/app/user-info/user-info.component.html"),
            styles: [__webpack_require__(/*! ./user-info.component.css */ "./src/app/user-info/user-info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserInfoComponent);
    return UserInfoComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-padding {\n\tpadding: 0px 0px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxnQkFBZ0I7QUFDakIiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1wYWRkaW5nIHtcblx0cGFkZGluZzogMHB4IDBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" routerLink=\"/\">\n    <img src=\"https://www.teenvio.com/es/wp-content/plugins/g1-social-icons/images/github/github-256.png\" width=\"50\" height=\"50\" alt=\"logo\">\n    {{ title }}\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto nav\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/user\">Search User <span class=\"sr-only\">(current)</span></a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<nav aria-label=\"breadcrumb\">\n  <ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\"><a routerLink=\"\">Dashboard</a></li>\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">Search User</li>\n  </ol>\n</nav>\n\n<div class=\"container\">\n    <div class=\"input-group mb-3 col-xs-12 col-md-12 input-padding\">\n      <input (keyup)=\"onKey($event)\" type=\"text\" class=\"form-control\" placeholder=\"Type Username\" aria-label=\"Type username\" aria-describedby=\"button-addon2\">\n           <div class=\"input-group-append\">\n        <button class=\"btn btn-success\" type=\"button\" id=\"button-addon2\"(click)=\"search($event.value)\" [disabled]=\"noInput\">Search</button>\n      </div>\n    <div class=\"spinner-border text-primary\" role=\"status\" style=\"margin-left: 10px\" *ngIf=\"isLoading\">\n        <span class=\"sr-only\">Loading...</span>\n      </div>\n    </div>\n    <h5 *ngIf=\"getFetchSuccess\">Search Results For {{values}}</h5>\n</div>\n\n<div class=\"container\" *ngIf=\"NoUser && getFetchSuccess\">\n  <div class=\"card text-center\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Error</h5>\n      <p class=\"card-text\">No Repos found</p>\n    </div>\n  </div>\n  </div>\n\n<app-user-info *ngIf=\"!NoUser\" [passData]=\"userArrays\"></app-user-info>\n\n<app-repository *ngIf=\"!NoUser\" [passData]=\"repoArrays\" [repoCount]=\"userArrays['public_repos']\" (pagenum)='changePageNum($event)'></app-repository>"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _github_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../github-service.service */ "./src/app/github-service.service.ts");



var UserComponent = /** @class */ (function () {
    function UserComponent(_githubServiceService) {
        this._githubServiceService = _githubServiceService;
        this.title = 'Github Search';
        this.values = '';
        this.isLoading = false;
        this.noInput = true;
        this.getFetchSuccess = false;
        this.NoUser = true;
        this.pageNum = 1;
        this.userName = '';
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent.prototype.changePageNum = function (value) {
        this.pageNum = value;
        console.log("pagenum in parent component is ", this.pageNum);
        this.fetchUser(this.userName);
    };
    UserComponent.prototype.onKey = function (event) {
        this.values = event.target.value;
        this.getFetchSuccess = false;
        this.NoUser = true;
        if (this.values == '') {
            this.noInput = true;
        }
        else {
            this.noInput = false;
        }
    };
    UserComponent.prototype.search = function (userName) {
        this.getFetchSuccess = false;
        this.NoUser = true;
        this.pageNum = 1;
        this.userName = this.values.trim();
        if (!this.userName) {
            return;
        }
        // this._githubServiceService.getRepos(this.userName, this.pageNum)
        // this._githubServiceService.getUser(this.userName)
        this.isLoading = true;
        this.fetchUser(this.userName);
        this.fetchUserInfo(this.userName);
    };
    UserComponent.prototype.fetchUser = function (UserName) {
        var _this = this;
        this._githubServiceService.getRepos(UserName, this.pageNum).subscribe(function (data) {
            _this.repoArrays = data;
            console.log("repoArray is ", _this.repoArrays);
            if (_this.repoArrays == undefined || _this.repoArrays && _this.repoArrays.length == 0) {
                console.log("Could not find reporray");
                _this.NoUser = true;
            }
            else {
                _this.NoUser = false;
            }
            ;
        });
        setTimeout(function () {
            this.isLoading = false;
            this.getFetchSuccess = true;
        }.bind(this), 1000);
    };
    UserComponent.prototype.fetchUserInfo = function (UserName) {
        var _this = this;
        this._githubServiceService.getUser(UserName).subscribe(function (data) {
            _this.userArrays = data;
            console.log("userArray is ", _this.userArrays);
            if (_this.userArrays == undefined || _this.userArrays && _this.userArrays.length == 0) {
                console.log("Could not find userInfo");
                _this.NoUser = true;
            }
            else {
                _this.NoUser = false;
            }
        });
        setTimeout(function () {
            this.isLoading = false;
            this.getFetchSuccess = true;
        }.bind(this), 1000);
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_github_service_service__WEBPACK_IMPORTED_MODULE_2__["GithubServiceService"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\vaibh\OneDrive - iitkgp.ac.in\Documents\Study\Postplacement\Learning\Fyle_Assignment\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map