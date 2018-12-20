define(['durandal/app', 'plugins/router', 'common/searchForWebApi', 'jsRuntime/utility', 'jsRuntime/resourceManager',
    'common/dicService', 'jsRuntime/parManager', 'common/user'],
    function (app, router, s, utility, rm, dic, pm, user) {
        var f = function () {
            var self = this;
            this.rm = rm.global;
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
            }
            
        }
        return f;
    });