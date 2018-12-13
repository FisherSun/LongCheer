//上线前需修改为上线时间
var CYCLE_START = '2017-07-01'; //预测周期的起始日期

$(document).ajaxSend(
    function (event, request, settings) {
        //统一增加headers
        var token = sessionStorage.getItem("access_token");
        if (token && settings.headers)
            settings.headers.Authorization = 'Bearer ' + token;
    });

$(document).ready(function () {
    $(".btn1").click(function () {
        $("p").slideToggle();
    });
});

//由于原生 toFixed方法四舍五入时不稳定（例如：0.615 .toFixed(2)=0.61 此时错误的），所以重写该方法
Number.prototype.toFixed = function (p) {
    var x = this;
    var f = parseFloat(x);
    if (isNaN(f)) { return f; }
    var f = Math.round(x * (Math.pow(10, p))) / (Math.pow(10, p));
    var s = f.toString();
    var rs = s.indexOf('.');
    if (rs < 0) { rs = s.length; s += '.'; }
    while (s.length <= rs + 2) { s += '0'; }
    return s;
}


var FormatUTCDate = function (strDate, strError) {
    if (!strDate) return null;
    var d = moment(ConvertTime(strDate, 1));
    if (d.isValid())
        return d.format('YYYY-MM-DD');
    if (strError)
        return strError;
    return '';
}

var FormatEndStrDate = function (strDate) {
    var newDate = new Date(strDate);
    newDate = newDate.setDate(newDate.getDate() + 1);
    return moment(newDate).format("YYYY-MM-DD")
}

var FormatNormalDate = function (strDate) {
    var newDate = new Date(strDate);
    return moment(newDate).format("YYYY-MM-DD HH:mm:ss");
}

var ToUTCEndQueryDateTime = function (strDate, strError) {
    strDate = FormatEndStrDate(strDate);
    return ToUTCQueryDateTime(strDate, strError);
}

var ToUTCDate = function (strDate, strError) {
    if (!strDate) return null;
    strDate += " 00:00:00"
    var date = moment(ConvertTime(strDate, -1));
    if (date.isValid())
        return date.format("YYYY-MM-DDTHH:mm:ssZ");
    if (strError)
        return strError;
    return '';
}

var ToUTCQueryDate = function (strDate, strError) {
    if (!strDate) return null;
    var d = new Date(strDate);
    var hourOffset = d.getTimezoneOffset() / 60;
    d.setHours(d.getUTCHours() + hourOffset);
    var date = moment(d);
    if (date.isValid())
        return date.format("YYYY-MM-DD");
    if (strError)
        return strError;
    return '';
}

var ToUTCQueryDateTime = function (strDate, strError) {
    if (!strDate) return null;
    var d = moment(ConvertTime(strDate, -1));
    if (d.isValid())
        return d.format('YYYY-MM-DDTHH:mm:ss') + 'Z';
    if (strError)
        return strError;
    return '';
}

var Extra = function (x) {
    var e_data = x;
    if (x < 10) {
        e_data = "0" + x;
    }
    return e_data;
};

var ToUTCDateTime = function (strDate, strError) {
    if (!strDate) return null;
    var d = moment(ConvertTime(strDate, -1));
    if (d.isValid())
        return d.format('YYYY-MM-DDTHH:mm:ssZ');
    if (strError)
        return strError;
    return '';
}

var FormatUTCDateTime = function (strDate, strError) {
    if (!strDate) return null;
    var d = moment(ConvertTime(strDate, 1));
    if (d.isValid())
        return d.format('YYYY-MM-DD HH:mm:ss');
    if (strError)
        return strError;
    return '';
}

var FormatUTCDateTimePicker = function (strDate, strError) {
    if (!strDate) return null;
    var d = moment(ConvertTime(strDate, 1));
    if (d.isValid())
        return d.format('YYYY/MM/DD HH:mm');
    if (strError)
        return strError;
    return '';
}

