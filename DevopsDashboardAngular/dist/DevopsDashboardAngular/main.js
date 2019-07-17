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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<app-body></app-body>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/app/data.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
    }
    AppComponent.prototype.updateSelectedEnv = function () {
        // Update selected tags in data
        var cdDataList = _data__WEBPACK_IMPORTED_MODULE_1__["Data"].getOneCdAppEnvData(_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedApp() + '_' + _data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedEnv());
        cdDataList = cdDataList.slice(0, 5);
        var recentTags = cdDataList.map(function (dataElement) {
            return dataElement.tagDeployed;
        });
        _data__WEBPACK_IMPORTED_MODULE_1__["Data"].setSelectedRecentTags(recentTags);
        _data__WEBPACK_IMPORTED_MODULE_1__["Data"].setSelectedTag(0);
    };
    AppComponent.prototype.setProjectListAndSelectedProject = function () {
        var _this = this;
        this.http.get(_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getBackendBaseUrl() + "/api/getAppProjectList?selectedAppName=" + _data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedApp()).subscribe(function (getAppResp) {
            var projectList = [];
            var projectListObjArray = [];
            projectListObjArray = getAppResp;
            projectListObjArray.forEach(function (element) {
                projectList.push(element.name);
            });
            _data__WEBPACK_IMPORTED_MODULE_1__["Data"].setProjectList(projectList);
            _data__WEBPACK_IMPORTED_MODULE_1__["Data"].setSelectedProject(_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getProjectList()[0]);
            _this.setSprintListAndSelectedSprint();
            // Debug Log
            console.log("14: getProjectList");
            console.log(_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getProjectList());
            console.log("15: getSelectedProject");
            console.log(_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedProject());
        });
    };
    AppComponent.prototype.setSprintListAndSelectedSprint = function () {
        var _this = this;
        this.http.get(_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getBackendBaseUrl() + "/api/getProjectSprintList?appName=" + _data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedApp() + "&&project=" + _data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedProject()).subscribe(function (getProjectResp) {
            var sprintList = [];
            var sprintListObjArray = [];
            var sprintDatesData = {};
            sprintListObjArray = getProjectResp;
            sprintListObjArray.forEach(function (element) {
                sprintList.push(element.name);
                sprintDatesData[element.name] = element;
            });
            _data__WEBPACK_IMPORTED_MODULE_1__["Data"].setSprintList(sprintList);
            _data__WEBPACK_IMPORTED_MODULE_1__["Data"].setSelectedSprint(_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSprintList()[0]);
            _data__WEBPACK_IMPORTED_MODULE_1__["Data"].setSprintDatesData(sprintDatesData);
            _data__WEBPACK_IMPORTED_MODULE_1__["Data"].setSprintStartDate(_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSprintDatesData()[_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedSprint()]["startdate"]);
            _data__WEBPACK_IMPORTED_MODULE_1__["Data"].setSprintEndDate(_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSprintDatesData()[_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedSprint()]["enddate"]);
            _this.setWorkItemDetailsForSprint();
            // Debug Log
            console.log("16: getSprintList");
            console.log(_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSprintList());
            console.log("17: getSelectedSprint");
            console.log(_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedSprint());
            console.log("18: getSprintDatesData");
            console.log(_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSprintDatesData());
            console.log("19: getSprintStartDate");
            console.log(_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSprintStartDate());
            console.log("20: getSprintEndDate");
            console.log(_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSprintEndDate());
        });
    };
    AppComponent.prototype.setWorkItemDetailsForSprint = function () {
        this.http.get(_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getBackendBaseUrl() + "/api/getSprintWorkItemList?appName=" + _data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedApp() + "&&sprintId=" + _data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSprintDatesData()[_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedSprint()]["id"]).subscribe(function (getSprintResp) {
            var sprintWorkItemDataDetails = [];
            var sprintWorkItemDetails = [];
            sprintWorkItemDetails = getSprintResp;
            sprintWorkItemDetails.forEach(function (sprdata) {
                sprintWorkItemDataDetails.push(sprdata);
            });
            _data__WEBPACK_IMPORTED_MODULE_1__["Data"].setSprintWorkItemDetails(sprintWorkItemDataDetails[0]);
            // Debug Log
            console.log("21: getSprintWorkItemDetails");
            console.log(_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSprintWorkItemDetails());
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var appList = [];
        var industryInstanceList = {};
        var industryAppList = {};
        var industryInstanceAppList = {};
        var appData = [];
        var ciData = [];
        var cdData = [];
        var appTagCiData = {};
        var appEnvMapping = {};
        var appEnvCdData = {};
        this.http.get(_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getBackendBaseUrl() + "/api/getApps").subscribe(function (getAppResp) {
            appData = getAppResp;
            appData.forEach(function (appElement) {
                var appElementIndustry = appElement.name.split('--')[0];
                var appElementInstance = appElement.name.split('--')[1];
                var appElementAppName = appElement.name.split('--')[2];
                if (appElement.name && appElement.name != "" &&
                    appElementIndustry && appElementIndustry != "" &&
                    appElementInstance && appElementInstance != "" &&
                    appElementAppName && appElementAppName != "") {
                    appList.push(appElement.name);
                    // Industry Instance Mapping
                    if (!industryInstanceList[appElementIndustry])
                        industryInstanceList[appElementIndustry] = [];
                    if (industryInstanceList[appElementIndustry].indexOf(appElementInstance) == -1)
                        industryInstanceList[appElementIndustry].push(appElementInstance);
                    // Industry App List Mapping
                    if (!industryAppList[appElementIndustry])
                        industryAppList[appElementIndustry] = [];
                    if (industryAppList[appElementIndustry].indexOf(appElement.name) == -1)
                        industryAppList[appElementIndustry].push(appElement.name);
                    // Industry Instance App List Mapping
                    if (!industryInstanceAppList[appElementIndustry + "_" + appElementInstance])
                        industryInstanceAppList[appElementIndustry + "_" + appElementInstance] = [];
                    if (industryInstanceAppList[appElementIndustry + "_" + appElementInstance].indexOf(appElement.name) == -1)
                        industryInstanceAppList[appElementIndustry + "_" + appElementInstance].push(appElement.name);
                }
            });
            _this.http.get(_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getBackendBaseUrl() + "/api/CiData").subscribe(function (ciResp) {
                ciData = ciResp;
                _this.http.get(_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getBackendBaseUrl() + "/api/cDdata").subscribe(function (cDResp) {
                    cdData = cDResp;
                    // Process CI Data
                    ciData.forEach(function (ciElement) {
                        appTagCiData[ciElement.appName.replace(/_/g, "") + '_' + ciElement.GitTag] = ciElement;
                    });
                    // Process CD Data
                    cdData.forEach(function (cdDataElement) {
                        var cdDataElementIndustry = cdDataElement.appName.split('--')[0];
                        var cdDataElementInstance = cdDataElement.appName.split('--')[1];
                        var cdDataElementAppName = cdDataElement.appName.split('--')[2];
                        if (cdDataElement.appName != "" && cdDataElementAppName != "") {
                            // Set App and Env Mapping
                            if (!appEnvMapping[cdDataElement.appName.replace(/_/g, "")])
                                appEnvMapping[cdDataElement.appName.replace(/_/g, "")] = [];
                            if (appEnvMapping[cdDataElement.appName.replace(/_/g, "")].indexOf(cdDataElement.environmentName) == -1)
                                appEnvMapping[cdDataElement.appName.replace(/_/g, "")].push(cdDataElement.environmentName);
                            // Set App Env Mapping CD Data
                            if (!appEnvCdData[cdDataElement.appName.replace(/_/g, "") + '_' + cdDataElement.environmentName])
                                appEnvCdData[cdDataElement.appName.replace(/_/g, "") + '_' + cdDataElement.environmentName] = [];
                            appEnvCdData[cdDataElement.appName.replace(/_/g, "") + '_' + cdDataElement.environmentName].push(cdDataElement);
                        }
                    });
                    // Sort Deployments by Timestamp Desc Order in App Env Mapped CD Data
                    Object.keys(appEnvCdData).forEach(function (key) {
                        appEnvCdData[key].sort(function (val1, val2) {
                            return new Date(val2.DeployedTime) - new Date(val1.DeployedTime);
                        });
                    });
                    // Set all the values to Data Class
                    _data__WEBPACK_IMPORTED_MODULE_1__["Data"].setAppList(appList);
                    _data__WEBPACK_IMPORTED_MODULE_1__["Data"].setIndustryInstanceList(industryInstanceList);
                    _data__WEBPACK_IMPORTED_MODULE_1__["Data"].setIndustryAppList(industryAppList);
                    _data__WEBPACK_IMPORTED_MODULE_1__["Data"].setIndustryInstanceAppList(industryInstanceAppList);
                    _data__WEBPACK_IMPORTED_MODULE_1__["Data"].setAppEnvMapping(appEnvMapping);
                    _data__WEBPACK_IMPORTED_MODULE_1__["Data"].setCdAppEnvData(appEnvCdData);
                    _data__WEBPACK_IMPORTED_MODULE_1__["Data"].setCiGitData(appTagCiData);
                    _data__WEBPACK_IMPORTED_MODULE_1__["Data"].setSelectedIndustry(appList[0].split('--')[0]);
                    _data__WEBPACK_IMPORTED_MODULE_1__["Data"].setSelectedInstance(appList[0].split('--')[1]);
                    _data__WEBPACK_IMPORTED_MODULE_1__["Data"].setSelectedInstanceList(_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getOneIndustryInstanceList(_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedIndustry()));
                    _data__WEBPACK_IMPORTED_MODULE_1__["Data"].setSelectedAppsList(_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getOneIndustryInstanceAppList(_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedIndustry() + '_' + _data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedInstance()));
                    _data__WEBPACK_IMPORTED_MODULE_1__["Data"].setSelectedApp(appList[0]);
                    _data__WEBPACK_IMPORTED_MODULE_1__["Data"].setSelectedEnv(appEnvMapping[appList[0]][0]);
                    _this.updateSelectedEnv();
                    _this.setProjectListAndSelectedProject();
                    // Debug Log
                    console.log("1: getAppList");
                    console.log(_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getAppList());
                    console.log("2: getIndustryInstanceList");
                    console.log(_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getIndustryInstanceList());
                    console.log("3: getIndustryAppList");
                    console.log(_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getIndustryAppList());
                    console.log("4: getIndustryInstanceAppList");
                    console.log(_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getIndustryInstanceAppList());
                    console.log("5: getAppEnvMapping");
                    console.log(_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getAppEnvMapping());
                    console.log("6: getCdAppEnvData");
                    console.log(_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getCdAppEnvData());
                    console.log("7: getCiAppTagData");
                    console.log(_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getCiAppTagData());
                    console.log("8: getSelectedIndustry");
                    console.log(_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedIndustry());
                    console.log("9: getSelectedInstance");
                    console.log(_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedInstance());
                    console.log("10: getSelectedInstanceList");
                    console.log(_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedInstanceList());
                    console.log("11: getSelectedAppsList");
                    console.log(_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedAppsList());
                    console.log("12: getSelectedApp");
                    console.log(_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedApp());
                    console.log("13: getSelectedEnv");
                    console.log(_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedEnv());
                });
            });
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _body_body_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./body/body.component */ "./src/app/body/body.component.ts");
/* harmony import */ var _body_applist_applist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./body/applist/applist.component */ "./src/app/body/applist/applist.component.ts");
/* harmony import */ var _body_appdetail_appdetail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./body/appdetail/appdetail.component */ "./src/app/body/appdetail/appdetail.component.ts");
/* harmony import */ var _body_appdetail_sprintdata_sprintdata_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./body/appdetail/sprintdata/sprintdata.component */ "./src/app/body/appdetail/sprintdata/sprintdata.component.ts");
/* harmony import */ var _body_appdetail_continuousdeployment_continuousdeployment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./body/appdetail/continuousdeployment/continuousdeployment.component */ "./src/app/body/appdetail/continuousdeployment/continuousdeployment.component.ts");
/* harmony import */ var _body_appdetail_environment_environment_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./body/appdetail/environment/environment.component */ "./src/app/body/appdetail/environment/environment.component.ts");
/* harmony import */ var _body_appdetail_continuousintegration_continuousintegration_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./body/appdetail/continuousintegration/continuousintegration.component */ "./src/app/body/appdetail/continuousintegration/continuousintegration.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _body_body_component__WEBPACK_IMPORTED_MODULE_6__["BodyComponent"],
                _body_applist_applist_component__WEBPACK_IMPORTED_MODULE_7__["ApplistComponent"],
                _body_appdetail_appdetail_component__WEBPACK_IMPORTED_MODULE_8__["AppdetailComponent"],
                _body_appdetail_sprintdata_sprintdata_component__WEBPACK_IMPORTED_MODULE_9__["SprintDataComponent"],
                _body_appdetail_environment_environment_component__WEBPACK_IMPORTED_MODULE_11__["EnvironmentComponent"],
                _body_appdetail_continuousintegration_continuousintegration_component__WEBPACK_IMPORTED_MODULE_12__["ContinuousintegrationComponent"],
                _body_appdetail_continuousdeployment_continuousdeployment_component__WEBPACK_IMPORTED_MODULE_10__["ContinuousdeploymentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"]
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/body/appdetail/appdetail.component.css":
/*!********************************************************!*\
  !*** ./src/app/body/appdetail/appdetail.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/body/appdetail/appdetail.component.html":
/*!*********************************************************!*\
  !*** ./src/app/body/appdetail/appdetail.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\" style=\"padding-top: 10px;\">\n        <div class=\"col-md-4\" style=\"text-align: left;\">\n            <h4 style=\"color: dimgray\"><strong><i>POD: </i>{{ selectedApp.split('--')[0] }}</strong></h4>\n        </div>\n        <div class=\"col-md-4\" style=\"text-align: center;\">\n            <h4 style=\"color: dimgray\"><strong><i>ORG:</i> {{ selectedApp.split('--')[1] }}</strong></h4>\n        </div>\n        <div class=\"col-md-4\" style=\"text-align: right;\">\n            <h4 style=\"color: dimgray\"><strong><i>VSTS APP: </i>{{ selectedApp.split('--')[2] }}</strong></h4>\n        </div>\n    </div>\n</div>\n <app-sprintdata></app-sprintdata>\n<br/>\n\n<app-environment></app-environment>\n\n<app-continuousintegration></app-continuousintegration>\n<br/>\n<app-continuousdeployment></app-continuousdeployment>"

/***/ }),

