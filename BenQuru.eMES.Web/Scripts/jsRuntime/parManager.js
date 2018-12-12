define(['durandal/system', 'jsRuntime/configManager', 'jsRuntime/utility', 'jsRuntime/resourceManager'],
    function (system, cm, utility, rm) {
        var pm = {
            //获取静态参数数据项,
            //fileName:静态参数文件名 string 型，例：fileName='province'
            //target:静态参数要赋值变量，ko对象
            //filter:是根据属性名称进行过滤，示例：filter = '($.code == 1 || $.code == 2)  && $.name="test"'  filter='$.province=="guangdong"'
            getStaticParameter: function (fileName, target, filter) {
                return system.defer(function (dfd) {
                    //静态菜单
                    var basePath = cm.client.staticMenuPath + cm.client.culture + '/'
                    utility.log("getStaticParameter file path:" + basePath + fileName);
                    utility.log("getStaticParameter filter is:" + filter);
                    console.log("getStaticParameter file path:" + basePath + fileName);
                    console.log("getStaticParameter filter is:" + filter);
                    system.acquire(basePath + fileName).then(function (module) {
                        var menuItems = module[fileName];
                        if (filter) menuItems = Enumerable.From(menuItems).Where(filter).ToArray();
                        if (target)
                            ko.mapper.fromJS(menuItems, {}, target);
                        dfd.resolve(menuItems);
                    }).fail(function (err) {
                        utility.log('Failed to load  module (' + basePath + fileName + '). Details: ' + err.message);
                        console.log('Failed to load  module (' + basePath + fileName + '). Details: ' + err.message);
                        //system.error('Failed to load  module (' + basePath + fileName + '). Details: ' + err.message);
                        dfd.reject(err);
                    });

                }).promise();
            },

            getSingleStaticParameter: function (fileName, filter) {
                var optCache = sessionStorage.getItem("Opt" + fileName);
                if (optCache) {
                    var optObj = JSON.parse(optCache)[fileName];
                    if (filter) menuItems = Enumerable.From(optObj).Where(filter).ToArray();
                    if (menuItems)
                        return menuItems[0];
                }
                return null;
            },

            /*
               基于性能的考虑，参数中最好带select指定要选择的列，如果不设置，只返回下面示例中的列
               query对象示例：{
                   select:'Code, Name, ParentId',
                   filter:"Code eq '1'",
                   orderby:'Code',
                   top:2,
                   skip:2}
             */
            getDynamicParameter: function (menuName, target, query) {
                return system.defer(function (dfd) {
                    var serveParUrl = 'api/parameters/' + menuName + '?';
                    var hasFilter = false;
                    query = query || { select: 'Code, Name, ParentId, Id' };
                    if (query) {
                        query.select = query.select || 'Code,Name,ParentId,Id';
                        $.each(query, function (key) {
                            if (key == "filter") {
                                serveParUrl += '&$' + key + '=' + query[key] + " and Culture eq '" + cm.client.culture + "'";
                                hasFilter = true;
                            }
                            else
                                serveParUrl += '&$' + key + '=' + query[key];
                        })
                    }
                    if (!hasFilter)
                        serveParUrl += "&$filter=Culture eq '" + cm.client.culture + "'";

                    utility.log('getDynamicParameter web api path:' + serveParUrl);
                    console.log('getDynamicParameter web api path:' + serveParUrl);

                    utility.httpGet(serveParUrl).done(function (data) {
                        if (target)
                            ko.mapper.fromJS(data, {}, target);
                        dfd.resolve(data);
                    }).fail(function (ex) {
                        utility.log('getDynamicParameter error:' + ex.message);
                        console.log('getDynamicParameter error:' + ex.message);
                        dfd.reject(ex);
                    });
                }).promise();
            },

            getAllDynamicParameter: function () {
                //参数OData地址
                var serveParUrl = "/odata/db/MdmItemCode?$select=Category,Code,Name,ParentId,Id&$orderby=Category,Code&$filter=Culture eq '" + cm.client.culture + "' and IsDeleted eq false ";
                utility.log('getAllDynamicParameter web api path:' + serveParUrl);
                console.log('getAllDynamicParameter web api path:' + serveParUrl);
                var data = utility.httpSyncGet(serveParUrl);
                if(data)
                    return data.value;
                return null;
            },
        }
        return pm;
    });