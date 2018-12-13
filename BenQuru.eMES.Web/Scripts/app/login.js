define(['durandal/app', 'plugins/router', 'common/searchForWebApi', 'jsRuntime/utility', 'jsRuntime/resourceManager',
    'common/dicService', 'jsRuntime/parManager', 'common/user'],
    function (app, router, s, utility, rm, dic, pm, user) {
        var f = function () {
            var self = this;

            this.Login = function () {
                $.isLoading();

                //setTimeout(function () { }, 3000);


                $.isLoading('hide');
            }
        }
        return f;
    });