/***/ "./src/app/body/appdetail/appdetail.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/body/appdetail/appdetail.component.ts ***!
  \*******************************************************/
/*! exports provided: AppdetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppdetailComponent", function() { return AppdetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data */ "./src/app/data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppdetailComponent = /** @class */ (function () {
    function AppdetailComponent() {
        this.selectedApp = "";
    }
    AppdetailComponent.prototype.ngOnInit = function () {
    };
    AppdetailComponent.prototype.ngDoCheck = function () {
        if (src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedAppsList() && src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedAppsList().length > 0)
            this.selectedApp = src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedAppsList()[0];
    };
    AppdetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-appdetail',
            template: __webpack_require__(/*! ./appdetail.component.html */ "./src/app/body/appdetail/appdetail.component.html"),
            styles: [__webpack_require__(/*! ./appdetail.component.css */ "./src/app/body/appdetail/appdetail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppdetailComponent);
    return AppdetailComponent;
}());



/***/ }),

/***/ "./src/app/body/appdetail/continuousdeployment/continuousdeployment.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/body/appdetail/continuousdeployment/continuousdeployment.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/body/appdetail/continuousdeployment/continuousdeployment.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/body/appdetail/continuousdeployment/continuousdeployment.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-4\"></div>\n  <div class=\"col-md-4\">\n  \n    <h4 style=\"color: white;\n    background-color:steelblue;\n    border-radius: 5px;\n    padding-top: 3px;\n    padding-bottom: 3px;\">\n      <strong>Continuous Deployment</strong></h4>\n  </div>\n</div>\n\n<table class=\"table table-bordered\">\n\n  <thead>\n    <tr style=\"background-color: steelblue; color: white;\">\n      <th style=\"text-align: center\">S.No.</th>\n      <th style=\"text-align: center\">Tag Deployed</th>\n      <th style=\"text-align: center\">Approved By</th>\n      <th style=\"text-align: center\">Deployed Time</th>\n      <th style=\"text-align: center\">Deployment Status</th>\n    </tr>\n  </thead>\n\n  <tbody>\n    <tr\n    *ngFor=\"let cddata of cdDataList\">\n      <td>{{ cdDataList.indexOf(cddata) + 1 }}</td>\n      <td>{{ cddata.tagDeployed }}</td>\n      <td>{{ cddata.ApprovedBy }}</td>\n      <td>{{ cddata.DeployedTime.split('T')[0] }} {{ cddata.DeployedTime.split('T')[1].split(':')[0] }}:{{ cddata.DeployedTime.split('T')[1].split(':')[1] }}</td>\n      <td style=\"color: white;\"\n      [ngStyle]=\"{\n        'background-color': cddata.DeployementStatus === 'Deployed Successfully' ? 'green' : 'red'}\">\n        {{ getDeploymentStatus(cddata.DeployementStatus) }}</td>\n    </tr>\n  </tbody>\n\n</table>"

/***/ }),

/***/ "./src/app/body/appdetail/continuousdeployment/continuousdeployment.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/body/appdetail/continuousdeployment/continuousdeployment.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ContinuousdeploymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContinuousdeploymentComponent", function() { return ContinuousdeploymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data */ "./src/app/data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContinuousdeploymentComponent = /** @class */ (function () {
    function ContinuousdeploymentComponent() {
        this.cdDataList = [];
    }
    ContinuousdeploymentComponent.prototype.ngOnInit = function () {
    };
    ContinuousdeploymentComponent.prototype.ngDoCheck = function () {
        this.cdDataList = src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getOneCdAppEnvData(src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedApp() + '_' + src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedEnv());
        if (this.cdDataList && this.cdDataList.length > 0)
            this.cdDataList = this.cdDataList.slice(0, 5);
    };
    ContinuousdeploymentComponent.prototype.getDeploymentStatus = function (deploymentStatus) {
        if (deploymentStatus == "Deployed Successfully")
            return "Success";
        else
            return "Failed";
    };
    ContinuousdeploymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-continuousdeployment',
            template: __webpack_require__(/*! ./continuousdeployment.component.html */ "./src/app/body/appdetail/continuousdeployment/continuousdeployment.component.html"),
            styles: [__webpack_require__(/*! ./continuousdeployment.component.css */ "./src/app/body/appdetail/continuousdeployment/continuousdeployment.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContinuousdeploymentComponent);
    return ContinuousdeploymentComponent;
}());



/***/ }),