var ConvertTime = function (DateTimeString, flag) {
    var dateTimeString = "";
    if (DateTimeString instanceof Date)
        dateTimeString = DateTimeString.Format("yyyy/MM/dd hh:mm:ss")
    else
        dateTimeString = DateTimeString;
    if (dateTimeString.indexOf('T') < 0)
        dateTimeString = dateTimeString.replace(/-/g, "/");

    var convertdLocalTime = new Date(dateTimeString);
    if (dateTimeString.indexOf('Z') > 0)
        return convertdLocalTime;
    var curTimezone = sessionStorage.getItem("curTimezone");
    var hourOffset = flag * curTimezone;
    convertdLocalTime.setHours(convertdLocalTime.getHours() + hourOffset);
    return convertdLocalTime;
}

//两个日期（时间）比较，返回符合条件的值。type=1 取小；type=2 取大
this.CompareDate = function (date1, date2, type) {
    if (date2 && date1) {
        if (type == 1) {
            return new Date(date2) < new Date(date1) ? date2 : date1;
        }
        else {
            return new Date(date2) > new Date(date1) ? date2 : date1;
        }
    }
    if (!date2 && !date1) {
        return false;
    }
    if (date2) {
        return date2;
    }
    if (date1) {
        return date1;
    }
}
//两个日期判断是否是同一个月
this.CompareSameMonthDate = function (date1, date2) {
    var d1 = new Date(date1.replace(new RegExp(/-/gm), "/"));
    var d2 = new Date(date2.replace(new RegExp(/-/gm), "/"));
    var yearMonthDate1 = d1.getFullYear() + '' + d1.getMonth();
    var yearMonthDate2 = d2.getFullYear() + '' + d2.getMonth();

    return yearMonthDate1 == yearMonthDate2;
}

//区间控件方法，使用示例1：InitDateRangeControl("startDateId","endDateId");
//使用示例2： InitDateRangeControl("startDateId", "endDateId", maxDate); ---考虑到最大值(maxDate)，也许是个动态值，所以可传值进入，也可传递方法( function () { return self.objectValue.CloseJob() })进入
var InitDateRangeControl = function (startDateId, endDateId, maxDate) {
    InitDateRangeDo('#' + startDateId, '#' + endDateId, maxDate)
}
//  --请使用InitDateRangeControl方法。但保留，请勿删除
var DateRange = function (startValue, endValue, pickerControlArray, maxDate) {
    InitDateRangeDo(pickerControlArray + ":eq(0)", pickerControlArray + ":eq(1)", maxDate);
}
//区间控制实际操作方法
this.InitDateRangeDo = function (startInput, endInput, maxDate) {
    $(startInput + "," + endInput).attr('autocomplete', 'off');
    $(startInput + "," + endInput).datetimepicker('destroy');
    $(startInput).datetimepicker({
        format: 'Y-m-d',
        onShow: function (ct) {
            this.setOptions({
                maxDate: (function () {
                    //比较默认设定的最大值和变化的最大值（结束日期或结算日期），谁小取谁
                    var endInputDate = $(endInput).val();
                    var m;
                    if (maxDate && typeof (maxDate) == "function") {
                        m = maxDate();
                    }
                    else if (maxDate) {
                        m = maxDate;
                    }

                    return CompareDate(m, endInputDate, 1);
                }())
            })
        },
        timepicker: false
    });
    $(endInput).datetimepicker({
        format: 'Y-m-d',
        onShow: function (ct) {
            this.setOptions({
                minDate: $(startInput).val() ? $(startInput).val() : false,
                maxDate: (function () {
                    var m;
                    if (maxDate && typeof (maxDate) == "function") {
                        m = maxDate();
                    }
                    else if (maxDate) {
                        m = maxDate;
                    }
                    return m ? m : false;
                }())
            })
        },
        timepicker: false
    });
    $(startInput + "," + endInput).unbind('mousewheel');
}

var GetMCStatus = function (all, done) {//获取市场活动完成状态
    var status = '尚未开始';
    if (all) {
        if (done < all) {
            status = '部分完成';
        }
        if (done == all) {
            status = '已完成';
        }
        if (!done) {
            status = '尚未开始';
        }
    } else {
        if (!done) {
            status = '尚未开始';
        } else {
            status = '部分完成';
        }
    }
    return status;
};

var InitDateTimeRangeControl = function (startDateId, endDateId) {
    InitDateTimeRangeDo('#' + startDateId, '#' + endDateId)
}

