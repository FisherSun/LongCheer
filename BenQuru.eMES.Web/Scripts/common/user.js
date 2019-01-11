define(['durandal/system', 'plugins/router', 'durandal/app', 'jsRuntime/configManager', 'jsRuntime/utility'],
    function (system, router, app, cm, utility) {
        //var mapRouter = function () {
            //router.reset();
        return {
            router: router,
            activate: function () {
                router.map([
                    { route: '', title: '首页', moduleId: 'app/test', nav: true },
                    { route: 'login', title: '登陆', moduleId: 'app/login/login', nav: true  },
                    { route: 'testlist', title: 'Demo', moduleId: 'app/error', nav: true },
                    { route: 'query', title: '登陆', moduleId: 'app/query/index' },
                    { route: 'sysMgt/MdmItemCodeList', title: '字典表管理', moduleId: 'app/sysMgt/MdmItemCodeList' },
                    { route: 'sysMgt/MdmItemCode/:id', title: '字典表信息', moduleId: 'app/sysMgt/MdmItemCode' },
                    { route: 'sysMgt/SysPdaWorkSetList', title: 'PDA区域设置管理', moduleId: 'app/sysMgt/SysPdaWorkSetList' },
                    { route: 'sysMgt/SysPdaWorkSet/:id', title: 'PDA区域设置', moduleId: 'app/sysMgt/SysPdaWorkSet' },
                    { route: 'sysMgt/warehouses', title: '仓库管理', moduleId: 'app/sysMgt/warehouses' },
                    { route: 'sysMgt/warehouse/:id', title: '仓库信息', moduleId: 'app/sysMgt/warehouse' },
                    { route: 'sysMgt/dropdownDemo', title: '级联下拉框demo', moduleId: 'app/sysMgt/dropdownDemo' },
                    { route: 'sysMgt/RoleFunctionManage', title: '角色权限管理', moduleId: 'app/sysMgt/RoleFunctionManage' },
                    { route: 'sysMgt/FunctionManage', title: '权限管理', moduleId: 'app/sysMgt/FunctionManage' },
                    { route: 'sysMgt/SysApiActionConfigList', title: 'API管理', moduleId: 'app/sysMgt/SysApiActionConfigList' },
                    { route: 'sysMgt/SysApiActionConfig/:id', title: 'API信息', moduleId: 'app/sysMgt/SysApiActionConfig' },
                    { route: 'sysMgt/SysUserExtendList', title: '用户扩展管理', moduleId: 'app/sysMgt/SysUserExtendList' },
                    { route: 'sysMgt/SysUserExtend/:id', title: '用户扩展信息', moduleId: 'app/sysMgt/SysUserExtend' },
                    { route: 'sysMgt/SysUserVehWarehouseList', title: '用户整车仓库管理', moduleId: 'app/sysMgt/SysUserVehWarehouseList' },
                    { route: 'sysMgt/SysUserVehWarehouse/:id', title: '用户整车仓库信息', moduleId: 'app/sysMgt/SysUserVehWarehouse' },
                    { route: 'sysMgt/RgmDealerBelongQYDD', title: '经销商所属区域经理', moduleId: 'app/sysMgt/RgmDealerBelongQYDD' },
                    { route: 'claimMgt/Guarantee/:id', title: '保修信息', moduleId: 'app/claimMgt/Guarantee' },
                    { route: 'claimMgt/Guarantees', title: '保修申请列表', moduleId: 'app/claimMgt/Guarantees' },
                    { route: 'sysMgt/RoleAmountList', title: '审批角色金额管理', moduleId: 'app/sysMgt/RoleAmountList' },
                    { route: 'sysMgt/RoleAmountEdit/:id', title: '审批角色金额管理', moduleId: 'app/sysMgt/RoleAmountEdit' },
                    { route: 'sysMgt/Salesorder', title: '销售业务', moduleId: 'app/sysMgt/Salesorder' },
                    { route: 'sysMgt/SalesorderAdd/:id', title: '销售业务信息', moduleId: 'app/sysMgt/SalesorderAdd' },
                    { route: 'claimMgt/PayToDealerList', title: '月度付款清单', moduleId: 'app/claimMgt/PayToDealerList' },
                    { route: 'claimMgt/PayToDealer/:id', title: '月度付款清单详情', moduleId: 'app/claimMgt/PayToDealer' },
                    { route: 'sysMgt/PoOder', title: 'PO手工触发转SO', moduleId: 'app/sysMgt/PoOder' },
                ]).buildNavigationModel();
                return router.activate();
            }
        };
            
        //};
        //return mapRouter;
        //var _BuildNav = function (args) {
        //    var rtv = [];
        //    var rtvDic = {};
        //    var curItemIndex = '';
        //    var preItemIndex = '';
        //    u.naviagtion.removeAll();
        //    ko.utils.arrayForEach(args, function (item) {
        //        curItemIndex = item['Index'];
        //        rtvDic[curItemIndex] = item;
        //        item['isActivate'] = false;
        //        item['Children'] = [];
        //        if (curItemIndex.length === 2) {
        //            rtv.push(item);
        //        }
        //        else {
        //            preItemIndex = curItemIndex.substr(0, curItemIndex.length - 2);
        //            rtvDic[preItemIndex]['Children'].push(item);
        //        }
        //    });
        //    return rtv;
        //};
        
        //var u = {
        //    naviagtion: ko.observableArray([]),
        //    logined: ko.observable(false),
        //    showflash: ko.observable(true),
        //    info: {
        //        Account: ko.observable(),
        //        UserType: ko.observable(),
        //        Mobile: ko.observable(),
        //        Email: ko.observable(),
        //        Status: ko.observable(),
        //        DefaultWarehouse: ko.observable(),  
        //        Warehouses: ko.observableArray(),       
        //        DealerId: ko.observable()       
        //    },
        //    changePwd: function () {
        //        app.showDialog('app/sysMgt/pwd')
        //            .then(function (dialogResult) {

        //            });
        //    },
        //    logoff: function () {

        //        utility.httpGet('Account/LogOff').always(function () {
        //            u.logined(false);
        //            store.remove('UserNaviagtion');
        //            store.remove('UserInfo');
        //            sessionStorage.removeItem("access_token");
        //            window.location = "/";
        //        });

        //    },

        //    login: function (arg) {
        //        $.isLoading();
        //        utility.httpPost('/api/Account/Login', arg)
        //            .done(function (data) {
        //                var accessToken = data;
        //                if (accessToken.access_token)
        //                    sessionStorage.setItem("access_token", accessToken.access_token);
        //                u.getUserInfo();
        //            }).fail(function (data) {
        //                if (!data)
        //                    return;
        //                if (data.responseJSON)
        //                    alert(data.responseJSON.Message);
        //            }).always(function () {
        //                $.isLoading("hide");
        //            });
        //    },
        //    checkUser: function () {
        //        $.isLoading();
        //        console.info('checkUser in');
        //        var deferred = $.Deferred();
        //        var url = "/api/Account/GetUserInfo";

        //        var userId = sessionStorage.getItem("userId");
        //        if (userId)
        //            url += "?userid=" + userId;
        //        utility.httpGet(url).done(function (data) {
        //            ko.mapper.fromJS(data, {}, u.info);
        //            if (!cm.client.showInCRM) {
        //                var userMenu = sessionStorage.getItem("UserMenu");
        //                if (userMenu) {
        //                    $.isLoading("hide");
        //                    var nav = _BuildNav(JSON.parse(userMenu));
        //                    ko.mapper.fromJS(nav, {}, u.naviagtion);
        //                    mapRouter();
        //                    u.logined(true);
        //                    u.showflash(false);
        //                    console.info('checkUser resolve(true)');
        //                    deferred.resolve(true);
        //                }
        //                else {
        //                    utility.httpGet("/odata/db/GetUserMenu()").done(function (data2) {
        //                        sessionStorage.setItem("UserMenu", JSON.stringify(data2.value));
        //                        $.isLoading("hide");
        //                        var nav = _BuildNav(data2.value);
        //                        ko.mapper.fromJS(nav, {}, u.naviagtion);
        //                        mapRouter();
        //                        u.logined(true);
        //                        u.showflash(false);
        //                        console.info('checkUser resolve(true)');
        //                        deferred.resolve(true);

        //                    }).fail(function (data) {
        //                        console.info('checkUser reject(false)' + JSON.stringify(data));
        //                        deferred.reject(false);
        //                    });
        //                }
        //            }
        //            else {
        //                $.isLoading("hide");
        //                mapRouter();
        //                u.logined(true);
        //                u.showflash(false);
        //                console.info('checkUser resolve(true)');
        //                deferred.resolve(true);
        //            }
        //        }).fail(function (data) {
        //            console.info('checkUser reject(false)' + JSON.stringify(data));
        //            deferred.reject(false);
        //        });

        //        console.info('checkUser out');
        //        return deferred.promise();
        //    },

        //    getUserInfo: function () {
        //        console.info('getUserInfo in');
        //        u.checkUser().done(function () {
        //            router.navigate('');
        //        }).fail(function () {
        //            router.navigate('login');
        //        });
        //    }
        //};
        //return u;
    });