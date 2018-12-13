define(['plugins/router', 'common/user'],
    function (router, user) {
        var h = function () {
            var self = this;
            this.user = user;   
        };
        return h;
    });