/***/ "./src/app/body/appdetail/continuousintegration/continuousintegration.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/body/appdetail/continuousintegration/continuousintegration.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/body/appdetail/continuousintegration/continuousintegration.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/body/appdetail/continuousintegration/continuousintegration.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-4\"></div>\n  <div class=\"col-md-4\">\n    <h4 style=\"color: white;\n    background-color:steelblue;\n    border-radius: 5px;\n    padding-top: 3px;\n    padding-bottom: 3px;\">\n      <strong>Continuous Integration</strong></h4>\n  </div>\n</div>\n\n<div class=\"container\" style=\"width: 100%; border: 1px solid #ddd\">\n  <div class=\"row\" style=\"padding-top: 10px;\">\n    <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\" style=\"text-align: left;\">\n      <p style=\"display: inline-block\"><strong>Git Tag:</strong></p>\n      <div class=\"dropdown\" style=\"display: inline-block; padding-left: 10px;\">\n        <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\"\n        style=\"border-radius: 10px; padding-top: 2px; padding-bottom: 2px;\">{{ ciAppTagData.GitTag }}\n          <span class=\"caret\"></span></button>\n        <ul class=\"dropdown-menu\">\n          <li *ngFor=\"let tag of selectedRecentTags;  let i = index;\" (click)=\"selectTag(tag)\"><a href=\"#\">{{ tag }}</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n\n    <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n      <p style=\"text-align: right;\">\n        <strong>Date & Time:</strong>\n        {{ ciAppTagData.timeStamp.split(':')[0] }}\n        {{ ciAppTagData.timeStamp.split(':')[1] }}:{{ ciAppTagData.timeStamp.split(':')[2] }}</p>\n    </div>\n  </div>\n\n  <div class=\"row\" style=\"width:100%; padding-bottom: 10px;\">\n\n    <!-- Unit Tests -->\n    <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\n      <div style=\"background-color: lightsteelblue; border-radius: 20px;\">\n        <h5 style=\"padding-top: 10px;\"><strong>Unit Test</strong></h5>\n\n        <div class=\"row\">\n          <br />\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-lg-7 col-md-7 col-sm-7 col-xs-7\">\n            <p style=\"text-align: left; padding-left: 20px;\">Tests Ran</p>\n          </div>\n          <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n            <p>:</p>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n            <p style=\"text-align: left; color: chocolate\"><strong>{{ ciAppTagData.testsRan }}</strong></p>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-lg-7 col-md-7 col-sm-7 col-xs-7\">\n            <p style=\"text-align: left; padding-left: 20px;\">Failed</p>\n          </div>\n          <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n            <p>:</p>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n            <p style=\"text-align: left; color: red\"><strong>{{ ciAppTagData.failing }}</strong></p>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-lg-7 col-md-7 col-sm-7 col-xs-7\">\n            <p style=\"text-align: left; padding-left: 20px;\">Pass Percentage</p>\n          </div>\n          <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n            <p>:</p>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n            <p style=\"text-align: left; color: green\"><strong>{{ ciAppTagData.passRate }}</strong></p>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n            <p style=\"margin-left: 25%;\n                  margin-right: 25%;\n                  padding-top: 5px;\n                  padding-bottom: 5px;\n                  border: 1px solid;\n                  border-radius: 10px;\n                  color: white;\" [ngStyle]='{\"background-color\": unitTestsOutcome == \"Passed\" ? \"green\":\"red\"}'>\n              {{ unitTestsOutcome }}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Selenium -->\n    <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\n      <div style=\"background-color: lightsteelblue; border-radius: 20px;\">\n        <h5 style=\"padding-top: 10px;\"><strong>Selenium</strong></h5>\n\n        <div class=\"row\">\n          <br />\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-lg-7 col-md-7 col-sm-7 col-xs-7\">\n            <p style=\"text-align: left; padding-left: 20px;\">Passed</p>\n          </div>\n          <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n            <p>:</p>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n            <p style=\"text-align: left; color: green\"><strong>{{ ciAppTagData.SeleniumTestsPassed }}</strong></p>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-lg-7 col-md-7 col-sm-7 col-xs-7\">\n            <p style=\"text-align: left; padding-left: 20px;\">Failed</p>\n          </div>\n          <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n            <p>:</p>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n            <p style=\"text-align: left; color: red\"><strong>{{ ciAppTagData.SeleniumTestsFailed }}</strong></p>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-lg-7 col-md-7 col-sm-7 col-xs-7\">\n            <p style=\"text-align: left; padding-left: 20px;\">Skipped</p>\n          </div>\n          <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n            <p>:</p>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n            <p style=\"text-align: left; color: chocolate\"><strong>{{ ciAppTagData.SeleniumTestsSkipped }}</strong></p>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n            <p style=\"margin-left: 25%;\n                margin-right: 25%;\n                padding-top: 5px;\n                padding-bottom: 5px;\n                border: 1px solid;\n                border-radius: 10px;\n                color: white;\"\n              [ngStyle]='{\"background-color\": ciAppTagData.SeleniumTestsFailed == \"0\" ? \"green\":\"red\"}'>\n              {{ seleniumOutcome }}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Sonar -->\n    <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\n      <div style=\"background-color: lightsteelblue; border-radius: 20px;\">\n        <h5 style=\"padding-top: 10px;\"><strong>Sonar</strong></h5>\n\n        <div class=\"row\">\n          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n            <p style=\"margin-bottom: 0px;\">\n              <a href=\"{{ciAppTagData.SonarQubeURL}}\" target=\"_blank\" style=\"color: darkblue;\"><u>Sonar Qube\n                  Link</u></a></p>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-lg-7 col-md-7 col-sm-7 col-xs-7\">\n            <p style=\"text-align: left; padding-left: 20px;\">Blocker</p>\n          </div>\n          <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n            <p>:</p>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n            <p style=\"text-align: left; color: red\"><strong>{{ ciAppTagData.blocker }}</strong></p>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-lg-7 col-md-7 col-sm-7 col-xs-7\">\n            <p style=\"text-align: left; padding-left: 20px;\">Critical</p>\n          </div>\n          <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n            <p>:</p>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n            <p style=\"text-align: left; color: chocolate\"><strong>{{ ciAppTagData.critical }}</strong></p>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-lg-7 col-md-7 col-sm-7 col-xs-7\">\n            <p style=\"text-align: left; padding-left: 20px;\">Major</p>\n          </div>\n          <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n            <p>:</p>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n            <p style=\"text-align: left; color: green\"><strong>{{ ciAppTagData.major }}</strong></p>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n            <p style=\"margin-left: 25%;\n              margin-right: 25%;\n              padding-top: 5px;\n              padding-bottom: 5px;\n              border: 1px solid;\n              border-radius: 10px;\n              color: white;\"\n              [ngStyle]='{\"background-color\": ciAppTagData.blocker == \"0\" && ciAppTagData.critical == \"0\" ? \"green\":\"red\"}'>\n              {{ sonarOutcome }}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/body/appdetail/continuousintegration/continuousintegration.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/body/appdetail/continuousintegration/continuousintegration.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ContinuousintegrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContinuousintegrationComponent", function() { return ContinuousintegrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data */ "./src/app/data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContinuousintegrationComponent = /** @class */ (function () {
    function ContinuousintegrationComponent() {
        this.ciAppTagData = {
            "SeleniumTestsFailed": "0",
            "blocker": "0",
            "critical": "0",
            "passRate": "100%",
            "timeStamp": "2019-04-19:15:32:31"
        };
        this.selectedRecentTags = [];
        this.unitTestsOutcome = "";
        this.seleniumOutcome = "";
        this.sonarOutcome = "";
        this.dropdownState = false;
    }
    ContinuousintegrationComponent.prototype.ngOnInit = function () {
    };
    ContinuousintegrationComponent.prototype.ngDoCheck = function () {
        if (src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getOneCiAppTagData(src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedApp() + '_' + src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedRecentTags()[src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedTag()]))
            this.ciAppTagData = src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getOneCiAppTagData(src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedApp() + '_' + src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedRecentTags()[src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedTag()]);
        this.selectedRecentTags = src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedRecentTags();
        // unitTestsOutcome
        if (this.ciAppTagData && this.ciAppTagData.passRate && parseFloat(this.ciAppTagData.passRate.split("%")[0]) >= 85.0)
            this.unitTestsOutcome = "Passed";
        else
            this.unitTestsOutcome = "Failed";
        // seleniumOutcome
        if (this.ciAppTagData && this.ciAppTagData.SeleniumTestsFailed == "0")
            this.seleniumOutcome = "Passed";
        else
            this.seleniumOutcome = "Failed";
        // sonarOutcome
        if (this.ciAppTagData && this.ciAppTagData.blocker == "0" && this.ciAppTagData.critical == "0")
            this.sonarOutcome = "Passed";
        else
            this.sonarOutcome = "Failed";
    };
    ContinuousintegrationComponent.prototype.toggleDropdown = function (state) {
        this.dropdownState = state;
    };
    ContinuousintegrationComponent.prototype.selectTag = function (tag) {
        src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].setSelectedTag(src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedRecentTags().indexOf(tag));
        this.dropdownState = false;
    };
    ContinuousintegrationComponent.prototype.selectTagMouseOverIndex = function (index) {
        this.selectTagMouseIndex = index;
    };
    ContinuousintegrationComponent.prototype.mouseLeave = function () {
        this.selectTagMouseIndex = -1;
    };
    ContinuousintegrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-continuousintegration',
            template: __webpack_require__(/*! ./continuousintegration.component.html */ "./src/app/body/appdetail/continuousintegration/continuousintegration.component.html"),
            styles: [__webpack_require__(/*! ./continuousintegration.component.css */ "./src/app/body/appdetail/continuousintegration/continuousintegration.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContinuousintegrationComponent);
    return ContinuousintegrationComponent;
}());



/***/ }),

/***/ "./src/app/body/appdetail/environment/environment.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/body/appdetail/environment/environment.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/body/appdetail/environment/environment.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/body/appdetail/environment/environment.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"text-align: center; width: 100%\">\n\n  <div class=\"row\" style=\"width: 100%\">\n\n    <div [ngClass]=\"getColClass()\"\n    *ngFor=\"let env of envList\"\n    (click)=\"selectEnv(env)\">\n      <h6 \n      style=\"cursor: pointer; height: 28px; padding-top: 7px; border: 1px solid; border-radius: 10px;\"\n      [ngStyle]=\"{\n        'background-color': env === selectedEnv ? 'steelblue' : 'gainsboro',\n        'color': env === selectedEnv ? 'white' : 'darkslategray'}\">\n        <strong>{{ env }}</strong></h6>\n    </div>\n    \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/body/appdetail/environment/environment.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/body/appdetail/environment/environment.component.ts ***!
  \*********************************************************************/
