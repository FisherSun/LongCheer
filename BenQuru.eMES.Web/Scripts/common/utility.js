define(['durandal/system'], function (system) {
    var u = {
        removeArrayObjectProperties: function (arrObj, props) {
            arrObj.forEach(function (item) {
                props.forEach(function (prop) {
                    if (item.hasOwnProperty(prop))
                        delete item[prop]
                })
            })
        },
        isdate: function (intYear, intMonth, intDay) {
            if (isNaN(intYear) || isNaN(intMonth) || isNaN(intDay)) return false;
            if (intMonth > 12 || intMonth < 1) return false;
            if (intDay < 1 || intDay > 31) return false;
            if ((intMonth == 4 || intMonth == 6 || intMonth == 9 || intMonth == 11) && (intDay > 30)) return false;
            if (intMonth == 2) {
                if (intDay > 29) return false;
                if ((((intYear % 100 == 0) && (intYear % 400 != 0)) || (intYear % 4 != 0)) && (intDay > 28)) return false;
            }
            return true;
        },
        /*不够位数前面补特殊的字符*/
        PrefixChar: function (num, length, char) {
            return (Array(length).join(char) + num).slice(-length);
        },
        ////////////////////////////////////////////////////////////////////////////////////////////
        //计算两个日期天数差的函数，通用
        ////////////////////////////////////////////////////////////////////////////////////////////
        DateDiff: function (sDate1, sDate2) {  //sDate1和sDate2是yyyy-MM-dd格式
            var aDate, oDate1, oDate2, iDays;
            aDate = sDate1.split("-");
            oDate1 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0]);  //转换为yyyy-MM-dd格式
            aDate = sDate2.split("-");
            oDate2 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0]);
            iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24); //把相差的毫秒数转换为天数
            return iDays;  //返回相差天数
        },
       
        //获得根目录
        getRootPath : function getRootPath() { 
            var fullPath = window.document.location.href;
            var subPath = window.document.location.pathname;
            var pos = fullPath.indexOf(subPath);
            var prePath = fullPath.substring(0, pos);
            var postPath = subPath.substring(0, subPath.substr(1).indexOf('/') + 1);
            return (prePath + postPath);
        },
        ////////////////////////////////////////////////////////////////////////////////////////////
        //获取当前日期(10位)，格式为YYYY-MM-DD
        ////////////////////////////////////////////////////////////////////////////////////////////
        getCurrentDate: function () {
            var y_date = new Date();
            var yy = y_date.getFullYear(),
                mth = y_date.getMonth() + 1,
                cdate = y_date.getDate()
            return yy + '-' + u.PrefixChar(mth, 2, '0') + '-' + u.PrefixChar(cdate, 2, '0');
        },
    parseQueryString: function (dialogResult) {
        var items = dialogResult.split("&");
        var result = {}
        var arr = [];
        for (var i = 0; i < items.length; i++) {
            arr = items[i].split('=');
            result[arr[0]] = arr[1];
        }
        return result;
    },
    /////////////////////////////////////////////////////////////////////////////////////////////
    // 将 UTC Date 转化为指定格式的String
    // 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
    // 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
    // Exsample： 
    // UtcDateFormat("2016-07-02T08:09:04.015+08:00", "yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.15 
    // UtcDateFormat("2016-07-02T08:09:04.210+08:00", "yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.210 
    /////////////////////////////////////////////////////////////////////////////////////////////
    UtcDateFormat: function (utcdate, fmt) {
        if (!utcdate)
            return null;

        var date = new Date(utcdate);
        var o = {
            "M+": date.getMonth() + 1, //月份 
            "d+": date.getDate(), //日 
            "h+": date.getHours(), //小时 
            "m+": date.getMinutes(), //分 
            "s+": date.getSeconds(), //秒 
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
            "S": date.getMilliseconds() //毫秒 
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    },

    Appendzero: function(obj) {
        if (obj < 10) return "0" + obj; else return obj;
    }

};
return u;
});
