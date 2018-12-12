//字符串格式化方法
String.prototype.format = function () {
    var args = arguments;

    var result = this.replace(/\{(\d+)}(?!})/g, function (s, i) {
        return args[i];
    });

    return result.replace(/}}/, "}");
};

//转换html字符串为文本字符串
String.prototype.ConvertHTML = function () {
    return this.replace(/&/,"&amp;").replace(/</,"&lt;").replace(/>/,"&gt;").replace(/'/,"&apos;").replace(/"/,"&quot;").replace(/\\r\\n/,"<br>");
};






var GeelyCRM = {};
GeelyCRM.Main = {};
GeelyCRM.Main.View = {};
GeelyCRM.Main.View.Utility = {};
GeelyCRM.Main.Utility = {};


GeelyCRM.Main.View.Utility.EasyUiParserOnCompletes = [];

/*
    获取lcid对应的语言名称服务
*/
GeelyCRM.Main.View.Utility.LcidMappingService = function (lcid) {
    var mapping = {
        "1033": "en",
        "2052": "zh_CN",
        "1028": "zh_TW"
    };

    var name = mapping[lcid.toString()];
    if (!name) {
        return "zh_CN";
    }
    return name;
};

/*执行处理
  会显示遮挡层，当所有处理完成，遮挡层取消
 */
GeelyCRM.Main.View.Utility.Execute = function (containerId,callBack) {
    var load = function () {
        $("<div class=\"datagrid-mask\"></div>").css({ display: "block", width: "100%", height: $(window).height() }).appendTo("body");
        $("<div class=\"datagrid-mask-msg\"></div>").html(GeelyCRM.Main.Utility.Language.GetText(GeelyCRM.Main.Utility.Language.TextNames.ExecutingText, GeelyCRM.Main.Utility.LoginUser.Lcid)).appendTo("body").css({ display: "block", left: ($(document.body).outerWidth(true) - 190) / 2, top: ($(window).height() - 45) / 2 });
    };
    var disLoad = function () {
        $(".datagrid-mask").remove();
        $(".datagrid-mask-msg").remove();
    };

    var waitObj = {};

    load();

    var preOnComplete = $.parser.onComplete;

    var clear = function () {
        $.parser.onComplete = preOnComplete;
        disLoad();
    }


    callBack(waitObj, clear);

    var parallelWait = new GeelyCRM.Main.Utility.ParallelWait(waitObj);
    parallelWait.Wait(function () {
        if (GeelyCRM.Main.View.Utility.EasyUiParserOnCompletes.length > 0) {
            $.parser.onComplete = function () {
                var length = GeelyCRM.Main.View.Utility.EasyUiParserOnCompletes.length;
                if (length > 0) {
                    var waitObj = {};
                    for (var index = 0; index <= length - 1; index++) {
                        var fun = GeelyCRM.Main.View.Utility.EasyUiParserOnCompletes[index];
                        fun(waitObj);
                    }
                    GeelyCRM.Main.View.Utility.EasyUiParserOnCompletes = [];

                    var parallelWait = new GeelyCRM.Main.Utility.ParallelWait(waitObj);
                    parallelWait.Wait(function () {
                        $.parser.onComplete = preOnComplete;
                        disLoad();
                    });

                }

            };
            //装载EasyUI
            if (containerId) {
                $.parser.parse("#"+containerId);
            }
            else {
                $.parser.parse();
            }
        }
        else {
            disLoad();
        }

    });

};


GeelyCRM.Main.Utility.RootPath = null;

//系统版本号
GeelyCRM.Main.Utility.Version = {};
GeelyCRM.Main.Utility.Version.Value = "1.1.0";
//系统版本号初始化
GeelyCRM.Main.Utility.Version.Init = function (successCallback,failCallback) {
    var url = "../Datas/version.js";
    if (GeelyCRM.Main.Utility.RootPath != null) {
        url = GeelyCRM.Main.Utility.RootPath + "Datas/version.js";
    }
    $.ajax({
        url: url,
        type: "Get",
        async: true,
        data: null,
        dataType: "json",
        success: function (data, status, xhr) {
            GeelyCRM.Main.Utility.Version.Value = data.Version;
            successCallback();
        },
        error: function (xhr, status, error) {
            var message = error;
            if (xhr.responseJSON && xhr.responseJSON.Message) {
                var message = xhr.responseJSON.Message;
            }
            failCallback(message);
        }
    })
};

//封装SessionStorage操作
//使之与版本号关联，如果数据的版本号与当前系统版本号不一致，则返回null
//存储的数据格式为Json
GeelyCRM.Main.Utility.SessionStorage = {};
GeelyCRM.Main.Utility.SessionStorage.Get = function (name) {
    var strData = window.sessionStorage[name];
    if (strData != null) {
        var data = JSON.parse(strData);
        if (data.Version === GeelyCRM.Main.Utility.Version.Value) {
            return data.Data;
        }
    }
    
    return null;
};
GeelyCRM.Main.Utility.SessionStorage.Set = function (name, value) {
    var data = { "Data": value, "Version": GeelyCRM.Main.Utility.Version.Value };
    window.sessionStorage[name] = JSON.stringify(data);
}
//存储的名称集合
GeelyCRM.Main.Utility.SessionStorage.Names = {};
//登陆用户信息数据
GeelyCRM.Main.Utility.SessionStorage.Names.LoginUserData = "LoginUserData";
//多语言数据
GeelyCRM.Main.Utility.SessionStorage.Names.LanguageData = "LanguageData";
//登录用户Token
GeelyCRM.Main.Utility.SessionStorage.Names.LoginUserToken = "LoginUserToken";
//MA系统基地址
GeelyCRM.Main.Utility.SessionStorage.Names.MaBaseUrl = "MaBaseUrl";
//ExtensionWeb基地址
GeelyCRM.Main.Utility.SessionStorage.Names.ExtensionWebBaseUrl = "ExtensionWebBaseUrl";

GeelyCRM.Main.Utility.QuerystringService = {};
GeelyCRM.Main.Utility.QuerystringService._querystringObj = {};
GeelyCRM.Main.Utility.QuerystringService._querystringObj.IsLoad = false;
GeelyCRM.Main.Utility.QuerystringService._querystringObj.Load = function () {
    var _querystring = window.location.search.substring(1);
    var _re = /[^&=]+=[^&]*(?=&|$)/g;
    var _strlist = _querystring.match(_re);

    if (_strlist != null) {
        var index, length;
        var tempitem;
        var temparray;
        length = _strlist.length;
        for (index = 0; index <= length - 1; index++) {
            tempitem = _strlist[index].split("=");
            if (!eval("GeelyCRM.Main.Utility.QuerystringService._querystringObj.N" + tempitem[0] + "==undefined")) {
                eval("GeelyCRM.Main.Utility.QuerystringService._querystringObj.N" + tempitem[0] + ".push(\"" + decodeURIComponent(tempitem[1]) + "\");");
            }
            else {
                temparray = new Array();
                temparray.push(decodeURIComponent(tempitem[1]));
                eval("GeelyCRM.Main.Utility.QuerystringService._querystringObj.N" + tempitem[0] + "=temparray;");
            }
        }
    }
    GeelyCRM.Main.Utility.QuerystringService._querystringObj.IsLoad = true;
};
GeelyCRM.Main.Utility.QuerystringService.GetQuerystring = function (name) {
    var returnValue;
    if (!GeelyCRM.Main.Utility.QuerystringService._querystringObj.IsLoad) {
        GeelyCRM.Main.Utility.QuerystringService._querystringObj.Load();
    }
    if (eval("GeelyCRM.Main.Utility.QuerystringService._querystringObj.N" + name + "==undefined")) {
        return null;
    }
    else {
        eval("returnValue=GeelyCRM.Main.Utility.QuerystringService._querystringObj.N" + name + ".toString();");
        return returnValue;
    }
};

GeelyCRM.Main.Utility.QuerystringService.GetQuerystrings = function (name) {
    var returnValue;
    if (!GeelyCRM.Main.Utility.QuerystringService._querystringObj.IsLoad) {
        GeelyCRM.Main.Utility.QuerystringService._querystringObj.Load();
    }
    if (eval("GeelyCRM.Main.Utility.QuerystringService._querystringObj.N" + name + "==undefined")) {
        return null;
    }
    else {
        eval("returnValue=GeelyCRM.Main.Utility.QuerystringService._querystringObj.N" + name + ";");
        return returnValue;
    }
};

GeelyCRM.Main.Utility.QuerystringService.GetExistQuerystring = function (strSearch, name) {
    var _re = new RegExp(name + "=([^&]*)(?=&|$)", "g");
    _re.exec(strSearch);
    return decodeURIComponent(RegExp.$1);
};

//错误号定义
GeelyCRM.Main.Utility.Error = {};
//获取模板错误
GeelyCRM.Main.Utility.Error.GetTemplateError = 210001;
//多语言尚未初始化
GeelyCRM.Main.Utility.Error.LanguageNotInit = 210002;
//指定的多语言文本名称不存在
GeelyCRM.Main.Utility.Error.LanguageNameNotFound = 210003;
//指定的多语言文本名称的语言编号不存在
GeelyCRM.Main.Utility.Error.LanguageNameLcidNotFound = 210004;
//获取多语言数据错误
GeelyCRM.Main.Utility.Error.GetLanguageDataError = 210005;
//路由未找到
GeelyCRM.Main.Utility.Error.RouteNotFound = 210006;
//获取版本号错误
GeelyCRM.Main.Utility.Error.GetVersionError = 210007;
//登陆用户信息初始化错误
GeelyCRM.Main.Utility.Error.LoginUserIninError = 210008;
//获取跳转基地址错误
GeelyCRM.Main.Utility.Error.GetRedirectBaseUrlError = 210009;
//获取用户Token错误
GeelyCRM.Main.Utility.Error.GetUserTokenError = 210010,
//上传文件GridView部件没有在路由中找到RegardingType和RegardingKey
GeelyCRM.Main.Utility.Error.UploadFileGridViewPartNotFoundRegarding = 210011,
//获取MA基地址错误
GeelyCRM.Main.Utility.Error.GetMaBaseUrlError = 210012,
//获取ExtensionWeb基地址错误
GeelyCRM.Main.Utility.Error.GetExtensionWebBaseUrlError = 210013,
//获取用户设置错误
GeelyCRM.Main.Utility.Error.GetUserSettingError = 210014,
//获取阿里OSS上传参数错误
GeelyCRM.Main.Utility.Error.GetAliOSSUploadParamsError = 210015,
//指定的lcid对应的语言名称不存在
GeelyCRM.Main.Utility.Error.LanguageLcidNameNotFound = 210016;


GeelyCRM.Main.Utility.Template = {};
GeelyCRM.Main.Utility.Template.Get = function (name,successCallback,failCallback) {
    var templateContent = window.sessionStorage["HtmlTemplate-" + name];
    if (templateContent != null) {
        successCallback(templateContent);
    }
    else {
        var templatePath = "../HtmlTemplates/" + name + ".html";
        if (GeelyCRM.Main.Utility.RootPath != null) {
            templatePath = GeelyCRM.Main.Utility.RootPath+"HtmlTemplates/" + name + ".html";
        }
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
};

GeelyCRM.Main.Utility.ServerUtility = {
    GetUrl:
        function () {
            return Xrm.Page.context.getClientUrl() + "/";
        },
    GetServerUrl:
        function () {
            return Xrm.Page.context.getClientUrl() + "/xrmservices/2011/organizationdata.svc";
        },
    GetSoapServerUrl:
        function () {
            return Xrm.Page.context.getClientUrl() + "/xrmservices/2011/organization.svc/web";
        },
    GetWebApiUrl:
        function () {
            return Xrm.Page.context.getClientUrl() + "/api/data/v8.1/";
        },
    //1:new
    //2:edit
    //3:view
    GetPageMode:
        function () {
            var strQueryString = window.location.search;
            if (strQueryString.indexOf("pagetype=entitylist") != -1) {
                return 3;
            } else {
                var formType = Xrm.Page.ui.getFormType();
                if (formType == 1 || formType == 5) {
                    return 1;
                } else {
                    return 2;
                }

            }
        },
    GetUserId:
        function () {
            return Xrm.Page.context.getUserId();
        },
    /*
    名称：获取实体名的复数名称
    参数：
        entityName:实体名称
    返回值：
        实体复数名称
    */
    GetCollectionName:
        function (entityName) {
            var entityCollectionName;
            var lastChar = entityName.substring(entityName.length - 1);
            if (lastChar == "y") {
                entityCollectionName = entityName.substring(0, entityName.length - 1) + "ies";
            }
            else if (lastChar == "s") {
                entityCollectionName = entityName + "es";
            }
            else {
                entityCollectionName = entityName + "s";
            }

            return entityCollectionName;
        }
};

GeelyCRM.Main.Utility.ExtendServiceInit = function () {
    var serviceURL;
    serviceURL = window.location.protocol + "//" + window.location.host + ":8082/";


    try {
        AvanadeCRMSign.Utility.ExtendServer.IsEnable = true;
        AvanadeCRMSign.Utility.ExtendServer.ServerURL = serviceURL + "GetUIInfo.svc/Do";
        AvanadeCRMSign.Utility.ExtendServer.CallBackName = "callback";
    }
    catch (ex) {
    }
};

GeelyCRM.Main.Utility.ExtendServiceInit();

//提供针对CRM WebApi的所有操作封装
GeelyCRM.Main.Utility.WebApi = {
    /*
        名称：执行未绑定操作
        参数：
            actionName：操作名称
            additionalHeaders：需要附加在httphead中的键值对，格式为{"name1":"value1","name2":"value2"},如果为空，则赋值null
            jsonBody:需要传递的json主体内容，格式为{"xxx":"xxx","xx":"xxx"},如果为空，则赋值null
            successCallback:成功返回后的回调函数,格式为function(data){}
            failCallback:发生错误后的回调函数，格式为function(xhr,status,error){}
    */
    ExecuteUnBoundAction: function (actionName, additionalHeaders, jsonBody, successCallback, failCallback) {
        var apiUrl = GeelyCRM.Main.Utility.ServerUtility.GetWebApiUrl() + actionName;
        if (additionalHeaders == null) {
            additionalHeaders = {};
        }

        var defauteHeaders = { "OData-MaxVersion": "4.0", "OData-Version": "4.0", "Accept": "application/json; charset=utf-8" };
        var strData = "";
        if (jsonBody != null) {
            strData = JSON.stringify(jsonBody);
        }

        $.ajax({
            url: apiUrl,
            dataType: "json",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            headers: $.extend({}, defauteHeaders, additionalHeaders),
            data: strData,
            success: function (data) {
                successCallback(data);
            },
            error: function (xhr, status, error) {
                failCallback(xhr, status, error);
            }
        });
    },
    /*名称：执行绑定操作
      参数：
            actionName：操作名称
            entityName：要绑定的实体名称
            entityId：要绑定的实体Id，如果是面向集合的操作，该值为null
            additionalHeaders：需要附加在httphead中的键值对，格式为{"name1":"value1","name2":"value2"}，如果为空，则赋值null
            jsonBody:需要传递的json主体内容
            successCallback:成功返回后的回调函数,格式为function(data){}
            failCallback:发生错误后的回调函数，格式为function(xhr,status,error){}
    */
    ExecuteBoundAction: function (actionName, entityName, entityId, additionalHeaders, jsonBody, successCallback, failCallback) {
        var entityIfo = GeelyCRM.Main.Utility.ServerUtility.GetCollectionName(entityName);
        if (entityId != null) {
            entityIfo = entityIfo + "(" + entityId.replace("{", "").replace("}", "") + ")";
        }
        var apiUrl = GeelyCRM.Main.Utility.ServerUtility.GetWebApiUrl() + entityIfo + "/Microsoft.Dynamics.CRM." + actionName;
        if (additionalHeaders == null) {
            additionalHeaders = {};
        }

        var defauteHeaders = { "OData-MaxVersion": "4.0", "OData-Version": "4.0", "Accept": "application/json; charset=utf-8" };
        var strData = "";
        if (jsonBody != null) {
            strData = JSON.stringify(jsonBody);
        }

        $.ajax({
            url: apiUrl,
            dataType: "json",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            headers: $.extend({}, defauteHeaders, additionalHeaders),
            data: strData,
            success: function (data) {
                successCallback(data);
            },
            error: function (xhr, status, error) {
                failCallback(xhr, status, error);
            }
        });
    },

    /*
    名称：执行未绑定函数
    参数：
            funName：函数名称
            additionalHeaders：需要附加在httphead中的键值对，格式为{"name1":"value1","name2":"value2"}，如果为空，则赋值null
            parameterIno:需要传递参数信息，字符串，如果为空，则赋值null
            successCallback:成功返回后的回调函数,格式为function(data){}
            failCallback:发生错误后的回调函数，格式为function(xhr,status,error){}
    */
    ExecuteUnBoundFunction: function (funName, additionalHeaders, parameterIno, successCallback, failCallback) {
        var apiUrl = GeelyCRM.Main.Utility.ServerUtility.GetWebApiUrl() + funName + parameterIno;
        if (additionalHeaders == null) {
            additionalHeaders = {};
        }

        var defauteHeaders = { "OData-MaxVersion": "4.0", "OData-Version": "4.0", "Accept": "application/json; charset=utf-8" };

        $.ajax({
            url: apiUrl,
            dataType: "json",
            type: "GET",
            contentType: "application/json; charset=utf-8",
            headers: $.extend({}, defauteHeaders, additionalHeaders),
            success: function (data) {
                successCallback(data);
            },
            error: function (xhr, status, error) {
                failCallback(xhr, status, error);
            }
        });
    },

    /*
    名称：执行绑定函数
    参数：
        funName：函数名称
        entityName：要绑定的实体名称
        entityId：要绑定的实体Id，如果是面向集合的操作，该值为null
        additionalHeaders：需要附加在httphead中的键值对，格式为{"name1":"value1","name2":"value2"}，如果为空，则赋值null
        parameterIno:需要传递参数信息，字符串，如果为空，则赋值null
        successCallback:成功返回后的回调函数,格式为function(data){}
        failCallback:发生错误后的回调函数，格式为function(xhr,status,error){}
*/
    ExecuteBoundFunction: function (funName, entityName, entityId, additionalHeaders, parameterIno, successCallback, failCallback) {
        var entityIfo = GeelyCRM.Main.Utility.ServerUtility.GetCollectionNam(entityName);
        if (entityId != null) {
            entityIfo = entityIfo + "(" + entityId.replace("{", "").replace("}", "") + ")";
        }
        var apiUrl = GeelyCRM.Main.Utility.ServerUtility.GetWebApiUrl() + entityIfo + "/Microsoft.Dynamics.CRM." + funName + parameterIno;
        if (additionalHeaders == null) {
            additionalHeaders = {};
        }

        var defauteHeaders = { "OData-MaxVersion": "4.0", "OData-Version": "4.0", "Accept": "application/json; charset=utf-8" };

        $.ajax({
            url: apiUrl,
            dataType: "json",
            type: "GET",
            contentType: "application/json; charset=utf-8",
            headers: $.extend({}, defauteHeaders, additionalHeaders),
            success: function (data) {
                successCallback(data);
            },
            error: function (xhr, status, error) {
                failCallback(xhr, status, error);
            }
        });
    },
    /*
    名称：创建记录
    参数：
        entityName：实体名称
        additionalHeaders：需要附加在httphead中的键值对，格式为{"name1":"value1","name2":"value2"}，如果为空，则赋值null
        jsonBody：实体的json形式数据,格式为{"attName1":"attValue","attName2":"attValue2"}
        successCallback:成功返回后的回调函数,格式为function(data){},其中data为创建的记录的guid
        failCallback:发生错误后的回调函数，格式为function(xhr,status,error){}
    */
    CreateRecord: function (entityName, additionalHeaders, jsonBody, successCallback, failCallback) {
        var entityIfo = GeelyCRM.Main.Utility.ServerUtility.GetCollectionName(entityName);

        var apiUrl = GeelyCRM.Main.Utility.ServerUtility.GetWebApiUrl() + entityIfo;
        if (additionalHeaders == null) {
            additionalHeaders = {};
        }

        var defauteHeaders = { "OData-MaxVersion": "4.0", "OData-Version": "4.0", "Accept": "application/json; charset=utf-8" };
        var strData = "";
        if (jsonBody != null) {
            strData = JSON.stringify(jsonBody);
        }

        $.ajax({
            url: apiUrl,
            dataType: "json",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            headers: $.extend({}, defauteHeaders, additionalHeaders),
            data: strData,
            success: function (data, status, xhr) {
                var strEntityId = xhr.getResponseHeader("OData-EntityId");
                var re = /\(([A-Za-z0-9-]+)\)/g;
                var strlist = re.exec(strEntityId);
                var entityId = strlist[1];

                successCallback(entityId);
            },
            error: function (xhr, status, error) {
                failCallback(xhr, status, error);
            }
        });
    },
    /*
    名称：修改记录
    参数：
        entityName：实体名称
        entityId：实体编号
        additionalHeaders：需要附加在httphead中的键值对，格式为{"name1":"value1","name2":"value2"}，如果为空，则赋值null
        jsonBody：实体的json形式数据,格式为{"attName1":"attValue","attName2":"attValue2"}
        successCallback:成功返回后的回调函数,格式为function(){}
        failCallback:发生错误后的回调函数，格式为function(xhr,status,error){}
    */
    UpdateRecord: function (entityName, entityId, additionalHeaders, jsonBody, successCallback, failCallback) {
        var entityIfo = GeelyCRM.Main.Utility.ServerUtility.GetCollectionName(entityName);
        entityIfo = entityIfo + "(" + entityId.replace("{", "").replace("}", "") + ")";
        var apiUrl = GeelyCRM.Main.Utility.ServerUtility.GetWebApiUrl() + entityIfo;
        if (additionalHeaders == null) {
            additionalHeaders = {};
        }

        var defauteHeaders = { "OData-MaxVersion": "4.0", "OData-Version": "4.0", "Accept": "application/json; charset=utf-8" };
        var strData = "";
        if (jsonBody != null) {
            strData = JSON.stringify(jsonBody);
        }

        $.ajax({
            url: apiUrl,
            dataType: "json",
            type: "PATCH",
            contentType: "application/json; charset=utf-8",
            headers: $.extend({}, defauteHeaders, additionalHeaders),
            data: strData,
            success: function (data, status, xhr) {
                successCallback();
            },
            error: function (xhr, status, error) {
                failCallback(xhr, status, error);
            }
        });
    },
    /*
    名称：修改记录中的单个属性
    参数：
        entityName：实体名称
        entityId：实体编号
        attributeName：属性名称
        additionalHeaders：需要附加在httphead中的键值对，格式为{"name1":"value1","name2":"value2"}，如果为空，则赋值null
        jsonBody：实体的json形式数据,格式为{"attName1":"attValue","attName2":"attValue2"}
        successCallback:成功返回后的回调函数,格式为function(){}
        failCallback:发生错误后的回调函数，格式为function(xhr,status,error){}
    */
    UpdateRecordSingleAttribute: function (entityName, entityId, attributeName, additionalHeaders, jsonBody, successCallback, failCallback) {
        var entityIfo = GeelyCRM.Main.Utility.ServerUtility.GetCollectionName(entityName);
        entityIfo = entityIfo + "(" + entityId.replace("{", "").replace("}", "") + ")/" + attributeName;

        var apiUrl = GeelyCRM.Main.Utility.ServerUtility.GetWebApiUrl() + entityIfo;
        if (additionalHeaders == null) {
            additionalHeaders = {};
        }

        var defauteHeaders = { "OData-MaxVersion": "4.0", "OData-Version": "4.0", "Accept": "application/json; charset=utf-8" };
        var strData = "";
        if (jsonBody != null) {
            strData = JSON.stringify(jsonBody);
        }

        $.ajax({
            url: apiUrl,
            dataType: "json",
            type: "PATCH",
            contentType: "application/json; charset=utf-8",
            headers: $.extend({}, defauteHeaders, additionalHeaders),
            data: strData,
            success: function (data, status, xhr) {
                successCallback();
            },
            error: function (xhr, status, error) {
                failCallback(xhr, status, error);
            }
        });
    },

    /*
    名称：删除记录
    参数：
        entityName：实体名称
        entityId：实体编号
        additionalHeaders：需要附加在httphead中的键值对，格式为{"name1":"value1","name2":"value2"}，如果为空，则赋值null
        successCallback:成功返回后的回调函数,格式为function(){}
        failCallback:发生错误后的回调函数，格式为function(xhr,status,error){}
    */
    DeleteRecord: function (entityName, entityId, additionalHeaders, successCallback, failCallback) {
        var entityIfo = GeelyCRM.Main.Utility.ServerUtility.GetCollectionName(entityName);
        entityIfo = entityIfo + "(" + entityId.replace("{", "").replace("}", "") + ")";

        var apiUrl = GeelyCRM.Main.Utility.ServerUtility.GetWebApiUrl() + entityIfo;
        if (additionalHeaders == null) {
            additionalHeaders = {};
        }

        var defauteHeaders = { "OData-MaxVersion": "4.0", "OData-Version": "4.0", "Accept": "application/json; charset=utf-8" };


        $.ajax({
            url: apiUrl,
            dataType: "json",
            type: "DELETE",
            contentType: "application/json; charset=utf-8",
            headers: $.extend({}, defauteHeaders, additionalHeaders),
            success: function (data, status, xhr) {
                successCallback();
            },
            error: function (xhr, status, error) {
                failCallback(xhr, status, error);
            }
        });
    },
    /*
    名称：删除记录中的单个属性（除lookup类型以外）
    参数：
        entityName：实体名称
        entityId：实体编号
        attributeName：要删除的属性名称
        additionalHeaders：需要附加在httphead中的键值对，格式为{"name1":"value1","name2":"value2"}，如果为空，则赋值null
        successCallback:成功返回后的回调函数,格式为function(){}
        failCallback:发生错误后的回调函数，格式为function(xhr,status,error){}
    */
    DeleteRecordAttribute: function (entityName, entityId, attributeName, additionalHeaders, successCallback, failCallback) {
        var entityIfo = GeelyCRM.Main.Utility.ServerUtility.GetCollectionName(entityName);
        entityIfo = entityIfo + "(" + entityId.replace("{", "").replace("}", "") + ")/" + attributeName;

        var apiUrl = GeelyCRM.Main.Utility.ServerUtility.GetWebApiUrl() + entityIfo;
        if (additionalHeaders == null) {
            additionalHeaders = {};
        }

        var defauteHeaders = { "OData-MaxVersion": "4.0", "OData-Version": "4.0", "Accept": "application/json; charset=utf-8" };


        $.ajax({
            url: apiUrl,
            dataType: "json",
            type: "DELETE",
            contentType: "application/json; charset=utf-8",
            headers: $.extend({}, defauteHeaders, additionalHeaders),
            success: function (data, status, xhr) {
                successCallback();
            },
            error: function (xhr, status, error) {
                failCallback(xhr, status, error);
            }
        });
    },
    /*
    名称：关联记录
    参数：
        entityName：实体名称
        entityId：实体编号
        attributeName：要关联的集合属性或多对多关系名称
        assioateEntityName:要关联的实体名称
        assioateEntityId:要关联的实体编号
        additionalHeaders：需要附加在httphead中的键值对，格式为{"name1":"value1","name2":"value2"}，如果为空，则赋值null
        successCallback:成功返回后的回调函数,格式为function(){}
        failCallback:发生错误后的回调函数，格式为function(xhr,status,error){}
    */
    AssioateRecord: function (entityName, entityId, attributeName, additionalHeaders, assioateEntityName, assioateEntityId, successCallback, failCallback) {
        var entityIfo = GeelyCRM.Main.Utility.ServerUtility.GetCollectionName(entityName);
        entityIfo = entityIfo + "(" + entityId.replace("{", "").replace("}", "") + ")/" + attributeName + "$ref";

        var apiUrl = GeelyCRM.Main.Utility.ServerUtility.GetWebApiUrl() + entityIfo;
        if (additionalHeaders == null) {
            additionalHeaders = {};
        }

        var defauteHeaders = { "OData-MaxVersion": "4.0", "OData-Version": "4.0", "Accept": "application/json; charset=utf-8" };

        var strJson = { "@odata.id": GeelyCRM.Main.Utility.ServerUtility.GetWebApiUrl() + "/" + GeelyCRM.Main.Utility.ServerUtility.GetCollectionName(assioateEntityName) + "(" + assioateEntityId + ")" };

        $.ajax({
            url: apiUrl,
            dataType: "json",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            headers: $.extend({}, defauteHeaders, additionalHeaders),
            data: strJson,
            success: function (data, status, xhr) {
                successCallback();
            },
            error: function (xhr, status, error) {
                failCallback(xhr, status, error);
            }
        });
    },
    /*
    名称：记录解除关联
    参数：
        entityName：实体名称
        entityId：实体编号
        attributeName：要解除关联的集合属性或多对多关系名称
        assioateEntityName:要解除关联的实体名称
        assioateEntityId:要解除关联的实体编号
        additionalHeaders：需要附加在httphead中的键值对，格式为{"name1":"value1","name2":"value2"}，如果为空，则赋值null
        successCallback:成功返回后的回调函数,格式为function(){}
        failCallback:发生错误后的回调函数，格式为function(xhr,status,error){}
    */
    DisAssioationRecord: function (entityName, entityId, attributeName, additionalHeaders, assioateEntityName, assioateEntityId, successCallback, failCallback) {
        var entityIfo = GeelyCRM.Main.Utility.ServerUtility.GetCollectionName(entityName);
        entityIfo = entityIfo + "(" + entityId.replace("{", "").replace("}", "") + ")/" + attributeName + "(" + assioateEntityId + ")$ref";

        var apiUrl = GeelyCRM.Main.Utility.ServerUtility.GetWebApiUrl() + entityIfo;
        if (additionalHeaders == null) {
            additionalHeaders = {};
        }

        var defauteHeaders = { "OData-MaxVersion": "4.0", "OData-Version": "4.0", "Accept": "application/json; charset=utf-8" };


        $.ajax({
            url: apiUrl,
            dataType: "json",
            type: "DELETE",
            contentType: "application/json; charset=utf-8",
            headers: $.extend({}, defauteHeaders, additionalHeaders),
            success: function (data, status, xhr) {
                successCallback();
            },
            error: function (xhr, status, error) {
                failCallback(xhr, status, error);
            }
        });
    },

    /*
    名称：查询单个记录
    参数：
        entityName:实体名称
        entityId：用户编号或者自定义组合主键，格式为"attName1='xxx',attName2='xxx'"
        additionalHeaders：需要附加在httphead中的键值对，格式为{"name1":"value1","name2":"value2"}，如果为空，则赋值null
        strSelect：要检索的属性，格式为"name1,name2,name3"
        successCallback:成功返回后的回调函数,格式为function(data){}，data为json格式数据
        failCallback:发生错误后的回调函数，格式为function(xhr,status,error){}
    */
    Retrieve: function (entityName, entityId, additionalHeaders, strSelect, successCallback, failCallback) {
        var entityIfo = GeelyCRM.Main.Utility.ServerUtility.GetCollectionName(entityName);
        entityIfo = entityIfo + "(" + entityId.replace("{", "").replace("}", "") + ")?$select=" + strSelect;

        var apiUrl = GeelyCRM.Main.Utility.ServerUtility.GetWebApiUrl() + entityIfo;
        if (additionalHeaders == null) {
            additionalHeaders = {};
        }

        var defauteHeaders = { "OData-MaxVersion": "4.0", "OData-Version": "4.0", "Accept": "application/json; charset=utf-8" };

        var strJson = { "@odata.id": GeelyCRM.Main.Utility.ServerUtility.GetWebApiUrl() + "/" + GeelyCRM.Main.Utility.ServerUtility.GetCollectionName(entityName) + "(" + entityId + ")" };

        $.ajax({
            url: apiUrl,
            dataType: "json",
            type: "GET",
            contentType: "application/json; charset=utf-8",
            headers: $.extend({}, defauteHeaders, additionalHeaders),
            success: function (data, status, xhr) {
                successCallback(data);
            },
            error: function (xhr, status, error) {
                failCallback(xhr, status, error);
            }
        });
    },

    /*
    名称：查询单个记录的lookup字段所属记录的数据
    参数：
        entityName：实体名称
        entityId：实体编号
        attributeName：lookup字段名称
        additionalHeaders：需要附加在httphead中的键值对，格式为{"name1":"value1","name2":"value2"}，如果为空，则赋值null
        strSelect：要检索的lookup字段所属记录的属性，格式为"name1,name2,name3"
        successCallback:成功返回后的回调函数,格式为function(data){}，data为json格式数据
        failCallback:发生错误后的回调函数，格式为function(xhr,status,error){}
    */
    RetrieveLookupAttribute: function (entityName, entityId, attributeName, additionalHeaders, strSelect, successCallback, failCallback) {
        var entityIfo = GeelyCRM.Main.Utility.ServerUtility.GetCollectionName(entityName);
        entityIfo = entityIfo + "(" + entityId.replace("{", "").replace("}", "") + ")/" + attributeName + "?$select=" + strSelect;

        var apiUrl = GeelyCRM.Main.Utility.ServerUtility.GetWebApiUrl() + entityIfo;
        if (additionalHeaders == null) {
            additionalHeaders = {};
        }

        var defauteHeaders = { "OData-MaxVersion": "4.0", "OData-Version": "4.0", "Accept": "application/json; charset=utf-8" };

        $.ajax({
            url: apiUrl,
            dataType: "json",
            type: "GET",
            contentType: "application/json; charset=utf-8",
            headers: $.extend({}, defauteHeaders, additionalHeaders),
            success: function (data, status, xhr) {
                successCallback(data);
            },
            error: function (xhr, status, error) {
                failCallback(xhr, status, error);
            }
        });
    },


    /*
    名称：根据操作动作查询单个记录的一对多或多对多记录
    参数：
        entityName：实体名称
        entityId：实体编号
        relationName：一对多或多对多关系名称
        additionalHeaders：需要附加在httphead中的键值对，格式为{"name1":"value1","name2":"value2"}，如果为空，则赋值null
        actionName：针对一对多或多对多关系的操作动作名称，如ref，count等
        successCallback:成功返回后的回调函数,格式为function(data){}，不同的动作，返回的值是不同的，如ref返回json，count返回???{数字}
        failCallback:发生错误后的回调函数，格式为function(xhr,status,error){}
    */
    RetrieveRelationRecordByAction: function (entityName, entityId, relationName, additionalHeaders, actionName, successCallback, failCallback) {
        var entityIfo = GeelyCRM.Main.Utility.ServerUtility.GetCollectionName(entityName);
        entityIfo = entityIfo + "(" + entityId.replace("{", "").replace("}", "") + ")/" + relationName + "/$" + actionName;

        var apiUrl = GeelyCRM.Main.Utility.ServerUtility.GetWebApiUrl() + entityIfo;
        if (additionalHeaders == null) {
            additionalHeaders = {};
        }

        var defauteHeaders = { "OData-MaxVersion": "4.0", "OData-Version": "4.0", "Accept": "application/json; charset=utf-8" };

        $.ajax({
            url: apiUrl,
            dataType: "json",
            type: "GET",
            contentType: "application/json; charset=utf-8",
            headers: $.extend({}, defauteHeaders, additionalHeaders),
            success: function (data, status, xhr) {
                successCallback(data);
            },
            error: function (xhr, status, error) {
                failCallback(xhr, status, error);
            }
        });
    },

    /*
    名称：根据操作动作查询单个记录的一对多或多对多记录
    参数：
        entityName：实体名称
        entityId：实体编号
        relationName：一对多或多对多关系名称
        additionalHeaders：需要附加在httphead中的键值对，格式为{"name1":"value1","name2":"value2"}，如果为空，则赋值null
        viewId：一对多或多对多关系对应的另一个实体的视图Id
        successCallback:成功返回后的回调函数,格式为function(data){}，不同的动作，返回的值是不同的，如ref返回json，count返回???{数字}
        failCallback:发生错误后的回调函数，格式为function(xhr,status,error){}
    */
    RetrieveRelationRecordBySaveQuery: function (entityName, entityId, relationName, additionalHeaders, viewId, successCallback, failCallback) {
        var entityIfo = GeelyCRM.Main.Utility.ServerUtility.GetCollectionName(entityName);
        entityIfo = entityIfo + "(" + entityId.replace("{", "").replace("}", "") + ")/" + relationName + "/?savedQuery=" + viewId;

        var apiUrl = GeelyCRM.Main.Utility.ServerUtility.GetWebApiUrl() + entityIfo;
        if (additionalHeaders == null) {
            additionalHeaders = {};
        }

        var defauteHeaders = { "OData-MaxVersion": "4.0", "OData-Version": "4.0", "Accept": "application/json; charset=utf-8" };

        $.ajax({
            url: apiUrl,
            dataType: "json",
            type: "GET",
            contentType: "application/json; charset=utf-8",
            headers: $.extend({}, defauteHeaders, additionalHeaders),
            success: function (data, status, xhr) {
                successCallback(data);
            },
            error: function (xhr, status, error) {
                failCallback(xhr, status, error);
            }
        });
    },
    /*
    名称：查询单个记录的一对多或多对多记录
    参数：
        entityName：实体名称
        entityId：实体编号
        additionalHeaders：需要附加在httphead中的键值对，格式为{"name1":"value1","name2":"value2"}，如果为空，则赋值null
        strSelect：主实体要查找的字段，格式为name1,name2,name3
        strExpand：扩展查找的字符串
        successCallback:成功返回后的回调函数,格式为function(data){}，data格式为json
        failCallback:发生错误后的回调函数，格式为function(xhr,status,error){}
    */
    RetrieveRelationRecord: function (entityName, entityId, additionalHeaders, strSelect, strExpand, successCallback, failCallback) {
        var entityIfo = GeelyCRM.Main.Utility.ServerUtility.GetCollectionName(entityName);
        entityIfo = entityIfo + "(" + entityId.replace("{", "").replace("}", "") + ")?$select=" + strSelect + "&$expand=" + strExpand;

        var apiUrl = GeelyCRM.Main.Utility.ServerUtility.GetWebApiUrl() + entityIfo;
        if (additionalHeaders == null) {
            additionalHeaders = {};
        }

        var defauteHeaders = { "OData-MaxVersion": "4.0", "OData-Version": "4.0", "Accept": "application/json; charset=utf-8" };

        $.ajax({
            url: apiUrl,
            dataType: "json",
            type: "GET",
            contentType: "application/json; charset=utf-8",
            headers: $.extend({}, defauteHeaders, additionalHeaders),
            success: function (data, status, xhr) {
                successCallback(data);
            },
            error: function (xhr, status, error) {
                failCallback(xhr, status, error);
            }
        });
    },
    /*
    名称：根据条件查询记录
    参数：
        entityName：实体名称
        additionalHeaders：需要附加在httphead中的键值对，格式为{"name1":"value1","name2":"value2"}，如果为空，则赋值null
        strSelect：要查询的列
        strFilter：查询条件，如果为空，则赋值null
        strExpand：扩展条件,如果为空，则赋值null
        strOrderby：排序，如果为空，则赋值null
        strAdditional：其他附加的信息,如果为空，则赋值null
        successCallback:成功返回后的回调函数,格式为function(data){}，data格式为json
        failCallback:发生错误后的回调函数，格式为function(xhr,status,error){}
    */
    RetrieveMultiple: function (entityName, additionalHeaders, strSelect, strFilter, strExpand, strOrderby, strAdditional, successCallback, failCallback) {
        var entityIfo = GeelyCRM.Main.Utility.ServerUtility.GetCollectionName(entityName);
        entityIfo = entityIfo + "?$select=" + strSelect;
        if (strFilter != null) {
            entityIfo = entityIfo + "&$filter=" + strFilter;
        }

        if (strExpand != null) {
            entityIfo = entityIfo + "&$expand=" + strExpand;
        }

        if (strOrderby != null) {
            entityIfo = entityIfo + "$orderby=" + strOrderby;
        }

        if (strAdditional != null) {
            entityIfo = entityIfo + strAdditional;
        }

        var apiUrl = GeelyCRM.Main.Utility.ServerUtility.GetWebApiUrl() + entityIfo;
        if (additionalHeaders == null) {
            additionalHeaders = {};
        }

        var defauteHeaders = { "OData-MaxVersion": "4.0", "OData-Version": "4.0", "Accept": "application/json; charset=utf-8" };

        $.ajax({
            url: apiUrl,
            dataType: "json",
            type: "GET",
            contentType: "application/json; charset=utf-8",
            headers: $.extend({}, defauteHeaders, additionalHeaders),
            success: function (data, status, xhr) {
                successCallback(data);
            },
            error: function (xhr, status, error) {
                failCallback(xhr, status, error);
            }
        });
    },
    /*
    名称：根据视图id查询该视图中的记录
    参数：
        entityName：实体名称
        additionalHeaders：需要附加在httphead中的键值对，格式为{"name1":"value1","name2":"value2"}，如果为空，则赋值null
        viewId：要查询的视图Id
        strAdditional：其他附加的信息,如果为空，则赋值null
        successCallback:成功返回后的回调函数,格式为function(data){}，data格式为json
        failCallback:发生错误后的回调函数，格式为function(xhr,status,error){}
    */
    RetrieveMultipleBySaveQuery: function (entityName, additionalHeaders, viewId, strAdditional, successCallback, failCallback) {
        var entityIfo = GeelyCRM.Main.Utility.ServerUtility.GetCollectionName(entityName);
        entityIfo = entityIfo + "?" + relationName + "/savedQuery=" + viewId.replace("{", "").replace("}", "");

        if (strAdditional != null) {
            entityIfo = entityIfo + strAdditional;
        }

        var apiUrl = GeelyCRM.Main.Utility.ServerUtility.GetWebApiUrl() + entityIfo;
        if (additionalHeaders == null) {
            additionalHeaders = {};
        }

        var defauteHeaders = { "OData-MaxVersion": "4.0", "OData-Version": "4.0", "Accept": "application/json; charset=utf-8" };

        $.ajax({
            url: apiUrl,
            dataType: "json",
            type: "GET",
            contentType: "application/json; charset=utf-8",
            headers: $.extend({}, defauteHeaders, additionalHeaders),
            success: function (data, status, xhr) {
                successCallback(data);
            },
            error: function (xhr, status, error) {
                failCallback(xhr, status, error);
            }
        });
    },
    /*
    名称：根据FetchXml查询记录
    参数：
        entityName：实体名称
        additionalHeaders：需要附加在httphead中的键值对，格式为{"name1":"value1","name2":"value2"}，如果为空，则赋值null
        fetchXml：fetchxml语句
        successCallback:成功返回后的回调函数,格式为function(data){}，data格式为json
        failCallback:发生错误后的回调函数，格式为function(xhr,status,error){}
    */
    RetrieveMultipleByFetchXml: function (entityName, additionalHeaders, fetchXml, successCallback, failCallback) {
        var entityIfo = GeelyCRM.Main.Utility.ServerUtility.GetCollectionName(entityName);
        entityIfo = entityIfo + "?" + "fetchXml=" + encodeURIComponent(fetchXml);

        var apiUrl = GeelyCRM.Main.Utility.ServerUtility.GetWebApiUrl() + entityIfo;
        if (additionalHeaders == null) {
            additionalHeaders = {};
        }

        var defauteHeaders = { "OData-MaxVersion": "4.0", "OData-Version": "4.0", "Accept": "application/json; charset=utf-8" };

        $.ajax({
            url: apiUrl,
            dataType: "json",
            type: "GET",
            contentType: "application/json; charset=utf-8",
            headers: $.extend({}, defauteHeaders, additionalHeaders),
            success: function (data, status, xhr) {
                successCallback(data);
            },
            error: function (xhr, status, error) {
                failCallback(xhr, status, error);
            }
        });
    }
};
/*
    名称：并行等待器，通过设置格式为
    {"动作名称1":false,"动作名称2":false}
    的parallelList参数来控制，调用Wait方法后，只有当所以动作都为true后，
    才会执行回调函数
*/
GeelyCRM.Main.Utility.ParallelWait = function (parallelList) {
    /*for (var field in parallelList)
    {
        parallelList[field] = false;
    }*/

    this.ParallelList = parallelList;
};
/*
    名称：等待
    当所以动作都为true后，执行回调函数
*/
GeelyCRM.Main.Utility.ParallelWait.prototype.Wait = function (callBack) {
    var self = this;
    var fun = function () {
        var allComplete = true;
        for (var field in self.ParallelList) {
            if (self.ParallelList[field] == false) {
                allComplete = false;
                break;
            }
        }

        if (allComplete) {
            callBack();
        }
        else {
            window.setTimeout(fun, 10);
        }
    };

    fun();


}
/*
    名称：获取用户Token
    参数：
        successCallBack：成功后的回调函数，格式为function(token)
        failCallBack：失败后的回调函数，格式为function (xhr, status, error)
*/
GeelyCRM.Main.Utility.GetUserToken = function (successCallBack, failCallBack) {

    var strToken = GeelyCRM.Main.Utility.SessionStorage.Get(GeelyCRM.Main.Utility.SessionStorage.Names.LoginUserToken);
    if (strToken != null) {
        successCallBack(strToken);
    }
    else {
        GeelyCRM.Main.Utility.WebApi.ExecuteUnBoundAction("geely_getusertoken", null, null, function (data) {
            GeelyCRM.Main.Utility.SessionStorage.Set(GeelyCRM.Main.Utility.SessionStorage.Names.LoginUserToken, data.Token);
            successCallBack(data.Token);
        },
        function (xhr, status, error) {
            failCallBack(xhr, status, error);
        }
        );
    }
};

GeelyCRM.Main.View.Utility.GetAbsoluteUrl = function (url) {
    var a = document.createElement('A');
    a.href = url;
    url = a.href;
    return url;
};

/*
    多语言操作
*/
GeelyCRM.Main.Utility.Language = {};
GeelyCRM.Main.Utility.Language.Data = null;
GeelyCRM.Main.Utility.Language.Init = function (successCallback, errorCallback) {

    var langData = GeelyCRM.Main.Utility.SessionStorage.Get(GeelyCRM.Main.Utility.SessionStorage.Names.LanguageData);


    if (langData != null) {
        GeelyCRM.Main.Utility.Language.Data = langData;
        successCallback();
    }
    else {
        var url = "../Languages/lang.js";
        if (GeelyCRM.Main.Utility.RootPath != null) {
            url = GeelyCRM.Main.Utility.RootPath + "Languages/lang.js";
        }

        var now = new Date();
        var url = url+"?data=" + now.getSeconds().toString();

        $.ajax({
            url: url,
            type: "Get",
            async: true,
            data: null,
            dataType: "json",
            success: function (data, status, xhr) {

                GeelyCRM.Main.Utility.Language.Data = data;
                GeelyCRM.Main.Utility.SessionStorage.Set(GeelyCRM.Main.Utility.SessionStorage.Names.LanguageData, data);

                successCallback();
            },
            error: function (xhr, status, error) {
                var message = error;
                if (xhr.responseJSON && xhr.responseJSON.Message) {
                    var message = xhr.responseJSON.Message;
                }
                errorCallback(message);
            }
        })

    }


};




//多语言文本名称集合
GeelyCRM.Main.Utility.Language.TextNames = {};
//正在处理显示文本
GeelyCRM.Main.Utility.Language.TextNames.ExecutingText = "ExecutingText";
//错误页模板中的错误号标签
GeelyCRM.Main.Utility.Language.TextNames.ErrorTemplateErrorNumberLabel = "ErrorTemplateErrorNumberLabel";
//错误页模板中的错误描述标签
GeelyCRM.Main.Utility.Language.TextNames.ErrorTemplateErrorDescriptionLabel = "ErrorTemplateErrorDescriptionLabel";
//路由未找到文本
GeelyCRM.Main.Utility.Language.TextNames.RouteNotFoundText = "RouteNotFoundText";
//数据列表页数显示信息
GeelyCRM.Main.Utility.Language.TextNames.DataPageMessage = "DataPageMessage";
//数据列表页数输入框前显示信息
GeelyCRM.Main.Utility.Language.TextNames.DataPageBeforePageMessage = "DataPageBeforePageMessage";
//数据列表页数输入框后显示信息
GeelyCRM.Main.Utility.Language.TextNames.DataPageAfterPageMessage = "DataPageAfterPageMessage";
//上传按钮名称
GeelyCRM.Main.Utility.Language.TextNames.UploadButtonName = "UploadButtonName";
//保存按钮名称
GeelyCRM.Main.Utility.Language.TextNames.SaveButtonName = "SaveButtonName";
//删除按钮名称
GeelyCRM.Main.Utility.Language.TextNames.DeleteButtonName = "DeleteButtonName";
//确定按钮名称
GeelyCRM.Main.Utility.Language.TextNames.ConfirmButtonName = "ConfirmButtonName";
//通用列表执行结果消息
GeelyCRM.Main.Utility.Language.TextNames.CommonListExecuteResultMessage = "CommonListExecuteResultMessage";
//信息标题
GeelyCRM.Main.Utility.Language.TextNames.InfoTitle = "InfoTitle";
//警告标题
GeelyCRM.Main.Utility.Language.TextNames.WarningTitle = "WarningTitle";
//错误标题
GeelyCRM.Main.Utility.Language.TextNames.ErrorTitle = "ErrorTitle";
//问题标题
GeelyCRM.Main.Utility.Language.TextNames.QuestionTitle = "QuestionTitle";
//确定标题
GeelyCRM.Main.Utility.Language.TextNames.OkTitle = "OkTitle";
//取消标题
GeelyCRM.Main.Utility.Language.TextNames.CancelTitle = "CancelTitle";
//选择标题
GeelyCRM.Main.Utility.Language.TextNames.SelectTitle = "SelectTitle";
//没有任何记录选中的提示
GeelyCRM.Main.Utility.Language.TextNames.NoRecordSelectedTip = "NoRecordSelectedTip";
//上传文件数据网格部件中的DisplayName列名
GeelyCRM.Main.Utility.Language.TextNames.UploadFileGridViewDisplayNameColumnName = "UploadFileGridViewDisplayNameColumnName";
//上传文件数据网格部件中的UniqueName列名
GeelyCRM.Main.Utility.Language.TextNames.UploadFileGridViewUniqueNameColumnName = "UploadFileGridViewUniqueNameColumnName";
//上传文件数据网格部件中的Suffix列名
GeelyCRM.Main.Utility.Language.TextNames.UploadFileGridViewSuffixColumnName = "UploadFileGridViewSuffixColumnName";
//上传文件数据网格部件中的Size列名
GeelyCRM.Main.Utility.Language.TextNames.UploadFileGridViewSizeColumnName = "UploadFileGridViewSizeColumnName";
//上传文件数据网格部件中工具栏的上传按钮名称
GeelyCRM.Main.Utility.Language.TextNames.UploadFileGridViewToolBarUploadName = "UploadFileGridViewToolBarUploadName";
//上传文件数据网格部件中工具栏的保存按钮名称
GeelyCRM.Main.Utility.Language.TextNames.UploadFileGridViewToolBarSaveName = "UploadFileGridViewToolBarSaveName";
//上传文件数据网格部件中工具栏的删除按钮名称
GeelyCRM.Main.Utility.Language.TextNames.UploadFileGridViewToolBarDeleteName = "UploadFileGridViewToolBarDeleteName";
//上传文件数据网格部件中上传窗口的标题
GeelyCRM.Main.Utility.Language.TextNames.UploadFileGridViewUploadWindowTitle = "UploadFileGridViewUploadWindowTitle";
//上传文件数据网格部件中上传文件搜索按钮名称
GeelyCRM.Main.Utility.Language.TextNames.UploadFileGridViewFileSearchButtonName = "UploadFileGridViewFileSearchButtonName";
//上传文件数据网格部件中上传文件上传按钮名称
GeelyCRM.Main.Utility.Language.TextNames.UploadFileGridViewFileUploadButtonName = "UploadFileGridViewFileUploadButtonName";
//上传文件数据网格部件中选择的文件标签名称
GeelyCRM.Main.Utility.Language.TextNames.UploadFileGridViewSelectedFilesLabelName = "UploadFileGridViewSelectedFilesLabelName";
//上传文件数据网格部件中上传文件成功标签
GeelyCRM.Main.Utility.Language.TextNames.UploadFileGridViewUploadSuccessLabelName = "UploadFileGridViewUploadSuccessLabelName";
//上传文件数据网格部件中上传文件失败标签
GeelyCRM.Main.Utility.Language.TextNames.UploadFileGridViewUploadFailLabelName = "UploadFileGridViewUploadFailLabelName";
//上传文件数据网格部件中需要选择文件提示
GeelyCRM.Main.Utility.Language.TextNames.UploadFileGridViewNeedSelectFileTip = "UploadFileGridViewNeedSelectFileTip";
//上传文件数据网格部件中获取文件的OSS上传参数失败提示
GeelyCRM.Main.Utility.Language.TextNames.UploadFileGridViewGetFileOSSParamsErrorTip = "UploadFileGridViewGetFileOSSParamsErrorTip";
//上传文件数据网格部件中保存时没有记录提示
GeelyCRM.Main.Utility.Language.TextNames.UploadFileGridViewSaveNoRecordTip = "UploadFileGridViewSaveNoRecordTip";




//获取指定名称和指定lcid的语言文本
GeelyCRM.Main.Utility.Language.GetText = function (name, lcid) {
    if (GeelyCRM.Main.Utility.Language.Data == null) {
        throw new Error(GeelyCRM.Main.Utility.Error.LanguageNotInit, "GeelyCRM.Main.Utility.Language 没有初始化");
    }
    else {
        if (GeelyCRM.Main.Utility.Language.Data[name]) {
            if (GeelyCRM.Main.Utility.Language.Data[name][lcid.toString()]) {
                return GeelyCRM.Main.Utility.Language.Data[name][lcid.toString()];
            }
            else {
                if (GeelyCRM.Main.Utility.Language.Data[name]["0"]) {
                    return GeelyCRM.Main.Utility.Language.Data[name]["0"];
                }
                else {
                    throw new Error(GeelyCRM.Main.Utility.Error.LanguageNameLcidNotFound, "GeelyCRM.Main.Utility.Language中名称为" + name + "的语言文本找不到对应语言编号为0的语言文本");
                }
            }
        }
        else {
            throw new Error(GeelyCRM.Main.Utility.Error.LanguageNameNotFound, "GeelyCRM.Main.Utility.Language中找不到名称为" + name + "的语言文本");
        }
    }
};




//登陆用户信息
GeelyCRM.Main.Utility.LoginUser = {};
//是否匿名用户
GeelyCRM.Main.Utility.LoginUser.Anonymous = true;
//用户名称
GeelyCRM.Main.Utility.LoginUser.Name = null;
//用户语言编号
GeelyCRM.Main.Utility.LoginUser.Lcid = null;
//用户时区偏移
GeelyCRM.Main.Utility.LoginUser.TimeZoneBias = null;