/*! exports provided: EnvironmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvironmentComponent", function() { return EnvironmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data */ "./src/app/data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EnvironmentComponent = /** @class */ (function () {
    function EnvironmentComponent() {
        this.envList = [];
        this.selectedEnv = "";
    }
    EnvironmentComponent.prototype.ngOnInit = function () {
        this.updateSelectedEnv();
    };
    EnvironmentComponent.prototype.ngDoCheck = function () {
        this.envList = src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getAppEnvList(src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedApp());
        this.selectedEnv = src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedEnv();
    };
    EnvironmentComponent.prototype.getColClass = function () {
        switch (this.envList.length) {
            case 1:
                return "col-lg-12 col-md-12 col-sm-12 col-xs-12";
            case 2:
                return "col-lg-6 col-md-6 col-sm-6 col-xs-6";
            case 3:
                return "col-lg-4 col-md-4 col-sm-4 col-xs-4";
            case 4:
                return "col-lg-3 col-md-3 col-sm-3 col-xs-3";
            case 5:
                return "col-lg-2 col-md-2 col-sm-2 col-xs-2";
            case 6:
                return "col-lg-2 col-md-2 col-sm-2 col-xs-2";
            default:
                break;
        }
    };
    EnvironmentComponent.prototype.selectEnv = function (env) {
        src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].setSelectedEnv(env);
        this.updateSelectedEnv();
    };
    EnvironmentComponent.prototype.updateSelectedEnv = function () {
        // Update selected tags in data
        var cdDataList = src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getOneCdAppEnvData(src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedApp() + '_' + src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedEnv());
        if (cdDataList && cdDataList.length > 0) {
            cdDataList = cdDataList.slice(0, 5);
            var recentTags = cdDataList.map(function (dataElement) {
                return dataElement.tagDeployed;
            });
            src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].setSelectedRecentTags(recentTags);
            src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].setSelectedTag(0);
        }
    };
    EnvironmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-environment',
            template: __webpack_require__(/*! ./environment.component.html */ "./src/app/body/appdetail/environment/environment.component.html"),
            styles: [__webpack_require__(/*! ./environment.component.css */ "./src/app/body/appdetail/environment/environment.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EnvironmentComponent);
    return EnvironmentComponent;
}());



/***/ }),

/***/ "./src/app/body/appdetail/sprintdata/sprintdata.component.css":
/*!********************************************************************!*\
  !*** ./src/app/body/appdetail/sprintdata/sprintdata.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/body/appdetail/sprintdata/sprintdata.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/body/appdetail/sprintdata/sprintdata.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-4\"></div>\n  <div class=\"col-md-4\">\n    <h4 style=\"color: white;\n    background-color:steelblue;\n    border-radius: 5px;\n    padding-top: 3px;\n    padding-bottom: 3px;\">\n      <strong>Sprint Status & Bug Data</strong></h4>\n  </div>\n</div>\n\n<div class=\"container\" style=\"width: 100%; border: 1px solid #ddd\">\n\n  <div class=\"row\">\n\n    <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6 inline\" style=\"text-align: left; padding-top: 10px;\">\n      <p style=\"display: inline-block\"><strong>Project:</strong></p>\n      <div class=\"dropdown\" style=\"display: inline-block; padding-left: 10px;\">\n        <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\"\n          style=\"border-radius: 10px; padding-top: 2px; padding-bottom: 2px;\">{{ selectedProject }}\n          <span class=\"caret\"></span></button>\n        <ul class=\"dropdown-menu\">\n          <li *ngFor=\"let project of projectList; let i = index;\" (click)=\"selectProject(project)\"><a\n              href=\"#\">{{ project }}</a></li>\n        </ul>\n      </div>\n    </div>\n\n    <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\" style=\"text-align: right; padding-top: 10px;\">\n      <p style=\"display: inline-block\"><strong>Sprint:</strong></p>\n      <div class=\"dropdown\" style=\"display: inline-block; padding-left: 10px;\">\n        <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\"\n          style=\"border-radius: 10px; padding-top: 2px; padding-bottom: 2px;\">{{ selectedSprint }}\n          <span class=\"caret\"></span></button>\n        <ul class=\"dropdown-menu\">\n          <li *ngFor=\"let sprint of sprintList; let i = index;\" (click)=\"selectSprint(sprint)\"><a\n              href=\"#\">{{ sprint }}</a></li>\n        </ul>\n      </div>\n    </div>\n\n  </div>\n\n  <div class=\"row\" style=\"padding-top: 10px;\">\n    <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\" style=\"text-align: left;\">\n      <p><strong>Sprint Start Date: </strong>\n        {{ sprintStartDate.toString().split('T')[0]  }}</p>\n    </div>\n\n    <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\" style=\"text-align: right;\">\n      <p><strong>Sprint End Date: </strong>\n        {{ sprintEndDate.toString().split('T')[0] }}</p>\n    </div>\n  </div>\n\n  <div class=\"row\" style=\"width:100%; padding-bottom: 10px;\">\n\n    <!-- User Story - Status -->\n    <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\n      <div style=\"background-color: lightsteelblue; border-radius: 20px;\">\n        <h5 style=\"padding-top: 10px;\"><strong>User Story - Status</strong></h5>\n\n        <div class=\"row\">\n          <br />\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-lg-7 col-md-7 col-sm-7 col-xs-7\">\n            <p style=\"text-align: left; padding-left: 20px;\">New</p>\n          </div>\n          <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n            <p>:</p>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n            <p style=\"text-align: left; color: chocolate\"><strong>{{storynewstate}}</strong></p>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-lg-7 col-md-7 col-sm-7 col-xs-7\">\n            <p style=\"text-align: left; padding-left: 20px;\">Closed</p>\n          </div>\n          <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n            <p>:</p>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n            <p style=\"text-align: left; color: red\"><strong>{{storyclosedstate}}</strong></p>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-lg-7 col-md-7 col-sm-7 col-xs-7\">\n            <p style=\"text-align: left; padding-left: 20px;\">Active</p>\n          </div>\n          <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n            <p>:</p>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n            <p style=\"text-align: left; color: green\"><strong>{{storyactivestate}}</strong></p>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-lg-7 col-md-7 col-sm-7 col-xs-7\">\n            <p style=\"text-align: left; padding-left: 20px;\">Total</p>\n          </div>\n          <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n            <p>:</p>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n            <p style=\"text-align: left; color: brown\"><strong>{{totalstories}}</strong></p>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n    <!-- User Story - Tag -->\n    <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\n      <div style=\"background-color: lightsteelblue; border-radius: 20px;\">\n        <h5 style=\"padding-top: 10px;\"><strong>User Story - Tag</strong></h5>\n\n        <div class=\"row\">\n          <br />\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-lg-7 col-md-7 col-sm-7 col-xs-7\">\n            <p style=\"text-align: left; padding-left: 20px;\">DEV</p>\n          </div>\n          <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n            <p>:</p>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n            <p style=\"text-align: left; color: chocolate\"><strong>{{ workItemTagObject[\"DEV\"] }}</strong></p>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-lg-7 col-md-7 col-sm-7 col-xs-7\">\n            <p style=\"text-align: left; padding-left: 20px;\">QA</p>\n          </div>\n          <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n            <p>:</p>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n            <p style=\"text-align: left; color: red\"><strong>{{ workItemTagObject[\"QA\"] }}</strong></p>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-lg-7 col-md-7 col-sm-7 col-xs-7\">\n            <p style=\"text-align: left; padding-left: 20px;\">UAT</p>\n          </div>\n          <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n            <p>:</p>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n            <p style=\"text-align: left; color: green\"><strong>{{ workItemTagObject[\"UAT\"] }}</strong></p>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-lg-7 col-md-7 col-sm-7 col-xs-7\">\n            <p style=\"text-align: left; padding-left: 20px;\">PROD</p>\n          </div>\n          <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n            <p>:</p>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n            <p style=\"text-align: left; color: brown\"><strong>{{ workItemTagObject[\"PROD\"] }}</strong></p>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n    <!-- Defects - Status -->\n    <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\n      <div style=\"background-color: lightsteelblue; border-radius: 20px;\">\n        <h5 style=\"padding-top: 10px;\"><strong>Defects - Status</strong></h5>\n\n        <div class=\"row\">\n          <br />\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-lg-7 col-md-7 col-sm-7 col-xs-7\">\n            <p style=\"text-align: left; padding-left: 20px;\">New</p>\n          </div>\n          <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n            <p>:</p>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n            <p style=\"text-align: left; color: chocolate\"><strong>{{ defectnewstate }}</strong></p>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-lg-7 col-md-7 col-sm-7 col-xs-7\">\n            <p style=\"text-align: left; padding-left: 20px;\">Closed</p>\n          </div>\n          <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n            <p>:</p>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n            <p style=\"text-align: left; color: red\"><strong>{{ defectclosedstate }}</strong></p>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-lg-7 col-md-7 col-sm-7 col-xs-7\">\n            <p style=\"text-align: left; padding-left: 20px;\">Active</p>\n          </div>\n          <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n            <p>:</p>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n            <p style=\"text-align: left; color: green\"><strong>{{ defectactivestate }}</strong></p>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-lg-7 col-md-7 col-sm-7 col-xs-7\">\n            <p style=\"text-align: left; padding-left: 20px;\">Total</p>\n          </div>\n          <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n            <p>:</p>\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\n            <p style=\"text-align: left; color: brown\"><strong>{{ totaldefects }}</strong></p>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/body/appdetail/sprintdata/sprintdata.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/body/appdetail/sprintdata/sprintdata.component.ts ***!
  \*******************************************************************/