this.InitDateTimeRangeDo = function (startInput, endInput) {
    $(startInput + "," + endInput).attr('autocomplete', 'off');
    $(startInput + "," + endInput).datetimepicker('destroy');
    $(startInput).datetimepicker({
        format: 'Y-m-d H:i',
        onShow: function (ct) {
            this.setOptions({
                maxDate: $(endInput).val() ? $(endInput).val() : false
            })
        },
    });
    $(endInput).datetimepicker({
        format: 'Y-m-d H:i',
        onShow: function (ct) {
            this.setOptions({
                minDate: $(startInput).val() ? $(startInput).val() : false
            })
        }
    });
    $(startInput + "," + endInput).unbind('mousewheel');
}

String.prototype.ReplaceEQSingleQuotes = function () {
    return this.replace(new RegExp("'", 'g'), "''''");
}

String.prototype.Trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, "");
}

String.prototype.ReplaceContainsSingleQuotes = function () {
    return this.replace(new RegExp("'", 'g'), "''");
}

Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}

var checkFormData = function (tip, data, event) {
    if (event.target.validity.patternMismatch === true) {
        event.target.setCustomValidity(tip);
        $(event.target).addClass("inputError");//逐字错误显示。 by zhanghai 20170705
    }
    else {
        event.target.setCustomValidity('');
        $(event.target).removeClass("inputError");
    }
}

//计算时间差，日期
var TimeDifferenceDays = function (tmpTime) {
    var tmpTimeStamp = tmpTime ? Date.parse(tmpTime.replace(/-/gi, "/")) : new Date().getTime();//将 yyyy-mm-dd H:m:s 进行正则匹配
    var nowTime = new Date().getTime();//获取当前时间戳
    var tmpTimeDifference = nowTime - tmpTimeStamp;//计算当前与需要计算的时间的时间戳的差值
    if (tmpTimeDifference < 0) {        //时间超出，不能计算
        return "";
    }
    //计算出相差天数
    var days = Math.floor(tmpTimeDifference / (24 * 3600 * 1000))

    return days;
}
//计算时间差,月份
var TimeDifferenceMonths = function (tmpTime) {
    var tmpTimeStamp = tmpTime ? Date.parse(tmpTime.replace(/-/gi, "/")) : new Date().getTime();//将 yyyy-mm-dd H:m:s 进行正则匹配
    var nowTime = new Date().getTime();//获取当前时间戳
    var tmpTimeDifference = nowTime - tmpTimeStamp;//计算当前与需要计算的时间的时间戳的差值
    if (tmpTimeDifference < 0) {        //时间超出，不能计算
        return "";
    }
    //计算出相差月份
    var months = Math.floor(tmpTimeDifference / (30 * 24 * 3600 * 1000))

    return months;
}
//计算时间差,年份
var TimeDifferenceYears = function (tmpTime) {
    var tmpTimeStamp = tmpTime ? new Date(tmpTime.replace(/-/gi, "/")) : new Date();//将 yyyy-mm-dd H:m:s 进行正则匹配
    var nowTime = new Date();//获取当前时间戳

    //计算出相差月份
    var years = nowTime.getFullYear() - tmpTimeStamp.getFullYear();

    return years > 0 ? years : 0;
}

//XML转JSON格式
var xmlToJson = function (xml) {

    // Create the return object
    var obj = {};

    if (xml.nodeType == 1) { // element
        // do attributes
        if (xml.attributes.length > 0) {
            obj["@attributes"] = {};
            for (var j = 0; j < xml.attributes.length; j++) {
                var attribute = xml.attributes.item(j);
                obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
            }
        }
    } else if (xml.nodeType == 3) { // text
        obj = xml.nodeValue;
    }

    // do children
    if (xml.hasChildNodes()) {
        for (var i = 0; i < xml.childNodes.length; i++) {
            var item = xml.childNodes.item(i);
            var nodeName = item.nodeName;
            if (nodeName == "#text") {
                obj = xmlToJson(item);
            }
            else if (typeof (obj[nodeName]) == "undefined") {
                obj[nodeName] = xmlToJson(item);
            } else {
                if (typeof (obj[nodeName].length) == "undefined") {
                    var old = obj[nodeName];
                    obj[nodeName] = [];
                    obj[nodeName].push(old);
                }
                obj[nodeName].push(xmlToJson(item));
            }
        }
    }
    return obj;
}
//小数转百分数
var RateFormatPercent = function (rate) {
    if (!rate) return null;
    var str = Number(rate * 100).toFixed(2);
    str += "%";
    return str;
}
var RateFormatPercentNullSymbol = function (rate) {
    if (!rate) return null;
    var str = Number(rate * 100);
    return str;
}
//百分数转小数
var PercentFormatepercent = function (percent) {
    if (!percent) return null;
    var rate = Number((percent / 100).toFixed(4));
    return rate;
}
//设置cookie
var setCookie = function (c_name, value, expiredays) {
    var exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    document.cookie = c_name + "=" + escape(value) +
        ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
}

