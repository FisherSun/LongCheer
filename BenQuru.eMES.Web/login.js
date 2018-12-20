define(['durandal/app', 'plugins/router', 'common/searchForWebApi', 'jsRuntime/utility', 'jsRuntime/resourceManager',
    'common/dicService', 'jsRuntime/parManager', 'common/user'],
    function (app, router, s, utility, rm, dic, pm, user) {
        var f = function () {
            var self = this;

            usercode: ko.observable();
            password: ko.observable();
            this.Login = function () {
                //app.showMessage('Hello ' + this.usercode() + '! Nice to meet you.', 'Greetings');
                alert("111");
            }
        }
        return f;
    });