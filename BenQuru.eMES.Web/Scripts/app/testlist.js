define(['durandal/app', 'plugins/router', 'common/searchForWebApi', 'jsRuntime/utility', 'jsRuntime/resourceManager',
    'common/dicService', 'jsRuntime/parManager', 'common/user'],
    function (app, router, s, utility, rm, dic, pm, user) {
        var f = function () {
            var self = this;
            this.rm = rm.global;
            this.keyValue = ko.observable("new");
            this.selectedItem = ko.observableArray();
            this.selectAll = ko.observable();
            this.selectAll.subscribe(function (newValue) {
                self.selectedItem.removeAll();
                if (newValue == true) {
                    $.each(self.bodylist.Result(), function (index, data) {
                        self.selectedItem.push(data);
                    });
                }
            });
            //查询条件
            this.objectValue = {
                UserCode: ko.observable(),
                Language: ko.observable(),
                
            }

            this.objectEditValue = {
                UserCode: ko.observable(),
                LanguageA: ko.observable(),
                LanguageB: ko.observable(),
                LanguageC: ko.observable(),
                LanguageD: ko.observable(),
            }

            //查询
            this.Search = function () {
                self.bodylist.Condition = [];
                if (self.objectValue.UserCode())
                    self.bodylist.Condition.push("UserCode=" + self.objectValue.UserCode());
                //if (self.objectValue.Language())
                //    self.bodylist.Condition.push("Language=" + self.objectValue.Language());
                self.bodylist.Search();
            };

            this.tableSettings = {
                Columns: [
                    { Name: 'USERCODE', DisplayName: '用户' },
                    { Name: 'LANGUAGEA', DisplayName: '编程语言1' },
                    { Name: 'LANGUAGEB', DisplayName: '编程语言2' },
                    { Name: 'LANGUAGEC', DisplayName: '编程语言3' },
                    { Name: 'LANGUAGED', DisplayName: '编程语言4' },
                ],
                RowCount: 10
            }

            this.bodylist = new s('api/Test', '', self.tableSettings, true);

            //添加
            this.New = function () {
                self.keyValue("new");
                self.ClearText();
                $("#myModal").modal("show");
            };

            this.ClearText = function () {
                self.objectEditValue.UserCode("");
                self.objectEditValue.LanguageA("");
                self.objectEditValue.LanguageB("");
                self.objectEditValue.LanguageC("");
                self.objectEditValue.LanguageD("");
            }

            this.Save = function () {
                if (!self.objectEditValue.UserCode()) {
                    app.showMessage("请输入用户名", self.rm.message.alertTitle());
                    return;
                }
                if (!self.objectEditValue.LanguageA() && !self.objectEditValue.LanguageB() && !self.objectEditValue.LanguageC() && !self.objectEditValue.LanguageD()) {
                    app.showMessage("请至少输入一种编程语言", self.rm.message.alertTitle());
                    return;
                }
                $.isLoading();
                var d = JSON.stringify(ko.toJS(self.objectEditValue));
                if (self.keyValue() == 'new') {
                    utility.httpPut('/api/Test', d).done(function (data) {
                        app.showMessage(data, self.rm.message.alertTitle());
                        $("#myModal").modal("hide");
                        self.ClearText();
                        self.Search();
                    }).fail(function (data) {
                        //var message = JSON.parse(data.responseText).Message;
                        //app.showMessage(message, self.rm.message.alertTitle());
                        app.showMessage(data.responseText, self.rm.message.alertTitle());
                    }).always(function (data) {
                        $.isLoading('hide');
                    });
                } else {
                    utility.httpPost('/api/Test', d).done(function (data) {
                        app.showMessage(data, self.rm.message.alertTitle());
                        $("#myModal").modal("hide");
                        self.ClearText();
                        self.selectedItem.removeAll();
                        self.Search();
                    }).fail(function (data) {
                        //var message = JSON.parse(data.responseText).Message;
                        //app.showMessage(message, self.rm.message.alertTitle());
                        app.showMessage(data.responseText, self.rm.message.alertTitle());
                    }).always(function (data) {
                        $.isLoading('hide');
                    });
                }
            }

            //删除
            this.Del = function (item) {
                if (!self.selectedItem() || self.selectedItem().length != 1) {
                    app.showMessage(self.rm.message.PleaseChooseOneItem(), self.rm.message.alertTitle());
                    return;
                }
                app.showMessage(self.rm.message.ConfirmDelete() + "?", self.rm.message.confirmationTitle(), [
                    { text: self.rm.button.buttonConfirm(), value: "Yes" }, { text: self.rm.button.buttonCancel(), value: "No" }]).then(function (r) {
                        if (r === 'Yes') {
                            $.isLoading();
                            utility.httpDelete('api/Test/Delete/?UserCode=' + self.selectedItem()[0]['USERCODE']())
                                .done(function (data) {
                                    app.showMessage("删除成功！", self.rm.message.alertTitle());
                                    self.selectedItem.removeAll();
                                    self.Search();
                                }).fail(function (data) {
                                    var message = JSON.parse(data.responseText).Message;
                                    app.showMessage(message, self.rm.message.alertTitle());
                                }).always(function () {
                                    $.isLoading('hide');
                                });
                        }
                    });
            };
            //修改
            this.Edit = function (item) {
                if (!self.selectedItem() || self.selectedItem().length != 1) {//只能选择一条
                    app.showMessage(self.rm.message.PleaseChooseOneItem(), self.rm.message.alertTitle());
                    return;
                }
                if (item) {
                    self.objectEditValue.UserCode(item['USERCODE']());
                    self.objectEditValue.LanguageA(item['LANGUAGEA']());
                    self.objectEditValue.LanguageB(item['LANGUAGEB']());
                    self.objectEditValue.LanguageC(item['LANGUAGEC']());
                    self.objectEditValue.LanguageD(item['LANGUAGED']());
                    $("#myModal").modal("show");
                    self.keyValue("Edit");
                }
            };

            //导出
            this.Export = function () {
                if (self.bodylist.TotalCount() == 0) {
                    app.showMessage(self.rm.message.ExportNoData(),
                        self.rm.message.alertTitle(), [{
                            text: self.rm.button.buttonConfirm(), value: "Yes"
                        }])
                }
                else {
                    $.isLoading();
                    var ExportTitles = [], ExportColumns = [];
                    $.each(self.tableSettings.Columns, function (index, data) {
                        ExportColumns.push(data.Name);
                        ExportTitles.push(data.DisplayName);
                    });

                    var appix = new Array();
                    if (self.bodylist.Condition.length > 0) {
                        for (var i = 0; i < self.bodylist.Condition.length; i++) {
                            appix.push(self.bodylist.Condition[i]);
                        }
                    }

                    appix.push("ExportTimeZone=" + Number(sessionStorage.getItem("curTimezone")));
                    appix.push("ExportTitles=" + ExportTitles.join(","));
                    appix.push("ExportColumns=" + ExportColumns.join(","));

                    var url = '/api/NevSubsidyApplies?isExport=true&' + appix.join('&');
                    window.location.href = url;
                    $.isLoading('hide');
                }
            };

            //功能：选行及选中checkbox
            this.clickTr = function (data, event) {
                if (event.target.type == 'radio' || event.target.type == 'checkbox') {
                    event.preventDefault = false;
                }
                else {
                    if (self.selectedItem.indexOf(data) >= 0) {
                        self.selectedItem.remove(data);
                    }
                    else {
                        self.selectedItem.push(data);
                    }
                }
            };
        }
        return f;
    });