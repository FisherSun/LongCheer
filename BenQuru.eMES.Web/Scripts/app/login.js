define(['durandal/app', 'plugins/router', 'common/searchForWebApi', 'jsRuntime/utility', 'jsRuntime/resourceManager',
    'common/dicService', 'jsRuntime/parManager', 'common/user'],
    function (app, router, s, utility, rm, dic, pm, user) {
        var f = function () {
            var self = this;
            this.rm = rm.global;
            this.utility = utility;
            this.objectValue = {
                usercode: ko.observable(),
                password: ko.observable(),
            };
            this.Login = function () {
                if (!self.objectValue.usercode()) {
                    app.showMessage('请输入用户名', self.rm.message.alertTitle());
                    return;
                }
                if (!self.objectValue.password()) {
                    app.showMessage('请输入密码', self.rm.message.alertTitle());
                    return;
                }

                $.isLoading();
                utility.httpGet('api/User/CheckUserLogin?usercode=' + self.objectValue.usercode() + '&password=' + self.objectValue.password()).done(function (data) {
                    //app.showMessage(data.message, self.rm.message.alertTitle());
                    //app.showMessage(data, self.rm.message.alertTitle());
                    //app.setRoot('app/shell');
                    app.setRoot('app/demo');
                }).fail(function (data) {
                    app.showMessage(data.message, self.rm.message.alertTitle());
                }).always(function () {
                    $.isLoading('hide');
                });
            }
            
        }
        return f;
    });