/*! exports provided: SprintDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SprintDataComponent", function() { return SprintDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/data */ "./src/app/data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SprintDataComponent = /** @class */ (function () {
    function SprintDataComponent(http) {
        this.http = http;
        this.projectList = [];
        this.sprintList = [];
        this.selectedProject = "";
        this.selectedSprint = "";
        this.sprintWorkItemDetails = {};
        this.storynewstate = 0;
        this.storyclosedstate = 0;
        this.storyactivestate = 0;
        this.totalstories = 0;
        this.defectnewstate = 0;
        this.defectclosedstate = 0;
        this.defectactivestate = 0;
        this.totaldefects = 0;
        this.sprintStartDate = new Date();
        this.sprintEndDate = new Date();
        this.workItemTagObject = {
            "DEV": 0,
            "QA": 0,
            "UAT": 0,
            "PROD": 0
        };
    }
    SprintDataComponent.prototype.ngOnInit = function () {
    };
    SprintDataComponent.prototype.groupTags = function () {
        var _this = this;
        this.workItemTagObject = {
            "DEV": 0,
            "QA": 0,
            "UAT": 0,
            "PROD": 0
        };
        if (src_app_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSprintWorkItemDetails() && src_app_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSprintWorkItemDetails()["workItemTags"] &&
            Object.keys(src_app_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSprintWorkItemDetails()["workItemTags"]) &&
            Object.keys(src_app_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSprintWorkItemDetails()["workItemTags"]).length > 0) {
            Object.keys(src_app_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSprintWorkItemDetails()["workItemTags"]).forEach(function (key) {
                _this.workItemTagObject[key] = src_app_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSprintWorkItemDetails()["workItemTags"][key];
            });
        }
    };
    SprintDataComponent.prototype.setRequiredParameters = function () {
        this.projectList = src_app_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getProjectList();
        this.sprintList = src_app_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSprintList();
        this.selectedProject = src_app_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSelectedProject();
        this.selectedSprint = src_app_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSelectedSprint();
        this.sprintStartDate = src_app_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSprintStartDate();
        this.sprintEndDate = src_app_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSprintEndDate();
        this.storynewstate = src_app_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSprintWorkItemDetails()["storynewstate"];
        this.storyclosedstate = src_app_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSprintWorkItemDetails()["storyclosedstate"];
        this.storyactivestate = src_app_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSprintWorkItemDetails()["storyactivestate"];
        this.totalstories = src_app_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSprintWorkItemDetails()["totalstories"];
        this.defectnewstate = src_app_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSprintWorkItemDetails()["defectnewstate"];
        this.defectclosedstate = src_app_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSprintWorkItemDetails()["defectclosedstate"];
        this.defectactivestate = src_app_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSprintWorkItemDetails()["defectactivestate"];
        this.totaldefects = src_app_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSprintWorkItemDetails()["totaldefects"];
    };
    SprintDataComponent.prototype.setSprintListAndSelectedSprint = function () {
        var _this = this;
        // console.log("setSprintListAndSelectedSprint")
        this.http.get(src_app_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getBackendBaseUrl() + "/api/getProjectSprintList?appName=" + src_app_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSelectedApp() + "&&project=" + src_app_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSelectedProject()).subscribe(function (getProjectResp) {
            var sprintList = [];
            var sprintListObjArray = [];
            var sprintDatesData = {};
            sprintListObjArray = getProjectResp;
            sprintListObjArray.forEach(function (element) {
                sprintList.push(element.name);
                sprintDatesData[element.name] = element;
            });
            src_app_data__WEBPACK_IMPORTED_MODULE_2__["Data"].setSprintList(sprintList);
            src_app_data__WEBPACK_IMPORTED_MODULE_2__["Data"].setSelectedSprint(src_app_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSprintList()[0]);
            src_app_data__WEBPACK_IMPORTED_MODULE_2__["Data"].setSprintDatesData(sprintDatesData);
            src_app_data__WEBPACK_IMPORTED_MODULE_2__["Data"].setSprintStartDate(src_app_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSprintDatesData()[src_app_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSelectedSprint()]["startdate"]);
            src_app_data__WEBPACK_IMPORTED_MODULE_2__["Data"].setSprintEndDate(src_app_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSprintDatesData()[src_app_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSelectedSprint()]["enddate"]);
            _this.setWorkItemDetailsForSprint();
        });
    };
    SprintDataComponent.prototype.setWorkItemDetailsForSprint = function () {
        var _this = this;
        // console.log("setWorkItemDetailsForSprint")
        this.http.get(src_app_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getBackendBaseUrl() + "/api/SprintWorkItemList?appName=" + src_app_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSelectedApp() + "&&sprintId=" + src_app_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSprintDatesData()[src_app_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSelectedSprint()]["id"]).subscribe(function (getSprintResp) {
            var sprintWorkItemDataDetails = [];
            var sprintWorkItemDetails = [];
            sprintWorkItemDetails = getSprintResp;
            sprintWorkItemDetails.forEach(function (sprdata) {
                sprintWorkItemDataDetails.push(sprdata);
            });
            src_app_data__WEBPACK_IMPORTED_MODULE_2__["Data"].setSprintWorkItemDetails(sprintWorkItemDataDetails[0]);
            _this.setRequiredParameters();
        });
    };
    SprintDataComponent.prototype.ngDoCheck = function () {
        this.setRequiredParameters();
        this.groupTags();
    };
    SprintDataComponent.prototype.selectProject = function (project) {
        // console.log("selectProject: ", project);
        src_app_data__WEBPACK_IMPORTED_MODULE_2__["Data"].setSelectedProject(project);
        this.setSprintListAndSelectedSprint();
    };
    SprintDataComponent.prototype.selectSprint = function (sprint) {
        // console.log("selectSprint: ", sprint);
        src_app_data__WEBPACK_IMPORTED_MODULE_2__["Data"].setSelectedSprint(sprint);
        src_app_data__WEBPACK_IMPORTED_MODULE_2__["Data"].setSprintStartDate(src_app_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSprintDatesData()[src_app_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSelectedSprint()]["startdate"]);
        src_app_data__WEBPACK_IMPORTED_MODULE_2__["Data"].setSprintEndDate(src_app_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSprintDatesData()[src_app_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSelectedSprint()]["enddate"]);
        this.setWorkItemDetailsForSprint();
    };
    SprintDataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sprintdata',
            template: __webpack_require__(/*! ./sprintdata.component.html */ "./src/app/body/appdetail/sprintdata/sprintdata.component.html"),
            styles: [__webpack_require__(/*! ./sprintdata.component.css */ "./src/app/body/appdetail/sprintdata/sprintdata.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SprintDataComponent);
    return SprintDataComponent;
}());



/***/ }),