//获取cookie
var getCookie = function (c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=")
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1
            c_end = document.cookie.indexOf(";", c_start)
            if (c_end == -1) c_end = document.cookie.length
            return unescape(document.cookie.substring(c_start, c_end))
        }
    }
    return ""
}

var base64Encode = function (str) {
    var c1, c2, c3;
    var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var i = 0, len = str.length, string = '';

    while (i < len) {
        c1 = str.charCodeAt(i++) & 0xff;
        if (i === len) {
            string += base64EncodeChars.charAt(c1 >> 2);
            string += base64EncodeChars.charAt((c1 & 0x3) << 4);
            string += "==";
            break;
        }
        c2 = str.charCodeAt(i++);
        if (i === len) {
            string += base64EncodeChars.charAt(c1 >> 2);
            string += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
            string += base64EncodeChars.charAt((c2 & 0xF) << 2);
            string += "=";
            break;
        }
        c3 = str.charCodeAt(i++);
        string += base64EncodeChars.charAt(c1 >> 2);
        string += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
        string += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
        string += base64EncodeChars.charAt(c3 & 0x3F);
    }
    return string;
}

//随机数开始
var mixChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    letterChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    numChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var GenerateLetters = function (n) {
    var res = "";
    for (var i = 0; i < n; i++) {
        var id = Math.ceil(Math.random() * letterChars.length - 1);
        res += letterChars[id];
    }
    return res;
}
var GenerateNums = function (n) {
    var res = "";
    for (var i = 0; i < n; i++) {
        var id = Math.ceil(Math.random() * numChars.length - 1);
        res += numChars[id];
    }
    return res;
}
var GenerateMixed = function (n) {
    var res = "";
    for (var i = 0; i < n; i++) {
        var id = Math.ceil(Math.random() * mixChars.length - 1);
        res += mixChars[id];
    }
    return res;
}

//页面导出Excel:
$.exportExcel = function (action, params) {
    var form = $("<form>");//定义一个form表单
    form.attr("style", "display:none");
    form.attr("target", "");
    form.attr("method", "post");
    form.attr("action", action);
    $("body").append(form);//将表单放置在web中
    $.each(params, function (name, value) {
        var input1 = $("<input>");
        arr = [].concat(value);
        input1.attr("type", "hidden");
        input1.attr("name", name);
        input1.attr("value", arr.join(','));
        form.append(input1);
    });
    form.submit();//表单提交 
};
//根据QueryString参数名称获取值
var GetQueryStringByName = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");

    var r = window.location.search.substr(1).match(reg);

    if (r != null) return unescape(r[2]); return null;

}

var CheckIsNull = function (newValue) {
    if (newValue) {
        return newValue;
    }
    return '';
}

