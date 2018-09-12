webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//配置文件


var HttpServicesProvider = /** @class */ (function () {
    function HttpServicesProvider(http, jsonp, config, noticeSer) {
        this.http = http;
        this.jsonp = jsonp;
        this.config = config;
        this.noticeSer = noticeSer;
        //设置post的格式
        this.josonHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        console.log('Hello HttpServicesProvider Provider');
    }
    //get请求数据
    HttpServicesProvider.prototype.requestData = function (apiUrl, callback, json) {
        var _this = this;
        var api = '';
        if (json) {
            var params = Object.keys(json).map(function (key) {
                return encodeURIComponent(key) + "=" + encodeURIComponent(json[key]);
            }).join("&");
            api = this.config.apiUrl + apiUrl + '?' + params;
        }
        else {
            api = this.config.apiUrl + apiUrl;
        }
        this.http.get(api).subscribe(function (data) {
            callback(data.json()); /*回调函数*/
        }, function (err) {
            _this.noticeSer.showToast('服务器异常');
        });
    };
    //post 提交数据
    HttpServicesProvider.prototype.doPost = function (apiUrl, json, callback) {
        var _this = this;
        var api = this.config.apiUrl + apiUrl;
        this.http.post(api, JSON.stringify(json), { headers: this.josonHeaders }).subscribe(function (res) {
            callback(res.json());
        }, function (err) {
            _this.noticeSer.showToast('服务器异常');
        });
    };
    HttpServicesProvider.prototype.doFormPost = function (apiUrl, json, callback) {
        var _this = this;
        var params = Object.keys(json).map(function (key) {
            return encodeURIComponent(key) + "=" + encodeURIComponent(json[key]);
        }).join("&");
        var api = this.config.apiUrl + apiUrl + '?' + params;
        console.log(api);
        this.http.post(api, null).subscribe(function (res) {
            callback(res.json());
        }, function (err) {
            _this.noticeSer.showToast('服务器异常');
        });
    };
    HttpServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Jsonp */], __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__["a" /* ToastProvider */]])
    ], HttpServicesProvider);
    return HttpServicesProvider;
}());

//# sourceMappingURL=http-services.js.map

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var StorageProvider = /** @class */ (function () {
    function StorageProvider() {
    }
    //localStorage
    StorageProvider.prototype.set = function (key, value) {
        localStorage.setItem(key, JSON.stringify(value)); /*对象转换成字符串*/
    };
    StorageProvider.prototype.get = function (key) {
        return JSON.parse(localStorage.getItem(key)); /*字符串转换成对象*/
    };
    StorageProvider.prototype.remove = function (key) {
        localStorage.removeItem(key);
    };
    StorageProvider.prototype.setSessionStorage = function (key, value) {
        sessionStorage.setItem(key, JSON.stringify(value)); /*对象转换成字符串*/
    };
    StorageProvider.prototype.getSessionStorage = function (key) {
        return JSON.parse(sessionStorage.getItem(key)); /*字符串转换成对象*/
    };
    StorageProvider.prototype.removeSessionStorage = function (key) {
        sessionStorage.removeItem(key);
    };
    StorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], StorageProvider);
    return StorageProvider;
}());

//# sourceMappingURL=storage.js.map

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ToastProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ToastProvider = /** @class */ (function () {
    function ToastProvider(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ToastProvider_1 = ToastProvider;
    // 显示 toast提示
    ToastProvider.prototype.showToast = function (message, position) {
        if (position === void 0) { position = ToastProvider_1.TOAST_POS_BOTTOM; }
        var toast = this.toastCtrl.create({
            message: message,
            duration: 2000,
            position: position
        });
        toast.present();
        return toast;
    };
    ToastProvider.prototype.showNoticeByToast = function (code, msg) {
        var m = '';
        if (msg && msg.length > 0) {
            if (msg.charAt(msg.length - 1) == '!' || msg.charAt(msg.length - 1) == '！') {
                msg = msg.substr(0, msg.length - 1);
            }
        }
        if (code == 1) {
            m = '提示：' + msg + '！';
        }
        else {
            m = '错误' + code + '：' + msg + '！';
        }
        return this.showToast(m);
    };
    ToastProvider.TOAST_POS_BOTTOM = 'top';
    ToastProvider.TOAST_POS_MIDDLE = 'middle';
    ToastProvider = ToastProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], ToastProvider);
    return ToastProvider;
    var ToastProvider_1;
}());

//# sourceMappingURL=toast.js.map

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { Http } from '@angular/http';

/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ConfigProvider = /** @class */ (function () {
    function ConfigProvider() {
        // 正式环境
        this.apiUrl = "https://appnew.zhongjianmall.com/zjapp/";
        this.domain = "https://appnew.zhongjianmall.com";
        //  public apiUrl="http://192.168.0.100:8080/zjapp/";
        //  public domain="http://192.168.1.71";
        //测试环境
        //  public apiUrl="http://192.168.1.71/zjapp/";
        //  public domain="http://192.168.1.71";
    }
    ConfigProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], ConfigProvider);
    return ConfigProvider;
}());

//# sourceMappingURL=config.js.map

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RloginprocessProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_alert_alert__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_clearlogin_clearlogin__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the RloginprocessProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RloginprocessProvider = /** @class */ (function () {
    function RloginprocessProvider(alertProvider, clearLogin) {
        this.alertProvider = alertProvider;
        this.clearLogin = clearLogin;
    }
    RloginprocessProvider.prototype.rLoginProcess = function (navCtrl) {
        this.clearLogin.release();
        this.alertProvider.showAlert('您的账号在别处登录啦~', '', [
            {
                text: '关闭',
                handler: function () {
                }
            },
            {
                text: '登录',
                handler: function () {
                    navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */]);
                }
            }
        ]);
    };
    RloginprocessProvider.prototype.rLoginProcessWithHistory = function (navCtrl) {
        this.clearLogin.release();
        this.alertProvider.showAlert('您的账号在别处登录啦~', '', [
            {
                text: '关闭',
                handler: function () {
                    navCtrl.pop();
                }
            },
            {
                text: '登录',
                handler: function () {
                    navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */], { history: 'history' });
                }
            }
        ]);
    };
    RloginprocessProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_alert_alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_clearlogin_clearlogin__["a" /* ClearloginProvider */]])
    ], RloginprocessProvider);
    return RloginprocessProvider;
}());

//# sourceMappingURL=rloginprocess.js.map

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { CarModalComponent } from '../../components/car-modal/car-modal';
/*
  Generated class for the AlertProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AlertProvider = /** @class */ (function () {
    function AlertProvider(alertCtrl, modalCtrl) {
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
    }
    AlertProvider.prototype.showAlert = function (tilte, subTitle, buttons) {
        var alert = this.alertCtrl.create({
            title: tilte,
            subTitle: subTitle,
            buttons: buttons
        });
        alert.present();
    };
    AlertProvider.prototype.showPrompt = function (tilte, buttons) {
        var prompt = this.alertCtrl.create({
            title: tilte,
            message: '',
            inputs: [
                {
                    type: 'password',
                    placeholder: '6位支付密码',
                }
            ],
            buttons: buttons
        });
        prompt.present();
    };
    AlertProvider.prototype.showMoreAlert = function (tilte, subTitle, css, buttons) {
        var alert = this.alertCtrl.create({
            title: tilte,
            cssClass: css,
            subTitle: subTitle,
            buttons: buttons
        });
        alert.present();
    };
    AlertProvider.prototype.showAlertM = function (component, data) {
        // var data = {text:"测试"};
        var modal = this.modalCtrl.create(component, data, {
            showBackdrop: true,
            enableBackdropDismiss: true
        });
        modal.onDidDismiss(function (data) {
            console.log("销毁");
        });
        modal.present();
    };
    AlertProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */]])
    ], AlertProvider);
    return AlertProvider;
}());

//# sourceMappingURL=alert.js.map

/***/ }),
/* 17 */,
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeblinkProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_themeable_browser__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the WeblinkProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var WeblinkProvider = /** @class */ (function () {
    function WeblinkProvider(loadingCtrl, storage, themeableBrowser, config) {
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.themeableBrowser = themeableBrowser;
        this.config = config;
        this.options = {
            //这里我仅仅定义了状态栏颜色（ios下有效）和关闭按妞，以及工具条的颜色和标题颜色
            statusbar: {
                color: '#ffffffff'
            },
            toolbar: {
                height: 44,
                color: '#f0f0f0ff'
            },
            title: {
                color: '#003264ff',
                showPageTitle: true
            },
            closeButton: {
                image: 'close',
                imagePressed: 'close_pressed',
                align: 'left',
                event: 'closePressed'
            },
            backButtonCanClose: true
        };
        console.log('Hello WeblinkProvider Provider');
    }
    WeblinkProvider.prototype.goWeb = function (webUrl) {
        this.themeableBrowser.create(webUrl, '_blank', this.options);
    };
    WeblinkProvider.prototype.wxGoWebPay = function (token, orderNo, realpay, orderType) {
        var web_url = this.config.domain + "/zjapp/wechat/wechatauth.wxpaydo?token=" + token + "&orderno=" + orderNo + "&realpay=" + realpay + "&ordertype=" + orderType;
        this.show();
        setTimeout(function () {
            window.location.href = web_url;
        }, 500);
    };
    WeblinkProvider.prototype.show = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: '跳转支付中...'
        });
        this.loading.present();
        setTimeout(function () {
            _this.hide();
        }, 3000);
    };
    // 隐藏loading
    WeblinkProvider.prototype.hide = function () {
        if (this.loading) {
            this.loading.dismiss();
        }
    };
    WeblinkProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_themeable_browser__["a" /* ThemeableBrowser */], __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */]])
    ], WeblinkProvider);
    return WeblinkProvider;
}());

//# sourceMappingURL=weblink.js.map

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifypasswordProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_http_services_http_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rloginprocess_rloginprocess__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the VerifypasswordProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var VerifypasswordProvider = /** @class */ (function () {
    function VerifypasswordProvider(storage, httpService, rlogin, alert, noticeSer) {
        this.storage = storage;
        this.httpService = httpService;
        this.rlogin = rlogin;
        this.alert = alert;
        this.noticeSer = noticeSer;
    }
    VerifypasswordProvider.prototype.verifyPayPassword = function (payPassword, navCtrl, callback) {
        var _this = this;
        var token = this.storage.get('token');
        var api = 'v1/PersonalCenter/verifyPayPassword';
        this.httpService.doFormPost(api, {
            toKen: token,
            payPassword: payPassword,
        }, function (res) {
            if (res.error_code == 0) {
                callback();
            }
            else if (res.error_code == 3) {
                _this.rlogin.rLoginProcess(navCtrl);
            }
            else if (res.error_code == -1) {
                _this.noticeSer.showToast('您还未设置支付密码');
                navCtrl.push('SetpaypasswordPage');
            }
            else if (res.error_code == 5) {
                _this.noticeSer.showToast('您的现金币被冻结，请和工作人员联系');
            }
            else {
                _this.noticeSer.showToast('服务异常：' + res.error_message);
            }
        });
    };
    VerifypasswordProvider.prototype.execute = function (navCtrl, callback) {
        var _this = this;
        //密码验证
        this.alert.showPrompt('验证支付密码', [
            {
                text: '取消',
                handler: function (data) {
                }
            },
            {
                text: '确定',
                handler: function (data) {
                    _this.verifyPayPassword(data[0], navCtrl, callback);
                }
            }
        ]);
    };
    VerifypasswordProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_1__providers_http_services_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rloginprocess_rloginprocess__["a" /* RloginprocessProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__["a" /* ToastProvider */]])
    ], VerifypasswordProvider);
    return VerifypasswordProvider;
}());

//# sourceMappingURL=verifypassword.js.map

/***/ }),
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__ = __webpack_require__(6);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, httpService, storage, noticeSer, el, renderer2) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.storage = storage;
        this.noticeSer = noticeSer;
        this.el = el;
        this.renderer2 = renderer2;
        //定义数据
        this.history = '';
        this.userinfo = {
            phoneNum: '',
            password: ''
        };
        this.userinfo2 = {
            phoneNum: '',
            verifyCode: ''
        };
        this.type = 1;
        this.spareTime = 60;
        this.interval = null;
        this.history = this.navParams.get('history');
        this.type = 1;
        if (this.navParams.get('type')) {
            this.type = this.navParams.get('type');
        }
    }
    LoginPage.prototype.change = function () {
        if (this.type == 1) {
            this.type = 2;
        }
        else {
            this.type = 1;
        }
    };
    LoginPage.prototype.getVerifyCode = function () {
        var _this = this;
        var apiUrl = 'v1/LoginAndRegister/SendRegisterVerifyCode';
        this.httpService.doPost(apiUrl, { phoneNum: this.userinfo2.phoneNum }, function (res) {
            if (res.error_code == 0) {
                var button_1 = _this.el.nativeElement.querySelector('#button');
                _this.renderer2.setStyle(button_1, 'display', 'none');
                //设置倒计时
                var time_1 = _this.el.nativeElement.querySelector('#time');
                _this.renderer2.setStyle(time_1, 'display', 'inline-block');
                _this.interval = setInterval(function () {
                    _this.spareTime--;
                    if (_this.spareTime == 0) {
                        _this.renderer2.setStyle(time_1, 'display', 'none');
                        _this.renderer2.setStyle(button_1, 'display', 'inline-block');
                        _this.spareTime = 60;
                        clearInterval(_this.interval);
                    }
                }, 1000);
            }
            else {
                _this.noticeSer.showToast('服务异常：' + res.error_message);
            }
        });
    };
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        var api = '';
        var tempData = null;
        if (this.type == 1) {
            if (this.userinfo.phoneNum == '') {
                this.noticeSer.showToast('手机号不可为空');
                return;
            }
            if (this.userinfo.phoneNum.length < 11) {
                this.noticeSer.showToast('手机号格式不对');
                return;
            }
            if (this.userinfo.password == '') {
                this.noticeSer.showToast('密码不可为空');
                return;
            }
            api = 'v1/LoginAndRegister/UserLogin';
            tempData = this.userinfo;
        }
        else {
            if (this.userinfo2.phoneNum == '') {
                this.noticeSer.showToast('手机号不可为空');
                return;
            }
            if (this.userinfo2.phoneNum.length < 11) {
                this.noticeSer.showToast('手机号格式不对');
                return;
            }
            if (this.userinfo2.verifyCode.length != 4) {
                this.noticeSer.showToast('验证码不正确');
                return;
            }
            api = 'v2/LoginAndRegister/dynamicLogin';
            tempData = this.userinfo2;
        }
        this.httpService.doPost(api, tempData, function (data) {
            if (data.error_code == 0) {
                _this.storage.set('token', data.data);
                if (_this.history == 'history') {
                    _this.navCtrl.pop(); /*返回上一个页面*/
                }
                else {
                    _this.navCtrl.popToRoot(); /*回到根页面*/
                }
            }
            else {
                _this.noticeSer.showToast(data.error_message);
            }
        });
    };
    LoginPage.prototype.ionViewWillUnload = function () {
        //清理定时器，收回资源
        if (this.interval) {
            clearInterval(this.interval);
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar *ngIf="type==1">\n\n    <ion-title>登&nbsp;录</ion-title>\n\n  </ion-navbar>\n\n\n\n  <ion-navbar *ngIf="type==2">\n\n    <ion-title>快速注册登录</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n   <ion-list *ngIf="type==1">\n\n        <ion-item>\n\n          <ion-label fixed>账户:</ion-label>\n\n          <ion-input type="text" [(ngModel)]=\'userinfo.phoneNum\' placeholder=\'手机号/账户\'></ion-input>\n\n        </ion-item>\n\n  \n\n        <ion-item>\n\n            <ion-label fixed>密码:</ion-label>\n\n            <ion-input type="password"  [(ngModel)]=\'userinfo.password\' placeholder=\'请输入密码\'></ion-input>\n\n         </ion-item>\n\n\n\n         <ion-item no-lines class="list_end">\n\n            <span item-start (tap)="change()">\n\n                快速注册登录\n\n            </span>\n\n         </ion-item>\n\n   </ion-list>\n\n\n\n   <ion-list *ngIf="type==2">\n\n    <ion-item>\n\n      <ion-label fixed>账户:</ion-label>\n\n      <ion-input type="text" [(ngModel)]=\'userinfo2.phoneNum\' placeholder=\'手机号/账户\'></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label fixed>验证码:</ion-label>\n\n      <ion-input type="number" [(ngModel)]=\'userinfo2.verifyCode\' placeholder="短信验证码"></ion-input>\n\n      <button id="button" ion-button item-right (tap)="getVerifyCode()" color= "danger">获取验证码</button>\n\n      <button style="display: none;width: 5rem;" id="time" ion-button item-right color= "danger">{{spareTime}}s 重发</button>\n\n    </ion-item>\n\n\n\n     <ion-item no-lines class="list_end">\n\n        <span item-start (tap)="change()">\n\n            密码登录\n\n        </span>\n\n     </ion-item>\n\n     <ion-item no-lines class="list_end">\n\n        <span item-start style="color:#f53d3d;" (tap)="change()">\n\n            提示:该方式下注册密码默认为手机号后四位，若已注册该方式可登录\n\n        </span>\n\n     </ion-item>\n\n</ion-list>\n\n\n\n   <button ion-button block color="danger" class="login_btn" (tap)="doLogin()">登录</button>\n\n    \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WechatProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_http_services_http_services__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
///<reference path="../../services/jweixin.d.ts"/>
///<reference path="../../services/user_defined.d.ts"/>


/*
  Generated class for the WechatProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var WechatProvider = /** @class */ (function () {
    function WechatProvider(httpService) {
        this.httpService = httpService;
    }
    WechatProvider.prototype.wxConfig = function (callback) {
        if (!global_wxFunciton.isloadWxConfig()) {
            var url = location.href.split('#')[0]; //url不能写死
            var api = 'wechat/wechatParam.wxpaydo';
            this.httpService.requestData(api, function (data) {
                wx.config({
                    debug: false,
                    appId: data.appid,
                    timestamp: data.timestamp,
                    nonceStr: data.nonceStr,
                    signature: data.signature,
                    jsApiList: [
                        'checkJsApi',
                        'onMenuShareTimeline',
                        'onMenuShareAppMessage',
                        'onMenuShareQQ',
                        'onMenuShareQZone',
                        'uploadImage',
                        'chooseWXPay',
                        'chooseImage'
                    ]
                });
            }, { url: url });
        }
        else {
            callback();
        }
        wx.ready(function () {
            callback();
        });
    };
    WechatProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_http_services_http_services__["a" /* HttpServicesProvider */]])
    ], WechatProvider);
    return WechatProvider;
}());

//# sourceMappingURL=wechat.js.map

/***/ }),
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClearloginProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_storage_storage__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ClearloginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ClearloginProvider = /** @class */ (function () {
    function ClearloginProvider(storage) {
        this.storage = storage;
    }
    ClearloginProvider.prototype.release = function () {
        this.storage.remove('token');
        this.storage.remove('userInfo');
    };
    ClearloginProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_storage_storage__["a" /* StorageProvider */]])
    ], ClearloginProvider);
    return ClearloginProvider;
}());

//# sourceMappingURL=clearlogin.js.map

/***/ }),
/* 89 */,
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_home_home__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_category_category__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_cart_cart__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_user_user__ = __webpack_require__(190);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__pages_home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__pages_category_category__["a" /* CategoryPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__pages_cart_cart__["a" /* CartPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__pages_user_user__["a" /* UserPage */];
    }
    TabsPage.prototype.ionViewDidLoad = function () {
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\tabs\tabs.html"*/'<ion-tabs class="mytabs">\n\n  <ion-tab [root]="tab1Root" tabTitle="首页" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="分类" tabIcon="ios-apps"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="购物车" tabIcon="ios-cart"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="我的" tabIcon="contacts"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_services_http_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__ = __webpack_require__(6);
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







var CartPage = /** @class */ (function () {
    function CartPage(rlogin, navCtrl, navParams, config, storage, httpservice, toast) {
        this.rlogin = rlogin;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.config = config;
        this.storage = storage;
        this.httpservice = httpservice;
        this.toast = toast;
        this.list = [];
        this.allPrice = 0; /*总价*/
        this.isChencked = false; /*全选反选*/
        this.isEdit = false; /*是否编辑*/
        this.hasData = false; /*是否有数据*/
        this.length = 0; /**商品种类数量 */
        this.isIndex = true; /**是否从详情页进入购物车，true为从首页进入 */
        this.productArray = [];
        this.num = 1; /**记录第几次进入购物车且未登陆 */
        this.isIndex = navParams.get("isIndex");
        if (this.isIndex == undefined) {
            this.isIndex = true;
        }
    }
    CartPage.prototype.ionViewDidLoad = function () {
        console.log("购物车第一次加载！");
    };
    CartPage.prototype.ionViewWillEnter = function () {
        if (this.isIndex === true) {
            global_wxFunciton.hideGoRoot();
        }
        this.num = this.storage.getSessionStorage("carNum") == null ? 1 : this.storage.getSessionStorage("carNum");
        this.getCartsData();
    };
    CartPage.prototype.getCartsData = function () {
        var _this = this;
        /**判断是否是从详情页进入的购物车 */
        var api = 'v1/PersonalCenter/PersonalCenter/getShoppingCartInfo';
        var cartsData = this.storage.get('token');
        var params = { "token": cartsData };
        this.httpservice.requestData(api, function (data) {
            if (data.error_code == 0) {
                _this.list = data.data;
                for (var i = 0; i < _this.list.length; i++) {
                    if (_this.list[i].producerName == '' || _this.list[i].producerName == null) {
                        _this.list[i].producerName = "平台自营";
                    }
                    for (var j = 0; j < _this.list[i].productList.length; j++) {
                        if (_this.list[i].productList[j].product.productname.length >= 20) {
                            _this.productName = _this.list[i].productList[j].product.productname;
                            _this.productName = _this.productName.substring(0, 20) + "...";
                            _this.list[i].productList[j].product.productname = _this.productName;
                        }
                        _this.length++;
                        _this.list[i].productList[j].checked = false;
                    }
                }
                if (_this.list.length > 0) {
                    _this.hasData = true;
                }
                else {
                    _this.list = [];
                    _this.hasData = false;
                }
            }
            else if (data.error_code == 3) {
                if (_this.num == 2) {
                    _this.num = 1;
                    _this.storage.setSessionStorage("carNum", _this.num);
                }
                else {
                    _this.num++;
                    _this.storage.setSessionStorage("carNum", _this.num);
                    _this.navCtrl.push('LoginPage');
                }
            }
            else {
                _this.toast.showToast(data.error_message);
            }
        }, params);
        this.isChencked = false;
        this.allPrice = 0;
        // this.sumPrice();
    };
    CartPage.prototype.changeCarts = function () {
        if (this.getChenckNum() == this.length) {
            this.isChencked = true;
        }
        else {
            this.isChencked = false;
        }
        this.sumPrice();
    };
    /*计算总价*/
    CartPage.prototype.sumPrice = function () {
        var tempAllPrice = 0;
        for (var i = 0; i < this.list.length; i++) {
            for (var j = 0; j < this.list[i].productList.length; j++) {
                if (this.list[i].productList[j].checked == true) {
                    tempAllPrice += this.list[i].productList[j].productnum * this.list[i].productList[j].productSpec.price;
                }
            }
        }
        this.allPrice = tempAllPrice;
    };
    //数量变化  双向数据绑定
    CartPage.prototype.decCount = function (item) {
        var _this = this;
        var api = "v1/PersonalCenter/updateShoppingCartInfo/" + item.id;
        var params = {
            "token": this.storage.get("token"),
            "productNum": item.productnum - 1
        };
        if (item.productnum > 1) {
            this.httpservice.doFormPost(api, params, function (data) {
                if (data.error_code == 0) {
                    --item.productnum;
                    _this.sumPrice();
                }
                else {
                    _this.toast.showToast(data.error_message);
                }
            });
        }
    };
    CartPage.prototype.incCount = function (item) {
        var _this = this;
        var api = "v1/PersonalCenter/updateShoppingCartInfo/" + item.id;
        var params = {
            "token": this.storage.get("token"),
            "productNum": item.productnum + 1
        };
        this.httpservice.doFormPost(api, params, function (data) {
            if (data.error_code == 0) {
                ++item.productnum;
                _this.sumPrice();
            }
            else {
                _this.toast.showToast(data.error_message);
            }
        });
    };
    //离开的时候保存购物车数据
    CartPage.prototype.ionViewWillLeave = function () {
        this.list = [];
        this.allPrice = 0;
        this.isChencked = false;
        this.isEdit = false;
        this.hasData = false;
        this.productName = null;
        this.length = 0;
        global_wxFunciton.showGoRoot();
    };
    //全选反选
    //ionChange  事件只要checkbox改变就会触发
    CartPage.prototype.checkAll = function () {
        if (this.isChencked) {
            for (var i = 0; i < this.list.length; i++) {
                for (var j = 0; j < this.list[i].productList.length; j++) {
                    this.list[i].productList[j].checked = false;
                }
            }
            this.isChencked = false;
        }
        else {
            for (var i = 0; i < this.list.length; i++) {
                for (var j = 0; j < this.list[i].productList.length; j++) {
                    this.list[i].productList[j].checked = true;
                }
            }
            this.isChencked = true;
        }
        this.sumPrice();
    };
    //获取选中的数量
    CartPage.prototype.getChenckNum = function () {
        var sum = 0;
        for (var i = 0; i < this.list.length; i++) {
            for (var j = 0; j < this.list[i].productList.length; j++) {
                if (this.list[i].productList[j].checked == true) {
                    sum += 1;
                }
            }
        }
        return sum;
    };
    //执行删除操作
    CartPage.prototype.doDelete = function () {
        var _this = this;
        this.length = 0;
        var noCheckProduct = [];
        var delArr = [];
        for (var o = 0; o < this.list.length; o++) {
            for (var z = 0; z < this.list[o].productList.length; z++) {
                if (this.list[o].productList[z].checked) {
                    delArr.push(this.list[o].productList[z].id);
                }
            }
        }
        /**调用删除接口 */
        var api = "v2/PersonalCenter/batchdelshoppingcart?token=" + this.storage.get("token");
        var params = delArr;
        this.httpservice.doPost(api, params, function (data) {
            if (data.error_code == 0) {
                for (var i = 0; i < _this.list.length; i++) {
                    var len = 0;
                    var noCheckedArr = [];
                    for (var j = 0; j < _this.list[i].productList.length; j++) {
                        if (!_this.list[i].productList[j].checked) {
                            noCheckedArr.push(_this.list[i].productList[j]);
                            _this.length++;
                            len++;
                        }
                    }
                    if (len == 0) {
                    }
                    else {
                        noCheckProduct.push({
                            "producerName": _this.list[i].producerName,
                            "productList": noCheckedArr
                        });
                    }
                }
                //改变当前数据
                _this.list = noCheckProduct;
                _this.list.length > 0 ? _this.hasData = true : _this.hasData = false;
            }
            else {
                _this.toast.showToast(data.error_message);
            }
        });
    };
    //改变编辑状态  
    CartPage.prototype.changeedit = function () {
        this.isChencked = true;
        this.checkAll();
        this.isEdit = !this.isEdit;
    };
    //去结算  去订单页面
    CartPage.prototype.doPay = function () {
        //获取购物车选中的数据
        /**
         *
         */
        var tempArr = [];
        for (var i = 0; i < this.list.length; i++) {
            for (var j = 0; j < this.list[i].productList.length; j++) {
                if (this.list[i].productList[j].checked) {
                    tempArr.push({
                        "buynum": this.list[i].productList[j].productnum,
                        "id": this.list[i].productList[j].product.id,
                        "freight": 0,
                        "producername": this.list[i].productList[j].product.producername,
                        "producerno": this.list[i].productList[j].product.producerno,
                        "producertel": this.list[i].productList[j].product.producertel,
                        "productname": this.list[i].productList[j].product.productname,
                        "productphotos": this.list[i].productList[j].product.productphotos,
                        "specElec": this.list[i].productList[j].productSpec.elecNum,
                        "specId": this.list[i].productList[j].productSpec.id,
                        "specName": this.list[i].productList[j].productSpec.specname,
                        "specPrice": this.list[i].productList[j].productSpec.price
                    });
                }
            }
        }
        //选中的数据
        //保存订单数据
        if (tempArr.length > 0) {
            this.navCtrl.push('ConfirmOrderPage', {
                "product": tempArr
            });
        }
        else {
            alert('您还没有选中数据');
        }
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\cart\cart.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      购物车\n\n    </ion-title>\n\n    <!---->\n\n  <ion-buttons end>\n\n    <button ion-button (tap)="changeedit()">\n\n      <span *ngIf="!isEdit">编辑</span>\n\n      <span *ngIf="isEdit">完成</span>\n\n    </button>\n\n  </ion-buttons>\n\n\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n \n\n    <!-- <div class="cart_spinner" *ngIf="list.length==0 && hasData">\n\n      <ion-spinner></ion-spinner>\n\n    </div>   -->\n\n    \n\n    <p style="text-align:center; padding-top:80px;" *ngIf="!hasData">您购入车没有数据!</p>\n\n    <ion-list>\n\n        <ng-container *ngFor="let p of list">\n\n          <ion-item>\n\n              <p>{{p.producerName}}</p>\n\n          </ion-item>\n\n          <dl class="cart_list" *ngFor="let item of p.productList">\n\n              <dt>\n\n                <ion-checkbox color="danger" [(ngModel)]="item.checked" (ionChange)="changeCarts()"></ion-checkbox>\n\n                <img [src]="config.domain+item.product.productphotos[0].photo" />\n\n              </dt>      \n\n              <dd>\n\n                  <h2 class="cart_title">{{item.product.productname}}</h2>\n\n                  <p class="cart_spec1">规格：</p><p class="cart_spec2">{{item.productSpec.specname}}</p>\n\n                  <div class="cart_info">\n\n                      <div class="cart_price">\n\n                          ¥{{item.productSpec.price}}元\n\n                      </div>      \n\n                      <div class="cart_num">\n\n                        <div class="input_left"  tappable (click)="decCount(item)">-</div>\n\n                        <div class="input_center">\n\n                            <input type="text"  readonly="readonly" [(ngModel)]="item.productnum" name="num" id="num" />\n\n                        </div>\n\n                        <div class="input_right" tappable (click)="incCount(item)">+</div>\n\n                      </div>\n\n                  </div>\n\n              </dd>\n\n            </dl>\n\n        </ng-container>\n\n    </ion-list>\n\n    <div style="height: 60.8px"></div>\n\n</ion-content>\n\n\n\n<ion-footer *ngIf="hasData" [ngStyle]="{\'bottom\': isIndex==true ? \'50px\' : \'0px\'}">\n\n  <ion-toolbar *ngIf="!isEdit">\n\n    <div class="all_price"  (tap)="checkAll()">\n\n      \n\n      <ion-checkbox disabled="true" color="danger" tappable (click)=checkAll() [(ngModel)]=\'isChencked\' style="top:0.38rem"></ion-checkbox>\n\n      全选  　<strong>合计：<p style="color:red;display: inline;">¥{{allPrice}}</p>元</strong>\n\n    </div>\n\n    <ion-buttons end>\n\n      <div color="danger" (tap)="doPay()" class="dopay">\n\n        去结算\n\n      </div>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n  <ion-toolbar *ngIf="isEdit">\n\n    <div class="all_price"  (tap)="checkAll()">\n\n      \n\n      <ion-checkbox  color="danger" [(ngModel)]=\'isChencked\' style="top:0.38rem"></ion-checkbox>\n\n      全选  　\n\n    </div>\n\n    <ion-buttons end>\n\n      <div color="danger" tappable (click)="doDelete()" class="dodelete">\n\n        删除\n\n      </div>\n\n\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\cart\cart.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_rloginprocess_rloginprocess__["a" /* RloginprocessProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_http_services_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__["a" /* ToastProvider */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressmodelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(19);
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
 * Generated class for the AddressmodelCaomponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AddressmodelComponent = /** @class */ (function () {
    function AddressmodelComponent(navCtrl, navParams, viewCrl, sanitizer, el, renderer2) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCrl = viewCrl;
        this.sanitizer = sanitizer;
        this.el = el;
        this.renderer2 = renderer2;
        this.address = [{ "id": 10, "provincename": "北京市", "citys": [{ "id": 1001, "cityname": "北京市", "regions": [{ "id": 100101, "regionname": "东城区" }, { "id": 100102, "regionname": "西城区" }, { "id": 100105, "regionname": "朝阳区" }, { "id": 100106, "regionname": "海淀区" }, { "id": 100107, "regionname": "丰台区" }, { "id": 100108, "regionname": "石景山区" }, { "id": 100109, "regionname": "顺义区" }, { "id": 100110, "regionname": "昌平区" }, { "id": 100111, "regionname": "门头沟区" }, { "id": 100112, "regionname": "通州区" }, { "id": 100113, "regionname": "房山区" }, { "id": 100114, "regionname": "大兴区" }, { "id": 100115, "regionname": "延庆县" }, { "id": 100116, "regionname": "怀柔区" }, { "id": 100117, "regionname": "平谷区" }, { "id": 100118, "regionname": "密云县" }, { "id": 100119, "regionname": "亦庄开发区" }] }] }, { "id": 11, "provincename": "天津市", "citys": [{ "id": 1101, "cityname": "天津市", "regions": [{ "id": 110101, "regionname": "和平区" }, { "id": 110102, "regionname": "河北区" }, { "id": 110103, "regionname": "河东区" }, { "id": 110104, "regionname": "河西区" }, { "id": 110105, "regionname": "南开区" }, { "id": 110106, "regionname": "红桥区" }, { "id": 110107, "regionname": "滨海新区" }, { "id": 110110, "regionname": "东丽区" }, { "id": 110111, "regionname": "西青区" }, { "id": 110112, "regionname": "津南区" }, { "id": 110113, "regionname": "北辰区" }, { "id": 110114, "regionname": "武清区" }, { "id": 110115, "regionname": "宝坻区" }, { "id": 110116, "regionname": "蓟县" }, { "id": 110117, "regionname": "宁河县" }, { "id": 110118, "regionname": "静海县" }] }] }, { "id": 12, "provincename": "河北省", "citys": [{ "id": 1201, "cityname": "石家庄市", "regions": [{ "id": 120102, "regionname": "长安区" }, { "id": 120103, "regionname": "桥东区" }, { "id": 120104, "regionname": "桥西区" }, { "id": 120105, "regionname": "新华区" }, { "id": 120106, "regionname": "井陉矿区" }, { "id": 120107, "regionname": "裕华区" }, { "id": 120108, "regionname": "井陉县" }, { "id": 120109, "regionname": "正定县" }, { "id": 120110, "regionname": "栾城县" }, { "id": 120111, "regionname": "行唐县" }, { "id": 120112, "regionname": "灵寿县" }, { "id": 120113, "regionname": "高邑县" }, { "id": 120114, "regionname": "深泽县" }, { "id": 120115, "regionname": "赞皇县" }, { "id": 120116, "regionname": "无极县" }, { "id": 120117, "regionname": "平山县" }, { "id": 120118, "regionname": "元氏县" }, { "id": 120119, "regionname": "赵县" }, { "id": 120120, "regionname": "辛集市" }, { "id": 120121, "regionname": "藁城市" }, { "id": 120122, "regionname": "晋州市" }, { "id": 120123, "regionname": "新乐市" }, { "id": 120124, "regionname": "鹿泉市" }, { "id": 120125, "regionname": "高新区" }] }, { "id": 1202, "cityname": "秦皇岛市", "regions": [{ "id": 120202, "regionname": "海港区" }, { "id": 120203, "regionname": "山海关区" }, { "id": 120204, "regionname": "北戴河区" }, { "id": 120205, "regionname": "青龙县" }, { "id": 120206, "regionname": "昌黎县" }, { "id": 120207, "regionname": "抚宁县" }, { "id": 120208, "regionname": "卢龙县" }] }, { "id": 1203, "cityname": "唐山市", "regions": [{ "id": 120302, "regionname": "路南区" }, { "id": 120303, "regionname": "路北区" }, { "id": 120304, "regionname": "古冶区" }, { "id": 120305, "regionname": "开平区" }, { "id": 120306, "regionname": "丰南区" }, { "id": 120307, "regionname": "丰润区" }, { "id": 120308, "regionname": "滦县" }, { "id": 120309, "regionname": "滦南县" }, { "id": 120310, "regionname": "乐亭县" }, { "id": 120311, "regionname": "迁西县" }, { "id": 120312, "regionname": "玉田县" }, { "id": 120313, "regionname": "唐海县" }, { "id": 120314, "regionname": "遵化市" }, { "id": 120315, "regionname": "迁安市" }] }, { "id": 1204, "cityname": "张家口市", "regions": [{ "id": 120402, "regionname": "桥东区" }, { "id": 120403, "regionname": "桥西区" }, { "id": 120404, "regionname": "宣化区" }, { "id": 120405, "regionname": "下花园区" }, { "id": 120406, "regionname": "宣化县" }, { "id": 120407, "regionname": "张北县" }, { "id": 120408, "regionname": "康保县" }, { "id": 120409, "regionname": "沽源县" }, { "id": 120410, "regionname": "尚义县" }, { "id": 120411, "regionname": "蔚县" }, { "id": 120412, "regionname": "阳原县" }, { "id": 120413, "regionname": "怀安县" }, { "id": 120414, "regionname": "万全县" }, { "id": 120415, "regionname": "怀来县" }, { "id": 120416, "regionname": "涿鹿县" }, { "id": 120417, "regionname": "赤城县" }, { "id": 120418, "regionname": "崇礼县" }] }, { "id": 1205, "cityname": "廊坊市", "regions": [{ "id": 120502, "regionname": "安次区" }, { "id": 120503, "regionname": "广阳区" }, { "id": 120504, "regionname": "固安县" }, { "id": 120505, "regionname": "永清县" }, { "id": 120506, "regionname": "香河县" }, { "id": 120507, "regionname": "大城县" }, { "id": 120508, "regionname": "文安县" }, { "id": 120509, "regionname": "大厂县" }, { "id": 120510, "regionname": "霸州市" }, { "id": 120511, "regionname": "三河市" }] }, { "id": 1206, "cityname": "衡水市", "regions": [{ "id": 120602, "regionname": "桃城区" }, { "id": 120603, "regionname": "枣强县" }, { "id": 120604, "regionname": "武邑县" }, { "id": 120605, "regionname": "武强县" }, { "id": 120606, "regionname": "饶阳县" }, { "id": 120607, "regionname": "安平县" }, { "id": 120608, "regionname": "故城县" }, { "id": 120609, "regionname": "景县" }, { "id": 120610, "regionname": "阜城县" }, { "id": 120611, "regionname": "冀州市" }, { "id": 120612, "regionname": "深州市" }] }, { "id": 1207, "cityname": "保定市", "regions": [{ "id": 120701, "regionname": "新市区" }, { "id": 120702, "regionname": "北市区" }, { "id": 120703, "regionname": "南市区" }, { "id": 120705, "regionname": "满城县" }, { "id": 120706, "regionname": "清苑县" }, { "id": 120707, "regionname": "涞水县" }, { "id": 120708, "regionname": "阜平县" }, { "id": 120709, "regionname": "徐水县" }, { "id": 120710, "regionname": "定兴县" }, { "id": 120711, "regionname": "唐县" }, { "id": 120712, "regionname": "高阳县" }, { "id": 120713, "regionname": "容城县" }, { "id": 120714, "regionname": "涞源县" }, { "id": 120715, "regionname": "望都县" }, { "id": 120716, "regionname": "安新县" }, { "id": 120717, "regionname": "易县" }, { "id": 120718, "regionname": "曲阳县" }, { "id": 120719, "regionname": "蠡县" }, { "id": 120720, "regionname": "顺平县" }, { "id": 120721, "regionname": "博野县" }, { "id": 120722, "regionname": "雄县" }, { "id": 120723, "regionname": "涿州市" }, { "id": 120724, "regionname": "定州市" }, { "id": 120725, "regionname": "安国市" }, { "id": 120726, "regionname": "高碑店市" }, { "id": 120727, "regionname": "高新区" }] }, { "id": 1208, "cityname": "承德市", "regions": [{ "id": 120802, "regionname": "双桥区" }, { "id": 120803, "regionname": "双滦区" }, { "id": 120804, "regionname": "鹰手营子" }, { "id": 120805, "regionname": "承德县" }, { "id": 120806, "regionname": "兴隆县" }, { "id": 120807, "regionname": "平泉县" }, { "id": 120808, "regionname": "滦平县" }, { "id": 120809, "regionname": "隆化县" }, { "id": 120810, "regionname": "丰宁县" }, { "id": 120811, "regionname": "宽城县" }, { "id": 120812, "regionname": "围场县" }] }, { "id": 1209, "cityname": "邢台市", "regions": [{ "id": 120902, "regionname": "桥东区" }, { "id": 120903, "regionname": "桥西区" }, { "id": 120904, "regionname": "邢台县" }, { "id": 120905, "regionname": "临城县" }, { "id": 120906, "regionname": "内丘县" }, { "id": 120907, "regionname": "柏乡县" }, { "id": 120908, "regionname": "隆尧县" }, { "id": 120909, "regionname": "任县" }, { "id": 120910, "regionname": "南和县" }, { "id": 120911, "regionname": "宁晋县" }, { "id": 120912, "regionname": "巨鹿县" }, { "id": 120913, "regionname": "新河县" }, { "id": 120914, "regionname": "广宗县" }, { "id": 120915, "regionname": "平乡县" }, { "id": 120916, "regionname": "威县" }, { "id": 120917, "regionname": "清河县" }, { "id": 120918, "regionname": "临西县" }, { "id": 120919, "regionname": "南宫市" }, { "id": 120920, "regionname": "沙河市" }] }, { "id": 1210, "cityname": "沧州市", "regions": [{ "id": 121002, "regionname": "新华区" }, { "id": 121003, "regionname": "运河区" }, { "id": 121004, "regionname": "沧县" }, { "id": 121005, "regionname": "青县" }, { "id": 121006, "regionname": "东光县" }, { "id": 121007, "regionname": "海兴县" }, { "id": 121008, "regionname": "盐山县" }, { "id": 121009, "regionname": "肃宁县" }, { "id": 121010, "regionname": "南皮县" }, { "id": 121011, "regionname": "吴桥县" }, { "id": 121012, "regionname": "献县" }, { "id": 121013, "regionname": "孟村县" }, { "id": 121014, "regionname": "泊头市" }, { "id": 121015, "regionname": "任丘市" }, { "id": 121016, "regionname": "黄骅市" }, { "id": 121017, "regionname": "河间市" }] }, { "id": 1211, "cityname": "邯郸市", "regions": [{ "id": 121102, "regionname": "邯山区" }, { "id": 121103, "regionname": "丛台区" }, { "id": 121104, "regionname": "复兴区" }, { "id": 121105, "regionname": "峰峰矿区" }, { "id": 121106, "regionname": "邯郸县" }, { "id": 121107, "regionname": "临漳县" }, { "id": 121108, "regionname": "成安县" }, { "id": 121109, "regionname": "大名县" }, { "id": 121110, "regionname": "涉县" }, { "id": 121111, "regionname": "磁县" }, { "id": 121112, "regionname": "肥乡县" }, { "id": 121113, "regionname": "永年县" }, { "id": 121114, "regionname": "邱县" }, { "id": 121115, "regionname": "鸡泽县" }, { "id": 121116, "regionname": "广平县" }, { "id": 121117, "regionname": "馆陶县" }, { "id": 121118, "regionname": "魏县" }, { "id": 121119, "regionname": "曲周县" }, { "id": 121120, "regionname": "武安市" }] }] }, {
                "id": 13, "provincename": "内蒙古", "citys": [{ "id": 1301, "cityname": "呼和浩特市", "regions": [{ "id": 130102, "regionname": "新城区" }, { "id": 130103, "regionname": "回民区" }, { "id": 130104, "regionname": "玉泉区" }, { "id": 130105, "regionname": "赛罕区" }, { "id": 130106, "regionname": "土默特左旗" }, { "id": 130107, "regionname": "托克托县" }, { "id": 130108, "regionname": "和林格尔县" }, { "id": 130109, "regionname": "清水河县" }, { "id": 130110, "regionname": "武川县" }] }, { "id": 1302, "cityname": "包头市", "regions": [{ "id": 130202, "regionname": "东河区" }, { "id": 130203, "regionname": "昆都仑区" }, { "id": 130204, "regionname": "青山区" }, { "id": 130205, "regionname": "石拐区" }, { "id": 130206, "regionname": "白云鄂博" }, { "id": 130207, "regionname": "九原区" }, { "id": 130208, "regionname": "土默特右旗" }, { "id": 130209, "regionname": "固阳县" }, { "id": 130210, "regionname": "达茂联合旗" }, { "id": 130211, "regionname": "高新区" }] }, { "id": 1303, "cityname": "呼伦贝尔市", "regions": [{ "id": 130302, "regionname": "海拉尔区" }, { "id": 130303, "regionname": "阿荣旗" }, { "id": 130304, "regionname": "莫旗" }, { "id": 130305, "regionname": "鄂伦春自治旗" }, { "id": 130306, "regionname": "鄂温克旗" }, { "id": 130307, "regionname": "陈巴尔虎旗" }, { "id": 130308, "regionname": "新巴尔虎左旗" }, { "id": 130309, "regionname": "新巴尔虎右旗" }, { "id": 130311, "regionname": "牙克石市" }, { "id": 130312, "regionname": "扎兰屯市" }, { "id": 130313, "regionname": "额尔古纳市" }, { "id": 130314, "regionname": "根河市" }] }, { "id": 1304, "cityname": "兴安盟", "regions": [{ "id": 130401, "regionname": "乌兰浩特市" }, { "id": 130402, "regionname": "阿尔山市" }, { "id": 130403, "regionname": "科右前旗" }, { "id": 130404, "regionname": "科右中旗" }, { "id": 130405, "regionname": "扎赉特旗" }, { "id": 130406, "regionname": "突泉县" }] }, { "id": 1305, "cityname": "通辽市", "regions": [{ "id": 130502, "regionname": "科尔沁区" }, { "id": 130503, "regionname": "科左中旗" }, { "id": 130504, "regionname": "科左后旗" }, { "id": 130505, "regionname": "开鲁县" }, { "id": 130506, "regionname": "库伦旗" }, { "id": 130507, "regionname": "奈曼旗" }, { "id": 130508, "regionname": "扎鲁特旗" }, { "id": 130509, "regionname": "霍林郭勒市" }] }, { "id": 1306, "cityname": "赤峰市", "regions": [{ "id": 130602, "regionname": "红山区" }, { "id": 130603, "regionname": "元宝山区" }, { "id": 130604, "regionname": "松山区" }, { "id": 130605, "regionname": "阿鲁科尔沁旗" }, { "id": 130606, "regionname": "巴林左旗" }, { "id": 130607, "regionname": "巴林右旗" }, { "id": 130608, "regionname": "林西县" }, { "id": 130609, "regionname": "克什克腾旗" }, { "id": 130610, "regionname": "翁牛特旗" }, { "id": 130611, "regionname": "喀喇沁旗" }, { "id": 130612, "regionname": "宁城县" }, { "id": 130613, "regionname": "敖汉旗" }] }, {
                        "id": 1307, "cityname": "锡林郭勒盟", "regions": [{ "id": 130702, "regionname": "锡林浩特市" }, { "id": 130703, "regionname": "阿巴嘎旗" }, { "id": 130704, "regionname": "苏尼特左旗" }, { "id": 130705, "regionname": "苏尼特右旗" }, { "id": 130706, "regionname": "东乌珠穆沁旗" }, { "id": 130707, "regionname": "西乌珠穆沁旗" }, {
                                "id": 130708,
                                "regionname": "太仆寺旗"
                            }, { "id": 130709, "regionname": "镶黄旗" }, { "id": 130710, "regionname": "正镶白旗" }, { "id": 130711, "regionname": "正蓝旗" }, { "id": 130712, "regionname": "多伦县" }]
                    }, { "id": 1308, "cityname": "乌兰察布市", "regions": [{ "id": 130802, "regionname": "集宁区" }, { "id": 130803, "regionname": "卓资县" }, { "id": 130804, "regionname": "化德县" }, { "id": 130805, "regionname": "商都县" }, { "id": 130806, "regionname": "兴和县" }, { "id": 130807, "regionname": "凉城县" }, { "id": 130808, "regionname": "察右前旗" }, { "id": 130809, "regionname": "察右中旗" }, { "id": 130810, "regionname": "察右后旗" }, { "id": 130811, "regionname": "四子王旗" }, { "id": 130812, "regionname": "丰镇市" }] }, { "id": 1309, "cityname": "鄂尔多斯市", "regions": [{ "id": 130902, "regionname": "东胜区" }, { "id": 130903, "regionname": "达拉特旗" }, { "id": 130904, "regionname": "准格尔旗" }, { "id": 130905, "regionname": "鄂托克前旗" }, { "id": 130906, "regionname": "鄂托克旗" }, { "id": 130907, "regionname": "杭锦旗" }, { "id": 130908, "regionname": "乌审旗" }, { "id": 130909, "regionname": "伊金霍洛旗" }] }, { "id": 1310, "cityname": "巴彦淖尔市", "regions": [{ "id": 131002, "regionname": "临河区" }, { "id": 131003, "regionname": "五原县" }, { "id": 131004, "regionname": "磴口县" }, { "id": 131005, "regionname": "乌拉特前旗" }, { "id": 131006, "regionname": "乌拉特中旗" }, { "id": 131007, "regionname": "乌拉特后旗" }, { "id": 131008, "regionname": "杭锦后旗" }] }, { "id": 1311, "cityname": "乌海市", "regions": [{ "id": 131102, "regionname": "海勃湾区" }, { "id": 131103, "regionname": "海南区" }, { "id": 131104, "regionname": "乌达区" }] }, { "id": 1312, "cityname": "阿拉善盟", "regions": [{ "id": 131201, "regionname": "阿拉善左旗" }, { "id": 131202, "regionname": "阿拉善右旗" }, { "id": 131203, "regionname": "额济纳旗" }] }]
            }, { "id": 14, "provincename": "山西省", "citys": [{ "id": 1401, "cityname": "太原市", "regions": [{ "id": 140102, "regionname": "小店区" }, { "id": 140103, "regionname": "迎泽区" }, { "id": 140104, "regionname": "杏花岭区" }, { "id": 140105, "regionname": "尖草坪区" }, { "id": 140106, "regionname": "万柏林区" }, { "id": 140107, "regionname": "晋源区" }, { "id": 140108, "regionname": "清徐县" }, { "id": 140109, "regionname": "阳曲县" }, { "id": 140110, "regionname": "娄烦县" }, { "id": 140111, "regionname": "古交市" }] }, { "id": 1402, "cityname": "大同市", "regions": [{ "id": 140202, "regionname": "城区" }, { "id": 140203, "regionname": "矿区" }, { "id": 140204, "regionname": "南郊区" }, { "id": 140205, "regionname": "新荣区" }, { "id": 140206, "regionname": "阳高县" }, { "id": 140207, "regionname": "天镇县" }, { "id": 140208, "regionname": "广灵县" }, { "id": 140209, "regionname": "灵丘县" }, { "id": 140210, "regionname": "浑源县" }, { "id": 140211, "regionname": "左云县" }, { "id": 140212, "regionname": "大同县" }] }, { "id": 1403, "cityname": "阳泉市", "regions": [{ "id": 140302, "regionname": "城区" }, { "id": 140303, "regionname": "矿区" }, { "id": 140304, "regionname": "郊区" }, { "id": 140305, "regionname": "平定县" }, { "id": 140306, "regionname": "盂县" }] }, { "id": 1404, "cityname": "长治市", "regions": [{ "id": 140402, "regionname": "城区" }, { "id": 140403, "regionname": "郊区" }, { "id": 140404, "regionname": "长治县" }, { "id": 140405, "regionname": "襄垣县" }, { "id": 140406, "regionname": "屯留县" }, { "id": 140407, "regionname": "平顺县" }, { "id": 140408, "regionname": "黎城县" }, { "id": 140409, "regionname": "壶关县" }, { "id": 140410, "regionname": "长子县" }, { "id": 140411, "regionname": "武乡县" }, { "id": 140412, "regionname": "沁县" }, { "id": 140413, "regionname": "沁源县" }, { "id": 140414, "regionname": "潞城市" }] }, { "id": 1405, "cityname": "晋城市", "regions": [{ "id": 140502, "regionname": "城区" }, { "id": 140503, "regionname": "沁水县" }, { "id": 140504, "regionname": "阳城县" }, { "id": 140505, "regionname": "陵川县" }, { "id": 140506, "regionname": "泽州县" }, { "id": 140507, "regionname": "高平市" }] }, { "id": 1406, "cityname": "朔州市", "regions": [{ "id": 140602, "regionname": "朔城区" }, { "id": 140603, "regionname": "平鲁区" }, { "id": 140604, "regionname": "山阴县" }, { "id": 140605, "regionname": "应县" }, { "id": 140606, "regionname": "右玉县" }, { "id": 140607, "regionname": "怀仁县" }] }, { "id": 1407, "cityname": "忻州市", "regions": [{ "id": 140702, "regionname": "忻府区" }, { "id": 140703, "regionname": "定襄县" }, { "id": 140704, "regionname": "五台县" }, { "id": 140705, "regionname": "代县" }, { "id": 140706, "regionname": "繁峙县" }, { "id": 140707, "regionname": "宁武县" }, { "id": 140708, "regionname": "静乐县" }, { "id": 140709, "regionname": "神池县" }, { "id": 140710, "regionname": "五寨县" }, { "id": 140711, "regionname": "岢岚县" }, { "id": 140712, "regionname": "河曲县" }, { "id": 140713, "regionname": "保德县" }, { "id": 140714, "regionname": "偏关县" }, { "id": 140715, "regionname": "原平市" }] }, { "id": 1408, "cityname": "晋中市", "regions": [{ "id": 140802, "regionname": "榆次区" }, { "id": 140803, "regionname": "榆社县" }, { "id": 140804, "regionname": "左权县" }, { "id": 140805, "regionname": "和顺县" }, { "id": 140806, "regionname": "昔阳县" }, { "id": 140807, "regionname": "寿阳县" }, { "id": 140808, "regionname": "太谷县" }, { "id": 140809, "regionname": "祁县" }, { "id": 140810, "regionname": "平遥县" }, { "id": 140811, "regionname": "灵石县" }, { "id": 140812, "regionname": "介休市" }] }, { "id": 1409, "cityname": "临汾市", "regions": [{ "id": 140902, "regionname": "尧都区" }, { "id": 140903, "regionname": "曲沃县" }, { "id": 140904, "regionname": "翼城县" }, { "id": 140905, "regionname": "襄汾县" }, { "id": 140906, "regionname": "洪洞县" }, { "id": 140907, "regionname": "古县" }, { "id": 140908, "regionname": "安泽县" }, { "id": 140909, "regionname": "浮山县" }, { "id": 140910, "regionname": "吉县" }, { "id": 140911, "regionname": "乡宁县" }, { "id": 140912, "regionname": "大宁县" }, { "id": 140913, "regionname": "隰县" }, { "id": 140914, "regionname": "永和县" }, { "id": 140915, "regionname": "蒲县" }, { "id": 140916, "regionname": "汾西县" }, { "id": 140917, "regionname": "侯马市" }, { "id": 140918, "regionname": "霍州市" }] }, { "id": 1410, "cityname": "吕梁市", "regions": [{ "id": 141002, "regionname": "离石区" }, { "id": 141003, "regionname": "文水县" }, { "id": 141004, "regionname": "交城县" }, { "id": 141005, "regionname": "兴县" }, { "id": 141006, "regionname": "临县" }, { "id": 141007, "regionname": "柳林县" }, { "id": 141008, "regionname": "石楼县" }, { "id": 141009, "regionname": "岚县" }, { "id": 141010, "regionname": "方山县" }, { "id": 141011, "regionname": "中阳县" }, { "id": 141012, "regionname": "交口县" }, { "id": 141013, "regionname": "孝义市" }, { "id": 141014, "regionname": "汾阳市" }] }, { "id": 1411, "cityname": "运城市", "regions": [{ "id": 141102, "regionname": "盐湖区" }, { "id": 141103, "regionname": "临猗县" }, { "id": 141104, "regionname": "万荣县" }, { "id": 141105, "regionname": "闻喜县" }, { "id": 141106, "regionname": "稷山县" }, { "id": 141107, "regionname": "新绛县" }, { "id": 141108, "regionname": "绛县" }, { "id": 141109, "regionname": "垣曲县" }, { "id": 141110, "regionname": "夏县" }, { "id": 141111, "regionname": "平陆县" }, { "id": 141112, "regionname": "芮城县" }, { "id": 141113, "regionname": "永济市" }, { "id": 141114, "regionname": "河津市" }] }] }, { "id": 20, "provincename": "辽宁省", "citys": [{ "id": 2001, "cityname": "沈阳市", "regions": [{ "id": 200102, "regionname": "和平区" }, { "id": 200103, "regionname": "沈河区" }, { "id": 200104, "regionname": "大东区" }, { "id": 200105, "regionname": "皇姑区" }, { "id": 200106, "regionname": "铁西区" }, { "id": 200107, "regionname": "苏家屯区" }, { "id": 200108, "regionname": "东陵区" }, { "id": 200109, "regionname": "沈北新区" }, { "id": 200110, "regionname": "于洪区" }, { "id": 200111, "regionname": "辽中县" }, { "id": 200112, "regionname": "康平县" }, { "id": 200113, "regionname": "法库县" }, { "id": 200114, "regionname": "新民市" }, { "id": 200115, "regionname": "浑南新区" }] }, { "id": 2002, "cityname": "大连市", "regions": [{ "id": 200202, "regionname": "中山区" }, { "id": 200203, "regionname": "西岗区" }, { "id": 200204, "regionname": "沙河口区" }, { "id": 200205, "regionname": "甘井子区" }, { "id": 200206, "regionname": "旅顺口区" }, { "id": 200207, "regionname": "金州区" }, { "id": 200208, "regionname": "长海县" }, { "id": 200209, "regionname": "瓦房店市" }, { "id": 200210, "regionname": "普兰店市" }, { "id": 200211, "regionname": "庄河市" }] }, { "id": 2003, "cityname": "鞍山市", "regions": [{ "id": 200302, "regionname": "铁东区" }, { "id": 200303, "regionname": "铁西区" }, { "id": 200304, "regionname": "立山区" }, { "id": 200305, "regionname": "千山区" }, { "id": 200306, "regionname": "台安县" }, { "id": 200307, "regionname": "岫岩县" }, { "id": 200308, "regionname": "海城市" }, { "id": 200309, "regionname": "高新区" }] }, { "id": 2004, "cityname": "锦州市", "regions": [{ "id": 200402, "regionname": "古塔区" }, { "id": 200403, "regionname": "凌河区" }, { "id": 200404, "regionname": "太和区" }, { "id": 200405, "regionname": "黑山县" }, { "id": 200406, "regionname": "义县" }, { "id": 200407, "regionname": "凌海市" }, { "id": 200408, "regionname": "北镇市" }] }, { "id": 2005, "cityname": "丹东市", "regions": [{ "id": 200502, "regionname": "元宝区" }, { "id": 200503, "regionname": "振兴区" }, { "id": 200504, "regionname": "振安区" }, { "id": 200505, "regionname": "宽甸县" }, { "id": 200506, "regionname": "东港市" }, { "id": 200507, "regionname": "凤城市" }] }, { "id": 2006, "cityname": "盘锦市", "regions": [{ "id": 200602, "regionname": "双台子区" }, { "id": 200603, "regionname": "兴隆台区" }, { "id": 200604, "regionname": "大洼县" }, { "id": 200605, "regionname": "盘山县" }] }, { "id": 2007, "cityname": "铁岭市", "regions": [{ "id": 200702, "regionname": "银州区" }, { "id": 200703, "regionname": "清河区" }, { "id": 200704, "regionname": "铁岭县" }, { "id": 200705, "regionname": "西丰县" }, { "id": 200706, "regionname": "昌图县" }, { "id": 200707, "regionname": "调兵山市" }, { "id": 200708, "regionname": "开原市" }] }, { "id": 2008, "cityname": "抚顺市", "regions": [{ "id": 200802, "regionname": "新抚区" }, { "id": 200803, "regionname": "东洲区" }, { "id": 200804, "regionname": "望花区" }, { "id": 200805, "regionname": "顺城区" }, { "id": 200806, "regionname": "抚顺县" }, { "id": 200807, "regionname": "新宾县" }, { "id": 200808, "regionname": "清原县" }] }, { "id": 2009, "cityname": "营口市", "regions": [{ "id": 200902, "regionname": "站前区" }, { "id": 200904, "regionname": "鲅鱼圈区" }, { "id": 200905, "regionname": "老边区" }, { "id": 200906, "regionname": "盖州市" }, { "id": 200907, "regionname": "大石桥市" }] }, { "id": 2010, "cityname": "辽阳市", "regions": [{ "id": 201002, "regionname": "白塔区" }, { "id": 201003, "regionname": "文圣区" }, { "id": 201004, "regionname": "宏伟区" }, { "id": 201005, "regionname": "弓长岭区" }, { "id": 201006, "regionname": "太子河区" }, { "id": 201007, "regionname": "辽阳县" }, { "id": 201008, "regionname": "灯塔市" }, { "id": 201009, "regionname": "高新区" }] }, { "id": 2011, "cityname": "阜新市", "regions": [{ "id": 201102, "regionname": "海州区" }, { "id": 201103, "regionname": "新邱区" }, { "id": 201104, "regionname": "太平区" }, { "id": 201105, "regionname": "清河门区" }, { "id": 201106, "regionname": "细河区" }, { "id": 201107, "regionname": "阜新县" }, { "id": 201108, "regionname": "彰武县" }] }, { "id": 2012, "cityname": "本溪市", "regions": [{ "id": 201202, "regionname": "平山区" }, { "id": 201203, "regionname": "溪湖区" }, { "id": 201204, "regionname": "明山区" }, { "id": 201205, "regionname": "南芬区" }, { "id": 201206, "regionname": "本溪县" }, { "id": 201207, "regionname": "桓仁县" }] }, { "id": 2013, "cityname": "朝阳市", "regions": [{ "id": 201302, "regionname": "双塔区" }, { "id": 201303, "regionname": "龙城区" }, { "id": 201304, "regionname": "朝阳县" }, { "id": 201305, "regionname": "建平县" }, { "id": 201306, "regionname": "喀左县" }, { "id": 201307, "regionname": "北票市" }, { "id": 201308, "regionname": "凌源市" }] }, { "id": 2014, "cityname": "葫芦岛市", "regions": [{ "id": 201402, "regionname": "连山区" }, { "id": 201403, "regionname": "龙港区" }, { "id": 201404, "regionname": "南票区" }, { "id": 201405, "regionname": "绥中县" }, { "id": 201406, "regionname": "建昌县" }, { "id": 201407, "regionname": "兴城市" }] }] }, {
                "id": 21, "provincename": "吉林省", "citys": [{
                        "id": 2101, "cityname": "长春市", "regions": [{ "id": 210102, "regionname": "南关区" }, {
                                "id": 210103, "regionname": "宽城区"
                            }, { "id": 210104, "regionname": "朝阳区" }, { "id": 210105, "regionname": "二道区" }, { "id": 210106, "regionname": "绿园区" }, { "id": 210107, "regionname": "双阳区" }, { "id": 210108, "regionname": "农安县" }, { "id": 210109, "regionname": "九台市" }, { "id": 210110, "regionname": "榆树市" }, { "id": 210111, "regionname": "德惠市" }]
                    }, { "id": 2102, "cityname": "吉林市", "regions": [{ "id": 210202, "regionname": "昌邑区" }, { "id": 210203, "regionname": "龙潭区" }, { "id": 210204, "regionname": "船营区" }, { "id": 210205, "regionname": "丰满区" }, { "id": 210206, "regionname": "永吉县" }, { "id": 210207, "regionname": "蛟河市" }, { "id": 210208, "regionname": "桦甸市" }, { "id": 210209, "regionname": "舒兰市" }, { "id": 210210, "regionname": "磐石市" }] }, { "id": 2103, "cityname": "四平市", "regions": [{ "id": 210302, "regionname": "铁西区" }, { "id": 210303, "regionname": "铁东区" }, { "id": 210304, "regionname": "梨树县" }, { "id": 210305, "regionname": "伊通县" }, { "id": 210306, "regionname": "公主岭市" }, { "id": 210307, "regionname": "双辽市" }] }, { "id": 2104, "cityname": "辽源市", "regions": [{ "id": 210402, "regionname": "龙山区" }, { "id": 210403, "regionname": "西安区" }, { "id": 210404, "regionname": "东丰县" }, { "id": 210405, "regionname": "东辽县" }] }, { "id": 2105, "cityname": "通化市", "regions": [{ "id": 210502, "regionname": "东昌区" }, { "id": 210503, "regionname": "二道江区" }, { "id": 210504, "regionname": "通化县" }, { "id": 210505, "regionname": "辉南县" }, { "id": 210506, "regionname": "柳河县" }, { "id": 210507, "regionname": "梅河口市" }, { "id": 210508, "regionname": "集安市" }] }, { "id": 2106, "cityname": "白山市", "regions": [{ "id": 210602, "regionname": "八道江区" }, { "id": 210603, "regionname": "江源区" }, { "id": 210604, "regionname": "抚松县" }, { "id": 210605, "regionname": "靖宇县" }, { "id": 210606, "regionname": "长白县" }, { "id": 210607, "regionname": "临江市" }] }, { "id": 2107, "cityname": "松原市", "regions": [{ "id": 210702, "regionname": "宁江区" }, { "id": 210703, "regionname": "前郭县" }, { "id": 210704, "regionname": "长岭县" }, { "id": 210705, "regionname": "乾安县" }, { "id": 210706, "regionname": "扶余县" }] }, { "id": 2108, "cityname": "白城市", "regions": [{ "id": 210802, "regionname": "洮北区" }, { "id": 210803, "regionname": "镇赉县" }, { "id": 210804, "regionname": "通榆县" }, { "id": 210805, "regionname": "洮南市" }, { "id": 210806, "regionname": "大安市" }] }, { "id": 2109, "cityname": "延边州", "regions": [{ "id": 210901, "regionname": "延吉市" }, { "id": 210902, "regionname": "图们市" }, { "id": 210903, "regionname": "敦化市" }, { "id": 210904, "regionname": "珲春市" }, { "id": 210905, "regionname": "龙井市" }, { "id": 210906, "regionname": "和龙市" }, { "id": 210907, "regionname": "汪清县" }, { "id": 210908, "regionname": "安图县" }, { "id": 210909, "regionname": "高新区" }] }]
            }, { "id": 22, "provincename": "黑龙江省", "citys": [{ "id": 2201, "cityname": "哈尔滨市", "regions": [{ "id": 220102, "regionname": "道里区" }, { "id": 220103, "regionname": "南岗区" }, { "id": 220104, "regionname": "道外区" }, { "id": 220105, "regionname": "平房区" }, { "id": 220106, "regionname": "松北区" }, { "id": 220107, "regionname": "香坊区" }, { "id": 220108, "regionname": "呼兰区" }, { "id": 220109, "regionname": "阿城区" }, { "id": 220110, "regionname": "依兰县" }, { "id": 220111, "regionname": "方正县" }, { "id": 220112, "regionname": "宾县" }, { "id": 220113, "regionname": "巴彦县" }, { "id": 220114, "regionname": "木兰县" }, { "id": 220115, "regionname": "通河县" }, { "id": 220116, "regionname": "延寿县" }, { "id": 220117, "regionname": "双城市" }, { "id": 220118, "regionname": "尚志市" }, { "id": 220119, "regionname": "五常市" }] }, { "id": 2202, "cityname": "齐齐哈尔市", "regions": [{ "id": 220202, "regionname": "龙沙区" }, { "id": 220203, "regionname": "建华区" }, { "id": 220204, "regionname": "铁锋区" }, { "id": 220205, "regionname": "昂昂溪区" }, { "id": 220206, "regionname": "富拉尔基区" }, { "id": 220207, "regionname": "碾子山区" }, { "id": 220208, "regionname": "梅里斯区" }, { "id": 220209, "regionname": "龙江县" }, { "id": 220210, "regionname": "依安县" }, { "id": 220211, "regionname": "泰来县" }, { "id": 220212, "regionname": "甘南县" }, { "id": 220213, "regionname": "富裕县" }, { "id": 220214, "regionname": "克山县" }, { "id": 220215, "regionname": "克东县" }, { "id": 220216, "regionname": "拜泉县" }, { "id": 220217, "regionname": "讷河市" }, { "id": 220218, "regionname": "高新区" }] }, { "id": 2203, "cityname": "鸡西市", "regions": [{ "id": 220302, "regionname": "鸡冠区" }, { "id": 220303, "regionname": "恒山区" }, { "id": 220304, "regionname": "滴道区" }, { "id": 220305, "regionname": "梨树区" }, { "id": 220306, "regionname": "城子河区" }, { "id": 220307, "regionname": "麻山区" }, { "id": 220308, "regionname": "鸡东县" }, { "id": 220309, "regionname": "虎林市" }, { "id": 220310, "regionname": "密山市" }] }, { "id": 2204, "cityname": "鹤岗市", "regions": [{ "id": 220402, "regionname": "向阳区" }, { "id": 220403, "regionname": "工农区" }, { "id": 220404, "regionname": "南山区" }, { "id": 220405, "regionname": "兴安区" }, { "id": 220406, "regionname": "东山区" }, { "id": 220407, "regionname": "兴山区" }, { "id": 220408, "regionname": "萝北县" }, { "id": 220409, "regionname": "绥滨县" }] }, { "id": 2205, "cityname": "双鸭山市", "regions": [{ "id": 220502, "regionname": "尖山区" }, { "id": 220503, "regionname": "岭东区" }, { "id": 220504, "regionname": "四方台区" }, { "id": 220505, "regionname": "宝山区" }, { "id": 220506, "regionname": "集贤县" }, { "id": 220507, "regionname": "友谊县" }, { "id": 220508, "regionname": "宝清县" }, { "id": 220509, "regionname": "饶河县" }] }, { "id": 2206, "cityname": "大庆市", "regions": [{ "id": 220602, "regionname": "萨尔图区" }, { "id": 220603, "regionname": "龙凤区" }, { "id": 220604, "regionname": "让胡路区" }, { "id": 220605, "regionname": "红岗区" }, { "id": 220606, "regionname": "大同区" }, { "id": 220607, "regionname": "肇州县" }, { "id": 220608, "regionname": "肇源县" }, { "id": 220609, "regionname": "林甸县" }, { "id": 220610, "regionname": "杜尔伯特县" }, { "id": 220611, "regionname": "高新区" }] }, { "id": 2207, "cityname": "伊春市", "regions": [{ "id": 220702, "regionname": "伊春区" }, { "id": 220703, "regionname": "南岔区" }, { "id": 220704, "regionname": "友好区" }, { "id": 220705, "regionname": "西林区" }, { "id": 220706, "regionname": "翠峦区" }, { "id": 220707, "regionname": "新青区" }, { "id": 220708, "regionname": "美溪区" }, { "id": 220709, "regionname": "金山屯区" }, { "id": 220710, "regionname": "五营区" }, { "id": 220711, "regionname": "乌马河区" }, { "id": 220712, "regionname": "汤旺河区" }, { "id": 220713, "regionname": "带岭区" }, { "id": 220714, "regionname": "乌伊岭区" }, { "id": 220715, "regionname": "红星区" }, { "id": 220716, "regionname": "上甘岭区" }, { "id": 220717, "regionname": "嘉荫县" }, { "id": 220718, "regionname": "铁力市" }] }, { "id": 2208, "cityname": "佳木斯市", "regions": [{ "id": 220802, "regionname": "向阳区" }, { "id": 220803, "regionname": "前进区" }, { "id": 220804, "regionname": "东风区" }, { "id": 220805, "regionname": "郊区" }, { "id": 220806, "regionname": "桦南县" }, { "id": 220807, "regionname": "桦川县" }, { "id": 220808, "regionname": "汤原县" }, { "id": 220809, "regionname": "抚远县" }, { "id": 220810, "regionname": "同江市" }, { "id": 220811, "regionname": "富锦市" }] }, { "id": 2209, "cityname": "七台河市", "regions": [{ "id": 220902, "regionname": "新兴区" }, { "id": 220903, "regionname": "桃山区" }, { "id": 220904, "regionname": "茄子河区" }, { "id": 220905, "regionname": "勃利县" }] }, { "id": 2210, "cityname": "牡丹江市", "regions": [{ "id": 221002, "regionname": "东安区" }, { "id": 221003, "regionname": "阳明区" }, { "id": 221004, "regionname": "爱民区" }, { "id": 221005, "regionname": "西安区" }, { "id": 221006, "regionname": "东宁县" }, { "id": 221007, "regionname": "林口县" }, { "id": 221008, "regionname": "绥芬河市" }, { "id": 221009, "regionname": "海林市" }, { "id": 221010, "regionname": "宁安市" }, { "id": 221011, "regionname": "穆棱市" }] }, { "id": 2211, "cityname": "黑河市", "regions": [{ "id": 221102, "regionname": "爱辉区" }, { "id": 221103, "regionname": "嫩江县" }, { "id": 221104, "regionname": "逊克县" }, { "id": 221105, "regionname": "孙吴县" }, { "id": 221106, "regionname": "北安市" }, { "id": 221107, "regionname": "五大连池市" }] }, { "id": 2212, "cityname": "绥化市", "regions": [{ "id": 221202, "regionname": "北林区" }, { "id": 221203, "regionname": "望奎县" }, { "id": 221204, "regionname": "兰西县" }, { "id": 221205, "regionname": "青冈县" }, { "id": 221206, "regionname": "庆安县" }, { "id": 221207, "regionname": "明水县" }, { "id": 221208, "regionname": "绥棱县" }, { "id": 221209, "regionname": "安达市" }, { "id": 221210, "regionname": "肇东市" }, { "id": 221211, "regionname": "海伦市" }] }, { "id": 2213, "cityname": "大兴安岭地区", "regions": [{ "id": 221301, "regionname": "加格达奇区" }, { "id": 221302, "regionname": "松岭区" }, { "id": 221303, "regionname": "新林区" }, { "id": 221304, "regionname": "呼中区" }, { "id": 221305, "regionname": "呼玛县" }, { "id": 221306, "regionname": "塔河县" }, { "id": 221307, "regionname": "漠河县" }] }] }, { "id": 30, "provincename": "上海市", "citys": [{ "id": 3001, "cityname": "上海市", "regions": [{ "id": 300101, "regionname": "宝山区" }, { "id": 300102, "regionname": "金山区" }, { "id": 300104, "regionname": "长宁区" }, { "id": 300105, "regionname": "静安区" }, { "id": 300106, "regionname": "青浦区" }, { "id": 300107, "regionname": "崇明县" }, { "id": 300109, "regionname": "松江区" }, { "id": 300110, "regionname": "奉贤区" }, { "id": 300111, "regionname": "浦东新区" }, { "id": 300112, "regionname": "杨浦区" }, { "id": 300113, "regionname": "虹口区" }, { "id": 300114, "regionname": "普陀区" }, { "id": 300115, "regionname": "闸北区" }, { "id": 300116, "regionname": "黄浦区" }, { "id": 300117, "regionname": "闵行区" }, { "id": 300118, "regionname": "徐汇区" }, { "id": 300119, "regionname": "嘉定区" }] }] }, {
                "id": 31, "provincename": "江苏省", "citys": [{ "id": 3101, "cityname": "南京市", "regions": [{ "id": 310102, "regionname": "玄武区" }, { "id": 310103, "regionname": "白下区" }, { "id": 310104, "regionname": "秦淮区" }, { "id": 310105, "regionname": "建邺区" }, { "id": 310106, "regionname": "鼓楼区" }, { "id": 310107, "regionname": "下关区" }, { "id": 310108, "regionname": "浦口区" }, { "id": 310109, "regionname": "栖霞区" }, { "id": 310110, "regionname": "雨花台区" }, { "id": 310111, "regionname": "江宁区" }, { "id": 310112, "regionname": "六合区" }, { "id": 310113, "regionname": "溧水县" }, { "id": 310114, "regionname": "高淳县" }] }, { "id": 3102, "cityname": "苏州市", "regions": [{ "id": 310202, "regionname": "沧浪区" }, { "id": 310203, "regionname": "平江区" }, { "id": 310204, "regionname": "金阊区" }, { "id": 310205, "regionname": "虎丘区" }, { "id": 310206, "regionname": "吴中区" }, { "id": 310207, "regionname": "相城区" }, { "id": 310208, "regionname": "常熟市" }, { "id": 310209, "regionname": "张家港市" }, { "id": 310210, "regionname": "昆山市" }, { "id": 310211, "regionname": "吴江市" }, { "id": 310212, "regionname": "太仓市" }, { "id": 310213, "regionname": "工业园区" }, { "id": 310214, "regionname": "高新区" }] }, { "id": 3103, "cityname": "无锡市", "regions": [{ "id": 310302, "regionname": "崇安区" }, { "id": 310303, "regionname": "南长区" }, { "id": 310304, "regionname": "北塘区" }, { "id": 310305, "regionname": "锡山区" }, { "id": 310306, "regionname": "惠山区" }, { "id": 310307, "regionname": "滨湖区" }, { "id": 310308, "regionname": "江阴市" }, { "id": 310309, "regionname": "宜兴市" }, { "id": 310310, "regionname": "高新区" }] }, { "id": 3104, "cityname": "镇江市", "regions": [{ "id": 310402, "regionname": "京口区" }, { "id": 310403, "regionname": "润州区" }, { "id": 310404, "regionname": "丹徒区" }, { "id": 310405, "regionname": "丹阳市" }, { "id": 310406, "regionname": "扬中市" }, { "id": 310407, "regionname": "句容市" }] }, { "id": 3105, "cityname": "扬州市", "regions": [{ "id": 310502, "regionname": "广陵区" }, { "id": 310503, "regionname": "邗江区" }, { "id": 310505, "regionname": "宝应县" }, { "id": 310506, "regionname": "仪征市" }, { "id": 310507, "regionname": "高邮市" }, { "id": 310508, "regionname": "江都区" }] }, {
                        "id": 3106, "cityname": "南通市", "regions": [{ "id": 310602, "regionname": "崇川区" }, { "id": 310603, "regionname": "港闸区" }, { "id": 310604, "regionname": "海安县" }, { "id": 310605, "regionname": "如东县" }, { "id": 310606, "regionname": "启东市" }, { "id": 310607, "regionname": "如皋市" },
                            { "id": 310608, "regionname": "通州市" }, { "id": 310609, "regionname": "海门市" }]
                    }, { "id": 3107, "cityname": "常州市", "regions": [{ "id": 310702, "regionname": "天宁区" }, { "id": 310703, "regionname": "钟楼区" }, { "id": 310704, "regionname": "戚墅堰区" }, { "id": 310705, "regionname": "新北区" }, { "id": 310706, "regionname": "武进区" }, { "id": 310707, "regionname": "溧阳市" }, { "id": 310708, "regionname": "金坛市" }] }, { "id": 3108, "cityname": "徐州市", "regions": [{ "id": 310802, "regionname": "鼓楼区" }, { "id": 310803, "regionname": "云龙区" }, { "id": 310804, "regionname": "九里区" }, { "id": 310805, "regionname": "贾汪区" }, { "id": 310806, "regionname": "泉山区" }, { "id": 310807, "regionname": "丰县" }, { "id": 310808, "regionname": "沛县" }, { "id": 310809, "regionname": "铜山县" }, { "id": 310810, "regionname": "睢宁县" }, { "id": 310811, "regionname": "新沂市" }, { "id": 310812, "regionname": "邳州市" }] }, { "id": 3109, "cityname": "连云港市", "regions": [{ "id": 310902, "regionname": "连云区" }, { "id": 310903, "regionname": "新浦区" }, { "id": 310904, "regionname": "海州区" }, { "id": 310905, "regionname": "赣榆县" }, { "id": 310906, "regionname": "东海县" }, { "id": 310907, "regionname": "灌云县" }, { "id": 310908, "regionname": "灌南县" }] }, { "id": 3110, "cityname": "盐城市", "regions": [{ "id": 311002, "regionname": "亭湖区" }, { "id": 311003, "regionname": "盐都区" }, { "id": 311004, "regionname": "响水县" }, { "id": 311005, "regionname": "滨海县" }, { "id": 311006, "regionname": "阜宁县" }, { "id": 311007, "regionname": "射阳县" }, { "id": 311008, "regionname": "建湖县" }, { "id": 311009, "regionname": "东台市" }, { "id": 311010, "regionname": "大丰市" }] }, { "id": 3111, "cityname": "淮安市", "regions": [{ "id": 311102, "regionname": "清河区" }, { "id": 311103, "regionname": "楚州区" }, { "id": 311104, "regionname": "淮阴区" }, { "id": 311105, "regionname": "清浦区" }, { "id": 311106, "regionname": "涟水县" }, { "id": 311107, "regionname": "洪泽县" }, { "id": 311108, "regionname": "盱眙县" }, { "id": 311109, "regionname": "金湖县" }] }, { "id": 3112, "cityname": "泰州市", "regions": [{ "id": 311202, "regionname": "海陵区" }, { "id": 311203, "regionname": "高港区" }, { "id": 311204, "regionname": "兴化市" }, { "id": 311205, "regionname": "靖江市" }, { "id": 311206, "regionname": "泰兴市" }, { "id": 311207, "regionname": "姜堰市" }, { "id": 311208, "regionname": "高新区" }] }, { "id": 3113, "cityname": "宿迁市", "regions": [{ "id": 311302, "regionname": "宿城区" }, { "id": 311303, "regionname": "宿豫区" }, { "id": 311304, "regionname": "沭阳县" }, { "id": 311305, "regionname": "泗阳县" }, { "id": 311306, "regionname": "泗洪县" }] }]
            }, { "id": 32, "provincename": "山东省", "citys": [{ "id": 3201, "cityname": "济南市", "regions": [{ "id": 320102, "regionname": "历下区" }, { "id": 320103, "regionname": "市中区" }, { "id": 320104, "regionname": "槐荫区" }, { "id": 320105, "regionname": "天桥区" }, { "id": 320106, "regionname": "历城区" }, { "id": 320107, "regionname": "长清区" }, { "id": 320108, "regionname": "平阴县" }, { "id": 320109, "regionname": "济阳县" }, { "id": 320110, "regionname": "商河县" }, { "id": 320111, "regionname": "章丘市" }, { "id": 320112, "regionname": "高新区" }] }, { "id": 3202, "cityname": "青岛市", "regions": [{ "id": 320202, "regionname": "市南区" }, { "id": 320203, "regionname": "市北区" }, { "id": 320204, "regionname": "四方区" }, { "id": 320205, "regionname": "黄岛区" }, { "id": 320206, "regionname": "崂山区" }, { "id": 320207, "regionname": "李沧区" }, { "id": 320208, "regionname": "城阳区" }, { "id": 320209, "regionname": "胶州市" }, { "id": 320210, "regionname": "即墨市" }, { "id": 320211, "regionname": "平度市" }, { "id": 320212, "regionname": "胶南市" }, { "id": 320213, "regionname": "莱西市" }] }, { "id": 3203, "cityname": "烟台市", "regions": [{ "id": 320302, "regionname": "芝罘区" }, { "id": 320303, "regionname": "福山区" }, { "id": 320304, "regionname": "牟平区" }, { "id": 320305, "regionname": "莱山区" }, { "id": 320306, "regionname": "长岛县" }, { "id": 320307, "regionname": "龙口市" }, { "id": 320308, "regionname": "莱阳市" }, { "id": 320309, "regionname": "莱州市" }, { "id": 320310, "regionname": "蓬莱市" }, { "id": 320311, "regionname": "招远市" }, { "id": 320312, "regionname": "栖霞市" }, { "id": 320313, "regionname": "海阳市" }, { "id": 320314, "regionname": "高新区" }] }, { "id": 3204, "cityname": "淄博市", "regions": [{ "id": 320402, "regionname": "淄川区" }, { "id": 320403, "regionname": "张店区" }, { "id": 320404, "regionname": "博山区" }, { "id": 320405, "regionname": "临淄区" }, { "id": 320406, "regionname": "周村区" }, { "id": 320407, "regionname": "桓台县" }, { "id": 320408, "regionname": "高青县" }, { "id": 320409, "regionname": "沂源县" }, { "id": 320410, "regionname": "高新区" }] }, { "id": 3205, "cityname": "泰安市", "regions": [{ "id": 320502, "regionname": "泰山区" }, { "id": 320503, "regionname": "岱岳区" }, { "id": 320504, "regionname": "宁阳县" }, { "id": 320505, "regionname": "东平县" }, { "id": 320506, "regionname": "新泰市" }, { "id": 320507, "regionname": "肥城市" }] }, { "id": 3206, "cityname": "潍坊市", "regions": [{ "id": 320602, "regionname": "潍城区" }, { "id": 320603, "regionname": "寒亭区" }, { "id": 320604, "regionname": "坊子区" }, { "id": 320605, "regionname": "奎文区" }, { "id": 320606, "regionname": "临朐县" }, { "id": 320607, "regionname": "昌乐县" }, { "id": 320608, "regionname": "青州市" }, { "id": 320609, "regionname": "诸城市" }, { "id": 320610, "regionname": "寿光市" }, { "id": 320611, "regionname": "安丘市" }, { "id": 320612, "regionname": "高密市" }, { "id": 320613, "regionname": "昌邑市" }] }, { "id": 3207, "cityname": "济宁市", "regions": [{ "id": 320702, "regionname": "市中区" }, { "id": 320703, "regionname": "任城区" }, { "id": 320704, "regionname": "微山县" }, { "id": 320705, "regionname": "鱼台县" }, { "id": 320706, "regionname": "金乡县" }, { "id": 320707, "regionname": "嘉祥县" }, { "id": 320708, "regionname": "汶上县" }, { "id": 320709, "regionname": "泗水县" }, { "id": 320710, "regionname": "梁山县" }, { "id": 320711, "regionname": "曲阜市" }, { "id": 320712, "regionname": "兖州市" }, { "id": 320713, "regionname": "邹城市" }, { "id": 320714, "regionname": "高新区" }] }, { "id": 3208, "cityname": "枣庄市", "regions": [{ "id": 320802, "regionname": "市中区" }, { "id": 320803, "regionname": "薛城区" }, { "id": 320804, "regionname": "峄城区" }, { "id": 320805, "regionname": "台儿庄区" }, { "id": 320806, "regionname": "山亭区" }, { "id": 320807, "regionname": "滕州市" }, { "id": 320808, "regionname": "高新区" }] }, { "id": 3209, "cityname": "德州市", "regions": [{ "id": 320902, "regionname": "德城区" }, { "id": 320903, "regionname": "陵县" }, { "id": 320904, "regionname": "宁津县" }, { "id": 320905, "regionname": "庆云县" }, { "id": 320906, "regionname": "临邑县" }, { "id": 320907, "regionname": "齐河县" }, { "id": 320908, "regionname": "平原县" }, { "id": 320909, "regionname": "夏津县" }, { "id": 320910, "regionname": "武城县" }, { "id": 320911, "regionname": "乐陵市" }, { "id": 320912, "regionname": "禹城市" }] }, { "id": 3210, "cityname": "威海市", "regions": [{ "id": 321002, "regionname": "环翠区" }, { "id": 321003, "regionname": "文登市" }, { "id": 321004, "regionname": "荣成市" }, { "id": 321005, "regionname": "乳山市" }] }, { "id": 3211, "cityname": "日照市", "regions": [{ "id": 321102, "regionname": "东港区" }, { "id": 321103, "regionname": "岚山区" }, { "id": 321104, "regionname": "五莲县" }, { "id": 321105, "regionname": "莒县" }] }, { "id": 3212, "cityname": "莱芜市", "regions": [{ "id": 321202, "regionname": "莱城区" }, { "id": 321203, "regionname": "钢城区" }] }, { "id": 3213, "cityname": "滨州市", "regions": [{ "id": 321302, "regionname": "滨城区" }, { "id": 321303, "regionname": "惠民县" }, { "id": 321304, "regionname": "阳信县" }, { "id": 321305, "regionname": "无棣县" }, { "id": 321306, "regionname": "沾化县" }, { "id": 321307, "regionname": "博兴县" }, { "id": 321308, "regionname": "邹平县" }] }, { "id": 3214, "cityname": "东营市", "regions": [{ "id": 321402, "regionname": "东营区" }, { "id": 321403, "regionname": "河口区" }, { "id": 321404, "regionname": "垦利县" }, { "id": 321405, "regionname": "利津县" }, { "id": 321406, "regionname": "广饶县" }] }, { "id": 3215, "cityname": "聊城市", "regions": [{ "id": 321502, "regionname": "东昌府区" }, { "id": 321503, "regionname": "阳谷县" }, { "id": 321504, "regionname": "莘县" }, { "id": 321505, "regionname": "茌平县" }, { "id": 321506, "regionname": "东阿县" }, { "id": 321507, "regionname": "冠县" }, { "id": 321508, "regionname": "高唐县" }, { "id": 321509, "regionname": "临清市" }, { "id": 321510, "regionname": "高新区" }] }, { "id": 3216, "cityname": "菏泽市", "regions": [{ "id": 321602, "regionname": "牡丹区" }, { "id": 321603, "regionname": "曹县" }, { "id": 321604, "regionname": "单县" }, { "id": 321605, "regionname": "成武县" }, { "id": 321606, "regionname": "巨野县" }, { "id": 321607, "regionname": "郓城县" }, { "id": 321608, "regionname": "鄄城县" }, { "id": 321609, "regionname": "定陶县" }, { "id": 321610, "regionname": "东明县" }] }, { "id": 3217, "cityname": "临沂市", "regions": [{ "id": 321702, "regionname": "兰山区" }, { "id": 321703, "regionname": "罗庄区" }, { "id": 321704, "regionname": "河东区" }, { "id": 321705, "regionname": "沂南县" }, { "id": 321706, "regionname": "郯城县" }, { "id": 321707, "regionname": "沂水县" }, { "id": 321708, "regionname": "苍山县" }, { "id": 321709, "regionname": "费县" }, { "id": 321710, "regionname": "平邑县" }, { "id": 321711, "regionname": "莒南县" }, { "id": 321712, "regionname": "蒙阴县" }, { "id": 321713, "regionname": "临沭县" }] }] }, {
                "id": 33, "provincename": "安徽省", "citys": [{ "id": 3301, "cityname": "合肥市", "regions": [{ "id": 330102, "regionname": "瑶海区" }, { "id": 330103, "regionname": "庐阳区" }, { "id": 330104, "regionname": "蜀山区" }, { "id": 330105, "regionname": "包河区" }, { "id": 330106, "regionname": "长丰县" }, { "id": 330107, "regionname": "肥东县" }, { "id": 330108, "regionname": "肥西县" }] }, { "id": 3302, "cityname": "芜湖市", "regions": [{ "id": 330202, "regionname": "镜湖区" }, { "id": 330203, "regionname": "弋江区" }, { "id": 330204, "regionname": "鸠江区" }, { "id": 330205, "regionname": "三山区" }, { "id": 330206, "regionname": "芜湖县" }, { "id": 330207, "regionname": "繁昌县" }, { "id": 330208, "regionname": "南陵县" }] }, { "id": 3303, "cityname": "蚌埠市", "regions": [{ "id": 330302, "regionname": "龙子湖区" }, { "id": 330303, "regionname": "蚌山区" }, { "id": 330304, "regionname": "禹会区" }, { "id": 330305, "regionname": "淮上区" }, { "id": 330306, "regionname": "怀远县" }, { "id": 330307, "regionname": "五河县" }, { "id": 330308, "regionname": "固镇县" }, { "id": 330309, "regionname": "高新区" }] }, { "id": 3304, "cityname": "马鞍山市", "regions": [{ "id": 330402, "regionname": "金家庄区" }, { "id": 330403, "regionname": "花山区" }, { "id": 330404, "regionname": "雨山区" }, { "id": 330405, "regionname": "当涂县" }] }, { "id": 3305, "cityname": "淮北市", "regions": [{ "id": 330502, "regionname": "杜集区" }, { "id": 330503, "regionname": "相山区" }, { "id": 330504, "regionname": "烈山区" }, { "id": 330505, "regionname": "濉溪县" }] }, { "id": 3306, "cityname": "铜陵市", "regions": [{ "id": 330602, "regionname": "铜官山区" }, { "id": 330603, "regionname": "狮子山区" }, { "id": 330604, "regionname": "郊区" }, { "id": 330605, "regionname": "铜陵县" }] }, { "id": 3307, "cityname": "安庆市", "regions": [{ "id": 330702, "regionname": "迎江区" }, { "id": 330703, "regionname": "大观区" }, { "id": 330704, "regionname": "宜秀区" }, { "id": 330705, "regionname": "怀宁县" }, { "id": 330706, "regionname": "枞阳县" }, { "id": 330707, "regionname": "潜山县" }, { "id": 330708, "regionname": "太湖县" }, { "id": 330709, "regionname": "宿松县" }, { "id": 330710, "regionname": "望江县" }, { "id": 330711, "regionname": "岳西县" }, { "id": 330712, "regionname": "桐城市" }] }, { "id": 3308, "cityname": "黄山市", "regions": [{ "id": 330802, "regionname": "屯溪区" }, { "id": 330803, "regionname": "黄山区" }, { "id": 330804, "regionname": "徽州区" }, { "id": 330805, "regionname": "歙县" }, { "id": 330806, "regionname": "休宁县" }, { "id": 330807, "regionname": "黟县" }, { "id": 330808, "regionname": "祁门县" }] }, { "id": 3309, "cityname": "滁州市", "regions": [{ "id": 330902, "regionname": "琅琊区" }, { "id": 330903, "regionname": "南谯区" }, { "id": 330904, "regionname": "来安县" }, { "id": 330905, "regionname": "全椒县" }, { "id": 330906, "regionname": "定远县" }, { "id": 330907, "regionname": "凤阳县" }, { "id": 330908, "regionname": "天长市" }, { "id": 330909, "regionname": "明光市" }] }, { "id": 3310, "cityname": "宿州市", "regions": [{ "id": 331002, "regionname": "埇桥区" }, { "id": 331003, "regionname": "砀山县" }, { "id": 331004, "regionname": "萧县" }, { "id": 331005, "regionname": "灵璧县" }, { "id": 331006, "regionname": "泗县" }] }, { "id": 3311, "cityname": "池州市", "regions": [{ "id": 331102, "regionname": "贵池区" }, { "id": 331103, "regionname": "东至县" }, { "id": 331104, "regionname": "石台县" }, { "id": 331105, "regionname": "青阳县" }] }, {
                        "id": 3312, "cityname": "淮南市", "regions": [{ "id": 331202, "regionname": "大通区" }, { "id": 331203, "regionname": "田家庵区" }, { "id": 331204, "regionname": "谢家集区" },
                            { "id": 331205, "regionname": "八公山区" }, { "id": 331206, "regionname": "潘集区" }, { "id": 331207, "regionname": "凤台县" }]
                    }, { "id": 3313, "cityname": "巢湖市", "regions": [{ "id": 331302, "regionname": "居巢区" }, { "id": 331303, "regionname": "庐江县" }, { "id": 331304, "regionname": "无为县" }, { "id": 331305, "regionname": "含山县" }, { "id": 331306, "regionname": "和县" }] }, { "id": 3314, "cityname": "阜阳市", "regions": [{ "id": 331402, "regionname": "颍州区" }, { "id": 331403, "regionname": "颍东区" }, { "id": 331404, "regionname": "颍泉区" }, { "id": 331405, "regionname": "临泉县" }, { "id": 331406, "regionname": "太和县" }, { "id": 331407, "regionname": "阜南县" }, { "id": 331408, "regionname": "颍上县" }, { "id": 331409, "regionname": "界首市" }] }, { "id": 3315, "cityname": "六安市", "regions": [{ "id": 331502, "regionname": "金安区" }, { "id": 331503, "regionname": "裕安区" }, { "id": 331504, "regionname": "寿县" }, { "id": 331505, "regionname": "霍邱县" }, { "id": 331506, "regionname": "舒城县" }, { "id": 331507, "regionname": "金寨县" }, { "id": 331508, "regionname": "霍山县" }] }, { "id": 3316, "cityname": "宣城市", "regions": [{ "id": 331602, "regionname": "宣州区" }, { "id": 331603, "regionname": "郎溪县" }, { "id": 331604, "regionname": "广德县" }, { "id": 331605, "regionname": "泾县" }, { "id": 331606, "regionname": "绩溪县" }, { "id": 331607, "regionname": "旌德县" }, { "id": 331608, "regionname": "宁国市" }] }, { "id": 3317, "cityname": "亳州市", "regions": [{ "id": 331702, "regionname": "谯城区" }, { "id": 331703, "regionname": "涡阳县" }, { "id": 331704, "regionname": "蒙城县" }, { "id": 331705, "regionname": "利辛县" }] }]
            }, { "id": 34, "provincename": "福建省", "citys": [{ "id": 3401, "cityname": "福州市", "regions": [{ "id": 340102, "regionname": "鼓楼区" }, { "id": 340103, "regionname": "台江区" }, { "id": 340104, "regionname": "仓山区" }, { "id": 340105, "regionname": "马尾区" }, { "id": 340106, "regionname": "晋安区" }, { "id": 340107, "regionname": "闽侯县" }, { "id": 340108, "regionname": "连江县" }, { "id": 340109, "regionname": "罗源县" }, { "id": 340110, "regionname": "闽清县" }, { "id": 340111, "regionname": "永泰县" }, { "id": 340112, "regionname": "平潭县" }, { "id": 340113, "regionname": "福清市" }, { "id": 340114, "regionname": "长乐市" }] }, { "id": 3402, "cityname": "厦门市", "regions": [{ "id": 340202, "regionname": "思明区" }, { "id": 340203, "regionname": "海沧区" }, { "id": 340204, "regionname": "湖里区" }, { "id": 340205, "regionname": "集美区" }, { "id": 340206, "regionname": "同安区" }, { "id": 340207, "regionname": "翔安区" }] }, { "id": 3403, "cityname": "漳州市", "regions": [{ "id": 340302, "regionname": "芗城区" }, { "id": 340303, "regionname": "龙文区" }, { "id": 340304, "regionname": "云霄县" }, { "id": 340305, "regionname": "漳浦县" }, { "id": 340306, "regionname": "诏安县" }, { "id": 340307, "regionname": "长泰县" }, { "id": 340308, "regionname": "东山县" }, { "id": 340309, "regionname": "南靖县" }, { "id": 340310, "regionname": "平和县" }, { "id": 340311, "regionname": "华安县" }, { "id": 340312, "regionname": "龙海市" }] }, { "id": 3404, "cityname": "泉州市", "regions": [{ "id": 340402, "regionname": "鲤城区" }, { "id": 340403, "regionname": "丰泽区" }, { "id": 340404, "regionname": "洛江区" }, { "id": 340405, "regionname": "泉港区" }, { "id": 340406, "regionname": "惠安县" }, { "id": 340407, "regionname": "安溪县" }, { "id": 340408, "regionname": "永春县" }, { "id": 340409, "regionname": "德化县" }, { "id": 340410, "regionname": "金门县" }, { "id": 340411, "regionname": "石狮市" }, { "id": 340412, "regionname": "晋江市" }, { "id": 340413, "regionname": "南安市" }] }, { "id": 3405, "cityname": "莆田市", "regions": [{ "id": 340502, "regionname": "城厢区" }, { "id": 340503, "regionname": "涵江区" }, { "id": 340504, "regionname": "荔城区" }, { "id": 340505, "regionname": "秀屿区" }, { "id": 340506, "regionname": "仙游县" }] }, { "id": 3406, "cityname": "三明市", "regions": [{ "id": 340602, "regionname": "梅列区" }, { "id": 340603, "regionname": "三元区" }, { "id": 340604, "regionname": "明溪县" }, { "id": 340605, "regionname": "清流县" }, { "id": 340606, "regionname": "宁化县" }, { "id": 340607, "regionname": "大田县" }, { "id": 340608, "regionname": "尤溪县" }, { "id": 340609, "regionname": "沙县" }, { "id": 340610, "regionname": "将乐县" }, { "id": 340611, "regionname": "泰宁县" }, { "id": 340612, "regionname": "建宁县" }, { "id": 340613, "regionname": "永安市" }] }, { "id": 3407, "cityname": "南平市", "regions": [{ "id": 340702, "regionname": "延平区" }, { "id": 340703, "regionname": "顺昌县" }, { "id": 340704, "regionname": "浦城县" }, { "id": 340705, "regionname": "光泽县" }, { "id": 340706, "regionname": "松溪县" }, { "id": 340707, "regionname": "政和县" }, { "id": 340708, "regionname": "邵武市" }, { "id": 340709, "regionname": "武夷山市" }, { "id": 340710, "regionname": "建瓯市" }, { "id": 340711, "regionname": "建阳市" }] }, { "id": 3408, "cityname": "龙岩市", "regions": [{ "id": 340802, "regionname": "新罗区" }, { "id": 340803, "regionname": "长汀县" }, { "id": 340804, "regionname": "永定县" }, { "id": 340805, "regionname": "上杭县" }, { "id": 340806, "regionname": "武平县" }, { "id": 340807, "regionname": "连城县" }, { "id": 340808, "regionname": "漳平市" }] }, { "id": 3409, "cityname": "宁德市", "regions": [{ "id": 340902, "regionname": "蕉城区" }, { "id": 340903, "regionname": "霞浦县" }, { "id": 340904, "regionname": "古田县" }, { "id": 340905, "regionname": "屏南县" }, { "id": 340906, "regionname": "寿宁县" }, { "id": 340907, "regionname": "周宁县" }, { "id": 340908, "regionname": "柘荣县" }, { "id": 340909, "regionname": "福安市" }, { "id": 340910, "regionname": "福鼎市" }] }] }, { "id": 35, "provincename": "浙江省", "citys": [{ "id": 3501, "cityname": "杭州市", "regions": [{ "id": 350102, "regionname": "上城区" }, { "id": 350103, "regionname": "下城区" }, { "id": 350104, "regionname": "江干区" }, { "id": 350105, "regionname": "拱墅区" }, { "id": 350106, "regionname": "西湖区" }, { "id": 350107, "regionname": "滨江区" }, { "id": 350108, "regionname": "萧山区" }, { "id": 350109, "regionname": "余杭区" }, { "id": 350110, "regionname": "桐庐县" }, { "id": 350111, "regionname": "淳安县" }, { "id": 350112, "regionname": "建德市" }, { "id": 350113, "regionname": "富阳市" }, { "id": 350114, "regionname": "临安市" }] }, { "id": 3502, "cityname": "宁波市", "regions": [{ "id": 350202, "regionname": "海曙区" }, { "id": 350203, "regionname": "江东区" }, { "id": 350204, "regionname": "江北区" }, { "id": 350205, "regionname": "北仑区" }, { "id": 350206, "regionname": "镇海区" }, { "id": 350207, "regionname": "鄞州区" }, { "id": 350208, "regionname": "象山县" }, { "id": 350209, "regionname": "宁海县" }, { "id": 350210, "regionname": "余姚市" }, { "id": 350211, "regionname": "慈溪市" }, { "id": 350212, "regionname": "奉化市" }] }, { "id": 3503, "cityname": "温州市", "regions": [{ "id": 350302, "regionname": "鹿城区" }, { "id": 350303, "regionname": "龙湾区" }, { "id": 350304, "regionname": "瓯海区" }, { "id": 350305, "regionname": "洞头县" }, { "id": 350306, "regionname": "永嘉县" }, { "id": 350307, "regionname": "平阳县" }, { "id": 350308, "regionname": "苍南县" }, { "id": 350309, "regionname": "文成县" }, { "id": 350310, "regionname": "泰顺县" }, { "id": 350311, "regionname": "瑞安市" }, { "id": 350312, "regionname": "乐清市" }] }, { "id": 3504, "cityname": "嘉兴市", "regions": [{ "id": 350402, "regionname": "南湖区" }, { "id": 350403, "regionname": "秀洲区" }, { "id": 350404, "regionname": "嘉善县" }, { "id": 350405, "regionname": "海盐县" }, { "id": 350406, "regionname": "海宁市" }, { "id": 350407, "regionname": "平湖市" }, { "id": 350408, "regionname": "桐乡市" }] }, { "id": 3505, "cityname": "湖州市", "regions": [{ "id": 350502, "regionname": "吴兴区" }, { "id": 350503, "regionname": "南浔区" }, { "id": 350504, "regionname": "德清县" }, { "id": 350505, "regionname": "长兴县" }, { "id": 350506, "regionname": "安吉县" }] }, { "id": 3506, "cityname": "绍兴市", "regions": [{ "id": 350602, "regionname": "越城区" }, { "id": 350603, "regionname": "绍兴县" }, { "id": 350604, "regionname": "新昌县" }, { "id": 350605, "regionname": "诸暨市" }, { "id": 350606, "regionname": "上虞市" }, { "id": 350607, "regionname": "嵊州市" }] }, { "id": 3507, "cityname": "金华市", "regions": [{ "id": 350702, "regionname": "婺城区" }, { "id": 350703, "regionname": "金东区" }, { "id": 350704, "regionname": "武义县" }, { "id": 350705, "regionname": "浦江县" }, { "id": 350706, "regionname": "磐安县" }, { "id": 350707, "regionname": "兰溪市" }, { "id": 350708, "regionname": "义乌市" }, { "id": 350709, "regionname": "东阳市" }, { "id": 350710, "regionname": "永康市" }] }, { "id": 3508, "cityname": "衢州市", "regions": [{ "id": 350802, "regionname": "柯城区" }, { "id": 350803, "regionname": "衢江区" }, { "id": 350804, "regionname": "常山县" }, { "id": 350805, "regionname": "开化县" }, { "id": 350806, "regionname": "龙游县" }, { "id": 350807, "regionname": "江山市" }] }, { "id": 3509, "cityname": "舟山市", "regions": [{ "id": 350902, "regionname": "定海区" }, { "id": 350903, "regionname": "普陀区" }, { "id": 350904, "regionname": "岱山县" }, { "id": 350905, "regionname": "嵊泗县" }] }, { "id": 3510, "cityname": "台州市", "regions": [{ "id": 351002, "regionname": "椒江区" }, { "id": 351003, "regionname": "黄岩区" }, { "id": 351004, "regionname": "路桥区" }, { "id": 351005, "regionname": "玉环县" }, { "id": 351006, "regionname": "三门县" }, { "id": 351007, "regionname": "天台县" }, { "id": 351008, "regionname": "仙居县" }, { "id": 351009, "regionname": "温岭市" }, { "id": 351010, "regionname": "临海市" }] }, { "id": 3511, "cityname": "丽水市", "regions": [{ "id": 351102, "regionname": "莲都区" }, { "id": 351103, "regionname": "青田县" }, { "id": 351104, "regionname": "缙云县" }, { "id": 351105, "regionname": "遂昌县" }, { "id": 351106, "regionname": "松阳县" }, { "id": 351107, "regionname": "云和县" }, { "id": 351108, "regionname": "庆元县" }, { "id": 351109, "regionname": "景宁县" }, { "id": 351110, "regionname": "龙泉市" }] }] }, {
                "id": 36, "provincename": "江西省", "citys": [{ "id": 3601, "cityname": "南昌市", "regions": [{ "id": 360102, "regionname": "东湖区" }, { "id": 360103, "regionname": "西湖区" }, { "id": 360104, "regionname": "青云谱区" }, { "id": 360105, "regionname": "湾里区" }, { "id": 360106, "regionname": "青山湖区" }, { "id": 360107, "regionname": "南昌县" }, { "id": 360108, "regionname": "新建县" }, { "id": 360109, "regionname": "安义县" }, { "id": 360110, "regionname": "进贤县" }] }, { "id": 3602, "cityname": "景德镇市", "regions": [{ "id": 360202, "regionname": "昌江区" }, { "id": 360203, "regionname": "珠山区" }, { "id": 360204, "regionname": "浮梁县" }, { "id": 360205, "regionname": "乐平市" }, { "id": 360206, "regionname": "高新区" }] }, { "id": 3603, "cityname": "萍乡市", "regions": [{ "id": 360302, "regionname": "安源区" }, { "id": 360303, "regionname": "湘东区" }, { "id": 360304, "regionname": "莲花县" }, { "id": 360305, "regionname": "上栗县" }, { "id": 360306, "regionname": "芦溪县" }] }, { "id": 3604, "cityname": "九江市", "regions": [{ "id": 360402, "regionname": "庐山区" }, { "id": 360403, "regionname": "浔阳区" }, { "id": 360404, "regionname": "九江县" }, { "id": 360405, "regionname": "武宁县" }, { "id": 360406, "regionname": "修水县" }, { "id": 360407, "regionname": "永修县" }, { "id": 360408, "regionname": "德安县" }, { "id": 360409, "regionname": "星子县" }, { "id": 360410, "regionname": "都昌县" }, { "id": 360411, "regionname": "湖口县" }, { "id": 360412, "regionname": "彭泽县" }, { "id": 360413, "regionname": "瑞昌市" }] }, { "id": 3605, "cityname": "新余市", "regions": [{ "id": 360502, "regionname": "渝水区" }, { "id": 360503, "regionname": "分宜县" }, { "id": 360504, "regionname": "高新区" }] }, { "id": 3606, "cityname": "鹰潭市", "regions": [{ "id": 360602, "regionname": "月湖区" }, { "id": 360603, "regionname": "余江县" }, { "id": 360604, "regionname": "贵溪市" }] }, {
                        "id": 3607, "cityname": "赣州市", "regions": [{ "id": 360702, "regionname": "章贡区" }, { "id": 360703, "regionname": "赣县" }, { "id": 360704, "regionname": "信丰县" }, { "id": 360705, "regionname": "大余县" }, { "id": 360706, "regionname": "上犹县" }, { "id": 360707, "regionname": "崇义县" }, { "id": 360708, "regionname": "安远县" },
                            { "id": 360709, "regionname": "龙南县" }, { "id": 360710, "regionname": "定南县" }, { "id": 360711, "regionname": "全南县" }, { "id": 360712, "regionname": "宁都县" }, { "id": 360713, "regionname": "于都县" }, { "id": 360714, "regionname": "兴国县" }, { "id": 360715, "regionname": "会昌县" }, { "id": 360716, "regionname": "寻乌县" }, { "id": 360717, "regionname": "石城县" }, { "id": 360718, "regionname": "瑞金市" }, { "id": 360719, "regionname": "南康市" }]
                    }, { "id": 3608, "cityname": "吉安市", "regions": [{ "id": 360802, "regionname": "吉州区" }, { "id": 360803, "regionname": "青原区" }, { "id": 360804, "regionname": "吉安县" }, { "id": 360805, "regionname": "吉水县" }, { "id": 360806, "regionname": "峡江县" }, { "id": 360807, "regionname": "新干县" }, { "id": 360808, "regionname": "永丰县" }, { "id": 360809, "regionname": "泰和县" }, { "id": 360810, "regionname": "遂川县" }, { "id": 360811, "regionname": "万安县" }, { "id": 360812, "regionname": "安福县" }, { "id": 360813, "regionname": "永新县" }, { "id": 360814, "regionname": "井冈山市" }] }, { "id": 3609, "cityname": "宜春市", "regions": [{ "id": 360902, "regionname": "袁州区" }, { "id": 360903, "regionname": "奉新县" }, { "id": 360904, "regionname": "万载县" }, { "id": 360905, "regionname": "上高县" }, { "id": 360906, "regionname": "宜丰县" }, { "id": 360907, "regionname": "靖安县" }, { "id": 360908, "regionname": "铜鼓县" }, { "id": 360909, "regionname": "丰城市" }, { "id": 360910, "regionname": "樟树市" }, { "id": 360911, "regionname": "高安市" }] }, { "id": 3610, "cityname": "抚州市", "regions": [{ "id": 361002, "regionname": "临川区" }, { "id": 361003, "regionname": "南城县" }, { "id": 361004, "regionname": "黎川县" }, { "id": 361005, "regionname": "南丰县" }, { "id": 361006, "regionname": "崇仁县" }, { "id": 361007, "regionname": "乐安县" }, { "id": 361008, "regionname": "宜黄县" }, { "id": 361009, "regionname": "金溪县" }, { "id": 361010, "regionname": "资溪县" }, { "id": 361011, "regionname": "东乡县" }, { "id": 361012, "regionname": "广昌县" }] }, { "id": 3611, "cityname": "上饶市", "regions": [{ "id": 361102, "regionname": "信州区" }, { "id": 361103, "regionname": "上饶县" }, { "id": 361104, "regionname": "广丰县" }, { "id": 361105, "regionname": "玉山县" }, { "id": 361106, "regionname": "铅山县" }, { "id": 361107, "regionname": "横峰县" }, { "id": 361108, "regionname": "弋阳县" }, { "id": 361109, "regionname": "余干县" }, { "id": 361110, "regionname": "鄱阳县" }, { "id": 361111, "regionname": "万年县" }, { "id": 361112, "regionname": "婺源县" }, { "id": 361113, "regionname": "德兴市" }] }]
            }, { "id": 40, "provincename": "广东省", "citys": [{ "id": 4001, "cityname": "广州市", "regions": [{ "id": 400102, "regionname": "荔湾区" }, { "id": 400103, "regionname": "越秀区" }, { "id": 400104, "regionname": "海珠区" }, { "id": 400105, "regionname": "天河区" }, { "id": 400106, "regionname": "白云区" }, { "id": 400107, "regionname": "黄埔区" }, { "id": 400108, "regionname": "番禺区" }, { "id": 400109, "regionname": "花都区" }, { "id": 400110, "regionname": "南沙区" }, { "id": 400111, "regionname": "萝岗区" }, { "id": 400112, "regionname": "增城市" }, { "id": 400113, "regionname": "从化市" }] }, { "id": 4002, "cityname": "深圳市", "regions": [{ "id": 400202, "regionname": "罗湖区" }, { "id": 400203, "regionname": "福田区" }, { "id": 400204, "regionname": "南山区" }, { "id": 400205, "regionname": "宝安区" }, { "id": 400206, "regionname": "龙岗区" }, { "id": 400207, "regionname": "盐田区" }, { "id": 400208, "regionname": "高新区" }] }, { "id": 4003, "cityname": "珠海市", "regions": [{ "id": 400302, "regionname": "香洲区" }, { "id": 400303, "regionname": "斗门区" }, { "id": 400304, "regionname": "金湾区" }, { "id": 400305, "regionname": "高新区" }] }, { "id": 4004, "cityname": "汕头市", "regions": [{ "id": 400402, "regionname": "龙湖区" }, { "id": 400403, "regionname": "金平区" }, { "id": 400404, "regionname": "濠江区" }, { "id": 400405, "regionname": "潮阳区" }, { "id": 400406, "regionname": "潮南区" }, { "id": 400407, "regionname": "澄海区" }, { "id": 400408, "regionname": "南澳县" }] }, { "id": 4005, "cityname": "韶关市", "regions": [{ "id": 400502, "regionname": "武江区" }, { "id": 400503, "regionname": "浈江区" }, { "id": 400504, "regionname": "曲江区" }, { "id": 400505, "regionname": "始兴县" }, { "id": 400506, "regionname": "仁化县" }, { "id": 400507, "regionname": "翁源县" }, { "id": 400508, "regionname": "乳源县" }, { "id": 400509, "regionname": "新丰县" }, { "id": 400510, "regionname": "乐昌市" }, { "id": 400511, "regionname": "南雄市" }] }, { "id": 4006, "cityname": "河源市", "regions": [{ "id": 400602, "regionname": "源城区" }, { "id": 400603, "regionname": "紫金县" }, { "id": 400604, "regionname": "龙川县" }, { "id": 400605, "regionname": "连平县" }, { "id": 400606, "regionname": "和平县" }, { "id": 400607, "regionname": "东源县" }] }, { "id": 4007, "cityname": "梅州市", "regions": [{ "id": 400702, "regionname": "梅江区" }, { "id": 400703, "regionname": "梅县" }, { "id": 400704, "regionname": "大埔县" }, { "id": 400705, "regionname": "丰顺县" }, { "id": 400706, "regionname": "五华县" }, { "id": 400707, "regionname": "平远县" }, { "id": 400708, "regionname": "蕉岭县" }, { "id": 400709, "regionname": "兴宁市" }] }, { "id": 4008, "cityname": "惠州市", "regions": [{ "id": 400802, "regionname": "惠城区" }, { "id": 400803, "regionname": "惠阳区" }, { "id": 400804, "regionname": "博罗县" }, { "id": 400805, "regionname": "惠东县" }, { "id": 400806, "regionname": "龙门县" }, { "id": 400807, "regionname": "高新区" }] }, { "id": 4009, "cityname": "汕尾市", "regions": [{ "id": 400902, "regionname": "城区" }, { "id": 400903, "regionname": "海丰县" }, { "id": 400904, "regionname": "陆河县" }, { "id": 400905, "regionname": "陆丰市" }] }, { "id": 4010, "cityname": "东莞市", "regions": [{ "id": 401001, "regionname": "高新区" }] }, { "id": 4011, "cityname": "中山市", "regions": [{ "id": 401101, "regionname": "高新区" }] }, { "id": 4012, "cityname": "江门市", "regions": [{ "id": 401202, "regionname": "蓬江区" }, { "id": 401203, "regionname": "江海区" }, { "id": 401204, "regionname": "新会区" }, { "id": 401205, "regionname": "台山市" }, { "id": 401206, "regionname": "开平市" }, { "id": 401207, "regionname": "鹤山市" }, { "id": 401208, "regionname": "恩平市" }, { "id": 401209, "regionname": "高新区" }] }, { "id": 4013, "cityname": "佛山市", "regions": [{ "id": 401302, "regionname": "禅城区" }, { "id": 401303, "regionname": "南海区" }, { "id": 401304, "regionname": "顺德区" }, { "id": 401305, "regionname": "三水区" }, { "id": 401306, "regionname": "高明区" }, { "id": 401307, "regionname": "高新区" }] }, { "id": 4014, "cityname": "阳江市", "regions": [{ "id": 401402, "regionname": "江城区" }, { "id": 401403, "regionname": "阳西县" }, { "id": 401404, "regionname": "阳东县" }, { "id": 401405, "regionname": "阳春市" }] }, { "id": 4015, "cityname": "湛江市", "regions": [{ "id": 401502, "regionname": "赤坎区" }, { "id": 401503, "regionname": "霞山区" }, { "id": 401504, "regionname": "坡头区" }, { "id": 401505, "regionname": "麻章区" }, { "id": 401506, "regionname": "遂溪县" }, { "id": 401507, "regionname": "徐闻县" }, { "id": 401508, "regionname": "廉江市" }, { "id": 401509, "regionname": "雷州市" }, { "id": 401510, "regionname": "吴川市" }] }, { "id": 4016, "cityname": "茂名市", "regions": [{ "id": 401602, "regionname": "茂南区" }, { "id": 401603, "regionname": "茂港区" }, { "id": 401604, "regionname": "电白县" }, { "id": 401605, "regionname": "高州市" }, { "id": 401606, "regionname": "化州市" }, { "id": 401607, "regionname": "信宜市" }] }, { "id": 4017, "cityname": "肇庆市", "regions": [{ "id": 401702, "regionname": "端州区" }, { "id": 401703, "regionname": "鼎湖区" }, { "id": 401704, "regionname": "广宁县" }, { "id": 401705, "regionname": "怀集县" }, { "id": 401706, "regionname": "封开县" }, { "id": 401707, "regionname": "德庆县" }, { "id": 401708, "regionname": "高要市" }, { "id": 401709, "regionname": "四会市" }, { "id": 401710, "regionname": "高新区" }] }, { "id": 4018, "cityname": "清远市", "regions": [{ "id": 401802, "regionname": "清城区" }, { "id": 401803, "regionname": "佛冈县" }, { "id": 401804, "regionname": "阳山县" }, { "id": 401805, "regionname": "连山县" }, { "id": 401806, "regionname": "连南县" }, { "id": 401807, "regionname": "清新县" }, { "id": 401808, "regionname": "英德市" }, { "id": 401809, "regionname": "连州市" }] }, { "id": 4019, "cityname": "潮州市", "regions": [{ "id": 401902, "regionname": "湘桥区" }, { "id": 401903, "regionname": "潮安县" }, { "id": 401904, "regionname": "饶平县" }] }, { "id": 4020, "cityname": "揭阳市", "regions": [{ "id": 402002, "regionname": "榕城区" }, { "id": 402003, "regionname": "揭东县" }, { "id": 402004, "regionname": "揭西县" }, { "id": 402005, "regionname": "惠来县" }, { "id": 402006, "regionname": "普宁市" }] }, { "id": 4021, "cityname": "云浮市", "regions": [{ "id": 402102, "regionname": "云城区" }, { "id": 402103, "regionname": "新兴县" }, { "id": 402104, "regionname": "郁南县" }, { "id": 402105, "regionname": "云安县" }, { "id": 402106, "regionname": "罗定市" }] }] }, {
                "id": 41, "provincename": "广西", "citys": [{ "id": 4101, "cityname": "南宁市", "regions": [{ "id": 410102, "regionname": "兴宁区" }, { "id": 410103, "regionname": "青秀区" }, { "id": 410104, "regionname": "江南区" }, { "id": 410105, "regionname": "西乡塘区" }, { "id": 410106, "regionname": "良庆区" }, { "id": 410107, "regionname": "邕宁区" }, { "id": 410108, "regionname": "武鸣县" }, { "id": 410109, "regionname": "隆安县" }, { "id": 410110, "regionname": "马山县" }, { "id": 410111, "regionname": "上林县" }, { "id": 410112, "regionname": "宾阳县" }, { "id": 410113, "regionname": "横县" }] }, { "id": 4102, "cityname": "柳州市", "regions": [{ "id": 410202, "regionname": "城中区" }, { "id": 410203, "regionname": "鱼峰区" }, { "id": 410204, "regionname": "柳南区" }, { "id": 410205, "regionname": "柳北区" }, { "id": 410206, "regionname": "柳江县" }, { "id": 410207, "regionname": "柳城县" }, { "id": 410208, "regionname": "鹿寨县" }, { "id": 410209, "regionname": "融安县" }, { "id": 410210, "regionname": "融水县" }, { "id": 410211, "regionname": "三江县" }, { "id": 410212, "regionname": "高新区" }] }, { "id": 4103, "cityname": "桂林市", "regions": [{ "id": 410302, "regionname": "秀峰区" }, { "id": 410303, "regionname": "叠彩区" }, { "id": 410304, "regionname": "象山区" }, { "id": 410305, "regionname": "七星区" }, { "id": 410306, "regionname": "雁山区" }, { "id": 410307, "regionname": "阳朔县" }, { "id": 410308, "regionname": "临桂县" }, { "id": 410309, "regionname": "灵川县" }, { "id": 410310, "regionname": "全州县" }, { "id": 410311, "regionname": "兴安县" }, { "id": 410312, "regionname": "永福县" }, { "id": 410313, "regionname": "灌阳县" }, { "id": 410314, "regionname": "龙胜县" }, { "id": 410315, "regionname": "资源县" }, { "id": 410316, "regionname": "平乐县" }, { "id": 410317, "regionname": "荔蒲县" }, { "id": 410318, "regionname": "恭城县" }, { "id": 410319, "regionname": "高新区" }] }, { "id": 4104, "cityname": "梧州市", "regions": [{ "id": 410402, "regionname": "万秀区" }, { "id": 410403, "regionname": "蝶山区" }, { "id": 410404, "regionname": "长洲区" }, { "id": 410405, "regionname": "苍梧县" }, { "id": 410406, "regionname": "藤县" }, { "id": 410407, "regionname": "蒙山县" }, { "id": 410408, "regionname": "岑溪市" }] }, { "id": 4105, "cityname": "北海市", "regions": [{ "id": 410502, "regionname": "海城区" }, { "id": 410503, "regionname": "银海区" }, { "id": 410504, "regionname": "铁山港区" }, { "id": 410505, "regionname": "合浦县" }] }, { "id": 4106, "cityname": "防城港市", "regions": [{ "id": 410602, "regionname": "港口区" }, { "id": 410603, "regionname": "防城区" }, { "id": 410604, "regionname": "上思县" }, { "id": 410605, "regionname": "东兴市" }] }, { "id": 4107, "cityname": "钦州市", "regions": [{ "id": 410702, "regionname": "钦南区" }, { "id": 410703, "regionname": "钦北区" }, { "id": 410704, "regionname": "灵山县" }, { "id": 410705, "regionname": "浦北县" }] }, { "id": 4108, "cityname": "贵港市", "regions": [{ "id": 410802, "regionname": "港北区" }, { "id": 410803, "regionname": "港南区" }, { "id": 410804, "regionname": "覃塘区" }, { "id": 410805, "regionname": "平南县" }, { "id": 410806, "regionname": "桂平市" }] }, { "id": 4109, "cityname": "玉林市", "regions": [{ "id": 410902, "regionname": "玉州区" }, { "id": 410903, "regionname": "容县" }, { "id": 410904, "regionname": "陆川县" }, { "id": 410905, "regionname": "博白县" }, { "id": 410906, "regionname": "兴业县" }, { "id": 410907, "regionname": "北流市" }] }, { "id": 4110, "cityname": "百色市", "regions": [{ "id": 411002, "regionname": "右江区" }, { "id": 411003, "regionname": "田阳县" }, { "id": 411004, "regionname": "田东县" }, { "id": 411005, "regionname": "平果县" }, { "id": 411006, "regionname": "德保县" }, { "id": 411007, "regionname": "靖西县" }, { "id": 411008, "regionname": "那坡县" }, { "id": 411009, "regionname": "凌云县" }, { "id": 411010, "regionname": "乐业县" }, { "id": 411011, "regionname": "田林县" }, { "id": 411012, "regionname": "西林县" }, { "id": 411013, "regionname": "隆林县" }] }, {
                        "id": 4111, "cityname": "贺州市", "regions": [{ "id": 411102, "regionname": "八步区" }, { "id": 411103, "regionname": "昭平县" },
                            { "id": 411104, "regionname": "钟山县" }, { "id": 411105, "regionname": "富川县" }]
                    }, { "id": 4112, "cityname": "河池市", "regions": [{ "id": 411202, "regionname": "金城江区" }, { "id": 411203, "regionname": "南丹县" }, { "id": 411204, "regionname": "天峨县" }, { "id": 411205, "regionname": "凤山县" }, { "id": 411206, "regionname": "东兰县" }, { "id": 411207, "regionname": "罗城县" }, { "id": 411208, "regionname": "环江县" }, { "id": 411209, "regionname": "巴马县" }, { "id": 411210, "regionname": "都安县" }, { "id": 411211, "regionname": "大化县" }, { "id": 411212, "regionname": "宜州市" }] }, { "id": 4113, "cityname": "来宾市", "regions": [{ "id": 411302, "regionname": "兴宾区" }, { "id": 411303, "regionname": "忻城县" }, { "id": 411304, "regionname": "象州县" }, { "id": 411305, "regionname": "武宣县" }, { "id": 411306, "regionname": "金秀县" }, { "id": 411307, "regionname": "合山市" }] }, { "id": 4114, "cityname": "崇左市", "regions": [{ "id": 411402, "regionname": "江洲区" }, { "id": 411403, "regionname": "扶绥县" }, { "id": 411404, "regionname": "宁明县" }, { "id": 411405, "regionname": "龙州县" }, { "id": 411406, "regionname": "大新县" }, { "id": 411407, "regionname": "天等县" }, { "id": 411408, "regionname": "凭祥市" }] }]
            }, { "id": 42, "provincename": "海南省", "citys": [{ "id": 4201, "cityname": "海口市", "regions": [{ "id": 420102, "regionname": "秀英区" }, { "id": 420103, "regionname": "龙华区" }, { "id": 420104, "regionname": "琼山区" }, { "id": 420105, "regionname": "美兰区" }, { "id": 420106, "regionname": "高新区" }] }] }, { "id": 60, "provincename": "重庆市", "citys": [{ "id": 6001, "cityname": "重庆市", "regions": [{ "id": 600101, "regionname": "万州区" }, { "id": 600102, "regionname": "涪陵区" }, { "id": 600103, "regionname": "渝中区" }, { "id": 600104, "regionname": "大渡口区" }, { "id": 600105, "regionname": "江北区" }, { "id": 600106, "regionname": "沙坪坝区" }, { "id": 600107, "regionname": "九龙坡区" }, { "id": 600108, "regionname": "南岸区" }, { "id": 600109, "regionname": "北碚区" }, { "id": 600110, "regionname": "万盛区" }, { "id": 600111, "regionname": "双桥区" }, { "id": 600112, "regionname": "渝北区" }, { "id": 600113, "regionname": "巴南区" }, { "id": 600114, "regionname": "黔江区" }, { "id": 600115, "regionname": "长寿区" }, { "id": 600116, "regionname": "江津区" }, { "id": 600117, "regionname": "合川区" }, { "id": 600118, "regionname": "永川区" }, { "id": 600119, "regionname": "南川区" }, { "id": 600120, "regionname": "綦江县" }, { "id": 600121, "regionname": "潼南县" }, { "id": 600122, "regionname": "铜梁县" }, { "id": 600123, "regionname": "大足县" }, { "id": 600124, "regionname": "荣昌县" }, { "id": 600125, "regionname": "璧山县" }, { "id": 600126, "regionname": "梁平县" }, { "id": 600127, "regionname": "城口县" }, { "id": 600128, "regionname": "丰都县" }, { "id": 600129, "regionname": "垫江县" }, { "id": 600130, "regionname": "武隆县" }, { "id": 600131, "regionname": "忠县" }, { "id": 600132, "regionname": "开县" }, { "id": 600133, "regionname": "云阳县" }, { "id": 600134, "regionname": "奉节县" }, { "id": 600135, "regionname": "巫山县" }, { "id": 600136, "regionname": "巫溪县" }, { "id": 600137, "regionname": "石柱县" }, { "id": 600138, "regionname": "秀山县" }, { "id": 600139, "regionname": "酉阳县" }, { "id": 600140, "regionname": "彭水苗族县" }] }] }, {
                "id": 61, "provincename": "四川省", "citys": [{ "id": 6101, "cityname": "成都市", "regions": [{ "id": 610102, "regionname": "锦江区" }, { "id": 610103, "regionname": "青羊区" }, { "id": 610104, "regionname": "金牛区" }, { "id": 610105, "regionname": "武侯区" }, { "id": 610106, "regionname": "成华区" }, { "id": 610107, "regionname": "龙泉驿区" }, { "id": 610108, "regionname": "青白江区" }, { "id": 610109, "regionname": "新都区" }, { "id": 610110, "regionname": "温江区" }, { "id": 610111, "regionname": "金堂县" }, { "id": 610112, "regionname": "双流县" }, { "id": 610113, "regionname": "郫县" }, { "id": 610114, "regionname": "大邑县" }, { "id": 610115, "regionname": "蒲江县" }, { "id": 610116, "regionname": "新津县" }, { "id": 610117, "regionname": "都江堰市" }, { "id": 610118, "regionname": "彭州市" }, { "id": 610119, "regionname": "邛崃市" }, { "id": 610120, "regionname": "崇州市" }, { "id": 610121, "regionname": "高新区" }] }, { "id": 6102, "cityname": "德阳市", "regions": [{ "id": 610202, "regionname": "旌阳区" }, { "id": 610203, "regionname": "中江县" }, { "id": 610204, "regionname": "罗江县" }, { "id": 610205, "regionname": "广汉市" }, { "id": 610206, "regionname": "什邡市" }, { "id": 610207, "regionname": "绵竹市" }] }, { "id": 6103, "cityname": "绵阳市", "regions": [{ "id": 610302, "regionname": "涪城区" }, { "id": 610303, "regionname": "游仙区" }, { "id": 610304, "regionname": "三台县" }, { "id": 610305, "regionname": "盐亭县" }, { "id": 610306, "regionname": "安县" }, { "id": 610307, "regionname": "梓潼县" }, { "id": 610308, "regionname": "北川县" }, { "id": 610309, "regionname": "平武县" }, { "id": 610310, "regionname": "江油市" }, { "id": 610311, "regionname": "高新区" }] }, { "id": 6104, "cityname": "眉山市", "regions": [{ "id": 610402, "regionname": "东坡区" }, { "id": 610403, "regionname": "仁寿县" }, { "id": 610404, "regionname": "彭山县" }, { "id": 610405, "regionname": "洪雅县" }, { "id": 610406, "regionname": "丹棱县" }, { "id": 610407, "regionname": "青神县" }] }, { "id": 6105, "cityname": "泸州市", "regions": [{ "id": 610502, "regionname": "江阳区" }, { "id": 610503, "regionname": "纳溪区" }, { "id": 610504, "regionname": "龙马潭区" }, { "id": 610505, "regionname": "泸县" }, { "id": 610506, "regionname": "合江县" }, { "id": 610507, "regionname": "叙永县" }, { "id": 610508, "regionname": "古蔺县" }] }, { "id": 6106, "cityname": "南充市", "regions": [{ "id": 610602, "regionname": "顺庆区" }, { "id": 610603, "regionname": "高坪区" }, { "id": 610604, "regionname": "嘉陵区" }, { "id": 610605, "regionname": "南部县" }, { "id": 610606, "regionname": "营山县" }, { "id": 610607, "regionname": "蓬安县" }, { "id": 610608, "regionname": "仪陇县" }, { "id": 610609, "regionname": "西充县" }, { "id": 610610, "regionname": "阆中市" }] }, { "id": 6107, "cityname": "自贡市", "regions": [{ "id": 610702, "regionname": "自流井区" }, { "id": 610703, "regionname": "贡井区" }, { "id": 610704, "regionname": "大安区" }, { "id": 610705, "regionname": "沿滩区" }, { "id": 610706, "regionname": "荣县" }, { "id": 610707, "regionname": "富顺县" }, { "id": 610708, "regionname": "高新区" }] }, { "id": 6108, "cityname": "内江市", "regions": [{ "id": 610802, "regionname": "市中区" }, { "id": 610803, "regionname": "东兴区" }, { "id": 610804, "regionname": "威远县" }, { "id": 610805, "regionname": "资中县" }, { "id": 610806, "regionname": "隆昌县" }] }, { "id": 6109, "cityname": "宜宾市", "regions": [{ "id": 610902, "regionname": "翠屏区" }, { "id": 610903, "regionname": "宜宾县" }, { "id": 610904, "regionname": "南溪县" }, { "id": 610905, "regionname": "江安县" }, { "id": 610906, "regionname": "长宁县" }, { "id": 610907, "regionname": "高县" }, { "id": 610908, "regionname": "珙县" }, { "id": 610909, "regionname": "筠连县" }, { "id": 610910, "regionname": "兴文县" }, { "id": 610911, "regionname": "屏山县" }] }, { "id": 6110, "cityname": "乐山市", "regions": [{ "id": 611002, "regionname": "市中区" }, { "id": 611003, "regionname": "沙湾区" }, { "id": 611004, "regionname": "五通桥区" }, { "id": 611005, "regionname": "金口河区" }, { "id": 611006, "regionname": "犍为县" }, { "id": 611007, "regionname": "井研县" }, { "id": 611008, "regionname": "夹江县" }, { "id": 611009, "regionname": "沐川县" }, { "id": 611010, "regionname": "峨边县" }, { "id": 611011, "regionname": "马边县" }, { "id": 611012, "regionname": "峨眉山市" }] }, { "id": 6111, "cityname": "雅安市", "regions": [{ "id": 611102, "regionname": "雨城区" }, { "id": 611103, "regionname": "名山县" }, { "id": 611104, "regionname": "荥经县" }, { "id": 611105, "regionname": "汉源县" }, { "id": 611106, "regionname": "石棉县" }, { "id": 611107, "regionname": "天全县" }, { "id": 611108, "regionname": "芦山县" }, { "id": 611109, "regionname": "宝兴县" }] }, { "id": 6112, "cityname": "遂宁市", "regions": [{ "id": 611202, "regionname": "船山区" }, { "id": 611203, "regionname": "安居区" }, { "id": 611204, "regionname": "蓬溪县" }, { "id": 611205, "regionname": "射洪县" }, { "id": 611206, "regionname": "大英县" }] }, { "id": 6113, "cityname": "达州市", "regions": [{ "id": 611302, "regionname": "通川区" }, { "id": 611303, "regionname": "达县" }, { "id": 611304, "regionname": "宣汉县" }, { "id": 611305, "regionname": "开江县" }, { "id": 611306, "regionname": "大竹县" }, { "id": 611307, "regionname": "渠县" }, { "id": 611308, "regionname": "万源市" }] }, { "id": 6114, "cityname": "巴中市", "regions": [{ "id": 611402, "regionname": "巴州区" }, { "id": 611403, "regionname": "通江县" }, { "id": 611404, "regionname": "南江县" }, { "id": 611405, "regionname": "平昌县" }] }, { "id": 6115, "cityname": "广元市", "regions": [{ "id": 611502, "regionname": "市中区" }, { "id": 611503, "regionname": "元坝区" }, { "id": 611504, "regionname": "朝天区" }, { "id": 611505, "regionname": "旺苍县" }, { "id": 611506, "regionname": "青川县" }, { "id": 611507, "regionname": "剑阁县" }, { "id": 611508, "regionname": "苍溪县" }] }, { "id": 6116, "cityname": "广安市", "regions": [{ "id": 611602, "regionname": "广安区" }, { "id": 611603, "regionname": "岳池县" }, { "id": 611604, "regionname": "武胜县" }, { "id": 611605, "regionname": "邻水县" }, { "id": 611606, "regionname": "华蓥市" }] }, { "id": 6117, "cityname": "资阳市", "regions": [{ "id": 611702, "regionname": "雁江区" }, { "id": 611703, "regionname": "安岳县" }, { "id": 611704, "regionname": "乐至县" }, { "id": 611705, "regionname": "简阳市" }] }, { "id": 6118, "cityname": "阿坝州", "regions": [{ "id": 611801, "regionname": "汶川县" }, { "id": 611802, "regionname": "理县" }, { "id": 611803, "regionname": "茂县" }, { "id": 611804, "regionname": "松潘县" }, { "id": 611805, "regionname": "九寨沟县" }, { "id": 611806, "regionname": "金川县" }, { "id": 611807, "regionname": "小金县" }, { "id": 611808, "regionname": "黑水县" }, { "id": 611809, "regionname": "马尔康县" }, { "id": 611810, "regionname": "壤塘县" }, { "id": 611811, "regionname": "阿坝县" }, { "id": 611812, "regionname": "若尔盖县" }, { "id": 611813, "regionname": "红原县" }] }, { "id": 6119, "cityname": "攀枝花市", "regions": [{ "id": 611902, "regionname": "东区" }, { "id": 611903, "regionname": "西区" }, { "id": 611904, "regionname": "仁和区" }, { "id": 611905, "regionname": "米易县" }, { "id": 611906, "regionname": "盐边县" }] }, { "id": 6120, "cityname": "甘孜州", "regions": [{ "id": 612001, "regionname": "康定县" }, { "id": 612002, "regionname": "泸定县" }, { "id": 612003, "regionname": "丹巴县" }, { "id": 612004, "regionname": "九龙县" }, { "id": 612005, "regionname": "雅江县" }, { "id": 612006, "regionname": "道孚县" }, { "id": 612007, "regionname": "炉霍县" }, { "id": 612008, "regionname": "甘孜县" }, { "id": 612009, "regionname": "新龙县" }, { "id": 612010, "regionname": "德格县" }, { "id": 612011, "regionname": "白玉县" }, { "id": 612012, "regionname": "石渠县" }, { "id": 612013, "regionname": "色达县" }, { "id": 612014, "regionname": "理塘县" }, { "id": 612015, "regionname": "巴塘县" }, { "id": 612016, "regionname": "乡城县" }, { "id": 612017, "regionname": "稻城县" }, { "id": 612018, "regionname": "得荣县" }] }, {
                        "id": 6121, "cityname": "凉山州", "regions": [{ "id": 612101, "regionname": "西昌市" }, { "id": 612102, "regionname": "木里县" }, { "id": 612103, "regionname": "盐源县" }, { "id": 612104, "regionname": "德昌县" }, { "id": 612105, "regionname": "会理县" }, { "id": 612106, "regionname": "会东县" }, { "id": 612107, "regionname": "宁南县" }, { "id": 612108, "regionname": "普格县" }, { "id": 612109, "regionname": "布拖县" }, { "id": 612110, "regionname": "金阳县" }, { "id": 612111, "regionname": "昭觉县" }, { "id": 612112, "regionname": "喜德县" },
                            { "id": 612113, "regionname": "冕宁县" }, { "id": 612114, "regionname": "越西县" }, { "id": 612115, "regionname": "甘洛县" }, { "id": 612116, "regionname": "美姑县" }, { "id": 612117, "regionname": "雷波县" }]
                    }]
            }, { "id": 62, "provincename": "云南省", "citys": [{ "id": 6201, "cityname": "昆明市", "regions": [{ "id": 620102, "regionname": "五华区" }, { "id": 620103, "regionname": "盘龙区" }, { "id": 620104, "regionname": "官渡区" }, { "id": 620105, "regionname": "西山区" }, { "id": 620106, "regionname": "东川区" }, { "id": 620107, "regionname": "呈贡县" }, { "id": 620108, "regionname": "晋宁县" }, { "id": 620109, "regionname": "富民县" }, { "id": 620110, "regionname": "宜良县" }, { "id": 620111, "regionname": "石林县" }, { "id": 620112, "regionname": "嵩明县" }, { "id": 620113, "regionname": "禄劝县" }, { "id": 620114, "regionname": "寻甸回族县" }, { "id": 620115, "regionname": "安宁市" }] }, { "id": 6202, "cityname": "曲靖市", "regions": [{ "id": 620202, "regionname": "麒麟区" }, { "id": 620203, "regionname": "马龙县" }, { "id": 620204, "regionname": "陆良县" }, { "id": 620205, "regionname": "师宗县" }, { "id": 620206, "regionname": "罗平县" }, { "id": 620207, "regionname": "富源县" }, { "id": 620208, "regionname": "会泽县" }, { "id": 620209, "regionname": "沾益县" }, { "id": 620210, "regionname": "宣威市" }] }, { "id": 6203, "cityname": "玉溪市", "regions": [{ "id": 620302, "regionname": "红塔区" }, { "id": 620303, "regionname": "江川县" }, { "id": 620304, "regionname": "澄江县" }, { "id": 620305, "regionname": "通海县" }, { "id": 620306, "regionname": "华宁县" }, { "id": 620307, "regionname": "易门县" }, { "id": 620308, "regionname": "峨山县" }, { "id": 620309, "regionname": "新平县" }, { "id": 620310, "regionname": "元江哈尼族县" }] }, { "id": 6204, "cityname": "昭通市", "regions": [{ "id": 620402, "regionname": "昭阳区" }, { "id": 620403, "regionname": "鲁甸县" }, { "id": 620404, "regionname": "巧家县" }, { "id": 620405, "regionname": "盐津县" }, { "id": 620406, "regionname": "大关县" }, { "id": 620407, "regionname": "永善县" }, { "id": 620408, "regionname": "绥江县" }, { "id": 620409, "regionname": "镇雄县" }, { "id": 620410, "regionname": "彝良县" }, { "id": 620411, "regionname": "威信县" }, { "id": 620412, "regionname": "水富县" }] }, { "id": 6205, "cityname": "楚雄州", "regions": [{ "id": 620501, "regionname": "楚雄市" }, { "id": 620502, "regionname": "双柏县" }, { "id": 620503, "regionname": "牟定县" }, { "id": 620504, "regionname": "南华县" }, { "id": 620505, "regionname": "姚安县" }, { "id": 620506, "regionname": "大姚县" }, { "id": 620507, "regionname": "永仁县" }, { "id": 620508, "regionname": "元谋县" }, { "id": 620509, "regionname": "武定县" }, { "id": 620510, "regionname": "禄丰县" }] }, { "id": 6206, "cityname": "红河哈尼族州", "regions": [{ "id": 620601, "regionname": "个旧市" }, { "id": 620602, "regionname": "开远市" }, { "id": 620603, "regionname": "蒙自县" }, { "id": 620604, "regionname": "屏边县" }, { "id": 620605, "regionname": "建水县" }, { "id": 620606, "regionname": "石屏县" }, { "id": 620607, "regionname": "弥勒县" }, { "id": 620608, "regionname": "泸西县" }, { "id": 620609, "regionname": "元阳县" }, { "id": 620610, "regionname": "红河县" }, { "id": 620611, "regionname": "金平县" }, { "id": 620612, "regionname": "绿春县" }, { "id": 620613, "regionname": "河口县" }] }, { "id": 6207, "cityname": "丽江市", "regions": [{ "id": 620702, "regionname": "古城区" }, { "id": 620703, "regionname": "玉龙县" }, { "id": 620704, "regionname": "永胜县" }, { "id": 620705, "regionname": "华坪县" }, { "id": 620706, "regionname": "宁蒗县" }] }, { "id": 6208, "cityname": "迪庆州", "regions": [{ "id": 620801, "regionname": "香格里拉县" }, { "id": 620802, "regionname": "德钦县" }, { "id": 620803, "regionname": "维西县" }] }, { "id": 6209, "cityname": "文山州", "regions": [{ "id": 620901, "regionname": "文山县" }, { "id": 620902, "regionname": "砚山县" }, { "id": 620903, "regionname": "西畴县" }, { "id": 620904, "regionname": "麻栗坡县" }, { "id": 620905, "regionname": "马关县" }, { "id": 620906, "regionname": "丘北县" }, { "id": 620907, "regionname": "广南县" }, { "id": 620908, "regionname": "富宁县" }] }, { "id": 6210, "cityname": "西双版纳州", "regions": [{ "id": 621001, "regionname": "景洪市" }, { "id": 621002, "regionname": "勐海县" }, { "id": 621003, "regionname": "勐腊县" }] }, { "id": 6211, "cityname": "普洱市", "regions": [{ "id": 621102, "regionname": "思茅区" }, { "id": 621103, "regionname": "宁洱哈尼族县" }, { "id": 621104, "regionname": "墨江县" }, { "id": 621105, "regionname": "景东县" }, { "id": 621106, "regionname": "景谷傣族县" }, { "id": 621107, "regionname": "镇沅县" }, { "id": 621108, "regionname": "江城哈尼族县" }, { "id": 621109, "regionname": "孟连县" }, { "id": 621110, "regionname": "澜沧县" }, { "id": 621111, "regionname": "西盟县" }] }, { "id": 6212, "cityname": "大理", "regions": [{ "id": 621201, "regionname": "大理市" }, { "id": 621202, "regionname": "漾濞县" }, { "id": 621203, "regionname": "祥云县" }, { "id": 621204, "regionname": "宾川县" }, { "id": 621205, "regionname": "弥渡县" }, { "id": 621206, "regionname": "南涧县" }, { "id": 621207, "regionname": "巍山彝族县" }, { "id": 621208, "regionname": "永平县" }, { "id": 621209, "regionname": "云龙县" }, { "id": 621210, "regionname": "洱源县" }, { "id": 621211, "regionname": "剑川县" }, { "id": 621212, "regionname": "鹤庆县" }] }, { "id": 6213, "cityname": "保山市", "regions": [{ "id": 621302, "regionname": "隆阳区" }, { "id": 621303, "regionname": "施甸县" }, { "id": 621304, "regionname": "腾冲县" }, { "id": 621305, "regionname": "龙陵县" }, { "id": 621306, "regionname": "昌宁县" }] }, { "id": 6214, "cityname": "德宏", "regions": [{ "id": 621401, "regionname": "瑞丽市" }, { "id": 621402, "regionname": "潞西市" }, { "id": 621403, "regionname": "梁河县" }, { "id": 621404, "regionname": "盈江县" }, { "id": 621405, "regionname": "陇川县" }] }, { "id": 6215, "cityname": "怒江", "regions": [{ "id": 621501, "regionname": "泸水县" }, { "id": 621502, "regionname": "福贡县" }, { "id": 621503, "regionname": "贡山县" }, { "id": 621504, "regionname": "兰坪县" }] }, { "id": 6216, "cityname": "临沧市", "regions": [{ "id": 621602, "regionname": "临翔区" }, { "id": 621603, "regionname": "凤庆县" }, { "id": 621604, "regionname": "云县" }, { "id": 621605, "regionname": "永德县" }, { "id": 621606, "regionname": "镇康县" }, { "id": 621607, "regionname": "双江县" }, { "id": 621608, "regionname": "耿马傣族县" }, { "id": 621609, "regionname": "沧源县" }] }] }, { "id": 63, "provincename": "贵州省", "citys": [{ "id": 6301, "cityname": "贵阳市", "regions": [{ "id": 630102, "regionname": "南明区" }, { "id": 630103, "regionname": "云岩区" }, { "id": 630104, "regionname": "花溪区" }, { "id": 630105, "regionname": "乌当区" }, { "id": 630106, "regionname": "白云区" }, { "id": 630107, "regionname": "小河区" }, { "id": 630108, "regionname": "开阳县" }, { "id": 630109, "regionname": "息烽县" }, { "id": 630110, "regionname": "修文县" }, { "id": 630111, "regionname": "清镇市" }] }, { "id": 6302, "cityname": "遵义市", "regions": [{ "id": 630202, "regionname": "红花岗区" }, { "id": 630203, "regionname": "汇川区" }, { "id": 630204, "regionname": "遵义县" }, { "id": 630205, "regionname": "桐梓县" }, { "id": 630206, "regionname": "绥阳县" }, { "id": 630207, "regionname": "正安县" }, { "id": 630208, "regionname": "道真仡佬族县" }, { "id": 630209, "regionname": "务川仡佬族县" }, { "id": 630210, "regionname": "凤冈县" }, { "id": 630211, "regionname": "湄潭县" }, { "id": 630212, "regionname": "余庆县" }, { "id": 630213, "regionname": "习水县" }, { "id": 630214, "regionname": "赤水市" }, { "id": 630215, "regionname": "仁怀市" }] }, { "id": 6303, "cityname": "六盘水市", "regions": [{ "id": 630301, "regionname": "钟山区" }, { "id": 630302, "regionname": "六枝特区" }, { "id": 630303, "regionname": "水城县" }, { "id": 630304, "regionname": "盘县" }] }, { "id": 6304, "cityname": "安顺市", "regions": [{ "id": 630402, "regionname": "西秀区" }, { "id": 630403, "regionname": "平坝县" }, { "id": 630404, "regionname": "普定县" }, { "id": 630405, "regionname": "镇宁布依族县" }, { "id": 630406, "regionname": "关岭布依族县" }, { "id": 630407, "regionname": "紫云县" }] }, { "id": 6305, "cityname": "黔西南", "regions": [{ "id": 630501, "regionname": "兴义市" }, { "id": 630502, "regionname": "兴仁县" }, { "id": 630503, "regionname": "普安县" }, { "id": 630504, "regionname": "晴隆县" }, { "id": 630505, "regionname": "贞丰县" }, { "id": 630506, "regionname": "望谟县" }, { "id": 630507, "regionname": "册亨县" }, { "id": 630508, "regionname": "安龙县" }] }, { "id": 6306, "cityname": "黔南", "regions": [{ "id": 630601, "regionname": "都匀市" }, { "id": 630602, "regionname": "福泉市" }, { "id": 630603, "regionname": "荔波县" }, { "id": 630604, "regionname": "贵定县" }, { "id": 630605, "regionname": "瓮安县" }, { "id": 630606, "regionname": "独山县" }, { "id": 630607, "regionname": "平塘县" }, { "id": 630608, "regionname": "罗甸县" }, { "id": 630609, "regionname": "长顺县" }, { "id": 630610, "regionname": "龙里县" }, { "id": 630611, "regionname": "惠水县" }, { "id": 630612, "regionname": "三都县" }] }, { "id": 6307, "cityname": "铜仁地区", "regions": [{ "id": 630701, "regionname": "铜仁市" }, { "id": 630702, "regionname": "江口县" }, { "id": 630703, "regionname": "玉屏县" }, { "id": 630704, "regionname": "石阡县" }, { "id": 630705, "regionname": "思南县" }, { "id": 630706, "regionname": "印江县" }, { "id": 630707, "regionname": "德江县" }, { "id": 630708, "regionname": "沿河县" }, { "id": 630709, "regionname": "松桃县" }, { "id": 630710, "regionname": "万山特区" }] }, { "id": 6308, "cityname": "毕节地区", "regions": [{ "id": 630801, "regionname": "毕节市" }, { "id": 630802, "regionname": "大方县" }, { "id": 630803, "regionname": "黔西县" }, { "id": 630804, "regionname": "金沙县" }, { "id": 630805, "regionname": "织金县" }, { "id": 630806, "regionname": "纳雍县" }, { "id": 630807, "regionname": "威宁县" }, { "id": 630808, "regionname": "赫章县" }] }, { "id": 6309, "cityname": "黔东南", "regions": [{ "id": 630901, "regionname": "凯里市" }, { "id": 630902, "regionname": "黄平县" }, { "id": 630903, "regionname": "施秉县" }, { "id": 630904, "regionname": "三穗县" }, { "id": 630905, "regionname": "镇远县" }, { "id": 630906, "regionname": "岑巩县" }, { "id": 630907, "regionname": "天柱县" }, { "id": 630908, "regionname": "锦屏县" }, { "id": 630909, "regionname": "剑河县" }, { "id": 630910, "regionname": "台江县" }, { "id": 630911, "regionname": "黎平县" }, { "id": 630912, "regionname": "榕江县" }, { "id": 630913, "regionname": "从江县" }, { "id": 630914, "regionname": "雷山县" }, { "id": 630915, "regionname": "麻江县" }, { "id": 630916, "regionname": "丹寨县" }] }] }, {
                "id": 64, "provincename": "西藏", "citys": [{
                        "id": 6401, "cityname": "拉萨市", "regions": [{ "id": 640102, "regionname": "城关区" }, { "id": 640103, "regionname": "林周县" },
                            { "id": 640104, "regionname": "当雄县" }, { "id": 640105, "regionname": "尼木县" }, { "id": 640106, "regionname": "曲水县" }, { "id": 640107, "regionname": "堆龙德庆县" }, { "id": 640108, "regionname": "达孜县" }, { "id": 640109, "regionname": "墨竹工卡县" }]
                    }, { "id": 6402, "cityname": "日喀则地区", "regions": [{ "id": 640201, "regionname": "日喀则市" }, { "id": 640202, "regionname": "南木林县" }, { "id": 640203, "regionname": "江孜县" }, { "id": 640204, "regionname": "定日县" }, { "id": 640205, "regionname": "萨迦县" }, { "id": 640206, "regionname": "拉孜县" }, { "id": 640207, "regionname": "昂仁县" }, { "id": 640208, "regionname": "谢通门县" }, { "id": 640209, "regionname": "白朗县" }, { "id": 640210, "regionname": "仁布县" }, { "id": 640211, "regionname": "康马县" }, { "id": 640212, "regionname": "定结县" }, { "id": 640213, "regionname": "仲巴县" }, { "id": 640214, "regionname": "亚东县" }, { "id": 640215, "regionname": "吉隆县" }, { "id": 640216, "regionname": "聂拉木县" }, { "id": 640217, "regionname": "萨嘎县" }, { "id": 640218, "regionname": "岗巴县" }] }, { "id": 6403, "cityname": "山南地区", "regions": [{ "id": 640301, "regionname": "乃东县" }, { "id": 640302, "regionname": "扎囊县" }, { "id": 640303, "regionname": "贡嘎县" }, { "id": 640304, "regionname": "桑日县" }, { "id": 640305, "regionname": "琼结县" }, { "id": 640306, "regionname": "曲松县" }, { "id": 640307, "regionname": "措美县" }, { "id": 640308, "regionname": "洛扎县" }, { "id": 640309, "regionname": "加查县" }, { "id": 640310, "regionname": "隆子县" }, { "id": 640311, "regionname": "错那县" }, { "id": 640312, "regionname": "浪卡子县" }] }, { "id": 6404, "cityname": "林芝地区", "regions": [{ "id": 640401, "regionname": "林芝县" }, { "id": 640402, "regionname": "工布江达县" }, { "id": 640403, "regionname": "米林县" }, { "id": 640404, "regionname": "墨脱县" }, { "id": 640405, "regionname": "波密县" }, { "id": 640406, "regionname": "察隅县" }, { "id": 640407, "regionname": "朗县" }] }, { "id": 6405, "cityname": "昌都地区", "regions": [{ "id": 640501, "regionname": "昌都县" }, { "id": 640502, "regionname": "江达县" }, { "id": 640503, "regionname": "贡觉县" }, { "id": 640504, "regionname": "类乌齐县" }, { "id": 640505, "regionname": "丁青县" }, { "id": 640506, "regionname": "察雅县" }, { "id": 640507, "regionname": "八宿县" }, { "id": 640508, "regionname": "左贡县" }, { "id": 640509, "regionname": "芒康县" }, { "id": 640510, "regionname": "洛隆县" }, { "id": 640511, "regionname": "边坝县" }] }, { "id": 6406, "cityname": "那曲地区", "regions": [{ "id": 640601, "regionname": "那曲县" }, { "id": 640602, "regionname": "嘉黎县" }, { "id": 640603, "regionname": "比如县" }, { "id": 640604, "regionname": "聂荣县" }, { "id": 640605, "regionname": "安多县" }, { "id": 640606, "regionname": "申扎县" }, { "id": 640607, "regionname": "索县" }, { "id": 640608, "regionname": "班戈县" }, { "id": 640609, "regionname": "巴青县" }, { "id": 640610, "regionname": "尼玛县" }] }, { "id": 6407, "cityname": "阿里地区", "regions": [{ "id": 640701, "regionname": "普兰县" }, { "id": 640702, "regionname": "札达县" }, { "id": 640703, "regionname": "噶尔县" }, { "id": 640704, "regionname": "日土县" }, { "id": 640705, "regionname": "革吉县" }, { "id": 640706, "regionname": "改则县" }, { "id": 640707, "regionname": "措勤县" }] }]
            }, { "id": 70, "provincename": "河南省", "citys": [{ "id": 7001, "cityname": "郑州市", "regions": [{ "id": 700102, "regionname": "中原区" }, { "id": 700103, "regionname": "二七区" }, { "id": 700104, "regionname": "管城回族区" }, { "id": 700105, "regionname": "金水区" }, { "id": 700106, "regionname": "上街区" }, { "id": 700107, "regionname": "惠济区" }, { "id": 700108, "regionname": "中牟县" }, { "id": 700109, "regionname": "巩义市" }, { "id": 700110, "regionname": "荥阳市" }, { "id": 700111, "regionname": "新密市" }, { "id": 700112, "regionname": "新郑市" }, { "id": 700113, "regionname": "登封市" }, { "id": 700114, "regionname": "经济开发区" }, { "id": 700115, "regionname": "郑东新区" }, { "id": 700116, "regionname": "高新区" }] }, { "id": 7002, "cityname": "洛阳市", "regions": [{ "id": 700202, "regionname": "老城区" }, { "id": 700203, "regionname": "西工区" }, { "id": 700204, "regionname": "瀍河回族区" }, { "id": 700205, "regionname": "涧西区" }, { "id": 700206, "regionname": "吉利区" }, { "id": 700207, "regionname": "洛龙区" }, { "id": 700208, "regionname": "孟津县" }, { "id": 700209, "regionname": "新安县" }, { "id": 700210, "regionname": "栾川县" }, { "id": 700211, "regionname": "嵩县" }, { "id": 700212, "regionname": "汝阳县" }, { "id": 700213, "regionname": "宜阳县" }, { "id": 700214, "regionname": "洛宁县" }, { "id": 700215, "regionname": "伊川县" }, { "id": 700216, "regionname": "偃师市" }, { "id": 700217, "regionname": "高新区" }] }, { "id": 7003, "cityname": "开封市", "regions": [{ "id": 700302, "regionname": "龙亭区" }, { "id": 700303, "regionname": "顺河回族区" }, { "id": 700304, "regionname": "鼓楼区" }, { "id": 700305, "regionname": "禹王台区" }, { "id": 700306, "regionname": "金明区" }, { "id": 700307, "regionname": "杞县" }, { "id": 700308, "regionname": "通许县" }, { "id": 700309, "regionname": "尉氏县" }, { "id": 700310, "regionname": "开封县" }, { "id": 700311, "regionname": "兰考县" }] }, { "id": 7004, "cityname": "安阳市", "regions": [{ "id": 700402, "regionname": "文峰区" }, { "id": 700403, "regionname": "北关区" }, { "id": 700404, "regionname": "殷都区" }, { "id": 700405, "regionname": "龙安区" }, { "id": 700406, "regionname": "安阳县" }, { "id": 700407, "regionname": "汤阴县" }, { "id": 700408, "regionname": "滑县" }, { "id": 700409, "regionname": "内黄县" }, { "id": 700410, "regionname": "林州市" }, { "id": 700411, "regionname": "高新区" }] }, { "id": 7005, "cityname": "新乡市", "regions": [{ "id": 700502, "regionname": "红旗区" }, { "id": 700503, "regionname": "卫滨区" }, { "id": 700504, "regionname": "凤泉区" }, { "id": 700505, "regionname": "牧野区" }, { "id": 700506, "regionname": "新乡县" }, { "id": 700507, "regionname": "获嘉县" }, { "id": 700508, "regionname": "原阳县" }, { "id": 700509, "regionname": "延津县" }, { "id": 700510, "regionname": "封丘县" }, { "id": 700511, "regionname": "长垣县" }, { "id": 700512, "regionname": "卫辉市" }, { "id": 700513, "regionname": "辉县市" }] }, { "id": 7006, "cityname": "濮阳市", "regions": [{ "id": 700602, "regionname": "华龙区" }, { "id": 700603, "regionname": "清丰县" }, { "id": 700604, "regionname": "南乐县" }, { "id": 700605, "regionname": "范县" }, { "id": 700606, "regionname": "台前县" }, { "id": 700607, "regionname": "濮阳县" }] }, { "id": 7007, "cityname": "焦作市", "regions": [{ "id": 700702, "regionname": "解放区" }, { "id": 700703, "regionname": "中站区" }, { "id": 700704, "regionname": "马村区" }, { "id": 700705, "regionname": "山阳区" }, { "id": 700706, "regionname": "修武县" }, { "id": 700707, "regionname": "博爱县" }, { "id": 700708, "regionname": "武陟县" }, { "id": 700709, "regionname": "温县" }, { "id": 700710, "regionname": "沁阳市" }, { "id": 700711, "regionname": "孟州市" }] }, { "id": 7008, "cityname": "鹤壁市", "regions": [{ "id": 700802, "regionname": "鹤山区" }, { "id": 700803, "regionname": "山城区" }, { "id": 700804, "regionname": "淇滨区" }, { "id": 700805, "regionname": "浚县" }, { "id": 700806, "regionname": "淇县" }] }, { "id": 7009, "cityname": "三门峡市", "regions": [{ "id": 700902, "regionname": "湖滨区" }, { "id": 700903, "regionname": "渑池县" }, { "id": 700904, "regionname": "陕县" }, { "id": 700905, "regionname": "卢氏县" }, { "id": 700906, "regionname": "义马市" }, { "id": 700907, "regionname": "灵宝市" }] }, { "id": 7010, "cityname": "商丘市", "regions": [{ "id": 701002, "regionname": "梁园区" }, { "id": 701003, "regionname": "睢阳区" }, { "id": 701004, "regionname": "民权县" }, { "id": 701005, "regionname": "睢县" }, { "id": 701006, "regionname": "宁陵县" }, { "id": 701007, "regionname": "柘城县" }, { "id": 701008, "regionname": "虞城县" }, { "id": 701009, "regionname": "夏邑县" }, { "id": 701010, "regionname": "永城市" }] }, { "id": 7011, "cityname": "许昌市", "regions": [{ "id": 701102, "regionname": "魏都区" }, { "id": 701103, "regionname": "许昌县" }, { "id": 701104, "regionname": "鄢陵县" }, { "id": 701105, "regionname": "襄城县" }, { "id": 701106, "regionname": "禹州市" }, { "id": 701107, "regionname": "长葛市" }] }, { "id": 7012, "cityname": "漯河市", "regions": [{ "id": 701202, "regionname": "源汇区" }, { "id": 701203, "regionname": "郾城区" }, { "id": 701204, "regionname": "召陵区" }, { "id": 701205, "regionname": "舞阳县" }, { "id": 701206, "regionname": "临颍县" }] }, { "id": 7013, "cityname": "平顶山市", "regions": [{ "id": 701302, "regionname": "新华区" }, { "id": 701303, "regionname": "卫东区" }, { "id": 701304, "regionname": "石龙区" }, { "id": 701305, "regionname": "湛河区" }, { "id": 701306, "regionname": "宝丰县" }, { "id": 701307, "regionname": "叶县" }, { "id": 701308, "regionname": "鲁山县" }, { "id": 701309, "regionname": "郏县" }, { "id": 701310, "regionname": "舞钢市" }, { "id": 701311, "regionname": "汝州市" }] }, { "id": 7014, "cityname": "驻马店市", "regions": [{ "id": 701402, "regionname": "驿城区" }, { "id": 701403, "regionname": "西平县" }, { "id": 701404, "regionname": "上蔡县" }, { "id": 701405, "regionname": "平舆县" }, { "id": 701406, "regionname": "正阳县" }, { "id": 701407, "regionname": "确山县" }, { "id": 701408, "regionname": "泌阳县" }, { "id": 701409, "regionname": "汝南县" }, { "id": 701410, "regionname": "遂平县" }, { "id": 701411, "regionname": "新蔡县" }] }, { "id": 7015, "cityname": "周口市", "regions": [{ "id": 701502, "regionname": "川汇区" }, { "id": 701503, "regionname": "扶沟县" }, { "id": 701504, "regionname": "西华县" }, { "id": 701505, "regionname": "商水县" }, { "id": 701506, "regionname": "沈丘县" }, { "id": 701507, "regionname": "郸城县" }, { "id": 701508, "regionname": "淮阳县" }, { "id": 701509, "regionname": "太康县" }, { "id": 701510, "regionname": "鹿邑县" }, { "id": 701511, "regionname": "项城市" }] }, { "id": 7016, "cityname": "南阳市", "regions": [{ "id": 701602, "regionname": "宛城区" }, { "id": 701603, "regionname": "卧龙区" }, { "id": 701604, "regionname": "南召县" }, { "id": 701605, "regionname": "方城县" }, { "id": 701606, "regionname": "西峡县" }, { "id": 701607, "regionname": "镇平县" }, { "id": 701608, "regionname": "内乡县" }, { "id": 701609, "regionname": "淅川县" }, { "id": 701610, "regionname": "社旗县" }, { "id": 701611, "regionname": "唐河县" }, { "id": 701612, "regionname": "新野县" }, { "id": 701613, "regionname": "桐柏县" }, { "id": 701614, "regionname": "邓州市" }, { "id": 701615, "regionname": "高新区" }] }, { "id": 7017, "cityname": "信阳市", "regions": [{ "id": 701702, "regionname": "浉河区" }, { "id": 701703, "regionname": "平桥区" }, { "id": 701704, "regionname": "罗山县" }, { "id": 701705, "regionname": "光山县" }, { "id": 701706, "regionname": "新县" }, { "id": 701707, "regionname": "商城县" }, { "id": 701708, "regionname": "固始县" }, { "id": 701709, "regionname": "潢川县" }, { "id": 701710, "regionname": "淮滨县" }, { "id": 701711, "regionname": "息县" }] }] }, {
                "id": 71, "provincename": "湖北省", "citys": [{ "id": 7101, "cityname": "武汉市", "regions": [{ "id": 710102, "regionname": "江岸区" }, { "id": 710103, "regionname": "江汉区" }, { "id": 710104, "regionname": "硚口区" }, { "id": 710105, "regionname": "汉阳区" }, { "id": 710106, "regionname": "武昌区" }, { "id": 710107, "regionname": "青山区" }, { "id": 710108, "regionname": "洪山区" }, { "id": 710109, "regionname": "东西湖区" }, { "id": 710110, "regionname": "汉南区" }, { "id": 710111, "regionname": "蔡甸区" }, { "id": 710112, "regionname": "江夏区" }, { "id": 710113, "regionname": "黄陂区" }, { "id": 710114, "regionname": "新洲区" }] }, { "id": 7102, "cityname": "黄石市", "regions": [{ "id": 710202, "regionname": "黄石港区" }, { "id": 710203, "regionname": "西塞山区" }, { "id": 710204, "regionname": "下陆区" }, { "id": 710205, "regionname": "铁山区" }, { "id": 710206, "regionname": "阳新县" }, { "id": 710207, "regionname": "大冶市" }] }, { "id": 7103, "cityname": "襄阳市", "regions": [{ "id": 710302, "regionname": "襄城区" }, { "id": 710303, "regionname": "樊城区" }, { "id": 710304, "regionname": "襄州区" }, { "id": 710305, "regionname": "南漳县" }, { "id": 710306, "regionname": "谷城县" }, { "id": 710307, "regionname": "保康县" }, { "id": 710308, "regionname": "老河口市" }, { "id": 710309, "regionname": "枣阳市" }, { "id": 710310, "regionname": "宜城市" }] }, { "id": 7104, "cityname": "十堰市", "regions": [{ "id": 710402, "regionname": "茅箭区" }, { "id": 710403, "regionname": "张湾区" }, { "id": 710404, "regionname": "郧县" }, { "id": 710405, "regionname": "郧西县" }, { "id": 710406, "regionname": "竹山县" }, { "id": 710407, "regionname": "竹溪县" }, { "id": 710408, "regionname": "房县" }, { "id": 710409, "regionname": "丹江口市" }] }, { "id": 7105, "cityname": "荆州市", "regions": [{ "id": 710503, "regionname": "荆州区" }, { "id": 710504, "regionname": "公安县" }, { "id": 710505, "regionname": "监利县" }, { "id": 710506, "regionname": "江陵县" }, { "id": 710507, "regionname": "石首市" }, { "id": 710508, "regionname": "洪湖市" }, { "id": 710509, "regionname": "松滋市" }] }, { "id": 7106, "cityname": "宜昌市", "regions": [{ "id": 710602, "regionname": "西陵区" }, { "id": 710603, "regionname": "伍家岗区" }, { "id": 710604, "regionname": "点军区" }, { "id": 710605, "regionname": "猇亭区" }, { "id": 710606, "regionname": "夷陵区" }, { "id": 710607, "regionname": "远安县" }, { "id": 710608, "regionname": "兴山县" }, { "id": 710609, "regionname": "秭归县" }, { "id": 710610, "regionname": "长阳县" }, { "id": 710611, "regionname": "五峰县" }, { "id": 710612, "regionname": "宜都市" }, { "id": 710613, "regionname": "当阳市" }, { "id": 710614, "regionname": "枝江市" }, { "id": 710615, "regionname": "高新区" }] }, {
                        "id": 7107, "cityname": "荆门市", "regions": [{ "id": 710702, "regionname": "东宝区" }, { "id": 710703, "regionname": "掇刀区" },
                            { "id": 710704, "regionname": "京山县" }, { "id": 710705, "regionname": "沙洋县" }, { "id": 710706, "regionname": "钟祥市" }]
                    }, { "id": 7108, "cityname": "鄂州市", "regions": [{ "id": 710802, "regionname": "梁子湖区" }, { "id": 710803, "regionname": "华容区" }, { "id": 710804, "regionname": "鄂城区" }] }, { "id": 7109, "cityname": "孝感市", "regions": [{ "id": 710902, "regionname": "孝南区" }, { "id": 710903, "regionname": "孝昌县" }, { "id": 710904, "regionname": "大悟县" }, { "id": 710905, "regionname": "云梦县" }, { "id": 710906, "regionname": "应城市" }, { "id": 710907, "regionname": "安陆市" }, { "id": 710908, "regionname": "汉川市" }] }, { "id": 7110, "cityname": "黄冈市", "regions": [{ "id": 711002, "regionname": "黄州区" }, { "id": 711003, "regionname": "团风县" }, { "id": 711004, "regionname": "红安县" }, { "id": 711005, "regionname": "罗田县" }, { "id": 711006, "regionname": "英山县" }, { "id": 711007, "regionname": "浠水县" }, { "id": 711008, "regionname": "蕲春县" }, { "id": 711009, "regionname": "黄梅县" }, { "id": 711010, "regionname": "麻城市" }, { "id": 711011, "regionname": "武穴市" }] }, { "id": 7111, "cityname": "咸宁市", "regions": [{ "id": 711102, "regionname": "咸安区" }, { "id": 711103, "regionname": "嘉鱼县" }, { "id": 711104, "regionname": "通城县" }, { "id": 711105, "regionname": "崇阳县" }, { "id": 711106, "regionname": "通山县" }, { "id": 711107, "regionname": "赤壁市" }] }, { "id": 7112, "cityname": "随州市", "regions": [{ "id": 711202, "regionname": "曾都区" }, { "id": 711203, "regionname": "广水市" }] }, { "id": 7113, "cityname": "恩施", "regions": [{ "id": 711301, "regionname": "恩施市" }, { "id": 711302, "regionname": "利川市" }, { "id": 711303, "regionname": "建始县" }, { "id": 711304, "regionname": "巴东县" }, { "id": 711305, "regionname": "宣恩县" }, { "id": 711306, "regionname": "咸丰县" }, { "id": 711307, "regionname": "来凤县" }, { "id": 711308, "regionname": "鹤峰县" }] }]
            }, { "id": 72, "provincename": "湖南省", "citys": [{ "id": 7201, "cityname": "长沙市", "regions": [{ "id": 720102, "regionname": "芙蓉区" }, { "id": 720103, "regionname": "天心区" }, { "id": 720104, "regionname": "岳麓区" }, { "id": 720105, "regionname": "开福区" }, { "id": 720106, "regionname": "雨花区" }, { "id": 720107, "regionname": "长沙县" }, { "id": 720108, "regionname": "望城县" }, { "id": 720109, "regionname": "宁乡县" }, { "id": 720110, "regionname": "浏阳市" }] }, { "id": 7202, "cityname": "株洲市", "regions": [{ "id": 720202, "regionname": "荷塘区" }, { "id": 720203, "regionname": "芦淞区" }, { "id": 720204, "regionname": "石峰区" }, { "id": 720205, "regionname": "天元区" }, { "id": 720206, "regionname": "株洲县" }, { "id": 720207, "regionname": "攸县" }, { "id": 720208, "regionname": "茶陵县" }, { "id": 720209, "regionname": "炎陵县" }, { "id": 720210, "regionname": "醴陵市" }, { "id": 720211, "regionname": "高新区" }] }, { "id": 7203, "cityname": "湘潭市", "regions": [{ "id": 720302, "regionname": "雨湖区" }, { "id": 720303, "regionname": "岳塘区" }, { "id": 720304, "regionname": "湘潭县" }, { "id": 720305, "regionname": "湘乡市" }, { "id": 720306, "regionname": "韶山市" }, { "id": 720307, "regionname": "高新区" }] }, { "id": 7204, "cityname": "衡阳市", "regions": [{ "id": 720402, "regionname": "珠晖区" }, { "id": 720403, "regionname": "雁峰区" }, { "id": 720404, "regionname": "石鼓区" }, { "id": 720405, "regionname": "蒸湘区" }, { "id": 720406, "regionname": "南岳区" }, { "id": 720407, "regionname": "衡阳县" }, { "id": 720408, "regionname": "衡南县" }, { "id": 720409, "regionname": "衡山县" }, { "id": 720410, "regionname": "衡东县" }, { "id": 720411, "regionname": "祁东县" }, { "id": 720412, "regionname": "耒阳市" }, { "id": 720413, "regionname": "常宁市" }] }, { "id": 7205, "cityname": "益阳市", "regions": [{ "id": 720502, "regionname": "资阳区" }, { "id": 720503, "regionname": "赫山区" }, { "id": 720504, "regionname": "南县" }, { "id": 720505, "regionname": "桃江县" }, { "id": 720506, "regionname": "安化县" }, { "id": 720507, "regionname": "沅江市" }, { "id": 720508, "regionname": "高新区" }] }, { "id": 7206, "cityname": "常德市", "regions": [{ "id": 720602, "regionname": "武陵区" }, { "id": 720603, "regionname": "鼎城区" }, { "id": 720604, "regionname": "安乡县" }, { "id": 720605, "regionname": "汉寿县" }, { "id": 720606, "regionname": "澧县" }, { "id": 720607, "regionname": "临澧县" }, { "id": 720608, "regionname": "桃源县" }, { "id": 720609, "regionname": "石门县" }, { "id": 720610, "regionname": "津市市" }] }, { "id": 7207, "cityname": "岳阳市", "regions": [{ "id": 720702, "regionname": "岳阳楼区" }, { "id": 720703, "regionname": "云溪区" }, { "id": 720704, "regionname": "君山区" }, { "id": 720705, "regionname": "岳阳县" }, { "id": 720706, "regionname": "华容县" }, { "id": 720707, "regionname": "湘阴县" }, { "id": 720708, "regionname": "平江县" }, { "id": 720709, "regionname": "汨罗市" }, { "id": 720710, "regionname": "临湘市" }] }, { "id": 7208, "cityname": "邵阳市", "regions": [{ "id": 720802, "regionname": "双清区" }, { "id": 720803, "regionname": "大祥区" }, { "id": 720804, "regionname": "北塔区" }, { "id": 720805, "regionname": "邵东县" }, { "id": 720806, "regionname": "新邵县" }, { "id": 720807, "regionname": "邵阳县" }, { "id": 720808, "regionname": "隆回县" }, { "id": 720809, "regionname": "洞口县" }, { "id": 720810, "regionname": "绥宁县" }, { "id": 720811, "regionname": "新宁县" }, { "id": 720812, "regionname": "城步县" }, { "id": 720813, "regionname": "武冈市" }] }, { "id": 7209, "cityname": "郴州市", "regions": [{ "id": 720902, "regionname": "北湖区" }, { "id": 720903, "regionname": "苏仙区" }, { "id": 720904, "regionname": "桂阳县" }, { "id": 720905, "regionname": "宜章县" }, { "id": 720906, "regionname": "永兴县" }, { "id": 720907, "regionname": "嘉禾县" }, { "id": 720908, "regionname": "临武县" }, { "id": 720909, "regionname": "汝城县" }, { "id": 720910, "regionname": "桂东县" }, { "id": 720911, "regionname": "安仁县" }, { "id": 720912, "regionname": "资兴市" }] }, { "id": 7210, "cityname": "娄底市", "regions": [{ "id": 721002, "regionname": "娄星区" }, { "id": 721003, "regionname": "双峰县" }, { "id": 721004, "regionname": "新化县" }, { "id": 721005, "regionname": "冷水江市" }, { "id": 721006, "regionname": "涟源市" }] }, { "id": 7211, "cityname": "永州市", "regions": [{ "id": 721102, "regionname": "零陵区" }, { "id": 721103, "regionname": "冷水滩区" }, { "id": 721104, "regionname": "祁阳县" }, { "id": 721105, "regionname": "东安县" }, { "id": 721106, "regionname": "双牌县" }, { "id": 721107, "regionname": "道县" }, { "id": 721108, "regionname": "江永县" }, { "id": 721109, "regionname": "宁远县" }, { "id": 721110, "regionname": "蓝山县" }, { "id": 721111, "regionname": "新田县" }, { "id": 721112, "regionname": "江华县" }] }, { "id": 7212, "cityname": "怀化市", "regions": [{ "id": 721202, "regionname": "鹤城区" }, { "id": 721203, "regionname": "中方县" }, { "id": 721204, "regionname": "沅陵县" }, { "id": 721205, "regionname": "辰溪县" }, { "id": 721206, "regionname": "溆浦县" }, { "id": 721207, "regionname": "会同县" }, { "id": 721208, "regionname": "麻阳县" }, { "id": 721209, "regionname": "新晃县" }, { "id": 721210, "regionname": "芷江县" }, { "id": 721211, "regionname": "靖州苗族县" }, { "id": 721212, "regionname": "通道县" }, { "id": 721213, "regionname": "洪江市" }] }, { "id": 7213, "cityname": "张家界市", "regions": [{ "id": 721302, "regionname": "永定区" }, { "id": 721303, "regionname": "武陵源区" }, { "id": 721304, "regionname": "慈利县" }, { "id": 721305, "regionname": "桑植县" }] }, { "id": 7214, "cityname": "湘西", "regions": [{ "id": 721401, "regionname": "吉首市" }, { "id": 721402, "regionname": "泸溪县" }, { "id": 721403, "regionname": "凤凰县" }, { "id": 721404, "regionname": "花垣县" }, { "id": 721405, "regionname": "保靖县" }, { "id": 721406, "regionname": "古丈县" }, { "id": 721407, "regionname": "永顺县" }, { "id": 721408, "regionname": "龙山县" }] }] }, {
                "id": 80, "provincename": "陕西省", "citys": [{ "id": 8001, "cityname": "西安市", "regions": [{ "id": 800102, "regionname": "新城区" }, { "id": 800103, "regionname": "碑林区" }, { "id": 800104, "regionname": "莲湖区" }, { "id": 800105, "regionname": "灞桥区" }, { "id": 800106, "regionname": "未央区" }, { "id": 800107, "regionname": "雁塔区" }, { "id": 800108, "regionname": "阎良区" }, { "id": 800109, "regionname": "临潼区" }, { "id": 800110, "regionname": "长安区" }, { "id": 800111, "regionname": "蓝田县" }, { "id": 800112, "regionname": "周至县" }, { "id": 800113, "regionname": "户县" }, { "id": 800114, "regionname": "高陵县" }, { "id": 800115, "regionname": "经济开发区" }, { "id": 800116, "regionname": "高新区" }] }, { "id": 8002, "cityname": "宝鸡市", "regions": [{ "id": 800202, "regionname": "渭滨区" }, { "id": 800203, "regionname": "金台区" }, { "id": 800204, "regionname": "陈仓区" }, { "id": 800205, "regionname": "凤翔县" }, { "id": 800206, "regionname": "岐山县" }, { "id": 800207, "regionname": "扶风县" }, { "id": 800208, "regionname": "眉县" }, { "id": 800209, "regionname": "陇县" }, { "id": 800210, "regionname": "千阳县" }, { "id": 800211, "regionname": "麟游县" }, { "id": 800212, "regionname": "凤县" }, { "id": 800213, "regionname": "太白县" }, { "id": 800214, "regionname": "高新区" }] }, { "id": 8003, "cityname": "咸阳市", "regions": [{ "id": 800302, "regionname": "秦都区" }, { "id": 800304, "regionname": "渭城区" }, { "id": 800305, "regionname": "三原县" }, { "id": 800306, "regionname": "泾阳县" }, { "id": 800307, "regionname": "乾县" }, { "id": 800308, "regionname": "礼泉县" }, { "id": 800309, "regionname": "永寿县" }, { "id": 800310, "regionname": "彬县" }, { "id": 800311, "regionname": "长武县" }, { "id": 800312, "regionname": "旬邑县" }, { "id": 800313, "regionname": "淳化县" }, { "id": 800314, "regionname": "武功县" }, { "id": 800315, "regionname": "兴平市" }] }, { "id": 8004, "cityname": "渭南市", "regions": [{ "id": 800402, "regionname": "临渭区" }, { "id": 800403, "regionname": "华县" }, { "id": 800404, "regionname": "潼关县" }, { "id": 800405, "regionname": "大荔县" }, { "id": 800406, "regionname": "合阳县" }, { "id": 800407, "regionname": "澄城县" }, { "id": 800408, "regionname": "蒲城县" }, { "id": 800409, "regionname": "白水县" }, { "id": 800410, "regionname": "富平县" }, { "id": 800411, "regionname": "韩城市" }, { "id": 800412, "regionname": "华阴市" }, { "id": 800413, "regionname": "高新区" }] }, { "id": 8005, "cityname": "延安市", "regions": [{ "id": 800502, "regionname": "宝塔区" }, { "id": 800503, "regionname": "延长县" }, { "id": 800504, "regionname": "延川县" }, { "id": 800505, "regionname": "子长县" }, { "id": 800506, "regionname": "安塞县" }, { "id": 800507, "regionname": "志丹县" }, { "id": 800508, "regionname": "吴起县" }, { "id": 800509, "regionname": "甘泉县" }, { "id": 800510, "regionname": "富县" }, { "id": 800511, "regionname": "洛川县" }, { "id": 800512, "regionname": "宜川县" }, { "id": 800513, "regionname": "黄龙县" }, { "id": 800514, "regionname": "黄陵县" }] }, { "id": 8006, "cityname": "榆林市", "regions": [{ "id": 800602, "regionname": "榆阳区" }, { "id": 800603, "regionname": "神木县" }, { "id": 800604, "regionname": "府谷县" }, { "id": 800605, "regionname": "横山县" }, { "id": 800606, "regionname": "靖边县" }, { "id": 800607, "regionname": "定边县" }, { "id": 800608, "regionname": "绥德县" }, { "id": 800609, "regionname": "米脂县" }, { "id": 800610, "regionname": "佳县" }, { "id": 800611, "regionname": "吴堡县" }, { "id": 800612, "regionname": "清涧县" }, { "id": 800613, "regionname": "子洲县" }] }, { "id": 8007, "cityname": "铜川市", "regions": [{ "id": 800702, "regionname": "王益区" }, { "id": 800703, "regionname": "印台区" }, { "id": 800704, "regionname": "耀州区" }, { "id": 800705, "regionname": "宜君县" }] }, { "id": 8008, "cityname": "汉中市", "regions": [{ "id": 800802, "regionname": "汉台区" }, { "id": 800803, "regionname": "南郑县" }, { "id": 800804, "regionname": "城固县" }, { "id": 800805, "regionname": "洋县" }, { "id": 800806, "regionname": "西乡县" }, { "id": 800807, "regionname": "勉县" }, { "id": 800808, "regionname": "宁强县" }, { "id": 800809, "regionname": "略阳县" }, { "id": 800810, "regionname": "镇巴县" }, { "id": 800811, "regionname": "留坝县" }, { "id": 800812, "regionname": "佛坪县" }] }, {
                        "id": 8009, "cityname": "安康市", "regions": [{ "id": 800902, "regionname": "汉滨区" }, { "id": 800903, "regionname": "汉阴县" }, { "id": 800904, "regionname": "石泉县" }, { "id": 800905, "regionname": "宁陕县" }, { "id": 800906, "regionname": "紫阳县" }, { "id": 800907, "regionname": "岚皋县" }, { "id": 800908, "regionname": "平利县" },
                            { "id": 800909, "regionname": "镇坪县" }, { "id": 800910, "regionname": "旬阳县" }, { "id": 800911, "regionname": "白河县" }]
                    }, { "id": 8010, "cityname": "商洛市", "regions": [{ "id": 801002, "regionname": "商州区" }, { "id": 801003, "regionname": "洛南县" }, { "id": 801004, "regionname": "丹凤县" }, { "id": 801005, "regionname": "商南县" }, { "id": 801006, "regionname": "山阳县" }, { "id": 801007, "regionname": "镇安县" }, { "id": 801008, "regionname": "柞水县" }] }, { "id": 8011, "cityname": "杨凌", "regions": [{ "id": 801101, "regionname": "农业示范区" }] }]
            }, { "id": 81, "provincename": "青海省", "citys": [{ "id": 8101, "cityname": "西宁市", "regions": [{ "id": 810102, "regionname": "城东区" }, { "id": 810103, "regionname": "城中区" }, { "id": 810104, "regionname": "城西区" }, { "id": 810105, "regionname": "城北区" }, { "id": 810106, "regionname": "大通县" }, { "id": 810107, "regionname": "湟中县" }, { "id": 810108, "regionname": "湟源县" }] }, { "id": 8102, "cityname": "海东地区", "regions": [{ "id": 810201, "regionname": "平安县" }, { "id": 810202, "regionname": "民和县" }, { "id": 810203, "regionname": "乐都县" }, { "id": 810204, "regionname": "互助县" }, { "id": 810205, "regionname": "化隆县" }, { "id": 810206, "regionname": "循化县" }] }, { "id": 8103, "cityname": "海南州", "regions": [{ "id": 810301, "regionname": "共和县" }, { "id": 810302, "regionname": "同德县" }, { "id": 810303, "regionname": "贵德县" }, { "id": 810304, "regionname": "兴海县" }, { "id": 810305, "regionname": "贵南县" }] }, { "id": 8104, "cityname": "海北州", "regions": [{ "id": 810401, "regionname": "门源县" }, { "id": 810402, "regionname": "祁连县" }, { "id": 810403, "regionname": "海晏县" }, { "id": 810404, "regionname": "刚察县" }] }, { "id": 8105, "cityname": "海西蒙古族州", "regions": [{ "id": 810501, "regionname": "格尔木市" }, { "id": 810502, "regionname": "德令哈市" }, { "id": 810503, "regionname": "乌兰县" }, { "id": 810504, "regionname": "都兰县" }, { "id": 810505, "regionname": "天峻县" }] }, { "id": 8106, "cityname": "黄南州", "regions": [{ "id": 810601, "regionname": "同仁县" }, { "id": 810602, "regionname": "尖扎县" }, { "id": 810603, "regionname": "泽库县" }, { "id": 810604, "regionname": "河南县" }] }, { "id": 8107, "cityname": "果洛州", "regions": [{ "id": 810701, "regionname": "玛沁县" }, { "id": 810702, "regionname": "班玛县" }, { "id": 810703, "regionname": "甘德县" }, { "id": 810704, "regionname": "达日县" }, { "id": 810705, "regionname": "久治县" }, { "id": 810706, "regionname": "玛多县" }] }, { "id": 8108, "cityname": "玉树州", "regions": [{ "id": 810801, "regionname": "玉树县" }, { "id": 810802, "regionname": "杂多县" }, { "id": 810803, "regionname": "称多县" }, { "id": 810804, "regionname": "治多县" }, { "id": 810805, "regionname": "囊谦县" }, { "id": 810806, "regionname": "曲麻莱县" }] }] }, { "id": 82, "provincename": "宁夏", "citys": [{ "id": 8201, "cityname": "银川市", "regions": [{ "id": 820102, "regionname": "兴庆区" }, { "id": 820103, "regionname": "西夏区" }, { "id": 820104, "regionname": "金凤区" }, { "id": 820105, "regionname": "永宁县" }, { "id": 820106, "regionname": "贺兰县" }, { "id": 820107, "regionname": "灵武市" }] }, { "id": 8202, "cityname": "石嘴山市", "regions": [{ "id": 820202, "regionname": "大武口区" }, { "id": 820203, "regionname": "惠农区" }, { "id": 820204, "regionname": "平罗县" }] }, { "id": 8203, "cityname": "吴忠市", "regions": [{ "id": 820302, "regionname": "利通区" }, { "id": 820303, "regionname": "盐池县" }, { "id": 820304, "regionname": "同心县" }, { "id": 820305, "regionname": "青铜峡市" }] }, { "id": 8204, "cityname": "固原市", "regions": [{ "id": 820402, "regionname": "原州区" }, { "id": 820403, "regionname": "西吉县" }, { "id": 820404, "regionname": "隆德县" }, { "id": 820405, "regionname": "泾源县" }, { "id": 820406, "regionname": "彭阳县" }] }, { "id": 8205, "cityname": "中卫市", "regions": [{ "id": 820502, "regionname": "沙坡头区" }, { "id": 820503, "regionname": "中宁县" }, { "id": 820504, "regionname": "海原县" }] }] }, { "id": 83, "provincename": "新疆", "citys": [{ "id": 8301, "cityname": "乌鲁木齐市", "regions": [{ "id": 830102, "regionname": "天山区" }, { "id": 830103, "regionname": "沙依巴克区" }, { "id": 830105, "regionname": "水磨沟区" }, { "id": 830106, "regionname": "头屯河区(开发区)" }, { "id": 830107, "regionname": "达坂城区" }, { "id": 830108, "regionname": "米东区" }, { "id": 830109, "regionname": "乌鲁木齐县" }, { "id": 830110, "regionname": "新市区(高新区)" }] }, { "id": 8302, "cityname": "伊犁州", "regions": [{ "id": 830201, "regionname": "伊宁市" }, { "id": 830202, "regionname": "奎屯市" }, { "id": 830203, "regionname": "伊宁县" }, { "id": 830204, "regionname": "察布查尔" }, { "id": 830205, "regionname": "霍城县" }, { "id": 830206, "regionname": "巩留县" }, { "id": 830207, "regionname": "新源县" }, { "id": 830208, "regionname": "昭苏县" }, { "id": 830209, "regionname": "特克斯县" }, { "id": 830210, "regionname": "尼勒克县" }] }, { "id": 8303, "cityname": "阿勒泰地区", "regions": [{ "id": 830301, "regionname": "阿勒泰市" }, { "id": 830302, "regionname": "布尔津县" }, { "id": 830303, "regionname": "富蕴县" }, { "id": 830304, "regionname": "福海县" }, { "id": 830305, "regionname": "哈巴河县" }, { "id": 830306, "regionname": "青河县" }, { "id": 830307, "regionname": "吉木乃县" }] }, { "id": 8304, "cityname": "塔城地区", "regions": [{ "id": 830401, "regionname": "塔城市" }, { "id": 830402, "regionname": "乌苏市" }, { "id": 830403, "regionname": "额敏县" }, { "id": 830404, "regionname": "沙湾县" }, { "id": 830405, "regionname": "托里县" }, { "id": 830406, "regionname": "裕民县" }, { "id": 830407, "regionname": "和布克赛尔" }] }, { "id": 8305, "cityname": "博尔塔拉", "regions": [{ "id": 830501, "regionname": "博乐市" }, { "id": 830502, "regionname": "精河县" }, { "id": 830503, "regionname": "温泉县" }] }, { "id": 8306, "cityname": "昌吉", "regions": [{ "id": 830601, "regionname": "昌吉市" }, { "id": 830602, "regionname": "阜康市" }, { "id": 830603, "regionname": "呼图壁县" }, { "id": 830604, "regionname": "玛纳斯县" }, { "id": 830605, "regionname": "奇台县" }, { "id": 830606, "regionname": "吉木萨尔县" }, { "id": 830607, "regionname": "木垒县" }, { "id": 830608, "regionname": "高新区" }] }, { "id": 8307, "cityname": "吐鲁番地区", "regions": [{ "id": 830701, "regionname": "吐鲁番市" }, { "id": 830702, "regionname": "鄯善县" }, { "id": 830703, "regionname": "托克逊县" }] }, { "id": 8308, "cityname": "巴音郭楞", "regions": [{ "id": 830801, "regionname": "库尔勒市" }, { "id": 830802, "regionname": "轮台县" }, { "id": 830803, "regionname": "尉犁县" }, { "id": 830804, "regionname": "若羌县" }, { "id": 830805, "regionname": "且末县" }, { "id": 830806, "regionname": "焉耆县" }, { "id": 830807, "regionname": "和静县" }, { "id": 830808, "regionname": "和硕县" }, { "id": 830809, "regionname": "博湖县" }] }, { "id": 8309, "cityname": "哈密地区", "regions": [{ "id": 830901, "regionname": "哈密市" }, { "id": 830902, "regionname": "巴里坤县" }, { "id": 830903, "regionname": "伊吾县" }] }, { "id": 8310, "cityname": "和田地区", "regions": [{ "id": 831001, "regionname": "和田市" }, { "id": 831002, "regionname": "和田县" }, { "id": 831003, "regionname": "墨玉县" }, { "id": 831004, "regionname": "皮山县" }, { "id": 831005, "regionname": "洛浦县" }, { "id": 831006, "regionname": "策勒县" }, { "id": 831007, "regionname": "于田县" }, { "id": 831008, "regionname": "民丰县" }] }, { "id": 8311, "cityname": "阿克苏地区", "regions": [{ "id": 831101, "regionname": "阿克苏市" }, { "id": 831102, "regionname": "温宿县" }, { "id": 831103, "regionname": "库车县" }, { "id": 831104, "regionname": "沙雅县" }, { "id": 831105, "regionname": "新和县" }, { "id": 831106, "regionname": "拜城县" }, { "id": 831107, "regionname": "乌什县" }, { "id": 831108, "regionname": "阿瓦提县" }, { "id": 831109, "regionname": "柯坪县" }] }, { "id": 8312, "cityname": "克孜勒苏", "regions": [{ "id": 831201, "regionname": "阿图什市" }, { "id": 831202, "regionname": "阿克陶县" }, { "id": 831203, "regionname": "阿合奇县" }, { "id": 831204, "regionname": "乌恰县" }] }, { "id": 8313, "cityname": "喀什地区", "regions": [{ "id": 831301, "regionname": "喀什市" }, { "id": 831302, "regionname": "疏附县" }, { "id": 831303, "regionname": "疏勒县" }, { "id": 831304, "regionname": "英吉沙县" }, { "id": 831305, "regionname": "泽普县" }, { "id": 831306, "regionname": "莎车县" }, { "id": 831307, "regionname": "叶城县" }, { "id": 831308, "regionname": "麦盖提县" }, { "id": 831309, "regionname": "岳普湖县" }, { "id": 831310, "regionname": "伽师县" }, { "id": 831311, "regionname": "巴楚县" }, { "id": 831312, "regionname": "塔什库尔干" }] }, { "id": 8314, "cityname": "克拉玛依市", "regions": [{ "id": 831402, "regionname": "独山子区" }, { "id": 831403, "regionname": "克拉玛依区" }, { "id": 831404, "regionname": "白碱滩区" }, { "id": 831405, "regionname": "乌尔禾区" }] }] }, {
                "id": 84, "provincename": "甘肃省", "citys": [{ "id": 8401, "cityname": "兰州市", "regions": [{ "id": 840102, "regionname": "城关区" }, { "id": 840103, "regionname": "七里河区" }, { "id": 840104, "regionname": "西固区" }, { "id": 840105, "regionname": "安宁区" }, { "id": 840106, "regionname": "红古区" }, { "id": 840107, "regionname": "永登县" }, { "id": 840108, "regionname": "皋兰县" }, { "id": 840109, "regionname": "榆中县" }] }, { "id": 8402, "cityname": "天水市", "regions": [{ "id": 840202, "regionname": "秦州区" }, { "id": 840203, "regionname": "麦积区" }, { "id": 840204, "regionname": "清水县" }, { "id": 840205, "regionname": "秦安县" }, { "id": 840206, "regionname": "甘谷县" }, { "id": 840207, "regionname": "武山县" }, { "id": 840208, "regionname": "张家川县" }] }, { "id": 8404, "cityname": "武威市", "regions": [{ "id": 840402, "regionname": "凉州区" }, { "id": 840403, "regionname": "民勤县" }, { "id": 840404, "regionname": "古浪县" }, { "id": 840405, "regionname": "天祝县" }] }, { "id": 8405, "cityname": "金昌市", "regions": [{ "id": 840502, "regionname": "金川区" }, { "id": 840503, "regionname": "永昌县" }] }, { "id": 8406, "cityname": "酒泉市", "regions": [{ "id": 840602, "regionname": "肃州区" }, { "id": 840603, "regionname": "金塔县" }, { "id": 840604, "regionname": "瓜州县" }, { "id": 840605, "regionname": "肃北县" }, { "id": 840606, "regionname": "阿克塞县" }, { "id": 840607, "regionname": "玉门市" }, { "id": 840608, "regionname": "敦煌市" }] }, { "id": 8407, "cityname": "张掖市", "regions": [{ "id": 840702, "regionname": "甘州区" }, { "id": 840703, "regionname": "肃南县" }, { "id": 840704, "regionname": "民乐县" }, { "id": 840705, "regionname": "临泽县" }, { "id": 840706, "regionname": "高台县" }, { "id": 840707, "regionname": "山丹县" }] }, { "id": 8408, "cityname": "庆阳市", "regions": [{ "id": 840802, "regionname": "西峰区" }, { "id": 840803, "regionname": "庆城县" }, { "id": 840804, "regionname": "环县" }, { "id": 840805, "regionname": "华池县" }, { "id": 840806, "regionname": "合水县" }, { "id": 840807, "regionname": "正宁县" }, { "id": 840808, "regionname": "宁县" }, { "id": 840809, "regionname": "镇原县" }] }, {
                        "id": 8409, "cityname": "平凉市", "regions": [{ "id": 840902, "regionname": "崆峒区" }, { "id": 840903, "regionname": "泾川县" }, { "id": 840904, "regionname": "灵台县" }, { "id": 840905, "regionname": "崇信县" }, { "id": 840906, "regionname": "华亭县" },
                            { "id": 840907, "regionname": "庄浪县" }, { "id": 840908, "regionname": "静宁县" }]
                    }, { "id": 8410, "cityname": "白银市", "regions": [{ "id": 841002, "regionname": "白银区" }, { "id": 841003, "regionname": "平川区" }, { "id": 841004, "regionname": "靖远县" }, { "id": 841005, "regionname": "会宁县" }, { "id": 841006, "regionname": "景泰县" }, { "id": 841007, "regionname": "高新区" }] }, { "id": 8411, "cityname": "定西市", "regions": [{ "id": 841102, "regionname": "安定区" }, { "id": 841103, "regionname": "通渭县" }, { "id": 841104, "regionname": "陇西县" }, { "id": 841105, "regionname": "渭源县" }, { "id": 841106, "regionname": "临洮县" }, { "id": 841107, "regionname": "漳县" }, { "id": 841108, "regionname": "岷县" }] }, { "id": 8412, "cityname": "陇南市", "regions": [{ "id": 841202, "regionname": "武都区" }, { "id": 841203, "regionname": "成县" }, { "id": 841204, "regionname": "文县" }, { "id": 841205, "regionname": "宕昌县" }, { "id": 841206, "regionname": "康县" }, { "id": 841207, "regionname": "西和县" }, { "id": 841208, "regionname": "礼县" }, { "id": 841209, "regionname": "徽县" }, { "id": 841210, "regionname": "两当县" }] }, { "id": 8413, "cityname": "临夏", "regions": [{ "id": 841301, "regionname": "临夏市" }, { "id": 841302, "regionname": "临夏县" }, { "id": 841303, "regionname": "康乐县" }, { "id": 841304, "regionname": "永靖县" }, { "id": 841305, "regionname": "广河县" }, { "id": 841306, "regionname": "和政县" }, { "id": 841307, "regionname": "东乡族自治县" }, { "id": 841308, "regionname": "积石山县" }] }, { "id": 8414, "cityname": "甘南州", "regions": [{ "id": 841401, "regionname": "合作市" }, { "id": 841402, "regionname": "临潭县" }, { "id": 841403, "regionname": "卓尼县" }, { "id": 841404, "regionname": "舟曲县" }, { "id": 841405, "regionname": "迭部县" }, { "id": 841406, "regionname": "玛曲县" }, { "id": 841407, "regionname": "碌曲县" }, { "id": 841408, "regionname": "夏河县" }] }]
            }];
        if (this.navParams.get('address')) {
            this.address = this.navParams.get('address');
        }
        this.addressModal = this.navParams.get('addressModal');
    }
    AddressmodelComponent.prototype.assembleHTML = function () {
        return this.sanitizer.bypassSecurityTrustHtml(this.strHTML);
    };
    //绑定事件的方法
    AddressmodelComponent.prototype.bindEvent = function () {
        var _this = this;
        var attrContentDom = this.el.nativeElement.querySelector('.chooseContent');
        //content click
        attrContentDom.onclick = function (e) {
            var divTarget = e.target;
            var provinceLi = _this.el.nativeElement.querySelector('#province');
            var cityLi = _this.el.nativeElement.querySelector('#city');
            var regionLi = _this.el.nativeElement.querySelector('#region');
            var tip = _this.el.nativeElement.querySelector('.tip');
            var choosetTip = _this.el.nativeElement.querySelector('.choose_tip');
            if (divTarget.getAttribute('type')) {
                var type = e.target.getAttribute('type');
                if (type == 'province') {
                    tip.innerHTML = '已选择';
                    choosetTip.innerHTML = '选择市';
                    provinceLi.innerHTML = divTarget.innerHTML;
                    provinceLi.setAttribute("data", divTarget.getAttribute('data'));
                    _this.addressModal.provinceId = divTarget.getAttribute('data');
                    _this.addressModal.cityId = 0;
                    _this.addressModal.regionId = 0;
                    _this.addressModal.provinceName = divTarget.innerHTML;
                    _this.addressModal.cityName = '';
                    _this.addressModal.regionName = '';
                    _this.renderer2.setStyle(cityLi, 'display', 'list-item');
                    _this.renderer2.setStyle(regionLi, 'display', 'none');
                    cityLi.innerHTML = '请选择';
                    _this.clickHead('city');
                }
                else if (type == 'city') {
                    tip.innerHTML = '已选择';
                    choosetTip.innerHTML = '选择区';
                    cityLi.innerHTML = divTarget.innerHTML;
                    cityLi.setAttribute("data", divTarget.getAttribute('data'));
                    _this.addressModal.cityId = divTarget.getAttribute('data');
                    _this.addressModal.regionId = 0;
                    _this.addressModal.cityName = divTarget.innerHTML;
                    _this.addressModal.regionName = '';
                    _this.renderer2.setStyle(cityLi, 'display', 'list-item');
                    _this.renderer2.setStyle(regionLi, 'display', 'list-item');
                    regionLi.innerHTML = '请选择';
                    _this.clickHead('region');
                }
                else {
                    _this.addressModal.regionId = divTarget.getAttribute('data');
                    _this.addressModal.regionName = divTarget.innerHTML;
                    _this.close();
                }
            }
        };
        //head click
        var attrHeadDom = this.el.nativeElement.querySelector('.chooseHead');
        attrHeadDom.onclick = function (e) {
            var liTarget = e.target;
            if (liTarget.getAttribute('type')) {
                _this.clickHead(liTarget.getAttribute('type'));
            }
        };
    };
    AddressmodelComponent.prototype.clickHead = function (type) {
        this.strHTML = '';
        var provinceHead = this.el.nativeElement.querySelector('#province');
        var cityHead = this.el.nativeElement.querySelector('#city');
        var regionHead = this.el.nativeElement.querySelector('#region');
        if (type == 'province') {
            //变颜色
            this.renderer2.setStyle(provinceHead, 'color', '#f53d3d');
            this.renderer2.setStyle(cityHead, 'color', 'black');
            this.renderer2.setStyle(regionHead, 'color', 'black');
            for (var _i = 0, _a = this.address; _i < _a.length; _i++) {
                var i = _a[_i];
                this.strHTML += '<div type = "province" data="' + i['id'] + '">' + i['provincename'] + '</div>';
            }
        }
        else if (type == 'city') {
            //变颜色
            this.renderer2.setStyle(provinceHead, 'color', 'black');
            this.renderer2.setStyle(cityHead, 'color', '#f53d3d');
            this.renderer2.setStyle(regionHead, 'color', 'black');
            //得知province的选择
            var provinceLi = this.el.nativeElement.querySelector('#province');
            var provinceId = provinceLi.getAttribute('data');
            for (var _b = 0, _c = this.address; _b < _c.length; _b++) {
                var i = _c[_b];
                if (provinceId == i['id']) {
                    for (var _d = 0, _e = i['citys']; _d < _e.length; _d++) {
                        var j = _e[_d];
                        this.strHTML += '<div type = "city" data="' + j['id'] + '">' + j['cityname'] + '</div>';
                    }
                    break;
                }
            }
        }
        else {
            //变颜色
            this.renderer2.setStyle(provinceHead, 'color', 'black');
            this.renderer2.setStyle(cityHead, 'color', 'black');
            this.renderer2.setStyle(regionHead, 'color', '#f53d3d');
            //得知province的选择
            var provinceLi = this.el.nativeElement.querySelector('#province');
            var provinceId = provinceLi.getAttribute('data');
            //得知city的选择
            var cityLi = this.el.nativeElement.querySelector('#city');
            var cityId = cityLi.getAttribute('data');
            for (var _f = 0, _g = this.address; _f < _g.length; _f++) {
                var i = _g[_f];
                if (provinceId == i['id']) {
                    for (var _h = 0, _j = i['citys']; _h < _j.length; _h++) {
                        var j = _j[_h];
                        if (cityId == j['id']) {
                            for (var _k = 0, _l = j['regions']; _k < _l.length; _k++) {
                                var k = _l[_k];
                                this.strHTML += '<div type = "region" data="' + k['id'] + '">' + k['regionname'] + '</div>';
                            }
                            break;
                        }
                    }
                    break;
                }
            }
        }
    };
    AddressmodelComponent.prototype.showContent = function () {
        this.strHTML = '';
        var provinceId = this.addressModal.provinceId;
        var cityId = this.addressModal.cityId;
        var regionId = this.addressModal.regionId;
        var provinceHead = this.el.nativeElement.querySelector('#province');
        var cityHead = this.el.nativeElement.querySelector('#city');
        var regionHead = this.el.nativeElement.querySelector('#region');
        // test
        // provinceId = 62;
        // cityId = 6201;
        // regionId = 0;
        if (provinceId == 0) {
            //变颜色
            this.renderer2.setStyle(provinceHead, 'color', '#f53d3d');
            var provinceLi = this.el.nativeElement.querySelector('#province');
            provinceLi.innerHTML = '请选择';
            for (var _i = 0, _a = this.address; _i < _a.length; _i++) {
                var i = _a[_i];
                this.strHTML += '<div type = "province" data="' + i['id'] + '">' + i['provincename'] + '</div>';
            }
        }
        else if (cityId == 0) {
            this.renderer2.setStyle(cityHead, 'color', '#f53d3d');
            var provinceLi = this.el.nativeElement.querySelector('#province');
            var cityLi = this.el.nativeElement.querySelector('#city');
            var tip = this.el.nativeElement.querySelector('.tip');
            var choosetTip = this.el.nativeElement.querySelector('.choose_tip');
            //更改tip
            tip.innerHTML = '已选择';
            choosetTip.innerHTML = '选择市';
            //取出对应省份
            for (var _b = 0, _c = this.address; _b < _c.length; _b++) {
                var i = _c[_b];
                if (i['id'] == provinceId) {
                    provinceLi.innerHTML = i['provincename'];
                    provinceLi.setAttribute("data", i['id']);
                    this.renderer2.setStyle(cityLi, 'display', 'list-item');
                    cityLi.innerHTML = '请选择';
                    for (var _d = 0, _e = i['citys']; _d < _e.length; _d++) {
                        var j = _e[_d];
                        this.strHTML += '<div type = "city" data="' + j['id'] + '">' + j['cityname'] + '</div>';
                    }
                    break;
                }
            }
        }
        else if (regionId == 0) {
            this.renderer2.setStyle(regionHead, 'color', '#f53d3d');
            var provinceLi = this.el.nativeElement.querySelector('#province');
            var cityLi = this.el.nativeElement.querySelector('#city');
            var regionLi = this.el.nativeElement.querySelector('#region');
            var tip = this.el.nativeElement.querySelector('.tip');
            var choosetTip = this.el.nativeElement.querySelector('.choose_tip');
            //更改tip
            tip.innerHTML = '已选择';
            choosetTip.innerHTML = '选择区';
            //取出对应省份
            for (var _f = 0, _g = this.address; _f < _g.length; _f++) {
                var i = _g[_f];
                if (i['id'] == provinceId) {
                    provinceLi.innerHTML = i['provincename'];
                    provinceLi.setAttribute("data", i['id']);
                    this.renderer2.setStyle(cityLi, 'display', 'list-item');
                    for (var _h = 0, _j = i['citys']; _h < _j.length; _h++) {
                        var j = _j[_h];
                        if (j['id'] == cityId) {
                            //取出city名字
                            cityLi.innerHTML = j['cityname'];
                            cityLi.setAttribute("data", j['id']);
                            this.renderer2.setStyle(regionLi, 'display', 'list-item');
                            regionLi.innerHTML = '请选择';
                            for (var _k = 0, _l = j['regions']; _k < _l.length; _k++) {
                                var k = _l[_k];
                                this.strHTML += '<div type = "region" data="' + k['id'] + '">' + k['regionname'] + '</div>';
                            }
                            break;
                        }
                    }
                    break;
                }
            }
        }
        else {
            this.renderer2.setStyle(regionHead, 'color', '#f53d3d');
            var provinceLi = this.el.nativeElement.querySelector('#province');
            var cityLi = this.el.nativeElement.querySelector('#city');
            var regionLi = this.el.nativeElement.querySelector('#region');
            var tip = this.el.nativeElement.querySelector('.tip');
            var choosetTip = this.el.nativeElement.querySelector('.choose_tip');
            //更改tip
            tip.innerHTML = '已选择';
            choosetTip.innerHTML = '选择区';
            //取出对应省份
            for (var _m = 0, _o = this.address; _m < _o.length; _m++) {
                var i = _o[_m];
                if (i['id'] == provinceId) {
                    provinceLi.innerHTML = i['provincename'];
                    provinceLi.setAttribute("data", i['id']);
                    this.renderer2.setStyle(cityLi, 'display', 'list-item');
                    for (var _p = 0, _q = i['citys']; _p < _q.length; _p++) {
                        var j = _q[_p];
                        if (j['id'] == cityId) {
                            //取出city名字
                            cityLi.innerHTML = j['cityname'];
                            this.renderer2.setStyle(regionLi, 'display', 'list-item');
                            cityLi.setAttribute("data", j['id']);
                            for (var _r = 0, _s = j['regions']; _r < _s.length; _r++) {
                                var k = _s[_r];
                                this.strHTML += '<div type = "region" data="' + k['id'] + '">' + k['regionname'] + '</div>';
                                if (k['id'] == regionId) {
                                    regionLi.innerHTML = k['regionname'];
                                }
                            }
                            break;
                        }
                    }
                    break;
                }
            }
        }
    };
    AddressmodelComponent.prototype.ionViewDidLoad = function () {
        this.showContent();
        this.bindEvent();
    };
    AddressmodelComponent.prototype.close = function () {
        this.viewCrl.dismiss({
            type: 2,
            callbackData: this.addressModal
        });
    };
    AddressmodelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'addressmodel',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\components\addressmodel\addressmodel.html"*/'<!-- Generated template for the AddressmodelComponent component -->\n\n<div id="hidebg" (tap)="close()"></div>\n\n\n\n<div class="addressframe">\n\n    \n\n\n\n            <ion-icon class="closeClass" name="close-circle" (tap)="close()" ></ion-icon>\n\n            <div class="head">请选择地区</div>\n\n    <div class="tip">已选择</div>\n\n    <div class="chooseHead">\n\n        <ul>\n\n            <li type="province" id="province">浙江省</li>\n\n            <li type="city" id="city">杭州市</li>\n\n            <li type="region" id="region">萧山区</li>\n\n        </ul>\n\n    </div>\n\n    <div class="choose_tip">选择省份</div>\n\n    <div class="chooseContent">\n\n        <div [innerHTML]="assembleHTML()"></div>\n\n    </div>\n\n</div>'/*ion-inline-end:"E:\apps\zjapp_wx\src\components\addressmodel\addressmodel.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */]])
    ], AddressmodelComponent);
    return AddressmodelComponent;
}());

//# sourceMappingURL=addressmodel.js.map

/***/ }),
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 123;

/***/ }),
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addaliacount/addaliacount.module": [
		166
	],
	"../pages/addbankacount/addbankacount.module": [
		168
	],
	"../pages/address/address.module": [
		169
	],
	"../pages/callcenter/callcenter.module": [
		170
	],
	"../pages/certification/certification.module": [
		173
	],
	"../pages/comment/comment.module": [
		174
	],
	"../pages/commercial/commercial.module": [
		175
	],
	"../pages/commercialdetail/commercialdetail.module": [
		176
	],
	"../pages/confirm-order/confirm-order.module": [
		177
	],
	"../pages/confirm-vip-order/confirm-vip-order.module": [
		178
	],
	"../pages/electransfer/electransfer.module": [
		179
	],
	"../pages/fandetail/fandetail.module": [
		180
	],
	"../pages/fans/fans.module": [
		181
	],
	"../pages/information/information.module": [
		182
	],
	"../pages/key-product-list/key-product-list.module": [
		183
	],
	"../pages/login/login.module": [
		184
	],
	"../pages/members-product/members-product.module": [
		185
	],
	"../pages/moneyrecord/moneyrecord.module": [
		186
	],
	"../pages/mywallet/mywallet.module": [
		187
	],
	"../pages/operateaddress/operateaddress.module": [
		191
	],
	"../pages/orderhandletransfer/orderhandletransfer.module": [
		192
	],
	"../pages/orderlist/orderlist.module": [
		193
	],
	"../pages/orders/orders.module": [
		194
	],
	"../pages/payment/payment.module": [
		195
	],
	"../pages/paysuccess/paysuccess.module": [
		196
	],
	"../pages/personal/personal.module": [
		197
	],
	"../pages/product-comment/product-comment.module": [
		198
	],
	"../pages/product-detail/product-detail.module": [
		199
	],
	"../pages/productlist/productlist.module": [
		204
	],
	"../pages/proxyapply/proxyapply.module": [
		205
	],
	"../pages/qrcode/qrcode.module": [
		206
	],
	"../pages/recharge/recharge.module": [
		207
	],
	"../pages/refund/refund.module": [
		208
	],
	"../pages/salereturn/salereturn.module": [
		392,
		0
	],
	"../pages/search/search.module": [
		209
	],
	"../pages/setattr/setattr.module": [
		210
	],
	"../pages/setpaypassword/setpaypassword.module": [
		211
	],
	"../pages/setting/setting.module": [
		212
	],
	"../pages/splitimmediately/splitimmediately.module": [
		213
	],
	"../pages/splitinit/splitinit.module": [
		214
	],
	"../pages/splitrecord/splitrecord.module": [
		215
	],
	"../pages/title/title.module": [
		216
	],
	"../pages/updatepassword/updatepassword.module": [
		217
	],
	"../pages/updatephonenum/updatephonenum.module": [
		218
	],
	"../pages/updatephonenumnext/updatephonenumnext.module": [
		219
	],
	"../pages/updaterank/updaterank.module": [
		220
	],
	"../pages/vippresent/vippresent.module": [
		221
	],
	"../pages/vippresentdetail/vippresentdetail.module": [
		222
	],
	"../pages/withdraw/withdraw.module": [
		223
	],
	"../pages/withdrawaccount/withdrawaccount.module": [
		224
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 165;
module.exports = webpackAsyncContext;

/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddaliacountPageModule", function() { return AddaliacountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addaliacount__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddaliacountPageModule = /** @class */ (function () {
    function AddaliacountPageModule() {
    }
    AddaliacountPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__addaliacount__["a" /* AddaliacountPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__addaliacount__["a" /* AddaliacountPage */]),
            ],
        })
    ], AddaliacountPageModule);
    return AddaliacountPageModule;
}());

//# sourceMappingURL=addaliacount.module.js.map

/***/ }),
/* 167 */,
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddbankacountPageModule", function() { return AddbankacountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addbankacount__ = __webpack_require__(313);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddbankacountPageModule = /** @class */ (function () {
    function AddbankacountPageModule() {
    }
    AddbankacountPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__addbankacount__["a" /* AddbankacountPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__addbankacount__["a" /* AddbankacountPage */]),
            ],
        })
    ], AddbankacountPageModule);
    return AddbankacountPageModule;
}());

//# sourceMappingURL=addbankacount.module.js.map

/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressPageModule", function() { return AddressPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__address__ = __webpack_require__(314);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddressPageModule = /** @class */ (function () {
    function AddressPageModule() {
    }
    AddressPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__address__["a" /* AddressPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__address__["a" /* AddressPage */]),
            ],
        })
    ], AddressPageModule);
    return AddressPageModule;
}());

//# sourceMappingURL=address.module.js.map

/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallcenterPageModule", function() { return CallcenterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__callcenter__ = __webpack_require__(315);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CallcenterPageModule = /** @class */ (function () {
    function CallcenterPageModule() {
    }
    CallcenterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__callcenter__["a" /* CallcenterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__callcenter__["a" /* CallcenterPage */]),
            ],
        })
    ], CallcenterPageModule);
    return CallcenterPageModule;
}());

//# sourceMappingURL=callcenter.module.js.map

/***/ }),
/* 171 */,
/* 172 */,
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificationPageModule", function() { return CertificationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__certification__ = __webpack_require__(324);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CertificationPageModule = /** @class */ (function () {
    function CertificationPageModule() {
    }
    CertificationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__certification__["a" /* CertificationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__certification__["a" /* CertificationPage */]),
            ],
        })
    ], CertificationPageModule);
    return CertificationPageModule;
}());

//# sourceMappingURL=certification.module.js.map

/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentPageModule", function() { return CommentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comment__ = __webpack_require__(325);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CommentPageModule = /** @class */ (function () {
    function CommentPageModule() {
    }
    CommentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__comment__["a" /* CommentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__comment__["a" /* CommentPage */]),
            ],
        })
    ], CommentPageModule);
    return CommentPageModule;
}());

//# sourceMappingURL=comment.module.js.map

/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommercialPageModule", function() { return CommercialPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__commercial__ = __webpack_require__(326);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CommercialPageModule = /** @class */ (function () {
    function CommercialPageModule() {
    }
    CommercialPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__commercial__["a" /* CommercialPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__commercial__["a" /* CommercialPage */]),
            ],
        })
    ], CommercialPageModule);
    return CommercialPageModule;
}());

//# sourceMappingURL=commercial.module.js.map

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommercialdetailPageModule", function() { return CommercialdetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__commercialdetail__ = __webpack_require__(327);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CommercialdetailPageModule = /** @class */ (function () {
    function CommercialdetailPageModule() {
    }
    CommercialdetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__commercialdetail__["a" /* CommercialdetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__commercialdetail__["a" /* CommercialdetailPage */]),
            ],
        })
    ], CommercialdetailPageModule);
    return CommercialdetailPageModule;
}());

//# sourceMappingURL=commercialdetail.module.js.map

/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmOrderPageModule", function() { return ConfirmOrderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirm_order__ = __webpack_require__(328);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfirmOrderPageModule = /** @class */ (function () {
    function ConfirmOrderPageModule() {
    }
    ConfirmOrderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__confirm_order__["a" /* ConfirmOrderPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__confirm_order__["a" /* ConfirmOrderPage */]),
            ],
        })
    ], ConfirmOrderPageModule);
    return ConfirmOrderPageModule;
}());

//# sourceMappingURL=confirm-order.module.js.map

/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmVipOrderPageModule", function() { return ConfirmVipOrderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirm_vip_order__ = __webpack_require__(329);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfirmVipOrderPageModule = /** @class */ (function () {
    function ConfirmVipOrderPageModule() {
    }
    ConfirmVipOrderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__confirm_vip_order__["a" /* ConfirmVipOrderPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__confirm_vip_order__["a" /* ConfirmVipOrderPage */]),
            ],
        })
    ], ConfirmVipOrderPageModule);
    return ConfirmVipOrderPageModule;
}());

//# sourceMappingURL=confirm-vip-order.module.js.map

/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectransferPageModule", function() { return ElectransferPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__electransfer__ = __webpack_require__(330);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ElectransferPageModule = /** @class */ (function () {
    function ElectransferPageModule() {
    }
    ElectransferPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__electransfer__["a" /* ElectransferPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__electransfer__["a" /* ElectransferPage */]),
            ],
        })
    ], ElectransferPageModule);
    return ElectransferPageModule;
}());

//# sourceMappingURL=electransfer.module.js.map

/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FandetailPageModule", function() { return FandetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fandetail__ = __webpack_require__(331);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FandetailPageModule = /** @class */ (function () {
    function FandetailPageModule() {
    }
    FandetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__fandetail__["a" /* FandetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__fandetail__["a" /* FandetailPage */]),
            ],
        })
    ], FandetailPageModule);
    return FandetailPageModule;
}());

//# sourceMappingURL=fandetail.module.js.map

/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FansPageModule", function() { return FansPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fans__ = __webpack_require__(332);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FansPageModule = /** @class */ (function () {
    function FansPageModule() {
    }
    FansPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__fans__["a" /* FansPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__fans__["a" /* FansPage */]),
            ],
        })
    ], FansPageModule);
    return FansPageModule;
}());

//# sourceMappingURL=fans.module.js.map

/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationPageModule", function() { return InformationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__information__ = __webpack_require__(333);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InformationPageModule = /** @class */ (function () {
    function InformationPageModule() {
    }
    InformationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__information__["a" /* InformationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__information__["a" /* InformationPage */]),
            ],
        })
    ], InformationPageModule);
    return InformationPageModule;
}());

//# sourceMappingURL=information.module.js.map

/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyProductListPageModule", function() { return KeyProductListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__key_product_list__ = __webpack_require__(334);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var KeyProductListPageModule = /** @class */ (function () {
    function KeyProductListPageModule() {
    }
    KeyProductListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__key_product_list__["a" /* KeyProductListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__key_product_list__["a" /* KeyProductListPage */]),
            ],
        })
    ], KeyProductListPageModule);
    return KeyProductListPageModule;
}());

//# sourceMappingURL=key-product-list.module.js.map

/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersProductPageModule", function() { return MembersProductPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__members_product__ = __webpack_require__(335);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MembersProductPageModule = /** @class */ (function () {
    function MembersProductPageModule() {
    }
    MembersProductPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__members_product__["a" /* MembersProductPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__members_product__["a" /* MembersProductPage */]),
            ],
        })
    ], MembersProductPageModule);
    return MembersProductPageModule;
}());

//# sourceMappingURL=members-product.module.js.map

/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoneyrecordPageModule", function() { return MoneyrecordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__moneyrecord__ = __webpack_require__(336);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MoneyrecordPageModule = /** @class */ (function () {
    function MoneyrecordPageModule() {
    }
    MoneyrecordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__moneyrecord__["a" /* MoneyrecordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__moneyrecord__["a" /* MoneyrecordPage */]),
            ],
        })
    ], MoneyrecordPageModule);
    return MoneyrecordPageModule;
}());

//# sourceMappingURL=moneyrecord.module.js.map

/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MywalletPageModule", function() { return MywalletPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mywallet__ = __webpack_require__(337);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MywalletPageModule = /** @class */ (function () {
    function MywalletPageModule() {
    }
    MywalletPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mywallet__["a" /* MywalletPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mywallet__["a" /* MywalletPage */]),
            ],
        })
    ], MywalletPageModule);
    return MywalletPageModule;
}());

//# sourceMappingURL=mywallet.module.js.map

/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(ngzone, navCtrl, config, jsonp, httpService, noticeSer) {
        this.ngzone = ngzone;
        this.navCtrl = navCtrl;
        this.config = config;
        this.jsonp = jsonp;
        this.httpService = httpService;
        this.noticeSer = noticeSer;
        this.paramsA1 = new Array(); /*A模块参数*/
        this.paramsB1 = new Array(); /*B模块参数*/
        this.paramsC1 = new Array(); /*C模块参数*/
        this.paramsD1 = new Array(); /*D模块参数*/
        this.paramsG1 = new Array(); /*G模块参数*/
        this.paramsA2 = new Array(); /*A模块参数*/
        this.paramsB2 = new Array(); /*B模块参数*/
        this.paramsC2 = new Array(); /*C模块参数*/
        this.paramsD2 = new Array(); /*D模块参数*/
        this.paramsG2 = new Array(); /*G模块参数*/
        this.paramsA3 = new Array(); /*A模块参数*/
        this.paramsB3 = new Array(); /*B模块参数*/
        this.paramsC3 = new Array(); /*C模块参数*/
        this.paramsD3 = new Array(); /*D模块参数*/
        this.paramsG3 = new Array(); /*G模块参数*/
        this.paramsA4 = new Array(); /*A模块参数*/
        this.paramsB4 = new Array(); /*B模块参数*/
        this.paramsC4 = new Array(); /*C模块参数*/
        this.paramsD4 = new Array(); /*D模块参数*/
        this.paramsG4 = new Array(); /*G模块参数*/
        this.paramsA5 = new Array(); /*A模块参数*/
        this.paramsB5 = new Array(); /*B模块参数*/
        this.paramsC5 = new Array(); /*C模块参数*/
        this.paramsD5 = new Array(); /*D模块参数*/
        this.paramsG5 = new Array(); /*G模块参数*/
        this.paramsA6 = new Array(); /*A模块参数*/
        this.paramsB6 = new Array(); /*B模块参数*/
        this.paramsC6 = new Array(); /*C模块参数*/
        this.paramsD6 = new Array(); /*D模块参数*/
        this.paramsG6 = new Array(); /*G模块参数*/
        this.testParams = new Array();
        this.isRed = false;
        this.loadIndex();
    }
    /**加载首页数据 */
    HomePage.prototype.loadIndex = function () {
        var _this = this;
        var api = "v2/HomePage/initHomePage";
        this.httpService.requestData(api, function (data) {
            if (data.error_code == 0) {
                _this.testParams = data.data;
                _this.testParams.shift();
                _this.getindex();
                _this.get();
            }
            else {
                _this.noticeSer.showToast(data.error_message);
            }
        });
    };
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        global_wxFunciton.hideGoRoot();
        this.content.ionScroll.subscribe(function ($event) {
            _this.ngzone.run(function () {
                var length = $event.scrollTop; //当前滑动的距离
                if (length >= 219.4) {
                    _this.isRed = true;
                }
                else {
                    _this.isRed = false;
                }
                _this.search.nativeElement; //获取html中标记为one的元素
            });
        });
    };
    HomePage.prototype.ionViewWillLeave = function () {
        global_wxFunciton.showGoRoot();
    };
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.content.ionScroll.subscribe(function ($event) {
            _this.ngzone.run(function () {
                var length = $event.scrollTop; //当前滑动的距离
                if (length >= 219.4) {
                    _this.isRed = true;
                }
                else {
                    _this.isRed = false;
                }
                _this.search.nativeElement; //获取html中标记为one的元素
            });
        });
    };
    //加载首页收据
    HomePage.prototype.getindex = function () {
        for (var i = 0; i < this.testParams.length; i++) {
            if (this.testParams[i].type == 2) {
                if (i == 0) {
                    this.paramsA1 = this.testParams[i];
                }
                else if (i == 1) {
                    this.paramsA2 = this.testParams[i];
                }
                else if (i == 2) {
                    this.paramsA3 = this.testParams[i];
                }
                else if (i == 3) {
                    this.paramsA4 = this.testParams[i];
                }
                else if (i == 4) {
                    this.paramsA5 = this.testParams[i];
                }
                else if (i == 5) {
                    this.paramsA6 = this.testParams[i];
                }
            }
            else if (this.testParams[i].type == 3) {
                if (i == 0) {
                    this.paramsB1 = this.testParams[i];
                }
                else if (i == 1) {
                    this.paramsB2 = this.testParams[i];
                }
                else if (i == 2) {
                    this.paramsB3 = this.testParams[i];
                }
                else if (i == 3) {
                    this.paramsB4 = this.testParams[i];
                }
                else if (i == 4) {
                    this.paramsB5 = this.testParams[i];
                }
                else if (i == 5) {
                    this.paramsB6 = this.testParams[i];
                }
            }
            else if (this.testParams[i].type == 4) {
                if (i == 0) {
                    this.paramsC1 = this.testParams[i];
                }
                else if (i == 1) {
                    this.paramsC2 = this.testParams[i];
                }
                else if (i == 2) {
                    this.paramsC3 = this.testParams[i];
                }
                else if (i == 3) {
                    this.paramsC4 = this.testParams[i];
                }
                else if (i == 4) {
                    this.paramsC5 = this.testParams[i];
                }
                else if (i == 5) {
                    this.paramsC6 = this.testParams[i];
                }
            }
            else if (this.testParams[i].type == 5) {
                if (i == 0) {
                    this.paramsD1 = this.testParams[i];
                }
                else if (i == 1) {
                    this.paramsD2 = this.testParams[i];
                }
                else if (i == 2) {
                    this.paramsD3 = this.testParams[i];
                }
                else if (i == 3) {
                    this.paramsD4 = this.testParams[i];
                }
                else if (i == 4) {
                    this.paramsD5 = this.testParams[i];
                }
                else if (i == 5) {
                    this.paramsD6 = this.testParams[i];
                }
            }
            else if (this.testParams[i].type == 6) {
                if (i == 0) {
                    this.paramsG1 = this.testParams[i];
                }
                else if (i == 1) {
                    this.paramsG2 = this.testParams[i];
                }
                else if (i == 2) {
                    this.paramsG3 = this.testParams[i];
                }
                else if (i == 3) {
                    this.paramsG4 = this.testParams[i];
                }
                else if (i == 4) {
                    this.paramsG5 = this.testParams[i];
                }
                else if (i == 5) {
                    this.paramsG6 = this.testParams[i];
                }
            }
        }
    };
    //下拉刷型界面
    HomePage.prototype.doRefresh = function ($event) {
        var _this = this;
        this.loadIndex();
        setTimeout(function () {
            $event.complete();
            _this.noticeSer.showToast('加载成功');
        }, 1000);
    };
    //操作dom
    HomePage.prototype.get = function () {
        var a = document.querySelectorAll('.dis');
        for (var i = 0; i < this.testParams.length; i++) {
            if (this.testParams[i].type == 2) {
                var a1 = a[i].querySelectorAll("ion-modle-a");
                a1[0]['style'].display = '';
            }
            else if (this.testParams[i].type == 3) {
                var b1 = a[i].querySelectorAll("ion-modle-b");
                b1[0]['style'].display = '';
            }
            else if (this.testParams[i].type == 4) {
                var c1 = a[i].querySelectorAll("ion-modle-c");
                c1[0]['style'].display = '';
            }
            else if (this.testParams[i].type == 5) {
                var d1 = a[i].querySelectorAll("ion-modle-d");
                d1[0]['style'].display = '';
            }
            else if (this.testParams[i].type == 6) {
                var g1 = a[i].querySelectorAll("ion-modle-g");
                g1[0]['style'].display = '';
            }
        }
    };
    //定义一个跳转到搜索页面的方法
    HomePage.prototype.goSearch = function () {
        this.navCtrl.push('SearchPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], HomePage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('search'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "search", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\home\home.html"*/'<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-searchbar (tap)="goSearch()"></ion-searchbar>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-content>\n\n    <ion-refresher (ionRefresh)="doRefresh($event)"> \n\n        <ion-refresher-content\n\n          pullingIcon="arrow-dropdown"\n\n          pullingText="下拉刷新"\n\n          refreshingSpinner="circles"\n\n          refreshingText="刷新..."> \n\n        </ion-refresher-content>\n\n      </ion-refresher>\n\n    <div class="tc" [ngClass]="{\'tcRed\':isRed}" #search>\n\n      <div>\n\n        <ion-searchbar class="tsearch" (tap)="goSearch()"></ion-searchbar>\n\n      </div>\n\n      <!-- <div class="message">\n\n        <a><img src="assets/icon/message.png"></a>\n\n      </div> -->\n\n    </div>\n\n    <page-index-adv></page-index-adv>\n\n    <div class="dis">\n\n      <ion-modle-a [params]="paramsA1" style="display: none;"></ion-modle-a>\n\n      <ion-modle-b [params]="paramsB1" style="display: none;"></ion-modle-b>\n\n      <ion-modle-c [params]="paramsC1" style="display: none;"></ion-modle-c>\n\n      <ion-modle-d [params]="paramsD1" style="display: none;"></ion-modle-d>\n\n      <ion-modle-g [params]="paramsG1" style="display: none;"></ion-modle-g>\n\n    </div>\n\n    <div class="dis">\n\n      <ion-modle-a [params]="paramsA2" style="display: none;"></ion-modle-a>\n\n      <ion-modle-b [params]="paramsB2" style="display: none;"></ion-modle-b>\n\n      <ion-modle-c [params]="paramsC2" style="display: none;"></ion-modle-c>\n\n      <ion-modle-d [params]="paramsD2" style="display: none;"></ion-modle-d>\n\n      <ion-modle-g [params]="paramsG2" style="display: none;"></ion-modle-g>\n\n    </div>\n\n    <div class="dis">\n\n      <ion-modle-a [params]="paramsA3" style="display: none;"></ion-modle-a>\n\n      <ion-modle-b [params]="paramsB3" style="display: none;"></ion-modle-b>\n\n      <ion-modle-c [params]="paramsC3" style="display: none;"></ion-modle-c>\n\n      <ion-modle-d [params]="paramsD3" style="display: none;"></ion-modle-d>\n\n      <ion-modle-g [params]="paramsG3" style="display: none;"></ion-modle-g>\n\n    </div>\n\n    <div class="dis">\n\n      <ion-modle-a [params]="paramsA4" style="display: none;"></ion-modle-a>\n\n      <ion-modle-b [params]="paramsB4" style="display: none;"></ion-modle-b>\n\n      <ion-modle-c [params]="paramsC4" style="display: none;"></ion-modle-c>\n\n      <ion-modle-d [params]="paramsD4" style="display: none;"></ion-modle-d>\n\n      <ion-modle-g [params]="paramsG4" style="display: none;"></ion-modle-g>\n\n    </div>\n\n    <div class="dis">\n\n      <ion-modle-a [params]="paramsA5" style="display: none;"></ion-modle-a>\n\n      <ion-modle-b [params]="paramsB5" style="display: none;"></ion-modle-b>\n\n      <ion-modle-c [params]="paramsC5" style="display: none;"></ion-modle-c>\n\n      <ion-modle-d [params]="paramsD5" style="display: none;"></ion-modle-d>\n\n      <ion-modle-g [params]="paramsG5" style="display: none;"></ion-modle-g>\n\n    </div>\n\n    <div class="dis">\n\n      <ion-modle-a [params]="paramsA6" style="display: none;"></ion-modle-a>\n\n      <ion-modle-b [params]="paramsB6" style="display: none;"></ion-modle-b>\n\n      <ion-modle-c [params]="paramsC6" style="display: none;"></ion-modle-c>\n\n      <ion-modle-d [params]="paramsD6" style="display: none;"></ion-modle-d>\n\n      <ion-modle-g [params]="paramsG6" style="display: none;"></ion-modle-g>\n\n    </div>\n\n    <!-- <ion-modle-a [params]="params"></ion-modle-a>\n\n    <ion-modle-b [params]="paramsB"></ion-modle-b>\n\n    <ion-modle-a [params]="params"></ion-modle-a>\n\n    <ion-modle-c [params]="paramsC"></ion-modle-c>\n\n    <ion-modle-a [params]="params"></ion-modle-a>\n\n    <ion-modle-c [params]="paramsC"></ion-modle-c> -->\n\n</ion-content>\n\n'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* Jsonp */], __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__["a" /* ToastProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CategoryPage = /** @class */ (function () {
    function CategoryPage(storage, navCtrl, config, httpService) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.config = config;
        this.httpService = httpService;
        this.ProductlistPage = 'ProductlistPage'; /*商品列表页面*/
        this.tempDatas = [];
        this.leftCate = []; /*左侧分类数据*/
        this.rightCate = []; /*右侧分类数据*/
    }
    CategoryPage.prototype.ionViewWillEnter = function () {
        global_wxFunciton.hideGoRoot();
        this.getLeftCateData(); /*左侧分类*/
    };
    CategoryPage.prototype.ionViewWillLeave = function () {
        global_wxFunciton.showGoRoot();
    };
    //左侧分类的方法
    CategoryPage.prototype.getLeftCateData = function () {
        var _this = this;
        var api = 'v1/ProductManager/getProductOfCategory';
        //网络接口请求
        this.httpService.requestData(api, function (data) {
            _this.leftCate = data.data;
            for (var index = 0; index < data.data.length; index++) {
                _this.tempDatas[data.data[index].id] = data.data[index].productSubCategories;
            }
            if (_this.leftId == null) {
                _this.getRightCateData(data.data[0].id);
            }
            else {
                _this.getRightCateData(_this.leftId);
            }
        });
    };
    CategoryPage.prototype.getRightCateData = function (id) {
        this.leftId = id;
        this.rightCate = this.tempDatas[id];
    };
    CategoryPage.prototype.goSearch = function () {
        this.navCtrl.push('SearchPage');
    };
    CategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-category',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\category\category.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-searchbar tappable (click)="goSearch()" class="search"></ion-searchbar>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <div class="cate_content">\n\n      <div class="cate_left" >\n\n      \n\n          <ion-list>\n\n            <ion-item   tabindex="1"  class="list" *ngFor="let item of leftCate" (tap)="getRightCateData(item[\'id\'])">\n\n              <p [ngStyle]="{\'color\':leftId === item.id ? \'red\' : \'\' }">{{item.categoryname}}</p>\n\n            </ion-item>\n\n          </ion-list>\n\n      </div>\n\n\n\n      <div class="cate_right">\n\n          <ion-row>\n\n             <img style="width:100%; height: 100px;" src="assets/imgs/slide03.jpg" />\n\n              <ion-col col-4 *ngFor="let item of rightCate" [navPush]=\'ProductlistPage\' [navParams]="{\'id\':item[\'id\'],\'categoryname\':item[\'categoryname\']}">              \n\n                \n\n                    <img [src]="config.domain+item.icon" />\n\n                    <p>{{item.categoryname}}</p>                        \n\n              </ion-col>\n\n          </ion-row>\n\n\n\n      </div>\n\n\n\n\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\category\category.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__["a" /* HttpServicesProvider */]])
    ], CategoryPage);
    return CategoryPage;
}());

//# sourceMappingURL=category.js.map

/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_clearlogin_clearlogin__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_config_config__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_toast_toast__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
///<reference path="../../services/user_defined.d.ts"/>








/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserPage = /** @class */ (function () {
    function UserPage(navCtrl, navParams, config, storage, httpService, alertProvider, el, renderer2, clearlogin, noticeSer) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.config = config;
        this.storage = storage;
        this.httpService = httpService;
        this.alertProvider = alertProvider;
        this.el = el;
        this.renderer2 = renderer2;
        this.clearlogin = clearlogin;
        this.noticeSer = noticeSer;
        this.LoginPage = 'LoginPage';
        this.RegisterPage = 'RegisterPage';
        this.PersonalPage = 'PersonalPage';
        this.SettingPage = 'SettingPage';
        this.userInfo = '';
        this.rank = '';
        this.isFirst = true; //是不是第一次加载页面
        this.flag = '0'; //重复提示清楚标志
        this.canAgentApply = false; //是否具有代理申请资格
        this.isAgentApply = false; //是否代理申请过了
        this.isAuth = false; //是否实名认证通过
        //延迟清理第一次加载标记以确保不重复获取用户数据
        setTimeout(function () {
            _this.isFirst = false;
        }, 1000);
        this.refreshUser();
    }
    UserPage.prototype.ionViewWillEnter = function () {
        global_wxFunciton.hideGoRoot();
        if (!this.isFirst) {
            this.refreshUser();
        }
    };
    UserPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        //  console.log("3.0 ionViewDidEnter 当进入页面时触发");
        setTimeout(function () {
            _this.setDot();
        }, 100);
    };
    UserPage.prototype.ionViewWillLeave = function () {
        global_wxFunciton.showGoRoot();
        this.clearDot();
    };
    //进入各个子模块的入口
    UserPage.prototype.mainEntrance = function (moduleName) {
        var _this = this;
        console.log(moduleName);
        if (this.userInfo) {
            if (moduleName == 'fans') {
                this.navCtrl.push('FansPage');
            }
            if (moduleName == 'mywallet') {
                this.navCtrl.push('MywalletPage');
            }
            if (moduleName == 'allorders') {
                this.navCtrl.push('OrdersPage', {
                    type: 'all'
                });
            }
            else if (moduleName == 'pay') {
                this.navCtrl.push('OrdersPage', {
                    type: 'wp'
                });
            }
            else if (moduleName == 'setGoods') {
                this.navCtrl.push('OrdersPage', {
                    type: 'ws'
                });
            }
            else if (moduleName == 'receiving') {
                this.navCtrl.push('OrdersPage', {
                    type: 'wr'
                });
            }
            else if (moduleName == 'remain') {
                this.navCtrl.push('OrdersPage', {
                    type: 'wc'
                });
            }
            if (moduleName == 'wporders') {
                this.navCtrl.push('OrdersPage', {
                    type: 'wp'
                });
            }
            if (moduleName == 'wsorders') {
                this.navCtrl.push('OrdersPage', {
                    type: 'ws'
                });
            }
            if (moduleName == 'wrorders') {
                this.navCtrl.push('OrdersPage', {
                    type: 'wr'
                });
            }
            if (moduleName == 'wcorders') {
                this.navCtrl.push('OrdersPage', {
                    type: 'wc'
                });
            }
            if (moduleName == 'vippresent') {
                this.navCtrl.push('VippresentPage');
            }
            if (moduleName == 'callcenter') {
                this.navCtrl.push('CallcenterPage');
            }
            if (moduleName == 'certification') {
                this.navCtrl.push('CertificationPage');
            }
            if (moduleName == "qrcode") {
                this.navCtrl.push("QrcodePage");
            }
            // if(moduleName == 'paysuccesspage'){
            //   this.navCtrl.push('PaysuccessPage');
            // }
            //特殊的申请代理
            if (moduleName == 'proxyApply') {
                if (this.userInfo['personDataMap'].Lev == 3 || (this.userInfo['personDataMap'].Lev == 2 && this.userInfo['personDataMap'].IsSubProxy == 1)) {
                    this.navCtrl.push('ProxyapplyPage');
                }
                else {
                    this.alertProvider.showAlert('您还不是代理哦', '', ['ok']);
                }
            }
        }
        else {
            this.alertProvider.showAlert('客观请登录', '', [
                {
                    text: '关闭',
                    handler: function () {
                    }
                },
                {
                    text: '登录',
                    handler: function () {
                        _this.navCtrl.push('LoginPage');
                    }
                }
            ]);
        }
    };
    UserPage.prototype.setDot = function () {
        //申请代理的小红点提示
        var dotDomOne = this.el.nativeElement.querySelector('#dot_one');
        var imgDom = this.el.nativeElement.querySelector('#img');
        var rightPx = (dotDomOne.parentNode.offsetWidth - imgDom.offsetWidth) / 2;
        var ajustRightPx = rightPx - 5.5;
        var ajustTopPx = -5.5;
        if (this.userInfo && !this.isAgentApply) {
            this.renderer2.setStyle(dotDomOne, 'display', 'block');
            this.renderer2.setStyle(dotDomOne, 'right', ajustRightPx + 'px');
            this.renderer2.setStyle(dotDomOne, 'top', ajustTopPx + 'px');
        }
        //实名认证的小红点提示
        var dotDomTwo = this.el.nativeElement.querySelector('#dot_two');
        if (this.userInfo && !this.isAuth) {
            this.renderer2.setStyle(dotDomTwo, 'display', 'block');
            this.renderer2.setStyle(dotDomTwo, 'right', ajustRightPx + 'px');
            this.renderer2.setStyle(dotDomTwo, 'top', ajustTopPx + 'px');
        }
    };
    UserPage.prototype.clearDot = function () {
        var dotDomOne = this.el.nativeElement.querySelector('#dot_one');
        var dotDomTwo = this.el.nativeElement.querySelector('#dot_two');
        this.renderer2.setStyle(dotDomOne, 'display', 'none');
        this.renderer2.setStyle(dotDomTwo, 'display', 'none');
    };
    UserPage.prototype.refreshUser = function () {
        var _this = this;
        var token = this.storage.get('token');
        if (token) {
            var api = 'v1/PersonalCenter/initPersonalCenterData/' + token;
            this.httpService.requestData(api, function (data) {
                if (data.error_code == 0) {
                    _this.storage.set('userInfo', data.data);
                    _this.userInfo = data.data;
                    //等级设置
                    //如果lev为0
                    if (_this.userInfo['personDataMap'].Lev == 0) {
                        if (_this.userInfo['isGCmember']) {
                            _this.rank = '99会员';
                        }
                        else {
                            _this.rank = '免费会员';
                        }
                        //如果lev为1
                    }
                    else if (_this.userInfo['personDataMap'].Lev == 1) {
                        _this.rank = 'VIP';
                        //如果lev为2
                    }
                    else if (_this.userInfo['personDataMap'].Lev == 2) {
                        if (_this.userInfo['personDataMap'].IsSubProxy == 1) {
                            _this.rank = '准代理';
                        }
                        else {
                            _this.rank = '合伙人';
                        }
                        //如果lev为3
                    }
                    else {
                        _this.rank = '代理';
                    }
                    //申请代理栏目设置
                    if (_this.userInfo['ProxyApply'].canProxyApply == 1) {
                        _this.canAgentApply = true;
                        if (_this.userInfo['ProxyApply'].isAlreadyApply == 1) {
                            _this.isAgentApply = true;
                        }
                        else {
                            _this.isAgentApply = false;
                        }
                    }
                    else {
                        _this.canAgentApply = false;
                        _this.isAgentApply = true;
                    }
                    //实名认证栏目设置
                    if (_this.userInfo['isAlreadyAuth']) {
                        _this.isAuth = true;
                    }
                    else {
                        _this.isAuth = false;
                    }
                }
                else if (data.error_code == 3) {
                    _this.userInfo = '';
                    _this.rank = '';
                    _this.canAgentApply = false;
                    //清楚token userInfo
                    _this.clearlogin.release();
                    if (_this.flag == '0') {
                        _this.alertProvider.showAlert(data.error_message, '', [
                            {
                                text: '关闭',
                                handler: function () {
                                }
                            },
                            {
                                text: '登录',
                                handler: function () {
                                    _this.navCtrl.push('LoginPage');
                                }
                            }
                        ]);
                    }
                    _this.flag = '1'; //再次报错不再提示
                }
                else {
                    _this.userInfo = '';
                    _this.rank = '';
                    _this.canAgentApply = false;
                    if (_this.flag == '0') {
                        _this.noticeSer.showToast('网络异常');
                    }
                    _this.flag = '1'; //再次报错不再提示
                }
            });
        }
        else {
            this.userInfo = '';
            this.rank = '';
            this.canAgentApply = false;
        }
    };
    UserPage.prototype.register = function () {
        this.navCtrl.push('LoginPage', { type: 2 });
    };
    UserPage.prototype.doRefresh = function ($event) {
        var _this = this;
        this.refreshUser();
        setTimeout(function () {
            $event.complete();
            _this.noticeSer.showToast('加载成功');
        }, 1000);
    };
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\user\user.html"*/'<!--\n\n  Generated template for the UserPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>用户中心</ion-title>\n\n    <ion-buttons end *ngIf="userInfo">\n\n      <button ion-button [navPush]=\'SettingPage\'>\n\n        <ion-icon name=\'settings\'></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)" *ngIf="userInfo"> \n\n    <ion-refresher-content\n\n        pullingIcon="arrow-dropdown"\n\n        pullingText="下拉刷新"\n\n        refreshingSpinner="circles"\n\n        refreshingText="刷新..."> \n\n    </ion-refresher-content>\n\n</ion-refresher>\n\n  <div class="login" *ngIf="!userInfo">\n\n    <div class="userimg">\n\n      <img src="assets/imgs/user.png" />\n\n    </div>\n\n\n\n    <div class="login_reg">\n\n      <button ion-button color="danger" [navPush]=\'LoginPage\'>登录</button>\n\n      <button ion-button color="danger" (tap)="register()">注册</button>\n\n    </div>\n\n\n\n  </div>\n\n\n\n  <ion-list inset *ngIf="userInfo">\n\n    <ion-item [navPush]=\'PersonalPage\' class="person" *ngIf="userInfo">\n\n      <div item-left class="avatar">\n\n        <img [src]="config.domain+userInfo.personDataMap.HeadPhoto" onerror="this.src=\'assets/imgs/user.png\'" class="headimg">\n\n        <div class="rank">\n\n          {{rank}}\n\n        </div>\n\n      </div>\n\n      <h2 style="height: 4rem;padding-top: 0.5rem;">用户名:{{userInfo.personDataMap.UserName}}</h2>\n\n      <p>众健号:{{userInfo.personDataMap.SysID}}</p>\n\n\n\n    </ion-item>\n\n  </ion-list>\n\n  <div class="transition">\n\n  </div>\n\n  <div (tap)="mainEntrance(\'mywallet\')">\n\n  <div class="interval">\n\n    我的钱包\n\n  </div>\n\n  <ion-grid style="padding: 0;width: 100%;border-radius: 0.5rem;" *ngIf="userInfo">\n\n    <ion-row class="col_row">\n\n      <ion-col class="col_1">\n\n        <span>{{userInfo.personDataMap.RemainElecNum}}</span>\n\n        <br> 现金币\n\n      </ion-col>\n\n      <ion-col class="col_1">\n\n        <span>{{userInfo.personDataMap.RemainPoints}}</span>\n\n        <br> 购物币\n\n      </ion-col>\n\n      <ion-col class="col_1">\n\n        <span>{{userInfo.personDataMap.RemainVIPAmount}}</span>\n\n        <br> 消费积分\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-grid style="padding: 0;width: 100%;" *ngIf="!userInfo">\n\n    <ion-row class="col_row">\n\n      <ion-col class="col_1">\n\n        <span>0</span>\n\n        <br> 现金币\n\n      </ion-col>\n\n      <ion-col class="col_1">\n\n        <span>0</span>\n\n        <br> 购物币\n\n      </ion-col>\n\n      <ion-col class="col_1">\n\n        <span>0</span>\n\n        <br> 消费积分\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</div>\n\n\n\n  <div class="transition">\n\n  </div>\n\n  <div class="interval">\n\n    我的订单\n\n  </div>\n\n  <ion-grid style="padding: 0;width: 100%;" >\n\n    <ion-row class="col_row">\n\n      <ion-col class="col_2" style="width: 20%;"(tap)="mainEntrance(\'allorders\')">\n\n        <img src="assets/imgs/myorder.png" />\n\n        <span>全部订单</span>\n\n      </ion-col>\n\n      <ion-col class="col_2" style="width: 20%;" (tap)="mainEntrance(\'wporders\')">\n\n        <img src="assets/imgs/wp.png" />\n\n        <span>待付款</span>\n\n      </ion-col>\n\n      <ion-col class="col_2" style="width: 20%;" (tap)="mainEntrance(\'wsorders\')">\n\n        <img src="assets/imgs/ws.png" />\n\n        <span>待发货</span>\n\n      </ion-col>\n\n      <ion-col class="col_2" style="width: 20%;"  (tap)="mainEntrance(\'wrorders\')">\n\n        <img src="assets/imgs/wr.png" />\n\n        <span>待收货</span>\n\n      </ion-col>\n\n      <ion-col class="col_2" style="width: 20%;" (tap)="mainEntrance(\'wcorders\')">\n\n        <img src="assets/imgs/wc.png" />\n\n        <span>待评价</span>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <div class="transition">\n\n  </div>\n\n  <div class="interval">\n\n    我的常用\n\n  </div>\n\n\n\n  <ion-grid style="padding: 0;width: 100%;">\n\n    <ion-row class="col_row">\n\n      <ion-col class="col_3" style="width: 20%;" (tap)="mainEntrance(\'fans\')">\n\n        <img src="assets/imgs/myfans.png" />\n\n        <span >我的粉丝</span>\n\n      </ion-col>\n\n      <ion-col class="col_3" style="width: 20%;">\n\n        <img src="assets/imgs/test.png" />\n\n        <span>我的课程</span>\n\n      </ion-col>\n\n      <ion-col class="col_3" style="width: 20%;" (tap)="mainEntrance(\'callcenter\')">\n\n        <img src="assets/imgs/callcenter.png" />\n\n        <span>客服中心</span>\n\n      </ion-col>\n\n      <ion-col class="col_3" style="width: 20%;" (tap)="mainEntrance(\'vippresent\')">\n\n        <img src="assets/imgs/vippresent.png" />\n\n        <span>二送一</span>\n\n      </ion-col>\n\n      <ion-col class="col_3" style="width: 20%;" (tap)="mainEntrance(\'qrcode\')">\n\n        <img src="assets/imgs/mycard.png" />\n\n        <span>我的名片</span>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row class="col_row">\n\n      <ion-col class="col_4" style="width: 20%;">\n\n        <img src="assets/imgs/waterpurifier.png" />\n\n        <span>净水机</span>\n\n      </ion-col>\n\n      <ion-col class="col_4" style="width: 20%;" (tap)="mainEntrance(\'certification\')">\n\n      <div style="position: relative;">\n\n        <div id="dot_two" class="dot_one"></div>\n\n        <img src="assets/imgs/auth.png" />\n\n        <span>实名认证</span>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col class="col_4" style="width: 20%;" (tap)="mainEntrance(\'proxyApply\')">\n\n        <div style="position: relative;">\n\n        <div id="dot_one" class="dot_one"></div>\n\n        <img id="img" src="assets/imgs/proxyapply.png" />\n\n        </div>\n\n        <span>申请代理</span>\n\n      </ion-col>\n\n      <ion-col class="col_4" style="width: 20%;">\n\n      </ion-col>\n\n      <ion-col class="col_4" style="width: 20%;">\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\user\user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_5__providers_clearlogin_clearlogin__["a" /* ClearloginProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_toast_toast__["a" /* ToastProvider */]])
    ], UserPage);
    return UserPage;
}());

//# sourceMappingURL=user.js.map

/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperateaddressPageModule", function() { return OperateaddressPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__operateaddress__ = __webpack_require__(338);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OperateaddressPageModule = /** @class */ (function () {
    function OperateaddressPageModule() {
    }
    OperateaddressPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__operateaddress__["a" /* OperateaddressPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__operateaddress__["a" /* OperateaddressPage */]),
            ],
        })
    ], OperateaddressPageModule);
    return OperateaddressPageModule;
}());

//# sourceMappingURL=operateaddress.module.js.map

/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderhandletransferPageModule", function() { return OrderhandletransferPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orderhandletransfer__ = __webpack_require__(339);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrderhandletransferPageModule = /** @class */ (function () {
    function OrderhandletransferPageModule() {
    }
    OrderhandletransferPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__orderhandletransfer__["a" /* OrderhandletransferPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__orderhandletransfer__["a" /* OrderhandletransferPage */]),
            ],
        })
    ], OrderhandletransferPageModule);
    return OrderhandletransferPageModule;
}());

//# sourceMappingURL=orderhandletransfer.module.js.map

/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderlistPageModule", function() { return OrderlistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orderlist__ = __webpack_require__(340);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrderlistPageModule = /** @class */ (function () {
    function OrderlistPageModule() {
    }
    OrderlistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__orderlist__["a" /* OrderlistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__orderlist__["a" /* OrderlistPage */]),
            ],
        })
    ], OrderlistPageModule);
    return OrderlistPageModule;
}());

//# sourceMappingURL=orderlist.module.js.map

/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPageModule", function() { return OrdersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orders__ = __webpack_require__(341);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrdersPageModule = /** @class */ (function () {
    function OrdersPageModule() {
    }
    OrdersPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__orders__["a" /* OrdersPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__orders__["a" /* OrdersPage */]),
            ],
        })
    ], OrdersPageModule);
    return OrdersPageModule;
}());

//# sourceMappingURL=orders.module.js.map

/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageModule", function() { return PaymentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaymentPageModule = /** @class */ (function () {
    function PaymentPageModule() {
    }
    PaymentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__payment__["a" /* PaymentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__payment__["a" /* PaymentPage */]),
            ],
        })
    ], PaymentPageModule);
    return PaymentPageModule;
}());

//# sourceMappingURL=payment.module.js.map

/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaysuccessPageModule", function() { return PaysuccessPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paysuccess__ = __webpack_require__(343);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaysuccessPageModule = /** @class */ (function () {
    function PaysuccessPageModule() {
    }
    PaysuccessPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__paysuccess__["a" /* PaysuccessPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__paysuccess__["a" /* PaysuccessPage */]),
            ],
        })
    ], PaysuccessPageModule);
    return PaysuccessPageModule;
}());

//# sourceMappingURL=paysuccess.module.js.map

/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalPageModule", function() { return PersonalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__personal__ = __webpack_require__(344);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PersonalPageModule = /** @class */ (function () {
    function PersonalPageModule() {
    }
    PersonalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__personal__["a" /* PersonalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__personal__["a" /* PersonalPage */]),
            ],
        })
    ], PersonalPageModule);
    return PersonalPageModule;
}());

//# sourceMappingURL=personal.module.js.map

/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCommentPageModule", function() { return ProductCommentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_comment__ = __webpack_require__(345);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductCommentPageModule = /** @class */ (function () {
    function ProductCommentPageModule() {
    }
    ProductCommentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__product_comment__["a" /* ProductCommentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__product_comment__["a" /* ProductCommentPage */]),
            ],
        })
    ], ProductCommentPageModule);
    return ProductCommentPageModule;
}());

//# sourceMappingURL=product-comment.module.js.map

/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailPageModule", function() { return ProductDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_detail__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductDetailPageModule = /** @class */ (function () {
    function ProductDetailPageModule() {
    }
    ProductDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__product_detail__["a" /* ProductDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__product_detail__["a" /* ProductDetailPage */]),
            ],
        })
    ], ProductDetailPageModule);
    return ProductDetailPageModule;
}());

//# sourceMappingURL=product-detail.module.js.map

/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_http_services_http_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_rloginprocess_rloginprocess__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CarModalComponent = /** @class */ (function () {
    function CarModalComponent(rlogin, appCtrl, navCtrl, params, config, viewCrl, storage, alert, httpservice) {
        this.rlogin = rlogin;
        this.appCtrl = appCtrl;
        this.navCtrl = navCtrl;
        this.params = params;
        this.config = config;
        this.viewCrl = viewCrl;
        this.storage = storage;
        this.alert = alert;
        this.httpservice = httpservice;
        this.productspecs = new Array();
        this.buyNumber = 1;
        this.productArray = [];
        this.product = params.get("product");
        this.productname = this.product.productname;
        this.productname = this.productname.substr(0, 5) + "..." + this.productname.substr(this.productname.length - 5, 5);
        this.num = this.product.stocknum;
        this.price = this.product.price;
        this.elec = this.product.elecnum;
        this.id = this.product.id;
        this.img = this.product.productphotos;
        this.productspecs = this.product.productspecs;
    }
    /**立即购买 */
    CarModalComponent.prototype.buynow = function () {
        var _this = this;
        if (this.storage.get("token") == null) {
            var title = "未登录";
            var content = "小主，去登陆吧？";
            var ass = "";
            var buttons = [{
                    text: "取消",
                    role: 'cancle',
                    handler: function () {
                        _this.viewCrl.dismiss();
                    }
                }, {
                    text: "确认",
                    role: "destructive",
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */], { history: 'history' });
                        _this.viewCrl.dismiss();
                    }
                }];
            this.alert.showMoreAlert(title, content, ass, buttons);
        }
        else {
            if (this.specId == null) {
                this.alert.showAlert('未选择规格', '', ['ok']);
            }
            else {
                this.product.buynum = this.buyNumber;
                this.productArray.push(this.product);
                this.appCtrl.getRootNav().push("ConfirmOrderPage", {
                    "product": this.productArray
                });
                this.viewCrl.dismiss();
            }
        }
    };
    /**点击空白销毁modal */
    CarModalComponent.prototype.dimiss = function () {
        this.viewCrl.dismiss();
    };
    /**数量减 */
    CarModalComponent.prototype.onMinus = function () {
        if (this.buyNumber > 1) {
            this.buyNumber--;
        }
    };
    /**数量+ */
    CarModalComponent.prototype.onAdd = function () {
        this.buyNumber++;
    };
    /**选择规格 */
    CarModalComponent.prototype.choiceSpec = function (specid) {
        this.specId = specid;
        this.product.specId = specid;
        for (var i = 0; i < this.productspecs.length; i++) {
            if (this.productspecs[i].id == specid) {
                this.product.specPrice = this.productspecs[i].price;
                this.product.specElec = this.productspecs[i].elecNum;
                this.product.specName = this.productspecs[i].specname;
            }
        }
    };
    /**加入购物车 */
    CarModalComponent.prototype.addCart = function () {
        var _this = this;
        if (this.storage.get("token") == null) {
            var title = "未登录";
            var content = "小主，去登陆吧？";
            var ass = "";
            var buttons = [{
                    text: "取消",
                    role: 'cancle',
                    handler: function () {
                        _this.viewCrl.dismiss();
                    }
                }, {
                    text: "确认",
                    role: "destructive",
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */], { history: 'history' });
                        _this.viewCrl.dismiss();
                    }
                }];
            this.alert.showMoreAlert(title, content, ass, buttons);
        }
        else {
            if (this.specId == null) {
                this.alert.showAlert('未选择规格', '', ['ok']);
            }
            else {
                var api = 'v1/PersonalCenter/updateShoppingCartInfo/' + this.id + '/' + this.specId;
                var params = {
                    "token": this.storage.get("token"),
                    "productNum": this.buyNumber
                };
                this.httpservice.doFormPost(api, params, function (data) {
                    if (data.error_code == 0) {
                        _this.alert.showAlert("加入购物车成功", "", ['确定']);
                        _this.viewCrl.dismiss();
                    }
                    else if (data.error_code == 3) {
                        _this.rlogin.rLoginProcessWithHistory(_this.navCtrl);
                    }
                });
            }
        }
    };
    CarModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'car-modal',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\components\car-modal\car-modal.html"*/'<div class="blank" tappable (click)="dimiss()">\n\n\n\n</div>\n\n<div class="modal" #modal>\n\n <div class="tcontain">\n\n    <div class="tone">\n\n        <div>\n\n          <img src="{{config.domain+img[0].photo}}"/>\n\n        </div>\n\n        <dl>\n\n          <dt>{{productname}}</dt>\n\n          <dd>¥\n\n            <em style="font-size: 1.8rem;">{{price}}</em>\n\n            <em style="margin-left: 1rem;"><ion-icon style="color:red" ios="ios-redBack"></ion-icon>{{elec/2}}</em>\n\n           </dd>\n\n          <span>库存：{{num}}件</span>\n\n        </dl>\n\n      </div>\n\n      <div class="hotlist">\n\n         <div>\n\n             <h3 class="search_title search_line">规格</h3>\n\n         </div>\n\n           <p>\n\n               <span *ngFor="let item of productspecs" tappable (click)="choiceSpec(item.id)" [ngStyle]="{\'background\':item.id === specId ? \'red\' : \'\' }">\n\n                 {{item.specname}}\n\n               </span>\n\n            </p>\n\n      </div>\n\n      <div class="tbuyCount">\n\n        <ion-row>\n\n            <ion-col col-9>\n\n              <samp>购买数量：</samp>\n\n            </ion-col>\n\n            <ion-col col-1>\n\n              <button ion-button [disabled]=\'minus || disabled\' (click)="onMinus()" clear>\n\n                <ion-icon name="remove-circle" color="primary" ></ion-icon>\n\n              </button>\n\n            </ion-col>\n\n            <ion-col col-1>\n\n              <input [(ngModel)]="buyNumber" readonly  value="1" #input >\n\n            </ion-col>\n\n            <ion-col col-1 text-right>\n\n              <button ion-button [disabled]=\'add || disabled\' (click)="onAdd()" clear>\n\n                <ion-icon name="add-circle" color="primary"></ion-icon>\n\n              </button>\n\n            </ion-col>\n\n        </ion-row>\n\n     </div>\n\n </div>\n\n <div class="tfoot-right">\n\n    <button class="join" ion-button color="danger" (tap)="addCart()">加入购物车</button>\n\n    <button class="buy" ion-button (tap)="buynow()">立即购买</button>\n\n </div>\n\n</div>\n\n'/*ion-inline-end:"E:\apps\zjapp_wx\src\components\car-modal\car-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__providers_rloginprocess_rloginprocess__["a" /* RloginprocessProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_http_services_http_services__["a" /* HttpServicesProvider */]])
    ], CarModalComponent);
    return CarModalComponent;
}());

//# sourceMappingURL=car-modal.js.map

/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarMemberComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_http_services_http_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_rloginprocess_rloginprocess__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CarMemberComponent = /** @class */ (function () {
    function CarMemberComponent(rlogin, appCtrl, navCtrl, params, config, viewCrl, storage, alert, httpservice) {
        this.rlogin = rlogin;
        this.appCtrl = appCtrl;
        this.navCtrl = navCtrl;
        this.params = params;
        this.config = config;
        this.viewCrl = viewCrl;
        this.storage = storage;
        this.alert = alert;
        this.httpservice = httpservice;
        this.productspecs = new Array();
        this.buyNumber = 1;
        this.productArray = [];
        this.product = params.get("product");
        this.productname = this.product.productname;
        this.productname = this.productname.substr(0, 5) + "..." + this.productname.substr(this.productname.length - 5, 5);
        this.num = this.product.stocknum;
        this.price = this.product.price;
        this.elec = this.product.elecnum;
        this.id = this.product.id;
        this.img = this.product.productphotos;
        this.productspecs = this.product.productspecs;
    }
    /**立即购买 */
    CarMemberComponent.prototype.buynow = function () {
        var _this = this;
        if (this.storage.get("token") == null) {
            var title = "未登录";
            var content = "小主，去登陆吧？";
            var ass = "";
            var buttons = [{
                    text: "取消",
                    role: 'cancle',
                    handler: function () {
                        _this.viewCrl.dismiss();
                    }
                }, {
                    text: "确认",
                    role: "destructive",
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */], { history: 'history' });
                        _this.viewCrl.dismiss();
                    }
                }];
            this.alert.showMoreAlert(title, content, ass, buttons);
        }
        else {
            if (this.specId == null) {
                this.alert.showAlert('未选择规格', '', ['ok']);
            }
            else {
                this.product.buynum = this.buyNumber;
                this.productArray.push(this.product);
                this.appCtrl.getRootNav().push("ConfirmVipOrderPage", {
                    "product": this.productArray
                });
                this.viewCrl.dismiss();
            }
        }
    };
    /**点击空白销毁modal */
    CarMemberComponent.prototype.dimiss = function () {
        this.viewCrl.dismiss();
    };
    /**数量减 */
    CarMemberComponent.prototype.onMinus = function () {
        if (this.buyNumber > 1) {
            this.buyNumber--;
        }
    };
    /**数量+ */
    CarMemberComponent.prototype.onAdd = function () {
        this.buyNumber++;
    };
    /**选择规格 */
    CarMemberComponent.prototype.choiceSpec = function (specid) {
        this.specId = specid;
        this.product.specId = specid;
        for (var i = 0; i < this.productspecs.length; i++) {
            if (this.productspecs[i].id == specid) {
                this.product.specPrice = this.productspecs[i].price;
                this.product.specElec = this.productspecs[i].elecNum;
                this.product.specName = this.productspecs[i].specname;
            }
        }
    };
    CarMemberComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'car-member',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\components\car-member\car-member.html"*/'<div class="blank" tappable (click)="dimiss()">\n\n\n\n</div>\n\n<div class="modal" #modal>\n\n <div class="tcontain">\n\n    <div class="tone">\n\n        <div>\n\n          <img src="{{config.domain+img[0].photo}}"/>\n\n        </div>\n\n        <dl>\n\n          <dt>{{productname}}</dt>\n\n          <dd>¥\n\n            <em style="font-size: 1.8rem;">{{price}}</em>\n\n            <em style="margin-left: 1rem;"><ion-icon style="color:red" ios="ios-redBack"></ion-icon>{{elec/2}}</em>\n\n           </dd>\n\n          <span>库存：{{num}}件</span>\n\n        </dl>\n\n      </div>\n\n      <div class="hotlist">\n\n         <div>\n\n             <h3 class="search_title search_line">规格</h3>\n\n         </div>\n\n           <p>\n\n               <span *ngFor="let item of productspecs" tappable (click)="choiceSpec(item.id)" [ngStyle]="{\'background\':item.id === specId ? \'red\' : \'\' }">\n\n                 {{item.specname}}\n\n               </span>\n\n            </p>\n\n      </div>\n\n      <div class="tbuyCount">\n\n        <ion-row>\n\n            <ion-col col-9>\n\n              <samp>购买数量：</samp>\n\n            </ion-col>\n\n            <ion-col col-1>\n\n              <button ion-button [disabled]=\'minus || disabled\' (click)="onMinus()" clear>\n\n                <ion-icon name="remove-circle" color="primary" ></ion-icon>\n\n              </button>\n\n            </ion-col>\n\n            <ion-col col-1>\n\n              <input [(ngModel)]="buyNumber" readonly  value="1" #input >\n\n            </ion-col>\n\n            <ion-col col-1 text-right>\n\n              <button ion-button [disabled]=\'add || disabled\' (click)="onAdd()" clear>\n\n                <ion-icon name="add-circle" color="primary"></ion-icon>\n\n              </button>\n\n            </ion-col>\n\n        </ion-row>\n\n     </div>\n\n </div>\n\n <div class="tfoot-right">\n\n    <button class="buy" ion-button (tap)="buynow()">立即购买</button>\n\n </div>\n\n</div>\n\n'/*ion-inline-end:"E:\apps\zjapp_wx\src\components\car-member\car-member.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__providers_rloginprocess_rloginprocess__["a" /* RloginprocessProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_http_services_http_services__["a" /* HttpServicesProvider */]])
    ], CarMemberComponent);
    return CarMemberComponent;
}());

//# sourceMappingURL=car-member.js.map

/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appshare_appshare__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_wechat_wechat__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { HttpClient } from '@angular/common/http';




/**
 * Generated class for the ShareComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ShareComponent = /** @class */ (function () {
    function ShareComponent(wechat, viewCrl, appshare, alert) {
        this.wechat = wechat;
        this.viewCrl = viewCrl;
        this.appshare = appshare;
        this.alert = alert;
        console.log('Hello ShareComponent Component');
        this.text = 'Hello World';
    }
    ShareComponent.prototype.dimiss = function () {
        this.viewCrl.dismiss();
    };
    /**分享 */
    ShareComponent.prototype.share = function (num) {
        if (num == 1) {
            // this.wechat.wxConfig(a);
            // this.appshare.wxShare(0);
        }
        else if (num == 2) {
            this.appshare.wxShare(1);
        }
        else if (num == 3) {
            this.appshare.wxShare(2);
        }
        else if (num == 4) {
            this.appshare.qqShare(0);
        }
        else if (num == 5) {
            this.appshare.qqShare(1);
        }
        else {
            this.alert.showAlert('系统异常', '', ['ok']);
        }
    };
    ShareComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'share',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\components\share\share.html"*/'<div class="tblank" tappable (click)="dimiss()">\n\n\n\n</div>\n\n<div class="sharecontent">\n\n  <p class="choiceshare">选择分享方式</p>\n\n  <ion-grid style="padding: 0">\n\n      <ion-row>\n\n          <ion-col col-4 class="tcol" tappable (click)="share(1)">\n\n            <ion-icon  ios="ios-weixin" style="line-height: 4rem"></ion-icon>\n\n            <p>微信好友</p>\n\n          </ion-col>\n\n        <ion-col col-4 class="tcol" tappable (click)="share(2)">\n\n            <ion-icon ios="ios-pengyouquan" style="line-height: 4rem"></ion-icon>\n\n            <p>微信朋友圈</p>\n\n        </ion-col>\n\n        <ion-col col-4 class="tcol" tappable (click)="share(3)">\n\n            <ion-icon ios="ios-shoucang" style="line-height: 4rem"></ion-icon>\n\n            <p>微信收藏</p> \n\n        </ion-col>\n\n     </ion-row>\n\n      <ion-row>\n\n          <ion-col col-4 class="tcol" tappable (click)="share(4)">\n\n            <ion-icon ios="ios-QQ" style="line-height: 4rem"></ion-icon>\n\n            <p>QQ好友</p>\n\n          </ion-col>\n\n          <ion-col col-4 class="tcol" tappable (click)="share(5)">\n\n            <ion-icon ios="ios-QQspec" style="line-height: 4rem"></ion-icon>\n\n            <p>QQ空间</p>\n\n          </ion-col>\n\n      </ion-row>\n\n  </ion-grid>\n\n</div>\n\n'/*ion-inline-end:"E:\apps\zjapp_wx\src\components\share\share.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_wechat_wechat__["a" /* WechatProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_appshare_appshare__["a" /* AppshareProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__["a" /* AlertProvider */]])
    ], ShareComponent);
    return ShareComponent;
}());

//# sourceMappingURL=share.js.map

/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppshareProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { HttpClient } from '@angular/common/http';


var AppshareProvider = /** @class */ (function () {
    function AppshareProvider(loadingCtrl, platform) {
        this.loadingCtrl = loadingCtrl;
        //标题
        this.title = "女装尖货 - 单件月销1.8万";
        //描述
        this.description = "行业精选女装 好货任你挑";
        //分享链接
        this.link = "http://dress.tongedev.cn";
        //分享图片
        this.image = "https://mmbiz.qlogo.cn/mmbiz_png/khImeKLbVF7u5qdXdicpapLl9diadj5db6xHxdlVgxmYPxkYOR8WyVgOw4tn3EHEsvd9hlfu7zEpgVLYkLh28Nibg/0?wx_fmt=png";
        if (platform.is('ios')) {
            this.link = "https://itunes.apple.com/cn/app/女装尖货-单件月销1-8万/id1194942857?mt=8";
        }
        else if (platform.is('android')) {
            this.link = "http://a.app.qq.com/o/simple.jsp?pkgname=cn.tongedev.dress";
        }
        else {
            this.link = "http://dress.tongedev.cn";
        }
    }
    AppshareProvider.prototype.wxShare = function (scene) {
        var loading = this.loadingCtrl.create({ showBackdrop: false });
        loading.present();
        try {
            Wechat.share({
                message: {
                    title: this.title,
                    description: this.description,
                    thumb: this.image,
                    mediaTagName: "TEST-TAG-001",
                    messageExt: "",
                    messageAction: "",
                    media: {
                        type: Wechat.Type.WEBPAGE,
                        webpageUrl: this.link
                    }
                },
                scene: scene == 0 ? Wechat.Scene.SESSION : ((scene == 1) ? Wechat.Scene.TIMELINE : Wechat.Scene.WXSceneFavorite) // share to Timeline
            }, function () {
                console.log("分享成功！");
            }, function (reason) {
                console.log("Failed: " + reason);
            });
        }
        catch (error) {
            console.log(error);
        }
        finally {
            loading.dismiss();
        }
    };
    AppshareProvider.prototype.qqShare = function (scene) {
        var loading = this.loadingCtrl.create({ showBackdrop: false });
        loading.present();
        try {
            var args = {};
            if (scene == 0) {
                args.scene = QQSDK.Scene.QQ; //QQSDK.Scene.QQZone,QQSDK.Scene.Favorite
            }
            else {
                args.scene = QQSDK.Scene.QQZone;
            }
            args.url = this.link;
            args.title = this.title;
            args.description = this.description;
            args.image = this.image;
            QQSDK.shareNews(function () {
                console.log("分享成功！");
            }, function (failReason) {
                console.log("分享失败！" + failReason);
            }, args);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            loading.dismiss();
        }
    };
    AppshareProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */]])
    ], AppshareProvider);
    return AppshareProvider;
}());

//# sourceMappingURL=appshare.js.map

/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductlistPageModule", function() { return ProductlistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__productlist__ = __webpack_require__(347);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductlistPageModule = /** @class */ (function () {
    function ProductlistPageModule() {
    }
    ProductlistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__productlist__["a" /* ProductlistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__productlist__["a" /* ProductlistPage */]),
            ],
        })
    ], ProductlistPageModule);
    return ProductlistPageModule;
}());

//# sourceMappingURL=productlist.module.js.map

/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProxyapplyPageModule", function() { return ProxyapplyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__proxyapply__ = __webpack_require__(348);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProxyapplyPageModule = /** @class */ (function () {
    function ProxyapplyPageModule() {
    }
    ProxyapplyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__proxyapply__["a" /* ProxyapplyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__proxyapply__["a" /* ProxyapplyPage */]),
            ],
        })
    ], ProxyapplyPageModule);
    return ProxyapplyPageModule;
}());

//# sourceMappingURL=proxyapply.module.js.map

/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrcodePageModule", function() { return QrcodePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__qrcode__ = __webpack_require__(349);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var QrcodePageModule = /** @class */ (function () {
    function QrcodePageModule() {
    }
    QrcodePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__qrcode__["a" /* QrcodePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__qrcode__["a" /* QrcodePage */]),
            ],
        })
    ], QrcodePageModule);
    return QrcodePageModule;
}());

//# sourceMappingURL=qrcode.module.js.map

/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RechargePageModule", function() { return RechargePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recharge__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RechargePageModule = /** @class */ (function () {
    function RechargePageModule() {
    }
    RechargePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__recharge__["a" /* RechargePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__recharge__["a" /* RechargePage */]),
            ],
        })
    ], RechargePageModule);
    return RechargePageModule;
}());

//# sourceMappingURL=recharge.module.js.map

/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefundPageModule", function() { return RefundPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__refund__ = __webpack_require__(351);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RefundPageModule = /** @class */ (function () {
    function RefundPageModule() {
    }
    RefundPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__refund__["a" /* RefundPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__refund__["a" /* RefundPage */]),
            ],
        })
    ], RefundPageModule);
    return RefundPageModule;
}());

//# sourceMappingURL=refund.module.js.map

/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search__ = __webpack_require__(352);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchPageModule = /** @class */ (function () {
    function SearchPageModule() {
    }
    SearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */]),
            ],
        })
    ], SearchPageModule);
    return SearchPageModule;
}());

//# sourceMappingURL=search.module.js.map

/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetattrPageModule", function() { return SetattrPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setattr__ = __webpack_require__(353);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SetattrPageModule = /** @class */ (function () {
    function SetattrPageModule() {
    }
    SetattrPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__setattr__["a" /* SetattrPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__setattr__["a" /* SetattrPage */]),
            ],
        })
    ], SetattrPageModule);
    return SetattrPageModule;
}());

//# sourceMappingURL=setattr.module.js.map

/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetpaypasswordPageModule", function() { return SetpaypasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setpaypassword__ = __webpack_require__(354);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SetpaypasswordPageModule = /** @class */ (function () {
    function SetpaypasswordPageModule() {
    }
    SetpaypasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__setpaypassword__["a" /* SetpaypasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__setpaypassword__["a" /* SetpaypasswordPage */]),
            ],
        })
    ], SetpaypasswordPageModule);
    return SetpaypasswordPageModule;
}());

//# sourceMappingURL=setpaypassword.module.js.map

/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPageModule", function() { return SettingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting__ = __webpack_require__(355);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingPageModule = /** @class */ (function () {
    function SettingPageModule() {
    }
    SettingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__setting__["a" /* SettingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__setting__["a" /* SettingPage */]),
            ],
        })
    ], SettingPageModule);
    return SettingPageModule;
}());

//# sourceMappingURL=setting.module.js.map

/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitimmediatelyPageModule", function() { return SplitimmediatelyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__splitimmediately__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SplitimmediatelyPageModule = /** @class */ (function () {
    function SplitimmediatelyPageModule() {
    }
    SplitimmediatelyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__splitimmediately__["a" /* SplitimmediatelyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__splitimmediately__["a" /* SplitimmediatelyPage */]),
            ],
        })
    ], SplitimmediatelyPageModule);
    return SplitimmediatelyPageModule;
}());

//# sourceMappingURL=splitimmediately.module.js.map

/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitinitPageModule", function() { return SplitinitPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__splitinit__ = __webpack_require__(357);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SplitinitPageModule = /** @class */ (function () {
    function SplitinitPageModule() {
    }
    SplitinitPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__splitinit__["a" /* SplitinitPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__splitinit__["a" /* SplitinitPage */]),
            ],
        })
    ], SplitinitPageModule);
    return SplitinitPageModule;
}());

//# sourceMappingURL=splitinit.module.js.map

/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitrecordPageModule", function() { return SplitrecordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__splitrecord__ = __webpack_require__(358);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SplitrecordPageModule = /** @class */ (function () {
    function SplitrecordPageModule() {
    }
    SplitrecordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__splitrecord__["a" /* SplitrecordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__splitrecord__["a" /* SplitrecordPage */]),
            ],
        })
    ], SplitrecordPageModule);
    return SplitrecordPageModule;
}());

//# sourceMappingURL=splitrecord.module.js.map

/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitlePageModule", function() { return TitlePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__title__ = __webpack_require__(359);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TitlePageModule = /** @class */ (function () {
    function TitlePageModule() {
    }
    TitlePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__title__["a" /* TitlePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__title__["a" /* TitlePage */]),
            ],
        })
    ], TitlePageModule);
    return TitlePageModule;
}());

//# sourceMappingURL=title.module.js.map

/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatepasswordPageModule", function() { return UpdatepasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__updatepassword__ = __webpack_require__(360);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UpdatepasswordPageModule = /** @class */ (function () {
    function UpdatepasswordPageModule() {
    }
    UpdatepasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__updatepassword__["a" /* UpdatepasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__updatepassword__["a" /* UpdatepasswordPage */]),
            ],
        })
    ], UpdatepasswordPageModule);
    return UpdatepasswordPageModule;
}());

//# sourceMappingURL=updatepassword.module.js.map

/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatephonenumPageModule", function() { return UpdatephonenumPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__updatephonenum__ = __webpack_require__(361);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UpdatephonenumPageModule = /** @class */ (function () {
    function UpdatephonenumPageModule() {
    }
    UpdatephonenumPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__updatephonenum__["a" /* UpdatephonenumPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__updatephonenum__["a" /* UpdatephonenumPage */]),
            ],
        })
    ], UpdatephonenumPageModule);
    return UpdatephonenumPageModule;
}());

//# sourceMappingURL=updatephonenum.module.js.map

/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatephonenumnextPageModule", function() { return UpdatephonenumnextPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__updatephonenumnext__ = __webpack_require__(362);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UpdatephonenumnextPageModule = /** @class */ (function () {
    function UpdatephonenumnextPageModule() {
    }
    UpdatephonenumnextPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__updatephonenumnext__["a" /* UpdatephonenumnextPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__updatephonenumnext__["a" /* UpdatephonenumnextPage */]),
            ],
        })
    ], UpdatephonenumnextPageModule);
    return UpdatephonenumnextPageModule;
}());

//# sourceMappingURL=updatephonenumnext.module.js.map

/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdaterankPageModule", function() { return UpdaterankPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__updaterank__ = __webpack_require__(363);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UpdaterankPageModule = /** @class */ (function () {
    function UpdaterankPageModule() {
    }
    UpdaterankPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__updaterank__["a" /* UpdaterankPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__updaterank__["a" /* UpdaterankPage */]),
            ],
        })
    ], UpdaterankPageModule);
    return UpdaterankPageModule;
}());

//# sourceMappingURL=updaterank.module.js.map

/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VippresentPageModule", function() { return VippresentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vippresent__ = __webpack_require__(364);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VippresentPageModule = /** @class */ (function () {
    function VippresentPageModule() {
    }
    VippresentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__vippresent__["a" /* VippresentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__vippresent__["a" /* VippresentPage */]),
            ],
        })
    ], VippresentPageModule);
    return VippresentPageModule;
}());

//# sourceMappingURL=vippresent.module.js.map

/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VippresentdetailPageModule", function() { return VippresentdetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vippresentdetail__ = __webpack_require__(365);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VippresentdetailPageModule = /** @class */ (function () {
    function VippresentdetailPageModule() {
    }
    VippresentdetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__vippresentdetail__["a" /* VippresentdetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__vippresentdetail__["a" /* VippresentdetailPage */]),
            ],
        })
    ], VippresentdetailPageModule);
    return VippresentdetailPageModule;
}());

//# sourceMappingURL=vippresentdetail.module.js.map

/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithdrawPageModule", function() { return WithdrawPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__withdraw__ = __webpack_require__(366);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WithdrawPageModule = /** @class */ (function () {
    function WithdrawPageModule() {
    }
    WithdrawPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__withdraw__["a" /* WithdrawPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__withdraw__["a" /* WithdrawPage */]),
            ],
        })
    ], WithdrawPageModule);
    return WithdrawPageModule;
}());

//# sourceMappingURL=withdraw.module.js.map

/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithdrawaccountPageModule", function() { return WithdrawaccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__withdrawaccount__ = __webpack_require__(367);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WithdrawaccountPageModule = /** @class */ (function () {
    function WithdrawaccountPageModule() {
    }
    WithdrawaccountPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__withdrawaccount__["a" /* WithdrawaccountPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__withdrawaccount__["a" /* WithdrawaccountPage */]),
            ],
        })
    ], WithdrawaccountPageModule);
    return WithdrawaccountPageModule;
}());

//# sourceMappingURL=withdrawaccount.module.js.map

/***/ }),
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(287);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_ion_modle_a_ion_modle_a__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_ion_modle_b_ion_modle_b__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_ion_modle_c_ion_modle_c__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_ion_modle_d_ion_modle_d__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_ion_modle_g_ion_modle_g__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_index_adv_index_adv__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_category_category__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_cart_cart__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_user_user__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login_module__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_search_search_module__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_productlist_productlist_module__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_personal_personal_module__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_payment_payment_module__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_setting_setting_module__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_fans_fans_module__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_mywallet_mywallet_module__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_fandetail_fandetail_module__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_orders_orders_module__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_refund_refund_module__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_information_information_module__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_comment_comment_module__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_commercial_commercial_module__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_commercialdetail_commercialdetail_module__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_title_title_module__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_orderlist_orderlist_module__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_recharge_recharge_module__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_vippresent_vippresent_module__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_vippresentdetail_vippresentdetail_module__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_setpaypassword_setpaypassword_module__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_updatepassword_updatepassword_module__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_withdraw_withdraw_module__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_withdrawaccount_withdrawaccount_module__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_addaliacount_addaliacount_module__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_addbankacount_addbankacount_module__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_moneyrecord_moneyrecord_module__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_updaterank_updaterank_module__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_address_address_module__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_operateaddress_operateaddress_module__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_certification_certification_module__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_proxyapply_proxyapply_module__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_splitinit_splitinit_module__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_splitimmediately_splitimmediately_module__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_tabs_tabs__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__providers_config_config__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__providers_http_services_http_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__providers_storage_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__ionic_native_themeable_browser__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__providers_alert_alert__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__providers_clearlogin_clearlogin__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__providers_toast_toast__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__providers_rloginprocess_rloginprocess__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_product_detail_product_detail_module__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__pages_paysuccess_paysuccess_module__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pages_electransfer_electransfer_module__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__pages_callcenter_callcenter_module__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__pages_splitrecord_splitrecord_module__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__pages_setattr_setattr_module__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__pages_updatephonenum_updatephonenum_module__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__pages_updatephonenumnext_updatephonenumnext_module__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__pages_members_product_members_product_module__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__pages_confirm_vip_order_confirm_vip_order_module__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__pages_product_comment_product_comment_module__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__pages_orderhandletransfer_orderhandletransfer_module__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__pages_key_product_list_key_product_list_module__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__pages_qrcode_qrcode_module__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__components_share_share__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__providers_appshare_appshare__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__components_car_modal_car_modal__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__components_car_member_car_member__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__pages_confirm_order_confirm_order_module__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__providers_wechat_wechat__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__providers_weblink_weblink__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__providers_verifypassword_verifypassword__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__components_addressmodel_addressmodel__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { SplashScreen } from '@ionic-native/splash-screen';
// import { StatusBar } from '@ionic-native/status-bar';


//A组件

//B组件

//C组件

//D组件

//G组件

//轮播页面





//登录

//搜索页面

//商品列表

//商品详情
//账户管理

//选择支付方式

//设置页面

//我的粉丝


//粉丝详情

//全部订单

//申请退款

//查看物流

//待评价

//商学院

//课程详情





























/**商品详情 */














/**分享 */


//组件







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_49__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_index_adv_index_adv__["a" /* IndexAdvPage */],
                __WEBPACK_IMPORTED_MODULE_5__components_ion_modle_a_ion_modle_a__["a" /* IonModleAComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_ion_modle_b_ion_modle_b__["a" /* IonModleBComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_ion_modle_c_ion_modle_c__["a" /* IonModleCComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_ion_modle_d_ion_modle_d__["a" /* IonModleDComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_ion_modle_g_ion_modle_g__["a" /* IonModleGComponent */],
                __WEBPACK_IMPORTED_MODULE_74__components_car_modal_car_modal__["a" /* CarModalComponent */],
                __WEBPACK_IMPORTED_MODULE_75__components_car_member_car_member__["a" /* CarMemberComponent */],
                __WEBPACK_IMPORTED_MODULE_72__components_share_share__["a" /* ShareComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_80__components_addressmodel_addressmodel__["a" /* AddressmodelComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_58__pages_product_detail_product_detail_module__["ProductDetailPageModule"],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_16__pages_search_search_module__["SearchPageModule"],
                __WEBPACK_IMPORTED_MODULE_17__pages_productlist_productlist_module__["ProductlistPageModule"],
                __WEBPACK_IMPORTED_MODULE_18__pages_personal_personal_module__["PersonalPageModule"],
                __WEBPACK_IMPORTED_MODULE_19__pages_payment_payment_module__["PaymentPageModule"],
                __WEBPACK_IMPORTED_MODULE_20__pages_setting_setting_module__["SettingPageModule"],
                __WEBPACK_IMPORTED_MODULE_21__pages_fans_fans_module__["FansPageModule"],
                __WEBPACK_IMPORTED_MODULE_22__pages_mywallet_mywallet_module__["MywalletPageModule"],
                __WEBPACK_IMPORTED_MODULE_23__pages_fandetail_fandetail_module__["FandetailPageModule"],
                __WEBPACK_IMPORTED_MODULE_24__pages_orders_orders_module__["OrdersPageModule"],
                __WEBPACK_IMPORTED_MODULE_32__pages_recharge_recharge_module__["RechargePageModule"],
                __WEBPACK_IMPORTED_MODULE_33__pages_vippresent_vippresent_module__["VippresentPageModule"],
                __WEBPACK_IMPORTED_MODULE_34__pages_vippresentdetail_vippresentdetail_module__["VippresentdetailPageModule"],
                __WEBPACK_IMPORTED_MODULE_35__pages_setpaypassword_setpaypassword_module__["SetpaypasswordPageModule"],
                __WEBPACK_IMPORTED_MODULE_36__pages_updatepassword_updatepassword_module__["UpdatepasswordPageModule"],
                __WEBPACK_IMPORTED_MODULE_37__pages_withdraw_withdraw_module__["WithdrawPageModule"],
                __WEBPACK_IMPORTED_MODULE_38__pages_withdrawaccount_withdrawaccount_module__["WithdrawaccountPageModule"],
                __WEBPACK_IMPORTED_MODULE_39__pages_addaliacount_addaliacount_module__["AddaliacountPageModule"],
                __WEBPACK_IMPORTED_MODULE_40__pages_addbankacount_addbankacount_module__["AddbankacountPageModule"],
                __WEBPACK_IMPORTED_MODULE_31__pages_orderlist_orderlist_module__["OrderlistPageModule"],
                __WEBPACK_IMPORTED_MODULE_25__pages_refund_refund_module__["RefundPageModule"],
                __WEBPACK_IMPORTED_MODULE_25__pages_refund_refund_module__["RefundPageModule"],
                __WEBPACK_IMPORTED_MODULE_26__pages_information_information_module__["InformationPageModule"],
                __WEBPACK_IMPORTED_MODULE_27__pages_comment_comment_module__["CommentPageModule"],
                __WEBPACK_IMPORTED_MODULE_28__pages_commercial_commercial_module__["CommercialPageModule"],
                __WEBPACK_IMPORTED_MODULE_29__pages_commercialdetail_commercialdetail_module__["CommercialdetailPageModule"],
                __WEBPACK_IMPORTED_MODULE_76__pages_confirm_order_confirm_order_module__["ConfirmOrderPageModule"],
                __WEBPACK_IMPORTED_MODULE_59__pages_paysuccess_paysuccess_module__["PaysuccessPageModule"],
                __WEBPACK_IMPORTED_MODULE_41__pages_moneyrecord_moneyrecord_module__["MoneyrecordPageModule"],
                __WEBPACK_IMPORTED_MODULE_60__pages_electransfer_electransfer_module__["ElectransferPageModule"],
                __WEBPACK_IMPORTED_MODULE_42__pages_updaterank_updaterank_module__["UpdaterankPageModule"],
                __WEBPACK_IMPORTED_MODULE_61__pages_callcenter_callcenter_module__["CallcenterPageModule"],
                __WEBPACK_IMPORTED_MODULE_43__pages_address_address_module__["AddressPageModule"],
                __WEBPACK_IMPORTED_MODULE_44__pages_operateaddress_operateaddress_module__["OperateaddressPageModule"],
                __WEBPACK_IMPORTED_MODULE_45__pages_certification_certification_module__["CertificationPageModule"],
                __WEBPACK_IMPORTED_MODULE_46__pages_proxyapply_proxyapply_module__["ProxyapplyPageModule"],
                __WEBPACK_IMPORTED_MODULE_47__pages_splitinit_splitinit_module__["SplitinitPageModule"],
                __WEBPACK_IMPORTED_MODULE_62__pages_splitrecord_splitrecord_module__["SplitrecordPageModule"],
                __WEBPACK_IMPORTED_MODULE_30__pages_title_title_module__["TitlePageModule"],
                __WEBPACK_IMPORTED_MODULE_48__pages_splitimmediately_splitimmediately_module__["SplitimmediatelyPageModule"],
                __WEBPACK_IMPORTED_MODULE_63__pages_setattr_setattr_module__["SetattrPageModule"],
                __WEBPACK_IMPORTED_MODULE_64__pages_updatephonenum_updatephonenum_module__["UpdatephonenumPageModule"],
                __WEBPACK_IMPORTED_MODULE_65__pages_updatephonenumnext_updatephonenumnext_module__["UpdatephonenumnextPageModule"],
                __WEBPACK_IMPORTED_MODULE_66__pages_members_product_members_product_module__["MembersProductPageModule"],
                __WEBPACK_IMPORTED_MODULE_67__pages_confirm_vip_order_confirm_vip_order_module__["ConfirmVipOrderPageModule"],
                __WEBPACK_IMPORTED_MODULE_68__pages_product_comment_product_comment_module__["ProductCommentPageModule"],
                __WEBPACK_IMPORTED_MODULE_69__pages_orderhandletransfer_orderhandletransfer_module__["OrderhandletransferPageModule"],
                __WEBPACK_IMPORTED_MODULE_70__pages_key_product_list_key_product_list_module__["KeyProductListPageModule"],
                __WEBPACK_IMPORTED_MODULE_71__pages_qrcode_qrcode_module__["QrcodePageModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {
                    mode: 'ios',
                    tabsHideOnSubPages: 'true',
                    backButtonText: '',
                    iconMode: 'ios'
                }, {
                    links: [
                        { loadChildren: '../pages/addaliacount/addaliacount.module#AddaliacountPageModule', name: 'AddaliacountPage', segment: 'addaliacount', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addbankacount/addbankacount.module#AddbankacountPageModule', name: 'AddbankacountPage', segment: 'addbankacount', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/address/address.module#AddressPageModule', name: 'AddressPage', segment: 'address', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/callcenter/callcenter.module#CallcenterPageModule', name: 'CallcenterPage', segment: 'callcenter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/certification/certification.module#CertificationPageModule', name: 'CertificationPage', segment: 'certification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/comment/comment.module#CommentPageModule', name: 'CommentPage', segment: 'comment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/commercial/commercial.module#CommercialPageModule', name: 'CommercialPage', segment: 'commercial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/commercialdetail/commercialdetail.module#CommercialdetailPageModule', name: 'CommercialdetailPage', segment: 'commercialdetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirm-order/confirm-order.module#ConfirmOrderPageModule', name: 'ConfirmOrderPage', segment: 'confirm-order', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirm-vip-order/confirm-vip-order.module#ConfirmVipOrderPageModule', name: 'ConfirmVipOrderPage', segment: 'confirm-vip-order', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/electransfer/electransfer.module#ElectransferPageModule', name: 'ElectransferPage', segment: 'electransfer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fandetail/fandetail.module#FandetailPageModule', name: 'FandetailPage', segment: 'fandetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fans/fans.module#FansPageModule', name: 'FansPage', segment: 'fans', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/information/information.module#InformationPageModule', name: 'InformationPage', segment: 'information', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/key-product-list/key-product-list.module#KeyProductListPageModule', name: 'KeyProductListPage', segment: 'key-product-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/members-product/members-product.module#MembersProductPageModule', name: 'MembersProductPage', segment: 'members-product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/moneyrecord/moneyrecord.module#MoneyrecordPageModule', name: 'MoneyrecordPage', segment: 'moneyrecord', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mywallet/mywallet.module#MywalletPageModule', name: 'MywalletPage', segment: 'mywallet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/operateaddress/operateaddress.module#OperateaddressPageModule', name: 'OperateaddressPage', segment: 'operateaddress', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/orderhandletransfer/orderhandletransfer.module#OrderhandletransferPageModule', name: 'OrderhandletransferPage', segment: 'orderhandletransfer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/orderlist/orderlist.module#OrderlistPageModule', name: 'OrderlistPage', segment: 'orderlist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/orders/orders.module#OrdersPageModule', name: 'OrdersPage', segment: 'orders', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment/payment.module#PaymentPageModule', name: 'PaymentPage', segment: 'payment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/paysuccess/paysuccess.module#PaysuccessPageModule', name: 'PaysuccessPage', segment: 'paysuccess', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/personal/personal.module#PersonalPageModule', name: 'PersonalPage', segment: 'personal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product-comment/product-comment.module#ProductCommentPageModule', name: 'ProductCommentPage', segment: 'product-comment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product-detail/product-detail.module#ProductDetailPageModule', name: 'ProductDetailPage', segment: 'product-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/productlist/productlist.module#ProductlistPageModule', name: 'ProductlistPage', segment: 'productlist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/proxyapply/proxyapply.module#ProxyapplyPageModule', name: 'ProxyapplyPage', segment: 'proxyapply', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/qrcode/qrcode.module#QrcodePageModule', name: 'QrcodePage', segment: 'qrcode', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recharge/recharge.module#RechargePageModule', name: 'RechargePage', segment: 'recharge', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/refund/refund.module#RefundPageModule', name: 'RefundPage', segment: 'refund', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/salereturn/salereturn.module#SalereturnPageModule', name: 'SalereturnPage', segment: 'salereturn', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setattr/setattr.module#SetattrPageModule', name: 'SetattrPage', segment: 'setattr', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setpaypassword/setpaypassword.module#SetpaypasswordPageModule', name: 'SetpaypasswordPage', segment: 'setpaypassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting/setting.module#SettingPageModule', name: 'SettingPage', segment: 'setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/splitimmediately/splitimmediately.module#SplitimmediatelyPageModule', name: 'SplitimmediatelyPage', segment: 'splitimmediately', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/splitinit/splitinit.module#SplitinitPageModule', name: 'SplitinitPage', segment: 'splitinit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/splitrecord/splitrecord.module#SplitrecordPageModule', name: 'SplitrecordPage', segment: 'splitrecord', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/title/title.module#TitlePageModule', name: 'TitlePage', segment: 'title', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/updatepassword/updatepassword.module#UpdatepasswordPageModule', name: 'UpdatepasswordPage', segment: 'updatepassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/updatephonenum/updatephonenum.module#UpdatephonenumPageModule', name: 'UpdatephonenumPage', segment: 'updatephonenum', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/updatephonenumnext/updatephonenumnext.module#UpdatephonenumnextPageModule', name: 'UpdatephonenumnextPage', segment: 'updatephonenumnext', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/updaterank/updaterank.module#UpdaterankPageModule', name: 'UpdaterankPage', segment: 'updaterank', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vippresent/vippresent.module#VippresentPageModule', name: 'VippresentPage', segment: 'vippresent', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vippresentdetail/vippresentdetail.module#VippresentdetailPageModule', name: 'VippresentdetailPage', segment: 'vippresentdetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/withdraw/withdraw.module#WithdrawPageModule', name: 'WithdrawPage', segment: 'withdraw', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/withdrawaccount/withdrawaccount.module#WithdrawaccountPageModule', name: 'WithdrawaccountPage', segment: 'withdrawaccount', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_49__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_index_adv_index_adv__["a" /* IndexAdvPage */],
                __WEBPACK_IMPORTED_MODULE_5__components_ion_modle_a_ion_modle_a__["a" /* IonModleAComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_ion_modle_b_ion_modle_b__["a" /* IonModleBComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_ion_modle_c_ion_modle_c__["a" /* IonModleCComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_ion_modle_d_ion_modle_d__["a" /* IonModleDComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_ion_modle_g_ion_modle_g__["a" /* IonModleGComponent */],
                __WEBPACK_IMPORTED_MODULE_74__components_car_modal_car_modal__["a" /* CarModalComponent */],
                __WEBPACK_IMPORTED_MODULE_75__components_car_member_car_member__["a" /* CarMemberComponent */],
                __WEBPACK_IMPORTED_MODULE_72__components_share_share__["a" /* ShareComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_80__components_addressmodel_addressmodel__["a" /* AddressmodelComponent */]
            ],
            providers: [
                // StatusBar,
                // SplashScreen,
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_50__providers_config_config__["a" /* ConfigProvider */],
                __WEBPACK_IMPORTED_MODULE_51__providers_http_services_http_services__["a" /* HttpServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_52__providers_storage_storage__["a" /* StorageProvider */],
                __WEBPACK_IMPORTED_MODULE_53__ionic_native_themeable_browser__["a" /* ThemeableBrowser */],
                __WEBPACK_IMPORTED_MODULE_54__providers_alert_alert__["a" /* AlertProvider */],
                __WEBPACK_IMPORTED_MODULE_55__providers_clearlogin_clearlogin__["a" /* ClearloginProvider */],
                __WEBPACK_IMPORTED_MODULE_56__providers_toast_toast__["a" /* ToastProvider */],
                __WEBPACK_IMPORTED_MODULE_57__providers_rloginprocess_rloginprocess__["a" /* RloginprocessProvider */],
                __WEBPACK_IMPORTED_MODULE_73__providers_appshare_appshare__["a" /* AppshareProvider */],
                __WEBPACK_IMPORTED_MODULE_77__providers_wechat_wechat__["a" /* WechatProvider */],
                __WEBPACK_IMPORTED_MODULE_78__providers_weblink_weblink__["a" /* WeblinkProvider */],
                __WEBPACK_IMPORTED_MODULE_79__providers_verifypassword_verifypassword__["a" /* VerifypasswordProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddaliacountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_services_http_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rloginprocess_rloginprocess__ = __webpack_require__(8);
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
 * Generated class for the AddaliacountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddaliacountPage = /** @class */ (function () {
    function AddaliacountPage(navCtrl, navParams, httpService, storage, noticeSer, rlogin) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.storage = storage;
        this.noticeSer = noticeSer;
        this.rlogin = rlogin;
        console.log('构造addaliacount');
    }
    AddaliacountPage.prototype.confirm = function () {
        var _this = this;
        if (!this.aliname) {
            this.noticeSer.showToast('姓名不可为空');
            return;
        }
        if (!this.aliacount) {
            this.noticeSer.showToast('账号不可为空');
            return;
        }
        var token = this.storage.get('token');
        var apiUrl = 'v1/AccountManager/AccountManager/AddAliAccount/' + token;
        this.httpService.doFormPost(apiUrl, {
            name: this.aliname,
            account: this.aliacount
        }, function (res) {
            if (res.error_code == 0) {
                _this.noticeSer.showToast('添加成功');
                _this.navCtrl.pop();
            }
            else if (res.error_code == 3) {
                //抢登处理
                _this.rlogin.rLoginProcess(_this.navCtrl);
            }
            else {
                _this.noticeSer.showToast('服务异常');
            }
        });
    };
    AddaliacountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addaliacount',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\addaliacount\addaliacount.html"*/'<!--\n\n  Generated template for the AddaliacountPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>添加支付宝账号</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content style="background: #eeeeee;">\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label>请输入支付宝姓名：</ion-label>\n\n        <ion-input type="text" [(ngModel)]="aliname"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>请输入支付宝账号：</ion-label>\n\n        <ion-input type="text" [(ngModel)]="aliacount"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button block color="danger" class="confirm" (tap)="confirm()">添加</button>\n\n  </ion-content>'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\addaliacount\addaliacount.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_http_services_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_rloginprocess_rloginprocess__["a" /* RloginprocessProvider */]])
    ], AddaliacountPage);
    return AddaliacountPage;
}());

//# sourceMappingURL=addaliacount.js.map

/***/ }),
/* 313 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddbankacountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_services_http_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_config_config__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_rloginprocess_rloginprocess__ = __webpack_require__(8);
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
 * Generated class for the AddbankacountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddbankacountPage = /** @class */ (function () {
    function AddbankacountPage(navCtrl, navParams, httpService, noticeSer, sanitizer, config, el, renderer2, storage, rclogin) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.noticeSer = noticeSer;
        this.sanitizer = sanitizer;
        this.config = config;
        this.el = el;
        this.renderer2 = renderer2;
        this.storage = storage;
        this.rclogin = rclogin;
        this.bankArray = [];
        this.strHTML = '';
        this.init();
    }
    AddbankacountPage.prototype.init = function () {
        var _this = this;
        var apiUrl = 'v1/AccountManager/AccountManager/GetAllBank';
        this.httpService.requestData(apiUrl, function (res) {
            if (res.error_code == 0) {
                var dataLength = res.data.length;
                _this.bankArray = res.data;
                for (var index = 0; index < dataLength; index++) {
                    var logo = res.data[index].logo;
                    var bankname = res.data[index].bankname;
                    if (index == dataLength - 1) {
                        _this.strHTML += '<div class="card-line-head">' +
                            '<img  src="' + _this.config.domain + logo + '"><span class="head-span">' + bankname + '</span><span style="display: none">' + index + '</span></div></div>';
                    }
                    else {
                        _this.strHTML += '<div class="card-line-head">' +
                            '<img  src="' + _this.config.domain + logo + '"><span class="head-span">' + bankname + '</span><span style="display: none">' + index + '</span></div><div class="line-div"></div>';
                    }
                }
            }
            else {
                _this.noticeSer.showToast('服务异常');
            }
        });
    };
    AddbankacountPage.prototype.assembleHTML = function (strHTML) {
        return this.sanitizer.bypassSecurityTrustHtml(this.strHTML);
    };
    AddbankacountPage.prototype.bindEvent = function (div) {
        var _this = this;
        div.onclick = function (e) {
            var index; //选择的银行数组下标
            var clickEle = e.target;
            var clickCss = clickEle.className;
            if (clickCss == 'card-line-head') {
                index = clickEle.lastChild.innerHTML;
            }
            else if (clickCss == 'line-div') {
                index = clickEle.previousElementSibling.lastChild.innerHTML;
            }
            else {
                index = clickEle.parentNode.lastChild.innerHTML;
            }
            //填充div银行信息
            _this.selectInfo = _this.bankArray[index];
            _this.closeSelect();
        };
    };
    AddbankacountPage.prototype.ionViewDidEnter = function () {
        //初始化时移动div到屏幕最下边
        var cardDiv = this.el.nativeElement.querySelector('.card-div');
        // let leftSet = screen.width - cardDiv.offsetWidth;
        // console.log(leftSet);
        // this.renderer2.setStyle(cardDiv, 'left', leftSet + 'px');
        // this.renderer2.setStyle(cardDiv, 'bottom', 0);
        this.bindEvent(cardDiv);
    };
    AddbankacountPage.prototype.selectBank = function () {
        var cardDiv = this.el.nativeElement.querySelector('.card-div');
        var hidebg = this.el.nativeElement.querySelector('#hidebg');
        var ionList = this.el.nativeElement.querySelector('ion-list');
        this.renderer2.setStyle(hidebg, 'display', 'block');
        this.renderer2.setStyle(cardDiv, 'display', 'block');
        var leftSet = (screen.width - cardDiv.offsetWidth) / 2;
        var topSet = ionList.offsetHeight;
        var originalHeight = cardDiv.offsetHeight;
        this.renderer2.setStyle(cardDiv, 'left', leftSet + 'px');
        this.renderer2.setStyle(cardDiv, 'top', topSet - 20 + 'px');
        this.renderer2.setStyle(cardDiv, 'height', originalHeight + 'px');
    };
    AddbankacountPage.prototype.closeSelect = function () {
        var cardDiv = this.el.nativeElement.querySelector('.card-div');
        var hidebg = this.el.nativeElement.querySelector('#hidebg');
        this.renderer2.setStyle(cardDiv, 'display', 'none');
        this.renderer2.setStyle(hidebg, 'display', 'none');
    };
    AddbankacountPage.prototype.confirm = function () {
        var _this = this;
        if (!this.name) {
            this.noticeSer.showToast('请输入姓名');
            return;
        }
        if (!this.bankacount) {
            this.noticeSer.showToast('请输入卡号');
            return;
        }
        if (!this.selectInfo) {
            this.noticeSer.showToast('请选择银行');
            return;
        }
        if (!this.bankinfo) {
            this.noticeSer.showToast('请填写支行信息');
            return;
        }
        var token = this.storage.get('token');
        var api = 'v1/AccountManager/AccountManager/AddBankAccount/' + token;
        this.httpService.doFormPost(api, {
            account: this.bankacount,
            bankName: this.selectInfo.bankname,
            bankInfo: this.bankinfo,
            bankLogo: this.selectInfo.logo,
            name: this.name
        }, function (res) {
            if (res.error_code == 0) {
                _this.noticeSer.showToast('添加成功');
                _this.navCtrl.pop();
            }
            else if (res.error_code == 3) {
                //抢登处理
                _this.rclogin.rLoginProcess(_this.navCtrl);
            }
            else {
                _this.noticeSer.showToast('服务异常');
            }
        });
    };
    AddbankacountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addbankacount',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\addbankacount\addbankacount.html"*/'<!--\n\n  Generated template for the AddbankacountPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>添加银行账号</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content style="background: #eeeeee;">\n\n    <div id="content">\n\n    <ion-list>\n\n        <ion-item>\n\n          <ion-label>姓名：</ion-label>\n\n          <ion-input type="text" [(ngModel)]="name"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>卡号：</ion-label>\n\n          <ion-input type="number" [(ngModel)]="bankacount"></ion-input>\n\n        </ion-item>\n\n        <!-- (tap)="chooseBank()" -->\n\n        <button class="chooseButton" ion-item (tap) = "selectBank()">\n\n            请选择银行\n\n            <img item-right [src]="config.domain + selectInfo.logo" *ngIf="selectInfo">\n\n            <p item-right *ngIf="selectInfo">{{selectInfo.bankname}}&nbsp;&nbsp;</p>\n\n          </button> \n\n        <ion-item>\n\n            <ion-label>支行信息：</ion-label>\n\n            <ion-input type="text" [(ngModel)]="bankinfo"></ion-input>\n\n          </ion-item>\n\n      </ion-list>\n\n      <button ion-button block color="danger" class="confirm" (tap)="confirm()">添加</button>\n\n    </div>\n\n      <div id="hidebg" (tap)="closeSelect()"></div>\n\n      <div class="card-div">\n\n        <div class="card-line-first">\n\n          请选择银行\n\n        </div>\n\n        <div class="line-div"></div>\n\n          <div [innerHTML]="assembleHTML(strHTML)"></div>\n\n          </div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\addbankacount\addbankacount.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_services_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_6__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_rloginprocess_rloginprocess__["a" /* RloginprocessProvider */]])
    ], AddbankacountPage);
    return AddbankacountPage;
}());

//# sourceMappingURL=addbankacount.js.map

/***/ }),
/* 314 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_services_http_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rloginprocess_rloginprocess__ = __webpack_require__(8);
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
 * Generated class for the AddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddressPage = /** @class */ (function () {
    function AddressPage(navCtrl, navParams, httpService, storage, noticeSer, rlogin) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.storage = storage;
        this.noticeSer = noticeSer;
        this.rlogin = rlogin;
        this.datas = [];
        if (this.navParams.get('action')) {
            this.callback = this.navParams.get('action');
        }
    }
    AddressPage.prototype.ionViewWillEnter = function () {
        this.initData();
    };
    AddressPage.prototype.backWithAdrress = function ($event, addressId) {
        var _this = this;
        if ($event.target.className == 'button') {
            this.addOrEdit(addressId);
        }
        else {
            this.callback(addressId).then(function () { _this.navCtrl.pop(); });
        }
    };
    AddressPage.prototype.initData = function () {
        var _this = this;
        var token = this.storage.get('token');
        if (token) {
            var api = 'v1/AddressManager/getAllAddressOfUser/' + token;
            this.httpService.requestData(api, function (data) {
                if (data.error_code == 0) {
                    _this.datas = data.data;
                    for (var index = 0; index < _this.datas.length; index++) {
                        _this.datas[index].headName = _this.getHeadName(_this.datas[index].Name);
                    }
                }
                else if (data.error_code == 3) {
                    _this.rlogin.rLoginProcessWithHistory(_this.navCtrl);
                }
                else {
                    _this.noticeSer.showToast(data.error_message);
                }
            });
        }
    };
    AddressPage.prototype.getHeadName = function (name) {
        return name.substr(0, 1);
    };
    AddressPage.prototype.addOrEdit = function (id) {
        if (id) {
            //修改地址
            this.navCtrl.push('OperateaddressPage', { id: id });
        }
        else {
            //新增地址
            this.navCtrl.push('OperateaddressPage');
        }
    };
    AddressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-address',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\address\address.html"*/'<!--\n\n  Generated template for the AddressPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>我的收货地址</ion-title>\n\n    <div style="float:right;" (tap)="addOrEdit()">\n\n      添加新地址\n\n   </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item *ngFor="let item of datas" (tap)="backWithAdrress($event,item.Id)">\n\n      <ion-avatar item-start>\n\n        <div class="head">\n\n          {{item.headName}}\n\n        </div>\n\n      </ion-avatar>\n\n      <div class="name">\n\n        <h2>{{item.Name}}</h2>\n\n        <p>{{item.Phone}}</p>\n\n      </div>\n\n      <div class="address"><span [ngStyle]="{\'display\':item.IsDefault === 1 ? \'inline\' : \'none\' }">默认</span>&nbsp;<span>{{item.ProvinceName}}</span>&nbsp;<span>{{item.CityName}}</span>&nbsp;<span>{{item.RegionName}}</span>&nbsp;<span>{{item.DetailAddress}}</span></div>\n\n      <ion-avatar item-right>\n\n        <div class="button">\n\n          编辑\n\n        </div>\n\n      </ion-avatar>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\address\address.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_http_services_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_rloginprocess_rloginprocess__["a" /* RloginprocessProvider */]])
    ], AddressPage);
    return AddressPage;
}());

//# sourceMappingURL=address.js.map

/***/ }),
/* 315 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallcenterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_weblink_weblink__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(7);
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
 * Generated class for the CallcenterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CallcenterPage = /** @class */ (function () {
    function CallcenterPage(navCtrl, navParams, webLink, config) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.webLink = webLink;
        this.config = config;
    }
    CallcenterPage.prototype.webUrl = function (title) {
        if (title == 'rule') {
            this.webLink.goWeb(this.config.domain + '/html/sysaticle.html?id=3');
        }
        if (title == 'ensure') {
            this.webLink.goWeb(this.config.domain + '/html/sysaticle.html?id=4');
        }
    };
    CallcenterPage.prototype.dialing = function () {
        window.location.href = 'tel:0571-57183790';
    };
    CallcenterPage.prototype.advice = function () {
    };
    CallcenterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-callcenter',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\callcenter\callcenter.html"*/'<!--\n\n  Generated template for the SettingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>设置</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content style="background: #eeeeee;">\n\n\n\n\n\n  <div class="card-div">\n\n    <div class="card-line" (tap)="webUrl(\'ensure\')">\n\n      <span class="head-span">保障说明</span>\n\n      <ion-icon class="arrows" name="ios-arrow-forward"></ion-icon>\n\n    </div>\n\n    <div class="line-div"></div>\n\n    <div class="card-line" (tap)="webUrl(\'rule\')">\n\n      <span class="head-span">交易规则</span>\n\n      <ion-icon class="arrows" name="ios-arrow-forward"></ion-icon>\n\n    </div>\n\n    <div class="line-div"></div>\n\n    <div class="card-line" (tap)="advice()">\n\n      <span class="head-span">投诉建议</span>\n\n      <ion-icon class="arrows" name="ios-arrow-forward"></ion-icon>\n\n    </div>\n\n    <div class="line-div"></div>\n\n    <div class="card-line" (tap)="dialing()">\n\n      <span class="head-span">客服电话</span>\n\n      <ion-icon class="arrows" name="ios-arrow-forward"></ion-icon>\n\n    </div>\n\n  \n\n  </div>\n\n</ion-content>'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\callcenter\callcenter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_weblink_weblink__["a" /* WeblinkProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */]])
    ], CallcenterPage);
    return CallcenterPage;
}());

//# sourceMappingURL=callcenter.js.map

/***/ }),
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CertificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_services_http_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rloginprocess_rloginprocess__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_config_config__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_wechat_wechat__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__(19);
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
 * Generated class for the CertificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CertificationPage = /** @class */ (function () {
    function CertificationPage(navCtrl, navParams, httpService, storage, noticeSer, rlogin, config, wechat, el, sanitizer, re) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.storage = storage;
        this.noticeSer = noticeSer;
        this.rlogin = rlogin;
        this.config = config;
        this.wechat = wechat;
        this.el = el;
        this.sanitizer = sanitizer;
        this.re = re;
        this.strHTML = '';
        //限制上传
        this.canUpload = true;
        //预览
        this.tempPhoto1 = '';
        this.tempPhoto2 = '';
        this.tempPhoto3 = '';
    }
    CertificationPage.prototype.ionViewWillEnter = function () {
        this.initData();
    };
    CertificationPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        setTimeout(function () {
            _this.bindEvent();
        }, 200);
    };
    CertificationPage.prototype.initData = function () {
        var _this = this;
        var token = this.storage.get('token');
        if (token) {
            var api = 'v1/PersonalCenter/GetCertificationInfo/' + token;
            this.httpService.requestData(api, function (data) {
                if (data.error_code == 0) {
                    var tempData = data.data;
                    if (tempData.IsAuth == 2) {
                        _this.type = 1;
                        _this.tip = "已通过实名认证";
                        _this.name = tempData.TrueName;
                        _this.phoneNum = tempData.Phone;
                        _this.cardNo = tempData.IDCardNo;
                        _this.photoOne = tempData.IDCardPhoto;
                        _this.photoTwo = tempData.IDCardPhoto2;
                        _this.photoThree = tempData.IDCardPhoto3;
                    }
                    else if (tempData.IsAuth == 0) {
                        _this.type = 2;
                        _this.tip = "请填写真实有效信息";
                    }
                    else if (tempData.IsAuth == -1) {
                        _this.type = 2;
                        _this.tip = "认证未通过，请重新填写";
                    }
                    else {
                        _this.type = 1;
                        _this.tip = "审核中，请耐心等待";
                        _this.name = tempData.TrueName;
                        _this.phoneNum = tempData.Phone;
                        _this.cardNo = tempData.IDCardNo;
                        _this.photoOne = tempData.IDCardPhoto;
                        _this.photoTwo = tempData.IDCardPhoto2;
                        _this.photoThree = tempData.IDCardPhoto3;
                    }
                }
                else if (data.error_code == 3) {
                    _this.rlogin.rLoginProcessWithHistory(_this.navCtrl);
                }
                else {
                    _this.noticeSer.showToast(data.error_message);
                }
            });
        }
    };
    CertificationPage.prototype.assembleHTML = function () {
        return this.sanitizer.bypassSecurityTrustHtml(this.strHTML);
    };
    CertificationPage.prototype.upload = function () {
        var _this = this;
        if (this.canUpload) {
            var oFiles = this.el.nativeElement.querySelectorAll(".fileCss");
            var formData = new FormData();
            for (var i = 0, file = void 0; file = oFiles[i]; i++) {
                // 文件名称，文件对象   
                if (file.files[0] == null) {
                    this.noticeSer.showToast('请三张一起上传，谢谢');
                    return;
                }
                formData.append(file.name, file.files[0]);
            }
            //加上token
            var token = this.storage.get('token');
            formData.append('token', token);
            // 实例化一个AJAX对象
            var xhr = new XMLHttpRequest();
            xhr.onload = function (data) {
                if (xhr.readyState === xhr.DONE) {
                    if (xhr.status === 200) {
                        var responseObj = JSON.parse(xhr.responseText);
                        var i = 0;
                        for (var _i = 0, _a = responseObj.data; _i < _a.length; _i++) {
                            var item = _a[_i];
                            if (i == 0) {
                                _this.photoOne = item;
                            }
                            if (i == 1) {
                                _this.photoTwo = item;
                            }
                            if (i == 2) {
                                _this.photoThree = item;
                            }
                            i++;
                        }
                        _this.noticeSer.showToast("已上传，请进行申请");
                        _this.canUpload = false;
                        //上传成功后显示图片
                        _this.strHTML = "<img src='" + _this.config.domain + _this.photoOne + "'/>" +
                            "<img src='" + _this.config.domain + _this.photoTwo + "'/>" +
                            "<img src='" + _this.config.domain + _this.photoThree + "'/>";
                        //隐藏上传
                        _this.hideLabel();
                        //清除预览
                        var tempImg = _this.el.nativeElement.querySelector("#tempImg");
                        _this.re.setStyle(tempImg, 'display', 'none');
                        _this.tempPhoto1 = '';
                        _this.tempPhoto2 = '';
                        _this.tempPhoto3 = '';
                        //展示重新上传按钮
                        var reuploadButton = _this.el.nativeElement.querySelector('.reupload');
                        _this.re.setStyle(reuploadButton, 'display', 'block');
                        var loadButton = _this.el.nativeElement.querySelector('.upload');
                        _this.re.setStyle(loadButton, 'display', 'none');
                        setTimeout(function () {
                            _this.canUpload = true;
                            _this.el.nativeElement.querySelector('#progress').value = 0;
                        }, 10000);
                    }
                }
            };
            xhr.open("POST", this.config.apiUrl + "/v1/upload/batch", true);
            //进度条部分
            xhr.upload.onprogress = function (evt) {
                if (evt.lengthComputable) {
                    var percentComplete = Math.round(evt.loaded * 100 / evt.total);
                    _this.el.nativeElement.querySelector('#progress').value = percentComplete;
                }
            };
            // 发送表单数据
            xhr.send(formData);
        }
        else {
            this.noticeSer.showToast('您刚刚传过一次，请稍后上传');
        }
    };
    CertificationPage.prototype.hideLabel = function () {
        var labels = this.el.nativeElement.querySelectorAll('.btn-upload');
        for (var _i = 0, labels_1 = labels; _i < labels_1.length; _i++) {
            var item = labels_1[_i];
            this.re.setStyle(item, 'display', 'none');
        }
    };
    CertificationPage.prototype.showLabel = function () {
        var labels = this.el.nativeElement.querySelectorAll('.btn-upload');
        for (var _i = 0, labels_2 = labels; _i < labels_2.length; _i++) {
            var item = labels_2[_i];
            this.re.setStyle(item, 'display', 'block');
        }
    };
    CertificationPage.prototype.bindEvent = function () {
        var _this = this;
        var oFiles = this.el.nativeElement.querySelectorAll(".fileCss");
        for (var _i = 0, oFiles_1 = oFiles; _i < oFiles_1.length; _i++) {
            var item = oFiles_1[_i];
            item.onchange = function (e) {
                var tempImg = _this.el.nativeElement.querySelector("#tempImg");
                _this.re.setStyle(tempImg, 'display', 'block');
                console.log(e.target);
                var read = new FileReader();
                read.readAsDataURL(e.target.files[0]);
                read.onload = function () {
                    var url = read.result;
                    if (e.target.id == 'fileOne') {
                        _this.tempPhoto1 = url.toString();
                    }
                    if (e.target.id == 'fileTwo') {
                        _this.tempPhoto2 = url.toString();
                    }
                    if (e.target.id == 'fileThree') {
                        _this.tempPhoto3 = url.toString();
                    }
                };
            };
        }
    };
    CertificationPage.prototype.reupload = function () {
        this.showLabel();
        this.strHTML = '';
        var reuploadButton = this.el.nativeElement.querySelector('.reupload');
        this.re.setStyle(reuploadButton, 'display', 'none');
        var loadButton = this.el.nativeElement.querySelector('.upload');
        this.re.setStyle(loadButton, 'display', 'block');
    };
    CertificationPage.prototype.confirm = function () {
        var _this = this;
        if (!this.name) {
            this.noticeSer.showToast('姓名不可为空');
            return;
        }
        if (!this.phoneNum) {
            this.noticeSer.showToast('手机号不可为空');
            return;
        }
        if (!this.cardNo) {
            this.noticeSer.showToast('身份证号不可为空');
            return;
        }
        if (!this.photoOne) {
            this.noticeSer.showToast('请上传身份证，若已上传请耐心等待');
            return;
        }
        if (!this.photoTwo) {
            this.noticeSer.showToast('请上传身份证，若已上传请耐心等待');
            return;
        }
        if (!this.photoThree) {
            this.noticeSer.showToast('请上传身份证，若已上传请耐心等待');
            return;
        }
        var token = this.storage.get('token');
        var api = 'v1/PersonalCenter/PostCertificationInfo/' + token;
        this.httpService.doPost(api, {
            truename: this.name,
            phone: this.phoneNum,
            idcardno: this.cardNo,
            idcardphoto: this.photoOne,
            idcardphoto2: this.photoTwo,
            idcardphoto3: this.photoThree
        }, function (data) {
            if (data.error_code == 0) {
                _this.noticeSer.showToast('申请已提交，请耐心等待结果');
                _this.navCtrl.pop();
            }
            else if (data.error_code == 3) {
                _this.rlogin.rLoginProcessWithHistory(_this.navCtrl);
            }
            else {
                _this.noticeSer.showToast(data.error_message);
            }
        });
    };
    CertificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-certification',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\certification\certification.html"*/'<!--\n\n  Generated template for the CertificationPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>实名认证</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content style="background: #eeeeee;">\n\n  <ion-list>\n\n    <ion-item>\n\n      <span class="tip">{{tip}}</span>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-list *ngIf="type==2">\n\n    <ion-item>\n\n      <ion-label>姓名：</ion-label>\n\n      <ion-input type="text" [(ngModel)]="name" placeholder="请输入姓名"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>手机号：</ion-label>\n\n      <ion-input type="number" [(ngModel)]="phoneNum" placeholder="请输入手机号"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>身份证号：</ion-label>\n\n      <ion-input type="text" [(ngModel)]="cardNo" placeholder="请输入身份证"></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n\n\n  <ion-list *ngIf="type==1">\n\n    <ion-item>\n\n      <ion-label>姓名：</ion-label>\n\n      <ion-input type="text" [(ngModel)]="name" placeholder="请输入姓名" readonly></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>手机号：</ion-label>\n\n      <ion-input type="number" [(ngModel)]="phoneNum" placeholder="请输入手机号" readonly></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>身份证号：</ion-label>\n\n      <ion-input type="text" [(ngModel)]="cardNo" placeholder="请输入身份证" readonly></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n\n\n  <ion-list>\n\n    <ion-item *ngIf="type==2">\n\n      <span>证件上传</span>\n\n      <button ion-button item-right (tap)="upload()" class="upload" >上传</button>\n\n      <button ion-button item-right (tap)="reupload()" class="reupload">重新上传</button>\n\n    </ion-item>\n\n    <ion-item class="img" *ngIf="type==1">\n\n      <img [src]="config.domain+photoOne">\n\n      <img [src]="config.domain+photoTwo">\n\n      <img [src]="config.domain+photoThree">\n\n\n\n    </ion-item>\n\n    <ion-item class="img" *ngIf="type==2">\n\n      <div [innerHTML]="assembleHTML()"></div>\n\n      <label for="fileOne" class="btn-upload">身份证正面</label>\n\n      <input id="fileOne" class="fileCss" type="file" accept="image/*" name="file" />\n\n      <label for="fileTwo" class="btn-upload">身份证反面</label>\n\n      <input id="fileTwo" class="fileCss" type="file" accept="image/*" name="file" />\n\n      <label for="fileThree" class="btn-upload">手持身份证</label>\n\n      <input id="fileThree" class="fileCss" type="file" accept="image/*" name="file" />\n\n    </ion-item>\n\n\n\n    <ion-item class="img" id="tempImg">\n\n      <img [src]="tempPhoto1">\n\n      <img [src]="tempPhoto2">\n\n      <img [src]="tempPhoto3">\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <progress value="0" max="100" id="progress" style="height: 20px; width: 100%" *ngIf="type==2"></progress>\n\n  <button ion-button block color="danger" class="confirm" (tap)="confirm()" *ngIf="type==2">申请</button>\n\n</ion-content>'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\certification\certification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_http_services_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_rloginprocess_rloginprocess__["a" /* RloginprocessProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_wechat_wechat__["a" /* WechatProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */]])
    ], CertificationPage);
    return CertificationPage;
}());

//# sourceMappingURL=certification.js.map

/***/ }),
/* 325 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
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
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CommentPage = /** @class */ (function () {
    function CommentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CommentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CommentPage');
    };
    CommentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-comment',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\comment\comment.html"*/'<!--\n\n  Generated template for the CommentPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>评价</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\comment\comment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], CommentPage);
    return CommentPage;
}());

//# sourceMappingURL=comment.js.map

/***/ }),
/* 326 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommercialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_config_config__ = __webpack_require__(7);
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
 * Generated class for the CommercialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CommercialPage = /** @class */ (function () {
    function CommercialPage(navCtrl, navParams, storage, httpService, toast, config, toastCtrl, alertCtrl, re, el) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.httpService = httpService;
        this.toast = toast;
        this.config = config;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.re = re;
        this.el = el;
        this.commercialData = '';
        this.page = 0;
        this.pageNum = 3;
        this.type = '1';
        this.typeData = '';
        this.temp = [];
        this.enable = true;
        if (this.navParams.get('type')) {
            this.type = this.navParams.get('type');
        }
        this.getHomePage();
    }
    CommercialPage.prototype.changeCss = function (attrOne, attrs) {
        for (var index = 0; index < attrs.length; index++) {
            this.re.setStyle(attrs[index], 'color', 'rgb(0, 0, 0)');
            this.re.setStyle(attrs[index], 'text-decoration', 'none');
            this.re.setStyle(attrs[index], 'margin-top', '0');
            this.re.setStyle(attrs[index], 'border-bottom', '0');
            this.re.setStyle(attrs[index], 'cursor ', 'auto');
        }
        this.re.setStyle(attrOne, 'color', 'rgb(98, 145, 233)');
        this.re.setStyle(attrOne, 'text-decoration', 'underline');
        this.re.setStyle(attrOne, 'margin-top', '-0.5rem');
        this.re.setStyle(attrOne, 'border-bottom', '1px solid rgb(98, 145, 233)');
        this.re.setStyle(attrOne, 'cursor ', 'pointer');
    };
    CommercialPage.prototype.bindEvent = function (attrDom) {
        var _this = this;
        attrDom[0].onclick = function () {
            if (_this.type == '1') {
                return;
            }
            _this.type = '1';
            _this.changeCss(attrDom[0], attrDom);
            _this.initData();
        };
        attrDom[1].onclick = function () {
            if (_this.type == '2') {
                return;
            }
            _this.type = '2';
            _this.changeCss(attrDom[1], attrDom);
            _this.initData();
        };
        attrDom[2].onclick = function () {
            if (_this.type == '3') {
                return;
            }
            _this.type = '3';
            _this.changeCss(attrDom[2], attrDom);
            _this.initData();
        };
    };
    CommercialPage.prototype.initData = function () {
        //刚进入该页或者点击时页数置0
        this.page = 0;
        this.getData();
        //刚进入该页或者点击时上拉加载置为可以
        this.enable = true;
        //从未下拉加载过就不执行
        if (this.infiniteScroll) {
            this.infiniteScroll.enable(this.enable);
        }
        //数据清空
        this.temp = [];
    };
    CommercialPage.prototype.ionViewDidLoad = function () {
        //初始化数据后改变点击按钮颜色
        var attrDom = this.el.nativeElement.querySelectorAll('.col-demo');
        this.changeCss(attrDom[0], attrDom);
        this.bindEvent(attrDom);
        this.initData();
    };
    //进入课程详情
    CommercialPage.prototype.pushDetail = function (curId) {
        this.navCtrl.push('CommercialdetailPage', {
            curId: curId,
        });
    };
    CommercialPage.prototype.getHomePage = function () {
        var _this = this;
        var api = 'v2/commercialcollege/homepage';
        this.httpService.requestData(api, function (data) {
            //console.log(data);
            if (data.error_code == 0) {
                _this.commercialData = data.data;
                //console.log(this.commercialData);
            }
            else {
                _this.toast.showToast(data.error_message);
            }
        });
    };
    CommercialPage.prototype.getData = function () {
        var _this = this;
        var apis = 'v2/commercialcollege/coursesbytype?' + 'type=' + this.type + '&page=' + this.page + '&pageNum=' + this.pageNum;
        this.httpService.requestData(apis, function (res) {
            if (res.error_code == 0) {
                _this.typeData = res.data;
                for (var i = 0; i < res.data.length; i++) {
                    _this.temp.push(res.data[i]);
                }
                if (res.data.length < _this.pageNum) {
                    //没有更多数据了
                    _this.enable = false;
                }
                _this.page++;
            }
            else {
                _this.toast.showToast('数据获取异常');
            }
        });
    };
    //上拉加载数据
    CommercialPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        setTimeout(function () {
            _this.getData();
            infiniteScroll.complete();
            infiniteScroll.enable(_this.enable);
            //把下拉事件提出来
            _this.infiniteScroll = infiniteScroll;
        }, 1000);
    };
    //下拉刷新界面
    CommercialPage.prototype.doRefresh = function ($event) {
        var _this = this;
        this.getHomePage();
        this.initData();
        setTimeout(function () {
            $event.complete();
            _this.toast.showToast('加载成功');
        }, 1000);
    };
    CommercialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-commercial',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\commercial\commercial.html"*/'<!--\n\n  Generated template for the CommercialPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>商学院</ion-title>\n\n  </ion-navbar>\n\n  <div class="img">\n\n      <img style="width:100%; height:200px;"   [src]="config.domain+commercialData.commercialCollegePic" />\n\n  </div>\n\n  <div class="fix_header">\n\n      <div class="row" id="sub_header">\n\n          <div class="col-demo" >热门推荐</div>\n\n          <div class="col-demo" >众健科技</div>\n\n          <div class="col-demo" >金牌教师</div>\n\n      </div>\n\n  </div>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <ion-list>\n\n        <ion-item  *ngFor="let item of typeData" (tap)="pushDetail(item.id)">\n\n\n\n            <ion-avatar item-start  class="itemImg">\n\n                <img [src]="config.domain+item.coursePhotos[0].photo">\n\n              </ion-avatar>\n\n            <div class="title-font"><h3>{{item.coursename}}</h3><p>{{item.coursebrief}}</p></div>\n\n       </ion-item>\n\n       </ion-list>\n\n       <!-- <div>的</div> -->\n\n      <!-- 下拉刷新 -->\n\n    <ion-refresher (ionRefresh)="doRefresh($event)" threshold="50px">\n\n     <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="下拉刷新" refreshingSpinner="circles" refreshingText="刷新...">\n\n        </ion-refresher-content>\n\n        <ion-refresher-content>\n\n        </ion-refresher-content>\n\n    </ion-refresher> \n\n    <!--上滑的时候，加载数据-->\n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)" thr>\n\n        <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="加载中...">\n\n        </ion-infinite-scroll-content>\n\n    </ion-infinite-scroll>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\commercial\commercial.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], CommercialPage);
    return CommercialPage;
}());

//# sourceMappingURL=commercial.js.map

/***/ }),
/* 327 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommercialdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_config_config__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(19);
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
 * Generated class for the CommercialdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CommercialdetailPage = /** @class */ (function () {
    function CommercialdetailPage(navCtrl, navParams, storage, httpService, toast, config, toastCtrl, alertCtrl, sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.httpService = httpService;
        this.toast = toast;
        this.config = config;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.sanitizer = sanitizer;
        this.tempData = '';
        this.detailPage = '';
        this.curId = this.navParams.get('curId');
        console.log(this.curId);
    }
    CommercialdetailPage.prototype.assembleHTML = function (strHTML) {
        return this.sanitizer.bypassSecurityTrustHtml(strHTML);
    };
    CommercialdetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CommercialdetailPage');
    };
    CommercialdetailPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        //课程详细主页
        var apis = 'v2/commercialcollege/coursedetailmain?' + 'courseid=' + this.curId;
        this.httpService.requestData(apis, function (data) {
            if (data.error_code == 0) {
                _this.detailPage = data.data;
            }
            else {
                _this.toast.showToast('数据获取异常');
            }
        });
        //课程图文详情
        var api = 'v2/commercialcollege/coursehtmltext?' + 'courseid=' + this.curId;
        this.httpService.requestData(api, function (data) {
            if (data.error_code == 0) {
                _this.tempData = data.data;
            }
            else {
                _this.toast.showToast('数据获取异常');
            }
        });
    };
    //课程详情页
    CommercialdetailPage.prototype.pushDetail = function (curId) {
        this.navCtrl.push('TitlePage', {
            curId: curId
        });
    };
    CommercialdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-commercialdetail',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\commercialdetail\commercialdetail.html"*/'<!--\n\n  Generated template for the CommercialdetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>课程详情</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n        <div class="img" *ngFor="let item of detailPage.coursePhotos">\n\n            <img [src]="config.domain+item.photo" />\n\n        </div>\n\n        <div class="fix_header">\n\n            <div class="row" id="sub_header">\n\n                <div class="col-demo" >{{detailPage.coursename}}</div>\n\n            </div>\n\n            <div class="transition">\n\n              </div>\n\n            <div class="row" id="sub_header">\n\n                <div class="col-demo-div" style="color:#999797">开课时间：{{detailPage.coursestarttime}}<br />\n\n                                      开课地点：{{detailPage.coursesite}}\n\n              </div>\n\n            </div>\n\n            <div class="transition">\n\n              </div>\n\n        </div>\n\n        <div> \n\n         <p>简介</p>\n\n         <p *ngIf="detailPage.coursetype==3" (tap)="pushDetail(detailPage.id)" style="color:#999797;">{{detailPage.coursename}}</p>\n\n         <div [innerHTML]="assembleHTML(tempData)">\n\n         </div>\n\n        \n\n        </div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\commercialdetail\commercialdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["c" /* DomSanitizer */]])
    ], CommercialdetailPage);
    return CommercialdetailPage;
}());

//# sourceMappingURL=commercialdetail.js.map

/***/ }),
/* 328 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmOrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rloginprocess_rloginprocess__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_alert_alert__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_toast_toast__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_verifypassword_verifypassword__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_weblink_weblink__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
///<reference path="../../services/jquery.d.ts"/>










var ConfirmOrderPage = /** @class */ (function () {
    function ConfirmOrderPage(weblink, passwordProvider, toast, alert, navCtrl, navParams, event, config, httpservice, storage, rlogin) {
        var _this = this;
        this.weblink = weblink;
        this.passwordProvider = passwordProvider;
        this.toast = toast;
        this.alert = alert;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.event = event;
        this.config = config;
        this.httpservice = httpservice;
        this.storage = storage;
        this.rlogin = rlogin;
        this.deduRedback = 0;
        this.dedubuy = 0;
        this.deduCash = 0;
        this.redBak = false;
        this.buy = false;
        this.cash = false;
        this.isup = false;
        this.productArray = [];
        this.maxCoupon = 0;
        this.allAmount = 0;
        this.realpay = 0;
        this.isTwoAddress = false;
        this.memo = '';
        this.addressId = '';
        this.action = function (msg) {
            _this.isTwoAddress = true;
            return new Promise(function (resolve, reject) {
                if (msg != undefined) {
                    _this.getUserAddress(msg);
                    resolve('ok');
                }
                else {
                    reject(Error('error'));
                }
            });
        };
        this.productArray = this.navParams.get("product");
        /**处理商品名 */
        for (var z = 0; z < this.productArray.length; z++) {
            this.productname = this.productArray[z].productname;
            if (this.productname.length >= 15) {
                this.productArray[z].productname = this.productname.substr(0, 8) + "..." + this.productname.substr(this.productname.length - 5, 5);
            }
        }
        /**总价 */
        for (var i = 0; i < this.productArray.length; i++) {
            this.allAmount = this.allAmount + this.productArray[i].buynum * this.productArray[i].specPrice;
        }
        this.realpay = this.allAmount;
        /**可使用红包数 */
        for (var j = 0; j < this.productArray.length; j++) {
            this.maxCoupon = this.maxCoupon + (this.productArray[j].specElec / 2) * this.productArray[j].buynum;
        }
    }
    ConfirmOrderPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.token = this.storage.get("token");
        var api = "v1/PersonalCenter/GetPersonalAccountBalance/" + this.token;
        this.httpservice.requestData(api, function (data) {
            if (data.error_code == 3) {
                _this.rlogin.rLoginProcessWithHistory(_this.navCtrl);
            }
            else {
                _this.res = {
                    "redBak": data.data.personDataMap.Coupon,
                    "buy": data.data.personDataMap.RemainPoints,
                    "cash": data.data.personDataMap.RemainElecNum
                };
                _this.remainCoupon = _this.res.redBak;
                _this.remainPay = _this.res.buy;
                _this.remainCash = _this.res.cash;
                if (!_this.isTwoAddress) {
                    _this.getDefaultAddress();
                }
            }
        });
    };
    /**获取用户默认地址 */
    ConfirmOrderPage.prototype.getDefaultAddress = function () {
        var _this = this;
        var api = "v1/AddressManager/getDefaultAddressOfUser";
        var params = {
            "token": this.token
        };
        this.httpservice.doFormPost(api, params, function (data) {
            if (data.error_code == 0) {
                _this.addressId = data.data.Id;
                _this.addressName = data.data.Name;
                _this.addressPhone = data.data.Phone;
                _this.address = data.data.ProvinceName + data.data.CityName + data.data.RegionName;
                _this.addressDetail = data.data.DetailAddress;
            }
            else if (data.error_code == -1) {
                _this.addressName = "未设置默认地址";
            }
        });
    };
    /**回调获取用户地址 */
    ConfirmOrderPage.prototype.getUserAddress = function (addressId) {
        var _this = this;
        var api = "v1/AddressManager/getAddressOfUserById/" + this.token + '/' + addressId;
        this.httpservice.requestData(api, function (data) {
            if (data.error_code == 0) {
                _this.addressId = addressId;
                _this.addressName = data.data.Name;
                _this.addressPhone = data.data.Phone;
                _this.address = data.data.ProvinceName + data.data.CityName + data.data.RegionName;
                _this.addressDetail = data.data.DetailAddress;
            }
            else if (data.error_code == 3) {
                _this.rlogin.rLoginProcessWithHistory(_this.navCtrl);
            }
            else {
                _this.toast.showToast(data.error_message);
            }
        });
    };
    /**选择地址 */
    ConfirmOrderPage.prototype.toAddress = function () {
        this.navCtrl.push("AddressPage", { 'action': this.action });
    };
    ConfirmOrderPage.prototype.ionViewDidLoad = function () {
    };
    /**监听键盘弹出，收起 ios*/
    ConfirmOrderPage.prototype.blurInput = function () {
        this.isup = false;
    };
    ConfirmOrderPage.prototype.focusInput = function () {
        this.isup = true;
    };
    /**处理减法精度丢失 */
    ConfirmOrderPage.prototype.subDouble = function (f, s, digit) {
        var m = Math.pow(10, digit);
        return Math.round((f * m - s * m)) / m;
    };
    /**处理三个数减法精度丢失 */
    ConfirmOrderPage.prototype.subDouble3 = function (f, s, t, digit) {
        var m = Math.pow(10, digit);
        var middle = Math.round((f * m - s * m)) / m;
        return Math.round((middle * m - t * m)) / m;
    };
    /**处理四个数减法精度丢失 */
    ConfirmOrderPage.prototype.subDouble4 = function (f, s, t, fouth, digit) {
        var m = Math.pow(10, digit);
        var middle = Math.round((f * m - s * m)) / m;
        var middle1 = Math.round((middle * m - t * m)) / m;
        return Math.round((middle1 * m - fouth * m)) / m;
    };
    /**监听币值切换 */
    ConfirmOrderPage.prototype.clickcash = function () {
        if (this.redBak == true && this.buy == true && this.cash == true) {
            this.deduRedback = this.res.redBak >= this.maxCoupon ? this.maxCoupon : this.res.redBak;
            this.dedubuy = this.subDouble(this.allAmount, this.deduRedback, 2) >= this.res.buy ? this.res.buy : this.subDouble(this.allAmount, this.deduRedback, 2);
            this.deduCash = 0;
            this.realpay = this.subDouble4(this.allAmount, this.deduRedback, this.dedubuy, this.deduCash, 2);
        }
        else if (this.redBak == true && this.buy == false && this.cash == true) {
            this.deduRedback = this.res.redBak >= this.maxCoupon ? this.maxCoupon : this.res.redBak;
            this.dedubuy = 0;
            this.deduCash = 0;
            this.realpay = this.subDouble4(this.allAmount, this.deduRedback, this.dedubuy, this.deduCash, 2);
        }
        else if (this.redBak == true && this.buy == true && this.cash == false) {
            this.deduRedback = this.res.redBak >= this.maxCoupon ? this.maxCoupon : this.res.redBak;
            this.dedubuy = this.subDouble(this.allAmount, this.deduRedback, 2) >= this.res.buy ? this.res.buy : this.subDouble(this.allAmount, this.deduRedback, 2);
            this.deduCash = this.subDouble3(this.allAmount, this.deduRedback, this.dedubuy, 2) >= this.res.cash ? this.res.cash : this.subDouble3(this.allAmount, this.deduRedback, this.dedubuy, 2);
            this.realpay = this.subDouble4(this.allAmount, this.deduRedback, this.dedubuy, this.deduCash, 2);
        }
        else if (this.redBak == true && this.buy == false && this.cash == false) {
            this.deduRedback = this.res.redBak >= this.maxCoupon ? this.maxCoupon : this.res.redBak;
            this.dedubuy = 0;
            this.deduCash = this.subDouble3(this.allAmount, this.deduRedback, this.dedubuy, 2) >= this.res.cash ? this.res.cash : this.subDouble3(this.allAmount, this.deduRedback, this.dedubuy, 2);
            this.realpay = this.subDouble4(this.allAmount, this.deduRedback, this.dedubuy, this.deduCash, 2);
        }
        else if (this.redBak == false && this.buy == false && this.cash == false) {
            this.deduRedback = 0;
            this.dedubuy = 0;
            this.deduCash = this.subDouble3(this.allAmount, this.deduRedback, this.dedubuy, 2) >= this.res.cash ? this.res.cash : this.subDouble3(this.allAmount, this.deduRedback, this.dedubuy, 2);
            this.realpay = this.subDouble4(this.allAmount, this.deduRedback, this.dedubuy, this.deduCash, 2);
        }
        else if (this.redBak == false && this.buy == false && this.cash == true) {
            this.deduRedback = 0;
            this.dedubuy = 0;
            this.deduCash = 0;
            this.realpay = this.subDouble4(this.allAmount, this.deduRedback, this.dedubuy, this.deduCash, 2);
        }
        else if (this.redBak == false && this.buy == true && this.cash == false) {
            this.deduRedback = 0;
            this.dedubuy = this.subDouble(this.allAmount, this.deduRedback, 2) >= this.res.buy ? this.res.buy : this.subDouble(this.allAmount, this.deduRedback, 2);
            this.deduCash = this.subDouble3(this.allAmount, this.deduRedback, this.dedubuy, 2) >= this.res.cash ? this.res.cash : this.subDouble3(this.allAmount, this.deduRedback, this.dedubuy, 2);
            this.realpay = this.subDouble4(this.allAmount, this.deduRedback, this.dedubuy, this.deduCash, 2);
        }
        else {
            this.deduRedback = 0;
            this.dedubuy = this.allAmount - this.deduRedback >= this.res.buy ? this.res.buy : this.allAmount - this.deduRedback;
            this.deduCash = 0;
            this.realpay = this.subDouble4(this.allAmount, this.deduRedback, this.dedubuy, this.deduCash, 2);
        }
    };
    ConfirmOrderPage.prototype.clickred = function () {
        if (this.redBak == true && this.buy == true && this.cash == true) {
            this.deduRedback = 0;
            this.dedubuy = this.subDouble(this.allAmount, this.deduRedback, 2) >= this.res.buy ? this.res.buy : this.subDouble(this.allAmount, this.deduRedback, 2);
            this.deduCash = this.subDouble3(this.allAmount, this.deduRedback, this.dedubuy, 2) >= this.res.cash ? this.res.cash : this.subDouble3(this.allAmount, this.deduRedback, this.dedubuy, 2);
            this.realpay = this.subDouble4(this.allAmount, this.deduRedback, this.dedubuy, this.deduCash, 2);
        }
        else if (this.redBak == true && this.buy == false && this.cash == true) {
            this.deduRedback = 0;
            this.dedubuy = 0;
            this.deduCash = this.subDouble3(this.allAmount, this.deduRedback, this.dedubuy, 2) >= this.res.cash ? this.res.cash : this.subDouble3(this.allAmount, this.deduRedback, this.dedubuy, 2);
            this.realpay = this.subDouble4(this.allAmount, this.deduRedback, this.dedubuy, this.deduCash, 2);
        }
        else if (this.redBak == true && this.buy == true && this.cash == false) {
            this.deduRedback = 0;
            this.dedubuy = this.subDouble(this.allAmount, this.deduRedback, 2) >= this.res.buy ? this.res.buy : this.subDouble(this.allAmount, this.deduRedback, 2);
            this.deduCash = 0;
            this.realpay = this.subDouble4(this.allAmount, this.deduRedback, this.dedubuy, this.deduCash, 2);
        }
        else if (this.redBak == true && this.buy == false && this.cash == false) {
            this.deduRedback = 0;
            this.dedubuy = 0;
            this.deduCash = 0;
            this.realpay = this.subDouble4(this.allAmount, this.deduRedback, this.dedubuy, this.deduCash, 2);
        }
        else if (this.redBak == false && this.buy == false && this.cash == false) {
            this.deduRedback = this.res.redBak >= this.maxCoupon ? this.maxCoupon : this.res.redBak;
            this.dedubuy = 0;
            this.deduCash = 0;
            this.realpay = this.subDouble4(this.allAmount, this.deduRedback, this.dedubuy, this.deduCash, 2);
        }
        else if (this.redBak == false && this.buy == false && this.cash == true) {
            this.deduRedback = this.res.redBak >= this.maxCoupon ? this.maxCoupon : this.res.redBak;
            this.dedubuy = 0;
            this.deduCash = this.subDouble3(this.allAmount, this.deduRedback, this.dedubuy, 2) >= this.res.cash ? this.res.cash : this.subDouble3(this.allAmount, this.deduRedback, this.dedubuy, 2);
            this.realpay = this.subDouble4(this.allAmount, this.deduRedback, this.dedubuy, this.deduCash, 2);
        }
        else if (this.redBak == false && this.buy == true && this.cash == false) {
            this.deduRedback = this.res.redBak >= this.maxCoupon ? this.maxCoupon : this.res.redBak;
            this.dedubuy = this.subDouble(this.allAmount, this.deduRedback, 2) >= this.res.buy ? this.res.buy : this.subDouble(this.allAmount, this.deduRedback, 2);
            this.deduCash = 0;
            this.realpay = this.subDouble4(this.allAmount, this.deduRedback, this.dedubuy, this.deduCash, 2);
        }
        else {
            this.deduRedback = this.res.redBak >= this.maxCoupon ? this.maxCoupon : this.res.redBak;
            this.dedubuy = this.subDouble(this.allAmount, this.deduRedback, 2) >= this.res.buy ? this.res.buy : this.subDouble(this.allAmount, this.deduRedback, 2);
            this.deduCash = this.subDouble3(this.allAmount, this.deduRedback, this.dedubuy, 2) >= this.res.cash ? this.res.cash : this.subDouble3(this.allAmount, this.deduRedback, this.dedubuy, 2);
            this.realpay = this.subDouble4(this.allAmount, this.deduRedback, this.dedubuy, this.deduCash, 2);
        }
    };
    ConfirmOrderPage.prototype.clickbuy = function () {
        if (this.redBak == true && this.buy == true && this.cash == true) {
            this.deduRedback = this.res.redBak >= this.maxCoupon ? this.maxCoupon : this.res.redBak;
            this.dedubuy = 0;
            this.deduCash = this.subDouble3(this.allAmount, this.deduRedback, this.dedubuy, 2) >= this.res.cash ? this.res.cash : this.subDouble3(this.allAmount, this.deduRedback, this.dedubuy, 2);
            this.realpay = this.subDouble4(this.allAmount, this.deduRedback, this.dedubuy, this.deduCash, 2);
        }
        else if (this.redBak == true && this.buy == false && this.cash == true) {
            this.deduRedback = this.res.redBak >= this.maxCoupon ? this.maxCoupon : this.res.redBak;
            this.dedubuy = this.subDouble(this.allAmount, this.deduRedback, 2) >= this.res.buy ? this.res.buy : this.subDouble(this.allAmount, this.deduRedback, 2);
            this.deduCash = this.subDouble3(this.allAmount, this.deduRedback, this.dedubuy, 2) >= this.res.cash ? this.res.cash : this.subDouble3(this.allAmount, this.deduRedback, this.dedubuy, 2);
            this.realpay = this.subDouble4(this.allAmount, this.deduRedback, this.dedubuy, this.deduCash, 2);
        }
        else if (this.redBak == true && this.buy == true && this.cash == false) {
            this.deduRedback = this.res.redBak >= this.maxCoupon ? this.maxCoupon : this.res.redBak;
            this.dedubuy = 0;
            this.deduCash = 0;
            this.realpay = this.subDouble4(this.allAmount, this.deduRedback, this.dedubuy, this.deduCash, 2);
        }
        else if (this.redBak == true && this.buy == false && this.cash == false) {
            this.deduRedback = this.res.redBak >= this.maxCoupon ? this.maxCoupon : this.res.redBak;
            this.dedubuy = this.subDouble(this.allAmount, this.deduRedback, 2) >= this.res.buy ? this.res.buy : this.subDouble(this.allAmount, this.deduRedback, 2);
            this.deduCash = 0;
            this.realpay = this.subDouble4(this.allAmount, this.deduRedback, this.dedubuy, this.deduCash, 2);
        }
        else if (this.redBak == false && this.buy == false && this.cash == false) {
            this.deduRedback = 0;
            this.dedubuy = this.subDouble(this.allAmount, this.deduRedback, 2) >= this.res.buy ? this.res.buy : this.subDouble(this.allAmount, this.deduRedback, 2);
            this.deduCash = 0;
            this.realpay = this.subDouble4(this.allAmount, this.deduRedback, this.dedubuy, this.deduCash, 2);
        }
        else if (this.redBak == false && this.buy == false && this.cash == true) {
            this.deduRedback = 0;
            this.dedubuy = this.allAmount - this.deduRedback >= this.res.buy ? this.res.buy : this.allAmount - this.deduRedback;
            this.deduCash = this.subDouble3(this.allAmount, this.deduRedback, this.dedubuy, 2) >= this.res.cash ? this.res.cash : this.subDouble3(this.allAmount, this.deduRedback, this.dedubuy, 2);
            this.realpay = this.subDouble4(this.allAmount, this.deduRedback, this.dedubuy, this.deduCash, 2);
        }
        else if (this.redBak == false && this.buy == true && this.cash == false) {
            this.deduRedback = 0;
            this.dedubuy = 0;
            this.deduCash = 0;
            this.realpay = this.subDouble4(this.allAmount, this.deduRedback, this.dedubuy, this.deduCash, 2);
        }
        else {
            this.deduRedback = 0;
            this.dedubuy = 0;
            this.deduCash = this.subDouble3(this.allAmount, this.deduRedback, this.dedubuy, 2) >= this.res.cash ? this.res.cash : this.subDouble3(this.allAmount, this.deduRedback, this.dedubuy, 2);
            this.realpay = this.subDouble4(this.allAmount, this.deduRedback, this.dedubuy, this.deduCash, 2);
        }
    };
    ConfirmOrderPage.prototype.goBuy = function () {
        var _this = this;
        var orderHeads = new Array();
        var productList = new Array();
        for (var i = 0; i < this.productArray.length; i++) {
            if (i == 0) {
                var _data = {
                    "producerno": this.productArray[i].producerno,
                    "list": [i]
                };
                orderHeads.push(_data);
            }
            else {
                for (var z = 0; z < orderHeads.length; z++) {
                    if (orderHeads[z].producerno == this.productArray[i].producerno) {
                        orderHeads[z].list.push(i);
                        break;
                    }
                    else if (orderHeads[z].producerno != this.productArray[i].producerno && z == orderHeads.length - 1) {
                        var _data1 = {
                            "producerno": this.productArray[i].producerno,
                            "list": [i]
                        };
                        orderHeads.push(_data1);
                        break;
                    }
                }
            }
        }
        for (var j = 0; j < orderHeads.length; j++) {
            var numlist = orderHeads[j].list;
            var orderLines = [];
            var payList = [];
            var totalAmount = 0;
            var maxCoupon = 0;
            for (var w = 0; w < numlist.length; w++) {
                orderLines.push({
                    "productId": this.productArray[numlist[w]].id,
                    "productNum": this.productArray[numlist[w]].buynum,
                    "specId": this.productArray[numlist[w]].specId
                });
                payList.push({
                    "totalAmount": this.productArray[numlist[w]].buynum * this.productArray[numlist[w]].specPrice,
                    "maxCoupon": this.productArray[numlist[w]].buynum * this.productArray[numlist[w]].specElec / 2,
                });
            }
            for (var o = 0; o < payList.length; o++) {
                totalAmount += payList[o].totalAmount;
                maxCoupon += payList[o].maxCoupon;
            }
            var useCoupon = this.deduRedback >= maxCoupon ? maxCoupon : this.deduRedback;
            var usePointNum = this.subDouble(totalAmount, useCoupon, 2) >= this.dedubuy ? this.dedubuy : this.subDouble(totalAmount, useCoupon, 2);
            var useElecNum = this.subDouble3(totalAmount, useCoupon, usePointNum, 2) >= this.deduCash ? this.deduCash : this.subDouble3(totalAmount, useCoupon, usePointNum, 2);
            var realpay = this.subDouble4(totalAmount, useCoupon, usePointNum, useElecNum, 2);
            productList.push({
                "freight": 0,
                "memo": this.memo,
                "orderLines": orderLines,
                "producername": this.productArray[numlist[0]].producername,
                "producerno": this.productArray[numlist[0]].producerno,
                "producertel": this.productArray[numlist[0]].producertel,
                "realPay": realpay,
                "totalAmount": totalAmount,
                "useCoupon": useCoupon,
                "useElecNum": useElecNum,
                "usePointNum": usePointNum,
                "useVIPRemainNum": 0
            });
        }
        var params = {
            "adrressId": this.addressId,
            "orderHeads": productList
        };
        var api = "v2/PersonalCenter/createBOrder/" + this.token;
        this.httpservice.doPost(api, params, function (data) {
            if (data.error_code == 0) {
                if (data.data.type == 1) {
                    _this.passwordProvider.execute(_this.navCtrl, function () {
                        var api = "v1/PersonalCenter/syncHandleOrderC/" + _this.token;
                        var params = {
                            "orderNoC": data.data.datas
                        };
                        _this.httpservice.doFormPost(api, params, function (data) {
                            if (data.error_code == 0) {
                                _this.navCtrl.push('PaysuccessPage', {
                                    "orderType": "1"
                                });
                            }
                            else {
                                _this.toast.showToast(data.error_message);
                            }
                        });
                    });
                }
                else if (data.data.type == 2) {
                    _this.weblink.wxGoWebPay(_this.token, data.data.datas.orderNoC, data.data.datas.realpay, data.data.datas.orderType);
                }
                else if (data.data.type == 3) {
                    _this.passwordProvider.execute(_this.navCtrl, function () {
                        _this.navCtrl.push('PaymentPage', {
                            "orderNo": data.data.datas.orderNoC,
                            "realpay": data.data.datas.realpay,
                            "orderType": data.data.datas.orderType
                        });
                    });
                }
            }
            else {
                _this.toast.showToast(data.error_message);
            }
        });
    };
    ConfirmOrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirm-order',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\confirm-order\confirm-order.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>确认订单</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="allcontent" (onresize)="test()">\n\n  <div class="taddress" tappable (click)="toAddress()">\n\n      <ion-icon ios="ios-pin-outline" md="ios-pin-outline" class="addressicon"></ion-icon>\n\n      <div class="tcontent">\n\n          <div class="tjian">\n\n              <ion-icon ios="ios-arrow-dropright" md="md-arrow-dropright"></ion-icon>\n\n          </div>\n\n        <p class="tname">{{addressName}}</p>\n\n        <p class="tphone">{{addressPhone}}</p>\n\n        <p class="tadd">{{address}}</p>\n\n        <p class="tadddetail">{{addressDetail}}</p>\n\n      </div>\n\n  </div>\n\n  <div class="tproduct">\n\n    <ion-list style="margin: 0" *ngFor = "let item of productArray">\n\n      <ion-item style="border-top: none">\n\n            <ion-thumbnail  item-left>\n\n              <img [src]="config.domain+item.productphotos[0].photo"/>            \n\n            </ion-thumbnail>\n\n            <h2 style="font-size: 1.5rem">{{item.productname}}</h2>\n\n            <p style="margin-bottom: 0.3rem;">规格：{{item.specName}}</p>\n\n            <h2 style="display: inline;color: red">¥{{item.specPrice}}</h2>\n\n            <p style="float: right;margin-right: 2rem">\n\n              <ion-icon ios="ios-close" md="md-close"></ion-icon><em style="font-size: 1.7rem">{{item.buynum}}</em>\n\n            </p>\n\n      </ion-item>\n\n    </ion-list>\n\n    <ion-list style="margin: 0">\n\n      <ion-item>\n\n          <p style="float:left;">邮费</p>\n\n          <p style="float: right;">包邮</p>\n\n      </ion-item>\n\n      <ion-item>\n\n          <ion-input style="font-size: 1.4rem" placeholder="买家留言" (ionBlur)="blurInput()" (ionFocus)="focusInput()" [(ngModel)]="memo">\n\n\n\n          </ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n  <div style="border-bottom: 8px solid #e3e3e3">\n\n    <ion-list style="margin: 0">\n\n      <ion-item>\n\n          <ion-label style="font-size: 1.4rem">可用现金红包{{remainCoupon}}</ion-label>\n\n          <ion-toggle [(ngModel)]="redBak" (tap)="clickred()"></ion-toggle>\n\n      </ion-item>\n\n      <ion-item>\n\n          <ion-label style="font-size: 1.4rem">可用购物币{{remainPay}}</ion-label>\n\n          <ion-toggle [(ngModel)]="buy" (tap)="clickbuy()"></ion-toggle>\n\n      </ion-item>\n\n      <ion-item>\n\n          <ion-label style="font-size: 1.4rem">可用现金币{{remainCash}}</ion-label>\n\n          <ion-toggle [(ngModel)]="cash" (tap)="clickcash()"></ion-toggle>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n  <div>\n\n    <div class="tsettle">\n\n        <p >总金额</p><p>¥{{allAmount}}</p>\n\n    </div>\n\n    <div class="tsettle">\n\n        <p>现金红包抵扣</p><p>-¥{{deduRedback}}</p>\n\n    </div>\n\n    <div class="tsettle">\n\n        <p>购物币抵扣</p><p>-¥{{dedubuy}}</p>\n\n    </div>\n\n    <div class="tsettle">\n\n        <p>现金币抵扣</p><p>-¥{{deduCash}}</p>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n<div class="tfloot" [ngStyle]="{\'display\':isup == true ? \'none\' : \'\' }">\n\n  <div class="tleft">\n\n    <em>合计：</em><p>¥{{realpay}}元</p>\n\n  </div>\n\n  <button class="buy" ion-button (tap)="goBuy()">提交订单</button>\n\n</div>\n\n'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\confirm-order\confirm-order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__providers_weblink_weblink__["a" /* WeblinkProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_verifypassword_verifypassword__["a" /* VerifypasswordProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_toast_toast__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_alert_alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_rloginprocess_rloginprocess__["a" /* RloginprocessProvider */]])
    ], ConfirmOrderPage);
    return ConfirmOrderPage;
}());

//# sourceMappingURL=confirm-order.js.map

/***/ }),
/* 329 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmVipOrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rloginprocess_rloginprocess__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_alert_alert__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_toast_toast__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_verifypassword_verifypassword__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_weblink_weblink__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
///<reference path="../../services/jquery.d.ts"/>










var ConfirmVipOrderPage = /** @class */ (function () {
    function ConfirmVipOrderPage(weblink, passwordProvider, toast, alert, navCtrl, navParams, event, config, httpservice, storage, rlogin) {
        var _this = this;
        this.weblink = weblink;
        this.passwordProvider = passwordProvider;
        this.toast = toast;
        this.alert = alert;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.event = event;
        this.config = config;
        this.httpservice = httpservice;
        this.storage = storage;
        this.rlogin = rlogin;
        this.deduRedback = 0;
        this.dedubuy = 0;
        this.deduCash = 0;
        this.deduVip = 0;
        this.redBak = false;
        this.buy = false;
        this.cash = false;
        this.vip = false;
        this.isup = false;
        this.productArray = [];
        this.maxCoupon = 0;
        this.allAmount = 0;
        this.realpay = 0;
        this.isTwoAddress = false;
        this.memo = '';
        this.addressId = '';
        this.action = function (msg) {
            _this.isTwoAddress = true;
            return new Promise(function (resolve, reject) {
                if (msg != undefined) {
                    _this.getUserAddress(msg);
                    resolve('ok');
                }
                else {
                    reject(Error('error'));
                }
            });
        };
        this.productArray = this.navParams.get("product");
        /**处理商品名 */
        for (var z = 0; z < this.productArray.length; z++) {
            this.productname = this.productArray[z].productname;
            if (this.productname.length >= 15) {
                this.productArray[z].productname = this.productname.substr(0, 8) + "..." + this.productname.substr(this.productname.length - 5, 5);
            }
        }
        /**总价 */
        for (var i = 0; i < this.productArray.length; i++) {
            this.allAmount = this.allAmount + this.productArray[i].buynum * this.productArray[i].specPrice;
        }
        this.realpay = this.allAmount;
        /**可使用红包数 */
        for (var j = 0; j < this.productArray.length; j++) {
            this.maxCoupon = this.maxCoupon + (this.productArray[j].specElec / 2) * this.productArray[j].buynum;
        }
    }
    ConfirmVipOrderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfirmVipOrderPage');
    };
    ConfirmVipOrderPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.token = this.storage.get("token");
        var api = "v1/PersonalCenter/GetPersonalAccountBalance/" + this.token;
        this.httpservice.requestData(api, function (data) {
            if (data.error_code == 3) {
                _this.rlogin.rLoginProcessWithHistory(_this.navCtrl);
            }
            else {
                _this.res = {
                    "redBak": data.data.personDataMap.Coupon,
                    "buy": data.data.personDataMap.RemainPoints,
                    "cash": data.data.personDataMap.RemainElecNum,
                    "vip": data.data.personDataMap.RemainVIPAmount
                };
                _this.remainCoupon = _this.res.redBak;
                _this.remainPay = _this.res.buy;
                _this.remainCash = _this.res.cash;
                _this.remainVip = _this.res.vip;
                if (!_this.isTwoAddress) {
                    _this.getDefaultAddress();
                }
            }
        });
    };
    /**获取用户默认地址 */
    ConfirmVipOrderPage.prototype.getDefaultAddress = function () {
        var _this = this;
        var api = "v1/AddressManager/getDefaultAddressOfUser";
        var params = {
            "token": this.token
        };
        this.httpservice.doFormPost(api, params, function (data) {
            if (data.error_code == 0) {
                _this.addressId = data.data.Id;
                _this.addressName = data.data.Name;
                _this.addressPhone = data.data.Phone;
                _this.address = data.data.ProvinceName + data.data.CityName + data.data.RegionName;
                _this.addressDetail = data.data.DetailAddress;
            }
            else if (data.error_code == -1) {
                _this.addressName = "未设置默认地址";
            }
        });
    };
    /**回调获取用户地址 */
    ConfirmVipOrderPage.prototype.getUserAddress = function (addressId) {
        var _this = this;
        var api = "v1/AddressManager/getAddressOfUserById/" + this.token + '/' + addressId;
        this.httpservice.requestData(api, function (data) {
            if (data.error_code == 0) {
                _this.addressId = addressId;
                _this.addressName = data.data.Name;
                _this.addressPhone = data.data.Phone;
                _this.address = data.data.ProvinceName + data.data.CityName + data.data.RegionName;
                _this.addressDetail = data.data.DetailAddress;
            }
            else if (data.error_code == 3) {
                _this.rlogin.rLoginProcessWithHistory(_this.navCtrl);
            }
            else {
                _this.toast.showToast(data.error_message);
            }
        });
    };
    /**选择地址 */
    ConfirmVipOrderPage.prototype.toAddress = function () {
        this.navCtrl.push("AddressPage", { 'action': this.action });
    };
    /**监听键盘弹出，收起 ios*/
    ConfirmVipOrderPage.prototype.blurInput = function () {
        this.isup = false;
    };
    ConfirmVipOrderPage.prototype.focusInput = function () {
        this.isup = true;
    };
    /**处理减法精度丢失 */
    ConfirmVipOrderPage.prototype.subDouble = function (f, s, digit) {
        var m = Math.pow(10, digit);
        return Math.round((f * m - s * m)) / m;
    };
    /**处理三个数减法精度丢失 */
    ConfirmVipOrderPage.prototype.subDouble3 = function (f, s, t, digit) {
        var m = Math.pow(10, digit);
        var middle = Math.round((f * m - s * m)) / m;
        return Math.round((middle * m - t * m)) / m;
    };
    /**处理四个数减法精度丢失 */
    ConfirmVipOrderPage.prototype.subDouble4 = function (f, s, t, fouth, digit) {
        var m = Math.pow(10, digit);
        var middle = Math.round((f * m - s * m)) / m;
        var middle1 = Math.round((middle * m - t * m)) / m;
        return Math.round((middle1 * m - fouth * m)) / m;
    };
    /**监听币值切换 */
    ConfirmVipOrderPage.prototype.clickcash = function () {
        if (this.redBak == true && this.buy == true && this.cash == true) {
            this.vip = false;
            this.deduVip = 0;
            this.deduRedback = this.res.redBak >= this.maxCoupon ? this.maxCoupon : this.res.redBak;
            this.dedubuy = this.subDouble(this.allAmount, this.deduRedback, 2) >= this.res.buy ? this.res.buy : this.subDouble(this.allAmount, this.deduRedback, 2);
            this.deduCash = 0;
            this.realpay = this.subDouble4(this.allAmount, this.deduRedback, this.dedubuy, this.deduCash, 2);
        }
        else if (this.redBak == true && this.buy == false && this.cash == true) {
            this.vip = false;
            this.deduVip = 0;
            this.deduRedback = this.res.redBak >= this.maxCoupon ? this.maxCoupon : this.res.redBak;
            this.dedubuy = 0;
            this.deduCash = 0;
            this.realpay = this.subDouble4(this.allAmount, this.deduRedback, this.dedubuy, this.deduCash, 2);
        }
        else if (this.redBak == true && this.buy == true && this.cash == false) {
            this.vip = false;
            this.deduVip = 0;
            this.deduRedback = this.res.redBak >= this.maxCoupon ? this.maxCoupon : this.res.redBak;
            this.dedubuy = this.subDouble(this.allAmount, this.deduRedback, 2) >= this.res.buy ? this.res.buy : this.subDouble(this.allAmount, this.deduRedback, 2);
            this.deduCash = this.subDouble3(this.allAmount, this.deduRedback, this.dedubuy, 2) >= this.res.cash ? this.res.cash : this.subDouble3(this.allAmount, this.deduRedback, this.dedubuy, 2);
            this.realpay = this.subDouble4(this.allAmount, this.deduRedback, this.dedubuy, this.deduCash, 2);
        }
        else if (this.redBak == true && this.buy == false && this.cash == false) {
            this.vip = false;
            this.deduVip = 0;
            this.deduRedback = this.res.redBak >= this.maxCoupon ? this.maxCoupon : this.res.redBak;
            this.dedubuy = 0;
            this.deduCash = this.subDouble3(this.allAmount, this.deduRedback, this.dedubuy, 2) >= this.res.cash ? this.res.cash : this.subDouble3(this.allAmount, this.deduRedback, this.dedubuy, 2);
            this.realpay = this.subDouble4(this.allAmount, this.deduRedback, this.dedubuy, this.deduCash, 2);
        }
        else if (this.redBak == false && this.buy == false && this.cash == false) {
            this.vip = false;
            this.deduVip = 0;
            this.deduRedback = 0;
            this.dedubuy = 0;
            this.deduCash = this.subDouble3(this.allAmount, this.deduRedback, this.dedubuy, 2) >= this.res.cash ? this.res.cash : this.subDouble3(this.allAmount, this.deduRedback, this.dedubuy, 2);
            this.realpay = this.subDouble4(this.allAmount, this.deduRedback, this.dedubuy, this.deduCash, 2);
        }
        else if (this.redBak == false && this.buy == false && this.cash == true) {
            this.vip = false;
            this.deduVip = 0;
            this.deduRedback = 0;
            this.dedubuy = 0;
            this.deduCash = 0;
            this.realpay = this.subDouble4(this.allAmount, this.deduRedback, this.dedubuy, this.deduCash, 2);
        }
        else if (this.redBak == false && this.buy == true && this.cash == false) {
            this.vip = false;
            this.deduVip = 0;
            this.deduRedback = 0;
            this.dedubuy = this.subDouble(this.allAmount, this.deduRedback, 2) >= this.res.buy ? this.res.buy : this.subDouble(this.allAmount, this.deduRedback, 2);
            this.deduCash = this.subDouble3(this.allAmount, this.deduRedback, this.dedubuy, 2) >= this.res.cash ? this.res.cash : this.subDouble3(this.allAmount, this.deduRedback, this.dedubuy, 2);
            this.realpay = this.subDouble4(this.allAmount, this.deduRedback, this.dedubuy, this.deduCash, 2);
        }
        else {
            this.vip = false;
            this.deduVip = 0;
            this.deduRedback = 0;
            this.dedubuy = this.allAmount - this.deduRedback >= this.res.buy ? this.res.buy : this.allAmount - this.deduRedback;
            this.deduCash = 0;
            this.realpay = this.subDouble4(this.allAmount, this.deduRedback, this.dedubuy, this.deduCash, 2);
        }
    };
    ConfirmVipOrderPage.prototype.clickred = function () {
        if (this.redBak == true && this.buy == true && this.cash == true) {
            this.vip = false;
            this.deduVip = 0;
            this.deduRedback = 0;
            this.dedubuy = this.subDouble(this.allAmount, this.deduRedback, 2) >= this.res.buy ? this.res.buy : this.subDouble(this.allAmount, this.deduRedback, 2);
            this.deduCash = this.subDouble3(this.allAmount, this.deduRedback, this.dedubuy, 2) >= this.res.cash ? this.res.cash : this.subDouble3(this.allAmount, this.deduRedback, this.dedubuy, 2);
            this.realpay = this.subDouble4(this.allAmount, this.deduRedback, this.dedubuy, this.deduCash, 2);
        }
        else if (this.redBak == true && this.buy == false && this.cash == true) {
            this.vip = false;
            this.deduVip = 0;
            this.deduRedback = 0;
            this.dedubuy = 0;
            this.deduCash = this.subDouble3(this.allAmount, this.deduRedback, this.dedubuy, 2) >= this.res.cash ? this.res.cash : this.subDouble3(this.allAmount, this.deduRedback, this.dedubuy, 2);
            this.realpay = this.subDouble4(this.allAmount, this.deduRedback, this.dedubuy, this.deduCash, 2);
        }
        else if (this.redBak == true && this.buy == true && this.cash == false) {
            this.vip = false;
            this.deduVip = 0;
            this.deduRedback = 0;
            this.dedubuy = this.subDouble(this.allAmount, this.deduRedback, 2) >= this.res.buy ? this.res.buy : this.subDouble(this.allAmount, this.deduRedback, 2);
            this.deduCash = 0;
            this.realpay = this.subDouble4(this.allAmount, this.deduRedback, this.dedubuy, this.deduCash, 2);
        }
        else if (this.redBak == true && this.buy == false && this.cash == false) {
            this.vip = false;
            this.deduVip = 0;
            this.deduRedback = 0;
            this.dedubuy = 0;
            this.deduCash = 0;
            this.realpay = this.subDouble4(this.allAmount, this.deduRedback, this.dedubuy, this.deduCash, 2);
        }
        else if (this.redBak == false && this.buy == false && this.cash == false) {
            this.vip = false;
            this.deduVip = 0;
            this.deduRedback = this.res.redBak >= this.maxCoupon ? this.maxCoupon : this.res.redBak;
            this.dedubuy = 0;
            this.deduCash = 0;
            this.realpay = this.subDouble4(this.allAmount, this.deduRedback, this.dedubuy, this.deduCash, 2);
        }
        else if (this.redBak == false && this.buy == false && this.cash == true) {
            this.vip = false;
            this.deduVip = 0;
            this.deduRedback = this.res.redBak >= this.maxCoupon ? this.maxCoupon : this.res.redBak;
            this.dedubuy = 0;
            this.deduCash = this.subDouble3(this.allAmount, this.deduRedback, this.dedubuy, 2) >= this.res.cash ? this.res.cash : this.subDouble3(this.allAmount, this.deduRedback, this.dedubuy, 2);
            this.realpay = this.subDouble4(this.allAmount, this.deduRedback, this.dedubuy, this.deduCash, 2);
        }
        else if (this.redBak == false && this.buy == true && this.cash == false) {
            this.vip = false;
            this.deduVip = 0;
            this.deduRedback = this.res.redBak >= this.maxCoupon ? this.maxCoupon : this.res.redBak;
            this.dedubuy = this.subDouble(this.allAmount, this.deduRedback, 2) >= this.res.buy ? this.res.buy : this.subDouble(this.allAmount, this.deduRedback, 2);
            this.deduCash = 0;
            this.realpay = this.subDouble4(this.allAmount, this.deduRedback, this.dedubuy, this.deduCash, 2);
        }
        else {
            this.vip = false;
            this.deduVip = 0;
            this.deduRedback = this.res.redBak >= this.maxCoupon ? this.maxCoupon : this.res.redBak;
            this.dedubuy = this.subDouble(this.allAmount, this.deduRedback, 2) >= this.res.buy ? this.res.buy : this.subDouble(this.allAmount, this.deduRedback, 2);
            this.deduCash = this.subDouble3(this.allAmount, this.deduRedback, this.dedubuy, 2) >= this.res.cash ? this.res.cash : this.subDouble3(this.allAmount, this.deduRedback, this.dedubuy, 2);
            this.realpay = this.subDouble4(this.allAmount, this.deduRedback, this.dedubuy, this.deduCash, 2);
        }
    };
    ConfirmVipOrderPage.prototype.clickbuy = function () {
        if (this.redBak == true && this.buy == true && this.cash == true) {
            this.vip = false;
            this.deduVip = 0;
            this.deduRedback = this.res.redBak >= this.maxCoupon ? this.maxCoupon : this.res.redBak;
            this.dedubuy = 0;
            this.deduCash = this.subDouble3(this.allAmount, this.deduRedback, this.dedubuy, 2) >= this.res.cash ? this.res.cash : this.subDouble3(this.allAmount, this.deduRedback, this.dedubuy, 2);
            this.realpay = this.subDouble4(this.allAmount, this.deduRedback, this.dedubuy, this.deduCash, 2);
        }
        else if (this.redBak == true && this.buy == false && this.cash == true) {
            this.vip = false;
            this.deduVip = 0;
            this.deduRedback = this.res.redBak >= this.maxCoupon ? this.maxCoupon : this.res.redBak;
            this.dedubuy = this.subDouble(this.allAmount, this.deduRedback, 2) >= this.res.buy ? this.res.buy : this.subDouble(this.allAmount, this.deduRedback, 2);
            this.deduCash = this.subDouble3(this.allAmount, this.deduRedback, this.dedubuy, 2) >= this.res.cash ? this.res.cash : this.subDouble3(this.allAmount, this.deduRedback, this.dedubuy, 2);
            this.realpay = this.subDouble4(this.allAmount, this.deduRedback, this.dedubuy, this.deduCash, 2);
        }
        else if (this.redBak == true && this.buy == true && this.cash == false) {
            this.vip = false;
            this.deduVip = 0;
            this.deduRedback = this.res.redBak >= this.maxCoupon ? this.maxCoupon : this.res.redBak;
            this.dedubuy = 0;
            this.deduCash = 0;
            this.realpay = this.subDouble4(this.allAmount, this.deduRedback, this.dedubuy, this.deduCash, 2);
        }
        else if (this.redBak == true && this.buy == false && this.cash == false) {
            this.vip = false;
            this.deduVip = 0;
            this.deduRedback = this.res.redBak >= this.maxCoupon ? this.maxCoupon : this.res.redBak;
            this.dedubuy = this.subDouble(this.allAmount, this.deduRedback, 2) >= this.res.buy ? this.res.buy : this.subDouble(this.allAmount, this.deduRedback, 2);
            this.deduCash = 0;
            this.realpay = this.subDouble4(this.allAmount, this.deduRedback, this.dedubuy, this.deduCash, 2);
        }
        else if (this.redBak == false && this.buy == false && this.cash == false) {
            this.vip = false;
            this.deduVip = 0;
            this.deduRedback = 0;
            this.dedubuy = this.subDouble(this.allAmount, this.deduRedback, 2) >= this.res.buy ? this.res.buy : this.subDouble(this.allAmount, this.deduRedback, 2);
            this.deduCash = 0;
            this.realpay = this.subDouble4(this.allAmount, this.deduRedback, this.dedubuy, this.deduCash, 2);
        }
        else if (this.redBak == false && this.buy == false && this.cash == true) {
            this.vip = false;
            this.deduVip = 0;
            this.deduRedback = 0;
            this.dedubuy = this.allAmount - this.deduRedback >= this.res.buy ? this.res.buy : this.allAmount - this.deduRedback;
            this.deduCash = this.subDouble3(this.allAmount, this.deduRedback, this.dedubuy, 2) >= this.res.cash ? this.res.cash : this.subDouble3(this.allAmount, this.deduRedback, this.dedubuy, 2);
            this.realpay = this.subDouble4(this.allAmount, this.deduRedback, this.dedubuy, this.deduCash, 2);
        }
        else if (this.redBak == false && this.buy == true && this.cash == false) {
            this.vip = false;
            this.deduVip = 0;
            this.deduRedback = 0;
            this.dedubuy = 0;
            this.deduCash = 0;
            this.realpay = this.subDouble4(this.allAmount, this.deduRedback, this.dedubuy, this.deduCash, 2);
        }
        else {
            this.vip = false;
            this.deduVip = 0;
            this.deduRedback = 0;
            this.dedubuy = 0;
            this.deduCash = this.subDouble3(this.allAmount, this.deduRedback, this.dedubuy, 2) >= this.res.cash ? this.res.cash : this.subDouble3(this.allAmount, this.deduRedback, this.dedubuy, 2);
            this.realpay = this.subDouble4(this.allAmount, this.deduRedback, this.dedubuy, this.deduCash, 2);
        }
    };
    ConfirmVipOrderPage.prototype.clickvip = function () {
        if (this.vip == false) {
            this.redBak = false;
            this.buy = false;
            this.cash = false;
            this.deduRedback = 0;
            this.dedubuy = 0;
            this.deduCash = 0;
            this.deduVip = this.allAmount >= this.remainVip ? this.remainVip : this.allAmount;
            this.realpay = this.subDouble(this.allAmount, this.deduVip, 2);
        }
    };
    ConfirmVipOrderPage.prototype.goBuy = function () {
        var _this = this;
        var orderHeads = new Array();
        var productList = new Array();
        for (var i = 0; i < this.productArray.length; i++) {
            if (i == 0) {
                var _data = {
                    "producerno": this.productArray[i].producerno,
                    "list": [i]
                };
                orderHeads.push(_data);
            }
            else {
                for (var z = 0; z < orderHeads.length; z++) {
                    if (orderHeads[z].producerno == this.productArray[i].producerno) {
                        orderHeads[z].list.push(i);
                        break;
                    }
                    else if (orderHeads[z].producerno != this.productArray[i].producerno && z == orderHeads.length - 1) {
                        var _data1 = {
                            "producerno": this.productArray[i].producerno,
                            "list": [i]
                        };
                        orderHeads.push(_data1);
                        break;
                    }
                }
            }
        }
        for (var j = 0; j < orderHeads.length; j++) {
            var numlist = orderHeads[j].list;
            var orderLines = [];
            var payList = [];
            var totalAmount = 0;
            var maxCoupon = 0;
            for (var w = 0; w < numlist.length; w++) {
                orderLines.push({
                    "productId": this.productArray[numlist[w]].id,
                    "productNum": this.productArray[numlist[w]].buynum,
                    "specId": this.productArray[numlist[w]].specId
                });
                payList.push({
                    "totalAmount": this.productArray[numlist[w]].buynum * this.productArray[numlist[w]].specPrice,
                    "maxCoupon": this.productArray[numlist[w]].buynum * this.productArray[numlist[w]].specElec / 2,
                });
            }
            for (var o = 0; o < payList.length; o++) {
                totalAmount += payList[o].totalAmount;
                maxCoupon += payList[o].maxCoupon;
            }
            var useCoupon = this.deduRedback >= maxCoupon ? maxCoupon : this.deduRedback;
            var usePointNum = this.subDouble(totalAmount, useCoupon, 2) >= this.dedubuy ? this.dedubuy : this.subDouble(totalAmount, useCoupon, 2);
            var useElecNum = this.subDouble3(totalAmount, useCoupon, usePointNum, 2) >= this.deduCash ? this.deduCash : this.subDouble3(totalAmount, useCoupon, usePointNum, 2);
            var realpay = this.subDouble4(totalAmount, useCoupon, usePointNum, useElecNum, 2);
            realpay = this.subDouble(realpay, this.deduVip, 2);
            productList.push({
                "freight": 0,
                "memo": this.memo,
                "orderLines": orderLines,
                "producername": this.productArray[numlist[0]].producername,
                "producerno": this.productArray[numlist[0]].producerno,
                "producertel": this.productArray[numlist[0]].producertel,
                "realPay": realpay,
                "totalAmount": totalAmount,
                "useCoupon": useCoupon,
                "useElecNum": useElecNum,
                "usePointNum": usePointNum,
                "useVIPRemainNum": this.deduVip
            });
        }
        var params = {
            "adrressId": this.addressId,
            "orderHeads": productList
        };
        var api = "v2/PersonalCenter/createBOrder/" + this.token;
        this.httpservice.doPost(api, params, function (data) {
            if (data.error_code == 0) {
                if (data.data.type == 1) {
                    _this.passwordProvider.execute(_this.navCtrl, function () {
                        var api = "v1/PersonalCenter/syncHandleOrderC/" + _this.token;
                        var params = {
                            "orderNoC": data.data.datas
                        };
                        _this.httpservice.doFormPost(api, params, function (data) {
                            if (data.error_code == 0) {
                                _this.navCtrl.push('PaysuccessPage', {
                                    "orderType": "1"
                                });
                            }
                            else {
                                _this.toast.showToast(data.error_message);
                            }
                        });
                    });
                }
                else if (data.data.type == 2) {
                    _this.navCtrl.push('PaymentPage', {
                        "orderNo": data.data.datas.orderNoC,
                        "realpay": data.data.datas.realpay,
                        "orderType": data.data.datas.orderType
                    });
                }
                else if (data.data.type == 3) {
                    _this.passwordProvider.execute(_this.navCtrl, function () {
                        _this.weblink.wxGoWebPay(_this.token, data.data.datas.orderNoC, data.data.datas.realpay, data.data.datas.orderType);
                    });
                }
            }
            else {
                _this.toast.showToast(data.error_message);
            }
        });
    };
    ConfirmVipOrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirm-vip-order',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\confirm-vip-order\confirm-vip-order.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>确认订单</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="allcontent" (onresize)="test()">\n\n  <div class="taddress" tappable (click)="toAddress()">\n\n      <ion-icon ios="ios-pin-outline" md="ios-pin-outline" class="addressicon"></ion-icon>\n\n      <div class="tcontent">\n\n          <div class="tjian">\n\n              <ion-icon ios="ios-arrow-dropright" md="md-arrow-dropright"></ion-icon>\n\n          </div>\n\n        <p class="tname">{{addressName}}</p>\n\n        <p class="tphone">{{addressPhone}}</p>\n\n        <p class="tadd">{{address}}</p>\n\n        <p class="tadddetail">{{addressDetail}}</p>\n\n      </div>\n\n  </div>\n\n  <div class="tproduct">\n\n    <ion-list style="margin: 0" *ngFor = "let item of productArray">\n\n      <ion-item style="border-top: none">\n\n            <ion-thumbnail  item-left>\n\n              <img [src]="config.domain+item.productphotos[0].photo"/>            \n\n            </ion-thumbnail>\n\n            <h2 style="font-size: 1.5rem">{{item.productname}}</h2>\n\n            <p style="margin-bottom: 0.3rem;">规格：{{item.specName}}</p>\n\n            <h2 style="display: inline;color: red">¥{{item.specPrice}}</h2>\n\n            <p style="float: right;margin-right: 2rem">\n\n              <ion-icon ios="ios-close" md="md-close"></ion-icon><em style="font-size: 1.7rem">{{item.buynum}}</em>\n\n            </p>\n\n      </ion-item>\n\n    </ion-list>\n\n    <ion-list style="margin: 0">\n\n      <ion-item>\n\n          <p style="float:left;">邮费</p>\n\n          <p style="float: right;">包邮</p>\n\n      </ion-item>\n\n      <ion-item>\n\n          <ion-input style="font-size: 1.4rem" placeholder="买家留言" (ionBlur)="blurInput()" (ionFocus)="focusInput()" [(ngModel)]="memo">\n\n\n\n          </ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n  <div style="border-bottom: 8px solid #e3e3e3">\n\n    <ion-list style="margin: 0">\n\n      <ion-item>\n\n          <ion-label style="font-size: 1.4rem">可用现金红包{{remainCoupon}}</ion-label>\n\n          <ion-toggle [(ngModel)]="redBak" (tap)="clickred()"></ion-toggle>\n\n      </ion-item>\n\n      <ion-item>\n\n          <ion-label style="font-size: 1.4rem">可用购物币{{remainPay}}</ion-label>\n\n          <ion-toggle [(ngModel)]="buy" (tap)="clickbuy()"></ion-toggle>\n\n      </ion-item>\n\n      <ion-item>\n\n          <ion-label style="font-size: 1.4rem">可用现金币{{remainCash}}</ion-label>\n\n          <ion-toggle [(ngModel)]="cash" (tap)="clickcash()"></ion-toggle>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label style="font-size: 1.4rem">可用积分{{remainVip}}</ion-label>\n\n        <ion-toggle [(ngModel)]="vip" (tap)="clickvip()"></ion-toggle>\n\n    </ion-item>\n\n    </ion-list>\n\n  </div>\n\n  <div>\n\n    <div class="tsettle">\n\n        <p >总金额</p><p>¥{{allAmount}}</p>\n\n    </div>\n\n    <div class="tsettle">\n\n        <p>现金红包抵扣</p><p>-¥{{deduRedback}}</p>\n\n    </div>\n\n    <div class="tsettle">\n\n        <p>购物币抵扣</p><p>-¥{{dedubuy}}</p>\n\n    </div>\n\n    <div class="tsettle">\n\n        <p>现金币抵扣</p><p>-¥{{deduCash}}</p>\n\n    </div>\n\n    <div class="tsettle">\n\n      <p>积分抵扣</p><p>-¥{{deduVip}}</p>\n\n  </div>\n\n  </div>\n\n</ion-content>\n\n<div class="tfloot" [ngStyle]="{\'display\':isup == true ? \'none\' : \'\' }">\n\n  <div class="tleft">\n\n    <em>合计：</em><p>¥{{realpay}}元</p>\n\n  </div>\n\n  <button class="buy" ion-button (tap)="goBuy()">提交订单</button>\n\n</div>\n\n'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\confirm-vip-order\confirm-vip-order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__providers_weblink_weblink__["a" /* WeblinkProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_verifypassword_verifypassword__["a" /* VerifypasswordProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_toast_toast__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_alert_alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_rloginprocess_rloginprocess__["a" /* RloginprocessProvider */]])
    ], ConfirmVipOrderPage);
    return ConfirmVipOrderPage;
}());

//# sourceMappingURL=confirm-vip-order.js.map

/***/ }),
/* 330 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElectransferPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_services_http_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rloginprocess_rloginprocess__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_alert_alert__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_verifypassword_verifypassword__ = __webpack_require__(37);
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
 * Generated class for the ElectransferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ElectransferPage = /** @class */ (function () {
    function ElectransferPage(navCtrl, navParams, storage, noticeSer, httpService, rlogin, alert, verify) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.noticeSer = noticeSer;
        this.httpService = httpService;
        this.rlogin = rlogin;
        this.alert = alert;
        this.verify = verify;
    }
    ElectransferPage.prototype.ionViewDidLoad = function () {
        this.getRemianElec();
    };
    ElectransferPage.prototype.getRemianElec = function () {
        var _this = this;
        var token = this.storage.get('token');
        if (token) {
            var api = 'v1/PersonalCenter/GetPersonalInfo/' + token;
            this.httpService.requestData(api, function (data) {
                if (data.error_code == 0) {
                    var tempData = data.data;
                    _this.remainElec = tempData['personDataMap'].RemainElecNum;
                    console.log(_this.remainElec);
                }
                else if (data.error_code == 3) {
                    _this.rlogin.rLoginProcessWithHistory(_this.navCtrl);
                }
                else {
                    _this.noticeSer.showToast('数据获取异常：' + data.error_message);
                }
            });
        }
    };
    ElectransferPage.prototype.transfer = function () {
        var _this = this;
        if (!this.sysID) {
            this.noticeSer.showToast('请输入众健号');
            return;
        }
        if (!this.transferElec) {
            this.noticeSer.showToast('请输入转让金额');
            return;
        }
        var token = this.storage.get('token');
        var api = 'v1/MemberShip/TransferOfMoney/' + token;
        this.httpService.doFormPost(api, {
            money: this.transferElec,
            sysID: this.sysID
        }, function (res) {
            if (res.error_code == 0) {
                _this.noticeSer.showToast('已转让给众健号为' + _this.sysID + '的用户' + _this.remainElec + '现金币');
                _this.sysID = null;
                _this.transferElec = null;
            }
            else if (res.error_code == 3) {
                //抢登处理
                _this.rlogin.rLoginProcess(_this.navCtrl);
            }
            else if (res.error_code == 1) {
                //跳转至实名认证页面
                _this.noticeSer.showToast('您还未进行实名认证');
            }
            else {
                _this.noticeSer.showToast(res.error_message);
            }
        });
    };
    // verifyPayPassword(payPassword) {
    //   let token = this.storage.get('token');
    //   let api = 'v1/PersonalCenter/verifyPayPassword';
    //   this.httpService.doFormPost(
    //     api
    //     , {
    //       toKen: token,
    //       payPassword: payPassword,
    //     },
    //     (res) => {
    //       if (res.error_code == 0) {//请求成功
    //         // this.tx();
    //       } else if (res.error_code == 3) {//token过期
    //         this.rlogin.rLoginProcess(this.navCtrl);
    //       } else if (res.error_code == -1) {//设置支付密码
    //         this.noticeSer.showToast('您还未设置支付密码');
    //         this.navCtrl.push('SetpaypasswordPage');
    //       } else if (res.error_code == 5) {
    //         this.noticeSer.showToast('您的现金币被冻结，请和工作人员联系');
    //       }
    //       else {
    //         this.noticeSer.showToast('服务异常：' + res.error_message);
    //       }
    //     });
    // }
    ElectransferPage.prototype.execute = function () {
        // //密码验证
        // this.alert.showPrompt('验证支付密码',
        //   [
        //     {
        //       text: '取消',
        //       handler: data => {
        var _this = this;
        //       }
        //     },
        //     {
        //       text: '确定',
        //       handler: data => {
        //         this.verifyPayPassword(data[0]);
        //       }
        //     }
        //   ]
        // );
        this.verify.execute(this.navCtrl, function () {
            _this.transfer();
        });
    };
    ElectransferPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-electransfer',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\electransfer\electransfer.html"*/'<!--\n\n  Generated template for the ElectransferPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>转让现金币</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content style="background: #eeeeee;">\n\n    <ion-list style="margin-top:1rem;">\n\n        <ion-item>\n\n          <ion-label>转让给</ion-label>\n\n          <ion-input type="number" [(ngModel)]="sysID" placeholder="请输入众健号"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>转让金额</ion-label>\n\n          <ion-input type="number" [(ngModel)]="transferElec"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label>现有金额</ion-label>\n\n            <ion-input class="remain_elec" type="number" value="{{remainElec}}" readonly></ion-input>\n\n          </ion-item>\n\n      </ion-list>\n\n      <button ion-button block color="danger" class="confirm" (tap)="execute()">确定转让</button>\n\n</ion-content>'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\electransfer\electransfer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_http_services_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_rloginprocess_rloginprocess__["a" /* RloginprocessProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_alert_alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_verifypassword_verifypassword__["a" /* VerifypasswordProvider */]])
    ], ElectransferPage);
    return ElectransferPage;
}());

//# sourceMappingURL=electransfer.js.map

/***/ }),
/* 331 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FandetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_services_http_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rloginprocess_rloginprocess__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_config_config__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import { ToastProvider } from '../../providers/toast/toast';
/**
 * Generated class for the FandetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FandetailPage = /** @class */ (function () {
    function FandetailPage(navCtrl, navParams, storage, httpService, noticeSer, el, re, rlogin, config) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.httpService = httpService;
        this.noticeSer = noticeSer;
        this.el = el;
        this.re = re;
        this.rlogin = rlogin;
        this.config = config;
        this.fansList = '';
        this.tempData = [];
        if (this.navParams.get('type')) {
            this.type = this.navParams.get('type');
        }
        else {
            this.type = 'Red';
        }
        this.page = 0;
        this.pageNum = 10;
    }
    FandetailPage.prototype.ionViewWillEnter = function () {
        this.redDiv = this.el.nativeElement.querySelector('.up');
        this.yellowDiv = this.el.nativeElement.querySelector('.center');
        this.blueDiv = this.el.nativeElement.querySelector('.down');
        this.changeColor();
        this.getData();
    };
    FandetailPage.prototype.getData = function () {
        var _this = this;
        var token = this.storage.get('token');
        var api = 'v1/MemberShip/GetFansDetails/' + token;
        this.httpService.requestData(api, function (data) {
            if (data.error_code == 0) {
                if (_this.page == 0) {
                    _this.tempData = data.data;
                    _this.page++;
                }
                else {
                    _this.tempData = _this.tempData.concat(data.data);
                    if (!(data.data.length < _this.pageNum)) {
                        _this.infiniteScroll.enable(true);
                        _this.page++;
                    }
                }
            }
            else if (data.error_code == 3) {
                _this.rlogin.rLoginProcessWithHistory(_this.navCtrl);
                _this.infiniteScroll.enable(true);
            }
            else {
                _this.noticeSer.showToast('数据君出问题啦');
                _this.infiniteScroll.enable(true);
            }
        }, { type: this.type, page: this.page, pageNum: this.pageNum });
    };
    FandetailPage.prototype.toChange = function (type) {
        this.type = type;
        this.changeColor();
        this.content.scrollToTop(0); /*回到顶部*/
        this.page = 0;
        if (this.infiniteScroll) {
            this.infiniteScroll.enable(true);
        }
        this.getData();
    };
    FandetailPage.prototype.changeColor = function () {
        if (this.type == 'Red') {
            this.re.setStyle(this.redDiv, 'opacity', '1');
            this.re.setStyle(this.yellowDiv, 'opacity', '0.7');
            this.re.setStyle(this.blueDiv, 'opacity', '0.7');
        }
        else if (this.type == 'Yellow') {
            this.re.setStyle(this.redDiv, 'opacity', '0.7');
            this.re.setStyle(this.yellowDiv, 'opacity', '1');
            this.re.setStyle(this.blueDiv, 'opacity', '0.7');
        }
        else {
            this.re.setStyle(this.redDiv, 'opacity', '0.7');
            this.re.setStyle(this.yellowDiv, 'opacity', '0.7');
            this.re.setStyle(this.blueDiv, 'opacity', '1');
        }
    };
    //上拉加载数据
    FandetailPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        setTimeout(function () {
            _this.infiniteScroll = infiniteScroll;
            _this.getData();
            infiniteScroll.complete();
            //把下拉事件提出来
            infiniteScroll.enable(false);
        }, 1000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], FandetailPage.prototype, "content", void 0);
    FandetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fandetail',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\fandetail\fandetail.html"*/'<!--\n\n  Generated template for the ProductlistPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>查看粉丝</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content style="background: #eeeeee;">\n\n    <div class="card-line-head" *ngFor="let item of tempData">\n\n      <img [src]="config.domain + item.HeadPhoto" onerror="this.src=\'assets/imgs/user.png\'">\n\n      <div class="center_content">\n\n        众健号：<span>{{item.SysID}}</span>\n\n      </div>\n\n      <div class="right_content">\n\n        贡献：<span>{{item.amount}}</span>\n\n      </div>\n\n    </div>\n\n\n\n  <div class="up" (tap)="toChange(\'Red\')">红粉</div>\n\n  <div class="center" (tap)="toChange(\'Yellow\')">黄粉</div>\n\n  <div class="down" (tap)="toChange(\'Blue\')">蓝粉</div>\n\n  <!--上滑的时候，加载数据-->\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)" threshold="50px">\n\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="加载中...">\n\n    </ion-infinite-scroll-content>\n\n  </ion-infinite-scroll>\n\n</ion-content>'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\fandetail\fandetail.html"*/,
        })
        //private noticeSer: ToastProvider
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_http_services_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */],
            __WEBPACK_IMPORTED_MODULE_5__providers_rloginprocess_rloginprocess__["a" /* RloginprocessProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_config_config__["a" /* ConfigProvider */]])
    ], FandetailPage);
    return FandetailPage;
}());

//# sourceMappingURL=fandetail.js.map

/***/ }),
/* 332 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FansPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rloginprocess_rloginprocess__ = __webpack_require__(8);
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
 * Generated class for the FansPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FansPage = /** @class */ (function () {
    function FansPage(navCtrl, navParams, storage, httpService, noticeSer, rclogin) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.httpService = httpService;
        this.noticeSer = noticeSer;
        this.rclogin = rclogin;
        this.fansmessage = '';
    }
    FansPage.prototype.goToDetail = function (type) {
        this.navCtrl.push('FandetailPage', { type: type });
    };
    FansPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var token = this.storage.get('token');
        if (token) {
            //api请求
            var api = 'v1/MemberShip/GetFans/' + token;
            this.httpService.requestData(api, function (data) {
                if (data.error_code == 0) {
                    //请求成功
                    _this.fansmessage = data.data;
                }
                else if (data.error_code == 3) {
                    _this.rclogin.rLoginProcessWithHistory(_this.navCtrl);
                }
                else {
                    _this.noticeSer.showToast('数据君出问题了！');
                }
            });
        }
    };
    FansPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fans',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\fans\fans.html"*/'<!--\n\n  Generated template for the FansPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>我的粉丝</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content style="background: #eeeeee;">\n\n    <div class="card-div">\n\n        <div class="card-line" (tap)="goToDetail(\'Red\')">\n\n            <span class="head-span">红粉</span>\n\n            <span class="content-span">{{fansmessage.Red}}</span>\n\n            <ion-icon class="arrows" name="ios-arrow-forward"></ion-icon>\n\n          </div>\n\n          <div class="line-div"></div>\n\n          <div class="card-line" (tap)="goToDetail(\'Yellow\')">\n\n              <span class="head-span" >黄粉</span>\n\n              <span class="content-span">{{fansmessage.Yellow}}</span>\n\n              <ion-icon class="arrows" name="ios-arrow-forward"></ion-icon>\n\n          </div>\n\n          <div class="line-div"></div>\n\n          <div class="card-line" (tap)="goToDetail(\'Blue\')">\n\n                <span class="head-span">蓝粉</span>\n\n                <span class="content-span">{{fansmessage.Blue}}</span>\n\n                <div class="list">\n\n                <ion-icon class="arrows" name="ios-arrow-forward"></ion-icon>\n\n                </div>\n\n          </div>\n\n        </div>  \n\n</ion-content>\n\n'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\fans\fans.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_rloginprocess_rloginprocess__["a" /* RloginprocessProvider */]])
    ], FansPage);
    return FansPage;
}());

//# sourceMappingURL=fans.js.map

/***/ }),
/* 333 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_config_config__ = __webpack_require__(7);
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
 * Generated class for the InformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InformationPage = /** @class */ (function () {
    function InformationPage(navCtrl, navParams, config, storage, httpService, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.config = config;
        this.storage = storage;
        this.httpService = httpService;
        this.toast = toast;
        this.temps = '';
        this.messages = '';
        console.log(this.navParams.get('orderId'));
        console.log(this.navParams.get('orderNo'));
        console.log(this.navParams.get('item'));
    }
    // ionViewDidLoad() {
    //   console.log('ionViewDidLoad InformationPage');
    // }
    InformationPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.temps = this.navParams.get('item');
        var token = this.storage.get('token');
        if (token) {
            //api请求
            var api = 'v1/PersonalCenter/getLogisticsInformation/' + token;
            console.log(api);
            //发送请求提交退款申请
            this.httpService.doFormPost(api, { orderNo: this.navParams.get('orderNo') }, function (data) {
                console.log(data);
                if (data.error_code == 0) {
                    _this.messages = data.data;
                    console.log(_this.messages);
                }
                else {
                    _this.toast.showToast('数据获取异常');
                }
            });
        }
    };
    InformationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-information',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\information\information.html"*/'<!--\n\n  Generated template for the InformationPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>查看物流</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content style="background: #eeeeee;">\n\n    <ion-grid style="padding: 1px;width: 100%;">\n\n        <div class="card-div">\n\n        <ion-row class="col_row">\n\n            <ion-col  style="width: 100%" *ngFor="let item of temps.orderlines">\n\n                <img class="img"  [src]="config.domain+item.photo">\n\n                <div class="hp">\n\n                    <div> {{item.productname}}</div>\n\n                        <div style="float:right;margin-top:-20px;">{{item.price}}元</div>  \n\n                </div>\n\n                <br />\n\n                <span class="hp" style="float:right">×{{item.productnum}}</span>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row  class="col_row">\n\n          <ion-col class="col_2" style="width: 100%">\n\n            <div class="cards-div">\n\n                <p *ngIf="messages.State==-1">暂无物流信息</p>\n\n                <p *ngIf="messages.State==1">已取件</p>\n\n                <p *ngIf="messages.State==2">在途中</p>\n\n                <p *ngIf="messages.State==3">已签收</p>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n      <div class="card-div" style="margin-top:-90px" >\n\n          <ion-row  class="col_row">\n\n            <ion-col class="col_2_div" style="width: 100%">\n\n              <span >订单编号：{{messages.LogisticCode}}</span><br />\n\n              <div class="package-status">\n\n                  <div class="status-box" >\n\n                    <ul  class="status-list" *ngFor="let item of messages.Traces">\n\n                      <li>\n\n                        <div class="status-content-before">{{item.AcceptStation}}</div>\n\n                        <div class="status-time-before">{{item.AcceptTime}}</div>\n\n                        <div class="status-line"></div>\n\n                      </li>\n\n                    </ul>\n\n                  </div>\n\n              </div>\n\n            </ion-col>\n\n          </ion-row>\n\n        </div>    \n\n        </ion-grid>\n\n       <ion-grid>\n\n         <div class="cards-div"  *ngIf="messages.State==-1">\n\n             <p>暂无物流信息</p>\n\n          </div>\n\n       </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\information\information.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__["a" /* ToastProvider */]])
    ], InformationPage);
    return InformationPage;
}());

//# sourceMappingURL=information.js.map

/***/ }),
/* 334 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyProductListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var KeyProductListPage = /** @class */ (function () {
    function KeyProductListPage(storage, ele, render2, navCtrl, config, navParams, httpService) {
        this.storage = storage;
        this.ele = ele;
        this.render2 = render2;
        this.navCtrl = navCtrl;
        this.config = config;
        this.navParams = navParams;
        this.httpService = httpService;
        this.list = []; /*模拟商品数据*/
        this.priceFlag = false; /*价格排序方式，默认正序 */
        this.elecFlag = false; /*积分排序方式，默认正序 */
        this.selectTag = "sale"; /**默认按销量排序 */
        this.tag = 1;
        //获取传值
        this.keywords = this.navParams.get('keywords');
        if (this.keywords != undefined) {
            storage.setSessionStorage("keywords", this.keywords);
        }
        if (this.keywords == undefined) {
            this.keywords = this.storage.getSessionStorage("keywords");
        }
        this.getProductList();
    }
    KeyProductListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var header = this.ele.nativeElement.querySelector('.title');
        var headerHeight = header.offsetHeight;
        setTimeout(function () {
            var sub = _this.ele.nativeElement.querySelector('.sub_header');
            _this.render2.setStyle(sub, "top", headerHeight + 'px');
        }, 100);
    };
    KeyProductListPage.prototype.getProductList = function () {
        var _this = this;
        var api = 'v1/ProductManager/searchProduct';
        var params = {
            "key": this.keywords,
            "type": this.tag
        };
        this.httpService.doFormPost(api, params, function (data) {
            _this.list = data.data;
        });
    };
    //按价格排序
    KeyProductListPage.prototype.search_price = function () {
        var _this = this;
        this.content.scrollToTop(0); /*回到顶部*/
        var api = 'v1/ProductManager/searchProduct';
        var tag;
        if (this.priceFlag) {
            tag = 3;
        }
        else {
            tag = 2;
        }
        var param = {
            "key": this.keywords,
            "type": tag
        };
        this.httpService.doFormPost(api, param, function (data) {
            _this.tag = tag;
            _this.list = data.data;
        });
        this.priceFlag = !this.priceFlag;
        this.elecFlag = false;
        this.selectTag = 'price';
    };
    //按销量排序
    KeyProductListPage.prototype.search_sale = function () {
        var _this = this;
        this.content.scrollToTop(0); /*回到顶部*/
        var api = 'v1/ProductManager/searchProduct';
        var param = {
            "key": this.keywords,
            "type": 1
        };
        this.httpService.doFormPost(api, param, function (data) {
            _this.list = data.data;
            _this.tag = 1;
        });
        this.selectTag = "sale";
        this.elecFlag = false;
        this.priceFlag = false;
    };
    //按积分排序
    KeyProductListPage.prototype.search_elec = function () {
        var _this = this;
        this.content.scrollToTop(0); /*回到顶部*/
        var api = 'v1/ProductManager/searchProduct';
        var tag;
        if (this.elecFlag) {
            tag = 6;
        }
        else {
            tag = 5;
        }
        var param = {
            "key": this.keywords,
            "type": tag
        };
        this.httpService.doFormPost(api, param, function (data) {
            _this.list = data.data;
            _this.tag = tag;
        });
        this.elecFlag = !this.elecFlag;
        this.priceFlag = false;
        this.selectTag = 'elec';
    };
    //跳转详情页
    KeyProductListPage.prototype.goProduct = function (id) {
        this.navCtrl.push('ProductDetailPage', {
            id: id
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], KeyProductListPage.prototype, "content", void 0);
    KeyProductListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-key-product-list',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\key-product-list\key-product-list.html"*/'<ion-header>\n\n\n\n  <ion-navbar class="title">\n\n        <ion-title>{{keywords}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>       \n\n      <div class="list_content">\n\n        <div class="sub_header">\n\n          <div (tap)="search_sale()">\n\n            <span [ngClass]="{\'tcl\':selectTag==\'sale\'}">销量</span>\n\n          </div>\n\n          <div (tap)="search_price()" [ngClass]="{\'down\':priceFlag}" class="up">\n\n              <span [ngClass]="{\'tcl\':selectTag==\'price\'}">价格</span>\n\n          </div>\n\n          <div (tap)="search_elec()" [ngClass]="{\'down\':elecFlag}" class="up">\n\n              <span [ngClass]="{\'tcl\':selectTag==\'elec\'}">积分</span>\n\n          </div>\n\n      </div>\n\n    \n\n        <ion-list inset>\n\n          <ng-container *ngFor="let item of list">\n\n            <ion-item (tap)="goProduct(item.product.id)" class="tlist" *ngIf="item.product.productphotos.length>0">\n\n                <ion-thumbnail  item-left>\n\n                  <img [src]="config.domain+item.product.productphotos[0].photo"/>            \n\n                </ion-thumbnail>\n\n                <h2 class="tpn"> {{item.product.productname}}</h2>\n\n                <p class="tp">\n\n                    <span style="color:red">¥</span><span style="color: red;font-size: 1.8rem" class="price">&nbsp;{{item.product.price}}</span>\n\n                    <span style="float: right;"><ion-icon style="color: #e0532d;" name="ios-redBack"></ion-icon><span style="color:#e0532d;font-size: 1.2rem">&nbsp;{{item.product.elecnum}}</span></span>\n\n                </p>\n\n              </ion-item>\n\n          </ng-container>  \n\n        </ion-list>\n\n      </div>\n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\key-product-list\key-product-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__["a" /* HttpServicesProvider */]])
    ], KeyProductListPage);
    return KeyProductListPage;
}());

//# sourceMappingURL=key-product-list.js.map

/***/ }),
/* 335 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembersProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_services_http_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MembersProductPage = /** @class */ (function () {
    function MembersProductPage(httpService, config, ele, render2, navCtrl, navParams) {
        this.httpService = httpService;
        this.config = config;
        this.ele = ele;
        this.render2 = render2;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.list = []; /*模拟商品数据*/
        this.page = 0; /*分页*/
        this.priceFlag = false; /*价格排序方式，默认正序 */
        this.elecFlag = false; /*积分排序方式，默认正序 */
        this.selectTag = "sale"; /**默认按销量排序 */
        this.enable = true;
        this.tag = 1;
        this.getProductList('');
    }
    MembersProductPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var header = this.ele.nativeElement.querySelector('.title');
        var headerHeight = header.offsetHeight;
        setTimeout(function () {
            var sub = _this.ele.nativeElement.querySelector('.sub_header');
            _this.render2.setStyle(sub, "top", headerHeight + 'px');
        }, 100);
    };
    MembersProductPage.prototype.getProductList = function (infiniteScroll) {
        var _this = this;
        var api = 'v1/HomePage/MemberArea';
        var params = {
            "type": this.tag,
            "page": this.page,
            "pageNum": 6
        };
        this.httpService.requestData(api, function (data) {
            console.log(data);
            if (_this.page == 0) {
                _this.list = data.data;
            }
            else {
                _this.list = _this.list.concat(data.data); /*拼接数据*/
            }
            if (infiniteScroll) {
                //告诉ionic 请求数据完成
                infiniteScroll.complete();
                if (data.data.length <= 0) {
                    infiniteScroll.enable(false);
                }
            }
            ;
            _this.page++;
        }, params);
    };
    //按价格排序
    MembersProductPage.prototype.search_price = function () {
        var _this = this;
        this.page = 1;
        if (this.infiniteScroll != undefined) {
            this.infiniteScroll.enable(true);
        }
        this.content.scrollToTop(0); /*回到顶部*/
        var api = 'v1/HomePage/MemberArea';
        var tag;
        if (this.priceFlag) {
            tag = 3;
        }
        else {
            tag = 2;
        }
        var param = {
            "page": 0,
            "pageNum": 6,
            "type": tag
        };
        this.httpService.requestData(api, function (data) {
            _this.tag = tag;
            _this.list = data.data;
        }, param);
        this.priceFlag = !this.priceFlag;
        this.elecFlag = false;
        this.selectTag = 'price';
    };
    //按销量排序
    MembersProductPage.prototype.search_sale = function () {
        var _this = this;
        this.page = 1;
        if (this.infiniteScroll != undefined) {
            this.infiniteScroll.enable(true);
        }
        this.content.scrollToTop(0); /*回到顶部*/
        var api = 'v1/HomePage/MemberArea';
        var param = {
            "page": 0,
            "pageNum": 6,
            "type": 1
        };
        this.httpService.requestData(api, function (data) {
            _this.list = data.data;
            _this.tag = 1;
        }, param);
        this.selectTag = "sale";
        this.elecFlag = false;
        this.priceFlag = false;
    };
    //按积分排序
    MembersProductPage.prototype.search_elec = function () {
        var _this = this;
        this.page = 1;
        if (this.infiniteScroll != undefined) {
            this.infiniteScroll.enable(true);
        }
        this.content.scrollToTop(0); /*回到顶部*/
        var api = 'v1/HomePage/MemberArea';
        var tag;
        if (this.elecFlag) {
            tag = 6;
        }
        else {
            tag = 5;
        }
        var param = {
            "page": 0,
            "pageNum": 6,
            "type": tag
        };
        this.httpService.requestData(api, function (data) {
            _this.list = data.data;
            _this.tag = tag;
        }, param);
        this.elecFlag = !this.elecFlag;
        this.priceFlag = false;
        this.selectTag = 'elec';
    };
    //跳转详情页
    MembersProductPage.prototype.goProduct = function (id) {
        this.navCtrl.push('ProductDetailPage', {
            id: id
        });
    };
    //加载更多
    MembersProductPage.prototype.doLoadMore = function (infiniteScroll) {
        var _this = this;
        setTimeout(function () {
            _this.getProductList(infiniteScroll);
            infiniteScroll.complete();
            infiniteScroll.enable(_this.enable);
            _this.infiniteScroll = infiniteScroll;
        }, 1000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], MembersProductPage.prototype, "content", void 0);
    MembersProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-members-product',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\members-product\members-product.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar class="title">\n\n        <ion-title>会员专区</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>       \n\n      <div class="list_content">\n\n        <div class="sub_header">\n\n          <div (tap)="search_sale()">\n\n            <span [ngClass]="{\'tcl\':selectTag==\'sale\'}">销量</span>\n\n          </div>\n\n          <div (tap)="search_price()" [ngClass]="{\'down\':priceFlag}" class="up">\n\n              <span [ngClass]="{\'tcl\':selectTag==\'price\'}">价格</span>\n\n          </div>\n\n          <div (tap)="search_elec()" [ngClass]="{\'down\':elecFlag}" class="up">\n\n              <span [ngClass]="{\'tcl\':selectTag==\'elec\'}">积分</span>\n\n          </div>\n\n      </div>\n\n    \n\n        <ion-list inset>\n\n          <ng-container *ngFor="let item of list">\n\n            <ion-item (tap)="goProduct(item.id)" class="tlist" *ngIf="item.productphotos.length>0">\n\n                <ion-thumbnail  item-left>\n\n                  <img [src]="config.domain+item.productphotos[0].photo"/>            \n\n                </ion-thumbnail>\n\n                <h2 class="tpn"> {{item.productname}}</h2>\n\n                <p class="tp">\n\n                    <span style="color:red">¥</span><span style="color: red;font-size: 1.8rem" class="price">&nbsp;{{item.price}}</span>\n\n                    <span style="float: right;"><ion-icon style="color: #e0532d;" name="ios-redBack"></ion-icon><span style="color:#e0532d;font-size: 1.2rem">&nbsp;{{item.elecnum}}</span></span>\n\n                </p>\n\n              </ion-item>\n\n          </ng-container>  \n\n        </ion-list>\n\n        <ion-infinite-scroll (ionInfinite)="doLoadMore($event)" thr>\n\n            <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="加载中...">\n\n            </ion-infinite-scroll-content>\n\n        </ion-infinite-scroll>\n\n      </div>\n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\members-product\members-product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_http_services_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], MembersProductPage);
    return MembersProductPage;
}());

//# sourceMappingURL=members-product.js.map

/***/ }),
/* 336 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoneyrecordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_services_http_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rloginprocess_rloginprocess__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__ = __webpack_require__(6);
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
 * Generated class for the MoneyrecordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MoneyrecordPage = /** @class */ (function () {
    function MoneyrecordPage(navCtrl, navParams, rlogin, httpService, storage, noticeSer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rlogin = rlogin;
        this.httpService = httpService;
        this.storage = storage;
        this.noticeSer = noticeSer;
        this.type = 'elec';
        this.datas = [];
        this.page = 0;
        this.pageNum = 10;
        this.title = '';
        if (this.navParams.get('type')) {
            this.type = this.navParams.get('type');
        }
        if (this.type == 'elec') {
            this.title = '现金币记录';
        }
        if (this.type == 'points') {
            this.title = '购物币记录';
        }
        if (this.type == 'vip') {
            this.title = '消费积分记录';
        }
        if (this.type == 'coupon') {
            this.title = '红包记录';
        }
    }
    MoneyrecordPage.prototype.ionViewWillEnter = function () {
        //初始化数据
        this.getData();
    };
    MoneyrecordPage.prototype.getData = function () {
        var _this = this;
        var token = this.storage.get('token');
        if (token) {
            var api = 'v1/PersonalCenter/accountBill/' + token;
            this.httpService.requestData(api, function (data) {
                if (data.error_code == 0) {
                    var dataLength = data.data.length;
                    if (dataLength < _this.pageNum) {
                        _this.datas = _this.datas.concat(data.data);
                        _this.page++;
                    }
                    else {
                        _this.datas = _this.datas.concat(data.data);
                        if (_this.infiniteScroll) {
                            _this.infiniteScroll.enable(true);
                        }
                        _this.page++;
                    }
                }
                else if (data.error_code == 3) {
                    _this.rlogin.rLoginProcessWithHistory(_this.navCtrl);
                    _this.infiniteScroll.enable(true);
                }
                else {
                    _this.noticeSer.showToast('数据获取异常：' + data.error_message);
                    _this.infiniteScroll.enable(true);
                }
            }, { type: this.type, page: this.page, pageNum: this.pageNum });
        }
    };
    MoneyrecordPage.prototype.doInfinite = function (infiniteScroll) {
        this.infiniteScroll = infiniteScroll;
        this.getData();
        infiniteScroll.complete();
        infiniteScroll.enable(false);
    };
    MoneyrecordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-moneyrecord',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\moneyrecord\moneyrecord.html"*/'<!--\n\n  Generated template for the MoneyrecordPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content style="background: #eeeeee;">\n\n  <div class="parent" *ngFor="let item of datas">\n\n      <div class="up">{{item.memo}}</div>\n\n      <div class="down"><span>{{item.addSub}}{{item.amount}}</span><span>{{item.createTime}}</span></div>\n\n      </div>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)" threshold="50px">\n\n    <ion-infinite-scroll-content\n\n        loadingSpinner="bubbles"\n\n        loadingText="Loading more data...">\n\n      </ion-infinite-scroll-content>\n\n  </ion-infinite-scroll>\n\n</ion-content>'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\moneyrecord\moneyrecord.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_rloginprocess_rloginprocess__["a" /* RloginprocessProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_services_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__["a" /* ToastProvider */]])
    ], MoneyrecordPage);
    return MoneyrecordPage;
}());

//# sourceMappingURL=moneyrecord.js.map

/***/ }),
/* 337 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MywalletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_services_http_services__ = __webpack_require__(4);
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
 * Generated class for the MywalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MywalletPage = /** @class */ (function () {
    function MywalletPage(navCtrl, navParams, el, renderer2, storage, noticeSer, httpService, rlogin) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.el = el;
        this.renderer2 = renderer2;
        this.storage = storage;
        this.noticeSer = noticeSer;
        this.httpService = httpService;
        this.rlogin = rlogin;
        this.RechargePage = 'RechargePage';
        this.WithdrawPage = 'WithdrawPage';
        this.UpdaterankPage = 'UpdaterankPage';
        this.myHome = __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */];
        this.canGoHome = '0';
        this.userInfo = '';
        this.imgs = {
            img1: '',
            img2: 'assets/imgs/quasiagency_gold_dark.png',
            img3: 'assets/imgs/vip_gold_dark.png',
            img4: 'assets/imgs/partner_gold_dark.png',
            img5: 'assets/imgs/agent_gold_dark.png'
        };
    }
    MywalletPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MywalletPage');
        //把图标居中
        var templateDiv = this.el.nativeElement.querySelector('#templateDiv');
        //剩余空间宽段
        var remianWidth = screen.width - templateDiv.offsetWidth * 5;
        //小球宽度
        var smallBallWidth = templateDiv.offsetWidth;
        //两边宽度
        var rimWidth = remianWidth * 0.2;
        //间隙宽度
        var intervalWidth = remianWidth * 0.15;
        var img_div_one = this.el.nativeElement.querySelector('.rank_parent_div > .img_div:first-child');
        var img_div_two = this.el.nativeElement.querySelector('.rank_parent_div > .img_div:nth-child(3)');
        var img_div_three = this.el.nativeElement.querySelector('.rank_parent_div > .img_div:nth-child(5)');
        var img_div_four = this.el.nativeElement.querySelector('.rank_parent_div > .img_div:nth-child(7)');
        var img_div_five = this.el.nativeElement.querySelector('.rank_parent_div > .img_div:nth-child(9)');
        var width_one = rimWidth;
        var width_two = width_one + smallBallWidth + intervalWidth;
        var width_three = width_two + smallBallWidth + intervalWidth;
        var width_four = width_three + smallBallWidth + intervalWidth;
        var width_five = width_four + smallBallWidth + intervalWidth;
        this.renderer2.setStyle(img_div_one, 'left', width_one + 2 + 'px');
        this.renderer2.setStyle(img_div_two, 'left', width_two + 'px');
        this.renderer2.setStyle(img_div_three, 'left', width_three + 'px');
        this.renderer2.setStyle(img_div_four, 'left', width_four + 'px');
        this.renderer2.setStyle(img_div_five, 'left', width_five + 'px');
        //把线给居中
        var line_div_arrays = this.el.nativeElement.querySelectorAll('.update_line');
        var line_one_left = rimWidth + smallBallWidth;
        var line_tow_left = line_one_left + intervalWidth + smallBallWidth;
        var line_three_left = line_tow_left + intervalWidth + smallBallWidth;
        var line_four_left = line_three_left + intervalWidth + smallBallWidth;
        this.renderer2.setStyle(line_div_arrays[0], 'left', line_one_left + 4 + 'px');
        this.renderer2.setStyle(line_div_arrays[1], 'left', line_tow_left + 4 + 'px');
        this.renderer2.setStyle(line_div_arrays[2], 'left', line_three_left + 4 + 'px');
        this.renderer2.setStyle(line_div_arrays[3], 'left', line_four_left + 4 + 'px');
        this.renderer2.setStyle(line_div_arrays[0], 'top', smallBallWidth * 17 / 10 + 'px');
        this.renderer2.setStyle(line_div_arrays[1], 'top', smallBallWidth * 17 / 10 + 'px');
        this.renderer2.setStyle(line_div_arrays[2], 'top', smallBallWidth * 17 / 10 + 'px');
        this.renderer2.setStyle(line_div_arrays[3], 'top', smallBallWidth * 17 / 10 + 'px');
        this.renderer2.setStyle(line_div_arrays[0], 'width', intervalWidth - 8 + 'px');
        this.renderer2.setStyle(line_div_arrays[1], 'width', intervalWidth - 8 + 'px');
        this.renderer2.setStyle(line_div_arrays[2], 'width', intervalWidth - 8 + 'px');
        this.renderer2.setStyle(line_div_arrays[3], 'width', intervalWidth - 8 + 'px');
        var rank_parent_div = this.el.nativeElement.querySelector('.rank_parent_div');
        this.renderer2.setStyle(rank_parent_div, 'padding-top', smallBallWidth * 1.2 + 'px');
        //图标居中
        var treasureImgDivArrays = this.el.nativeElement.querySelectorAll('#treasure .treasure_img_div');
        var treasureImgDIvParent = this.el.nativeElement.querySelector('#treasure .treasure_img_div_parent');
        var iconWidth = treasureImgDivArrays[0].offsetWidth;
        var treasureImgDIvInterval = (treasureImgDIvParent.offsetWidth - iconWidth * 4) / 5;
        // 计算出图标left
        var treasureImgOneLeft = treasureImgDIvInterval;
        var treasureImgTwoLeft = treasureImgOneLeft + treasureImgDivArrays[0].offsetWidth + treasureImgDIvInterval;
        var treasureImgThreeLeft = treasureImgTwoLeft + treasureImgDivArrays[0].offsetWidth + treasureImgDIvInterval;
        var treasureImgFourLeft = treasureImgThreeLeft + treasureImgDivArrays[0].offsetWidth + treasureImgDIvInterval;
        this.renderer2.setStyle(treasureImgDivArrays[0], 'left', treasureImgOneLeft + 'px');
        this.renderer2.setStyle(treasureImgDivArrays[1], 'left', treasureImgTwoLeft + 'px');
        this.renderer2.setStyle(treasureImgDivArrays[2], 'left', treasureImgThreeLeft + 'px');
        this.renderer2.setStyle(treasureImgDivArrays[3], 'left', treasureImgFourLeft + 'px');
        // 自动拓展
        var mygoldDiv = this.el.nativeElement.querySelector('.mygold');
        var goldOriginalHeight = mygoldDiv.offsetHeight;
        var expandHeight = goldOriginalHeight + 99 + 'px';
        this.renderer2.setStyle(mygoldDiv, 'height', expandHeight);
        //看情况增加调回首页按钮
        if (this.navParams.get('withoutRoot')) {
            this.canGoHome = '1';
        }
    };
    MywalletPage.prototype.ionViewWillEnter = function () {
        this.initData();
    };
    MywalletPage.prototype.initData = function () {
        var _this = this;
        //请求数据
        var token = this.storage.get('token');
        if (token) {
            var api = 'v1/PersonalCenter/initPersonalWallet/' + token;
            this.httpService.requestData(api, function (data) {
                if (data.error_code == 0) {
                    _this.userInfo = data.data;
                    //等级设置
                    //如果lev为0
                    if (_this.userInfo['personDataMap'].Lev == 0) {
                        if (_this.userInfo['isGCmember']) {
                            //99会员
                            _this.imgs.img1 = 'assets/imgs/free.png';
                            _this.imgs.img2 = 'assets/imgs/quasiagency_gold.png';
                        }
                        else {
                            //免费会员
                            _this.imgs.img1 = 'assets/imgs/free.png';
                        }
                        //如果lev为1
                    }
                    else if (_this.userInfo['personDataMap'].Lev == 1) {
                        _this.imgs.img1 = 'assets/imgs/free.png';
                        _this.imgs.img2 = 'assets/imgs/quasiagency_gold.png';
                        _this.imgs.img3 = 'assets/imgs/vip_gold.png';
                        //如果lev为2
                    }
                    else if (_this.userInfo['personDataMap'].Lev == 2) {
                        if (_this.userInfo['personDataMap'].IsSubProxy == 1) {
                            //准代理
                            _this.imgs.img1 = 'assets/imgs/free.png';
                            _this.imgs.img2 = 'assets/imgs/quasiagency_gold.png';
                            _this.imgs.img3 = 'assets/imgs/vip_gold.png';
                            _this.imgs.img4 = 'assets/imgs/partner_gold.png';
                        }
                        else {
                            //VIP
                            _this.imgs.img1 = 'assets/imgs/free.png';
                            _this.imgs.img2 = 'assets/imgs/quasiagency_gold.png';
                            _this.imgs.img3 = 'assets/imgs/vip_gold.png';
                        }
                    }
                    else {
                        //代理
                        _this.imgs.img1 = 'assets/imgs/free.png';
                        _this.imgs.img2 = 'assets/imgs/quasiagency_gold.png';
                        _this.imgs.img3 = 'assets/imgs/vip_gold.png';
                        _this.imgs.img4 = 'assets/imgs/partner_gold.png';
                        _this.imgs.img5 = 'assets/imgs/agent_gold.png';
                    }
                }
                else if (data.error_code == 3) {
                    _this.rlogin.rLoginProcessWithHistory(_this.navCtrl);
                }
                else {
                    _this.noticeSer.showToast('数据获取异常：' + data.error_message);
                }
            });
        }
    };
    MywalletPage.prototype.viewLog = function (type) {
        this.navCtrl.push('MoneyrecordPage', {
            type: type
        });
    };
    MywalletPage.prototype.viewSplit = function () {
        this.navCtrl.push('SplitinitPage');
    };
    MywalletPage.prototype.transferElec = function () {
        this.navCtrl.push('ElectransferPage');
    };
    MywalletPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mywallet',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\mywallet\mywallet.html"*/'<!--\n\n  Generated template for the MywalletPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>我的钱包</ion-title>\n\n    <ion-buttons end *ngIf="canGoHome == \'1\'">\n\n        <button ion-button [navPush]=\'myHome\'>\n\n          <ion-icon name=\'home\'></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content style="background: #eeeeee;">\n\n  <!-- <div style="background-color: #7c97ff;position: relative;height: 20.7rem;"> -->\n\n      <div style="background-color: #f53d3d;position: relative;height: 20.7rem;">\n\n  <div class="rank_parent_div">\n\n\n\n  <div class="img_div" id="templateDiv">\n\n      <!-- assets/imgs/free_dark@2x.png -->\n\n  <img  [src]="imgs.img1">\n\n  <span>免费</span>\n\n  </div>\n\n  <div class="update_line"></div>\n\n\n\n  <div class="img_div">\n\n  <img  [src]="imgs.img2">\n\n  <span>绿色</span>\n\n  </div>\n\n  <div class="update_line"></div>\n\n\n\n\n\n  <div class="img_div">\n\n  <img  [src]="imgs.img3" style="margin-bottom:3px;">\n\n  <span>VIP</span>\n\n  </div>\n\n  <div class="update_line"></div>\n\n  \n\n  <div class="img_div">\n\n  <img  [src]="imgs.img4">\n\n  <span>准代</span>\n\n  </div>\n\n  <div class="update_line"></div>\n\n\n\n  <div class="img_div">\n\n  <img  [src]="imgs.img5">\n\n  <span>代理</span>\n\n  </div>\n\n  </div>\n\n  <div class="greenchannel_time_limit" *ngIf="userInfo.isGCmember">绿色通道到期时间：{{userInfo.GCmemberExpireTime}}</div>\n\n  <div class="greenchannel_time_limit" *ngIf="!userInfo.isGCmember">小主，加油升级哦！</div>\n\n  <div class="update_div" [navPush]=\'UpdaterankPage\'>\n\n  <img src="assets/imgs/upgrade@2x.png">\n\n  </div>\n\n  <!-- <div style="background-color: white;width: 80%;height: 10rem;position: absolute;top: 5rem;">\n\n  </div> -->\n\n  <div id="treasure">\n\n\n\n\n\n  <div class="title_div">\n\n    <img  src="assets/imgs/bg_l@2x.png" style="height: 60%;vertical-align:middle;">\n\n    <div style="height: 5rem;display: inline-block;vertical-align:middle;color: gold;font-size: 1.8rem;">我的财富</div>\n\n    <img  src="assets/imgs/bg_r@2x.png" style="height: 60%;vertical-align:middle;">\n\n  </div>\n\n\n\n\n\n  <div class="line_div"></div>\n\n\n\n\n\n  <div class="mygold">\n\n  \n\n  <div style="padding: 1rem;">\n\n  <div style="font-weight: bold;font-size: 2.5rem;text-align: center" *ngIf="userInfo.personDataMap">￥{{userInfo.personDataMap.RemainElecNum}}</div>\n\n  <div style="text-align: center;font-size: 1.8rem;">现金币</div>\n\n  </div>\n\n  <div class=\'treasure_img_div_parent\'>\n\n  <div class="treasure_img_div" [navPush]=\'RechargePage\'>\n\n      <img  src="assets/imgs/recharge.png">\n\n      <span>充值</span>\n\n      </div>\n\n      <div class="treasure_img_div" (tap)="transferElec()">\n\n      <img  src="assets/imgs/transferthepossessionof.png">\n\n      <span>转让</span>\n\n      </div>\n\n      <div class="treasure_img_div" [navPush]=\'WithdrawPage\'>\n\n      <img  src="assets/imgs/withdrawals.png">\n\n      <span>提现</span>\n\n      </div>\n\n      <div class="treasure_img_div" (tap)="viewLog(\'elec\')">\n\n      <img  src="assets/imgs/documentaryfilm.png">\n\n      <span>记录</span>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class="card-div" *ngIf="userInfo.personDataMap">\n\n  <div class="card-line" (tap)="viewLog(\'points\')">\n\n      <img  src="assets/imgs/money.png">\n\n      <span class="head-span">购物币</span>\n\n      <span class="content-span">{{userInfo.personDataMap.RemainPoints}}</span>\n\n      <ion-icon class="arrows" name="ios-arrow-forward"></ion-icon>\n\n    </div>\n\n    <div class="line-div"></div>\n\n    <div class="card-line" (tap)="viewLog(\'coupon\')">\n\n        <img  src="assets/imgs/red envelopes.png">\n\n        <div class="line-div"></div>\n\n        <span class="head-span">红包</span>\n\n        <span class="content-span">{{userInfo.personDataMap.Coupon}}</span>\n\n        <ion-icon class="arrows" name="ios-arrow-forward"></ion-icon>\n\n      </div>\n\n      <div class="line-div"></div>\n\n      <div class="card-line" (tap)="viewLog(\'vip\')">\n\n          <img  src="assets/imgs/integral.png">\n\n          <span class="head-span">消费积分</span>\n\n          <span class="content-span">{{userInfo.personDataMap.RemainVIPAmount}}</span>\n\n          <ion-icon class="arrows" name="ios-arrow-forward"></ion-icon>\n\n        </div>\n\n        <div class="line-div"></div>\n\n        <div class="card-line" *ngIf="userInfo.personDataMap.Lev == 3" (tap)="viewSplit()">\n\n            <img  src="assets/imgs/shunt.png">\n\n            <span class="head-span">分流额度</span>\n\n            <span class="content-span">{{userInfo.personDataMap.RemainStream}}</span>\n\n            <ion-icon class="arrows" name="ios-arrow-forward"></ion-icon>\n\n          </div>\n\n          <div class="line-div" *ngIf="userInfo.personDataMap.Lev == 3"></div>\n\n          <div class="card-line">\n\n              <img  src="assets/imgs/currency.png">\n\n              <span class="head-span">个人分值</span>\n\n              <span class="content-span">{{userInfo.personDataMap.TotalCost}}</span>\n\n            </div>\n\n          </div>\n\n</div>\n\n</div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\mywallet\mywallet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_http_services_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_rloginprocess_rloginprocess__["a" /* RloginprocessProvider */]])
    ], MywalletPage);
    return MywalletPage;
}());

//# sourceMappingURL=mywallet.js.map

/***/ }),
/* 338 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperateaddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_addressmodel_addressmodel__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_http_services_http_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_rloginprocess_rloginprocess__ = __webpack_require__(8);
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
 * Generated class for the OperateaddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OperateaddressPage = /** @class */ (function () {
    function OperateaddressPage(navCtrl, navParams, modalCtrl, noticeSer, storage, httpService, rlogin, alert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.noticeSer = noticeSer;
        this.storage = storage;
        this.httpService = httpService;
        this.rlogin = rlogin;
        this.alert = alert;
        this.isDefault = false;
        //传到modal的已填地址
        this.addressModal = {
            provinceId: 0,
            cityId: 0,
            regionId: 0,
            provinceName: '',
            cityName: '',
            regionName: ''
        };
    }
    OperateaddressPage.prototype.ionViewWillEnter = function () {
        if (this.navParams.get('id')) {
            this.title = '编辑地址';
            this.type = 1;
            this.initData(this.navParams.get('id'));
        }
        else {
            this.title = '添加新地址';
            this.type = 2;
        }
    };
    OperateaddressPage.prototype.chooseAddress = function () {
        var _this = this;
        this.modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__components_addressmodel_addressmodel__["a" /* AddressmodelComponent */], {
            addressModal: this.addressModal
        }, {
            showBackdrop: true,
            enableBackdropDismiss: true
        });
        this.modal.onDidDismiss(function (data) {
            if (data.type == 1) {
            }
            else {
                _this.addressModal = data.callbackData;
                _this.address = _this.addressModal.provinceName + ' ' + _this.addressModal.cityName + ' ' + _this.addressModal.regionName;
            }
        });
        this.modal.present();
    };
    OperateaddressPage.prototype.initData = function (id) {
        var _this = this;
        var token = this.storage.get('token');
        if (token) {
            var api = 'v1/AddressManager/getAddressOfUserById/' + token + '/' + id;
            this.httpService.requestData(api, function (data) {
                if (data.error_code == 0) {
                    var tempData = data.data;
                    _this.name = tempData.Name;
                    _this.phoneNum = tempData.Phone;
                    _this.addressDetail = tempData.DetailAddress;
                    _this.address = tempData.ProvinceName + ' ' + tempData.CityName + ' ' + tempData.RegionName;
                    //
                    _this.addressModal.provinceId = tempData.ProvinceId;
                    _this.addressModal.cityId = tempData.CityId;
                    _this.addressModal.regionId = tempData.RegionId;
                    _this.addressModal.provinceName = tempData.ProvinceName;
                    _this.addressModal.cityName = tempData.CityName;
                    _this.addressModal.regionName = tempData.RegionName;
                    _this.isDefault = tempData.IsDefault;
                }
                else if (data.error_code == 3) {
                    _this.rlogin.rLoginProcessWithHistory(_this.navCtrl);
                }
                else {
                    _this.noticeSer.showToast(data.error_message);
                }
            });
        }
    };
    OperateaddressPage.prototype.save = function () {
        var _this = this;
        if (!this.name) {
            this.noticeSer.showToast('姓名不可为空');
            return;
        }
        if (!this.phoneNum) {
            this.noticeSer.showToast('手机号不可为空');
            return;
        }
        if (!this.addressModal.provinceId) {
            this.noticeSer.showToast('地区请选择完整');
            return;
        }
        if (!this.addressModal.cityId) {
            this.noticeSer.showToast('地区请选择完整');
            return;
        }
        if (!this.addressModal.regionId) {
            this.noticeSer.showToast('地区请选择完整');
            return;
        }
        if (!this.addressDetail) {
            this.noticeSer.showToast('请输入详细地址');
            return;
        }
        var token = this.storage.get('token');
        var isDefault = 0;
        if (this.isDefault) {
            isDefault = 1;
        }
        if (token) {
            if (this.type == 2) {
                var api = 'v1/AddressManager/addAddressByUser';
                this.httpService.doPost(api, {
                    token: token,
                    ProvinceId: this.addressModal.provinceId,
                    CityId: this.addressModal.cityId,
                    RegionId: this.addressModal.regionId,
                    DetailAddress: this.addressDetail,
                    Name: this.name,
                    Phone: this.phoneNum,
                    IsDefault: isDefault
                }, function (data) {
                    if (data.error_code == 0) {
                        _this.noticeSer.showToast('保存成功');
                        _this.navCtrl.pop();
                    }
                    else if (data.error_code == 3) {
                        _this.rlogin.rLoginProcessWithHistory(_this.navCtrl);
                    }
                    else {
                        _this.noticeSer.showToast(data.error_message);
                    }
                });
            }
            else {
                var api = 'v1/AddressManager/updateAddressById';
                this.httpService.doPost(api, {
                    token: token,
                    Id: this.navParams.get('id'),
                    ProvinceId: this.addressModal.provinceId,
                    CityId: this.addressModal.cityId,
                    RegionId: this.addressModal.regionId,
                    DetailAddress: this.addressDetail,
                    Name: this.name,
                    Phone: this.phoneNum,
                    IsDefault: isDefault
                }, function (data) {
                    if (data.error_code == 0) {
                        _this.noticeSer.showToast('保存成功');
                        _this.navCtrl.pop();
                    }
                    else if (data.error_code == 3) {
                        _this.rlogin.rLoginProcessWithHistory(_this.navCtrl);
                    }
                    else {
                        _this.noticeSer.showToast(data.error_message);
                    }
                });
            }
        }
    };
    OperateaddressPage.prototype.delAddress = function () {
        var _this = this;
        if (this.type == 1) {
            var token_1 = this.storage.get('token');
            if (token_1) {
                this.alert.showAlert('你确定要删除该地址吗', '', [
                    {
                        text: '关闭',
                        handler: function () {
                        }
                    },
                    {
                        text: '确定',
                        handler: function () {
                            var api = 'v1/AddressManager/deleteAddressById';
                            _this.httpService.doPost(api, {
                                token: token_1,
                                id: _this.navParams.get('id')
                            }, function (data) {
                                if (data.error_code == 0) {
                                    _this.noticeSer.showToast('删除成功');
                                    _this.navCtrl.pop();
                                }
                                else if (data.error_code == 3) {
                                    _this.rlogin.rLoginProcessWithHistory(_this.navCtrl);
                                }
                                else {
                                    _this.noticeSer.showToast(data.error_message);
                                }
                            });
                        }
                    }
                ]);
            }
        }
    };
    OperateaddressPage.prototype.ionViewWillLeave = function () {
        var _this = this;
        if (this.modal) {
            this.modal.dismiss({ type: 1 });
        }
        else {
            setTimeout(function () {
                if (_this.modal) {
                    _this.modal.dismiss({ type: 1 });
                }
            }, 1000);
        }
    };
    OperateaddressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-operateaddress',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\operateaddress\operateaddress.html"*/'<!--\n\n  Generated template for the OperateaddressPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n\n    <div style="float:right;color: #f53d3d;" (tap)="save()">\n\n      保存\n\n    </div>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content style="background: #eeeeee;">\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label>收货人：</ion-label>\n\n      <ion-input type="text" [(ngModel)]="name" placeholder="请输入姓名"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>手&nbsp;&nbsp;&nbsp;&nbsp;机：</ion-label>\n\n      <ion-input type="number" [(ngModel)]="phoneNum" placeholder="请输入手机号"></ion-input>\n\n    </ion-item>\n\n    <button ion-item (tap)="chooseAddress()">\n\n      请选择地区：\n\n      <span>{{address}}</span>\n\n    </button>\n\n    <ion-item>\n\n      <ion-label>地&nbsp;&nbsp;&nbsp;&nbsp;址：</ion-label>\n\n      <ion-input type="text" [(ngModel)]="addressDetail" placeholder="街道号、楼牌号等"></ion-input>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label>设为默认地址</ion-label>\n\n      <ion-toggle [(ngModel)]="isDefault"></ion-toggle>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list  *ngIf="type == 1">\n\n    <ion-item (tap)="delAddress()">\n\n      <span class="del" >删除收货地址</span>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\operateaddress\operateaddress.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_http_services_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_rloginprocess_rloginprocess__["a" /* RloginprocessProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__["a" /* AlertProvider */]])
    ], OperateaddressPage);
    return OperateaddressPage;
}());

//# sourceMappingURL=operateaddress.js.map

/***/ }),
/* 339 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderhandletransferPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
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
 * Generated class for the OrderhandletransferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderhandletransferPage = /** @class */ (function () {
    function OrderhandletransferPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pageStackLength = this.navCtrl.length();
        if (this.navParams.get('type')) {
            this.type = this.navParams.get('type');
        }
        else {
            this.type = '1';
        }
    }
    OrderhandletransferPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.navParams.get('behindHandle')) {
            this.navBar.backButtonClick = function () {
                _this.navCtrl.popTo(_this.navCtrl.getByIndex(_this.pageStackLength - 2));
            };
        }
        if (this.type == '1') {
            //取消订单
            this.title = '取消成功';
            this.content = '订单取消成功啦！';
        }
        else if (this.type == '2') {
            //确认收货
            this.title = '确认成功';
            this.content = '订单已经确认收货啦！';
        }
        else if (this.type == '3') {
            //申请退款
            this.title = '申请成功';
            this.content = '订单已经成功申请退款啦！平台会在48小时内作出处理。';
        }
        else if (this.type == '4') {
            //申请退货
            this.title = '申请成功';
            this.content = '订单已经成功申请退货啦！平台会在48小时内作出处理。';
        }
        else {
            //评价成功
            this.title = '评价成功';
            this.content = '祝您购物愉快。';
        }
    };
    OrderhandletransferPage.prototype.myOrder = function () {
        this.navCtrl.push('OrdersPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Navbar */])
    ], OrderhandletransferPage.prototype, "navBar", void 0);
    OrderhandletransferPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-orderhandletransfer',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\orderhandletransfer\orderhandletransfer.html"*/'<!--\n\n  Generated template for the OrderhandletransferPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content style="background:#eeeeee;">\n\n<div class="card">\n\n<div class="content">{{content}}</div>\n\n  \n\n<div class="buttonsB" *ngIf = "type == \'1\'">\n\n    <div class="button" (tap)= "myOrder()">我的订单</div>\n\n</div>\n\n<!-- <div class="buttonsA" *ngIf = "type == \'2\'">\n\n    <div class="button" (tap)= "myOrder()">我的订单</div>\n\n    <div class="button">评价</div>\n\n</div> -->\n\n<div class="buttonsB" *ngIf = "type == \'2\'">\n\n    <div class="button" (tap)= "myOrder()">我的订单</div>\n\n</div>\n\n<div class="buttonsB" *ngIf = "type == \'3\'">\n\n    <div class="button" (tap)= "myOrder()">我的订单</div>\n\n</div>\n\n<div class="buttonsB" *ngIf = "type == \'4\'">\n\n    <div class="button" (tap)= "myOrder()">我的订单</div>\n\n</div>\n\n<div class="buttonsB" *ngIf = "type == \'5\'">\n\n    <div class="button" (tap)= "myOrder()">我的订单</div>\n\n</div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\orderhandletransfer\orderhandletransfer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], OrderhandletransferPage);
    return OrderhandletransferPage;
}());

//# sourceMappingURL=orderhandletransfer.js.map

/***/ }),
/* 340 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_config_config__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_verifypassword_verifypassword__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_rloginprocess_rloginprocess__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_weblink_weblink__ = __webpack_require__(18);
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
 * Generated class for the OrderlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderlistPage = /** @class */ (function () {
    function OrderlistPage(weblink, rlogin, passwordProvider, navCtrl, navParams, storage, httpService, toast, config) {
        this.weblink = weblink;
        this.rlogin = rlogin;
        this.passwordProvider = passwordProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.httpService = httpService;
        this.toast = toast;
        this.config = config;
        this.tempData = '';
        this.pageStackLength = 0;
        this.cancer = '';
        this.confirm = '';
        this.pageStackLength = this.navCtrl.length();
    }
    OrderlistPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        //接受从订单列表页传过来的参数
        var token = this.storage.get('token');
        if (token) {
            //api请求
            var api = 'v1/PersonalCenter/getOrderDetails/' + token + '/' + this.navParams.get('orderId');
            this.httpService.requestData(api, function (data) {
                if (data.error_code == 0) {
                    _this.tempData = data.data;
                    _this.orderData = data.data;
                }
                else if (data.error_code == 3) {
                    //抢登处理
                    _this.rlogin.rLoginProcess(_this.navCtrl);
                }
                else {
                    _this.toast.showToast(data.error_message);
                }
            });
        }
    };
    //申请退款
    OrderlistPage.prototype.pushrefund = function (orderNo, item) {
        this.navCtrl.push('RefundPage', {
            orderNo: this.navParams.get('orderNo'),
            item: this.navParams.get('item')
        });
    };
    //申请退货
    OrderlistPage.prototype.pushsale = function (orderNo, item) {
        this.navCtrl.push('RefundPage', {
            orderNo: this.navParams.get('orderNo'),
            item: this.navParams.get('item')
        });
    };
    //取消订单
    OrderlistPage.prototype.pushcancelOrder = function (item) {
        var _this = this;
        this.cancer = item.orderno;
        var token = this.storage.get('token');
        if (token) {
            //api请求
            var api = 'v1/PersonalCenter/cancelOrder/' + token;
            //发送请求提交退款申请
            this.httpService.doFormPost(api, { orderNo: this.cancer }, function (data) {
                if (data.error_code == 0) {
                    //取消订单后
                    _this.navCtrl.push('OrderhandletransferPage', { type: '1' });
                }
                else if (data.error_code == 3) {
                    //抢登处理
                    _this.rlogin.rLoginProcess(_this.navCtrl);
                }
                else {
                    _this.toast.showToast(data.error_message);
                }
            });
        }
    };
    //确认收货
    OrderlistPage.prototype.confirmorder = function (item) {
        var _this = this;
        this.confirm = item.orderno;
        var token = this.storage.get('token');
        if (token) {
            //api请求
            var api = 'v1/PersonalCenter/confirmOrder/' + token;
            //发送请求提交退款申请
            this.httpService.doFormPost(api, { orderNo: this.confirm }, function (data) {
                if (data.error_code == 0) {
                    //确认收货后处理
                    _this.navCtrl.push('OrderhandletransferPage', { type: '2' });
                }
                else if (data.error_code == 3) {
                    //抢登处理
                    _this.rlogin.rLoginProcess(_this.navCtrl);
                }
                else {
                    _this.toast.showToast(data.error_message);
                }
            });
        }
    };
    //查看物流
    OrderlistPage.prototype.information = function (orderId, orderNo, item) {
        this.navCtrl.push('InformationPage', { orderId: orderId,
            orderNo: orderNo,
            item: item
        });
    };
    //立即支付
    OrderlistPage.prototype.payNow = function () {
        var _this = this;
        var api = "v2/PersonalCenter/HandleEOrder/" + this.storage.get('token');
        var params = {
            "orderNo": this.orderData.orderno
        };
        this.httpService.doFormPost(api, params, function (data) {
            if (data.data.type == 1) {
                //使用虚拟货币未使用钱 
                _this.passwordProvider.execute(_this.navCtrl, function () {
                    var api = "v1/PersonalCenter/syncHandleOrder/" + _this.storage.get('token');
                    var params = {
                        "orderNo": data.data.datas
                    };
                    _this.httpService.doFormPost(api, params, function (data) {
                        if (data.error_code == 0) {
                            _this.navCtrl.push('PaysuccessPage', {
                                "orderType": "1"
                            });
                        }
                        else if (data.error_code == 3) {
                            _this.rlogin.rLoginProcess(_this.navCtrl);
                        }
                        else {
                            _this.toast.showToast(data.error_message);
                        }
                    });
                });
            }
            else if (data.data.type == 2) {
                //使用钱
                _this.weblink.wxGoWebPay(_this.storage.get('token'), data.data.datas.orderNoC, data.data.datas.realpay, data.data.datas.orderType);
            }
            else if (data.data.type == 3) {
                //使用虚拟货币使用钱
                _this.passwordProvider.execute(_this.navCtrl, function () {
                    _this.navCtrl.push('PaymentPage', {
                        "orderNo": data.data.datas.orderNo,
                        "realpay": data.data.datas.realpay,
                        "orderType": data.data.datas.orderType
                    });
                });
            }
        });
    };
    OrderlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-orderlist',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\orderlist\orderlist.html"*/'<!--\n\n  Generated template for the OrderlistPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>订单详情</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n\n\n    <div class="head">\n\n        <span *ngIf="tempData.curstatus == -3">退货成功</span>\n\n        <span *ngIf="tempData.curstatus==-2">订单已取消</span>\n\n        <span *ngIf="tempData.curstatus==-1">等待买家付款</span>\n\n        <span *ngIf="tempData.curstatus==0">待发货</span>\n\n        <span *ngIf="tempData.curstatus==1">待收货</span>\n\n        <span *ngIf="tempData.curstatus==2">待评价</span>\n\n        <span *ngIf="tempData.curstatus == 3">完成</span>\n\n        <span *ngIf="tempData.curstatus == 4">申请退货中</span>\n\n        <span *ngIf="tempData.curstatus == 5">申请退款中</span>\n\n    </div>\n\n\n\n    <div class="address">\n\n        <div>\n\n            {{tempData.receivername}}&nbsp;<span>{{tempData.receiverphone}}</span>\n\n        </div>\n\n        <div>\n\n            {{tempData.provincename}}{{tempData.cityname}}{{tempData.regionname}}{{tempData.address}}\n\n        </div>\n\n    </div>\n\n\n\n    <div class="center" *ngFor="let item1 of tempData.orderlines">\n\n            <img [src]="config.domain+item1.photo" />\n\n            <div class="productName">{{item1.productname}}</div>\n\n            <div class="productPrice">\n\n                ￥<span>{{item1.price}}</span>\n\n            </div>\n\n            <div class="productNum">\n\n                <span>x{{item1.productnum}}</span>\n\n            </div>\n\n        </div>\n\n    <ion-list>\n\n        <ion-item style="font-size:14px">商品总额<span style="float:right;font-size:18px;color:#f53d3d;" class="cc">￥{{tempData.totalamount}}</span></ion-item>\n\n        <ion-item style="font-size:14px">运费<span style="float:right;color:#f53d3d;font-size:14px" class="cc">包邮</span></ion-item>\n\n        <ion-item style="font-size:14px">现金红包抵扣<span style="float:right;color:#f53d3d;font-size:14px" class="cc">{{tempData.usecoupon}}</span></ion-item>\n\n        <ion-item style="font-size:14px">现金币抵扣<span style="float:right;color:#f53d3d;font-size:14px" class="cc">{{tempData.useelecnum}}</span></ion-item>\n\n        <ion-item style="font-size:14px">购物币抵扣<span style="float:right;color:#f53d3d;font-size:14px" class="cc">{{tempData.usevipremainnum}}</span></ion-item>\n\n        <ion-item style="font-size:14px">消费积分抵扣<span style="float:right;color:#f53d3d;font-size:14px" class="cc">{{tempData.freight}}</span></ion-item>\n\n        <ion-item style="font-size:14px">实付款<span style="float:right;color:#f53d3d;font-size:14px" class="cc">￥{{tempData.realpay}}</span></ion-item>\n\n\n\n        <ion-item style="font-size:14px">订单号<p style="float:right" class="cc">{{tempData.orderno}}</p>\n\n        </ion-item>\n\n        <div *ngIf="tempData.curstatus==-3">\n\n            <button class="col-cc">完成</button>\n\n        </div>\n\n        <div *ngIf="tempData.curstatus==-2">\n\n            <button class="col-cc">订单已取消</button>\n\n        </div>\n\n        <div *ngIf="tempData.curstatus==-1">\n\n            <button class="col-cc" (tap)="pushcancelOrder(tempData,tempData.id)">取消订单</button>\n\n            <button class="col-cc" (tap)="payNow()">立即支付</button>\n\n        </div>\n\n        <div *ngIf="tempData.curstatus==0">\n\n            <button class="col-cc" (tap)="pushrefund(tempData.orderno,tempData)">申请退款</button>\n\n        </div>\n\n        <div *ngIf="tempData.curstatus==1">\n\n            <button class="col-cc" (tap)="information(tempData.id,tempData.orderno,tempData)">查看物流</button>\n\n            <button class="col-cc" (tap)="pushsale(tempData.orderno,tempData)">申请退货</button>\n\n            <button class="col-cc" (tap)="confirmorder(tempData)">确认收货</button>\n\n        </div>\n\n        <div *ngIf="tempData.curstatus==2">\n\n            <button class="col-cc">评价</button>\n\n        </div>\n\n        <div *ngIf="tempData.curstatus==3">\n\n            <button class="col-cc">完成</button>\n\n        </div>\n\n        <div *ngIf="tempData.curstatus==4">\n\n            <button class="col-cc">申请退货中</button>\n\n        </div>\n\n        <div *ngIf="tempData.curstatus==5">\n\n            <button class="col-cc">申请退款中</button>\n\n        </div>\n\n    </ion-list>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\orderlist\orderlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__providers_weblink_weblink__["a" /* WeblinkProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_rloginprocess_rloginprocess__["a" /* RloginprocessProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_verifypassword_verifypassword__["a" /* VerifypasswordProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_config_config__["a" /* ConfigProvider */]])
    ], OrderlistPage);
    return OrderlistPage;
}());

//# sourceMappingURL=orderlist.js.map

/***/ }),
/* 341 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_config_config__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_rloginprocess_rloginprocess__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_verifypassword_verifypassword__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_weblink_weblink__ = __webpack_require__(18);
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
 * Generated class for the OrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrdersPage = /** @class */ (function () {
    function OrdersPage(weblink, rlogin, passwordProvider, navCtrl, navParams, storage, httpService, toast, config, toastCtrl, alertCtrl, re, el, rclogin) {
        this.weblink = weblink;
        this.rlogin = rlogin;
        this.passwordProvider = passwordProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.httpService = httpService;
        this.toast = toast;
        this.config = config;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.re = re;
        this.el = el;
        this.rclogin = rclogin;
        this.temp = [];
        this.typeData = 'all';
        this.page = 0;
        this.pageNum = 3;
        this.enable = true;
        this.cancer = '';
        this.confirm = '';
        if (this.navParams.get('type')) {
            this.typeData = this.navParams.get('type');
        }
    }
    //从订单页面到订单详情页
    OrdersPage.prototype.pushdetail = function (orderId, orderno, item) {
        this.navCtrl.push('OrderlistPage', { orderId: orderId,
            orderNo: orderno,
            item: item
        });
    };
    OrdersPage.prototype.changeCss = function (attrOne, attrs) {
        for (var index = 0; index < attrs.length; index++) {
            this.re.setStyle(attrs[index], 'color', '#555555');
            this.re.setStyle(attrs[index], 'border-bottom', '0');
            this.re.setStyle(attrs[index], 'cursor ', 'auto');
        }
        this.re.setStyle(attrOne, 'color', '#f53d3d');
        this.re.setStyle(attrOne, 'border-bottom', '1px solid #f53d3d');
        this.re.setStyle(attrOne, 'cursor ', 'pointer');
    };
    OrdersPage.prototype.bindEvent = function (attrDom) {
        var _this = this;
        attrDom[0].onclick = function () {
            if (_this.typeData == 'all') {
                return;
            }
            _this.typeData = 'all';
            _this.changeCss(attrDom[0], attrDom);
            _this.initData();
        };
        attrDom[1].onclick = function () {
            if (_this.typeData == 'wp') {
                return;
            }
            _this.typeData = 'wp';
            _this.changeCss(attrDom[1], attrDom);
            _this.initData();
        };
        attrDom[2].onclick = function () {
            if (_this.typeData == 'ws') {
                return;
            }
            _this.typeData = 'ws';
            _this.changeCss(attrDom[2], attrDom);
            _this.initData();
        };
        attrDom[3].onclick = function () {
            if (_this.typeData == 'wr') {
                return;
            }
            _this.typeData = 'wr';
            _this.changeCss(attrDom[3], attrDom);
            _this.initData();
        };
        attrDom[4].onclick = function () {
            if (_this.typeData == 'wc') {
                return;
            }
            _this.typeData = 'wc';
            _this.changeCss(attrDom[4], attrDom);
            _this.initData();
        };
    };
    OrdersPage.prototype.ionViewDidLoad = function () {
        this.initData();
        //初始化数据后改变点击按钮颜色
        var attrDom = this.el.nativeElement.querySelectorAll('.col-demo');
        if (this.typeData == 'all') {
            this.changeCss(attrDom[0], attrDom);
        }
        if (this.typeData == 'wp') {
            this.changeCss(attrDom[1], attrDom);
        }
        if (this.typeData == 'ws') {
            this.changeCss(attrDom[2], attrDom);
        }
        if (this.typeData == 'wr') {
            this.changeCss(attrDom[3], attrDom);
        }
        if (this.typeData == 'wc') {
            this.changeCss(attrDom[4], attrDom);
        }
        this.bindEvent(attrDom);
    };
    OrdersPage.prototype.getData = function () {
        var _this = this;
        var token = this.storage.get('token');
        if (token) {
            var api = 'v1/PersonalCenter/getOrder/' + token + '/' + this.typeData;
            this.httpService.requestData(api, function (data) {
                if (data.error_code == 0) {
                    console.log(data);
                    for (var i = 0; i < data.data.length; i++) {
                        _this.temp.push(data.data[i]);
                    }
                    if (data.data.length < _this.pageNum) {
                        //没有更多数据了
                        _this.enable = false;
                        if (_this.infiniteScroll) {
                            _this.infiniteScroll.enable(false);
                        }
                    }
                    _this.page++;
                }
                else if (data.error_code == 3) {
                    //抢登处理
                }
                else {
                    _this.toast.showToast(data.error_message);
                }
            }, { page: this.page, pageNum: this.pageNum });
        }
    };
    OrdersPage.prototype.initData = function () {
        //刚进入该页或者点击时页数置0
        this.page = 0;
        //刚进入该页或者点击时上拉加载置为可以
        this.enable = true;
        //从未下拉加载过就不执行
        if (this.infiniteScroll) {
            this.infiniteScroll.enable(this.enable);
        }
        //数据清空
        this.temp = [];
        this.getData();
    };
    //取消订单
    OrdersPage.prototype.pushcancelOrder = function (item, orderId) {
        var _this = this;
        this.cancer = item.orderno;
        var token = this.storage.get('token');
        if (token) {
            //api请求
            var api = 'v1/PersonalCenter/cancelOrder/' + token;
            this.httpService.doFormPost(api, { orderNo: this.cancer }, function (data) {
                if (data.error_code == 0) {
                    _this.navCtrl.push('OrderhandletransferPage', { type: '1' });
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
    //支付订单
    OrdersPage.prototype.payNow = function (orderno) {
        var _this = this;
        var alert = this.alertCtrl.create({
            subTitle: '确定支付订单吗？',
            buttons: ['取消',
                {
                    text: '确定',
                    handler: function () {
                        _this.realpayNow(orderno);
                    }
                }]
        });
        alert.present();
    };
    //立即支付
    OrdersPage.prototype.realpayNow = function (orderno) {
        var _this = this;
        var api = "v2/PersonalCenter/HandleEOrder/" + this.storage.get('token');
        var params = {
            "orderNo": orderno
        };
        this.httpService.doFormPost(api, params, function (data) {
            console.log(data);
            if (data.data.type == 1) {
                //使用虚拟货币未使用钱 
                _this.passwordProvider.execute(_this.navCtrl, function () {
                    var api = "v1/PersonalCenter/syncHandleOrder/" + _this.storage.get('token');
                    var params = {
                        "orderNo": data.data.datas
                    };
                    _this.httpService.doFormPost(api, params, function (data) {
                        if (data.error_code == 0) {
                            _this.navCtrl.push('PaysuccessPage', {
                                "orderType": "1"
                            });
                        }
                        else if (data.error_code == 3) {
                            _this.rlogin.rLoginProcess(_this.navCtrl);
                        }
                        else {
                            _this.toast.showToast(data.error_message);
                        }
                    });
                });
            }
            else if (data.data.type == 2) {
                //使用钱
                _this.weblink.wxGoWebPay(_this.storage.get('token'), data.data.datas.orderNoC, data.data.datas.realpay, data.data.datas.orderType);
            }
            else if (data.data.type == 3) {
                //使用虚拟货币使用钱
                _this.passwordProvider.execute(_this.navCtrl, function () {
                    _this.navCtrl.push('PaymentPage', {
                        "orderNo": data.data.datas.orderNo,
                        "realpay": data.data.datas.realpay,
                        "orderType": data.data.datas.orderType
                    });
                });
            }
        });
    };
    //申请退款
    OrdersPage.prototype.pushrefund = function (orderId, orderNo, item) {
        this.navCtrl.push('RefundPage', { orderId: orderId,
            orderNo: orderNo,
            item: item
        });
    };
    //申请退货
    OrdersPage.prototype.pushsale = function (orderId, orderNo, item) {
        this.navCtrl.push('SalereturnPage', { orderId: orderId,
            orderNo: orderNo,
            item: item
        });
    };
    //确认收货
    OrdersPage.prototype.confirmorder = function (item) {
        var _this = this;
        this.confirm = item.orderno;
        var token = this.storage.get('token');
        if (token) {
            //api请求
            var api = 'v1/PersonalCenter/confirmOrder/' + token;
            //发送请求提交退款申请
            this.httpService.doFormPost(api, { orderNo: this.confirm }, function (data) {
                if (data.error_code == 0) {
                    _this.navCtrl.push('OrderhandletransferPage', { type: '2' });
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
    //查看物流
    OrdersPage.prototype.information = function (orderId, orderNo, item) {
        this.navCtrl.push('InformationPage', { orderId: orderId,
            orderNo: orderNo,
            item: item
        });
    };
    //评价
    OrdersPage.prototype.comment = function (orderId, orderNo, item) {
        this.navCtrl.push('CommentPage', {
            orderId: orderId,
            orderNo: orderNo,
            item: item
        });
    };
    //上拉加载数据
    OrdersPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        setTimeout(function () {
            _this.getData();
            infiniteScroll.complete();
            infiniteScroll.enable(_this.enable);
            //把下拉事件提出来
            _this.infiniteScroll = infiniteScroll;
        }, 1000);
    };
    //下拉刷新界面
    OrdersPage.prototype.doRefresh = function ($event) {
        var _this = this;
        setTimeout(function () {
            _this.initData();
            $event.complete();
            _this.toast.showToast('加载成功');
        }, 1000);
    };
    OrdersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-orders',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\orders\orders.html"*/'<!--\n\n  Generated template for the OrdersPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>我的订单</ion-title>\n\n    </ion-navbar>\n\n    <div class="row" id="sub_header">\n\n        <div class="col-demo" tabindex="1">全部</div>\n\n        <div class="col-demo" tabindex="2">待付款</div>\n\n        <div class="col-demo" tabindex="3">待发货</div>\n\n        <div class="col-demo" tabindex="4">待收货</div>\n\n        <div class="col-demo" tabindex="5">待评价</div>\n\n    </div>\n\n    <div class="transition">\n\n    </div>\n\n</ion-header>\n\n\n\n\n\n<ion-content style="background: #eeeeee;">\n\n    <div class="cardDiv" *ngFor="let item of temp">\n\n        <div class="head" *ngIf="item.curstatus == -3">退货成功</div>\n\n        <div class="head" *ngIf="item.curstatus == -2">交易取消</div>\n\n        <div class="head" *ngIf="item.curstatus == -1">待付款</div>\n\n        <div class="head" *ngIf="item.curstatus == 0">待发货</div>\n\n        <div class="head" *ngIf="item.curstatus == 1">待收货</div>\n\n        <div class="head" *ngIf="item.curstatus == 2">待评价</div>\n\n        <div class="head" *ngIf="item.curstatus == 3">完成</div>\n\n        <div class="head" *ngIf="item.curstatus == 4">申请退货中</div>\n\n        <div class="head" *ngIf="item.curstatus == 5">申请退款中</div>\n\n        <div class="center" *ngFor="let item1 of item.orderlines" (tap)="pushdetail(item.id,item.orderno,item)">\n\n            <img [src]="config.domain+item1.photo" />\n\n            <div class="productName">{{item1.productname}}</div>\n\n            <div class="productPrice">\n\n                ￥<span>{{item1.price}}</span>\n\n            </div>\n\n            <div class="productNum">\n\n                <span>x{{item1.productnum}}</span>\n\n            </div>\n\n        </div>\n\n\n\n        <div class="foot">共{{item.tolnum}}件商品&nbsp;合计:￥<span>{{item.totalamount}}</span></div>\n\n        <div class="btnDiv" *ngIf="item.curstatus==-1">\n\n            <div class="btn" (tap)="pushcancelOrder(item,item.id)">取消订单</div>\n\n            <div class="btn" (tap)="payNow(item.orderno)">立即支付</div>\n\n        </div>\n\n\n\n        <div class="btnDiv" *ngIf="item.curstatus==0">\n\n            <div class="btn" (tap)="pushrefund(item.id,item.orderno,item)">申请退款</div>\n\n        </div>\n\n        <div class="btnDiv" *ngIf="item.curstatus==1">\n\n            <div class="btn" (tap)="information(item.id,item.orderno,item)">查看物流</div>\n\n            <div class="btn" (tap)="confirmorder(item)">确认收货</div>\n\n            <div class="btn" (tap)="pushsale(item.id,item.orderno,item)">申请退货</div>\n\n        </div>\n\n        <div class="btnDiv" *ngIf="item.curstatus==2">\n\n            <div class="btn" (tap)="comment(item.id,item.orderno.item)">评价</div>\n\n        </div>\n\n    </div>\n\n\n\n\n\n    <!-- 下拉刷新 -->\n\n    <ion-refresher (ionRefresh)="doRefresh($event)" threshold="50px">\n\n        <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="下拉刷新" refreshingSpinner="circles"\n\n            refreshingText="刷新...">\n\n        </ion-refresher-content>\n\n        <ion-refresher-content>\n\n        </ion-refresher-content>\n\n    </ion-refresher>\n\n    <!--上滑的时候，加载数据-->\n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)" threshold="50px">\n\n        <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="加载中...">\n\n        </ion-infinite-scroll-content>\n\n    </ion-infinite-scroll>\n\n</ion-content>'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\orders\orders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__providers_weblink_weblink__["a" /* WeblinkProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_rloginprocess_rloginprocess__["a" /* RloginprocessProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_verifypassword_verifypassword__["a" /* VerifypasswordProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_6__providers_rloginprocess_rloginprocess__["a" /* RloginprocessProvider */]])
    ], OrdersPage);
    return OrdersPage;
}());

//# sourceMappingURL=orders.js.map

/***/ }),
/* 342 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_services_http_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rloginprocess_rloginprocess__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_weblink_weblink__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_wechat_wechat__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_config_config__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
///<reference path="../../services/jweixin.d.ts"/>
///<reference path="../../services/user_defined.d.ts"/>









/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaymentPage = /** @class */ (function () {
    function PaymentPage(navCtrl, navParams, httpService, storage, noticeSer, rloginprocess, webLink, wechat, config) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.storage = storage;
        this.noticeSer = noticeSer;
        this.rloginprocess = rloginprocess;
        this.webLink = webLink;
        this.wechat = wechat;
        this.config = config;
        this.way = 1;
        this.payPara = {
            openid: 'init',
            orderNo: '',
            realpay: '',
            orderType: ''
        };
        if (this.navParams.get('data')) {
            var tempData = this.navParams.get('data');
            this.payPara.orderNo = tempData["orderNo"];
            this.payPara.realpay = tempData["realpay"];
            this.payPara.orderType = tempData["orderType"];
        }
        else {
            var qs = this.getQueryString();
            this.payPara.openid = qs["openid"];
            this.payPara.orderNo = qs["orderno"];
            this.payPara.realpay = qs["realpay"];
            this.payPara.orderType = qs["ordertype"];
        }
    }
    PaymentPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.wechat.wxConfig(function () {
            _this.openWexinClient();
        });
    };
    PaymentPage.prototype.getQueryString = function () {
        var qs = location.search.substr(1), // 获取url中"?"符后的字串  
        args = {}, // 保存参数数据的对象
        items = qs.length ? qs.split("&") : [], // 取得每一个参数项,
        item = null, len = items.length;
        for (var i = 0; i < len; i++) {
            item = items[i].split("=");
            var name_1 = decodeURIComponent(item[0]), value = decodeURIComponent(item[1]);
            if (name_1) {
                args[name_1] = value;
            }
        }
        return args;
    };
    PaymentPage.prototype.wxpay = function () {
        // if (this.payPara.openid = 'init') {
        //   let token = this.storage.get('token');
        //   if (token) {
        //     let api = 'v1/PersonalCenter/GetPersonalInfo/' + token;
        //     this.httpService.requestData(api, (data) => {
        //       if (data.error_code == 0) {//请求成功
        //         let tempData = data.data;
        //         if (tempData['personDataMap'].WxOpenId != '') {
        //           //调支付
        //           this.payPara.openid = tempData['personDataMap'].WxOpenId;
        //           this.openWexinClient();
        //         } else {
        //           //微信授权获取openid
        //           let token = this.storage.get('token');
        //           if (token) {
        //             let orderNo = this.payPara.orderNo;
        //             let realpay = this.payPara.realpay;
        //             let orderType = this.payPara.orderType;
        //             let web_url: string = this.config.domain + "/zjapp/wechat/wechatauth.wxpaydo?token=" + token + "&orderno=" + orderNo + "&realpay=" + realpay + "&ordertype=" + orderType;
        //             // this.webLink.goWeb(web_url);
        //             window.location.href= web_url;
        //           }
        //         }
        //       } else if (data.error_code == 3) {//token过期
        //         this.rloginprocess.rLoginProcessWithHistory(this.navCtrl);
        //       }
        //       else {
        //         this.noticeSer.showToast('数据获取异常：' + data.error_message);
        //       }
        //     });
        //   }
        // } else {
        //   //调支付
        //   this.openWexinClient();
        // }
        this.openWexinClient();
    };
    PaymentPage.prototype.openWexinClient = function () {
        var _this = this;
        var apiUrl = "wechat/createwxpayparam.wxpaydo";
        this.httpService.doPost(apiUrl, {
            total_fee: this.payPara.realpay,
            out_trade_no: this.payPara.orderNo,
            type: this.payPara.orderType,
            openid: this.payPara.openid
        }, function (data) {
            if (data.error_code == 0) {
                var tempData = data.data;
                wx.chooseWXPay({
                    appId: tempData.appId,
                    timestamp: tempData.timeStamp,
                    nonceStr: tempData.nonceStr,
                    package: tempData.package,
                    signType: tempData.signType,
                    paySign: tempData.paySign,
                    success: function (res) {
                        _this.noticeSer.showToast(res.errMsg);
                        if (res.errMsg == 'ok') {
                            _this.goToSuccess();
                        }
                        else {
                            _this.noticeSer.showToast("支付失败");
                        }
                    }
                });
            }
            else {
                _this.noticeSer.showToast("后台签名微信支付异常");
            }
        });
    };
    PaymentPage.prototype.pay = function () {
        if (this.way == 1) {
            this.wxpay();
        }
    };
    PaymentPage.prototype.goToSuccess = function () {
        this.navCtrl.push('PaysuccessPage', {
            orderType: this.payPara.orderType
        });
    };
    PaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-payment',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\payment\payment.html"*/'<!--\n\n  Generated template for the PaymentPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n\n\n\n\n  https://ionicframework.com/docs/components/#radio\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>选择支付方式</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content style="background: #eeeeee;">\n\n        <ion-list inset radio-group [(ngModel)]="way">\n\n            <ion-item-divider >\n\n              支付方式\n\n            </ion-item-divider>           \n\n            \n\n            <ion-item>\n\n                <ion-avatar item-start>\n\n                  <img src="assets/imgs/weixinpay.png">\n\n                </ion-avatar>            \n\n                <ion-label>微信支付(暂未开通)</ion-label>  \n\n                <ion-radio value="1"></ion-radio>\n\n            </ion-item>\n\n            <ion-item>\n\n            </ion-item>\n\n      </ion-list>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <div class="payment" (tap) = "pay()">\n\n      支付       \n\n    </div>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\payment\payment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_services_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_rloginprocess_rloginprocess__["a" /* RloginprocessProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_weblink_weblink__["a" /* WeblinkProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_wechat_wechat__["a" /* WechatProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_config_config__["a" /* ConfigProvider */]])
    ], PaymentPage);
    return PaymentPage;
}());

//# sourceMappingURL=payment.js.map

/***/ }),
/* 343 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaysuccessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
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
 * Generated class for the PaysuccesspagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaysuccessPage = /** @class */ (function () {
    function PaysuccessPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.orderType = '2';
        if (this.navParams.get('orderType')) {
            this.orderType = this.navParams.get('orderType');
        }
    }
    PaysuccessPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad');
    };
    PaysuccessPage.prototype.goToMyWallet = function () {
        this.navCtrl.push('MywalletPage', {
            withoutRoot: 'withoutRoot'
        });
    };
    PaysuccessPage.prototype.goToOrders = function () {
        this.navCtrl.push('OrdersPage', {
            withoutRoot: 'withoutRoot'
        });
    };
    PaysuccessPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-paysuccess',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\paysuccess\paysuccess.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>完成支付</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content style="background: #eeeeee;">\n\n        <img class="img" src="assets/imgs/success3.jpg"/>\n\n            <button class="home_button" ion-button block color="danger" onclick="globalGoRoot()">返回首页</button>\n\n            <button class="other_button" ion-button block color="danger" *ngIf="orderType==\'1\'" (tap)="goToOrders()">返回订单</button>\n\n            <button class="other_button" ion-button block color="danger" *ngIf="orderType==\'2\'" (tap)="goToMyWallet()">查看现金</button>\n\n            <button class="other_button" ion-button block color="danger" *ngIf="orderType==\'3\'" (tap)="goToMyWallet()">查看等级</button>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\paysuccess\paysuccess.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], PaysuccessPage);
    return PaysuccessPage;
}());

//# sourceMappingURL=paysuccess.js.map

/***/ }),
/* 344 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config_config__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_services_http_services__ = __webpack_require__(4);
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







var PersonalPage = /** @class */ (function () {
    function PersonalPage(navCtrl, navParams, storage, noticeSer, config, httpService, rlogin) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.noticeSer = noticeSer;
        this.config = config;
        this.httpService = httpService;
        this.rlogin = rlogin;
        this.UpdatephonenumPage = 'UpdatephonenumPage';
        this.userInfo = {
            userName: '',
            nickName: '',
            beInviteCode: '',
            headPhoto: ''
        };
        this.test = '';
    }
    PersonalPage.prototype.ionViewWillEnter = function () {
        this.refreshUser();
    };
    PersonalPage.prototype.refreshUser = function () {
        var _this = this;
        var token = this.storage.get('token');
        if (token) {
            var api = 'v1/PersonalCenter/GetPersonalInfo/' + token;
            this.httpService.requestData(api, function (data) {
                if (data.error_code == 0) {
                    var tempData = data.data;
                    _this.userInfo.userName = tempData['personDataMap'].UserName;
                    console.log(_this.userInfo.userName);
                    _this.userInfo.nickName = tempData['personDataMap'].NickName;
                    _this.userInfo.beInviteCode = tempData['personDataMap'].BeInviteCode;
                    _this.userInfo.headPhoto = tempData['personDataMap'].HeadPhoto;
                }
                else if (data.error_code == 3) {
                    _this.rlogin.rLoginProcessWithHistory(_this.navCtrl);
                }
                else {
                    _this.noticeSer.showToast('数据获取异常：' + data.error_message);
                }
            });
        }
    };
    PersonalPage.prototype.setAttr = function (type) {
        this.navCtrl.push('SetattrPage', { type: type });
    };
    PersonalPage.prototype.loginOut = function () {
        //用户信息保存在localstorage
        this.storage.remove('token');
        this.storage.remove('userInfo');
        //跳转到用户中心
        this.navCtrl.popToRoot();
    };
    PersonalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-personal',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\personal\personal.html"*/'<!--\n\n  Generated template for the PersonalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>账户管理</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content style="background: #eeeeee;">\n\n    <div class="card-div">\n\n      <div class="card-line-head">\n\n        <span class="head-span">头像</span>\n\n        <img  [src]="config.domain+userInfo.headPhoto" onerror="this.src=\'assets/imgs/user.png\'" style="float: right;margin-top: 0.5rem;">\n\n      </div>\n\n      <div class="line-div"></div>\n\n      <div class="card-line" (tap)="setAttr(1)">\n\n          <span class="head-span">昵称</span>\n\n          <span class="content-span">{{userInfo.nickName}}</span>\n\n          <ion-icon class="arrows" name="ios-arrow-forward"></ion-icon>\n\n        </div>\n\n        <div class="line-div"></div>\n\n        <div class="card-line" *ngIf="userInfo.beInviteCode != 0">\n\n            <span class="head-span">推荐人</span>\n\n            <span class="content-span">{{userInfo.beInviteCode}}</span>\n\n            \n\n        </div>\n\n        <div class="card-line" *ngIf="userInfo.beInviteCode == 0" (tap)="setAttr(2)">\n\n          <span class="head-span">推荐人</span>\n\n          <span class="content-span">去设置</span>\n\n          <ion-icon class="arrows" name="ios-arrow-forward"></ion-icon>\n\n      </div>\n\n        <div class="line-div"></div>\n\n        <div class="card-line" [navPush]=\'UpdatephonenumPage\'>\n\n              <span class="head-span">更换手机号</span>\n\n              <span class="content-span">{{userInfo.userName}}</span>\n\n              <ion-icon class="arrows" name="ios-arrow-forward"></ion-icon>\n\n        </div>\n\n      </div>\n\n        \n\n    <button ion-button block color="danger" class="login_btn" (tap)="loginOut()">退出登录</button>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\personal\personal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_http_services_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_rloginprocess_rloginprocess__["a" /* RloginprocessProvider */]])
    ], PersonalPage);
    return PersonalPage;
}());

//# sourceMappingURL=personal.js.map

/***/ }),
/* 345 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductCommentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_services_http_services__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductCommentPage = /** @class */ (function () {
    function ProductCommentPage(httpservice, config, storage, navCtrl, navParams) {
        this.httpservice = httpservice;
        this.config = config;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.commentArray = new Array();
        this.page = 0;
        this.pageNum = 6;
        this.type = "all";
        this.hasComment = false;
        this.enable = true;
        this.id = navParams.get("id");
        if (this.id == null) {
            this.id = storage.getSessionStorage("productcommentId");
        }
        storage.setSessionStorage("productcommentId", this.id);
    }
    ProductCommentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductCommentPage');
    };
    ProductCommentPage.prototype.ionViewWillEnter = function () {
        this.getComment('');
    };
    ProductCommentPage.prototype.getComment = function (infiniteScroll) {
        var _this = this;
        var api = "v1/ProductManager/getProductCommentById";
        var params = {
            "productId": this.id,
            "page": this.page,
            "pageNum": this.pageNum,
            "type": this.type
        };
        this.httpservice.requestData(api, function (data) {
            if (data.error_code == 0) {
                console.log(data.data.productComments);
                if (_this.page == 0) {
                    _this.commentArray = data.data.productComments;
                }
                else {
                    _this.commentArray = _this.commentArray.concat(data.data.productComments); /*拼接数据*/
                }
                if (_this.commentArray.length > 0) {
                    _this.hasComment = true;
                }
                else {
                    _this.hasComment = false;
                }
            }
            if (infiniteScroll) {
                //告诉ionic 请求数据完成
                infiniteScroll.complete();
                if (data.data.productComments.length <= 0) {
                    infiniteScroll.enable(false);
                }
            }
            ;
            _this.page++;
        }, params);
    };
    ProductCommentPage.prototype.goall = function () {
        if (this.infiniteScroll != undefined) {
            this.infiniteScroll.enable(true);
        }
        this.page = 0;
        this.type = "all";
        this.getComment('');
    };
    ProductCommentPage.prototype.gopic = function () {
        if (this.infiniteScroll != undefined) {
            this.infiniteScroll.enable(true);
        }
        this.page = 0;
        this.type = "withpicture";
        this.getComment('');
    };
    ProductCommentPage.prototype.gogood = function () {
        if (this.infiniteScroll != undefined) {
            this.infiniteScroll.enable(true);
        }
        this.page = 0;
        this.type = "good";
        this.getComment('');
    };
    ProductCommentPage.prototype.gososo = function () {
        if (this.infiniteScroll != undefined) {
            this.infiniteScroll.enable(true);
        }
        this.page = 0;
        this.type = "medium";
        this.getComment('');
    };
    ProductCommentPage.prototype.gobad = function () {
        if (this.infiniteScroll != undefined) {
            this.infiniteScroll.enable(true);
        }
        this.page = 0;
        this.type = "bad";
        this.getComment('');
    };
    //加载更多
    ProductCommentPage.prototype.doLoadMore = function (infiniteScroll) {
        var _this = this;
        setTimeout(function () {
            _this.getComment(infiniteScroll);
            infiniteScroll.complete();
            infiniteScroll.enable(_this.enable);
            _this.infiniteScroll = infiniteScroll;
        }, 1000);
    };
    ProductCommentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product-comment',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\product-comment\product-comment.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>评价列表</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div class="choice">\n\n    <div tappable (click)="goall()" [ngStyle]="{\'background-color\':type === \'all\' ? \'#e8550ef5\' : \'#f3e1db\' }">\n\n      全部\n\n    </div>\n\n    <div tappable (click)="gopic()" [ngStyle]="{\'background-color\':type === \'withpicture\' ? \'#e8550ef5\' : \'#f3e1db\' }">\n\n      有图\n\n    </div>\n\n    <div tappable (click)="gogood()" [ngStyle]="{\'background-color\':type === \'good\' ? \'#e8550ef5\' : \'#f3e1db\' }">\n\n      好评\n\n    </div>\n\n    <div tappable (click)="gososo()" [ngStyle]="{\'background-color\':type === \'medium\' ? \'#e8550ef5\' : \'#f3e1db\' }">\n\n      中评\n\n    </div>\n\n    <div tappable (click)="gobad()" [ngStyle]="{\'background-color\':type === \'bad\' ? \'#e8550ef5\' : \'#f3e1db\' }">\n\n      差评\n\n    </div>\n\n  </div>\n\n  <div style="margin-top: 60%" *ngIf="!hasComment">\n\n    <p style="text-align: center">空空如也～</p>\n\n  </div>\n\n  <ion-list *ngIf="hasComment">\n\n    <ng-container *ngFor="let item of commentArray">\n\n      <ion-item>\n\n        <div style="margin-top: 1rem;overflow: auto">\n\n            <div style="float: left;margin-left: 1rem" *ngIf="item.user!=null">\n\n                <img onerror="this.src=\'assets/imgs/user.png\'" class="headimg" src="{{config.domain+item.user.headphoto}}">\n\n                <p class="pname">{{item.user.truename}}</p>\n\n                <p class="">{{item.createtime}}</p>\n\n            </div>\n\n            <div style="float: left;margin-left: 1rem" *ngIf="item.user==null">\n\n                <img onerror="this.src=\'assets/imgs/user.png\'" class="headimg" src="">\n\n                <p class="pname">匿名用户</p>\n\n                <p class="">{{item.createtime}}</p>\n\n            </div>\n\n          </div>\n\n          <p style="margin-top: 0.8rem;margin-left: 0.8rem;margin-bottom: 1rem;overflow: auto;color: black;white-space: normal;">\n\n            {{item.memo}}\n\n          </p>\n\n         <div style="white-space: normal;">\n\n            <img  *ngFor="let pic of item.productCommentPhotos" style="width: 31%;margin-left: 2%;" src="{{config.domain+pic.photo}}">\n\n         </div>\n\n      </ion-item>\n\n    </ng-container>\n\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="doLoadMore($event)" thr>\n\n      <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="加载中...">\n\n      </ion-infinite-scroll-content>\n\n  </ion-infinite-scroll>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\product-comment\product-comment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_http_services_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], ProductCommentPage);
    return ProductCommentPage;
}());

//# sourceMappingURL=product-comment.js.map

/***/ }),
/* 346 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_services_http_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_car_modal_car_modal__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_car_member_car_member__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_share_share__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_storage_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_cart_cart__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





 /*转译html标签*/





var ProductDetailPage = /** @class */ (function () {
    function ProductDetailPage(renderer2, eleref, navCtrl, navParams, httpService, config, alertProvider, sanitizer, app, storage) {
        this.renderer2 = renderer2;
        this.eleref = eleref;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.config = config;
        this.alertProvider = alertProvider;
        this.sanitizer = sanitizer;
        this.app = app;
        this.storage = storage;
        this.focusList = []; /*数组 轮播图*/
        this.starList = []; /**星星个数 */
        this.beLongToVIP = false;
        this.username = "";
        this.headPic = "";
    }
    ProductDetailPage.prototype.ionViewDidLoad = function () {
        var footer = this.eleref.nativeElement.querySelector('.tfoot-left');
        var footerHeight = footer.offsetHeight;
        var buy = this.eleref.nativeElement.querySelector('.buy');
        var join = this.eleref.nativeElement.querySelector('.join');
        this.commentHeight = this.eleref.nativeElement.querySelector('.tcomment').offsetTop;
        this.detailHeight = this.eleref.nativeElement.querySelector('.tproductText').offsetTop;
        this.topHeight = this.eleref.nativeElement.querySelector('.t-title').offsetHeight;
        footerHeight = footerHeight + 2;
        footerHeight = footerHeight + 2;
        this.renderer2.setStyle(buy, 'height', footerHeight + 'px');
        this.renderer2.setStyle(join, 'height', footerHeight + 'px');
        this.id = this.navParams.get("id");
        if (this.id == undefined) {
        }
        else {
            this.storage.setSessionStorage("productId", this.id);
        }
    };
    ProductDetailPage.prototype.ionViewWillEnter = function () {
        this.starList = [];
        if (this.id == undefined) {
            this.id = this.storage.getSessionStorage("productId");
        }
        this.getFocus();
        this.getPicText();
    };
    /**获取商品详情 */
    ProductDetailPage.prototype.getFocus = function () {
        var _this = this;
        var api = "v1/ProductManager/getProductDetails";
        var param = { "productId": this.id };
        this.httpService.requestData(api, function (data) {
            if (data.error_code != 0) {
                _this.alertProvider.showAlert('数据获取异常', '', ['ok']);
                return;
            }
            _this.beLongToVIP = data.data.beLongToVIP;
            _this.product = data.data.product;
            _this.commentDetail = data.data.productComment;
            if (_this.commentDetail == null) {
                _this.commentDetail = {
                    "id": -1,
                    "createtime": "",
                    "memo": "还没有人评价呢，快来评价吧！",
                    "star": 0,
                    "productCommentPhotos": []
                };
            }
            else {
                if (_this.commentDetail.user == null) {
                    _this.username = "匿名用户";
                }
                else {
                    _this.username = _this.commentDetail.user.truename;
                    _this.headPic = _this.commentDetail.user.headphoto;
                }
            }
            _this.comment = _this.commentDetail.memo;
            if (_this.comment.length > 42) {
                _this.comment = _this.comment.substring(0, 41) + "...";
            }
            for (var i = 0; i < _this.commentDetail.star; i++) {
                _this.starList.push(1);
            }
            for (var i = 0; i < data.data.product.productphotos.length; i++) {
                _this.focusList.push(data.data.product.productphotos[i].photo);
            }
        }, param);
    };
    /**跳转评论页 */
    ProductDetailPage.prototype.goevaluation = function () {
        this.navCtrl.push('ProductCommentPage', {
            "id": this.id
        });
    };
    /**获取评论用户信息 */
    ProductDetailPage.prototype.getUserInfo = function () {
    };
    /*获取图文详情*/
    ProductDetailPage.prototype.getPicText = function () {
        var _this = this;
        var api = "v1/ProductManager/getProductImgAndText";
        var param = { "productId": this.id };
        this.httpService.requestData(api, function (data) {
            if (data.error_code != 0) {
                _this.alertProvider.showAlert('数据获取异常', '', ['ok']);
                return;
            }
            var reg = new RegExp("/upload", "g");
            var reg1 = new RegExp("https://appnew.zhongjianmall.com/", "g");
            _this.productText = data.data.replace(reg1, '');
            _this.productText = _this.productText.replace(reg, _this.config.domain + "/upload");
            // this.productText = data.data;
        }, param);
    };
    /**转译html标签 */
    ProductDetailPage.prototype.assembleHTML = function (strHTML) {
        return this.sanitizer.bypassSecurityTrustHtml(strHTML);
    };
    /*客服 */
    ProductDetailPage.prototype.goTel = function () {
        var title = "客服电话";
        var content = "0571-57183790";
        var ass = "";
        var buttons = [{
                text: "取消",
                role: 'cancle',
                handler: function () {
                }
            }, {
                text: "确认",
                role: "destructive",
                handler: function () {
                    window.location.href = "tel:" + content;
                }
            }];
        this.alertProvider.showMoreAlert(title, content, ass, buttons);
    };
    /**跳转购物车 */
    ProductDetailPage.prototype.goShop = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__pages_cart_cart__["a" /* CartPage */], {
            "isIndex": false
        });
    };
    /**加入购物车 */
    ProductDetailPage.prototype.joinShop = function () {
        if (this.beLongToVIP == false) {
            this.alertProvider.showAlertM(__WEBPACK_IMPORTED_MODULE_6__components_car_modal_car_modal__["a" /* CarModalComponent */], {
                "product": this.product
            });
        }
    };
    /**立即购买 */
    ProductDetailPage.prototype.goBuy = function () {
        if (this.beLongToVIP == false) {
            this.alertProvider.showAlertM(__WEBPACK_IMPORTED_MODULE_6__components_car_modal_car_modal__["a" /* CarModalComponent */], {
                "product": this.product
            });
        }
        else {
            this.alertProvider.showAlertM(__WEBPACK_IMPORTED_MODULE_7__components_car_member_car_member__["a" /* CarMemberComponent */], {
                "product": this.product
            });
        }
    };
    ProductDetailPage.prototype.choiceSpec = function () {
        if (this.beLongToVIP == false) {
            this.alertProvider.showAlertM(__WEBPACK_IMPORTED_MODULE_6__components_car_modal_car_modal__["a" /* CarModalComponent */], {
                "product": this.product
            });
        }
        else {
            this.alertProvider.showAlertM(__WEBPACK_IMPORTED_MODULE_7__components_car_member_car_member__["a" /* CarMemberComponent */], {
                "product": this.product
            });
        }
    };
    /**分享 */
    ProductDetailPage.prototype.share = function () {
        this.alertProvider.showAlertM(__WEBPACK_IMPORTED_MODULE_8__components_share_share__["a" /* ShareComponent */], this.product);
    };
    /**跳转头部 */
    ProductDetailPage.prototype.goProductDiv = function () {
        this.content.scrollTo(0, 0, 300);
    };
    /**跳转评价 */
    ProductDetailPage.prototype.goCommentDiv = function () {
        this.content.scrollTo(0, this.commentHeight + this.topHeight, 300);
    };
    ProductDetailPage.prototype.godetailDiv = function () {
        /**跳转详情 */
        this.content.scrollTo(0, this.detailHeight + this.topHeight, 300);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], ProductDetailPage.prototype, "content", void 0);
    ProductDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product-detail',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\product-detail\product-detail.html"*/'<ion-header>\n\n    <ion-toolbar>\n\n        <ion-segment mode="md">\n\n          <ion-segment-button navPop class="t-title1">\n\n              <ion-icon class="t-back" ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n\n          </ion-segment-button>\n\n          <ion-segment-button class="t-title" value="one" tappable (click)="goProductDiv()">\n\n            商品\n\n          </ion-segment-button>\n\n          <ion-segment-button class="t-title" value="two" tappable (click)="goCommentDiv()">\n\n            评价\n\n          </ion-segment-button>\n\n          <ion-segment-button class="t-title" value="three" tappable (click)="godetailDiv()">\n\n            详情\n\n          </ion-segment-button>\n\n          <ion-segment-button class="t-title" (tap)="share()">\n\n            <ion-icon  class="t-share" ios="md-share" md="md-share"></ion-icon>\n\n          </ion-segment-button>\n\n        </ion-segment>\n\n      </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n    <div class="adv">\n\n        <ion-slides *ngIf="focusList.length>0" pager loop="true" autoplay="3000">    \n\n            <ion-slide style="height: 100%" *ngFor="let item of focusList">\n\n                <img [src]="config.domain+item"/>\n\n            </ion-slide>         \n\n        </ion-slides>\n\n    </div>\n\n    <div class="tproduct" *ngIf="product">\n\n      <p>{{product.productname}}</p>\n\n      <span><em style="font-style: inherit;font-size: 0.01rem;padding-right: 0.17rem">¥</em>{{product.price}}</span>\n\n      <div>\n\n          <ul>\n\n              <li><ion-icon style="color:red" ios="ios-redBack"></ion-icon>{{product.elecnum/2}}</li>\n\n              <li>库存{{product.stocknum}}件</li>\n\n              <li *ngIf="product.placeofdelivery!=\'\'; else chain">{{product.placeofdelivery}}</li>\n\n              <ng-template #chain>\n\n                  <li style="float: right">中国</li>\n\n              </ng-template>           \n\n          </ul>\n\n      </div>\n\n    </div>\n\n    <div class="tchoice" tappable (click)="choiceSpec()">\n\n      <ul>\n\n        <li>请选择分类</li>\n\n        <li><img src="assets/icon/youjiantou.png"/></li>\n\n      </ul>\n\n    </div>\n\n    <div class="tcomment" tappable (click)="goevaluation()">\n\n        <ul>\n\n          <li>商品评价</li>\n\n          <li><img src="assets/icon/youjiantou.png"/></li>\n\n        </ul>\n\n        <div style="margin-top: 1rem;overflow: auto">\n\n          <div style="float: left;margin-left: 1rem;display: flex">\n\n              <img onerror="this.src=\'assets/imgs/user.png\'" class="headimg" src="{{config.domain+headPic}}">\n\n              <p class="pname">{{username}}</p>\n\n          </div>\n\n          <div style="float: right;margin-right: 0.5rem" *ngFor="let item of starList">\n\n             <ion-icon ios="ios-star" md="ios-star" style="color: red"></ion-icon>\n\n          </div>\n\n        </div>\n\n        <div style="margin-top: 0.4rem;margin-left: 0.8rem;margin-bottom: 1rem;overflow: auto">\n\n        {{comment}}\n\n        </div>\n\n    </div>\n\n    <div class="tproductText">\n\n      <span>\n\n        <ion-icon ios="ios-arrow-round-down" md="ios-arrow-round-down"></ion-icon>\n\n        <ion-icon ios="ios-arrow-round-down" md="ios-arrow-round-down"></ion-icon>\n\n        商品详情\n\n        <ion-icon ios="ios-arrow-round-down" md="ios-arrow-round-down"></ion-icon>\n\n        <ion-icon ios="ios-arrow-round-down" md="ios-arrow-round-down"></ion-icon>\n\n      </span>\n\n    </div>\n\n    <div [innerHTML]="assembleHTML(productText)"></div>\n\n</ion-content>\n\n<ion-footer>\n\n    <ion-toolbar style="padding: 0">\n\n      <div>\n\n        <div class="tfoot-left">\n\n          <a class="tfoot1" (tap)="goTel()">\n\n            <i><ion-icon class="t-back" ios="ios-客服"></ion-icon></i>\n\n            <p>客服</p>\n\n          </a>\n\n          <a class="tfoot2" (tap)="goShop()">\n\n            <i><ion-icon class="t-back" ios="ios-购物车"></ion-icon></i>\n\n            <p>购物车</p>\n\n          </a>\n\n        </div>  \n\n        <div class="tfoot-right">\n\n          <button class="join" ion-button (tap)="joinShop()" [ngStyle]="{\'background-color\':beLongToVIP === true ? \'#C0C0C0\' : \'#f53d3d\' }">加入购物车</button>\n\n          <button class="buy" ion-button (tap)="goBuy()">立即购买</button>\n\n        </div>\n\n      </div>\n\n      </ion-toolbar>\n\n  </ion-footer>'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\product-detail\product-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_services_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_9__providers_storage_storage__["a" /* StorageProvider */]])
    ], ProductDetailPage);
    return ProductDetailPage;
}());

//# sourceMappingURL=product-detail.js.map

/***/ }),
/* 347 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductlistPage = /** @class */ (function () {
    function ProductlistPage(storage, ele, render2, navCtrl, config, navParams, httpService) {
        this.storage = storage;
        this.ele = ele;
        this.render2 = render2;
        this.navCtrl = navCtrl;
        this.config = config;
        this.navParams = navParams;
        this.httpService = httpService;
        this.list = []; /*模拟商品数据*/
        this.cid = ''; /*获取分类id*/
        this.page = 0; /*分页*/
        this.priceFlag = false; /*价格排序方式，默认正序 */
        this.elecFlag = false; /*积分排序方式，默认正序 */
        this.selectTag = "sale"; /**默认按销量排序 */
        this.enable = true;
        this.tag = 1;
        //获取传值
        this.cid = this.navParams.get('id');
        this.categoryname = this.navParams.get('categoryname');
        if (this.cid != undefined) {
            storage.setSessionStorage("catoryId", this.cid);
            storage.setSessionStorage("catoryname", this.categoryname);
        }
        if (this.cid == undefined) {
            this.cid = this.storage.getSessionStorage("catoryId");
            this.categoryname = this.storage.getSessionStorage("catoryname");
        }
        this.getProductList('');
    }
    ProductlistPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var header = this.ele.nativeElement.querySelector('.title');
        var headerHeight = header.offsetHeight;
        setTimeout(function () {
            var sub = _this.ele.nativeElement.querySelector('.sub_header');
            _this.render2.setStyle(sub, "top", headerHeight + 'px');
        }, 100);
    };
    ProductlistPage.prototype.getProductList = function (infiniteScroll) {
        var _this = this;
        var api = 'v1/ProductManager/getProductOfCategory/' + this.cid;
        var params = {
            "type": this.tag,
            "page": this.page,
            "pageNum": 6
        };
        this.httpService.requestData(api, function (data) {
            if (_this.page == 0) {
                _this.list = data.data;
            }
            else {
                _this.list = _this.list.concat(data.data); /*拼接数据*/
            }
            if (infiniteScroll) {
                //告诉ionic 请求数据完成
                infiniteScroll.complete();
                if (data.data.length <= 0) {
                    infiniteScroll.enable(false);
                }
            }
            ;
            _this.page++;
        }, params);
    };
    //按价格排序
    ProductlistPage.prototype.search_price = function () {
        var _this = this;
        this.page = 1;
        if (this.infiniteScroll != undefined) {
            this.infiniteScroll.enable(true);
        }
        this.content.scrollToTop(0); /*回到顶部*/
        var api = 'v1/ProductManager/getProductOfCategory/' + this.cid;
        var tag;
        if (this.priceFlag) {
            tag = 3;
        }
        else {
            tag = 2;
        }
        var param = {
            "page": 0,
            "pageNum": 6,
            "type": tag
        };
        this.httpService.requestData(api, function (data) {
            _this.tag = tag;
            _this.list = data.data;
        }, param);
        this.priceFlag = !this.priceFlag;
        this.elecFlag = false;
        this.selectTag = 'price';
    };
    //按销量排序
    ProductlistPage.prototype.search_sale = function () {
        var _this = this;
        this.page = 1;
        if (this.infiniteScroll != undefined) {
            this.infiniteScroll.enable(true);
        }
        this.content.scrollToTop(0); /*回到顶部*/
        var api = 'v1/ProductManager/getProductOfCategory/' + this.cid;
        var param = {
            "page": 0,
            "pageNum": 6,
            "type": 1
        };
        this.httpService.requestData(api, function (data) {
            _this.list = data.data;
            _this.tag = 1;
        }, param);
        this.selectTag = "sale";
        this.elecFlag = false;
        this.priceFlag = false;
    };
    //按积分排序
    ProductlistPage.prototype.search_elec = function () {
        var _this = this;
        this.page = 1;
        if (this.infiniteScroll != undefined) {
            this.infiniteScroll.enable(true);
        }
        this.content.scrollToTop(0); /*回到顶部*/
        var api = 'v1/ProductManager/getProductOfCategory/' + this.cid;
        var tag;
        if (this.elecFlag) {
            tag = 6;
        }
        else {
            tag = 5;
        }
        var param = {
            "page": 0,
            "pageNum": 6,
            "type": tag
        };
        this.httpService.requestData(api, function (data) {
            _this.list = data.data;
            _this.tag = tag;
        }, param);
        this.elecFlag = !this.elecFlag;
        this.priceFlag = false;
        this.selectTag = 'elec';
    };
    //跳转详情页
    ProductlistPage.prototype.goProduct = function (id) {
        this.navCtrl.push('ProductDetailPage', {
            id: id
        });
    };
    //加载更多
    ProductlistPage.prototype.doLoadMore = function (infiniteScroll) {
        var _this = this;
        setTimeout(function () {
            _this.getProductList(infiniteScroll);
            infiniteScroll.complete();
            infiniteScroll.enable(_this.enable);
            _this.infiniteScroll = infiniteScroll;
        }, 1000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], ProductlistPage.prototype, "content", void 0);
    ProductlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-productlist',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\productlist\productlist.html"*/'<ion-header>\n\n\n\n  <ion-navbar class="title">\n\n        <ion-title>{{categoryname}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>       \n\n      <div class="list_content">\n\n        <div class="sub_header">\n\n          <div (tap)="search_sale()">\n\n            <span [ngClass]="{\'tcl\':selectTag==\'sale\'}">销量</span>\n\n          </div>\n\n          <div (tap)="search_price()" [ngClass]="{\'down\':priceFlag}" class="up">\n\n              <span [ngClass]="{\'tcl\':selectTag==\'price\'}">价格</span>\n\n          </div>\n\n          <div (tap)="search_elec()" [ngClass]="{\'down\':elecFlag}" class="up">\n\n              <span [ngClass]="{\'tcl\':selectTag==\'elec\'}">积分</span>\n\n          </div>\n\n      </div>\n\n    \n\n        <ion-list inset>\n\n          <ng-container *ngFor="let item of list">\n\n            <ion-item (tap)="goProduct(item.product.id)" class="tlist" *ngIf="item.product.productphotos.length>0">\n\n                <ion-thumbnail  item-left>\n\n                  <img [src]="config.domain+item.product.productphotos[0].photo"/>            \n\n                </ion-thumbnail>\n\n                <h2 class="tpn"> {{item.product.productname}}</h2>\n\n                <p class="tp">\n\n                    <span style="color:red">¥</span><span style="color: red;font-size: 1.8rem" class="price">&nbsp;{{item.product.price}}</span>\n\n                    <span style="float: right;"><ion-icon style="color: #e0532d;" name="ios-redBack"></ion-icon><span style="color:#e0532d;font-size: 1.2rem">&nbsp;{{item.product.elecnum}}</span></span>\n\n                </p>\n\n              </ion-item>\n\n          </ng-container>  \n\n        </ion-list>\n\n        <ion-infinite-scroll (ionInfinite)="doLoadMore($event)" thr>\n\n            <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="加载中...">\n\n            </ion-infinite-scroll-content>\n\n        </ion-infinite-scroll>\n\n      </div>\n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\productlist\productlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__["a" /* HttpServicesProvider */]])
    ], ProductlistPage);
    return ProductlistPage;
}());

//# sourceMappingURL=productlist.js.map

/***/ }),
/* 348 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProxyapplyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_services_http_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rloginprocess_rloginprocess__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_config_config__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_addressmodel_addressmodel__ = __webpack_require__(92);
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
 * Generated class for the CertificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProxyapplyPage = /** @class */ (function () {
    function ProxyapplyPage(navCtrl, navParams, httpService, storage, noticeSer, rlogin, config, el, sanitizer, re, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.storage = storage;
        this.noticeSer = noticeSer;
        this.rlogin = rlogin;
        this.config = config;
        this.el = el;
        this.sanitizer = sanitizer;
        this.re = re;
        this.modalCtrl = modalCtrl;
        //传到modal的已填地址
        this.addressModal = {
            provinceId: 0,
            cityId: 0,
            regionId: 0,
            provinceName: '',
            cityName: '',
            regionName: ''
        };
        this.strHTML = '';
        //限制上传
        this.canUpload = true;
        //预览
        this.tempPhoto1 = '';
        this.tempPhoto2 = '';
        this.tempPhoto3 = '';
    }
    ProxyapplyPage.prototype.ionViewWillEnter = function () {
        this.initData();
    };
    ProxyapplyPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        setTimeout(function () {
            _this.bindEvent();
        }, 200);
    };
    ProxyapplyPage.prototype.initData = function () {
        var _this = this;
        var token = this.storage.get('token');
        if (token) {
            var api = 'v1/MemberShip/initProxyApply/' + token;
            this.httpService.requestData(api, function (data) {
                if (data.error_code == 0) {
                    var tempData = data.data;
                    if (tempData.CurStatus == 0) {
                        _this.type = 1;
                        _this.tip = "代理申请审核中";
                        _this.name = tempData.Name;
                        _this.phoneNum = tempData.Phone;
                        _this.photoOne = tempData.Photo1;
                        _this.photoTwo = tempData.Photo2;
                        _this.photoThree = tempData.Photo3;
                        _this.address = tempData.ProvinceName + ' ' + tempData.CityName + ' ' + tempData.RegionName;
                        _this.addressDetail = tempData.Address;
                    }
                    else if (tempData.CurStatus == 1) {
                        _this.type = 1;
                        _this.tip = "代理申请审核通过";
                        _this.name = tempData.Name;
                        _this.phoneNum = tempData.Phone;
                        _this.photoOne = tempData.Photo1;
                        _this.photoTwo = tempData.Photo2;
                        _this.photoThree = tempData.Photo3;
                        _this.address = tempData.ProvinceName + ' ' + tempData.CityName + ' ' + tempData.RegionName;
                        _this.addressDetail = tempData.Address;
                    }
                    else if (tempData.CurStatus == -1) {
                        _this.type = 2;
                        _this.tip = "审核未通过,理由:" + tempData.RefuseReason;
                    }
                }
                else if (data.error_code == 3) {
                    _this.rlogin.rLoginProcessWithHistory(_this.navCtrl);
                }
                else if (data.error_code == -1) {
                    _this.type = 3;
                    _this.tip = "填写真实代理申请资料";
                }
                else {
                    _this.noticeSer.showToast(data.error_message);
                }
            });
        }
    };
    ProxyapplyPage.prototype.chooseAddress = function () {
        var _this = this;
        this.modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__components_addressmodel_addressmodel__["a" /* AddressmodelComponent */], {
            addressModal: this.addressModal
        }, {
            showBackdrop: true,
            enableBackdropDismiss: true
        });
        this.modal.onDidDismiss(function (data) {
            if (data.type == 1) {
            }
            else {
                _this.addressModal = data.callbackData;
                _this.address = _this.addressModal.provinceName + ' ' + _this.addressModal.cityName + ' ' + _this.addressModal.regionName;
            }
        });
        this.modal.present();
    };
    ProxyapplyPage.prototype.assembleHTML = function () {
        return this.sanitizer.bypassSecurityTrustHtml(this.strHTML);
    };
    ProxyapplyPage.prototype.upload = function () {
        var _this = this;
        if (this.canUpload) {
            var oFiles = this.el.nativeElement.querySelectorAll(".fileCss");
            var formData = new FormData();
            for (var i = 0, file = void 0; file = oFiles[i]; i++) {
                // 文件名称，文件对象   
                if (file.files[0] == null) {
                    this.noticeSer.showToast('请三张一起上传，谢谢');
                    return;
                }
                formData.append(file.name, file.files[0]);
            }
            //加上token
            var token = this.storage.get('token');
            formData.append('token', token);
            // 实例化一个AJAX对象
            var xhr = new XMLHttpRequest();
            xhr.onload = function (data) {
                if (xhr.readyState === xhr.DONE) {
                    if (xhr.status === 200) {
                        var responseObj = JSON.parse(xhr.responseText);
                        var i = 0;
                        for (var _i = 0, _a = responseObj.data; _i < _a.length; _i++) {
                            var item = _a[_i];
                            if (i == 0) {
                                _this.photoOne = item;
                            }
                            if (i == 1) {
                                _this.photoTwo = item;
                            }
                            if (i == 2) {
                                _this.photoThree = item;
                            }
                            i++;
                        }
                        _this.noticeSer.showToast("已上传，请进行申请");
                        _this.canUpload = false;
                        //上传成功后显示图片
                        _this.strHTML = "<img src='" + _this.config.domain + _this.photoOne + "'/>" +
                            "<img src='" + _this.config.domain + _this.photoTwo + "'/>" +
                            "<img src='" + _this.config.domain + _this.photoThree + "'/>";
                        //隐藏上传
                        _this.hideLabel();
                        //清除预览
                        var tempImg = _this.el.nativeElement.querySelector("#tempImg");
                        _this.re.setStyle(tempImg, 'display', 'none');
                        _this.tempPhoto1 = '';
                        _this.tempPhoto2 = '';
                        _this.tempPhoto3 = '';
                        //展示重新上传按钮
                        var reuploadButton = _this.el.nativeElement.querySelector('.reupload');
                        _this.re.setStyle(reuploadButton, 'display', 'block');
                        var loadButton = _this.el.nativeElement.querySelector('.upload');
                        _this.re.setStyle(loadButton, 'display', 'none');
                        setTimeout(function () {
                            _this.canUpload = true;
                            _this.el.nativeElement.querySelector('#progress').value = 0;
                        }, 10000);
                    }
                }
            };
            xhr.open("POST", this.config.apiUrl + "/v1/upload/batch", true);
            //进度条部分
            xhr.upload.onprogress = function (evt) {
                if (evt.lengthComputable) {
                    var percentComplete = Math.round(evt.loaded * 100 / evt.total);
                    _this.el.nativeElement.querySelector('#progress').value = percentComplete;
                }
            };
            // 发送表单数据
            xhr.send(formData);
        }
        else {
            this.noticeSer.showToast('您刚刚传过一次，请稍后上传');
        }
    };
    ProxyapplyPage.prototype.hideLabel = function () {
        var labels = this.el.nativeElement.querySelectorAll('.btn-upload');
        for (var _i = 0, labels_1 = labels; _i < labels_1.length; _i++) {
            var item = labels_1[_i];
            this.re.setStyle(item, 'display', 'none');
        }
    };
    ProxyapplyPage.prototype.showLabel = function () {
        var labels = this.el.nativeElement.querySelectorAll('.btn-upload');
        for (var _i = 0, labels_2 = labels; _i < labels_2.length; _i++) {
            var item = labels_2[_i];
            this.re.setStyle(item, 'display', 'block');
        }
    };
    ProxyapplyPage.prototype.bindEvent = function () {
        var _this = this;
        var oFiles = this.el.nativeElement.querySelectorAll(".fileCss");
        for (var _i = 0, oFiles_1 = oFiles; _i < oFiles_1.length; _i++) {
            var item = oFiles_1[_i];
            item.onchange = function (e) {
                var tempImg = _this.el.nativeElement.querySelector("#tempImg");
                _this.re.setStyle(tempImg, 'display', 'block');
                console.log(e.target);
                var read = new FileReader();
                read.readAsDataURL(e.target.files[0]);
                read.onload = function () {
                    var url = read.result;
                    if (e.target.id == 'fileOne') {
                        _this.tempPhoto1 = url.toString();
                    }
                    if (e.target.id == 'fileTwo') {
                        _this.tempPhoto2 = url.toString();
                    }
                    if (e.target.id == 'fileThree') {
                        _this.tempPhoto3 = url.toString();
                    }
                };
            };
        }
    };
    ProxyapplyPage.prototype.reupload = function () {
        this.showLabel();
        this.strHTML = '';
        var reuploadButton = this.el.nativeElement.querySelector('.reupload');
        this.re.setStyle(reuploadButton, 'display', 'none');
        var loadButton = this.el.nativeElement.querySelector('.upload');
        this.re.setStyle(loadButton, 'display', 'block');
    };
    ProxyapplyPage.prototype.confirm = function () {
        var _this = this;
        if (!this.name) {
            this.noticeSer.showToast('姓名不可为空');
            return;
        }
        if (!this.phoneNum) {
            this.noticeSer.showToast('手机号不可为空');
            return;
        }
        if (!this.addressModal.provinceId) {
            this.noticeSer.showToast('请选择省');
            return;
        }
        if (!this.addressModal.cityId) {
            this.noticeSer.showToast('请选择市');
            return;
        }
        if (!this.addressModal.regionId) {
            this.noticeSer.showToast('请选择区');
            return;
        }
        if (!this.addressDetail) {
            this.noticeSer.showToast('详细地址不可为空');
            return;
        }
        if (!this.photoOne) {
            this.noticeSer.showToast('请上传身份证，若已上传请耐心等待');
            return;
        }
        if (!this.photoTwo) {
            this.noticeSer.showToast('请上传身份证，若已上传请耐心等待');
            return;
        }
        if (!this.photoThree) {
            this.noticeSer.showToast('请上传身份证，若已上传请耐心等待');
            return;
        }
        var token = this.storage.get('token');
        var api = '';
        if (this.type == 3) {
            api = 'v1/MemberShip/addProxyApply/' + token;
        }
        else if (this.type == 2) {
            api = 'v1/MemberShip/updateProxyApply/' + token;
        }
        else {
            this.noticeSer.showToast('非法提交');
            return;
        }
        this.httpService.doPost(api, {
            name: this.name,
            phone: this.phoneNum,
            provinceid: this.addressModal.provinceId,
            cityid: this.addressModal.cityId,
            regionid: this.addressModal.regionId,
            address: this.addressDetail,
            photo1: this.photoOne,
            photo2: this.photoTwo,
            photo3: this.photoThree
        }, function (data) {
            if (data.error_code == 0) {
                _this.noticeSer.showToast('申请已提交，请耐心等待结果');
                _this.navCtrl.pop();
            }
            else if (data.error_code == 3) {
                _this.rlogin.rLoginProcessWithHistory(_this.navCtrl);
            }
            else {
                _this.noticeSer.showToast(data.error_message);
            }
        });
    };
    ProxyapplyPage.prototype.ionViewWillLeave = function () {
        var _this = this;
        if (this.modal) {
            this.modal.dismiss({ type: 1 });
        }
        else {
            setTimeout(function () {
                if (_this.modal) {
                    _this.modal.dismiss({ type: 1 });
                }
            }, 1000);
        }
    };
    ProxyapplyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-proxyapply',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\proxyapply\proxyapply.html"*/'<!--\n\n  Generated template for the CertificationPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>申请代理</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content style="background: #eeeeee;">\n\n  <ion-list>\n\n    <ion-item>\n\n      <span class="tip">{{tip}}</span>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-list *ngIf="type==2 || type ==3" style="border-radius:3rem;">\n\n    <ion-item>\n\n      <ion-label>姓名：</ion-label>\n\n      <ion-input type="text" [(ngModel)]="name" placeholder="请输入姓名"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>手机号：</ion-label>\n\n      <ion-input type="number" [(ngModel)]="phoneNum" placeholder="请输入手机号"></ion-input>\n\n    </ion-item>\n\n    <button ion-item (tap)="chooseAddress()">\n\n      请选择地区：\n\n      <span>{{address}}</span>\n\n    </button>\n\n    <ion-item>\n\n      <ion-label>详细地址：</ion-label>\n\n      <ion-input type="text" [(ngModel)]="addressDetail" placeholder="请输入详细地址"></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list *ngIf="type==1">\n\n    <ion-item>\n\n      <ion-label>姓名：</ion-label>\n\n      <ion-input type="text" [(ngModel)]="name" placeholder="请输入姓名" readonly></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>手机号：</ion-label>\n\n      <ion-input type="number" [(ngModel)]="phoneNum" placeholder="请输入手机号" readonly></ion-input>\n\n    </ion-item>\n\n    <button ion-item>\n\n      地区：\n\n      <span>{{address}}</span>\n\n    </button>\n\n    <ion-item>\n\n      <ion-label>详细地址：</ion-label>\n\n      <ion-input type="text" [(ngModel)]="addressDetail" placeholder="请输入详细地址" readonly></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-list>\n\n    <ion-item *ngIf="type==2 || type ==3">\n\n      <span>证件上传</span>\n\n      <button ion-button item-right (tap)="upload()" class="upload">上传</button>\n\n      <button ion-button item-right (tap)="reupload()" class="reupload">重新上传</button>\n\n    </ion-item>\n\n    <ion-item class="img" *ngIf="type==1">\n\n      <img [src]="config.domain+photoOne">\n\n      <img [src]="config.domain+photoTwo">\n\n      <img [src]="config.domain+photoThree">\n\n\n\n    </ion-item>\n\n    <ion-item class="img" *ngIf="type==2 || type ==3">\n\n      <div [innerHTML]="assembleHTML()"></div>\n\n      <label for="fileOne" class="btn-upload">身份证正面</label>\n\n      <input id="fileOne" class="fileCss" type="file" accept="image/*" name="file" />\n\n      <label for="fileTwo" class="btn-upload">身份证反面</label>\n\n      <input id="fileTwo" class="fileCss" type="file" accept="image/*" name="file" />\n\n      <label for="fileThree" class="btn-upload">营业执照</label>\n\n      <input id="fileThree" class="fileCss" type="file" accept="image/*" name="file" />\n\n    </ion-item>\n\n\n\n    <ion-item class="img" id="tempImg">\n\n      <img [src]="tempPhoto1">\n\n      <img [src]="tempPhoto2">\n\n      <img [src]="tempPhoto3">\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <progress value="0" max="100" id="progress" style="height: 20px; width: 100%" *ngIf="type==2 || type == 3"></progress>\n\n  <button ion-button block color="danger" class="confirm" (tap)="confirm()" *ngIf="type==2 || type == 3">申请</button>\n\n</ion-content>'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\proxyapply\proxyapply.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_http_services_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_rloginprocess_rloginprocess__["a" /* RloginprocessProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */]])
    ], ProxyapplyPage);
    return ProxyapplyPage;
}());

//# sourceMappingURL=proxyapply.js.map

/***/ }),
/* 349 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrcodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_services_http_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rloginprocess_rloginprocess__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_config_config__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
///<reference path="../../services/user_defined.d.ts"/>







var QrcodePage = /** @class */ (function () {
    function QrcodePage(config, rlogin, toast, storage, httpservice, navCtrl, navParams, rend, ele) {
        this.config = config;
        this.rlogin = rlogin;
        this.toast = toast;
        this.storage = storage;
        this.httpservice = httpservice;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rend = rend;
        this.ele = ele;
    }
    QrcodePage.prototype.ionViewDidLoad = function () {
        var card = this.ele.nativeElement.querySelector('.inGround');
        var top = this.ele.nativeElement.querySelector('.tcontent');
        var cardHeight = card.offsetHeight;
        cardHeight = cardHeight * 0.05;
        this.rend.setStyle(top, 'padding-top', cardHeight + 'px');
        var img = this.ele.nativeElement.querySelector('.headimg');
        var imgHeight = img.offsetHeight;
        imgHeight = imgHeight / 2;
        this.rend.setStyle(top, 'line-height', imgHeight + 'px');
        this.code = document.getElementById("code");
        this.codeWidth = this.code.offsetWidth;
        this.codeWidth = this.codeWidth * 0.5438;
        this.loadContent();
    };
    QrcodePage.prototype.loadContent = function () {
        var _this = this;
        var api = "v1/PersonalCenter/GetPersonalInfo/" + this.storage.get("token");
        this.httpservice.requestData(api, function (data) {
            if (data.error_code == 0) {
                _this.username = data.data.personDataMap.UserName;
                _this.sysId = data.data.personDataMap.InviteCode;
                _this.headpic = data.data.personDataMap.HeadPhoto;
                var content = "https://appnew.zhongjianmall.com/html/register.html?usercode=" + _this.sysId;
                setTimeout(function () {
                    global_wxFunciton.global_createCard(_this.code, _this.codeWidth, _this.codeWidth, content);
                }, 10);
            }
            else if (data.error_code == 3) {
                _this.rlogin.rLoginProcessWithHistory(_this.navCtrl);
            }
            else {
                _this.toast.showToast(data.error_message);
            }
        });
    };
    QrcodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-qrcode',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\qrcode\qrcode.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>我的名片</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <div class="ground">\n\n      <div class="inGround">\n\n          <div class="tcontent">\n\n              <img onerror="this.src=\'assets/imgs/user.png\'" class="headimg" src="{{config.domain+headpic}}">\n\n              <div>\n\n                  <p class="phone">{{username}}</p>\n\n                  <p class="id">众健ID:{{sysId}}</p>\n\n              </div>\n\n            </div>\n\n            <div id="code" style="width: 100%;margin-left: 20%;margin-top: 20%">\n\n            </div>\n\n      </div>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\qrcode\qrcode.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_rloginprocess_rloginprocess__["a" /* RloginprocessProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_http_services_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], QrcodePage);
    return QrcodePage;
}());

//# sourceMappingURL=qrcode.js.map

/***/ }),
/* 350 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RechargePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rloginprocess_rloginprocess__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_weblink_weblink__ = __webpack_require__(18);
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
 * Generated class for the RechargePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RechargePage = /** @class */ (function () {
    function RechargePage(navCtrl, navParams, renderer2, noticeSer, el, storage, httpService, rloginprocess, webLink) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.renderer2 = renderer2;
        this.noticeSer = noticeSer;
        this.el = el;
        this.storage = storage;
        this.httpService = httpService;
        this.rloginprocess = rloginprocess;
        this.webLink = webLink;
        this.money = '100';
        this.num = 0;
    }
    RechargePage.prototype.ionViewWillEnter = function () {
        this.num = 0;
    };
    RechargePage.prototype.choose = function ($event) {
        var moneyDiv = $event.target;
        var tempMoney = moneyDiv.innerHTML;
        if (!isNaN(tempMoney)) {
            this.num++;
            this.money = tempMoney;
            var flow_divs_array = this.el.nativeElement.querySelectorAll('.flow_divs');
            for (var i = 0; i < flow_divs_array.length; i++) {
                var children = flow_divs_array[i].children;
                for (var j = 0; j < children.length; j++) {
                    this.renderer2.setStyle(children[j], 'border', '');
                    this.renderer2.setStyle(children[j], 'box-shadow', '0 0.1rem 0.1rem #888888');
                }
            }
            this.renderer2.setStyle(moneyDiv, 'border', '1px solid #f53d3d');
            this.renderer2.setStyle(moneyDiv, 'box-shadow', '0 0');
        }
    };
    RechargePage.prototype.inputClick = function () {
        if (this.num == 0) {
            this.money = '';
            // this.renderer2.setStyle(moneyDiv,'innerHTML','');
            this.num++;
        }
    };
    RechargePage.prototype.pay = function () {
        var _this = this;
        var token = this.storage.get('token');
        if (token) {
            var apiUrl = "v2/MemberShip/createCOrderV2/" + token;
            this.httpService.doFormPost(apiUrl, { money: this.money }, function (data) {
                if (data.error_code == 0) {
                    var tempData = data.data;
                    _this.webLink.wxGoWebPay(token, tempData.orderNo, tempData.realpay, tempData.orderType);
                }
                else if (data.error_code == 3) {
                    _this.rloginprocess.rLoginProcessWithHistory(_this.navCtrl);
                }
                else {
                    _this.noticeSer.showToast(data.error_message);
                }
            });
        }
    };
    RechargePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recharge',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\recharge\recharge.html"*/'<!--\n\n  Generated template for the RechargePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>现金币充值</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content style="background: #eeeeee;">\n\n\n\n    <ion-list>\n\n  <ion-item>\n\n    <ion-label>充值金额：</ion-label>\n\n    <ion-input type="number" [(ngModel)]="money" id="money" (tap)="inputClick()"></ion-input>\n\n  </ion-item>\n\n</ion-list>\n\n\n\n  <div class="flow_divs" (tap)="choose($event)">\n\n    <div class="flow_div_first">100</div>\n\n    <div class="flow_div">500</div>\n\n    <div class="flow_div">1000</div>\n\n    <div class="flow_div">1500</div>\n\n\n\n  </div>\n\n\n\n  <div class="flow_divs" (tap)="choose($event)">\n\n    <div class="flow_div_first">3000</div>\n\n    <div class="flow_div">6000</div>\n\n    <div class="flow_div">12000</div>\n\n    <div class="flow_div">24000</div>\n\n  </div>\n\n\n\n  <!-- <button ion-button block color="danger" class="pay_button" ></button> -->\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <div class="payment" (tap)="pay()">\n\n      前往付款\n\n    </div>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\recharge\recharge.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_rloginprocess_rloginprocess__["a" /* RloginprocessProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_weblink_weblink__["a" /* WeblinkProvider */]])
    ], RechargePage);
    return RechargePage;
}());

//# sourceMappingURL=recharge.js.map

/***/ }),
/* 351 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RefundPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rloginprocess_rloginprocess__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_config_config__ = __webpack_require__(7);
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
 * Generated class for the RefundPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RefundPage = /** @class */ (function () {
    function RefundPage(navCtrl, navParams, config, storage, httpService, toast, rclogin) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.config = config;
        this.storage = storage;
        this.httpService = httpService;
        this.toast = toast;
        this.rclogin = rclogin;
        this.temp = '';
        this.getSelectedText = '';
    }
    RefundPage.prototype.ionViewWillEnter = function () {
        this.temp = this.navParams.get('item');
        console.log(this.temp);
    };
    RefundPage.prototype.confirm = function () {
        var _this = this;
        console.log(this.getSelectedText);
        var token = this.storage.get('token');
        if (token) {
            //api请求
            var api = 'v1/PersonalCenter/ApplyRefund/' + token;
            // +'?' + 'orderNo=' + this.navParams.get('orderNo') + '&' + 'memo=' + this.getSelectedText;
            console.log(api);
            //发送请求提交退款申请
            this.httpService.doFormPost(api, { orderNo: this.navParams.get('orderNo'), memo: this.getSelectedText }, function (data) {
                console.log(data);
                if (data.error_code == 0) {
                    //申请退款处理
                    _this.navCtrl.push('OrderhandletransferPage', { type: '3', behindHandle: 'behindHandle' });
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
    RefundPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-refund',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\refund\refund.html"*/'<!--\n\n  Generated template for the RefundPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>申请退款</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content style="background: #eeeeee;">\n\n        <ion-grid style="padding: 1px;width: 100%;" >\n\n            <div class="card-div">\n\n            <ion-row class="col_row">\n\n                <ion-col class="col_2" style="width: 100%"  *ngFor="let item of temp.orderlines">\n\n                    <img class="img" [src]="config.domain+item.photo">\n\n                    <div class="hp">\n\n                        <div> {{item.productname}}</div><br  />\n\n                            <div style="float:right;margin-top:-20px;">{{item.price}}元</div>  \n\n                    </div>\n\n                    <br />\n\n                    <br />\n\n                    <span class="hp" style="float:right">×{{item.productnum}}</span>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row class="col_row">\n\n               <ion-col>\n\n                  <ion-list>\n\n                      <ion-item>\n\n                        <ion-label>退款原因</ion-label>\n\n                        <ion-select [(ngModel)]=\'getSelectedText\' placeholder="至少一项">\n\n                          <ion-option value="拍错/不喜欢/效果不好">拍错/不喜欢/效果不好</ion-option>\n\n                          <ion-option value="质量问题/与图片不符">质量问题/与图片不符</ion-option>\n\n                          <ion-option value="其他">其他</ion-option>\n\n                        </ion-select>\n\n                      </ion-item>\n\n                          <br />  <br />  <br />  <br />  <br />  <br />  <br />  <br /> <br />\n\n                          <button ion-button   full color="danger" (tap)= "confirm()">提交</button>\n\n                    </ion-list>\n\n               </ion-col>\n\n            </ion-row>\n\n          </div>   \n\n            </ion-grid>\n\n  \n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\refund\refund.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_rloginprocess_rloginprocess__["a" /* RloginprocessProvider */]])
    ], RefundPage);
    return RefundPage;
}());

//# sourceMappingURL=refund.js.map

/***/ }),
/* 352 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__ = __webpack_require__(5);
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
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchPage = /** @class */ (function () {
    function SearchPage(ele, render2, navCtrl, navParams, config, httpService, storage, alertCtrl) {
        this.ele = ele;
        this.render2 = render2;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.config = config;
        this.httpService = httpService;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.flag = false; /*有没有关键词、关键词开关*/
        this.keywords = ''; /*关键词*/
        this.list = []; /*模拟商品数据*/
        this.page = 1; /*分页*/
        // public hasData=true;  /*是否有数据*/
        this.historyList = []; /*历史记录的数据*/
        this.priceFlag = false; /*价格排序方式，默认正序 */
        this.elecFlag = false; /*积分排序方式，默认正序 */
        this.selectTag = "sale"; /**默认按销量排序 */
        //获取历史记录
        this.getHistory();
    }
    SearchPage.prototype.ionViewDidLoad = function () {
    };
    SearchPage.prototype.getSearchList = function (infiniteScroll) {
        var _this = this;
        if (!infiniteScroll) {
            this.page = 1;
            // this.hasData=true; 
            this.content.scrollToTop(0); /*回到顶部*/
            //调用保存历史记录的方法
            this.saveHistory();
        }
        var api = 'v1/ProductManager/searchProduct';
        var param = { "key": this.keywords, "type": 1 };
        this.httpService.doFormPost(api, param, function (data) {
            if (_this.page == 1) {
                _this.list = data.data;
            }
            else {
                _this.list = _this.list.concat(data.data); /*拼接数据*/
            }
            _this.flag = true; /*显示商品列表*/
            if (_this.flag == true) {
                var header = _this.ele.nativeElement.querySelector('.tsearch');
                var headerHeight_1 = header.offsetHeight;
                setTimeout(function () {
                    var sub = _this.ele.nativeElement.querySelector('.sub_header');
                    headerHeight_1 = headerHeight_1 + 6;
                    _this.render2.setStyle(sub, "top", headerHeight_1 + 'px');
                }, 100);
                // console.log(sub);
            }
            if (infiniteScroll) {
                //告诉ionic 请求数据完成
                infiniteScroll.complete();
            }
        });
    };
    //按价格排序
    SearchPage.prototype.search_price = function () {
        var _this = this;
        this.content.scrollToTop(0); /*回到顶部*/
        var api = 'v1/ProductManager/searchProduct';
        var tag;
        if (this.priceFlag) {
            tag = 3;
        }
        else {
            tag = 2;
        }
        var param = { "key": this.keywords, "type": tag };
        this.httpService.doFormPost(api, param, function (data) {
            if (_this.page == 1) {
                _this.list = data.data;
            }
            else {
                _this.list = _this.list.concat(data.data); /*拼接数据*/
            }
            _this.flag = true; /*显示商品列表*/
        });
        this.priceFlag = !this.priceFlag;
        this.elecFlag = false;
        this.selectTag = 'price';
    };
    //按销量排序
    SearchPage.prototype.search_sale = function () {
        var _this = this;
        this.content.scrollToTop(0); /*回到顶部*/
        var api = 'v1/ProductManager/searchProduct';
        var param = { "key": this.keywords, "type": 1 };
        this.httpService.doFormPost(api, param, function (data) {
            if (_this.page == 1) {
                _this.list = data.data;
            }
            else {
                _this.list = _this.list.concat(data.data); /*拼接数据*/
            }
            _this.flag = true; /*显示商品列表*/
        });
        this.selectTag = "sale";
        this.elecFlag = false;
        this.priceFlag = false;
    };
    //按积分排序
    SearchPage.prototype.search_elec = function () {
        var _this = this;
        this.content.scrollToTop(0); /*回到顶部*/
        var api = 'v1/ProductManager/searchProduct';
        var tag;
        if (this.elecFlag) {
            tag = 6;
        }
        else {
            tag = 5;
        }
        var param = { "key": this.keywords, "type": tag };
        this.httpService.doFormPost(api, param, function (data) {
            if (_this.page == 1) {
                _this.list = data.data;
            }
            else {
                _this.list = _this.list.concat(data.data); /*拼接数据*/
            }
            _this.flag = true; /*显示商品列表*/
        });
        this.elecFlag = !this.elecFlag;
        this.priceFlag = false;
        this.selectTag = 'elec';
    };
    //跳转详情页
    SearchPage.prototype.goProduct = function (id) {
        this.navCtrl.push('ProductDetailPage', {
            id: id
        });
    };
    //点击历史记录执行的方法
    SearchPage.prototype.goSearch = function (keywords) {
        this.keywords = keywords;
        this.getSearchList('');
    };
    //加载更多
    SearchPage.prototype.doLoadMore = function (infiniteScroll) {
        this.getSearchList(infiniteScroll);
    };
    //保存历史记录
    SearchPage.prototype.saveHistory = function () {
        /*
          1.localStorage获取历史记录
        */
        var history = this.storage.get('historyData');
        //2.判断历史记录存在不存在
        if (history) {
            if (history.indexOf(this.keywords) == -1 && this.keywords != '') {
                history.push(this.keywords);
                //重新写入
                this.storage.set('historyData', history);
            }
        }
        else {
            if (this.keywords != '') {
                this.historyList.push(this.keywords);
                this.storage.set('historyData', this.historyList);
            }
        }
    };
    //获取历史记录
    SearchPage.prototype.getHistory = function () {
        var history = this.storage.get('historyData');
        if (history) {
            this.historyList = history;
            console.log(history);
        }
    };
    //删除历史记录
    SearchPage.prototype.removeHistory = function (keywords) {
        var _this = this;
        //提示
        var confirm = this.alertCtrl.create({
            title: '您确定要删除吗?',
            message: '您确定要删除这条历史记录吗，确定点击是，否则点击否。',
            buttons: [
                {
                    text: '否',
                    handler: function () {
                    }
                },
                {
                    text: '是',
                    handler: function () {
                        var index = _this.historyList.indexOf(keywords);
                        // console.log(index);
                        _this.historyList.splice(index, 1);
                        //写入到localstorage
                        _this.storage.set('historyData', _this.historyList);
                    }
                }
            ]
        });
        confirm.present();
    };
    /*清空历史记录*/
    SearchPage.prototype.localEmpty = function () {
        this.historyList.splice(0, this.historyList.length);
        this.storage.set('historyData', this.historyList);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], SearchPage.prototype, "content", void 0);
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\search\search.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-searchbar class="tsearch" [(ngModel)]="keywords"></ion-searchbar>  \n\n    <ion-buttons end>\n\n      <button ion-button (tap)=\'getSearchList()\' class="tbutton">\n\n         搜索\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="search_content" *ngIf="!flag">\n\n\n\n      <div class="hotlist">\n\n          \n\n              <h3 class="search_title">热搜</h3>\n\n              <p>\n\n                <span (tap)=\'goSearch("女装")\'>女装</span>\n\n                <span (tap)=\'goSearch("女装")\'>男装</span>\n\n                <span (tap)=\'goSearch("女装")\'>家具</span>\n\n                <span (tap)=\'goSearch("女装")\'>化妆品</span>\n\n                <span (tap)=\'goSearch("女装")\'>女装</span>\n\n                <span (tap)=\'goSearch("女装")\'>女装</span>\n\n                <span (tap)=\'goSearch("女装")\'>女装</span>\n\n                <span (tap)=\'goSearch("女装")\'>女装</span>\n\n                <span (tap)=\'goSearch("女装")\'>女装</span>\n\n              </p>        \n\n            </div>\n\n          \n\n            <!-- <div class="history" *ngIf="historyList.length>0"> -->\n\n            <div class="hotlist">\n\n              <div>\n\n                  <h3 class="search_title search_line">历史搜索</h3>\n\n                  <ion-icon ios="ios-trash" md="md-trash" class="ticon" (tap)="localEmpty()"></ion-icon>\n\n              </div>\n\n                 <p>\n\n                    <span *ngFor="let item of historyList" (press)="removeHistory(item)" (tap)="goSearch(item)">\n\n                      {{item}}\n\n                    </span>\n\n                 </p>\n\n            </div>\n\n\n\n  </div>\n\n  \n\n\n\n\n\n  <div class="list_content"  *ngIf="flag">\n\n\n\n      <div class="sub_header">\n\n          <div (tap)="search_sale()">\n\n            <span [ngClass]="{\'tcl\':selectTag==\'sale\'}">销量</span>\n\n          </div>\n\n          <div (tap)="search_price()" [ngClass]="{\'down\':priceFlag}" class="up">\n\n              <span [ngClass]="{\'tcl\':selectTag==\'price\'}">价格</span>\n\n          </div>\n\n          <div (tap)="search_elec()" [ngClass]="{\'down\':elecFlag}" class="up">\n\n              <span [ngClass]="{\'tcl\':selectTag==\'elec\'}">积分</span>\n\n          </div>\n\n      </div>\n\n\n\n       <ion-list inset>\n\n         <ng-container *ngFor="let item of list">\n\n            <ion-item (tap)="goProduct(item.product.id)" class="tlist" *ngIf="item.product.productphotos.length>0">\n\n                <ion-thumbnail  item-left>\n\n                  <img [src]="config.domain+item.product.productphotos[0].photo"/>            \n\n                </ion-thumbnail>\n\n                <h2 class="tpn"> {{item.product.productname}}</h2>\n\n                <p class="tp">\n\n                   <span style="color:red">¥</span><span style="color: red;font-size: 1.8rem" class="price">&nbsp;{{item.product.price}}</span>\n\n                   <span style="float: right;"><ion-icon style="color: #e0532d;" name="ios-redBack"></ion-icon><span style="color:#e0532d;font-size: 1.2rem">&nbsp;{{item.product.elecnum}}</span></span>\n\n                </p>\n\n              </ion-item>\n\n         </ng-container>  \n\n       </ion-list>\n\n\n\n\n\n       <!-- <ion-infinite-scroll (ionInfinite)="doLoadMore($event)" *ngIf="hasData">\n\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n      </ion-infinite-scroll> -->\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\search\search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),
/* 353 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetattrPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_services_http_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rloginprocess_rloginprocess__ = __webpack_require__(8);
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
 * Generated class for the SetattrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SetattrPage = /** @class */ (function () {
    function SetattrPage(navCtrl, navParams, storage, noticeSer, httpService, rlogin) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.noticeSer = noticeSer;
        this.httpService = httpService;
        this.rlogin = rlogin;
        this.type = this.navParams.get('type');
        if (this.type == 1) {
            this.title = '更改昵称';
        }
        else {
            this.title = '设置推荐人';
        }
    }
    SetattrPage.prototype.ionViewWillEnter = function () {
        if (this.type != 2) {
            this.initData();
        }
    };
    SetattrPage.prototype.initData = function () {
        var _this = this;
        var token = this.storage.get('token');
        if (token) {
            var api = 'v1/PersonalCenter/GetPersonalInfo/' + token;
            this.httpService.requestData(api, function (data) {
                if (data.error_code == 0) {
                    var tempData = data.data;
                    _this.nickName = tempData['personDataMap'].NickName;
                }
                else if (data.error_code == 3) {
                    _this.rlogin.rLoginProcessWithHistory(_this.navCtrl);
                }
                else {
                    _this.noticeSer.showToast('数据获取异常：' + data.error_message);
                }
            });
        }
    };
    SetattrPage.prototype.confirm = function () {
        var _this = this;
        var token = this.storage.get('token');
        if (token) {
            var api = '';
            var tempData = null;
            if (this.type == 1) {
                api = 'v1/PersonalCenter/updateNickName/' + token;
                tempData = { nickName: this.nickName };
            }
            else {
                api = 'v1/PersonalCenter/updateInviteCode/' + token;
                tempData = { inviteCode: this.inviteCode };
            }
            console.log(api);
            console.log(tempData);
            this.httpService.doFormPost(api, tempData, function (data) {
                if (data.error_code == 0) {
                    _this.noticeSer.showToast('设置成功');
                    _this.navCtrl.pop();
                }
                else if (data.error_code == 3) {
                    _this.rlogin.rLoginProcessWithHistory(_this.navCtrl);
                }
                else {
                    _this.noticeSer.showToast(data.error_message);
                }
            });
        }
    };
    SetattrPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-setattr',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\setattr\setattr.html"*/'<!--\n\n  Generated template for the SetattrPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content style="background:#eeeeee;">\n\n    <ion-list *ngIf="type==1">\n\n        <ion-item>\n\n          <ion-label>昵称：</ion-label>\n\n          <ion-input type="text" [(ngModel)]="nickName"></ion-input>\n\n        </ion-item>\n\n    </ion-list>\n\n    <ion-list *ngIf="type==2">\n\n        <ion-item>\n\n          <ion-label>推荐人（邀请码）：</ion-label>\n\n          <ion-input type="number" [(ngModel)]="inviteCode"></ion-input>\n\n        </ion-item>\n\n    </ion-list>\n\n    <button ion-button block color="danger" class="confirm" (tap)="confirm()">设置</button>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\setattr\setattr.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_http_services_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_rloginprocess_rloginprocess__["a" /* RloginprocessProvider */]])
    ], SetattrPage);
    return SetattrPage;
}());

//# sourceMappingURL=setattr.js.map

/***/ }),
/* 354 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetpaypasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_services_http_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rloginprocess_rloginprocess__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_alert_alert__ = __webpack_require__(16);
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
 * Generated class for the SetpaypasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SetpaypasswordPage = /** @class */ (function () {
    function SetpaypasswordPage(navCtrl, navParams, httpService, storage, rlogin, noticeSer, el, renderer2, alert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.storage = storage;
        this.rlogin = rlogin;
        this.noticeSer = noticeSer;
        this.el = el;
        this.renderer2 = renderer2;
        this.alert = alert;
        this.spareTime = 60;
        this.interval = null;
    }
    SetpaypasswordPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var token = this.storage.get('token');
        var api = 'v1/PersonalCenter/initPersonalCenterData/' + token;
        this.httpService.requestData(api, function (res) {
            if (res.error_code == 0) {
                _this.phoneNum = res.data['personDataMap'].UserName;
                // this.phoneNum = 18055126049;
            }
            else if (res.error_code == 3) {
                _this.rlogin.rLoginProcess(_this.navCtrl);
            }
            else {
                _this.noticeSer.showToast('数据获取异常：' + res.error_message);
            }
        });
    };
    SetpaypasswordPage.prototype.getVerifyCode = function () {
        var _this = this;
        var apiUrl = 'v1/LoginAndRegister/SendRegisterVerifyCode';
        this.httpService.doPost(apiUrl, { phoneNum: this.phoneNum }, function (res) {
            if (res.error_code == 0) {
                var button_1 = _this.el.nativeElement.querySelector('#button');
                _this.renderer2.setStyle(button_1, 'display', 'none');
                //设置倒计时
                var time_1 = _this.el.nativeElement.querySelector('#time');
                _this.renderer2.setStyle(time_1, 'display', 'inline-block');
                _this.interval = setInterval(function () {
                    _this.spareTime--;
                    if (_this.spareTime == 0) {
                        _this.renderer2.setStyle(time_1, 'display', 'none');
                        _this.renderer2.setStyle(button_1, 'display', 'inline-block');
                        _this.spareTime = 60;
                        clearInterval(_this.interval);
                    }
                }, 1000);
            }
            else {
                _this.noticeSer.showToast('服务异常：' + res.error_message);
            }
        });
    };
    SetpaypasswordPage.prototype.next = function () {
        var _this = this;
        var apiUrl = 'v1/LoginAndRegister/verify';
        var token = this.storage.get('token');
        if (this.verifycode && this.verifycode.toString().length == 4) {
            this.httpService.doPost(apiUrl, { token: token, verifyCode: this.verifycode }, function (res) {
                if (res.error_code == 0) {
                    _this.alert.showPrompt('设置支付密码', [
                        {
                            text: '取消',
                            handler: function (data) {
                            }
                        },
                        {
                            text: '确定',
                            handler: function (data) {
                                apiUrl = 'v1/LoginAndRegister/verify/' + res.data;
                                _this.httpService.doPost(apiUrl, { token: token, paypassword: data[0] }, function (result) {
                                    console.log(result);
                                    if (result.error_code == 0) {
                                        _this.noticeSer.showToast('支付密码设置成功');
                                        _this.navCtrl.pop();
                                    }
                                    else if (result.error_code == 3) {
                                        _this.rlogin.rLoginProcess(_this.navCtrl);
                                    }
                                    else {
                                        _this.noticeSer.showToast('服务异常：' + result.error_message);
                                    }
                                });
                            }
                        }
                    ]);
                }
                else if (res.error_code == 3) {
                    _this.rlogin.rLoginProcess(_this.navCtrl);
                }
                else {
                    _this.noticeSer.showToast('服务异常：' + res.error_message);
                }
            });
        }
        else {
            this.noticeSer.showToast('请输入正确验证码');
        }
    };
    SetpaypasswordPage.prototype.ionViewWillUnload = function () {
        //清理定时器，收回资源
        if (this.interval) {
            clearInterval(this.interval);
        }
    };
    SetpaypasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-setpaypassword',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\setpaypassword\setpaypassword.html"*/'<!--\n\n  Generated template for the SetpaypasswordPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>设置支付密码</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content style="background-color: #eeeeee">\n\n  <ion-list>           \n\n    <ion-item>       \n\n      <h2>{{phoneNum}}</h2>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label fixed>验证码:</ion-label>       \n\n      <ion-input type="number" [(ngModel)]=\'verifycode\' placeholder="短信验证码" autofocus="autofocus"></ion-input>\n\n      <button id="button" ion-button item-right (tap)="getVerifyCode()" color= "danger">获取验证码</button>\n\n      <button style="display: none;width: 5rem;" id="time" ion-button item-right color= "danger">{{spareTime}}s 重发</button>\n\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button block color="danger" class="next" (tap)="next()">下一步</button>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\setpaypassword\setpaypassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_services_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_rloginprocess_rloginprocess__["a" /* RloginprocessProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_6__providers_alert_alert__["a" /* AlertProvider */]])
    ], SetpaypasswordPage);
    return SetpaypasswordPage;
}());

//# sourceMappingURL=setpaypassword.js.map

/***/ }),
/* 355 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_weblink_weblink__ = __webpack_require__(18);
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
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingPage = /** @class */ (function () {
    // public AddressPage='AddressPage';
    function SettingPage(navCtrl, webLink, config) {
        this.navCtrl = navCtrl;
        this.webLink = webLink;
        this.config = config;
        this.SetpaypasswordPage = 'SetpaypasswordPage';
        this.UpdatepasswordPage = 'UpdatepasswordPage';
        this.AddressPage = 'AddressPage';
    }
    SettingPage.prototype.aboutUs = function () {
        this.webLink.goWeb(this.config.domain + '/html/sysaticle.html?id=2');
    };
    SettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-setting',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\setting\setting.html"*/'<!--\n\n  Generated template for the SettingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>设置</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content style="background: #eeeeee;">\n\n  <div class="card-div">\n\n    <div class="card-line" [navPush]=\'SetpaypasswordPage\'>\n\n        <span class="head-span">设置支付密码</span>\n\n        <ion-icon class="arrows" name="ios-arrow-forward"></ion-icon>\n\n      </div>\n\n      <div class="line-div"></div>\n\n      <div class="card-line" [navPush]=\'UpdatepasswordPage\'>\n\n          <span class="head-span">修改密码</span>\n\n          <ion-icon class="arrows" name="ios-arrow-forward"></ion-icon>\n\n      </div>\n\n      <div class="line-div"></div>\n\n      <div class="card-line" [navPush]=\'AddressPage\'>\n\n            <span class="head-span">地址管理</span>\n\n            <ion-icon class="arrows" name="ios-arrow-forward"></ion-icon>\n\n      </div>\n\n       <div class="line-div"></div>\n\n      <div class="card-line" (tap)="aboutUs()">\n\n            <span class="head-span">关于我们</span>\n\n            <ion-icon class="arrows" name="ios-arrow-forward"></ion-icon>\n\n      </div>\n\n    </div>     \n\n    <div class="tip">注意：初始支付密码和登录密码保持一致</div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\setting\setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_weblink_weblink__["a" /* WeblinkProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */]])
    ], SettingPage);
    return SettingPage;
}());

//# sourceMappingURL=setting.js.map

/***/ }),
/* 356 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplitimmediatelyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_services_http_services__ = __webpack_require__(4);
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
 * Generated class for the SplitimmediatelyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SplitimmediatelyPage = /** @class */ (function () {
    function SplitimmediatelyPage(navCtrl, navParams, httpService, storage, noticeSer, config, rlogin) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.storage = storage;
        this.noticeSer = noticeSer;
        this.config = config;
        this.rlogin = rlogin;
        this.obj = null;
        this.sysid = null;
    }
    SplitimmediatelyPage.prototype.searchBySysId = function () {
        var _this = this;
        var token = this.storage.get('token');
        var api = "v1/MemberShip/getMemberBySysId/" + token;
        this.httpService.requestData(api, function (res) {
            if (res.error_code == 0) {
                _this.obj = res.data;
                _this.obj['UserName'] = _this.hidePhoneNum(_this.obj['UserName']);
            }
            else if (res.error_code == 3) {
                //抢登处理
                _this.rlogin.rLoginProcess(_this.navCtrl);
            }
            else {
                _this.noticeSer.showToast('众健号不存在');
            }
        }, { SysID: this.sysid });
    };
    SplitimmediatelyPage.prototype.hidePhoneNum = function (tel) {
        var mtel = tel.substr(0, 3) + '****' + tel.substr(7);
        return mtel;
    };
    SplitimmediatelyPage.prototype.execute = function () {
        var _this = this;
        var token = this.storage.get('token');
        var api = "v1/MemberShip/SplitStream/" + token;
        this.httpService.doFormPost(api, { toUserId: this.obj['Id'], type: this.navParams.get('type') }, function (res) {
            if (res.error_code == 0) {
                _this.noticeSer.showToast('分流成功~');
                _this.navCtrl.pop();
            }
            else if (res.error_code == 3) {
                //抢登处理
                _this.rlogin.rLoginProcess(_this.navCtrl);
            }
            else {
                _this.noticeSer.showToast(res.error_message);
            }
        });
    };
    SplitimmediatelyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-splitimmediately',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\splitimmediately\splitimmediately.html"*/'<!--\n\n  Generated template for the VippresentdetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>我要分流</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content style="background: #eeeeee;">\n\n    <ion-list style="margin-bottom: 0;">\n\n    <ion-item>\n\n  <ion-input type="number" [(ngModel)]=\'sysid\' placeholder="请输入众健号"></ion-input>\n\n  <button ion-button item-right (tap)="searchBySysId()" color= "danger">搜索</button>\n\n  </ion-item>\n\n  </ion-list>\n\n  <ion-list *ngIf="obj"> \n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img [src]="config.domain+obj.HeadPhoto">\n\n        </ion-avatar>\n\n        <h2>{{obj.UserName}}</h2>\n\n        <p>众健ID：{{obj.SysID}}</p>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <button ion-button block color="danger" class="executeButton" (tap)="execute()">立即分流</button>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\splitimmediately\splitimmediately.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_http_services_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_rloginprocess_rloginprocess__["a" /* RloginprocessProvider */]])
    ], SplitimmediatelyPage);
    return SplitimmediatelyPage;
}());

//# sourceMappingURL=splitimmediately.js.map

/***/ }),
/* 357 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplitinitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_services_http_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rloginprocess_rloginprocess__ = __webpack_require__(8);
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
 * Generated class for the SplitinitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SplitinitPage = /** @class */ (function () {
    function SplitinitPage(navCtrl, navParams, storage, noticeSer, httpService, rlogin, alert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.noticeSer = noticeSer;
        this.httpService = httpService;
        this.rlogin = rlogin;
        this.alert = alert;
    }
    SplitinitPage.prototype.ionViewWillEnter = function () {
        this.initData();
    };
    SplitinitPage.prototype.initData = function () {
        var _this = this;
        //请求数据
        var token = this.storage.get('token');
        if (token) {
            var api = 'v1/PersonalCenter/initPersonalWallet/' + token;
            this.httpService.requestData(api, function (data) {
                if (data.error_code == 0) {
                    var tempData = data.data;
                    _this.data = tempData['personDataMap'].RemainStream;
                }
                else if (data.error_code == 3) {
                    _this.rlogin.rLoginProcessWithHistory(_this.navCtrl);
                }
                else {
                    _this.noticeSer.showToast('数据获取异常：' + data.error_message);
                }
            });
        }
    };
    SplitinitPage.prototype.splitRecord = function () {
        this.navCtrl.push('SplitrecordPage');
    };
    SplitinitPage.prototype.spliting = function (type) {
        var num = 0;
        if (type == 1) {
            num = 3000;
        }
        else {
            num = 50000;
        }
        if (num > this.data) {
            this.noticeSer.showToast('分流币不足');
        }
        this.navCtrl.push('SplitimmediatelyPage', { type: type });
    };
    SplitinitPage.prototype.choose = function () {
        var _this = this;
        var actionSheet = this.alert.create({
            title: '选择额度',
            cssClass: 'global-action-sheet',
            buttons: [
                {
                    text: '3000',
                    role: 'destructive',
                    cssClass: 'global-zm-action-button',
                    handler: function () {
                        _this.spliting(1);
                    }
                }, {
                    text: '50000',
                    role: 'destructive',
                    cssClass: 'global-zm-action-button',
                    handler: function () {
                        _this.spliting(2);
                    }
                }, {
                    text: '取消',
                    role: 'cancel',
                    cssClass: 'global-zm-action-button',
                    handler: function () {
                    }
                }
            ]
        });
        actionSheet.present();
    };
    SplitinitPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-splitinit',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\splitinit\splitinit.html"*/'<!--\n\n  Generated template for the SplitinitPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>分&nbsp;流</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content style="background: #eeeeee;">\n\n  <div class="all">\n\n    <div class="up">\n\n      <div><span style="font-size:15px;">￥</span>{{data}}</div>\n\n      <div>分流余额</div>\n\n    </div>\n\n    <div class="down">\n\n      <ul>\n\n        <li (tap)="splitRecord()">\n\n          <img src="assets/imgs/shunt.png">\n\n          <span>分流记录</span>\n\n        </li>\n\n        <li (tap)="choose()">\n\n          <img src="assets/imgs/shunt.png">\n\n          <span>我要分流</span>\n\n        </li>\n\n      </ul>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\splitinit\splitinit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_http_services_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_rloginprocess_rloginprocess__["a" /* RloginprocessProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], SplitinitPage);
    return SplitinitPage;
}());

//# sourceMappingURL=splitinit.js.map

/***/ }),
/* 358 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplitrecordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_services_http_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rloginprocess_rloginprocess__ = __webpack_require__(8);
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
 * Generated class for the SplitrecordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SplitrecordPage = /** @class */ (function () {
    function SplitrecordPage(navCtrl, navParams, storage, noticeSer, httpService, rlogin) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.noticeSer = noticeSer;
        this.httpService = httpService;
        this.rlogin = rlogin;
    }
    SplitrecordPage.prototype.ionViewWillEnter = function () {
        this.initData();
    };
    SplitrecordPage.prototype.initData = function () {
        //请求数据
        var _this = this;
        var token = this.storage.get('token');
        if (token) {
            var api = 'v1/MemberShip/SplitStreamRecord/' + token;
            this.httpService.requestData(api, function (data) {
                if (data.error_code == 0) {
                    _this.datas = data.data;
                }
                else if (data.error_code == 3) {
                    _this.rlogin.rLoginProcessWithHistory(_this.navCtrl);
                }
                else {
                    _this.noticeSer.showToast('数据获取异常：' + data.error_message);
                }
            });
        }
    };
    SplitrecordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-splitrecord',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\splitrecord\splitrecord.html"*/'<!--\n\n  Generated template for the SplitrecordPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>分流记录</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content style="background: #eeeeee;">\n\n  <div class="parent" *ngFor="let item of datas">\n\n    <div class="up">分流消费</div>\n\n    <div class="down"><span>-{{item.Amount}}</span><span>{{item.CreateTime}}</span></div>\n\n    </div>\n\n\n\n</ion-content>'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\splitrecord\splitrecord.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_http_services_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_rloginprocess_rloginprocess__["a" /* RloginprocessProvider */]])
    ], SplitrecordPage);
    return SplitrecordPage;
}());

//# sourceMappingURL=splitrecord.js.map

/***/ }),
/* 359 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitlePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_config_config__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(19);
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
 * Generated class for the TitlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TitlePage = /** @class */ (function () {
    function TitlePage(navCtrl, navParams, storage, httpService, toast, config, toastCtrl, alertCtrl, sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.httpService = httpService;
        this.toast = toast;
        this.config = config;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.sanitizer = sanitizer;
        this.title = '';
        this.content = '';
        console.log(this.navParams.get('curId'));
    }
    TitlePage.prototype.assembleHTML = function (strHTML) {
        return this.sanitizer.bypassSecurityTrustHtml(strHTML);
    };
    TitlePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TitlePage');
    };
    TitlePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var api = 'v2/commercialcollege/coursedetailbrief?' + 'courseid=' + this.navParams.get('curId');
        this.httpService.requestData(api, function (data) {
            if (data.error_code == 0) {
                _this.title = data.data['coursedatalist'];
                for (var _i = 0, _a = data.data['coursedatalist']; _i < _a.length; _i++) {
                    var i = _a[_i];
                    console.log(i['id']);
                    var api_1 = 'v2/commercialcollege/coursedatahtmltext?' + 'id=' + i['id'];
                }
                _this.httpService.requestData(api, function (data) {
                    if (data.error_code == 0) {
                        _this.content = data.data;
                    }
                });
            }
            else {
                _this.toast.showToast('数据获取异常');
            }
        });
    };
    TitlePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-title',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\title\title.html"*/'<!--\n\n  Generated template for the TitlePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>《新生命宣言》</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n     <!-- <h2 style="text-align:center"  *ngFor="let item of title">{{item.title}}简介</h2> -->\n\n     <div [innerHTML]="assembleHTML(content)">\n\n      </div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\title\title.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["c" /* DomSanitizer */]])
    ], TitlePage);
    return TitlePage;
}());

//# sourceMappingURL=title.js.map

/***/ }),
/* 360 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatepasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_services_http_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rloginprocess_rloginprocess__ = __webpack_require__(8);
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
 * Generated class for the UpdatepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UpdatepasswordPage = /** @class */ (function () {
    function UpdatepasswordPage(navCtrl, navParams, httpService, storage, noticeSer, rlogin) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.storage = storage;
        this.noticeSer = noticeSer;
        this.rlogin = rlogin;
    }
    UpdatepasswordPage.prototype.confirm = function () {
        var _this = this;
        if (!this.oldpassword) {
            this.noticeSer.showToast('旧密码不能为空');
            return;
        }
        if (!this.newpassword) {
            this.noticeSer.showToast('新密码不能为空');
            return;
        }
        if (!this.newpasswordagain) {
            this.noticeSer.showToast('请确认新密码');
            return;
        }
        var token = this.storage.get('token');
        var api = 'v1/LoginAndRegister/modifyPassword';
        this.httpService.doPost(api, {
            token: token,
            oldPassword: this.oldpassword,
            newPassword: this.newpassword,
            newPasswordAgain: this.newpasswordagain
        }, function (res) {
            if (res.error_code == 0) {
                _this.noticeSer.showToast('修改成功');
                _this.navCtrl.pop();
            }
            else if (res.error_code == 3) {
                _this.rlogin.rLoginProcess(_this.navCtrl);
            }
            else {
                _this.noticeSer.showToast(res.error_message);
            }
        });
    };
    UpdatepasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-updatepassword',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\updatepassword\updatepassword.html"*/'<!--\n\n  Generated template for the UpdatepasswordPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>修改密码</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label>请输入旧密码：</ion-label>\n\n      <ion-input type="password" [(ngModel)]="oldpassword"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>新密码：</ion-label>\n\n      <ion-input type="password" [(ngModel)]="newpassword"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>确认新密码：</ion-label>\n\n      <ion-input type="password" [(ngModel)]="newpasswordagain"></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button block color="danger" class="confirm" (tap)="confirm()">确认</button>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\updatepassword\updatepassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_services_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_rloginprocess_rloginprocess__["a" /* RloginprocessProvider */]])
    ], UpdatepasswordPage);
    return UpdatepasswordPage;
}());

//# sourceMappingURL=updatepassword.js.map

/***/ }),
/* 361 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatephonenumPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_services_http_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rloginprocess_rloginprocess__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_alert_alert__ = __webpack_require__(16);
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
 * Generated class for the UpdatephonenumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UpdatephonenumPage = /** @class */ (function () {
    function UpdatephonenumPage(navCtrl, navParams, httpService, storage, rlogin, noticeSer, el, renderer2, alert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.storage = storage;
        this.rlogin = rlogin;
        this.noticeSer = noticeSer;
        this.el = el;
        this.renderer2 = renderer2;
        this.alert = alert;
        this.spareTime = 60;
        this.interval = null;
    }
    UpdatephonenumPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var token = this.storage.get('token');
        var api = 'v1/PersonalCenter/initPersonalCenterData/' + token;
        this.httpService.requestData(api, function (res) {
            if (res.error_code == 0) {
                _this.phoneNum = res.data['personDataMap'].UserName;
                // this.phoneNum = 18055126049;
            }
            else if (res.error_code == 3) {
                _this.rlogin.rLoginProcess(_this.navCtrl);
            }
            else {
                _this.noticeSer.showToast(res.error_message);
            }
        });
    };
    UpdatephonenumPage.prototype.getVerifyCode = function () {
        var _this = this;
        var apiUrl = 'v1/LoginAndRegister/SendRegisterVerifyCode';
        this.httpService.doPost(apiUrl, { phoneNum: this.phoneNum }, function (res) {
            if (res.error_code == 0) {
                var button_1 = _this.el.nativeElement.querySelector('#button');
                _this.renderer2.setStyle(button_1, 'display', 'none');
                //设置倒计时
                var time_1 = _this.el.nativeElement.querySelector('#time');
                _this.renderer2.setStyle(time_1, 'display', 'inline-block');
                _this.interval = setInterval(function () {
                    _this.spareTime--;
                    if (_this.spareTime == 0) {
                        _this.renderer2.setStyle(time_1, 'display', 'none');
                        _this.renderer2.setStyle(button_1, 'display', 'inline-block');
                        _this.spareTime = 60;
                        clearInterval(_this.interval);
                    }
                }, 1000);
            }
            else {
                _this.noticeSer.showToast(res.error_message);
            }
        });
    };
    UpdatephonenumPage.prototype.next = function () {
        var _this = this;
        var apiUrl = 'v1/LoginAndRegister/verifyUpdateUserName';
        var token = this.storage.get('token');
        if (this.verifycode && this.verifycode.toString().length == 4) {
            this.httpService.doPost(apiUrl, { token: token, verifyCode: this.verifycode }, function (res) {
                if (res.error_code == 0) {
                    _this.navCtrl.push('UpdatephonenumnextPage', { Certficate: res.data });
                }
                else if (res.error_code == 3) {
                    _this.rlogin.rLoginProcess(_this.navCtrl);
                }
                else {
                    _this.noticeSer.showToast(res.error_message);
                }
            });
        }
        else {
            this.noticeSer.showToast('请输入正确验证码');
        }
    };
    UpdatephonenumPage.prototype.ionViewWillUnload = function () {
        //清理定时器，收回资源
        if (this.interval) {
            clearInterval(this.interval);
        }
    };
    UpdatephonenumPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-updatephonenum',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\updatephonenum\updatephonenum.html"*/'<!--\n\n  Generated template for the SetpaypasswordPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n      <ion-title>更换手机号</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  <ion-content style="background-color: #eeeeee">\n\n    <ion-list>           \n\n      <ion-item>       \n\n        <h2>{{phoneNum}}</h2>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input type="number" [(ngModel)]=\'verifycode\' placeholder="短信验证码"></ion-input>\n\n        <button id="button" ion-button item-right (tap)="getVerifyCode()" color= "danger">获取验证码</button>\n\n        <button style="display: none;width: 5rem;" id="time" ion-button item-right color= "danger">{{spareTime}}s 重发</button>\n\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button block color="danger" class="next" (tap)="next()">下一步</button>\n\n  </ion-content>\n\n  '/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\updatephonenum\updatephonenum.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_services_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_rloginprocess_rloginprocess__["a" /* RloginprocessProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_6__providers_alert_alert__["a" /* AlertProvider */]])
    ], UpdatephonenumPage);
    return UpdatephonenumPage;
}());

//# sourceMappingURL=updatephonenum.js.map

/***/ }),
/* 362 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatephonenumnextPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_services_http_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rloginprocess_rloginprocess__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_alert_alert__ = __webpack_require__(16);
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
 * Generated class for the UpdatephonenumnextPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UpdatephonenumnextPage = /** @class */ (function () {
    function UpdatephonenumnextPage(navCtrl, navParams, httpService, storage, rlogin, noticeSer, el, renderer2, alert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.storage = storage;
        this.rlogin = rlogin;
        this.noticeSer = noticeSer;
        this.el = el;
        this.renderer2 = renderer2;
        this.alert = alert;
        this.spareTime = 60;
        this.interval = null;
    }
    UpdatephonenumnextPage.prototype.getVerifyCode = function () {
        var _this = this;
        var apiUrl = 'v1/LoginAndRegister/SendRegisterVerifyCode';
        this.httpService.doPost(apiUrl, { phoneNum: this.phoneNum }, function (res) {
            if (res.error_code == 0) {
                var button_1 = _this.el.nativeElement.querySelector('#button');
                _this.renderer2.setStyle(button_1, 'display', 'none');
                //设置倒计时
                var time_1 = _this.el.nativeElement.querySelector('#time');
                _this.renderer2.setStyle(time_1, 'display', 'inline-block');
                _this.interval = setInterval(function () {
                    _this.spareTime--;
                    if (_this.spareTime == 0) {
                        _this.renderer2.setStyle(time_1, 'display', 'none');
                        _this.renderer2.setStyle(button_1, 'display', 'inline-block');
                        _this.spareTime = 60;
                        clearInterval(_this.interval);
                    }
                }, 1000);
            }
            else {
                _this.noticeSer.showToast(res.error_message);
            }
        });
    };
    UpdatephonenumnextPage.prototype.confirm = function () {
        var _this = this;
        var apiUrl = 'v1/LoginAndRegister/verifyUpdateUserName/' + this.navParams.get('Certficate');
        var token = this.storage.get('token');
        if (this.phoneNum.toString().length != 11) {
            this.noticeSer.showToast("手机号格式不正确");
            return;
        }
        if (this.verifycode && this.verifycode.toString().length == 4) {
            this.httpService.doFormPost(apiUrl, { token: token, verifyCode: this.verifycode, userName: this.phoneNum }, function (res) {
                if (res.error_code == 0) {
                    console.log(_this.navCtrl.length());
                    _this.navCtrl.popTo(_this.navCtrl.getByIndex(_this.navCtrl.length() - 3));
                }
                else if (res.error_code == 3) {
                    _this.rlogin.rLoginProcess(_this.navCtrl);
                }
                else {
                    _this.noticeSer.showToast(res.error_message);
                }
            });
        }
        else {
            this.noticeSer.showToast('请输入正确验证码');
        }
    };
    UpdatephonenumnextPage.prototype.ionViewWillUnload = function () {
        //清理定时器，收回资源
        if (this.interval) {
            clearInterval(this.interval);
        }
    };
    UpdatephonenumnextPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-updatephonenumnext',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\updatephonenumnext\updatephonenumnext.html"*/'<!--\n\n  Generated template for the SetpaypasswordPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n      <ion-title>更换手机号</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content style="background-color: #eeeeee">\n\n    <ion-list>           \n\n      <ion-item>\n\n        <ion-label fixed>手机号:</ion-label>     \n\n        <ion-input type="number" [(ngModel)]=\'phoneNum\' placeholder="新的手机号"></ion-input>\n\n      </ion-item>\n\n      <ion-item> \n\n          <ion-label fixed>验证码:</ion-label>      \n\n        <ion-input type="number" [(ngModel)]=\'verifycode\' placeholder="短信验证码"></ion-input>\n\n        <button id="button" ion-button item-right (tap)="getVerifyCode()" color= "danger">获取验证码</button>\n\n        <button style="display: none;width: 5rem;" id="time" ion-button item-right color= "danger">{{spareTime}}s 重发</button>\n\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button block color="danger" class="confirm" (tap)="confirm()">确定</button>\n\n  </ion-content>\n\n  '/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\updatephonenumnext\updatephonenumnext.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_services_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_rloginprocess_rloginprocess__["a" /* RloginprocessProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_6__providers_alert_alert__["a" /* AlertProvider */]])
    ], UpdatephonenumnextPage);
    return UpdatephonenumnextPage;
}());

//# sourceMappingURL=updatephonenumnext.js.map

/***/ }),
/* 363 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdaterankPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_weblink_weblink__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_services_http_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_rloginprocess_rloginprocess__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_verifypassword_verifypassword__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_alert_alert__ = __webpack_require__(16);
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
 * Generated class for the UpdaterankPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UpdaterankPage = /** @class */ (function () {
    function UpdaterankPage(navCtrl, navParams, storage, noticeSer, httpService, rlogin, verify, alert, webLink) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.noticeSer = noticeSer;
        this.httpService = httpService;
        this.rlogin = rlogin;
        this.verify = verify;
        this.alert = alert;
        this.webLink = webLink;
        this.greenInfoType = 1;
        this.vipInfo = 1;
        this.avaliableLev = '';
        this.remainElec = 0;
    }
    UpdaterankPage.prototype.ionViewWillEnter = function () {
        this.initData();
    };
    UpdaterankPage.prototype.initData = function () {
        var _this = this;
        //请求数据
        var token = this.storage.get('token');
        if (token) {
            var api = 'v1/PersonalCenter/initPersonalWallet/' + token;
            this.httpService.requestData(api, function (data) {
                if (data.error_code == 0) {
                    var tempData = data.data;
                    _this.remainElec = tempData['personDataMap'].RemainElecNum;
                    //等级设置
                    //如果lev为0
                    if (tempData['personDataMap'].Lev == 0) {
                        if (tempData['isGCmember']) {
                            //99会员
                            _this.greenInfoType = 1;
                            _this.vipInfo = 0;
                        }
                        else {
                            //免费会员
                            _this.greenInfoType = 0;
                            _this.vipInfo = 0;
                        }
                        _this.avaliableLev = 'VIP';
                    }
                    else if (tempData['personDataMap'].Lev == 1) {
                        _this.greenInfoType = 1;
                        _this.vipInfo = 1;
                        _this.avaliableLev = '准代理';
                    }
                    else if (tempData['personDataMap'].Lev == 2) {
                        if (tempData['personDataMap'].IsSubProxy == 1) {
                            //准代理
                            _this.greenInfoType = 1;
                            _this.vipInfo = 1;
                            _this.avaliableLev = '代理';
                        }
                        else {
                            //合伙人
                            _this.greenInfoType = 1;
                            _this.vipInfo = 1;
                            _this.avaliableLev = '准代理';
                        }
                    }
                }
                else if (data.error_code == 3) {
                    _this.rlogin.rLoginProcessWithHistory(_this.navCtrl);
                }
                else {
                    _this.noticeSer.showToast('数据获取异常：' + data.error_message);
                }
            });
        }
    };
    UpdaterankPage.prototype.elecHandle = function (orderNo) {
        var _this = this;
        this.verify.execute(this.navCtrl, function () {
            var token = _this.storage.get('token');
            var apiUrl = 'v1/MemberShip/syncHandleVipOrder/' + token;
            _this.httpService.doFormPost(apiUrl, { orderNo: orderNo }, function (data) {
                if (data.error_code == 0) {
                    //现金币处理成功
                    _this.noticeSer.showToast('充值成功！');
                    _this.initData();
                }
                else if (data.error_code == 3) {
                    _this.rlogin.rLoginProcessWithHistory(_this.navCtrl);
                }
                else {
                    _this.noticeSer.showToast(data.error_message);
                }
            });
        });
    };
    UpdaterankPage.prototype.createOrder = function (type, lev) {
        var _this = this;
        var token = this.storage.get('token');
        var apiUrl = 'v2/MemberShip/createVOrder/' + token;
        this.httpService.doFormPost(apiUrl, { type: type, lev: lev }, function (data) {
            if (data.error_code == 0) {
                if (type == 0) {
                    _this.elecHandle(data.data);
                }
                else {
                    var tempData = data.data;
                    _this.webLink.wxGoWebPay(token, tempData.orderNo, tempData.realpay, tempData.orderType);
                }
            }
            else if (data.error_code == 3) {
                _this.rlogin.rLoginProcessWithHistory(_this.navCtrl);
            }
            else {
                _this.noticeSer.showToast(data.error_message);
            }
        });
    };
    UpdaterankPage.prototype.updateGreen = function () {
        var _this = this;
        if (this.greenInfoType == 0) {
            if (this.remainElec >= 99) {
                this.alert.showAlert('您可以通过现金币充值~', '', [
                    {
                        text: '同意',
                        handler: function () {
                            _this.createOrder(0, 0);
                        }
                    },
                    {
                        text: '跳过',
                        handler: function () {
                            _this.createOrder(1, 0);
                        }
                    }
                ]);
            }
            else {
                this.createOrder(1, 0);
            }
        }
    };
    UpdaterankPage.prototype.updateVIP = function () {
        var _this = this;
        if (this.vipInfo == 0) {
            if (this.remainElec >= 3000) {
                this.alert.showAlert('您可以通过现金币充值~', '', [
                    {
                        text: '同意',
                        handler: function () {
                            _this.createOrder(0, 1);
                        }
                    },
                    {
                        text: '跳过',
                        handler: function () {
                            _this.createOrder(1, 1);
                        }
                    }
                ]);
            }
            else {
                this.createOrder(1, 1);
            }
        }
    };
    UpdaterankPage.prototype.directUpdate = function () {
        var _this = this;
        var type = 0;
        if (this.avaliableLev == 'VIP') {
            type = 1;
        }
        if (this.avaliableLev == '准代理') {
            type = 2;
        }
        if (this.avaliableLev == '代理') {
            type = 3;
        }
        if (type != 0) {
            var token = this.storage.get('token');
            var apiUrl = 'v1/MemberShip/directUpdate/' + token;
            this.httpService.doFormPost(apiUrl, { type: type }, function (data) {
                if (data.error_code == 0) {
                    _this.noticeSer.showToast('升级成功啦，您现在是' + _this.avaliableLev + '了');
                    _this.initData();
                }
                else if (data.error_code == 3) {
                    _this.rlogin.rLoginProcessWithHistory(_this.navCtrl);
                }
                else {
                    _this.noticeSer.showToast(data.error_message);
                }
            });
        }
    };
    UpdaterankPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-updaterank',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\updaterank\updaterank.html"*/'<!--\n\n  Generated template for the UpdaterankPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>我要升级</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content style="background: #eeeeee;">\n\n  <div class="card-div">\n\n    <div class="card-line" (tap)="updateGreen()">\n\n      <img src="assets/imgs/quasiagency_gold.png">\n\n      <span class="head-span" *ngIf="greenInfoType==0" >升级99会员(￥99)</span>\n\n      <span class="head-span" *ngIf="greenInfoType==1">升级99会员(已开通)</span>\n\n      <ion-icon class="arrows" name="ios-arrow-forward"></ion-icon>\n\n    </div>\n\n    <div class="line-div"></div>\n\n    <div class="card-line" (tap)="updateVIP()">\n\n      <img src="assets/imgs/vip_gold.png">\n\n      <span class="head-span" *ngIf="vipInfo==0">升级VIP会员(￥3000)</span>\n\n      <span class="head-span" *ngIf="vipInfo==1">升级VIP会员(已开通)</span>\n\n      <ion-icon class="arrows" name="ios-arrow-forward"></ion-icon>\n\n    </div>\n\n  </div>\n\n  <button ion-button block color="danger" class="confirm" (tap)="directUpdate()" *ngIf="avaliableLev">直接升级至{{avaliableLev}}</button>\n\n</ion-content>'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\updaterank\updaterank.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_http_services_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_rloginprocess_rloginprocess__["a" /* RloginprocessProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_verifypassword_verifypassword__["a" /* VerifypasswordProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_weblink_weblink__["a" /* WeblinkProvider */]])
    ], UpdaterankPage);
    return UpdaterankPage;
}());

//# sourceMappingURL=updaterank.js.map

/***/ }),
/* 364 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VippresentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_services_http_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rloginprocess_rloginprocess__ = __webpack_require__(8);
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
 * Generated class for the VippresentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VippresentPage = /** @class */ (function () {
    function VippresentPage(navCtrl, navParams, httpService, storage, noticeSer, rlogin) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.storage = storage;
        this.noticeSer = noticeSer;
        this.rlogin = rlogin;
        this.type = '';
        this.list = [];
        this.getData = function () {
            return new Promise(function (resolve, reject) {
                if (_this.type == 'possessor') {
                    _this.getPossessor();
                }
                else {
                    _this.getAlreadyGive();
                }
                resolve();
            });
        };
    }
    VippresentPage.prototype.ionViewWillEnter = function () {
        this.type = 'possessor';
    };
    VippresentPage.prototype.getPossessor = function () {
        var _this = this;
        var token = this.storage.get('token');
        var api = 'v1/MemberShip/GetPresent/' + token;
        this.httpService.requestData(api, function (res) {
            if (res.error_code == 0) {
                _this.list = res.data;
            }
            else if (res.error_code == 3) {
                //抢登处理
                _this.rlogin.rLoginProcessWithHistory(_this.navCtrl);
            }
            else {
                _this.noticeSer.showToast('服务异常，请稍后重试');
            }
        }, { type: 1 });
    };
    VippresentPage.prototype.getAlreadyGive = function () {
        var _this = this;
        var token = this.storage.get('token');
        var api = 'v1/MemberShip/GetPresent/' + token;
        this.httpService.requestData(api, function (res) {
            if (res.error_code == 0) {
                _this.list = res.data;
            }
            else if (res.error_code == 3) {
                //抢登处理
                _this.rlogin.rLoginProcessWithHistory(_this.navCtrl);
            }
            else {
                _this.noticeSer.showToast('服务异常，请稍后重试');
            }
        }, { type: 2 });
    };
    VippresentPage.prototype.segmentChanged = function ($event) {
        if ($event.value == 'possessor') {
            this.getPossessor();
        }
        else {
            this.getAlreadyGive();
        }
    };
    VippresentPage.prototype.GiveImmediately = function (sendHeadId) {
        this.navCtrl.push('VippresentdetailPage', {
            sendHeadId: sendHeadId,
            callback: this.getData
        });
    };
    VippresentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-vippresent',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\vippresent\vippresent.html"*/'<!--\n\n  Generated template for the VippresentPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>名额赠送</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content style="background: #eeeeee;">\n\n    <div padding>\n\n        <ion-segment [(ngModel)]="type" (ionChange)="segmentChanged($event)" color="danger">\n\n          <ion-segment-button value="possessor">\n\n            未赠送\n\n          </ion-segment-button>\n\n          <ion-segment-button value="alreadygive">\n\n            已赠送\n\n          </ion-segment-button>\n\n        </ion-segment>\n\n      </div>\n\n      \n\n      <div [ngSwitch]="type">\n\n        <ion-list *ngSwitchCase="\'possessor\'">\n\n            \n\n          <ion-item *ngFor="let item of list">\n\n             \n\n            <h2  *ngIf="item.Lev == 1">等级：VIP</h2>\n\n            <h2  *ngIf="item.Lev == 2">等级：合伙人</h2>\n\n            <button (tap)= "GiveImmediately(item.Id)" *ngIf="item.canUse == 1" ion-button item-right color="danger" >赠送</button>\n\n            <button *ngIf="item.canUse == 0" color="gray" ion-button item-right>赠送</button>\n\n          </ion-item>\n\n          \n\n        </ion-list>\n\n      \n\n        <ion-list *ngSwitchCase="\'alreadygive\'">\n\n            \n\n            <ion-item *ngFor="let item of list">\n\n             \n\n                <h2  *ngIf="item.Lev == 1">等级：VIP  （被赠送人：{{item.SysID}}）</h2>\n\n                <h2  *ngIf="item.Lev == 2">等级：合伙人  （被赠送人：{{item.SysID}}） </h2>\n\n                \n\n                <button color="gray" ion-button item-right>已赠送</button>\n\n              </ion-item>\n\n        </ion-list>\n\n      </div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\vippresent\vippresent.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_services_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_rloginprocess_rloginprocess__["a" /* RloginprocessProvider */]])
    ], VippresentPage);
    return VippresentPage;
}());

//# sourceMappingURL=vippresent.js.map

/***/ }),
/* 365 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VippresentdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_services_http_services__ = __webpack_require__(4);
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
 * Generated class for the VippresentdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VippresentdetailPage = /** @class */ (function () {
    function VippresentdetailPage(navCtrl, navParams, httpService, storage, noticeSer, config, rlogin) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.storage = storage;
        this.noticeSer = noticeSer;
        this.config = config;
        this.rlogin = rlogin;
        this.obj = null;
        this.sysid = null;
        this.callback = this.navParams.get('callback');
    }
    VippresentdetailPage.prototype.searchBySysId = function () {
        var _this = this;
        var token = this.storage.get('token');
        var api = "v1/MemberShip/getMemberBySysId/" + token;
        this.httpService.requestData(api, function (res) {
            if (res.error_code == 0) {
                _this.obj = res.data;
                _this.obj['UserName'] = _this.hidePhoneNum(_this.obj['UserName']);
            }
            else if (res.error_code == 3) {
                //抢登处理
                _this.rlogin.rLoginProcess(_this.navCtrl);
            }
            else {
                _this.noticeSer.showToast('众健号不存在');
            }
        }, { SysID: this.sysid });
    };
    VippresentdetailPage.prototype.hidePhoneNum = function (tel) {
        var mtel = tel.substr(0, 3) + '****' + tel.substr(7);
        return mtel;
    };
    VippresentdetailPage.prototype.execute = function () {
        var _this = this;
        if (this.obj) {
            var token = this.storage.get('token');
            var api = "v1/MemberShip/GivePresentPromptly/" + token;
            this.httpService.doFormPost(api, { passiveUserId: this.obj['Id'], sendHeadId: this.navParams.get('sendHeadId') }, function (res) {
                if (res.error_code == 0) {
                    _this.noticeSer.showToast('赠送成功~');
                    _this.callback().then(function () { _this.navCtrl.pop(); });
                }
                else if (res.error_code == 3) {
                    //抢登处理
                    _this.rlogin.rLoginProcess(_this.navCtrl);
                }
                else {
                    _this.noticeSer.showToast('只能赠送给免费会员');
                }
            });
        }
        else {
            this.noticeSer.showToast('请先搜索众健号');
        }
    };
    VippresentdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-vippresentdetail',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\vippresentdetail\vippresentdetail.html"*/'<!--\n\n  Generated template for the VippresentdetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>名额赠送</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content style="background: #eeeeee;">\n\n    <ion-list style="margin-bottom: 0;">\n\n    <ion-item>\n\n  <ion-input type="number" [(ngModel)]=\'sysid\' placeholder="请输入众健号"></ion-input>\n\n  <button ion-button item-right (tap)="searchBySysId()" color= "danger">搜索</button>\n\n  </ion-item>\n\n  </ion-list>\n\n  <ion-list *ngIf="obj"> \n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img [src]="config.domain+obj.HeadPhoto">\n\n        </ion-avatar>\n\n        <h2>{{obj.UserName}}</h2>\n\n        <p>众健ID：{{obj.SysID}}</p>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <button ion-button block color="danger" class="executeButton" (tap)="execute()">立即赠送</button>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\vippresentdetail\vippresentdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_http_services_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_rloginprocess_rloginprocess__["a" /* RloginprocessProvider */]])
    ], VippresentdetailPage);
    return VippresentdetailPage;
}());

//# sourceMappingURL=vippresentdetail.js.map

/***/ }),
/* 366 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithdrawPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_services_http_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rloginprocess_rloginprocess__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_config_config__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_alert_alert__ = __webpack_require__(16);
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
 * Generated class for the WithdrawPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WithdrawPage = /** @class */ (function () {
    function WithdrawPage(navCtrl, navParams, httpService, storage, noticeSer, rlogin, config, alert) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.storage = storage;
        this.noticeSer = noticeSer;
        this.rlogin = rlogin;
        this.config = config;
        this.alert = alert;
        this.getData = function (res) {
            return new Promise(function (resolve, reject) {
                _this.obj = res;
                resolve();
            });
        };
        console.log('构造WithdrawPage');
    }
    WithdrawPage.prototype.chooseAcount = function () {
        this.navCtrl.push('WithdrawaccountPage', { callback: this.getData });
    };
    WithdrawPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var token = this.storage.get('token');
        if (token) {
            var api = 'v1/PersonalCenter/initPersonalCenterData/' + token;
            this.httpService.requestData(api, function (data) {
                if (data.error_code == 0) {
                    var tempData = data.data;
                    _this.maxtxmoney = Math.floor(tempData['personDataMap'].RemainElecNum / 1.03);
                }
                else if (data.error_code == 3) {
                    _this.rlogin.rLoginProcessWithHistory(_this.navCtrl);
                }
                else {
                    _this.noticeSer.showToast('服务异常：' + data.error_message);
                }
            });
        }
    };
    WithdrawPage.prototype.tx = function () {
        var _this = this;
        if (!this.obj) {
            this.noticeSer.showToast('请选择提现账号');
            return;
        }
        if (!this.txmoney) {
            this.noticeSer.showToast('请输入提现金额');
            return;
        }
        var token = this.storage.get('token');
        var api = 'v1/PersonalCenter/TxElecNum/' + token;
        this.httpService.doFormPost(api, {
            money: this.txmoney,
            txType: this.obj['type'],
            cardNo: this.obj['data'].account,
            trueName: this.obj['data'].name,
        }, function (res) {
            if (res.error_code == 0) {
                _this.noticeSer.showToast('提交成功，等待工作人员处理');
                //跳转至现金币记录页面
                _this.navCtrl.pop();
            }
            else if (res.error_code == 3) {
                //抢登处理
                _this.rlogin.rLoginProcess(_this.navCtrl);
            }
            else if (res.error_code == 1) {
                //跳转至实名认证页面
                _this.noticeSer.showToast('您还未进行实名认证');
            }
            else {
                _this.noticeSer.showToast(res.error_message);
            }
        });
    };
    WithdrawPage.prototype.verifyPayPassword = function (payPassword) {
        var _this = this;
        var token = this.storage.get('token');
        var api = 'v1/PersonalCenter/verifyPayPassword';
        this.httpService.doFormPost(api, {
            toKen: token,
            payPassword: payPassword,
        }, function (res) {
            if (res.error_code == 0) {
                _this.tx();
            }
            else if (res.error_code == 3) {
                _this.rlogin.rLoginProcess(_this.navCtrl);
            }
            else if (res.error_code == -1) {
                _this.noticeSer.showToast('您还未设置支付密码');
                _this.navCtrl.push('SetpaypasswordPage');
            }
            else if (res.error_code == 5) {
                _this.noticeSer.showToast('您的现金币被冻结，请和工作人员联系');
            }
            else {
                _this.noticeSer.showToast('服务异常：' + res.error_message);
            }
        });
    };
    WithdrawPage.prototype.execute = function () {
        var _this = this;
        //密码验证
        this.alert.showPrompt('验证支付密码', [
            {
                text: '取消',
                handler: function (data) {
                }
            },
            {
                text: '确定',
                handler: function (data) {
                    _this.verifyPayPassword(data[0]);
                }
            }
        ]);
    };
    WithdrawPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-withdraw',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\withdraw\withdraw.html"*/'<!--\n\n  Generated template for the WithdrawPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>现金币提现</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content style="background: #eeeeee">\n\n  <ion-list style="margin: 1rem 0 2rem 0;" *ngIf="!obj">\n\n    <ion-item (tap)= "chooseAcount()">\n\n      <h2>请选择提现账号</h2>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-list style="margin: 1rem 0 2rem 0;" *ngIf="obj">\n\n      <ion-item *ngIf="obj.type == 1" (tap)= "chooseAcount()">\n\n          <ion-avatar item-start>\n\n              <img src="assets/imgs/alipay.png">\n\n            </ion-avatar>\n\n            <h2>{{obj.data.name}}({{obj.data.account}})</h2>\n\n         </ion-item> \n\n           <ion-item *ngIf="obj.type == 3" (tap)= "chooseAcount()">\n\n              <ion-avatar item-start>\n\n                  <img [src]="config.domain+obj.data.banklogo">\n\n                </ion-avatar>\n\n                <h2>{{obj.data.name}}({{obj.data.account}})</h2>\n\n              </ion-item>\n\n    </ion-list>\n\n\n\n  <ion-list>\n\n      <ion-item>\n\n          <ion-label>提现金额（元）：</ion-label>\n\n          <ion-input type="number" [(ngModel)]="txmoney" placeholder="可提现金额{{maxtxmoney}}"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n           <p style="color: #f53d3d;">手续费：3%</p>\n\n          </ion-item>\n\n    </ion-list>\n\n\n\n    \n\n    <button ion-button block color="danger" class="executeButton" (tap)="execute()">确认提现</button>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\withdraw\withdraw.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_http_services_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_rloginprocess_rloginprocess__["a" /* RloginprocessProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_alert_alert__["a" /* AlertProvider */]])
    ], WithdrawPage);
    return WithdrawPage;
}());

//# sourceMappingURL=withdraw.js.map

/***/ }),
/* 367 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithdrawaccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_services_http_services__ = __webpack_require__(4);
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
 * Generated class for the WithdrawaccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WithdrawaccountPage = /** @class */ (function () {
    function WithdrawaccountPage(navCtrl, navParams, httpService, storage, noticeSer, config, rlogin, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.storage = storage;
        this.noticeSer = noticeSer;
        this.config = config;
        this.rlogin = rlogin;
        this.alertCtrl = alertCtrl;
        this.aliacounts = [];
        this.bankacounts = [];
        this.callback = this.navParams.get('callback');
    }
    WithdrawaccountPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        //进页面的时候加载已有的支付宝和银行卡
        var token = this.storage.get('token');
        var apiUrl = 'v1/AccountManager/AccountManager/GetAllAccount/' + token;
        this.httpService.requestData(apiUrl, function (res) {
            if (res.error_code == 0) {
                _this.aliacounts = res.data.aliAccount;
                _this.bankacounts = res.data.bankAccount;
                for (var index = 0; index < _this.bankacounts.length; index++) {
                    _this.bankacounts[index].account = _this.hidebankAccount(_this.bankacounts[index].account);
                }
            }
            else if (res.error_code == 3) {
                //抢登处理
                _this.rlogin.rLoginProcess(_this.navCtrl);
            }
            else {
                _this.noticeSer.showToast('服务异常');
            }
        });
    };
    WithdrawaccountPage.prototype.addaliacount = function () {
        this.navCtrl.push('AddaliacountPage');
    };
    WithdrawaccountPage.prototype.addbankacount = function () {
        this.navCtrl.push('AddbankacountPage');
    };
    WithdrawaccountPage.prototype.carryAli = function (key) {
        var _this = this;
        this.callback({ type: 1, data: this.aliacounts[key] }).then(function () { _this.navCtrl.pop(); });
    };
    WithdrawaccountPage.prototype.carryBank = function (key) {
        var _this = this;
        this.callback({ type: 3, data: this.bankacounts[key] }).then(function () { _this.navCtrl.pop(); });
    };
    WithdrawaccountPage.prototype.deleteAliAcount = function (key) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: '提示信息?',
            message: '您确定要删除吗?',
            buttons: [
                {
                    text: '取消',
                    handler: function () {
                    }
                },
                {
                    text: '确定',
                    handler: function () {
                        var token = _this.storage.get('token');
                        var apiUrl = 'v1/AccountManager/AccountManager/DeleteAliAccount/' + token;
                        _this.httpService.doFormPost(apiUrl, { id: _this.aliacounts[key].id }, function (res) {
                            if (res.error_code == 0) {
                                //数组中数据清理
                                _this.aliacounts.splice(key, 1);
                            }
                            else if (res.error_code == 3) {
                                //抢登处理
                                _this.rlogin.rLoginProcess(_this.navCtrl);
                            }
                            else {
                                _this.noticeSer.showToast('服务异常');
                            }
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    WithdrawaccountPage.prototype.deleteBankAcount = function (key) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: '提示信息?',
            message: '您确定要删除吗?',
            buttons: [
                {
                    text: '取消',
                    handler: function () {
                    }
                },
                {
                    text: '确定',
                    handler: function () {
                        var token = _this.storage.get('token');
                        var apiUrl = 'v1/AccountManager/AccountManager/DeleteBankAccount/' + token;
                        _this.httpService.doFormPost(apiUrl, { id: _this.bankacounts[key].id }, function (res) {
                            if (res.error_code == 0) {
                                //数组中数据清理
                                _this.bankacounts.splice(key, 1);
                            }
                            else if (res.error_code == 3) {
                                //抢登处理
                                _this.rlogin.rLoginProcess(_this.navCtrl);
                            }
                            else {
                                _this.noticeSer.showToast('服务异常');
                            }
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    WithdrawaccountPage.prototype.hidebankAccount = function (bankAccount) {
        var mtel = bankAccount.substr(0, 4) + '****' + bankAccount.substr(bankAccount.length - 4);
        return mtel;
    };
    WithdrawaccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-withdrawaccount',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\withdrawaccount\withdrawaccount.html"*/'<!--\n\n  Generated template for the WithdrawaccountPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>选择提现账号</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content style="background: #eeeeee;">\n\n\n\n<ion-list style="margin: 1rem 0 2rem 0;">\n\n<ion-item (tap)="addaliacount()">\n\n  <h2>添加支付宝账号</h2>\n\n</ion-item>\n\n<ion-item (tap)="addbankacount()">\n\n    <h2>添加银行卡账号</h2>\n\n  </ion-item>\n\n</ion-list>\n\n\n\n<ion-list style="margin-bottom: 1rem;">\n\n    <ion-item>\n\n    <h2>支付宝</h2>\n\n    </ion-item>\n\n    <ion-item *ngFor="let item of aliacounts;let key=index" (tap)="carryAli(key)" (press)="deleteAliAcount(key)">\n\n    <ion-avatar item-start>\n\n        <img src="assets/imgs/alipay.png">\n\n      </ion-avatar>\n\n      <h2>{{item.name}}({{item.account}})</h2>\n\n     \n\n    </ion-item>\n\n</ion-list>\n\n\n\n\n\n<ion-list>\n\n    <ion-item>\n\n    <h2>银行卡</h2>\n\n    </ion-item>\n\n       \n\n    <ion-item *ngFor="let item of bankacounts;let key=index" (tap)="carryBank(key)" (press)="deleteBankAcount(key)">\n\n        <ion-avatar item-start>\n\n            <img [src]="config.domain+item.banklogo">\n\n          </ion-avatar>\n\n          <h2>{{item.name}}({{item.account}})</h2>\n\n        </ion-item>\n\n</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\withdrawaccount\withdrawaccount.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_http_services_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_rloginprocess_rloginprocess__["a" /* RloginprocessProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], WithdrawaccountPage);
    return WithdrawaccountPage;
}());

//# sourceMappingURL=withdrawaccount.js.map

/***/ }),
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_tabs_tabs__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { StatusBar } from '@ionic-native/status-bar';
// import { SplashScreen } from '@ionic-native/splash-screen';

// import { PaysuccesspagePage } from '../pages/paysuccesspage/paysuccesspage';
var MyApp = /** @class */ (function () {
    function MyApp(appCtrl, ionicApp, platform) {
        this.appCtrl = appCtrl;
        this.ionicApp = ionicApp;
        this.platform = platform;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            // statusBar.styleDefault();
            // splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\apps\zjapp_wx\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n<div class="global-root" id="globalRoot" onclick="globalGoRoot()">首页</div>'/*ion-inline-end:"E:\apps\zjapp_wx\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicApp */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),
/* 386 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonModleAComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_config_config__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_weblink_weblink__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IonModleAComponent = /** @class */ (function () {
    function IonModleAComponent(navCtrl, config, web) {
        this.navCtrl = navCtrl;
        this.config = config;
        this.web = web;
        this.title = "";
        this.img = "";
    }
    /**跳转 */
    IonModleAComponent.prototype.goDetail = function () {
        if (this.picType == 1) {
            this.web.goWeb(this.picUrl);
        }
        else if (this.picType == 2) {
            this.navCtrl.push("ProductDetailPage", {
                "id": this.picProductid
            });
        }
        else if (this.picType == 3) {
            this.navCtrl.push("KeyProductListPage", {
                "keywords": this.picKeyword
            });
        }
    };
    // /**参数改变 */
    IonModleAComponent.prototype.ngOnChanges = function () {
        if (this.params.pageMoudles != null) {
            this.img = this.params.pageMoudles[0].pic;
            this.picType = this.params.pageMoudles[0].picType;
            this.picProductid = this.params.pageMoudles[0].picProductid;
            this.picKeyword = this.params.pageMoudles[0].picKeyword;
            this.picUrl = this.params.pageMoudles[0].picUrl;
            this.title = this.params.title;
            this.sort = this.params.sort;
        }
        if (this.title == '') {
            var titleDom = document.querySelectorAll(".dis");
            if (this.sort != undefined) {
                var titleDom1 = titleDom[this.sort - 2].querySelectorAll(".style1");
                titleDom1[0]['style'].display = "none";
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], IonModleAComponent.prototype, "params", void 0);
    IonModleAComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ion-modle-a',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\components\ion-modle-a\ion-modle-a.html"*/'<div class="module1">   	\n\n  <div class="style1">\n\n    <h4 class="fz-32">{{title}}</h4>\n\n  </div>\n\n  <div class="style2">\n\n    <a tappable (click)="goDetail()" class="ad">\n\n      <img src="{{config.domain+img}}">\n\n    </a>\n\n  </div>\n\n</div>\n\n'/*ion-inline-end:"E:\apps\zjapp_wx\src\components\ion-modle-a\ion-modle-a.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_weblink_weblink__["a" /* WeblinkProvider */]])
    ], IonModleAComponent);
    return IonModleAComponent;
}());

//# sourceMappingURL=ion-modle-a.js.map

/***/ }),
/* 387 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonModleBComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_config_config__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_weblink_weblink__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IonModleBComponent = /** @class */ (function () {
    function IonModleBComponent(navCtrl, config, web) {
        this.navCtrl = navCtrl;
        this.config = config;
        this.web = web;
        this.img1 = "";
        this.img2 = "";
        this.img3 = "";
        this.title = "";
    }
    IonModleBComponent.prototype.goDetail1 = function () {
        if (this.picType1 == 1) {
            this.web.goWeb(this.picUrl1);
        }
        else if (this.picType1 == 2) {
            this.navCtrl.push("ProductDetailPage", {
                "id": this.picProductid1
            });
        }
        else if (this.picType1 == 3) {
            this.navCtrl.push("KeyProductListPage", {
                "keywords": this.picKeyword1
            });
        }
    };
    IonModleBComponent.prototype.goDetail2 = function () {
        if (this.picType2 == 1) {
            this.web.goWeb(this.picUrl2);
        }
        else if (this.picType2 == 2) {
            this.navCtrl.push("ProductDetailPage", {
                "id": this.picProductid2
            });
        }
        else if (this.picType2 == 3) {
            this.navCtrl.push("KeyProductListPage", {
                "keywords": this.picKeyword2
            });
        }
    };
    IonModleBComponent.prototype.goDetail3 = function () {
        if (this.picType3 == 1) {
            this.web.goWeb(this.picUrl3);
        }
        else if (this.picType3 == 2) {
            this.navCtrl.push("ProductDetailPage", {
                "id": this.picProductid3
            });
        }
        else if (this.picType3 == 3) {
            this.navCtrl.push("KeyProductListPage", {
                "keywords": this.picKeyword3
            });
        }
    };
    IonModleBComponent.prototype.ngOnChanges = function () {
        if (this.params.pageMoudles != null) {
            this.picProductid1 = this.params.pageMoudles[0].picProductid;
            this.img1 = this.params.pageMoudles[0].pic;
            this.picType1 = this.params.pageMoudles[0].picType;
            this.picKeyword1 = this.params.pageMoudles[0].picKeyword;
            this.picUrl1 = this.params.pageMoudles[0].picUrl;
            this.picProductid2 = this.params.pageMoudles[1].picProductid;
            this.img2 = this.params.pageMoudles[1].pic;
            this.picType2 = this.params.pageMoudles[1].picType;
            this.picKeyword2 = this.params.pageMoudles[1].picKeyword;
            this.picUrl2 = this.params.pageMoudles[1].picUrl;
            this.picProductid3 = this.params.pageMoudles[2].picProductid;
            this.img3 = this.params.pageMoudles[2].pic;
            this.picType3 = this.params.pageMoudles[2].picType;
            this.picKeyword3 = this.params.pageMoudles[2].picKeyword;
            this.picUrl3 = this.params.pageMoudles[2].picUrl;
            this.title = this.params.title;
            this.sort = this.params.sort;
        }
        if (this.title == '') {
            var titleDom = document.querySelectorAll(".dis");
            if (this.sort != undefined) {
                var titleDom1 = titleDom[this.sort - 2].querySelectorAll(".style1");
                titleDom1[1]['style'].display = "none";
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], IonModleBComponent.prototype, "params", void 0);
    IonModleBComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ion-modle-b',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\components\ion-modle-b\ion-modle-b.html"*/'<div class="module2">\n\n  <div class="style1">\n\n    <h4 class="fz-32">{{title}}</h4>\n\n  </div>\n\n  <div class="style2">\n\n    <div>\n\n        <a tappable (click)="goDetail1()">\n\n          <img src="{{config.domain+img1}}">\n\n        </a>\n\n      </div>\n\n      <div>\n\n        <a tappable (click)="goDetail2()">\n\n          <img src="{{config.domain+img2}}">\n\n        </a>\n\n        <a tappable (click)="goDetail3()">\n\n          <img src="{{config.domain+img3}}">\n\n        </a>\n\n      </div>\n\n  </div>\n\n</div>\n\n \n\n'/*ion-inline-end:"E:\apps\zjapp_wx\src\components\ion-modle-b\ion-modle-b.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_weblink_weblink__["a" /* WeblinkProvider */]])
    ], IonModleBComponent);
    return IonModleBComponent;
}());

//# sourceMappingURL=ion-modle-b.js.map

/***/ }),
/* 388 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonModleCComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_config_config__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_weblink_weblink__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IonModleCComponent = /** @class */ (function () {
    function IonModleCComponent(navCtrl, config, web) {
        this.navCtrl = navCtrl;
        this.config = config;
        this.web = web;
        this.title = "";
    }
    IonModleCComponent.prototype.goDetail = function (item) {
        if (item.picType == 1) {
            this.web.goWeb(item.picUrl);
        }
        else if (item.picType == 2) {
            this.navCtrl.push("ProductDetailPage", {
                "id": item.picProductid
            });
        }
        else if (item.picType == 3) {
            this.navCtrl.push("KeyProductListPage", {
                "keywords": item.picKeyword
            });
        }
    };
    IonModleCComponent.prototype.ngOnChanges = function () {
        if (this.params.pageMoudles != undefined) {
            this.param = this.params.pageMoudles;
            this.title = this.params.title;
            this.sort = this.params.sort;
        }
        if (this.title == '') {
            var titleDom = document.querySelectorAll(".dis");
            if (this.sort != undefined) {
                var titleDom1 = titleDom[this.sort - 2].querySelectorAll(".style1");
                titleDom1[2]['style'].display = "none";
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], IonModleCComponent.prototype, "params", void 0);
    IonModleCComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ion-modle-c',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\components\ion-modle-c\ion-modle-c.html"*/'<div class="module3">\n\n  <div class="style1">\n\n    <h4 class="fz-32">{{title}}</h4>\n\n  </div>\n\n  <div class="style2">\n\n      <ion-grid style="padding: 0">\n\n          <ion-row wrap>\n\n            <ion-col col-6 tappable *ngFor="let c of param" (click)="goDetail(c)" style="padding: 0">\n\n              <div>\n\n                <img src="{{config.domain+c.pic}}">\n\n              </div>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n  </div>\n\n</div>\n\n'/*ion-inline-end:"E:\apps\zjapp_wx\src\components\ion-modle-c\ion-modle-c.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_weblink_weblink__["a" /* WeblinkProvider */]])
    ], IonModleCComponent);
    return IonModleCComponent;
}());

//# sourceMappingURL=ion-modle-c.js.map

/***/ }),
/* 389 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonModleDComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_config_config__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_weblink_weblink__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IonModleDComponent = /** @class */ (function () {
    function IonModleDComponent(navCtrl, config, web) {
        this.navCtrl = navCtrl;
        this.config = config;
        this.web = web;
        this.img1 = "";
        this.img2 = "";
        this.img3 = "";
        this.title = "";
    }
    IonModleDComponent.prototype.goDetail1 = function () {
        if (this.picType1 == 1) {
            this.web.goWeb(this.picUrl1);
        }
        else if (this.picType1 == 2) {
            this.navCtrl.push("ProductDetailPage", {
                "id": this.picProductid1
            });
        }
        else if (this.picType1 == 3) {
            this.navCtrl.push("KeyProductListPage", {
                "keywords": this.picKeyword1
            });
        }
    };
    IonModleDComponent.prototype.goDetail2 = function () {
        if (this.picType2 == 1) {
            this.web.goWeb(this.picUrl2);
        }
        else if (this.picType2 == 2) {
            this.navCtrl.push("ProductDetailPage", {
                "id": this.picProductid2
            });
        }
        else if (this.picType2 == 3) {
            this.navCtrl.push("KeyProductListPage", {
                "keywords": this.picKeyword2
            });
        }
    };
    IonModleDComponent.prototype.goDetail3 = function () {
        if (this.picType3 == 1) {
            this.web.goWeb(this.picUrl3);
        }
        else if (this.picType3 == 2) {
            this.navCtrl.push("ProductDetailPage", {
                "id": this.picProductid3
            });
        }
        else if (this.picType3 == 3) {
            this.navCtrl.push("KeyProductListPage", {
                "keywords": this.picKeyword3
            });
        }
    };
    IonModleDComponent.prototype.ngOnChanges = function () {
        if (this.params.pageMoudles != null) {
            this.picProductid1 = this.params.pageMoudles[0].picProductid;
            this.img1 = this.params.pageMoudles[0].pic;
            this.picType1 = this.params.pageMoudles[0].picType;
            this.picKeyword1 = this.params.pageMoudles[0].picKeyword;
            this.picUrl1 = this.params.pageMoudles[0].picUrl;
            this.picProductid2 = this.params.pageMoudles[1].picProductid;
            this.img2 = this.params.pageMoudles[1].pic;
            this.picType2 = this.params.pageMoudles[1].picType;
            this.picKeyword2 = this.params.pageMoudles[1].picKeyword;
            this.picUrl2 = this.params.pageMoudles[1].picUrl;
            this.picProductid3 = this.params.pageMoudles[2].picProductid;
            this.img3 = this.params.pageMoudles[2].pic;
            this.picType3 = this.params.pageMoudles[2].picType;
            this.picKeyword3 = this.params.pageMoudles[2].picKeyword;
            this.picUrl3 = this.params.pageMoudles[2].picUrl;
            this.title = this.params.title;
            this.sort = this.params.sort;
        }
        if (this.title == '') {
            var titleDom = document.querySelectorAll(".dis");
            if (this.sort != undefined) {
                var titleDom1 = titleDom[this.sort - 2].querySelectorAll(".style1");
                titleDom1[3]['style'].display = "none";
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], IonModleDComponent.prototype, "params", void 0);
    IonModleDComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ion-modle-d',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\components\ion-modle-d\ion-modle-d.html"*/'<div class="module4">\n\n  <div class="style1">\n\n    <h4 class="fz-32">{{title}}</h4>\n\n  </div>\n\n  <div class="style2">\n\n      <div>\n\n        <a (click)="goDetail1()">\n\n          <img src="{{config.domain+img2}}">\n\n        </a>\n\n        <a (click)="goDetail2()">\n\n          <img src="{{config.domain+img3}}">\n\n        </a>\n\n      </div>\n\n      <div>\n\n        <a (click)="goDetail3()">\n\n          <img src="{{config.domain+img1}}">\n\n        </a>\n\n      </div>\n\n  </div>\n\n</div>\n\n \n\n'/*ion-inline-end:"E:\apps\zjapp_wx\src\components\ion-modle-d\ion-modle-d.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_weblink_weblink__["a" /* WeblinkProvider */]])
    ], IonModleDComponent);
    return IonModleDComponent;
}());

//# sourceMappingURL=ion-modle-d.js.map

/***/ }),
/* 390 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonModleGComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_config_config__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_weblink_weblink__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IonModleGComponent = /** @class */ (function () {
    function IonModleGComponent(navCtrl, config, web, ele, ren) {
        this.navCtrl = navCtrl;
        this.config = config;
        this.web = web;
        this.ele = ele;
        this.ren = ren;
        this.title = "";
    }
    IonModleGComponent.prototype.goDetail = function (item) {
        if (item.picType == 1) {
            this.web.goWeb(item.picUrl);
        }
        else if (item.picType == 2) {
            this.navCtrl.push("ProductDetailPage", {
                "id": item.picProductid
            });
        }
        else if (item.picType == 3) {
            this.navCtrl.push("KeyProductListPage", {
                "keywords": item.picKeyword
            });
        }
    };
    IonModleGComponent.prototype.ngOnChanges = function () {
        if (this.params.pageMoudles != null) {
            this.param = this.params.pageMoudles;
            this.title = "促/销/专/区";
            this.sort = this.params.sort;
        }
        if (this.title == '') {
            var titleDom = document.querySelectorAll(".dis");
            if (this.sort != undefined) {
                var titleDom1 = titleDom[this.sort - 2].querySelectorAll(".style1");
                titleDom1[4]['style'].display = "none";
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], IonModleGComponent.prototype, "params", void 0);
    IonModleGComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ion-modle-g',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\components\ion-modle-g\ion-modle-g.html"*/'<div class="moudle5">\n\n  <div class="style1">\n\n    <h4 class="fz-32">{{title}}</h4>\n\n  </div>\n\n  <div class="product">\n\n    <ion-row wrap>\n\n      <ion-col col-6 *ngFor="let p of param" tappable (click)="goDetail(p)">\n\n       <div class="point">\n\n        <img src="{{config.domain+p.pic}}" >\n\n        <p>{{p.productName}}</p>\n\n        <div class="list-price buy">\n\n          <span class="price-new"><i>￥</i>{{p.productPrice}}</span>\n\n          <i class="del">￥<span>100</span></i>\n\n        </div>\n\n       </div>\n\n      </ion-col>\n\n    </ion-row>\n\n    <!-- <div  *ngFor="let p of param" tappable (click)="goDetail(p)" class="tcol test1">\n\n      <div class="point test2">\n\n        <img src="{{config.domain+p.pic}}" >\n\n        <p>{{p.productName}}</p>\n\n        <div class="list-price buy">\n\n          <span class="price-new"><i>￥</i>{{p.productPrice}}</span>\n\n          <i class="del">￥<span>100</span></i>\n\n        </div>\n\n       </div>\n\n      </div> -->\n\n  </div>\n\n</div>'/*ion-inline-end:"E:\apps\zjapp_wx\src\components\ion-modle-g\ion-modle-g.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_weblink_weblink__["a" /* WeblinkProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */]])
    ], IonModleGComponent);
    return IonModleGComponent;
}());

//# sourceMappingURL=ion-modle-g.js.map

/***/ }),
/* 391 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexAdvPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_weblink_weblink__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_http_services_http_services__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var IndexAdvPage = /** @class */ (function () {
    function IndexAdvPage(noticeSer, httpService, toast, storage, config, web, navCtrl, navParams) {
        this.noticeSer = noticeSer;
        this.httpService = httpService;
        this.toast = toast;
        this.storage = storage;
        this.config = config;
        this.web = web;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.focusList = []; /*数组 轮播图*/
        this.getFocus();
    }
    IndexAdvPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IndexAdvPage');
    };
    /**轮播页跳转 */
    IndexAdvPage.prototype.goDetail = function (item) {
        if (item.picType == 1) {
            this.web.goWeb(item.picUrl);
        }
        else if (item.picType == 2) {
            this.navCtrl.push("ProductDetailPage", {
                "id": item.picProductid
            });
        }
        else if (item.picType == 3) {
            this.navCtrl.push("KeyProductListPage", {
                "keywords": item.picKeyword
            });
        }
    };
    IndexAdvPage.prototype.getFocus = function () {
        var _this = this;
        var api = "v2/HomePage/initHomePage";
        this.httpService.requestData(api, function (data) {
            if (data.error_code == 0) {
                _this.focusList = data.data[0].pageMoudles;
            }
            else {
                _this.noticeSer.showToast(data.error_message);
            }
        });
    };
    IndexAdvPage.prototype.commercial = function () {
        this.navCtrl.push('CommercialPage');
    };
    IndexAdvPage.prototype.newUser = function () {
        var token = this.storage.get("token");
        if (token == null) {
            this.navCtrl.push('LoginPage', { history: 'history' });
        }
        else {
            this.web.goWeb(this.config.domain + "/html/newpeople.html?token=" + token);
        }
    };
    IndexAdvPage.prototype.goSign = function () {
        var token = this.storage.get("token");
        if (token == null) {
            this.navCtrl.push('LoginPage', { history: 'history' });
        }
        else {
            this.web.goWeb(this.config.domain + "/html/signIn.html?token=" + token);
        }
    };
    IndexAdvPage.prototype.goOldUser = function () {
        this.navCtrl.push('MembersProductPage');
    };
    IndexAdvPage.prototype.gobulk = function () {
        this.toast.showToast("暂未开放,敬请期待！");
    };
    IndexAdvPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-index-adv',template:/*ion-inline-start:"E:\apps\zjapp_wx\src\pages\index-adv\index-adv.html"*/'<div>\n\n  <div>\n\n      <ion-slides *ngIf="focusList.length>0" class="adv" pager  loop="true" autoplay="3000">    \n\n          <ion-slide *ngFor="let item of focusList">\n\n              <img src="{{config.domain+item.pic}}" (click)="goDetail(item)"/>\n\n          </ion-slide>         \n\n      </ion-slides>\n\n  </div>\n\n  <div class="iconDiv">\n\n      <ul class="icon">\n\n          <li tappable (click)="newUser()"><a><i></i>\n\n                      <p>新人红包</p>\n\n                  </a></li>\n\n          <li tappable (click)="goSign()"><a><i></i>\n\n                      <p>签到好礼</p>\n\n                  </a></li>\n\n          <li tappable (click)="goOldUser()"><a><i></i>\n\n                  <p>会员专区</p>\n\n              </a></li>\n\n          <li tappable (click)="gobulk()"><a><i></i>\n\n                      <p>拼团活动</p>\n\n                  </a></li>\n\n          <li><a href="" (tap)="commercial()"><i></i>\n\n                      <p>商学院</p>\n\n                  </a></li>\n\n      </ul>\n\n  </div>\n\n</div>\n\n\n\n'/*ion-inline-end:"E:\apps\zjapp_wx\src\pages\index-adv\index-adv.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_http_services_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_weblink_weblink__["a" /* WeblinkProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], IndexAdvPage);
    return IndexAdvPage;
}());

//# sourceMappingURL=index-adv.js.map

/***/ })
],[264]);
//# sourceMappingURL=main.js.map