/***/ "./src/app/body/applist/applist.component.css":
/*!****************************************************!*\
  !*** ./src/app/body/applist/applist.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/body/applist/applist.component.html":
/*!*****************************************************!*\
  !*** ./src/app/body/applist/applist.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"width: 100%; border: 1px solid #ddd; margin-top: 10px\">\n  <h4 style=\"color: dimgray; text-align: center; padding-bottom: 15px;\"><strong><i>VSTS Projects</i></strong></h4>\n\n  <!-- Industries -->\n  <div class=\"row\" style=\"padding-bottom: 5px; padding-left: 5px;\">\n    <p><strong>Pods: </strong>\n      <span (click)=\"toggleIndustryDropdown(!industryDropdownState)\" style=\"cursor: pointer; border: 1px solid #ddd; border-radius: 5px; padding-left: 3px; padding-right: 3px; margin-left: 34px; background-color: steelblue; color: white;\">\n        {{ selectedIndustry }} <span class=\"caret\"></span></span></p>\n    <div class=\"row\" *ngIf=\"industryDropdownState\" style=\"position: absolute; z-index: 1; margin-top: -10px;\"\n      (mouseleave)=\"mouseLeave()\">\n\n      <div class=\"row\"\n        *ngFor=\"let industry of industryList; let i = index;\"\n        style=\"text-align: left;\n          width: 100%;\n          margin-left: 65px;\n          background-color: white;\n          border: 1px solid #ddd;\n          cursor: pointer;\"\n        [ngStyle]=\"{ 'border-top': i == 0 ? '1px solid #ddd':'0px' }\">\n        <p style=\"padding-left: 10px; margin-bottom: 0px;\" [ngStyle]=\"{ 'background-color': selectIndustryMouseoverIndex == i ? 'steelblue':'white',\n        'color': selectIndustryMouseoverIndex == i ? 'white':'black' }\"\n          (click)=\"selectIndustry(industry)\" (mouseover)=\"selectIndustryMouseover(i)\">{{ industry }}</p>\n      </div>\n\n    </div>\n  </div>\n\n  <!-- Instances -->\n  <div class=\"row\" style=\"padding-bottom: 5px; padding-left: 5px;\">\n    <p><strong>Orgs: </strong>\n      <span (click)=\"toggleInstanceDropdown(!instanceDropdownState)\" style=\"cursor: pointer; border: 1px solid #ddd; border-radius: 5px;  margin-left: 34px;padding-left: 3px; padding-right: 3px;\"\n        [ngStyle]=\"{ 'background-color' : selectedIndustry == 'None' ? 'gainsboro' : 'steelblue',\n        'color': selectedIndustry == 'None' ? 'black' : 'white' }\">\n        {{ selectedInstance }} <span class=\"caret\"></span></span></p>\n\n    <div class=\"row\" *ngIf=\"instanceDropdownState\" style=\"position: absolute; z-index: 1; margin-top: -10px;\"\n      (mouseleave)=\"mouseLeave()\">\n\n      <div class=\"row\"\n        *ngFor=\"let instance of instanceList; let i = index;\"\n        style=\"text-align: left;\n              width: 100%;\n              margin-left: 65px;\n              background-color: white;\n              border: 1px solid #ddd;\n              cursor: pointer;\"\n        [ngStyle]=\"{ 'border-top': i == 0 ? '1px solid #ddd':'0px' }\">\n        <p style=\"padding-left: 10px; margin-bottom: 0px;\" [ngStyle]=\"{ 'background-color': selectInstanceMouseoverIndex == i ? 'steelblue':'white',\n        'color': selectInstanceMouseoverIndex == i ? 'white':'black' }\"\n          (click)=\"selectInstance(instance)\" (mouseover)=\"selectInstanceMouseover(i)\">{{ instance }}</p>\n      </div>\n\n    </div>\n  </div>\n\n  <!-- VSTS Project (AppName) -->\n  <div class=\"row\" style=\"padding-bottom: 5px; padding-left: 5px;\">\n    <p><strong>Vsts_App: </strong>\n      <span (click)=\"toggleAppDropdown(!appDropDownState)\" style=\"cursor: pointer; border: 1px solid #ddd; border-radius: 5px; margin-left: 2px;padding-left: 3px; padding-right: 3px;\"\n        [ngStyle]=\"{ 'background-color' : (selectedInstance == 'None' && selectedInstance == 'None') ? 'gainsboro' : 'steelblue',\n      'color': selectedInstance == 'None' ? 'black' : 'white' }\">\n        {{ selectedApp }} <span class=\"caret\"></span></span></p>\n\n    <div class=\"row\" *ngIf=\"appDropDownState\" style=\"position: absolute; z-index: 1; margin-top: -10px;\" (mouseleave)=\"mouseLeave()\">\n\n      <div class=\"row\"\n        *ngFor=\"let app of appList; let i = index;\"\n        style=\"text-align: left;\n            width: 100%;\n            margin-left: 65px;\n            background-color: white;\n            border: 1px solid #ddd;\n            cursor: pointer;\"\n        [ngStyle]=\"{ 'border-top': i == 0 ? '1px solid #ddd':'0px' }\">\n        <p style=\"padding-left: 10px; margin-bottom: 0px;\" [ngStyle]=\"{ 'background-color': selectAppMouseoverIndex == i ? 'steelblue':'white',\n      'color': selectAppMouseoverIndex == i ? 'white':'black' }\"\n          (click)=\"selectApp(app)\" (mouseover)=\"selectAppMouseover(i)\">{{ app.split('--')[2] }}</p>\n      </div>\n\n    </div>\n  </div>\n\n  <!--  Project for Selected App -->\n  <div class=\"row\" style=\"padding-bottom: 5px; padding-left: 5px;\">\n    <p><strong>Project: </strong>\n      <span (click)=\"toggleProjectDropdown(!projDropdownState)\" style=\"cursor: pointer; border: 1px solid #ddd; border-radius: 5px; margin-left: 17px;padding-left: 3px; padding-right: 3px;\"\n        [ngStyle]=\"{ 'background-color' : selectedApp == 'None' ? 'gainsboro' : 'steelblue',\n      'color': selectedApp == 'None' ? 'black' : 'white' }\">\n        {{ selectedProject }} <span class=\"caret\"></span></span></p>\n\n    <div class=\"row\" *ngIf=\"projDropdownState\" style=\"position: absolute; z-index: 1; margin-top: -10px;\" (mouseleave)=\"mouseLeave()\">\n\n      <div class=\"row\"\n        *ngFor=\"let project of projectList; let i = index;\"\n        style=\"text-align: left;\n            width: 100%;\n            margin-left: 65px;\n            background-color: white;\n            border: 1px solid #ddd;\n            cursor: pointer;\"\n        [ngStyle]=\"{ 'border-top': i == 0 ? '1px solid #ddd':'0px' }\">\n        <p style=\"padding-left: 10px; margin-bottom: 0px;\" [ngStyle]=\"{ 'background-color': selectProjectMouseoverIndex == i ? 'steelblue':'white',\n      'color': selectProjectMouseoverIndex == i ? 'white':'black' }\"\n          (click)=\"selectProject(project)\" (mouseover)=\"selectProjectMouseover(i)\">{{project}}</p>\n\n      </div>\n\n    </div>\n  </div>\n\n  <!--Sprint List for Specific Project-->\n  <div class=\"row\" style=\"padding-bottom: 5px; padding-left: 5px;\">\n    <p><strong>Sprint: </strong>\n      <span (click)=\"toggleSprintDropdown(!sprintDropdownState)\" style=\"cursor: pointer; border: 1px solid #ddd; border-radius: 5px;margin-left: 23px; padding-left: 3px; padding-right: 3px;\"\n        [ngStyle]=\"{ 'background-color' : selectedProject == 'None' ? 'gainsboro' : 'steelblue',\n    'color': selectedProject == 'None' ? 'black' : 'white' }\">\n        {{ selectedSprint }} <span class=\"caret\"></span></span></p>\n\n    <div class=\"row\" *ngIf=\"sprintDropdownState\" style=\"position: absolute; z-index: 1; margin-top: -10px;\"\n      (mouseleave)=\"mouseLeave()\">\n\n      <div class=\"row\"\n        *ngFor=\"let sprint of sprintList; let i = index;\"\n        style=\"text-align: left;\n          width: 100%;\n          margin-left: 65px;\n          background-color: white;\n          border: 1px solid #ddd;\n          cursor: pointer;\"\n        [ngStyle]=\"{ 'border-top': i == 0 ? '1px solid #ddd':'0px' }\">\n        <p style=\"padding-left: 10px; margin-bottom: 0px;\" [ngStyle]=\"{ 'background-color': selectSprintMouseoverIndex == i ? 'steelblue':'white',\n    'color': selectSprintMouseoverIndex == i ? 'white':'black' }\"\n          (click)=\"selectSprint(sprint)\" (mouseover)=\"selectSprintMouseover(i)\">{{sprint}}</p>\n      </div>\n\n    </div>\n    <p style=\"padding-top: 5px;\"><strong>Start Date:</strong> {{sprintStartDate | date: 'dd/MM/yyyy'}}<br>\n    <p style=\"padding-top: 5px;\"><strong>End Date:</strong> {{sprintEndDate | date: 'dd/MM/yyyy'}}\n\n\n  </div>\n</div>\n\n<app-environment></app-environment>"

/***/ }),

/***/ "./src/app/body/applist/applist.component.ts":
/*!***************************************************!*\
  !*** ./src/app/body/applist/applist.component.ts ***!
  \***************************************************/
/*! exports provided: ApplistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplistComponent", function() { return ApplistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data */ "./src/app/data.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApplistComponent = /** @class */ (function () {
    function ApplistComponent(http) {
        this.http = http;
        this.appList = [];
        this.industryList = [];
        this.instanceList = [];
        this.selectedApp = "";
        this.selectedIndustry = "";
        this.selectedInstance = "";
        this.selectedProject = "";
        this.selectedSprint = "";
        this.industryDropdownState = false;
        this.instanceDropdownState = false;
        this.appDropDownState = false;
        this.projDropdownState = false;
        this.sprintDropdownState = false;
        this.projectListObjArray = [];
        this.projectList = [];
        this.sprintList = [];
        this.sprintListObjArray = [];
        this.sprintStartDate = new Date();
        this.sprintEndDate = new Date();
        this.sprintId = "";
        this.sprintWorkItemDetails = [];
        this.sprintWorkItemDataDetails = [];
    }
    ApplistComponent.prototype.ngOnInit = function () {
    };
    ApplistComponent.prototype.setRequiredParameters = function () {
        // Dropdown Lists
        this.industryList = src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getIndustryList();
        this.instanceList = src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedInstanceList();
        this.appList = src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedAppsList();
        this.projectList = src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getProjectList();
        this.sprintList = src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSprintList();
        // Selected Parameters
        this.selectedIndustry = src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedIndustry();
        this.selectedInstance = src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedInstance();
        this.selectedApp = src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedApp().split('--')[2];
        this.selectedProject = src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedProject();
        this.selectedSprint = src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedSprint();
        this.sprintStartDate = src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSprintStartDate();
        this.sprintEndDate = src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSprintEndDate();
    };
    ApplistComponent.prototype.ngDoCheck = function () {
        this.setRequiredParameters();
    };
    ApplistComponent.prototype.disableDropdowns = function () {
        this.industryDropdownState = false;
        this.instanceDropdownState = false;
        this.appDropDownState = false;
        this.projDropdownState = false;
        this.sprintDropdownState = false;
    };
    ApplistComponent.prototype.setProjectListAndSelectedProject = function () {
        var _this = this;
        // console.log("setProjectListAndSelectedProject")
        this.http.get(src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getBackendBaseUrl() + "/api/getAppProjectList?selectedAppName=" + src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedApp()).subscribe(function (getAppResp) {
            var projectList = [];
            var projectListObjArray = [];
            projectListObjArray = getAppResp;
            projectListObjArray.forEach(function (element) {
                projectList.push(element.name);
            });
            src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].setProjectList(projectList);
            src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].setSelectedProject(src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getProjectList()[0]);
            _this.setSprintListAndSelectedSprint();
        });
    };
    ApplistComponent.prototype.setSprintListAndSelectedSprint = function () {
        var _this = this;
        // console.log("setSprintListAndSelectedSprint")
        this.http.get(src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getBackendBaseUrl() + "/api/getProjectSprintList?appName=" + src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedApp() + "&&project=" + src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedProject()).subscribe(function (getProjectResp) {
            var sprintList = [];
            var sprintListObjArray = [];
            var sprintDatesData = {};
            sprintListObjArray = getProjectResp;
            sprintListObjArray.forEach(function (element) {
                sprintList.push(element.name);
                sprintDatesData[element.name] = element;
            });
            src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].setSprintList(sprintList);
            src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].setSelectedSprint(src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSprintList()[0]);
            src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].setSprintDatesData(sprintDatesData);
            src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].setSprintStartDate(src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSprintDatesData()[src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedSprint()]["startdate"]);
            src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].setSprintEndDate(src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSprintDatesData()[src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedSprint()]["enddate"]);
            _this.setWorkItemDetailsForSprint();
        });
    };
    ApplistComponent.prototype.setWorkItemDetailsForSprint = function () {
        var _this = this;
        // console.log("setWorkItemDetailsForSprint")
        this.http.get(src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getBackendBaseUrl() + "/api/getSprintWorkItemList?appName=" + src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedApp() + "&&sprintId=" + src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSprintDatesData()[src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedSprint()]["id"]).subscribe(function (getSprintResp) {
            var sprintWorkItemDataDetails = [];
            var sprintWorkItemDetails = [];
            sprintWorkItemDetails = getSprintResp;
            sprintWorkItemDetails.forEach(function (sprdata) {
                sprintWorkItemDataDetails.push(sprdata);
            });
            src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].setSprintWorkItemDetails(sprintWorkItemDataDetails[0]);
            _this.setRequiredParameters();
        });
    };
    ApplistComponent.prototype.selectIndustry = function (industry) {
        // console.log("selectIndustry: ", industry)
        src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].setSelectedIndustry(industry);
        var app = src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getOneIndustryAppList(src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedIndustry())[0];
        src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].setSelectedInstance(app.split("--")[1]);
        src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].setSelectedApp(app);
        src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].setSelectedInstanceList(src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getOneIndustryInstanceList(src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedIndustry()));
        src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].setSelectedAppsList(src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getOneIndustryInstanceAppList(src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedIndustry() + '_' + src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedInstance()));
        this.setProjectListAndSelectedProject();
        this.disableDropdowns();
    };
    ApplistComponent.prototype.selectInstance = function (instance) {
        // console.log("selectInstance: ", instance)
        src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].setSelectedInstance(instance);
        var app = src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getOneIndustryInstanceAppList(src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedIndustry() + '_' + src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedInstance())[0];
        src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].setSelectedApp(app);
        src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].setSelectedAppsList(src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getOneIndustryInstanceAppList(src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedIndustry() + '_' + src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedInstance()));
        this.setProjectListAndSelectedProject();
        this.disableDropdowns();
    };
    ApplistComponent.prototype.selectApp = function (app) {
        // console.log("selectApp: ", app)
        src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].setSelectedApp(app);
        this.setProjectListAndSelectedProject();
        this.disableDropdowns();
    };
    ApplistComponent.prototype.selectProject = function (project) {
        // console.log("selectProject: ", project);
        src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].setSelectedProject(project);
        this.setSprintListAndSelectedSprint();
        this.disableDropdowns();
    };
    ApplistComponent.prototype.selectSprint = function (sprint) {
        // console.log("selectSprint: ", sprint);
        src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].setSelectedSprint(sprint);
        src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].setSprintStartDate(src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSprintDatesData()[src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedSprint()]["startdate"]);
        src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].setSprintEndDate(src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSprintDatesData()[src_app_data__WEBPACK_IMPORTED_MODULE_1__["Data"].getSelectedSprint()]["enddate"]);
        this.setWorkItemDetailsForSprint();
        this.disableDropdowns();
    };
    ApplistComponent.prototype.toggleIndustryDropdown = function (industryState) {
        this.disableDropdowns();
        this.industryDropdownState = industryState;
    };
    ApplistComponent.prototype.toggleInstanceDropdown = function (instanceState) {
        this.disableDropdowns();
        this.instanceDropdownState = instanceState;
    };
    ApplistComponent.prototype.toggleAppDropdown = function (appState) {
        this.disableDropdowns();
        this.appDropDownState = appState;
    };
    ApplistComponent.prototype.toggleProjectDropdown = function (projectState) {
        this.disableDropdowns();
        this.projDropdownState = projectState;
    };
    ApplistComponent.prototype.toggleSprintDropdown = function (sprintState) {
        this.disableDropdowns();
        this.sprintDropdownState = sprintState;
    };
    ApplistComponent.prototype.selectIndustryMouseover = function (index) {
        this.selectIndustryMouseoverIndex = index;
    };
    ApplistComponent.prototype.selectInstanceMouseover = function (index) {
        this.selectInstanceMouseoverIndex = index;
    };
    ApplistComponent.prototype.selectAppMouseover = function (index) {
        this.selectAppMouseoverIndex = index;
    };
    ApplistComponent.prototype.selectProjectMouseover = function (index) {
        this.selectProjectMouseoverIndex = index;
    };
    ApplistComponent.prototype.selectSprintMouseover = function (index) {
        this.selectSprintMouseoverIndex = index;
    };
    ApplistComponent.prototype.mouseLeave = function () {
        this.selectIndustryMouseoverIndex = -2;
        this.selectInstanceMouseoverIndex = -2;
        this.selectAppMouseoverIndex = -2;
        this.selectProjectMouseoverIndex = -2;
        this.selectSprintMouseoverIndex = -2;
    };
    ApplistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-applist',
            template: __webpack_require__(/*! ./applist.component.html */ "./src/app/body/applist/applist.component.html"),
            styles: [__webpack_require__(/*! ./applist.component.css */ "./src/app/body/applist/applist.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApplistComponent);
    return ApplistComponent;
}());



