define(['common/utility', 'jsRuntime/resourceManager', 'plugins/router'],
    function (utility, rm, router) {
        var vm = function () {
            var self = this;
            this.rm = rm.global;
            this.errorMsg = ko.observable();
            this.activate = function (id, cxt) {
                self.errorMsg(self.rm.label.UnauthorizedMessage());
            };          
        };
        return vm;
    })