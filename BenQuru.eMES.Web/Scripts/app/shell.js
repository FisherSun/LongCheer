define(['durandal/system', 'plugins/router', 'common/user', 'jsRuntime/configManager'],
    function (system, router, user, cm) {
        return {
            router: router,
            user: user,
            showInCRM: ko.observable(cm.client.showInCRM),
            activate: function () {
                var deferred = $.Deferred();
                user.checkUser().done(function () {
                    router.activate().done(function () {
                        deferred.resolve(true);
                    });
                }).fail(function () {
                    //router.map([{ route: 'login', title: '登陆', moduleId: 'app/login' }])
                    //    .mapUnknownRoutes('app/login', 'login');
                    //router.activate().done(function () {
                    //    router.navigate('login');
                    //    deferred.resolve(true);
                    //});
                });
                return deferred.promise();
            }
        };
    });
