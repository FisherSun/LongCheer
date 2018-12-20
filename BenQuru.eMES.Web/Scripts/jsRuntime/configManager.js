define(['config/services', 'config/client', 'datetimepicker'],
    function (services, client, datepicker, calendar) {
//define(['config/client', 'datetimepicker'],
//    function (client, datepicker, calendar) {
        var cm = {};
        client.showInCRM = true;
        cm.client = client;
        cm.services = services;
        cm.init = function () {
            //通过URL设置语言和时区
            var lcid = cm.getQueryString('lcid');
            var userId = cm.getQueryString('userid');
            var tm = cm.getQueryString('timezonebias');
            if (lcid) {
                var items = Enumerable.From(cm.client.cultureMapping).Where('$.lcid == ' + lcid).ToArray();
                if (items.length == 1) {
                    cm.client.culture = items[0].culture;
                    cm.client.dpCulture = items[0].dpCulture;
                    cm.client.currency = items[0].currency;//币种
                }
            }
            if (tm)
                cm.client.timezone = tm / 60;
            $.datetimepicker.setLocale(cm.client.dpCulture);

            var curCulture = sessionStorage.getItem("curCulture");
            if (curCulture) {
                if (curCulture != cm.client.culture) {
                    cm.clearAllSessionCache();
                }
            }
            sessionStorage.setItem("curCulture", cm.client.culture);
            if (userId)
                sessionStorage.setItem("userId", userId);
            sessionStorage.setItem("curTimezone", cm.client.timezone);
            sessionStorage.setItem("currCurrency", cm.client.currency);//币种
        };
        cm.clearAllSessionCache = function () {           
            //先保存不用清除的值
            var access_token = sessionStorage.getItem("access_token");
            var redirectURL = sessionStorage.getItem("RedirectURL");
            window.sessionStorage.clear();
            sessionStorage.setItem("access_token", access_token);
            sessionStorage.setItem("RedirectURL", redirectURL);
        };
        
        //设置服务器默认URL
        cm.setDefaultServersUrl = function (paras) {

            //后台服务的url可以通过api从服务器上面获取到
            var _paras = {
                "zc": '',//整车api               
                "sso": ''//单点登录
            };

            $.extend(_paras, paras);
            var results = _paras

            if (results) {
                $.each(results, function (key) {
                    if (cm.services.hasOwnProperty(key)) {
                        cm.services[key]['url'] = results[key];
                    }
                });
                return true;
            }
            else {
                return false;
            }
        };

        cm.getQueryString = function (name) {
            var result = location.href.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
            if (result == null || result.length < 1) return null;
            return result[1];
        }
        cm.init();
        return cm;
    });