/***/ }),

/***/ "./src/app/body/body.component.css":
/*!*****************************************!*\
  !*** ./src/app/body/body.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/body/body.component.html":
/*!******************************************!*\
  !*** ./src/app/body/body.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\nstyle=\"margin: 0px;\nwidth: 100%;\">\n  <div class=\"row\">\n\n    <!-- <div\n    class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">\n      <app-applist></app-applist>\n    </div> -->\n\n    <div\n    class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\"\n    style=\"text-align: center\">\n      <app-appdetail></app-appdetail>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/body/body.component.ts":
/*!****************************************!*\
  !*** ./src/app/body/body.component.ts ***!
  \****************************************/
/*! exports provided: BodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyComponent", function() { return BodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BodyComponent = /** @class */ (function () {
    function BodyComponent() {
    }
    BodyComponent.prototype.ngOnInit = function () {
    };
    BodyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-body',
            template: __webpack_require__(/*! ./body.component.html */ "./src/app/body/body.component.html"),
            styles: [__webpack_require__(/*! ./body.component.css */ "./src/app/body/body.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BodyComponent);
    return BodyComponent;
}());



/***/ }),

/***/ "./src/app/data.ts":
/*!*************************!*\
  !*** ./src/app/data.ts ***!
  \*************************/
/*! exports provided: Data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return Data; });
// industry === pod
// instance === org
var appList = [];
var projectList = [];
var sprintList = [];
var industryInstanceList = {};
var industryAppList = {};
var industryInstanceAppList = {};
var appEnvMapping = {};
var cdAppEnvData = {};
var ciAppTagData = {};
// Selected Details
var selectedInstanceList = [];
var selectedAppsList = [];
var selectedIndustry = "";
var selectedInstance = "";
var selectedApp = "";
var selectedProject = "";
var selectedSprint = "";
var selectedEnv = "";
var selectedTag = 0;
var selectedRecentTags = [];
var selectedSprintDates = {};
var sprintWorkItemDetails = {};
var sprintStartDate = new Date();
var sprintEndDate = new Date();
// const BACKEND_BASE_URL = "http://dashboardserver.southindia.cloudapp.azure.com:4200";
var BACKEND_BASE_URL = "http://localhost:4200";
var Data = /** @class */ (function () {
    function Data() {
    }
    Data.getBackendBaseUrl = function () {
        return BACKEND_BASE_URL;
    };
    /*Left Filter Menu Display Attributes*/
    // Pods : selectedIndustry (display value)
    Data.setSelectedIndustry = function (selectedIndustryRequest) {
        selectedIndustry = selectedIndustryRequest;
    };
    Data.getSelectedIndustry = function () {
        return selectedIndustry;
    };
    // Orgs : selectedInstance (display value)
    Data.setSelectedInstance = function (selectedInstanceRequest) {
        selectedInstance = selectedInstanceRequest;
    };
    Data.getSelectedInstance = function () {
        return selectedInstance;
    };
    // Vsts_App : selectedApp (display value)
    Data.setSelectedApp = function (selectedAppRequest) {
        selectedApp = selectedAppRequest;
    };
    Data.getSelectedApp = function () {
        return selectedApp;
    };
    // Project : selectedProject (display value)
    Data.setSelectedProject = function (selectedProjectRequest) {
        selectedProject = selectedProjectRequest;
    };
    Data.getSelectedProject = function () {
        return selectedProject;
    };
    // Sprint : selectedSprint (display value)
    Data.setSelectedSprint = function (selectedSprintRequest) {
        selectedSprint = selectedSprintRequest;
    };
    Data.getSelectedSprint = function () {
        return selectedSprint;
    };
    // Start Date : sprintStartDate (display value)
    Data.setSprintStartDate = function (sprintStartDateRequest) {
        sprintStartDate = sprintStartDateRequest;
    };
    Data.getSprintStartDate = function () {
        return sprintStartDate;
    };
    // End Date : sprintEndDate (display value)
    Data.setSprintEndDate = function (sprintEndDateRequest) {
        sprintEndDate = sprintEndDateRequest;
    };
    Data.getSprintEndDate = function () {
        return sprintEndDate;
    };
    // Orgs : selectedInstanceList (Orgs dropdown menu list)
    Data.setSelectedInstanceList = function (selectedInstanceListRequest) {
        selectedInstanceList = selectedInstanceListRequest;
    };
    Data.getSelectedInstanceList = function () {
        return selectedInstanceList;
    };
    // Vsts_App : selectedAppsList (Vsts_App dropdown menu list)
    Data.setSelectedAppsList = function (selectedAppsListRequest) {
        selectedAppsList = selectedAppsListRequest;
    };
    Data.getSelectedAppsList = function () {
        return selectedAppsList;
    };
    // Project : projectList (Project dropdown menu list)
    Data.setProjectList = function (projectListRequest) {
        projectList = projectListRequest;
    };
    Data.getProjectList = function () {
        return projectList;
    };
    // Sprint : sprintList (Sprint dropdown menu list)
    Data.setSprintList = function (sprintListRequest) {
        sprintList = sprintListRequest;
    };
    Data.getSprintList = function () {
        return sprintList;
    };
    /*Left Filter Menu Attributes*/
    // appList
    Data.setAppList = function (appListRequest) {
        appList = appListRequest;
    };
    Data.getAppList = function () {
        return appList;
    };
    // industryInstanceList
    Data.setIndustryInstanceList = function (industryInstanceListRequest) {
        industryInstanceList = industryInstanceListRequest;
    };
    Data.getIndustryInstanceList = function () {
        return industryInstanceList;
    };
    Data.getOneIndustryInstanceList = function (industryRequest) {
        return industryInstanceList[industryRequest];
    };
    Data.getIndustryList = function () {
        return Object.keys(industryInstanceList);
    };
    // industryAppList
    Data.setIndustryAppList = function (industryAppListRequest) {
        industryAppList = industryAppListRequest;
    };
    Data.getIndustryAppList = function () {
        return industryAppList;
    };
    Data.getOneIndustryAppList = function (industryRequest) {
        return industryAppList[industryRequest];
    };
    // industryInstanceAppList
    Data.setIndustryInstanceAppList = function (industryInstanceAppListRequest) {
        industryInstanceAppList = industryInstanceAppListRequest;
    };
    Data.getIndustryInstanceAppList = function () {
        return industryInstanceAppList;
    };
    Data.getOneIndustryInstanceAppList = function (industryInstanceRequest) {
        return industryInstanceAppList[industryInstanceRequest];
    };
    //project Selectedlist 
    Data.setSelectedProjectList = function (ProjectRequest) {
        return industryInstanceAppList[ProjectRequest];
    };
    // appEnvMapping
    Data.setAppEnvMapping = function (appEnvMappingRequest) {
        appEnvMapping = appEnvMappingRequest;
    };
    Data.getAppEnvMapping = function () {
        return appEnvMapping;
    };
    Data.getAppEnvList = function (appName) {
        return appEnvMapping[appName];
    };
    // cdAppEnvData
    Data.setCdAppEnvData = function (cdAppEnvDataRequest) {
        cdAppEnvData = cdAppEnvDataRequest;
    };
    Data.getCdAppEnvData = function () {
        return cdAppEnvData;
    };
    Data.getOneCdAppEnvData = function (key) {
        return cdAppEnvData[key];
    };
    // ciGitData
    Data.setCiGitData = function (ciAppTagDataRequest) {
        ciAppTagData = ciAppTagDataRequest;
    };
    Data.getCiAppTagData = function () {
        return ciAppTagData;
    };
    Data.getOneCiAppTagData = function (key) {
        return ciAppTagData[key];
    };
    // SprintDates for Selected Sprint
    Data.setSprintDatesData = function (sprintDataRequest) {
        selectedSprintDates = sprintDataRequest;
    };
    Data.getSprintDatesData = function () {
        return selectedSprintDates;
    };
    //WorkItemDetails for Selected Sprint
    Data.setSprintWorkItemDetails = function (sprintWorkItemDetailsRequest) {
        sprintWorkItemDetails = sprintWorkItemDetailsRequest;
    };
    Data.getSprintWorkItemDetails = function () {
        return sprintWorkItemDetails;
    };
    // selectedEnv
    Data.setSelectedEnv = function (selectedEnvRequest) {
        selectedEnv = selectedEnvRequest;
    };
    Data.getSelectedEnv = function () {
        return selectedEnv;
    };
    // selectedTag
    Data.setSelectedTag = function (selectedTagRequest) {
        selectedTag = selectedTagRequest;
    };
    Data.getSelectedTag = function () {
        return selectedTag;
    };
    // selectedRecentTags
    Data.setSelectedRecentTags = function (selectedRecentTagsRequest) {
        selectedRecentTags = selectedRecentTagsRequest;
    };
    Data.getSelectedRecentTags = function () {
        return selectedRecentTags;
    };
    return Data;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav>.open>a:focus, .navbar-inverse .navbar-nav>.open>a:hover {\n    background-color: #337ab7;\n}\n\n.navbar-inverse .navbar-nav>.open>a, .navbar-inverse .navbar-nav>.open>a:focus, .navbar-inverse .navbar-nav>.open>a:hover {\n    background-color: #337ab7;\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\" style=\"background-color: steelblue; border-color: steelblue; margin-bottom: 0px;\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\" style=\"padding-right: 10px;\">\n      <a class=\"navbar-brand\" style=\"color: white;\"><strong style=\"font-size: larger;\">Devops Dashboard</strong></a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n\n      <li class=\"dropdown\">\n        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" style=\"color: white;\"><strong style=\"font-size: medium;\">POD</strong>\n          <span class=\"caret\"></span></a>\n        <ul class=\"dropdown-menu\">\n          <li *ngFor=\"let industry of industryList; let i = index;\"\n          (click)=\"selectIndustry(industry)\"><a href=\"#\">{{ industry }}</a></li>\n        </ul>\n      </li>\n\n      <li class=\"dropdown\">\n        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" style=\"color: white;\"><strong style=\"font-size: medium;\">ORG</strong>\n          <span class=\"caret\"></span></a>\n        <ul class=\"dropdown-menu\">\n          <li *ngFor=\"let instance of instanceList; let i = index;\"\n          (click)=\"selectInstance(instance)\"><a href=\"#\">{{ instance }}</a></li>\n        </ul>\n      </li>\n\n      <li class=\"dropdown\">\n        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" style=\"color: white;\"><strong style=\"font-size: medium;\">VSTS APP</strong>\n          <span class=\"caret\"></span></a>\n        <ul class=\"dropdown-menu\">\n          <li *ngFor=\"let app of appList; let i = index;\"\n          (click)=\"selectApp(app)\"><a href=\"#\">{{ app.split('--')[2] }}</a></li>\n        </ul>\n      </li>\n\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data */ "./src/app/data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(http) {
        this.http = http;
        this.appList = [];
        this.industryList = [];
        this.instanceList = [];
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.setProjectListAndSelectedProject = function () {
        var _this = this;
        // console.log("setProjectListAndSelectedProject")
        this.http.get(_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getBackendBaseUrl() + "/api/getAppProjectList?selectedAppName=" + _data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSelectedApp()).subscribe(function (getAppResp) {
            var projectList = [];
            var projectListObjArray = [];
            projectListObjArray = getAppResp;
            projectListObjArray.forEach(function (element) {
                projectList.push(element.name);
            });
            _data__WEBPACK_IMPORTED_MODULE_2__["Data"].setProjectList(projectList);
            _data__WEBPACK_IMPORTED_MODULE_2__["Data"].setSelectedProject(_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getProjectList()[0]);
            _this.setSprintListAndSelectedSprint();
        });
    };
    HeaderComponent.prototype.setSprintListAndSelectedSprint = function () {
        var _this = this;
        // console.log("setSprintListAndSelectedSprint")
        this.http.get(_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getBackendBaseUrl() + "/api/getProjectSprintList?appName=" + _data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSelectedApp() + "&&project=" + _data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSelectedProject()).subscribe(function (getProjectResp) {
            var sprintList = [];
            var sprintListObjArray = [];
            var sprintDatesData = {};
            sprintListObjArray = getProjectResp;
            sprintListObjArray.forEach(function (element) {
                sprintList.push(element.name);
                sprintDatesData[element.name] = element;
            });
            _data__WEBPACK_IMPORTED_MODULE_2__["Data"].setSprintList(sprintList);
            _data__WEBPACK_IMPORTED_MODULE_2__["Data"].setSelectedSprint(_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSprintList()[0]);
            _data__WEBPACK_IMPORTED_MODULE_2__["Data"].setSprintDatesData(sprintDatesData);
            _data__WEBPACK_IMPORTED_MODULE_2__["Data"].setSprintStartDate(_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSprintDatesData()[_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSelectedSprint()]["startdate"]);
            _data__WEBPACK_IMPORTED_MODULE_2__["Data"].setSprintEndDate(_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSprintDatesData()[_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSelectedSprint()]["enddate"]);
            _this.setWorkItemDetailsForSprint();
        });
    };
    HeaderComponent.prototype.setWorkItemDetailsForSprint = function () {
        var _this = this;
        // console.log("setWorkItemDetailsForSprint")
        this.http.get(_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getBackendBaseUrl() + "/api/getSprintWorkItemList?appName=" + _data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSelectedApp() + "&&sprintId=" + _data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSprintDatesData()[_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSelectedSprint()]["id"]).subscribe(function (getSprintResp) {
            var sprintWorkItemDataDetails = [];
            var sprintWorkItemDetails = [];
            sprintWorkItemDetails = getSprintResp;
            sprintWorkItemDetails.forEach(function (sprdata) {
                sprintWorkItemDataDetails.push(sprdata);
            });
            _data__WEBPACK_IMPORTED_MODULE_2__["Data"].setSprintWorkItemDetails(sprintWorkItemDataDetails[0]);
            _this.setRequiredParameters();
        });
    };
    HeaderComponent.prototype.setRequiredParameters = function () {
        // Dropdown Lists
        this.industryList = _data__WEBPACK_IMPORTED_MODULE_2__["Data"].getIndustryList();
        this.instanceList = _data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSelectedInstanceList();
        this.appList = _data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSelectedAppsList();
    };
    HeaderComponent.prototype.ngDoCheck = function () {
        this.setRequiredParameters();
    };
    HeaderComponent.prototype.selectIndustry = function (industry) {
        // console.log("selectIndustry: ", industry)
        _data__WEBPACK_IMPORTED_MODULE_2__["Data"].setSelectedIndustry(industry);
        var app = _data__WEBPACK_IMPORTED_MODULE_2__["Data"].getOneIndustryAppList(_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSelectedIndustry())[0];
        _data__WEBPACK_IMPORTED_MODULE_2__["Data"].setSelectedInstance(app.split("--")[1]);
        _data__WEBPACK_IMPORTED_MODULE_2__["Data"].setSelectedApp(app);
        _data__WEBPACK_IMPORTED_MODULE_2__["Data"].setSelectedInstanceList(_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getOneIndustryInstanceList(_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSelectedIndustry()));
        _data__WEBPACK_IMPORTED_MODULE_2__["Data"].setSelectedAppsList(_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getOneIndustryInstanceAppList(_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSelectedIndustry() + '_' + _data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSelectedInstance()));
        this.setProjectListAndSelectedProject();
    };
    HeaderComponent.prototype.selectInstance = function (instance) {
        // console.log("selectInstance: ", instance)
        _data__WEBPACK_IMPORTED_MODULE_2__["Data"].setSelectedInstance(instance);
        var app = _data__WEBPACK_IMPORTED_MODULE_2__["Data"].getOneIndustryInstanceAppList(_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSelectedIndustry() + '_' + _data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSelectedInstance())[0];
        _data__WEBPACK_IMPORTED_MODULE_2__["Data"].setSelectedApp(app);
        _data__WEBPACK_IMPORTED_MODULE_2__["Data"].setSelectedAppsList(_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getOneIndustryInstanceAppList(_data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSelectedIndustry() + '_' + _data__WEBPACK_IMPORTED_MODULE_2__["Data"].getSelectedInstance()));
        this.setProjectListAndSelectedProject();
    };
    HeaderComponent.prototype.selectApp = function (app) {
        // console.log("selectApp: ", app)
        _data__WEBPACK_IMPORTED_MODULE_2__["Data"].setSelectedApp(app);
        this.setProjectListAndSelectedProject();
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");


// import { environment } from './environments/environment';
// if (environment.production) {
//   enableProdMode();
// }
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Jo/Desktop/Devops/DevopsDashboard_04072019_Angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map