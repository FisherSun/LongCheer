define(['jsRuntime/resourceManager', 'jsRuntime/utility'], function (rm, utility) {
    var _Settings = {
        isLoading: {
            'position': "overlay",        // right | inside | overlay
            'text': "数据查询中...",      // Text to display next to the loader
            'container': null
        },
        Columns: []
    };
    var _ColumnSetting = {
        Name: null,
        DisplayName: null,
        DataType: null,
        FilterValue: null,
        FilterValue2: null,
        FilterOp: { Name: '等于', Value: 'eq' },
        JoinFilter: false,
        Order: null,
        bOrderable: true,
        FilterSetting: {
            'UI': null,
            'TrueText': '是',
            'FalseText': '否'
        },
        UISetting: {
            Head: { Style: 'width:auto' }
        }
    };

    function PackageSetting(settings) {
        var s = $.extend({}, _Settings, settings);
        ko.utils.arrayForEach(s.Columns, function (item) {
            $.extend(item, $.extend({}, _ColumnSetting, item));
            if (item.FilterSetting.UI == null) {
                if (item.DataType == 'bool')
                    item.FilterSetting.UI = 'radio';
                else if (item.DataType == 'num')
                    item.FilterSetting.UI = 'num';
                else
                    item.FilterSetting.UI = 'input';
            }
        });
        s.Columns = ko.mapper.fromJS(s.Columns);
        return s;
    };
    var f = function (target, orderby, settings, hasPrefix, ClearAfterPageChange) {
        var self = this;
        this.rm = rm.global;
        var orderColumn = null;
        var filterColumn = null;
        this.Settings = PackageSetting(settings);
        this.Target = target;
        this.PrefixUrl = !hasPrefix ? '/odata/db/' : '';
        this.Condition = new Array();
        this.IsPopDialog = self.Settings.IsPopDialog || false;
        this.ClearAfterPageChange = self.Settings.ClearAfterPageChange;
        this.BasicCondition = new Array();
        this.OrderBy = ko.observable(orderby);
        if (!self.Settings.RowCount)
            self.Settings.RowCount = 20;
        this.RowCount = ko.observable(self.Settings.RowCount);
        this.GoTo = ko.observable();
        this.Skip = 0;
        this.TotalCount = ko.observable();
        this.TotalPages = ko.computed(function () {
            var count = Math.ceil(ko.utils.unwrapObservable(this.TotalCount) / ko.utils.unwrapObservable(this.RowCount));
            var a = [];
            for (var i = 1; i <= count; i++) {
                a.push(i);
            }
            return a;
        }, this);
        this.NavigatePages = ko.observableArray([]);
        //this.RowsOfEachPage = ko.observableArray([{ Id: 10 }, { Id: 15 }, { Id: 20 }, { Id: 25 }, { Id: 30 }, { Id: 50 }, { Id: 100 }, { Id: 200 }]);
        this.RowsOfEachPage = ko.observableArray([{ Id: 10 }, { Id: 20 }, { Id: 50 }, { Id: 100 }, { Id: 500 }, { Id: 1000 }]);

        this.MaxNavigatePageCount = ko.observable(5);
        this.CurrentPage = ko.observable(1);
        this.PreCurrentPage = ko.observable(1);//为记录点击详情后记录当前翻页数而添加的属性
        this.Result = ko.observableArray([]);
        this.ColumnJoinFilter = function (item) {
            item.JoinFilter(true);
            self.Filter();
        };
        this.ColumnClearFilter = function (item) {
            item.JoinFilter(false);
            self.Filter();
        };
        this.Filter = function () {
            self.Condition = [];
            ko.utils.arrayForEach(self.Settings.Columns(), function (item) {
                if (item.JoinFilter() && item.FilterValue()) {
                    var filterOp = item.FilterOp().Value();
                    switch (item.DataType()) {
                        case 'string':
                            switch (filterOp) {
                                case 'eq':
                                case 'ne':
                                    self.Condition.push(item.Name() + ' ' + filterOp + " '" + item.FilterValue() + "'");
                                    break;
                                default:
                                    self.Condition.push(filterOp + "(" + item.Name() + ", '" + item.FilterValue() + "')");
                                    break;
                            }
                            break;
                        case 'bool':
                            self.Condition.push(item.Name() + ' eq ' + item.FilterValue());
                            break;
                        case 'num':
                            if (item.FilterOp.Value() == '介于') {
                                self.Condition.push(item.Name() + ' ge ' + item.FilterValue());
                                self.Condition.push(item.Name() + ' le ' + item.FilterValue2());
                            }
                            else {
                                self.Condition.push(item.Name() + ' ' + filterOp + ' ' + ite.FilterValue());
                            }
                            break;
                        default:
                    }
                }
            });
            self.CurrentPage(1);
            self.Search();
        };
        this.CheckFilterValue = function (item) {
            if (!item.JoinFilter())
                item.FilterValue(null);
        };
        this.ClearColumnFilter = function (item) {
            item.JoinFilter(false);
            self.Filter();
        };
        this.SetOrderby = function (item) {
            if (!item.bOrderable()) return;
            if (item == orderColumn) {
                if (item.Order() == 'asc')
                    item.Order('desc');
                else
                    item.Order('asc');
            }
            else {
                if (orderColumn != null)
                    orderColumn.Order(null);
                item.Order('asc');
            }
            orderColumn = item;
            self.OrderBy(item.Name() + ' ' + item.Order());
        };
        this.SelectFilterOp = function (item, op) {
            ko.mapper.fromJS(op, {}, item.FilterOp);
        };
        this.Search = function (includeCount) {
            if (!includeCount) {
                self.CurrentPage(self.PreCurrentPage() ? self.PreCurrentPage() : 1);
                self.PreCurrentPage(1);
            }

            var _container = self.Settings.isLoading.container;
            if (_container) {
                $(_container).isLoading({ text: "Loading", position: "overlay" });
            }
            else {
                $.isLoading(
                              self.Settings.isLoading
                           );
            }
            var appix = new Array();
            self.Condition = self.BasicCondition.concat(self.Condition);
            if (self.Condition.length > 0)
                appix.push('$filter=' + self.Condition.join(' and '));
            var countUrl = self.PrefixUrl + self.Target + '/$count/?' + appix.join('&');
            if (hasPrefix)
                countUrl = self.PrefixUrl + self.Target + '?$inlinecount=allpages' + (appix.length > 0 ? "&" + appix.join('&') : "");
            if (!self.OrderBy()) {
                var oItem = ko.utils.arrayFirst(self.Settings.Columns(), function (item) {
                    return item.Name() != null;
                });
                self.OrderBy(oItem.Name() + ' asc');
            }
            appix.push('$orderby=' + self.OrderBy());
            appix.push('$top=' + self.RowCount());
            if (self.Skip > 0)
                appix.push('$skip=' + self.Skip);
            var qUrl = self.PrefixUrl + self.Target + '?' + appix.join('&');
            if (includeCount !== false) {
                utility.httpGet(countUrl).done(function (data) {
                    //为了支持web api 的分页查询
                    if (hasPrefix)
                        ko.mapper.fromJS(data.Count, {}, self.TotalCount);
                    else
                        ko.mapper.fromJS(data, {}, self.TotalCount);
                    utility.httpGet(qUrl).done(function (data) {
                        //为了支持web api 的分页查询
                        if (hasPrefix)
                            ko.mapper.fromJS(data.Results, {}, self.Result);
                        else
                            ko.mapper.fromJS(data.value, {}, self.Result);
                        if (includeCount != true)
                            self.BuildNavigatePages();
                    }).fail(function (data) {
                        console.debug(JSON.stringify(data));
                    }).always(function () {
                        if (_container) {
                            $(_container).isLoading('hide');
                        }
                        else {
                            $.isLoading('hide');
                        }
                    });
                }).fail(function (data) {
                    console.debug(JSON.stringify(data));
                });
            }
            else {
                utility.httpGet(qUrl).done(function (data) {
                    if (hasPrefix)
                        ko.mapper.fromJS(data.Results, {}, self.Result);
                    else
                        ko.mapper.fromJS(data.value, {}, self.Result);
                    self.BuildNavigatePages();
                }).always(function () {
                    if (_container) {
                        $(_container).isLoading('hide');
                    }
                    else {
                        $.isLoading('hide');
                    }
                });
            }

        };
        this.GoPage = function (p) {
            if (self.ClearAfterPageChange)
                self.ClearAfterPageChange();

            self.CurrentPage(p);

            self.Search(true);
            self.BuildNavigatePages();
            return true;
        };
        this.GoNext = function () {
            var p = self.CurrentPage() + 1;
            if (p <= self.TotalPages().length)
                self.GoPage(p);
            return true;
        };
        this.GoPre = function () {
            var p = self.CurrentPage() - 1;
            if (p > 0)
                self.GoPage(p);
            return true;
        };
        this.GoFirst = function () {
            self.GoPage(1);
            return true;
        };
        this.GoLast = function () {
            self.GoPage(self.TotalPages().length);
            return true;
        };
        this.GoToPage = function () {
            if (self.GoTo() > 0 && self.GoTo() <= self.TotalPages().length) {
                self.CurrentPage(self.GoTo());
                self.Search(true);
                self.BuildNavigatePages(true);
            }
            return true;
        }


        this.HasNext = ko.computed(function () { return self.CurrentPage() < self.TotalPages().length; });
        this.HasPre = ko.computed(function () { return self.CurrentPage() > 1; });
        this.BuildNavigatePages = function (isReset) {
            if (isReset) {
                self.NavigatePages.removeAll();
            }
            var mt = self.TotalPages().length;
            if (mt == 0) {
                self.NavigatePages.removeAll();
                return;
            }
            var v = self.NavigatePages();
            var m = self.MaxNavigatePageCount();
            var c = self.CurrentPage();
            if (v.length == 0) {
                last = mt > m ? m : mt;
                var j = 1;
                if (c > m)  /*为了支持GoTo场景*/ {
                    j = c - m + 1;
                    last = c;
                }
                for (var i = j; i <= last; i++) {
                    self.NavigatePages.push(i);
                }
            }
            else {
                if (c == v[0]) {
                    f1 = parseInt(c - m / 2);
                    if (f1 < 1)
                        f1 = 1;
                    last = f1 + m - 1;
                    if (last > mt)
                        last = mt;
                    self.NavigatePages.removeAll();
                    for (var i = f1; i <= last; i++) {
                        self.NavigatePages.push(i);
                    }
                }
                else if (c == v[v.length - 1]) {
                    last = parseInt(c + m / 2);
                    if (last > mt)
                        last = mt;
                    f1 = last - (m - 1);
                    if (f1 < 1)
                        f1 = 1;
                    self.NavigatePages.removeAll();
                    for (var i = f1; i <= last; i++) {
                        self.NavigatePages.push(i);
                    }
                }
                else if (c < v[0]) {
                    last = mt > m ? m : mt;
                    self.NavigatePages.removeAll();
                    for (var i = c; i <= last; i++) {
                        self.NavigatePages.push(i);
                    }
                }
                else if (c > v[v.length - 1]) {
                    f1 = c - (m - 1);
                    self.NavigatePages.removeAll();
                    for (var i = f1; i <= c; i++) {
                        self.NavigatePages.push(i);
                    }
                }
            }
        }
        this.CurrentPage.subscribe(function (newValue) {
            self.Skip = self.RowCount() * (newValue - 1);
        });
        this.OrderBy.subscribe(function (newValue) {
            self.Search(false);
        });
        this.RowCount.subscribe(function (newValue) {
            if (self.ClearAfterPageChange)
                self.ClearAfterPageChange();
            self.GoTo(null);
            self.Search();
        });
        this.StringFilterOp = ko.observableArray([
             { Name: '等于', Value: 'eq' },
            { Name: '不等于', Value: 'ne' },
            { Name: '开头是', Value: 'startswith' },
            { Name: '结尾是', Value: 'endswith' },
            { Name: '包含', Value: 'contains' },
            { Name: '不包含', Value: 'not contains' }
        ]);
        this.NumFilterOp = ko.observableArray([
             { Name: '等于', Value: 'eq' },
            { Name: '不等于', Value: 'ne' },
            { Name: '大于', Value: 'gt' },
            { Name: '大于或等于', Value: 'ge' },
            { Name: '小于', Value: 'lt' },
            { Name: '小于或等于', Value: 'le' },
            { Name: '介于', Value: '介于' }
        ]);

    };
    return f;
});