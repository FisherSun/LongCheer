define(['durandal/system', 'durandal/app', 'jsRuntime/configManager', 'jsRuntime/resourceManager', 'jsRuntime/parManager',
    'plugins/dialog', 'jsRuntime/eventAggregator', 'jsRuntime/utility'],
    function (system, app, cm, rm, pm, dialog, aggregator, utility) {
        var am = {
            dialogInstances: {},                 
            global: {

                //改变语言
                //culture：语言，如zh-cn 
                changeCulture: function (culture) {
                    cm.client.culture = culture;
                    rm.refresh();
                    aggregator.trigger("culture:change", culture);
                },
                
                //信息显示
                //参数：message:信息内容 title：标题 
                //options：json数据 [{ text: "确认", value: "Yes" }, { text: "取消", value: "No" }]
                //autoclose: true/false 默认为false 是否点击信息框外部后自动关闭
                //viewArea:遮罩范围、默认为全屏遮罩.
                //返回值：promise
                showMessage: function (message, title, options, autoclose, viewArea) {
                   
                    var messageBox = new dialog.MessageBox(message, title, options, autoclose, {});
                    var dialogInstanceKey = system.guid();
                    am.dialogInstances[dialogInstanceKey] = messageBox;
                    return system.defer(function (dfd) {
                        dialog.show(messageBox, null, viewArea || 'default').then(function (data) {
                            delete am.dialogInstances[dialogInstanceKey];
                            dfd.resolve(data);
                            utility.log("showMessage:" + title + " close");
                            console.log("showMessage:" + title + " close");
                        }).fail(function (err) {
                            delete am.dialogInstances[dialogInstanceKey];
                            utility.log("showMessage:" + title + err.message);
                            console.log("showMessage:" + title + err.message);
                            dfd.reject(err);
                        });
                        utility.log("showMessage:" + title + " open");
                        console.log("showMessage:" + title + " open");
                    }).promise();
                },

                //显示对话框
                //参数：pageUrl:ModelID，cx:调用页面上下文对象，viewArea:遮罩范围、默认为全屏遮罩.
                //返回值：promise
                showDialog: function (pageUrl, cx, viewArea) {
                    return system.defer(function (dfd) {
                        system.acquire(pageUrl).done(function (module) {

                            if (system.isFunction(module))
                                model = new module(cx || {});
                            else
                                model = module;
                            var dialogInstanceKey = system.guid();
                            am.dialogInstances[dialogInstanceKey] = model;

                            dialog.show(model, null, viewArea || 'default').then(function (rtn) {
                                delete am.dialogInstances[dialogInstanceKey];
                                dfd.resolve(rtn);
                                utility.log("showDialog:" + pageUrl + " close");
                                console.log("showDialog:" + pageUrl + " close");
                            }).fail(function (err) {
                                delete am.dialogInstances[dialogInstanceKey];
                                utility.log("showDialog:" + pageUrl + err.message);
                                console.log("showDialog:" + pageUrl + err.message);
                                dfd.reject(err);
                            });   
                            utility.log("showDialog:" + pageUrl + " open");
                            console.log("showDialog:" + pageUrl + " open");
                        }).fail(function (err) {
                            utility.log('Failed to load  module (' + pageUrl + '). Details: ' + err.message);
                            console.log('Failed to load  module (' + pageUrl + '). Details: ' + err.message);
                            //system.error('Failed to load  module (' + pageUrl + '). Details: ' + err.message);
                            dfd.reject(err);
                        });
                    }).promise();
                },

                //关闭对话框
                //参数：self:Dialog页This，rtf:Dialog页返回值
                closeDialog: function (self, rtf) {

                    if (self)//正常关闭
                    {
                        dialog.close(self, rtf);
                    }
                    else//流程外关闭（如 回首页）
                    {
                        return system.defer(function (dfd) {
                            //先判断当前有没有打开的对话框，如果没有，返回成功。
                            //如果有，弹出确认对话框，如果点击确认，关闭打开的对话框，然后返回成功。
                            //如果点击取消，返回失败。不关闭对话框。
                            if (Object.keys(am.dialogInstances).length == 0) {
                                dfd.resolve();
                            }
                            else {                             
                                $.each(am.dialogInstances, function (key) {
                                    dialog.close(am.dialogInstances[key], null);
                                });
                                dfd.resolve();
                            }
                        }).promise();
                    }
                },

                //获取打开对话框个数
                getOpenDialogNumber: function () {
                    var dialogNumber = 0;
                    return dialogNumber = Object.keys(am.dialogInstances).length;
                },

                //显示遮罩层
                //参数：currentViewArea:遮罩区域 string型，currentViewArea="full"为全屏遮罩
                //message:提示信息 string型
                showMaskLayer: function (currentViewArea, message) {

                    if (currentViewArea == null)
                        return;

                    if ($("#satm-MaskLayer").text() != null && $.trim($("#satm-MaskLayer").text()) != "")
                        return;

                    if (currentViewArea != "full") {
                        if (message == null)
                            message = "";
                        var viewArea = $("div[satm-attr='" + currentViewArea + "']");
                        viewArea.addClass('customModalParent');
                        var blockout = $('<div id="blockout_' + currentViewArea + '" class="customModalBlockout"></div>')
                            .css({ 'z-index': dialog.getNextZIndex(), 'opacity': 0.7 })
                            .appendTo(viewArea);

                        if (viewArea[0].scrollWidth > viewArea.innerWidth())
                            blockout.width(viewArea[0].scrollWidth);

                        var host = $('<div id="host_' + currentViewArea + '" style="top: 42%;left:0;width:100%;text-align:center" class="customModalHost"><h1 id="satm-MaskLayer" style="color:white">' + message + '</h1></div>')
                            .css({ 'z-index': dialog.getNextZIndex(), 'opacity': 1 })
                            .appendTo(viewArea);
                    }
                    else {
                        var body = $('body');
                        var blockout = $('<div id="blockout_Full" class="modalBlockout"></div>')
                            .css({ 'z-index': dialog.getNextZIndex(), 'opacity': 0.7 })
                            .appendTo(body);

                        var host = $('<div id="host_Full" style="top: 42%;left:0;width:100%;text-align:center" class="modalHost"><h1 id="satm-MaskLayer" style="color:white">' + message + '</h1></div>')
                            .css({ 'z-index': dialog.getNextZIndex(), 'opacity': 1 })
                            .appendTo(body);
                    }
                },

                //判断页面中是否有对话话或遮罩层
                isExistDialogAndMaskLayer: function () {
                    var cBlockout = $(".customModalBlockout[id]");
                    var mBlockout = $(".modalBlockout[id]");

                    if (cBlockout.length > 0 || mBlockout.length > 0)
                        return true;
                    else
                        return false
                },

                //关闭遮罩层
                //参数：currentViewArea:遮罩区域 string型
                closeMaskLayer: function (currentViewArea, isVm) {
                    if (isVm == null)
                        isVm = false;

                    if (!isVm) {
                        if (currentViewArea != "full") {
                            var viewArea = $("div[satm-attr='" + currentViewArea + "']");
                            var blockout = viewArea.find('#blockout_' + currentViewArea);
                            var host = viewArea.find('#host_' + currentViewArea);

                            host.css('opacity', 0);
                            blockout.css('opacity', 0);
                            host.remove();
                            blockout.remove();
                            if (viewArea.find('div[class="customModalBlockout"]').length == 0)
                                viewArea.removeClass('customModalParent');
                        }
                        else {
                            var blockout = $('#blockout_Full');
                            var host = $('#host_Full');

                            host.css('opacity', 0);
                            blockout.css('opacity', 0);
                            host.remove();
                            blockout.remove();
                        }
                    }
                    else {
                        var viewArea = $("div[satm-attr='" + currentViewArea + "']");
                        if (viewArea.find('div[class="customModalBlockout"]').length == 0)
                            viewArea.removeClass('customModalParent');
                    }
                },
             
                //自定义验证
                //参数：[self.account, self.password] account与password都为Ko对象
                //返回值：bool
                validation: function (validatationData) {
                    var tempData = ko.validatedObservable(validatationData);
                    if (tempData.isValid())
                        return true;
                    else {
                        tempData.errors.showAllMessages();
                        return false;
                    }
                },  
                //初始化actionManager
                initial: function () {                 
                    //关闭以前打开未关闭层
                    am.global.closeMaskLayer("full");
                    //am.global.closeMaskLayer(cm.client.defaultArea);
                }
            }
        };
        am.global.initial();
        return am;
    });