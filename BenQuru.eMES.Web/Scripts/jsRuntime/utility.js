define(['durandal/system', 'jsRuntime/configManager'],
    function (system, cm) {
        var utility = {
            getQueryString: function (name) {
                var result = location.href.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
                if (result == null || result.length < 1) return null;
                return result[1];
            },
            getResourcePath: function (path) {
                rsPath = path.substr(0, path.lastIndexOf('/') + 1);
                return rsPath;
            },
            getAuthorizationHearder: function () {
                var token = sessionStorage.getItem("access_token");
                var headers = {};
                if (token)
                    headers.Authorization = 'Bearer ' + token;
                return headers;
            },
            httpDelete: function (url, contentType, dataType, context) {
                return utility.httpMethod(url, 'delete', null, contentType, dataType, context);
            },
            httpGet: function (url, contentType, dataType, context, nobust) {
                return utility.httpMethod(url, 'get', null, contentType, dataType, context, nobust);
            },
            httpPost: function (url, data, contentType, dataType, context) {
                return utility.httpMethod(url, 'post', data, contentType, dataType, context);
            },
            httpPut: function (url, data, contentType, dataType, context) {
                return utility.httpMethod(url, 'put', data, contentType, dataType, context);
            },
            httpPatch: function (url, data, contentType, dataType, context) {
                return utility.httpMethod(url, 'Patch', data, contentType, dataType, context);
            },
            httpSyncGet: function (url, contentType, dataType, context, nobust) {
                if (!nobust) {
                    //去除服务器端缓存
                    if (url.indexOf('?&') > 0)
                        url = url.replace('?&', '?bust=' + (new Date()).getTime() + '&');
                    else if (url.indexOf('?') > 0)
                        url = url.replace('?', '?bust=' + (new Date()).getTime() + '&');
                    else
                        url += '?bust=' + (new Date()).getTime();
                }
                var headers = utility.getAuthorizationHearder();
                var ret = null;
                headers["Accept-Language"] = cm.client.culture;
                $.ajax({
                    url: utility.escapeStringInUrl(url),
                    contentType: contentType || 'application/json; charset=utf-8',
                    headers: headers,
                    type: "get",
                    data: null,
                    dataType: dataType || 'json',
                    context: context || this,
                    async: false
                }).done(function (data) {
                    ret = data;
                }).fail(function (ex) {
                    var message = ex.message || ex.responseText;
                    console.log('Failed to get data to (' + url + '). Details: ' + message);
                });
                return ret;
            },
            httpMethod: function (url, type, data, contentType, dataType, context, nobust) {
                if (!nobust) {
                    //去除服务器端缓存
                    if (url.indexOf('?&') > 0)
                        url = url.replace('?&', '?bust=' + (new Date()).getTime() + '&');
                    else if (url.indexOf('?') > 0)
                        url = url.replace('?', '?bust=' + (new Date()).getTime() + '&');
                    else
                        url += '?bust=' + (new Date()).getTime();
                }

                return system.defer(function (dfd) {
                    var headers = utility.getAuthorizationHearder();
                    headers["Accept-Language"] = cm.client.culture;
                    $.ajax({
                        url: utility.escapeStringInUrl(url),
                        contentType: contentType || 'application/json; charset=utf-8',
                        headers: headers,
                        type: type,
                        data: data,
                        dataType: dataType || 'json',
                        context: context || this
                    }).done(function (data) {
                        dfd.resolve(data);
                    }).fail(function (ex) {
                        var message = ex.message || ex.responseText;
                        console.log('Failed to ' + type + ' data to (' + url + '). Details: ' + message);
                        dfd.reject(ex);
                    })
                }).promise();;
            },

            escapeStringInUrl: function (url) {

                var start = 0;
                var pos1 = url.indexOf("'");
                var pos2 = url.indexOf("'", pos1 + 1);
                var values = [];
                while (pos1 > 0 && pos2 > 0) {
                    values.push({ value: "'" + url.substring(pos1 + 1, pos2) + "'", updatedValue: "'" + encodeURIComponent($.trim(unescape(url.substring(pos1 + 1, pos2)))) + "'" });
                    pos1 = url.indexOf("'", pos2 + 1);
                    pos2 = url.indexOf("'", pos1 + 1);
                }
                for (var i = 0; i < values.length; i++) {
                    url = url.replace(values[i].value, values[i].updatedValue)
                }
                return url;

            },
            //获取模版文件内容
            GetTemplate: function (name, successCallback, failCallback) {
                var templateContent = window.sessionStorage["HtmlTemplate-" + name];
                if (templateContent != null) {
                    successCallback(templateContent);
                }
                else {
                    var templatePath = "../TempFiles/HtmlTemplates/" + name + ".html";
                    //if (GeelyCRM.Main.Utility.RootPath != null) {
                    //    templatePath = GeelyCRM.Main.Utility.RootPath + "HtmlTemplates/" + name + ".html";
                    //}
                    var now = new Date();
                    var templatePath = templatePath + "?data=" + now.getSeconds().toString();

                    $.ajax({
                        url: templatePath,
                        type: "Get",
                        async: true,
                        data: null,
                        headers: null,
                        dataType: "text",
                        success: function (data, status, xhr) {
                            window.sessionStorage["HtmlTemplate-" + name] = data;
                            successCallback(data);

                        },
                        error: function (xhr, status, error) {
                            failCallback(error);
                        }
                    });
                }
            },
            FileDelete: function (id, regardingData, successCallback, failCallback) {
                var serviceUrl = "/api/SysUploadFiles/DeleteSysUploadFile?id=" + encodeURIComponent(id) + "&regardingType=" + regardingData.RegardingType + "&regardingKey=" + regardingData.RegardingKey;
                $.ajax({
                    url: serviceUrl,
                    type: "DELETE",
                    async: false,
                    data: null,
                    headers: utility.getAuthorizationHearder(),
                    dataType: "json",
                    success: function (data) {                            
                        successCallback(data);
                    },
                    error: function (xhr, status, error) {
                        failCallback(xhr, status, error);
                    }
                });
            },
            GetAliOSSAccessUrl: function (data, successCallback, failCallback) {
                if (data.Result) {
                    var serviceUrl = "/api/SysUploadFiles/getaliossaccessurl?id=" + encodeURIComponent(data.FileId);
                    $.ajax({
                        url: serviceUrl,
                        type: "Get",
                        async: false,
                        data: null,
                        headers: utility.getAuthorizationHearder(),
                        dataType: "json",
                        success: function (url) {
                            successCallback(url.replace("http", "https"));
                        },
                        error: function (xhr, status, error) {
                            failCallback(xhr, status, error);
                        }
                    });
                } else {
                    app.showMessage(self.rm.message.ExportErr() + ":" + data.Description,
                        self.rm.message.alertTitle(),
                        [{ text: self.rm.button.buttonConfirm(), value: "Yes" }]);
                }
            },
            QRTxtToUtf8: function (str) {
                var out, i, len, c;
                out = "";
                len = str.length;
                for (i = 0; i < len; i++) {
                    c = str.charCodeAt(i);
                    if ((c >= 0x0001) && (c <= 0x007F)) {
                        out += str.charAt(i);
                    } else if (c > 0x07FF) {
                        out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
                        out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
                        out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
                    } else {
                        out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
                        out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
                    }
                }
                return out;
            },
            //判断值是否为空
            isEmpty: function (val) {
                if (val === undefined) {
                    return true;
                }
                if (val === null) {
                    return true;
                }
                if (val === "") {
                    return true;
                }
                return false;
            }
        };
        (function (util) {
            var objProto = Object.prototype;
            var arrProto = Array.prototype;
            var aslice = arrProto.slice;
            var otoStr = objProto.toString;
            var emptyFn = function () { };
            emptyFn.isEmpty = true;

            var Logger = function () {
                var opts = {
                    output: function (lv, params) {
                        try {
                            params || (params = []);
                            var t = new Date();
                            var s = (lv || "#debug") + "(" + t.getFullYear() + "-" + t.getMonth() + "-" + t.getDate() + "T" + t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds() + "." + t.getMilliseconds() + (t.getTimezoneOffset() / 60) + ")";
                            params.unshift(s);
                            console.log.apply(console, params);
                        } catch (ignore) { }
                    },
                    levels: ["trace", "debug", "activity", "sys", "info", "notice", 'success', "warn", "error"],
                    defaultLevel: "debug"
                }
                var reset = function (output, lvs) {
                    var levels = this["@levels"];
                    var elvs = [];
                    for (var n in levels) {
                        var name = n.substring(2);
                        elvs.push(name);
                        delete this[name];
                    }
                    if (lvs) this["@levels"] = levels = {};
                    else lvs = elvs;
                    if (!output) output = this["@output"];
                    else this["@output"] = output;
                    for (var i in lvs) {
                        var lv = lvs[i];
                        (function (logger, name, levels, output, aslice) {
                            var name1 = "##" + name;

                            var fn = levels[name1] = utility[name] = logger[name] = function () {
                                var params = aslice.call(arguments);
                                output.call(logger, name1, params);
                                return this;
                            }
                            fn.__isLogger = true;
                        })(this, lv, levels, output, aslice);
                    }
                };
                this.enable = function () {
                    var lvs = this["@levels"];
                    if (arguments.length == 0) {
                        for (var n in lvs) {
                            var name = n.substr(2);
                            var fn = lvs[n];
                            fn.isDisabled = false;
                            this[name] = fn;
                        }
                        return this;
                    }

                    for (var i = 0, j = arguments.length; i < j; i++) {
                        var n = arguments[i]; if (!n) continue;
                        var stored = lvs["##" + n];
                        if (stored) {
                            this[n] = utility[n] = stored;
                            stored.isDisabled = false;
                        }
                    }
                    return this;
                }
                this.disable = function () {
                    var lvs = this["@levels"];
                    if (arguments.length == 0) {

                        for (var n in lvs) {
                            var name = n.substr(2);
                            var fn = lvs[n];
                            fn.isDisabled = true;
                            this[name] = emptyFn;
                        }
                        return this;
                    }
                    for (var i = 0, j = arguments.length; i < j; i++) {
                        var n = arguments[i]; if (!n) continue;
                        var stored = lvs["##" + n];
                        if (!stored) continue;
                        stored.isDisabled = true;
                        var fn = this[n] = emptyFn;
                    }
                    return this;
                }
                this.reset = function (opts) {
                    if (opts.output) this["@output"] = opts.output;
                    reset.call(this, opts.output, opts.levels);
                    if (opts.defaultLevel) this["@defaultLevel"] = "##" + opts.defaultLevel;
                    if (opts.enables) this.enable.apply(this, opts.enables);
                    if (opts.disables) this.disables.apply(this, opts.disables);
                    return this;
                }
                this.reset(opts);
            };
            Logger.create = function () {
                var result = function () {

                    if (arguments.length == 0) return log;
                    var params = aslice.call(arguments);
                    var lv = params.shift();
                    var lvs = log["@levels"];
                    var lvFn = lvs[lv];
                    if (!lvFn) {
                        lv = log["@defaultLevel"];
                        lvFn = lvs[lv];
                    }
                    if (lvFn) {
                        if (lvFn.isDisabled !== true) log["@output"].call(log, lv, params);
                    }
                    return log;
                }
                Logger.call(result);
                var log = result;
                return result;
            }

            window.$log = util.log = Logger.create();
        })(utility);


        return utility;
    });