//正则表达式统一存放处,此处填写需转义，比如\d 写为 \\d
var regex = {
    MobileRegex: '^0?(13|14|15|17|18)[0-9]{9}$',//手机号码验证
    TelRegex: '^(0[0-9]{2,3}-)?([2-9][0-9]{6,7})+(-[0-9]{1,4})?$',//座机验证
    EmaileRegex: '^([a-zA-Z0-9_-]+\\.{0,1}[a-zA-Z0-9_-]+)@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$',//邮箱验证 ***示例： ,attr:{pattern:regex.EmaileRegex}, event:{input:checkFormData.bind($data,$root.rm.message.ErrorEmailForamt())}
    PriceRegex: '^([1-9][\\d]*|0)(\\.[\\d]{1,6})?$',//价格验证(6位小数)  ***示例：,attr:{pattern:regex.PriceRegex}, event:{input:checkFormData.bind($data,$root.rm.message.OnlyNumberWithDecimalSix())}
    NumberRegex: '^[0-9]+$',//纯数字验证  ***示例：,attr:{pattern:regex.NumberRegex}, event:{input:checkFormData.bind($data,$root.rm.message.OnlyNumber())}
    NaturalNumberRegex: '^[1-9][\\d]*$',//纯数字验证(自然数) ***示例：,attr:{pattern:regex.NaturalNumberRegex}, event:{input:checkFormData.bind($data,$root.rm.message.OnlyNaturalNumber())}
    TwoDecimalsNumberRegex: '^([1-9][\\d]*|0)(\\.[\\d]{1,2})?$',//两位小数验证  ***示例：,attr:{pattern:regex.TwoDecimalsNumberRegex}, event:{input:checkFormData.bind($data,$root.rm.message.OnlyTwoDecimalsNumber())}
    TwoDecimalsNumberAndLessThanHundred: '^(\\d{1,2}(\\.\\d{1,2})?|100|100.0|100.00)$',//最多两位小数，并且不超过100 ***示例：,attr:{pattern:regex.TwoDecimalsNumberAndLessThanHundred}, event:{input:checkFormData.bind($data,$root.rm.message.OnlyTwoDecimalsNumberLessThanHundred())}
    Percentage: '^[0-1]$|^0\.[0-9]+$',//百分比，0到1之间  ***示例：,attr:{pattern:regex.Percentage}, event:{input:checkFormData.bind($data,$root.rm.message.OnlyInZeroAndOne())}
    ZipCode: '^[0-9]{6}$',//邮编  ***示例：,attr:{pattern:regex.ZipCode}, event:{input:checkFormData.bind($data,$root.rm.message.NotZipCode())}
    Phone: '^1[3|4|5|7|8][0-9]{9}$',//手机  ***示例：,attr:{pattern:regex.Phone}, event:{input:checkFormData.bind($data,$root.rm.message.NotPhoneNum())}
    RecallCode: '^QR[0-9]{6}$',//服务活动代码规则  ***示例：,attr:{pattern:regex.RecallCode}, event:{input:checkFormData.bind($data,$root.rm.message.NotRecallCode())}
    ThreeDecimalsNumberRegex: '^([1-9][\\d]*|0)(\\.[\\d]{1,3})?$',//三位小数验证  ***示例：,attr:{pattern:regex.ThreeDecimalsNumberRegex}, event:{input:checkFormData.bind($data,$root.rm.message.OnlyThreeDecimalsNumber())}
    TwoDecimalsNumberRegex2: '^[\\-]?([1-9][\\d]*|0)(\\.[\\d]{1,2})?$',//两位小数验证  ***示例：,attr:{pattern:regex.TwoDecimalsNumberRegex2}, event:{input:checkFormData.bind($data,$root.rm.message.OnlyTwoDecimalsNumber())}
}

//生成一个GUID，示例：newGuid()
function newGuid() {
    var guid = "";
    for (var i = 1; i <= 32; i++) {
        var n = Math.floor(Math.random() * 16.0).toString(16);
        guid += n;
        if ((i == 8) || (i == 12) || (i == 16) || (i == 20))
            guid += "-";
    }
    return guid;
}

/**
 * 获取指定年月的第一天
 */
function getYearMonthFirstDay(yearMonth) {
    yearMonth = yearMonth.replace(/-/g, "/");
    var date = new Date(yearMonth);
    date.setDate(1);
    return date;
}

/**
 * 获取指定年月的最后一天
 */
function getYearMonthLastDay(yearMonth) {
    var date = new Date(yearMonth.replace(/-/g, "/"));
    var currentMonth = date.getMonth();
    var nextMonth = ++currentMonth;
    var nextMonthFirstDay = new Date(date.getFullYear(), nextMonth, 1);
    var oneDay = 1000 * 60 * 60 * 24;
    return new Date(nextMonthFirstDay - oneDay);
}


//判断当前字符串是否以suffix结束
String.prototype.endsWith = function (suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};
