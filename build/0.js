webpackJsonp([0],{

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalereturnPageModule", function() { return SalereturnPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__salereturn__ = __webpack_require__(390);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SalereturnPageModule = /** @class */ (function () {
    function SalereturnPageModule() {
    }
    SalereturnPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__salereturn__["a" /* SalereturnPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__salereturn__["a" /* SalereturnPage */]),
            ],
        })
    ], SalereturnPageModule);
    return SalereturnPageModule;
}());

//# sourceMappingURL=salereturn.module.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalereturnPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_config_config__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_rloginprocess_rloginprocess__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the SalereturnPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SalereturnPage = /** @class */ (function () {
    function SalereturnPage(navCtrl, navParams, config, storage, httpService, toast, rclogin) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.config = config;
        this.storage = storage;
        this.httpService = httpService;
        this.toast = toast;
        this.rclogin = rclogin;
        this.temp = '';
        this.getSelectedText = '';
        this.oderId = this.navParams.get('orderId');
        this.temp = this.navParams.get('item');
        this.orderNo = this.navParams.get('orderNo');
    }
    SalereturnPage.prototype.confirm = function () {
        var _this = this;
        var token = this.storage.get('token');
        if (token) {
            //api请求
            var api = 'v1/PersonalCenter/ApplySaleReturn/' + token;
            console.log(api);
            //发送请求提交退货申请
            this.httpService.doFormPost(api, { orderNo: this.orderNo, memo: this.getSelectedText }, function (data) {
                console.log(data);
                if (data.error_code == 0) {
                    //申请退货后处理
                    _this.navCtrl.push('OrderhandletransferPage', { type: '4', behindHandle: 'behindHandle' });
                }
                else if (data.error_code == 3) {
                    //抢登处理
                    _this.rclogin.rLoginProcess(_this.navCtrl);
                }
                else {
                    _this.toast.showToast(data.error_message);
                }
            });
        }
    };
    SalereturnPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-salereturn',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\salereturn\salereturn.html"*/'<!--\n\n  Generated template for the SalereturnPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>申请退货</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content style="background: #eeeeee;">\n\n    \n\n        <ion-grid style="padding: 1px;width: 100%;" >\n\n            <div class="card-div">\n\n            <ion-row class="col_row">\n\n                <ion-col class="col_2" style="width: 100%"  *ngFor="let item of temp.orderlines">\n\n                    <img class="img" [src]="config.domain+item.photo">\n\n                    <div class="hp">\n\n                        <div style=" width:150px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> {{item.productname}}</div><br  />\n\n                            <div style="float:right;margin-top:-20px;">{{item.price}}元</div>  \n\n                    </div>\n\n                    <br />\n\n                    <br />\n\n                    <span class="hp" style="float:right">×{{item.productnum}}</span>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row class="col_row">\n\n               <ion-col>\n\n                  <ion-list>\n\n                      <ion-item>\n\n                        <ion-label>退货原因</ion-label>\n\n                        <ion-select [(ngModel)]=\'getSelectedText\'>\n\n                          <ion-option value="1">拍错/不喜欢/效果不好</ion-option>\n\n                          <ion-option value="2">质量问题/与图片不符</ion-option>\n\n                          <ion-option value="3">其他</ion-option>\n\n                        </ion-select>\n\n                      </ion-item>\n\n                          <br />  <br />  <br />  <br />  <br />  <br />  <br />  <br /> <br />\n\n                          <button ion-button full color="danger" (tap)= "confirm()">提交</button>\n\n                    </ion-list>\n\n               </ion-col>\n\n            </ion-row>\n\n          </div>   \n\n            </ion-grid>\n\n  \n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\salereturn\salereturn.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_rloginprocess_rloginprocess__["a" /* RloginprocessProvider */]])
    ], SalereturnPage);
    return SalereturnPage;
}());

//# sourceMappingURL=salereturn.js.map

/***/ })

});
//# sourceMappingURL=0.js.map