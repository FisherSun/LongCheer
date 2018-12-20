define(['durandal/system', 'jsRuntime/parManager', 'jsRuntime/utility', 'jsRuntime/configManager'], function (system, pm, utility, cm) {
    var s = {
        getSyncDic: function (name, target) {
            var data = utility.httpSyncGet(s.getUrl(name));
            if (data) {
                if (target)
                    ko.mapper.fromJS(data.value, {}, target);
                else
                    return data.value;
            }
            return null;
        },
        //增加一个含参数查询的方法
        getSyncDicWithParams: function (name, params, target) {
            var url = s.getUrl(name);
            if (url.indexOf("?$filter=") > 0) {
                url += " and " + params;
            }
            else {
                url += "?$filter=" + params;
            }

            var data = utility.httpSyncGet(url);
            if (data) {
                if (target)
                    ko.mapper.fromJS(data.value, {}, target);
                else
                    return data.value;
            }
            return null;
        },
        getUrl: function (name) {
            var url = '/odata/db/' + name;
            if (name.indexOf("RgmImprovementApproveItemsView") == 0 || name.indexOf("RgmDealerUserView") == 0 || name.indexOf("SpmQueryForShipPriceView") == 0 || name.indexOf("RgmInspectTaskType") == 0) {
                return url;
            }
            switch (name) {
                case 'SpmPurchasePlan':
                case 'MdmProvinceView':
                    url += "?$orderby=Name";
                    break;
                case 'MdmProvinceWithAreaView':
                    url += "?$orderby=Name";
                    break;
                case 'SysArea':
                case "MdmCountryFromAreaView":
                case "MdmAreaView":
                case "MdmCityWithAreaIdView":
                case "SpmCacheLocationView":
                case "MdmPartWithSupplierView":
                case "SysDistrictSalesAreaMappingView":
                case "SysAreaAdminArea":
                case "MdmMaterialType1":
                case "MdmMaterialType2":
                case "MdmMaterialType3":
                case "MdmDealerAreaView":
                    break;
                case "SysAdminArea$":
                    url = url.replace("$", "");
                    break;
                case 'SysAdminArea':
                    url += '?$filter=Level eq 1 and Status eq 1';
                    break;
                case 'MdmCityView':
                    url += "?$orderby=Name";
                    break;
                case 'MdmCountryView':
                    break;
                case 'MdmProvinceListView':
                    break;
                case 'MdmDistrictView':
                    break;
                case 'MdmItemCodeView':
                    break;
                case 'MdmSupplierInfo':
                    url += '?$filter=IsDeleted eq false and Type eq 1';
                    break;
                case 'MdmConfig':
                    url += '?$filter=IsDeleted eq false ';
                    break;
                case 'MdmVehicleType':
                    url += '?$filter=IsDeleted eq false and IsStopped eq false';
                    break;
                case "MdmUnit":
                    url += "?$filter=IsDeleted eq false and Culture eq '" + cm.client.culture + "'&$orderby=Code asc ";
                    break;
                case "MdmDealerForecastPeriodSettingView":
                    url += "?$filter=IsDeleted eq false &$orderby=Name ";
                    break;
                case "MdmSoVehicleUseSetting":
                    url += "?$filter=IsDeleted eq false &$orderby=Code ";
                    break;
                case "MdmVehicleEngine":
                    url += "?$filter=IsDeleted eq false &$orderby=Name ";
                    break;
                case "MdmVehicleYear":
                    url += "?$filter=IsDeleted eq false &$orderby=Name ";
                    break;
                case "MdmVehicleStyle":
                    url += "?$filter=IsDeleted eq false &$orderby=Name ";
                    break;
                case "MdmVehicleGearbox":
                    url += "?$filter=IsDeleted eq false &$orderby=Name ";
                    break;
                case "MdmVehicleLhdRhd":
                    url += "?$filter=IsDeleted eq false &$orderby=Name ";
                    break;
                case "MdmVehicleDisplacement":
                    url += "?$filter=IsDeleted eq false &$orderby=VehicleDisplacement ";
                    break;
                case "MdmVehicleColor":
                    url += "?$filter=IsDeleted eq false &$orderby=ColorName ";
                    break;
                case "MdmVehicleConfiguration":
                    url += "?$filter=IsDeleted eq false &$orderby=Name ";
                    break;
                case "MdmCurrency":
                    url += "?$filter=IsDeleted eq false &$orderby=CurrencyName ";
                    break;
                case "SysUser":
                    url += "?$filter=Status eq 1 and UserType eq 0 &$orderby=UserName";
                    break;
                case "SysArea":
                    url += "?$filter=Status eq 1 &$orderby=Code";
                    break;
                case "ClmOtherFee":
                    url += "?$filter=Culture eq '" + cm.client.culture + "' and IsDeleted eq false";
                    break;
                default:
                    url += '?$filter=IsDeleted eq false';
            }

            return url;
        },
        getEnum: function (Category) {
            return system.defer(function (dfd) {
                var enumCache = sessionStorage.getItem("Enum" + Category);
                if (enumCache) { //缓存存在
                    dfd.resolve(JSON.parse(enumCache));
                    return;
                }
                pm.getDynamicParameter(Category).done(function (data) {
                    sessionStorage.setItem("Enum" + Category, JSON.stringify(data));
                    dfd.resolve(data);
                }).fail(function (ex) {
                    dfd.reject(ex);
                });
            }).promise();;
        },
        getAllEnum: function () {
            var hasEnumCache = sessionStorage.getItem("EnumAllCache");
            if (hasEnumCache) return;
            var allEnums = pm.getAllDynamicParameter();
            if (allEnums == null) return;
            var oldCategory = '';
            var categoryArr = [];
            for (var i = 0; i < allEnums.length; i++) {
                if (oldCategory != allEnums[i].Category) {
                    if (categoryArr.length > 0) {
                        sessionStorage.setItem("Enum" + oldCategory, JSON.stringify(categoryArr));
                        categoryArr.length = 0;
                    }
                    oldCategory = allEnums[i].Category;
                    categoryArr.push(allEnums[i]);
                }
                else
                    categoryArr.push(allEnums[i]);
            }

            if (categoryArr.length > 0) {
                sessionStorage.setItem("Enum" + oldCategory, JSON.stringify(categoryArr));
                categoryArr.length = 0;
            }
            sessionStorage.setItem("EnumAllCache", "true");
        },
        getConfig: function () {
            var cacheName = "MdmConfig";
            var configCache = sessionStorage.getItem(cacheName);
            var obj = {};
            if (configCache) {
                obj = JSON.parse(configCache);
            }
            else {
                var configArray = s.getSyncDic(cacheName);
                $.each(configArray, function (index, data) {
                    obj[data.Code] = data.Value;
                });
                sessionStorage.setItem(cacheName, JSON.stringify(obj));
            }

            return ko.mapper.fromJS(obj);
        }
    };
    return s;
});