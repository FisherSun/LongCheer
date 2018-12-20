'use strict';
var baseUrl = 'Scripts';

window.onerror = function fnErrorTrap(sMsg, sUrl, sLine) {

    //可以统一调用服务端记日志方法记录客户端的日志   
    return false;
}

requirejs.config({
    urlArgs: "version=2.0.3",
    baseUrl: baseUrl,
    paths: {
        'plugins': 'durandal/plugins',
        'transitions': 'durandal/transitions',
        'knockvalidation': 'knockout.validation',
        'appConfig': 'Config',
        'jquery-mousewheel': 'jquery.mousewheel.min',
        'datetimepicker': 'jquery.datetimepicker.full.min',
    }
});
define('jquery', function () { return jQuery; });
define('knockout', ko);

define('knockvalidation', function (kovalidation) {
    ko.validation.configure({
        decorateElement: false,
        registerExtenders: true,
        messagesOnModified: true,
        insertMessages: false,
        parseInputAttributes: true,
        messageTemplate: null,
        errorClass: 'error'
    });
});


define(['require', 'durandal/system', 'durandal/viewLocator', 'durandal/app',
    'common/user', 'jsRuntime/configManager', 'plugins/router', 'common/dicService', 'jsRuntime/resourceManager'],
    function (require, system, viewLocator, app, user, cm, router, dic, rm) {
        var appInit = function () {
            system.debug(true);
            app.title = '';
            app.configurePlugins({
                router: true,
                dialog: true
            });
            app.start().then(function () {
                //var code = cm.getQueryString("code");
                //if (code)//UAA登录跳转页面则获取token
                //{
                //    var result = $.ajax({
                //        method: "get",
                //        url: "api/Account/AuthCode/" + code,
                //        async: false
                //    });
                //    if (result.status == 200) {
                //        var accessToken = result.responseJSON;
                //        if (accessToken.access_token)
                //            sessionStorage.setItem("access_token", accessToken.access_token);
                //        var redirectURL = sessionStorage[cm.getQueryString("state")];
                //        if (redirectURL)
                //            window.location = redirectURL;
                //        else
                //            window.location = location.origin;
                //    }
                //    else {
                //        var message = JSON.parse(result.responseText).Message;
                //        app.showMessage(message, rm.global.message.alertTitle());
                //    }
                //    return;
                //}

                //dic.getAllEnum();
                //app.setRoot('app/shell');
                app.setRoot('app/login');
            });
        }
        var appError = function () {
            require(['jsRuntime/configManager'], function (cm) {
                var errorPage = 'app/' + (cm.client.errorPage || 'error');
                system.acquire(errorPage).then(function (modul) {
                    viewLocator.locateViewForObject(modul).then(function () {
                        app.title = cm.client.appTitle;
                        app.start().then(function () {
                            viewLocator.useConvention();
                            app.setRoot(errorPage);
                        });
                    })
                })
            });
        }

        require(['appConfig/config'], function (cfg) {
            cfg.config().then(function () {
                $(document).ajaxError(function (xhr, props) {
                    if (props.status === 401) {
                        var url = props.getResponseHeader("RedirectURL").replace("LoginUrl", "ent/login");
                        //sessionStorage.RedirectURL = location.href;
                        var guid = "";
                        for (var i = 1; i <= 32; i++) {
                            var n = Math.floor(Math.random() * 16.0).toString(16);
                            guid += n;
                            if ((i == 8) || (i == 12) || (i == 16) || (i == 20))
                                guid += "-";
                        }
                        sessionStorage[guid] = location.href;
                        url += "&state=" + guid;
                        var loc = window.location;
                        var portStr = "";
                        if (loc.port) { portStr = ":" + loc.port; }
                        var redirectUri = loc.protocol + "//" + loc.hostname + portStr + loc.pathname;
                        url += "&redirect_uri=" + redirectUri.substring(0, redirectUri.length - 1);
                        window.location = url;
                        return;
                    }
                    else if (props.status === 403) {
                        router.navigate("#UnauthorizedUrl");
                    }
                });
                appInit();
            }).fail(function () {
                appError();
            });
        });
    });
