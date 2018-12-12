define(['jsRuntime/configManager', 'require', 'durandal/system', 'jsRuntime/utility'],
    function (cm, require, system, utility) {
        var rm = {
            //全局资源
            global: {

            },
            option: {
            },
            refresh: function (force) {
                //全局资源
                var indexFileName = cm.client.resourceIndexPath;
                var gFileName = cm.client.resourceBasePath + cm.client.culture + "/";
                var globalObj = rm.global;
             
                system.acquire(indexFileName).done(function (module) {
                    $.each(module.fileIndex, function (key) {
                        var name = module.fileIndex[key];
                        globalObj[name] = {};
                        var resCache = sessionStorage.getItem("Res" + name);
                        if (resCache && !force) {
                            ko.mapper.fromJS(JSON.parse(resCache), {}, globalObj[name]);
                        }
                        else {
                            utility.log("loading global res path:" + gFileName + module.fileIndex[key]);
                            console.log("loading global res path:" + gFileName + module.fileIndex[key]);
                            system.acquire(gFileName + module.fileIndex[key]).done(function (subModule) {
                                ko.mapper.fromJS(subModule, {}, globalObj[name]);
                                sessionStorage.setItem("Res" + name, JSON.stringify(subModule));
                            }).fail(function (err) {
                                utility.log("loading global res path:" + gFileName + module.fileIndex[key] + err.message);
                                console.log("loading global res path:" + gFileName + module.fileIndex[key] + err.message);
                            });
                        }
                    });
                })

                var optionIndexFileName = cm.client.staticMenuPath + 'index';
                var gOptionFileName = cm.client.staticMenuPath + cm.client.culture + "/";
                var globalOption = rm.option;

                system.acquire(optionIndexFileName).done(function (module) {
                    $.each(module.fileIndex, function (key) {
                        var name = module.fileIndex[key];
                        globalOption[name] = {};
                        var optCache = sessionStorage.getItem("Opt" + name);
                        if (optCache && !force) {
                            ko.mapper.fromJS(JSON.parse(optCache), {}, globalOption[name]);
                        }
                        else {
                            utility.log("loading global option path:" + gOptionFileName + module.fileIndex[key]);
                            console.log("loading global option path:" + gOptionFileName + module.fileIndex[key]);
                            system.acquire(gOptionFileName + module.fileIndex[key]).done(function (subModule) {
                                ko.mapper.fromJS(subModule, {}, globalOption[name]);
                                sessionStorage.setItem("Opt" + name, JSON.stringify(subModule));
                            }).fail(function (err) {
                                utility.log("loading global option path:" + gOptionFileName + module.fileIndex[key] + err.message);
                                console.log("loading global option path:" + gOptionFileName + module.fileIndex[key] + err.message);
                            });
                        }
                    });
                })

            },
        };
        rm.refresh();
        return rm;
    });